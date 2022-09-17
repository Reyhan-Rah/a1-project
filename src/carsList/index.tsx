import React from "react";
import { Outlet } from "react-router-dom";
import Card from "./card";

const CarsList = () => {
  return (
    <div className={"w-full p-8 grid md:grid-cols-10 gap-8 md:mx-8"}>
      <div className={"col-span-3"}>
        <p>filter box</p>
      </div>
      <div className={"col-span-7"}>
        <h3 className="mb-3 text-2xl font-bold tracking-tight text-gray-900 dark:text-white">
          Available Cars
        </h3>
        <p className="mb-6 text-2xl font-normal tracking-tight text-gray-900 dark:text-white">
          showing 10 of 100 results
        </p>
        <Card />
      </div>

      <Outlet />
    </div>
  );
};
export default CarsList;
