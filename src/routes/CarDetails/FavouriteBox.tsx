import { useLocalStorage } from "../../hooks/useLocalStorage";

export const FavouriteBox = ({ stockNumber }: { stockNumber: string }) => {
  const [isFavourite, setIsFavourite] = useLocalStorage(stockNumber, "");

  return (
    <div className="px-3 py-6 lg:px-6 max-w-sm bg-white mx-auto lg:mx-6 mt-6 lg:mt-0 border border-gray-200 shadow dark:bg-gray-800 dark:border-dark-gray">
      <p className="mb-3 font-normal text-dark-gray dark:text-gray-400">
        {isFavourite
          ? "This car is already added to your favourites, you can remove it from your favorites."
          : "If you like this car, click the button and save it in your collection of favorite items."}
      </p>
      <div className={"flex justify-end mt-6 rounded-sm"}>
        <button
          onClick={() => setIsFavourite(!isFavourite)}
          className="items-center justify-center w-32 h-8 text-sm font-medium text-center text-white bg-light-orange rounded-sm hover:bg-dark-orange focus:bg-dark-orange"
        >
          {isFavourite ? "Delete" : "Save"}
        </button>
      </div>
    </div>
  );
};
