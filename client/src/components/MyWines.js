import React from "react";
import { useState, useEffect } from "react";
import { useNavigate, Link } from "react-router-dom";
import axios from "axios";
import AddWine from "./AddWine";

const MyWines = () => {
  // GLOBALS AND STATE
  let navigate = useNavigate();

  const [wines, setWines] = useState([]);

  const getWines = async () => {
    const wineList = await axios.get("http://localhost:3001/wines");
    setWines(wineList.data.wines);
  };
  useEffect(() => {
    getWines();
  }, []);

  const removeWine = async (wine) => {
    await axios.delete(`http://localhost:3001/removewine/${wine._id}`);
    getWines();
  };

  let tastedWines = wines.filter((wine) => wine.tasted === true);

  if (!wines) {
    return <h1>Loading your cellar</h1>;
  } else {
    return (
      <div className="wine-grid">
        {tastedWines.map((wine, id) => (
          <div className="wine-card" key={id}>
            <h2>
              {wine.producer}: {wine.name}
            </h2>
            <h3>Vintage: {wine.vintage}</h3>
            <h3>Region: {wine.region}</h3>
            <h3>Subregion: {wine.subregion}</h3>
            <p>Description: {wine.description}</p>
            <h3>{wine.tasted ? "Tasted" : "Unopened"}</h3>
            <p>{wine.notes ? `Tasting notes:${wine.notes}` : null}</p>
            <h3>{wine.glass ? `Glassware used: ${wine.glass}` : null}</h3>
            <h3>{wine.pair ? `I paired it with: ${wine.pair}` : null}</h3>
            <h3>{wine.friends ? `I drank it with: ${wine.friends}` : null}</h3>
            <h3>Bottles Remaining in Cellar: {wine.bottles}</h3>
            <button
              className="delete-button"
              onClick={() => {
                if (
                  window.confirm("Are you sure you wish to delete this item?")
                )
                  removeWine(wine);
              }}
            >
              Remove Wine
            </button>
          </div>
        ))}
        <Link className="" to="/addwine">
          Add Wine
        </Link>
      </div>
    );
  }
};

export default MyWines;
