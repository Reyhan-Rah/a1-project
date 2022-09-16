import React from "react";

const Footer = () => {
  return (
    <footer className="absolute bottom-0 w-full">
      <hr />
      <div className="flex w-full justify-center p-4 bg-white shadow items-center md:p-6 dark:bg-gray-800 min-h-20">
        <span className="text-sm text-gray-500 sm:text-center dark:text-gray-400">
          ©{" "}
          <a href="https://Auto1.com/" className="hover:underline">
            AUTO1 Group
          </a>{" "}
          2018
        </span>
      </div>
    </footer>
  );
};
export default Footer;
