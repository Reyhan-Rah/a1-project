import { useQuery, UseQueryResult } from "@tanstack/react-query";
import { baseURL } from "../consts";

export async function getManufacturers() {
  const manufacturers = await fetch(baseURL + "/api/manufacturers", {});
  return manufacturers.json();
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
