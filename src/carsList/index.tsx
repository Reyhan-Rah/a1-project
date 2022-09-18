import React from "react";
import { Outlet } from "react-router-dom";
import { Card } from "./card";
import { Select } from "../components/select";
import { useFetchCarsList } from "../api/fetchCarsList";
import { Loading } from "../components/loading";

export const CarsList = () => {
  const {
    data: carsList,
    isLoading: carsListLoading,
    error: carsListError,
  } = useFetchCarsList({ page: 1 });

  return (
    <div className={"w-full p-8 grid md:grid-cols-10 gap-8 md:mx-8"}>
      <div className={"col-span-3"}>
        <div className="px-2 py-8 md:p-8 max-w-sm bg-white mx-auto md:mx-8 mt-8 md:mt-0 border border-gray-200 shadow-md dark:bg-gray-800 dark:border-gray-700">
          <Select />
          <Select />
          <div className={"flex justify-center md:justify-end"}>
            <button
              onClick={() => console.log("save car")}
              className="items-center justify-center w-32 h-8 text-sm font-medium text-center text-white bg-light-orange rounded-sm hover:bg-dark-orange focus:bg-dark-orange mt-3"
            >
              Save
            </button>
          </div>
        </div>
      </div>

      <div className={"col-span-7"}>
        <h3 className="mb-3 text-2xl font-bold tracking-tight text-dark-gray dark:text-white">
          Available Cars
        </h3>
        {carsListLoading ? (
          <Loading />
        ) : carsListError ? (
          <p className="text-2xl font-bold text-dark-gray dark:text-white">
            sth went wrong!
          </p>
        ) : (
          <>
            <p className="mb-6 text-2xl font-normal tracking-tight text-dark-gray dark:text-white">
              showing 10 of 100 results
            </p>
            {carsList?.cars?.map(
              (car) =>
                car && (
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
                )
            )}
          </>
        )}
      </div>
      <Outlet />
    </div>
  );
};
