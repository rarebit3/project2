import "./App.css";
import React from "react";
import { useState, useEffect } from "react";
import { Route, Routes, useNavigate } from "react-router-dom";
import axios from "axios";
import NavBar from "./components/NavBar/NavBar.js";
import Home from "./components/Home";
import Cellar from "./components/Cellar";
import AddWine from "./components/AddWine";

function App() {
  return (
    <div className="App">
      <NavBar />
      <main>
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/addwine" element={<AddWine />} />
          <Route path="/cellar" element={<Cellar />} />
          {/* <Route path='/' element={ <Login />} /> */}
        </Routes>
      </main>
    </div>
  );
}

export default App;
