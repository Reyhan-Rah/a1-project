import React from "react";

export const Skeleton = () => {
  return (
    <div
      role="status"
      className="animate-pulse flex flex-col md:flex-row md:items-center border dark:border-gray-700 dark:bg-gray-800 my-3"
    >
      <div className="w-full h-48 md:h-36 md:w-48 md:m-3 bg-light-gray" />
      <div className="flex flex-col flex-1 h-full justify-between p-4">
        <div className="h-8 bg-light-gray  dark:bg-gray-700 w-72 mb-4" />
        <div className="h-4 bg-light-gray dark:bg-gray-700 w-72 mb-2.5" />
        <div className="h-4 bg-light-gray dark:bg-gray-700 w-32 mb-2.5" />
      </div>
      <span className="sr-only">Loading...</span>
    </div>
  );
};
