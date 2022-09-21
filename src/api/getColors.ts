import { useQuery, UseQueryResult } from "@tanstack/react-query";
import { baseURL } from "../consts";

export async function getColors() {
  const colors = await fetch(baseURL + "/api/colors", {});
  return colors.json();
}

export interface IColorsData {
  colors: string[];
}

export function useGetColors(): UseQueryResult<IColorsData, Error> {
  return useQuery<IColorsData, Error>(["colors"], () => getColors(), {
    staleTime: 50000,
  });
}
