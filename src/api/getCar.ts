import { useQuery, UseQueryResult } from "@tanstack/react-query";
import { ICarData } from "./getCarsList";
import { baseURL } from "../consts";

export async function getCarDetails(stockNumber: number) {
  try {
    const carDetails = await fetch(baseURL + "/api/cars/" + stockNumber, {});
    return carDetails.json();
  } catch (e) {
    console.debug(e, " e");
  }
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
      enabled: !!stockNumber,
    }
  );
}
