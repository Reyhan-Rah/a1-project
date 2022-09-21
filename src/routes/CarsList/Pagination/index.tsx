import { useSearchParams } from "react-router-dom";

interface IPagination {
  totalPageCount: number;
}

const usePaginationClick = () => {
  const [searchParams, setSearchParams] = useSearchParams();
  let currentPage = parseInt(searchParams.get("page") || "1");
  const onClick = (page: number) => {
    const newSearchParams = new URLSearchParams(searchParams);
    newSearchParams.set("page", String(page));
    setSearchParams(newSearchParams);
  };
  return { currentPage, onClick };
};

export const Pagination = ({ totalPageCount }: IPagination) => {
  const { currentPage, onClick } = usePaginationClick();
  return (
    <div
      className={
        "inline-flex w-full items-center justify-center p-1 lg:p-3 gap-3 lg:gap-6"
      }
    >
      <button
        onClick={() => onClick(1)}
        disabled={currentPage === 1}
        className="inline-flex items-center text-sm font-medium text-light-orange hover:text-dark-orange hover:underline dark:text-light-gray dark:hover:text-white disabled:text-dark-gray dark:disabled:text-gray-400 disabled:no-underline"
      >
        First
      </button>
      <button
        onClick={() => onClick(Math.max(currentPage - 1, 0))}
        disabled={currentPage === 1}
        className="inline-flex items-center text-sm font-medium text-light-orange hover:text-dark-orange hover:underline dark:text-light-gray dark:hover:text-white disabled:text-dark-gray dark:disabled:text-gray-400 disabled:no-underline"
      >
        Previous
      </button>
      <p
        className={
          "inline-flex items-center text-sm font-medium text-dark-gray dark:text-light-gray"
        }
      >
        Page {currentPage} of {totalPageCount}
      </p>
      <button
        onClick={() => onClick(Math.min(currentPage + 1, totalPageCount))}
        disabled={currentPage === totalPageCount}
        className="inline-flex items-center text-sm font-medium text-light-orange hover:text-dark-orange hover:underline dark:text-light-gray dark:hover:text-white disabled:text-dark-gray dark:disabled:text-gray-400 disabled:no-underline"
      >
        Next
      </button>
      <button
        onClick={() => onClick(totalPageCount)}
        disabled={currentPage === totalPageCount}
        className="inline-flex items-center text-sm font-medium text-light-orange hover:text-dark-orange hover:underline dark:text-light-gray dark:hover:text-white disabled:text-dark-gray dark:disabled:text-gray-400 disabled:no-underline"
      >
        Last
      </button>
    </div>
  );
};
