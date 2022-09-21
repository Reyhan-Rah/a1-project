import { useState } from "react";

function getStorageValue(key: string, defaultValue: string) {
  // getting stored value
  const saved = localStorage.getItem(key) || "";
  if (saved) {
    return JSON.parse(saved);
  }
  return defaultValue;
}

export const useLocalStorage = (key: string, defaultValue: string) => {
  const [value, setValue] = useState(() => {
    return getStorageValue(key, defaultValue);
  });

  const setValueInLocalStorage = (value: string | Record<string, string>) => {
    localStorage.setItem(key, JSON.stringify(value));
    setValue(value);
  };

  return [value, setValueInLocalStorage];
};
