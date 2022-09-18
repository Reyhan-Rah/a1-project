import React from "react";
import useFetchCarDetails from "../api/fetchCar";
import { Loading } from "../components/loading";
import { useParams } from "react-router-dom";
import { NotFound } from "../404";

export const CarDetails = () => {
  const { stockNumber = "" } = useParams();

  const {
    data: carData,
    isLoading: carLoading,
    error: carError,
  } = useFetchCarDetails(parseInt(stockNumber));

  if (carLoading) {
    return <Loading />;
  }
  if (carError) {
    return <NotFound />;
  }

  return (
    <div className="flex flex-col flex-1 bg-white shadow-md dark:bg-gray-800">
      <div className="h-96 w-full bg-light-gray justify-center items-center flex">
        <img
          className="h-96 w-auto bg-light-gray "
          src={carData?.car?.pictureUrl}
          alt={carData?.car?.modelName}
        />
      </div>
      <div className="lg:flex lg:justify-between mt-8 mx-8 lg:mx-12 lg:mx-24">
        <div className={"w-full lg:w-1/2"}>
          <h3 className="mb-2 text-[2rem] font-bold tracking-tight text-dark-gray dark:text-white">
            {carData?.car?.manufacturerName} {carData?.car?.modelName}
          </h3>
          <h5 className="mb-2 text-lg tracking-tight text-dark-gray dark:text-white">
            #{carData?.car?.stockNumber}
            {" - "}
            {carData?.car?.mileage.number} {carData?.car?.mileage.unit}
            {" - "}
            {carData?.car?.fuelType}
            {"- "}
            {carData?.car?.color}
          </h5>
          <p className="mb-3 font-normal text-dark-gray dark:text-gray-400">
            This car is currently available and can be delivered as soon as
            tomorrow morning. Please be aware that delivery times shown in this
            page are not definitive and may change due to bad weather
            conditions.
          </p>
        </div>
        <div className="px-2 py-8 lg:p-8 max-w-sm bg-white mx-auto lg:mx-8 mt-8 lg:mt-0 border border-gray-200 shadow-md dark:bg-gray-800 dark:border-dark-gray">
          <p className="mb-3 font-normal text-dark-gray dark:text-gray-400">
            If you like this car, click the button and save it in your
            collection of favorite items.
          </p>
          <div className={"flex justify-center lg:justify-end"}>
            <button
              onClick={() => console.log("save car")}
              className="items-center justify-center w-32 h-8 text-sm font-medium text-center text-white bg-light-orange rounded-sm hover:bg-dark-orange focus:bg-dark-orange"
            >
              Save
            </button>
          </div>
        </div>
      </div>
    </div>
  );
};
