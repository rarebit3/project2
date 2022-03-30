import React, { useEffect, useState } from "react";
import { useParams, useNavigate, Link } from "react-router-dom";


const WineDetails = (props) => {
  let { id } = useParams();
  let navigate = useNavigate();
 
  const [selectedWine, setWine] = useState({});

  useEffect(() => {
    const chosenWine = props.wines.find((wine) => wine.id_number === id);
    setWine(chosenWine);
  }, []);

  return selectedWine ? (
    <div className="detail">
      <div className="detail-header">
        {/* <img src={selectedWine.image} alt={selectedWine.name} /> */}
        <div
          style={{
            minWidth: "30em",
            display: "flex",
            justifyContent: "center",
            alignItems: "center",
          }}
        >
          <h1>{selectedWine.name}</h1>
        </div>
      </div>
      <div className="info-wrapper">
        <div style={{ display: "flex", justifyContent: "space-between" }}>
          <h3>Description {selectedWine.description}</h3>
          <h3>Producer {selectedWine.producer}</h3>
          <h3>Region {selectedWine.region}</h3>
          <h3>Subregion {selectedWine.subregion}</h3>
          <h3>Vintage {selectedWine.vintage}</h3>
        </div>
        <p>{selectedWine.description}</p>
      </div>
      <a className="btn" onClick={() => navigate(-1)}>
          Back
      </a>
        
    </div>
  ) : null;
};

export default WineDetails;
