import React from "react";
import logo from "./logo-a1.png";

const NotFound = () => {
  return (
    <div className="container flex flex-col justify-center items-center mx-auto">
      <img
        className="mt-8"
        src={logo}
        width={138}
        height={28}
        alt="Auto1 logo"
      />
      <h1 className="text-[2rem] font-bold py-8">404 - Not Found</h1>
      <p className="text-lg">
        Sorry,the page you are looking for does not exist.
      </p>
      <p className="text-lg pt-2">
        you can always go back to the{" "}
        <a href={"/"} className={"text-[#EA7F28] hover:underline"}>
          homepage
        </a>
        .
      </p>
    </div>
  );
};

export default NotFound;
