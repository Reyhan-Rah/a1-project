import React from "react";
import { Route, Routes } from "react-router-dom";
import CarsList from "./carsList";
import CarDetails from "./carDetails";
import NavBar from "./navbar";
import NotFound from "./404";
import Footer from "./footer";

function App() {
  return (
    <div className="flex flex-col flex-1 min-h-screen h-full relative">
      <header>
        <NavBar />
      </header>
      <hr />
      <main className="flex flex-1 bg-white dark:bg-gray-800">
        <Routes>
          <Route path={"/"} element={<CarsList />} />
          <Route path={"/car"} element={<CarDetails />} />
          <Route path={"*"} element={<NotFound />} />
        </Routes>
      </main>
      <Footer />
    </div>
  );
}

export default App;
