import React, { ChangeEventHandler } from "react";

interface ISelect {
  label: string;
  options: string[];
  selectedOption: string;
  onChange?: ChangeEventHandler<HTMLSelectElement>;
}
export const Select = ({
  label,
  options,
  selectedOption,
  onChange,
}: ISelect) => {
  return (
    <div className={"relative mb-3"}>
      <label
        htmlFor="countries"
        className="block mb-2 text-sm font-medium text-dark-gray dark:text-gray-400"
      >
        {label}
      </label>
      <select
        id="countries"
        className="relative bg-gray-50 border border-gray-300 text-dark-gray text-sm focus:ring-blue-500 focus:border-blue-500 block w-full p-2.5 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500"
        onChange={onChange}
      >
        <option selected value="">
          {selectedOption}
        </option>
        {options.map((item) => {
          return <option value={item}>{item}</option>;
        })}
      </select>
    </div>
  );
};
