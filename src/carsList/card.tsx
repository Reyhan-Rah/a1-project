import React from "react";
import logo from "../logo-a1.png";

type cardProps = {
  stockNumber: number;
  manufacturerName: string;
  modelName: string;
  mileage: { number: number; unit: string };
  fuelType: string;
  color: string;
  pictureUrl: string;
};
const Card = ({
  stockNumber,
  manufacturerName,
  modelName,
  mileage,
  fuelType,
  color,
  pictureUrl,
}: cardProps) => {
  return (
    <div className="flex flex-col items-center bg-white border md:flex-row  hover:bg-gray-100 dark:border-gray-700 dark:bg-gray-800 dark:hover:bg-gray-700 my-3">
      <img
        className="object-contain w-full h-auto md:h-32 md:w-48 md:rounded-none md:m-3 bg-light-gray"
        src={pictureUrl}
        alt="car picture"
      />
      <div className="flex flex-col justify-between p-4 leading-normal">
        <h5 className="mb-2 text-2xl font-bold tracking-tight text-gray-900 dark:text-white">
          {manufacturerName} {modelName}
        </h5>
        <p className="mb-3 font-normal text-gray-700 dark:text-gray-400">
          #{stockNumber}
          {" - "}
          {mileage.number} {mileage.unit}
          {" - "}
          {fuelType}
          {"- "}
          {color}
        </p>
        <a href={`/${stockNumber}`}>
          <p className={"text-[#EA7F28] hover:underline"}>View details</p>
        </a>
      </div>
    </div>
  );
};

export default Card;
