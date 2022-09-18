import { useQuery, UseQueryResult } from "@tanstack/react-query";
import { ICarData } from "./fetchCarsList";
import { baseURL } from "../consts";

export async function fetchCarDetails(stockNumber: number) {
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

export default function useFetchCarDetails(
  stockNumber: number
): UseQueryResult<ICarDetailsData, Error> {
  return useQuery<ICarDetailsData, Error>(
    ["A car", stockNumber],
    () => fetchCarDetails(stockNumber),
    {
      staleTime: 50000,
      enabled: !!stockNumber,
    }
  );
}
