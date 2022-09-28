import { FormEvent } from "react";
import { useSearchParams } from "react-router-dom";
import { Select } from "../../../components/Select";
import { useGetColors } from "../../../api/getColors";
import { useGetManufacturers } from "../../../api/getManufacturers";
import { Loading } from "../../../components/Loading";
import { NotFound } from "../../404";

export const FiltersBox = () => {
  const [searchParams, setSearchParams] = useSearchParams();
  const {
    data: colors,
    isLoading: colorsLoading,
    error: colorsError,
  } = useGetColors();
  const {
    data: manufacturersData,
    isLoading: manufacturersLoading,
    error: manufacturersError,
  } = useGetManufacturers();
  if (colorsLoading || manufacturersLoading) {
    return (
      <div className="px-2 py-8 lg:p-8 max-w-lg bg-white mx-auto lg:mx-8 mt-8 lg:mt-0 border border-gray-200 shadow dark:bg-gray-800 dark:border-gray-700">
        <Loading />
        <div className={"h-28"} />
      </div>
    );
  }
  if (colorsError || manufacturersError) {
    return <NotFound />;
  }
  const manufacturers = manufacturersData.manufacturers.map((item) => {
    return item.name;
  });

  function onSubmit(event: FormEvent<HTMLFormElement>) {
    event.preventDefault();
    const formData = new FormData(event.currentTarget);

    const convertedFormEntries = Array.from(formData, ([key, value]) => [
      key,
      // FormData may contain File while URLSearchParams only accepts string.
      // https://github.com/microsoft/TypeScript/issues/30584#issuecomment-890515551
      typeof value === "string" ? value : value.name,
    ]).filter(([, value]) => !!value);

    const newSearchParams = new URLSearchParams(convertedFormEntries);
    setSearchParams(newSearchParams);
  }

  return (
    <form
      onSubmit={onSubmit}
      className="px-2 py-8 lg:p-8 max-w-lg bg-white mx-auto lg:mx-8 mt-8 lg:mt-0 border border-gray-200 shadow dark:bg-gray-800 dark:border-gray-700"
    >
      <Select
        name={"color"}
        label={"Color"}
        options={colors.colors}
        noSelectionTitle={"All car colors"}
        defaultValue={searchParams.get("color") || ""}
      />
      <Select
        name={"manufacturer"}
        label={"Manufacturer"}
        options={manufacturers}
        noSelectionTitle={"All manufacturers"}
        defaultValue={searchParams.get("manufacturer") || ""}
      />
      <div className={"flex justify-center lg:justify-end"}>
        <button
          type="submit"
          disabled={colorsLoading || manufacturersLoading}
          className="items-center justify-center w-32 h-8 text-sm font-medium text-center text-white bg-light-orange rounded-sm hover:bg-dark-orange focus:bg-dark-orange mt-3"
        >
          Filter
        </button>
      </div>
    </form>
  );
};
