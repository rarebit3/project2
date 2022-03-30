import React from "react";
import { useNavigate } from "react-router-dom";
import { useState, useEffect } from 'react'
import axios from 'axios'

const Cellar = () => {
    let navigate = useNavigate();
    const showWines = (wine) => {
      navigate(`${wine.id_number}`);
    };
  
    const [bottles, setBottles] = useState([])
    
    const getBottles = async() => {
      const bottleList = await axios.get('http://localhost:3001/')
      setBottles(bottleList.data.wines)
      console.log(bottles)
    }
    useEffect(() =>{
      getBottles()
    },[])

  return (
    <div className="bottle-grid">
      {bottles.map((bottle, id) => (
        <div className="bottle-card" onClick={() => showWines(bottle)} key={id}>
          {/* <img style={{ display: "block" }} src={bottle.image} alt={bottle.name} /> */}
          <h3>{bottle.name}</h3>
        </div>
      ))}
    </div>
  );
};

export default Cellar;
