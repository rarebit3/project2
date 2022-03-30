import React from "react";
import { useState, useEffect } from "react";
import axios from "axios";

const Cellar = () => {

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
          <div className="wine-card" key={id}>
            <h2>{wine.name}</h2>
            <h3>Producer: {wine.producer}</h3>
            <h3>Vintage: {wine.vintage}</h3>
            <h3>Region: {wine.region}</h3>
            <h3>Subregion: {wine.subregion}</h3>
            <p>Description: {wine.description}</p>
            <h3>{wine.tasted ? "Tasted" : "Unopened"}</h3>
            <p>Tasting notes: {wine.notes}</p>
            <h3>Glassware used: {wine.glass}</h3>
            <h3>Pairs well with: {wine.pair}</h3>
            <h3>I drank it with: {wine.friends}</h3>
          </div>
        ))}
      </div>
    );
  }
};

export default Cellar;
