import React, { useEffect, useState } from "react";
import { useParams, useNavigate, Link } from "react-router-dom";
// routes

const BottleDetails = (props) => {
  let { id } = useParams();
  let navigate = useNavigate();
 
  const [selectedBottle, setBottle] = useState({});

  useEffect(() => {
    const chosenBottle = props.wines.find((bottle) => bottle.id_number === id);
    setBottle(chosenBottle);
  }, []);

  return selectedBottle ? (
    <div className="detail">
      <div className="detail-header">
        {/* <img src={selectedBottle.image} alt={selectedBottle.name} /> */}
        <div
          style={{
            minWidth: "30em",
            display: "flex",
            justifyContent: "center",
            alignItems: "center",
          }}
        >
          <h1>{selectedBottle.name}</h1>
        </div>
      </div>
      <div className="info-wrapper">
        <div style={{ display: "flex", justifyContent: "space-between" }}>
          <h3>Description {selectedBottle.description}</h3>
          <h3>Producer {selectedBottle.producer}</h3>
          <h3>Region {selectedBottle.region}</h3>
          <h3>Subregion {selectedBottle.subregion}</h3>
          <h3>Vintage {selectedBottle.vintage}</h3>
        </div>
        <p>{selectedBottle.description}</p>
      </div>
      <Link className="btn" onClick={() => navigate(-1)}>
          Back
      </Link>
        
    </div>
  ) : null;
};

export default BottleDetails;
