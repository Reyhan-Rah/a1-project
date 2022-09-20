import React from "react";
import logo from "../../logo-auto1.svg";

export const Sell = () => {
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
        Sell Page
      </h1>
      <p className="text-lg dark:text-gray-400">
        The Sell page is not ready yet.
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
