import React from "react";
import { Outlet } from "react-router-dom";
import Card from "./card";
import { Select } from "../components/select";

export const CarsList = () => {
  const carsList = [
    {
      stockNumber: 41400,
      manufacturerName: "Fiat",
      modelName: "Marea",
      mileage: {
        number: 100141,
        unit: "km",
      },
      fuelType: "Diesel",
      color: "white",
      pictureUrl: "http://localhost:3001/car.svg",
    },
    {
      stockNumber: 51400,
      manufacturerName: "Fiat2",
      modelName: "Marea2",
      mileage: {
        number: 200,
        unit: "km",
      },
      fuelType: "Petrol",
      color: "black",
      pictureUrl: "http://localhost:3001/car.svg",
    },
  ];
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
        <h3 className="mb-3 text-2xl font-bold tracking-tight text-gray-900 dark:text-white">
          Available Cars
        </h3>
        <p className="mb-6 text-2xl font-normal tracking-tight text-gray-900 dark:text-white">
          showing 10 of 100 results
        </p>
        {carsList?.map(
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
      </div>
      <Outlet />
    </div>
  );
};
