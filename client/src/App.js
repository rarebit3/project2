import './App.css';
import React  from 'react';
import { useState, useEffect } from 'react'
import { Route, Routes, useNavigate } from 'react-router-dom'
import axios from 'axios'
import Navbar from './components/Navbar/Navbar';
import Home from './components/Home'
import Cellar from './components/Cellar'
import WineDetails from './components/WineDetails';

function App() {


  const [wines, setWines] = useState()
  
  const getWines = async() => {
    const wineList = await axios.get('http://localhost:3001/wines')
    setWines(wineList.data.wines)
  }
  useEffect(() =>{
    getWines()
  },[])

  return (
    <div className="App">
      <Navbar />
      <main>
        <Routes>
          <Route path='/' element={ <Home />} />
          {/* <Route path='/' element={ <AddWine />} /> */}
          <Route path='/cellar' element={ <Cellar />} />
          <Route path='/cellar/:id' element={ <WineDetails wines={wines} getWines={getWines} />} />
          {/* <Route path='/' element={ <Login />} /> */}
        </Routes>
      </main>
    </div>
  );

}

export default App;
