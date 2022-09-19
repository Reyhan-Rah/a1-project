import { useQuery, UseQueryResult } from "@tanstack/react-query";
import { baseURL } from "../consts";

export async function getManufacturers() {
  try {
    const manufacturers = await fetch(baseURL + "/api/manufacturers", {});
    return manufacturers.json();
  } catch (e) {
    console.debug(e, " e");
  }
}

interface IManufacturer {
  name: string;
  models: [
    {
      name: string;
    }
  ];
}

export interface IManufacturersData {
  manufacturers: IManufacturer[];
}

export function useGetManufacturers(): UseQueryResult<
  IManufacturersData,
  Error
> {
  return useQuery<IManufacturersData, Error>(
    ["manufacturers"],
    () => getManufacturers(),
    {
      staleTime: 50000,
    }
  );
}
