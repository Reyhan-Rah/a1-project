import React from "react";
import { Route, Routes } from "react-router-dom";
import { CarsList } from "./routes/CarsList";
import { CarDetails } from "./routes/CarDetails";
import { Header } from "./components/Header";
import { NotFound } from "./routes/404";
import { Footer } from "./components/Footer";
import { Purchase } from "./routes/Purchase";
import { Orders } from "./routes/Orders";
import { Sell } from "./routes/Sell";

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
