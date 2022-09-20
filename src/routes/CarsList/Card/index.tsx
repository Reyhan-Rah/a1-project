import React from "react";
import { ICarData } from "../../../api/getCarsList";

export const Card = ({
  stockNumber,
  manufacturerName,
  modelName,
  mileage,
  fuelType,
  color,
  pictureUrl,
}: ICarData) => {
  return (
    <div className="flex flex-col items-center bg-white border md:flex-row hover:bg-gray-100 dark:border-gray-700 dark:bg-gray-800 dark:hover:bg-gray-700 my-3">
      <img
        className="w-full h-auto md:h-36 md:w-48 md:m-3 bg-light-gray"
        src={pictureUrl}
        alt={modelName}
      />
      <div className="p-4 ">
        <h5 className="mb-2 text-2xl font-bold tracking-tight text-dark-gray dark:text-white">
          {manufacturerName} {modelName}
        </h5>
        <p className="mb-3 font-normal text-dark-gray dark:text-gray-400">
          #{stockNumber}
          {" - "}
          {mileage.number} {mileage.unit}
          {" - "}
          {fuelType}
          {"- "}
          {color}
        </p>

        <a
          href={`/${stockNumber}`}
          className={"text-light-orange hover:text-dark-orange hover:underline"}
        >
          View details
        </a>
      </div>
    </div>
  );
};
