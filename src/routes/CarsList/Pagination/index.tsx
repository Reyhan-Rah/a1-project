import { useSearchParams } from "react-router-dom";

interface IPagination {
  totalPageCount: number;
}

export const Pagination = ({ totalPageCount }: IPagination) => {
  const [searchParams, setSearchParams] = useSearchParams();
  let currentPage = parseInt(searchParams.get("page") || "1");

  return (
    <div className={"inline-flex w-full items-center justify-center "}>
      <button
        onClick={() => {
          const newSearchParams = new URLSearchParams(searchParams);
          newSearchParams.set("page", "1");
          setSearchParams(newSearchParams);
        }}
        className="inline-flex items-center py-2 px-4 text-sm font-medium text-light-orange bg-white hover:text-dark-orange hover:underline dark:text-gray-400 dark:hover:text-white"
      >
        First
      </button>
      <button
        onClick={() => {
          const newSearchParams = new URLSearchParams(searchParams);
          newSearchParams.set("page", String(Math.max(currentPage - 1, 0)));
          setSearchParams(newSearchParams);
        }}
        disabled={currentPage === 1}
        className="inline-flex items-center py-2 px-4 text-sm font-medium text-light-orange bg-white hover:text-dark-orange hover:underline dark:text-gray-400 dark:hover:text-white disabled:text-dark-gray dark:disabled:text-light-gray"
      >
        Previous
      </button>
      <p
        className={
          "inline-flex items-center py-2 px-4 text-sm font-medium text-dark-gray dark:text-light-gray"
        }
      >
        Page {currentPage} of {totalPageCount}
      </p>
      <button
        onClick={() => {
          const newSearchParams = new URLSearchParams(searchParams);
          newSearchParams.set(
            "page",
            String(Math.min(currentPage + 1, totalPageCount))
          );
          setSearchParams(newSearchParams);
        }}
        className="inline-flex items-center py-2 px-4 text-sm font-medium text-light-orange bg-white hover:text-dark-orange hover:underline dark:text-gray-400 dark:hover:text-white disabled:text-dark-gray dark:disabled:text-light-gray"
        disabled={currentPage === totalPageCount}
      >
        Next
      </button>
      <button
        onClick={() => {
          const newSearchParams = new URLSearchParams(searchParams);
          newSearchParams.set("page", String(totalPageCount));
          setSearchParams(newSearchParams);
        }}
        className="inline-flex items-center py-2 px-4 text-sm font-medium text-light-orange bg-white hover:text-dark-orange hover:underline dark:text-gray-400 dark:hover:text-white"
      >
        Last
      </button>
    </div>
  );
};
