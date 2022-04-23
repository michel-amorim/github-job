import React from "react";
import { Route, Routes, BrowserRouter } from "react-router-dom";

import Header from "./Components/Header/Header";
import Search from "./Components/Search/Search";
import Location from "./Components/Home/Locaiton/Location";
import Footer from "./Components/Footer/Footer";

const Rotas = () => {
  return (
    <BrowserRouter>
      <Header />
      <Routes>
        <Route path="/" element={<Search />} />
      </Routes>
      <Location />
      <Footer />
    </BrowserRouter>
  );
};

export default Rotas;
