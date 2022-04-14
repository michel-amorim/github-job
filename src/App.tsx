import React from "react";
import { BrowserRouter, Route, Routes } from "react-router-dom";

import "./App.css";

import Footer from "./Components/Footer/Footer";
import Header from "./Components/Header/Header";
import Location from "./Components/Home/Locaiton/Location";
import Search from "./Components/Search/Search";

function App() {
  return (
    <div className="App">
      <BrowserRouter>
        <Header />
        <Routes>
          <Route path="/" element={<Search />} />
        </Routes>
        <Location />
        <Footer />
      </BrowserRouter>
    </div>
  );
}

export default App;
