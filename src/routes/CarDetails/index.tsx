import useGetCarDetails from "../../api/getCar";
import { Loading } from "../../components/Loading";
import { useParams } from "react-router-dom";
import { NotFound } from "../404";
import { FavouriteBox } from "./FavouriteBox";

export const CarDetails = () => {
  const { stockNumber = "" } = useParams();
  const {
    data: carData,
    isLoading: carLoading,
    error: carError,
  } = useGetCarDetails(parseInt(stockNumber));

  if (carLoading) {
    return <Loading />;
  }
  if (carError) {
    return <NotFound />;
  }
  const { car } = carData;

  return (
    <div className="flex flex-col flex-1 bg-white shadow dark:bg-gray-800 pb-6">
      <div className="h-96 w-full bg-light-gray justify-center items-center flex">
        <img
          className="h-96 w-auto bg-light-gray "
          src={car.pictureUrl}
          alt={car.modelName}
        />
      </div>
      <div className="lg:flex lg:justify-between mt-6 mx-6 lg:mx-24">
        <div className={"w-full lg:w-1/2"}>
          <h3 className="mb-2 text-[2rem] font-bold tracking-tight text-dark-gray dark:text-white">
            {car.manufacturerName} {car.modelName}
          </h3>
          <h5 className="mb-2 text-lg tracking-tight text-dark-gray dark:text-white">
            #{car.stockNumber}
            {" - "}
            {car.mileage.number} {car.mileage.unit}
            {" - "}
            {car.fuelType}
            {"- "}
            {car.color}
          </h5>
          <p className="mb-3 font-normal text-dark-gray dark:text-gray-400">
            This car is currently available and can be delivered as soon as
            tomorrow morning. Please be aware that delivery times shown in this
            page are not definitive and may change due to bad weather
            conditions.
          </p>
        </div>
        <FavouriteBox stockNumber={stockNumber} />
      </div>
    </div>
  );
};
