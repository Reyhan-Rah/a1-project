import React from "react";
import { Route, Routes } from "react-router-dom";
import CarsList from "./carsList";
import CarDetails from "./carDetails";
import NavBar from "./navbar";
import NotFound from "./404";

function App() {
  return (
    <div className="flex flex-col flex-1 min-h-screen h-full relative">
      <header className="md:h-20">
        <NavBar />
      </header>
      <hr />
      <main className="p-12">
        <Routes>
          <Route path={"/"} element={<CarsList />} />
          <Route path={"/car"} element={<CarDetails />} />
          <Route path={"*"} element={<NotFound />} />
        </Routes>
      </main>
      <div className="absolute bottom-0 w-full">
        <hr />
        <footer className="flex w-full justify-center p-4 bg-white shadow items-center md:p-6 dark:bg-gray-800 min-h-20">
          <span className="text-sm text-gray-500 sm:text-center dark:text-gray-400">
            ©{" "}
            <a href="https://Auto1.com/" className="hover:underline">
              AUTO1 Group
            </a>{" "}
            2018
          </span>
        </footer>
      </div>
    </div>
  );
}

export default App;
