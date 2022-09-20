import { HTMLProps } from "react";

interface ISelect extends HTMLProps<HTMLSelectElement> {
  noSelectionTitle: string;
  options: string[];
}
export const Select = ({
  name,
  label,
  options,
  noSelectionTitle,
  ...props
}: ISelect) => {
  return (
    <div className={"relative mb-3"}>
      <label
        htmlFor={name}
        className="block mb-2 text-sm font-medium text-dark-gray dark:text-gray-400"
      >
        {label}
      </label>
      <select
        name={name}
        id={name}
        {...props}
        className="relative bg-gray-50 border border-gray-300 text-dark-gray text-sm focus:ring-blue-500 focus:border-blue-500 block w-full p-2.5 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500"
      >
        <option value="">{noSelectionTitle}</option>
        {options.map((item, index) => {
          return (
            <option value={item} key={index}>
              {item}
            </option>
          );
        })}
      </select>
    </div>
  );
};
