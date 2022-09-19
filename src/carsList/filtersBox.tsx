import React, { useState } from "react";
import { Select } from "../components/select";
import { useGetColors } from "../api/getColors";
import { useGetManufacturers } from "../api/getManufacturers";
import { Loading } from "../components/loading";
import { NotFound } from "../404";

export const FiltersBox = () => {
  const [color, setColor] = useState("");
  const [manufacturer, setManufacturer] = useState("");
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
  const manufacturers = manufacturersData?.manufacturers?.map((item) => {
    return item.name;
  });

  return (
    <div className="px-2 py-8 lg:p-8 max-w-lg bg-white mx-auto lg:mx-8 mt-8 lg:mt-0 border border-gray-200 shadow dark:bg-gray-800 dark:border-gray-700">
      <Select
        label={"Color"}
        options={colors?.colors}
        selectedOption={"All car colors"}
        onChange={(e) => {
          setColor(e.target.value);
        }}
      />
      <Select
        label={"Manufacturer"}
        options={manufacturers}
        selectedOption={"All manufacturers"}
        onChange={(e) => {
          setManufacturer(e.target.value);
        }}
      />
      <div className={"flex justify-center lg:justify-end"}>
        <button
          onClick={() => console.log(color, manufacturer)}
          disabled={colorsLoading || manufacturersLoading}
          className="items-center justify-center w-32 h-8 text-sm font-medium text-center text-white bg-light-orange rounded-sm hover:bg-dark-orange focus:bg-dark-orange mt-3"
        >
          Filter
        </button>
      </div>
    </div>
  );
};
