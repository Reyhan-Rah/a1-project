import React from "react";
import logo from "../logo-auto1.svg";

export const NotFound = () => {
  return (
    <div className="flex flex-col items-center mx-auto p-8">
      <img
        className="mt-8"
        src={logo}
        width={138}
        height={28}
        alt="Auto1 logo"
      />
      <h1 className="text-[2rem] font-bold py-8 dark:text-gray-400">
        404 - Not Found
      </h1>
      <p className="text-lg dark:text-gray-400">
        Sorry,the page you are looking for does not exist.
      </p>
      <p className="text-lg pt-2 dark:text-gray-400">
        you can always go back to the{" "}
        <a href={"/"} className={"text-[#EA7F28] hover:underline"}>
          homepage
        </a>
        .
      </p>
    </div>
  );
};
