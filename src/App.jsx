import React from "react";
import Favourite from "./components/Favourite";
import { Routes, Route } from "react-router-dom";
import Home from "./components/pages/Home";

function App() {
  return (
    <>
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/fav" element={<Favourite />} />
      </Routes>
    </>
  );
}

export default App;
