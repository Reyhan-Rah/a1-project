import React from "react";
import logo from "../logo-auto1.svg";

const CarDetails = () => {
  return (
    <div className="flex flex-col flex-1 bg-white shadow-md dark:bg-gray-800">
      <img className=" bg-light-gray w-full h-auto" src={logo} alt="" />
      <div className=" md:flex md:justify-between mt-8 mx-8 md:mx-12 lg:mx-24">
        <div className={"w-full md:w-1/2"}>
          <h3 className="mb-2 text-[2rem] font-bold tracking-tight text-gray-900 dark:text-white">
            Car name and model
          </h3>
          <h5 className="mb-2 text-lg tracking-tight text-gray-900 dark:text-white">
            Stock #12345 - 152.256 KM - Petrol - Yellow
          </h5>
          <p className="mb-3 font-normal text-gray-700 dark:text-gray-400">
            Description Description Description Description Description
            Description Description Description Description Description
            Description Description Description Description Description
            Description Description Description Description Description
          </p>
        </div>
        <div className="px-2 py-8 md:p-8 max-w-sm bg-white mx-auto md:mx-8 mt-8 md:mt-0 border border-gray-200 shadow-md dark:bg-gray-800 dark:border-gray-700">
          <p className="mb-3 font-normal text-gray-500 dark:text-gray-400">
            If you like this car, click the button and save it in your
            collection of favorite items.
          </p>
          <div className={"flex justify-center md:justify-end"}>
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

export default CarDetails;
