import { useQuery, UseQueryResult } from "@tanstack/react-query";
import { baseURL } from "../consts";

interface ICarsListParams {
  manufacturer?: string;
  color?: string;
  sort?: string;
  page?: number;
}

export async function fetchCarsList({}: ICarsListParams) {
  try {
    const carsList = await fetch(baseURL + "/api/cars", {});
    return carsList.json();
  } catch (e) {
    console.debug(e, " e");
  }
}

export interface ICarData {
  stockNumber: number;
  manufacturerName: string;
  modelName: string;
  mileage: { number: number; unit: string };
  fuelType: string;
  color: string;
  pictureUrl: string;
}

export interface ICarsListData {
  cars: ICarData[];
  totalPageCount: number;
  totalCarsCount: number;
}

export function useFetchCarsList(
  params: ICarsListParams
): UseQueryResult<ICarsListData, Error> {
  return useQuery<ICarsListData, Error>(
    [
      "cars",
      {
        manufacturer: params?.manufacturer,
        color: params?.color,
        sort: params?.sort,
        page: params.page,
      },
    ],
    () => fetchCarsList(params),
    {
      staleTime: 50000,
    }
  );
}
