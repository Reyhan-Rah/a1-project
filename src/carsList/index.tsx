import React from "react";
import { Outlet, useSearchParams } from "react-router-dom";
import { Card } from "./card";
import { useGetCarsList } from "../api/getCarsList";
import { Skeleton } from "../components/skeleton";
import { NotFound } from "../404";
import { FiltersBox } from "./filtersBox";
import { Pagination } from "../components/pagination";

export const CarsList = () => {
  let [searchParams] = useSearchParams();
  const {
    data: carsList,
    isLoading: carsListLoading,
    error: carsListError,
  } = useGetCarsList({
    page: parseInt(searchParams.get("page") || "1"),
    color: searchParams.get("color") || "",
    manufacturer: searchParams.get("manufacturer") || "",
  });

  return (
    <div className={"flex flex-1 flex-col lg:flex-row w-full p-8 lg:mx-8"}>
      <div className={"lg:w-1/3 mb-12 lg:mb-0 items-end"}>
        <FiltersBox />
      </div>
      {carsListError && <NotFound />}
      <div className={"lg:w-2/3"}>
        <h3 className="mb-3 text-2xl font-bold tracking-tight text-dark-gray dark:text-white">
          Available Cars
        </h3>
        <p className="mb-6 text-2xl font-normal tracking-tight text-dark-gray dark:text-white">
          showing 10 of 100 results
        </p>
        {carsListLoading ? (
          [0, 1, 2, 3, 4, 5, 6, 7, 8, 9].map(() => <Skeleton />)
        ) : (
          <>
            {carsList?.cars?.map((car) => (
              <Card
                key={car.stockNumber}
                stockNumber={car.stockNumber}
                manufacturerName={car.manufacturerName}
                modelName={car.modelName}
                mileage={car.mileage}
                fuelType={car.fuelType}
                color={car.color}
                pictureUrl={car.pictureUrl}
              />
            ))}
            {carsList?.totalPageCount && (
              <Pagination totalPageCount={carsList.totalPageCount} />
            )}
          </>
        )}
      </div>
      <Outlet />
    </div>
  );
};
