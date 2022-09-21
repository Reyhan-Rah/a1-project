import { useQuery, UseQueryResult } from "@tanstack/react-query";
import { ICarData } from "./getCarsList";
import { baseURL } from "../consts";

export async function getCarDetails(stockNumber: number) {
  const carDetails = await fetch(baseURL + "/api/cars/" + stockNumber, {});
  return carDetails.json();
}

interface ICarDetailsData {
  car: ICarData;
}

export default function useGetCarDetails(
  stockNumber: number
): UseQueryResult<ICarDetailsData, Error> {
  return useQuery<ICarDetailsData, Error>(
    ["A car", stockNumber],
    () => getCarDetails(stockNumber),
    {
      staleTime: 50000,
    }
  );
}
