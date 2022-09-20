import React from "react";
import { Route, Routes } from "react-router-dom";
import { CarsList } from "./carsList";
import { CarDetails } from "./carDetails";
import { Header } from "./components/header";
import { NotFound } from "./404";
import { Footer } from "./components/footer";
import { Purchase } from "./purchase";
import { Orders } from "./orders";
import { Sell } from "./sell";

function App() {
  return (
    <div className="flex flex-col flex-1 min-h-screen h-full relative">
      <Header />
      <hr />
      <main className="flex flex-1 bg-white dark:bg-gray-800 mb-20">
        <Routes>
          <Route path={"/"} element={<CarsList />} />
          <Route path={"/:stockNumber"} element={<CarDetails />} />
          <Route path={"/purchase"} element={<Purchase />} />
          <Route path={"/orders"} element={<Orders />} />
          <Route path={"/sell"} element={<Sell />} />
          <Route path={"*"} element={<NotFound />} />
        </Routes>
      </main>
      <Footer />
    </div>
  );
}

export default App;
