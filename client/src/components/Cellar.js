import React from "react";
import { useState, useEffect } from "react";
import { useNavigate, Link } from "react-router-dom";
import axios from "axios";
import "./Cellar.css";

const Cellar = () => {
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

  let positiveBottles = wines.filter((wine) => wine.bottles > 0);
  let tastedWines = wines.filter((wine) => wine.tasted === true);

  //ON CLICKS
  const drinkBottle = async (wine) => {
    wine.tasted = true;
    wine.bottles -= 1;
    console.log(wine);
    await axios.post("http://localhost:3001/updatewine", wine);
    navigate("/cellar");
  };

  const removeWine = async (wine) => {
    await axios.delete(`http://localhost:3001/removewine/${wine._id}`);
    getWines();
  };

  if (!wines) {
    return <h1>Loading your cellar</h1>;
  } else {
    return (
      <div className="wine-grid">
        <Link className="" to="/addwine">Add Wine</Link>
        {positiveBottles.map((wine, id) => (
          <div className="wine-card" key={id}>
            <h2>
              {wine.producer}: {wine.name}
            </h2>
            <div className="moreInfo">
              <h3>Vintage: {wine.vintage}</h3>
              <h3>Region: {wine.region}</h3>
              <h3>Subregion: {wine.subregion}</h3>
              <h3>Description:
                <p>{wine.description}</p>
              </h3>           
            </div>
            <h3>{wine.tasted ? "Tasted" : "Unopened"}</h3>
            <div className="tastedTrue">
              <p>{wine.notes ? `Tasting notes:${wine.notes}` : null}</p>
              <h3>{wine.glass ? `Glassware used: ${wine.glass}` : null}</h3>
              <h3>{wine.pair ? `I paired it with: ${wine.pair}` : null}</h3>
            <h3>{wine.friends ? `I drank it with: ${wine.friends}` : null}</h3>
            </div>
            <h3 className="inventory">
              Bottles Remaining in Cellar: {wine.bottles}
              {wine.bottles > 0 && (
                <button className="in-box-button drink-bottle" onClick={() => drinkBottle(wine)}>Drink me</button>
              )}
            </h3>
            <button
              className="remove-button in-box-button"
              label="Remove wine"
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
        <Link className="" to="/addwine">Add Wine</Link>
      </div>
    );
  }
};

export default Cellar;
