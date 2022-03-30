import './App.css';
import React  from 'react';
import { useState, useEffect } from 'react'
import { Route, Routes, useNavigate } from 'react-router-dom'
import axios from 'axios'
import Navbar from './components/Navbar/Navbar';
import Home from './components/Home'
import Cellar from './components/Cellar'
import BottleDetails from './components/BottleDetails';

function App() {


  const [bottles, setBottles] = useState()
  
  const getBottles = async() => {
    const bottleList = await axios.get('http://localhost:3001')
    setBottles(bottleList.data.bottles)
  }
  useEffect(() =>{
    getBottles()
  },[])

  return (
    <div className="App">
      <Navbar />
      <main>
        <Routes>
          <Route path='/' element={ <Home />} />
          {/* <Route path='/' element={ <AddBottle />} /> */}
          <Route path='/cellar' element={ <Cellar />} />
          <Route path='/cellar/:id' element={ <BottleDetails bottles={bottles} getBottles={getBottles} />} />
          {/* <Route path='/' element={ <Login />} /> */}
        </Routes>
      </main>
    </div>
  );

}

export default App;
