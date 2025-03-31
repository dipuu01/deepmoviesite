import React from 'react';
import { Route, Routes } from "react-router-dom";
import Error from "./Error";
import Home from "./Home";
import Singlemovie from "./Singlemovie";
import Footer from "./Footer";
import "./App.css";

const App = () => {
  return (
    <>
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="movie/:id" element={<Singlemovie />} />
        <Route path="*" element={<Error />} />
      </Routes>
      <Footer /> 
    </>
  );
};

export default App;
