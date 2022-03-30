import './App.css';
import React  from 'react';
import { useState, useEffect } from 'react'
import { Route, Routes, useNavigate } from 'react-router-dom'
import axios from 'axios'
import Navbar from './components/Navbar/Navbar';

function App() {

  return (
    <div className="App">
      <Navbar />
    </div>
  );

}

export default App;
