import React from "react";
import { useState, useEffect } from "react";
import { useNavigate } from "react-router-dom";
import axios from "axios";

const Cellar = () => {
  let navigate = useNavigate()

  const [wines, setWines] = useState([]);

  const getWines = async () => {
    const wineList = await axios.get("http://localhost:3001/wines");
    setWines(wineList.data.wines);
  };
  useEffect(() => {
    getWines();
  }, []);
  
  const drinkBottle = async (wine) => {
    
    wine.tasted = true
    wine.bottles -= 1
    console.log(wine)
    await axios.post("http://localhost:3001/updatewine", wine)
    navigate("/cellar")
  }


  if (!wines) {
    return <h1>Loading your cellar</h1>;
  } else  {
    return (
      <div className="wine-grid">
        {wines.map((wine, id) => (
          <div className="wine-card" key={id}>
            <h2>{wine.name}</h2>
            <h3>Producer: {wine.producer}</h3>
            <h3>Vintage: {wine.vintage}</h3>
            <h3>Region: {wine.region}</h3>
            <h3>Subregion: {wine.subregion}</h3>
            <p>Description: {wine.description}</p>
            <h3>{wine.tasted ? "Tasted" : "Unopened"}</h3>
            <p>{wine.notes ? `Tasting notes:${wine.notes}` : null}</p>
            <h3>{wine.glass ? `Glassware used: ${wine.glass}` : null }</h3>
            <h3>{wine.pair ? `I paired it with: ${wine.pair}` : null}</h3>
            <h3>{wine.friends ? `I drank it with: ${wine.friends}` : null}</h3>
            <h3>Bottles Remaining in Cellar: {wine.bottles}{
            wine.bottles > 0 && <button onClick={() => drinkBottle(wine)}>Drink me</button>
            }</h3>
          </div>
        ))}
      </div>
    );
  }
};

export default Cellar;
