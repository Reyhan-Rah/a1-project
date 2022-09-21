import { useState } from "react";
import { ReactComponent as LightIcon } from "./LightIcon.svg";
import { ReactComponent as DarkIcon } from "./DarkIcon.svg";
function setTheme(themeName: string) {
  localStorage.setItem("color-theme", themeName);
  document.documentElement.className = themeName;
}

export const DarkModeButton = () => {
  const theme = localStorage.getItem("color-theme");
  const [togClass, setTogClass] = useState(theme);
  const handleOnClick = () => {
    if (
      localStorage.getItem("color-theme") === "dark" ||
      (!("color-theme" in localStorage) &&
        window.matchMedia("(prefers-color-scheme: dark)").matches)
    ) {
      setTheme("light");
      setTogClass("light");
    } else {
      setTheme("dark");
      setTogClass("dark");
    }
  };

  return (
    <button
      id="theme-toggle"
      type="button"
      className="text-gray-500 dark:text-gray-400 hover:bg-gray-100 dark:hover:bg-gray-700 focus:outline-none focus:ring-4 focus:ring-gray-200 dark:focus:ring-gray-700 rounded-lg text-sm p-2.5"
      onClick={handleOnClick}
    >
      {togClass === "light" ? (
        <LightIcon className="w-5 h-5" />
      ) : (
        <DarkIcon className="w-5 h-5" />
      )}
    </button>
  );
};
