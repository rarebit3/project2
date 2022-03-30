import React from "react";
import { useNavigate } from "react-router-dom";
import { useState, useEffect } from "react";
import axios from "axios";

const Cellar = () => {
  let navigate = useNavigate();
  const showWines = (wine) => {
    navigate(`${wine.id_number}`);
  };

  const [wines, setWines] = useState([]);

  const getWines = async () => {
    const wineList = await axios.get("http://localhost:3001/wines");
    setWines(wineList.data.wines);
  };
  useEffect(() => {
    getWines();
  }, []);

  if (!wines) {
    return <h1>Loading your cellar</h1>;
  } else {
    return (
      <div className="wine-grid">
        {wines.map((wine, id) => (
          <div className="wine-card" onClick={() => showWines(wine)} key={id}>
            <h3>{wine.name}</h3>
          </div>
        ))}
      </div>
    );
  }
};

export default Cellar;
