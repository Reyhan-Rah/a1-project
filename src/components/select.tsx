import React from "react";

export const Select = () => {
  return (
    <div className={"relative mb-3"}>
      <label
        htmlFor="countries"
        className="block mb-2 text-sm font-medium text-gray-900 dark:text-gray-400"
      >
        Color
      </label>
      <select
        id="countries"
        className="relative bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-full p-2.5 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500"
      >
        <option selected>Choose a color</option>
        <option value="black">United States</option>
        <option value="white">Canada</option>
        <option value="red">France</option>
        <option value="silver">Germany</option>
      </select>
    </div>
  );
};
