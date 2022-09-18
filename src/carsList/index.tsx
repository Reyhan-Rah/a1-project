import React from "react";
import { Outlet } from "react-router-dom";
import { Card } from "./card";
import { Select } from "../components/select";
import { useFetchCarsList } from "../api/fetchCarsList";
import { Skeleton } from "../components/skeleton";
import { NotFound } from "../404";

export const CarsList = () => {
  const {
    data: carsList,
    isLoading: carsListLoading,
    error: carsListError,
  } = useFetchCarsList({ page: 1 });

  return (
    <div className={"flex flex-1 flex-col lg:flex-row w-full p-8 lg:mx-8"}>
      <div className={"lg:w-1/3 mb-12 lg:mb-0 items-end"}>
        <div className="px-2 py-8 lg:p-8 max-w-lg bg-white mx-auto lg:mx-8 mt-8 lg:mt-0 border border-gray-200 shadow-md dark:bg-gray-800 dark:border-gray-700">
          <Select />
          <Select />
          <div className={"flex justify-center lg:justify-end"}>
            <button
              onClick={() => console.log("save car")}
              className="items-center justify-center w-32 h-8 text-sm font-medium text-center text-white bg-light-orange rounded-sm hover:bg-dark-orange focus:bg-dark-orange mt-3"
            >
              Save
            </button>
          </div>
        </div>
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
          <Skeleton />
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
          </>
        )}
      </div>
      <Outlet />
    </div>
  );
};
