import React, { useState, useEffect } from "react";
import axios from "axios";
import { useNavigate } from "react-router-dom";
import "./AddWine.css";


const AddWine = () => {
  let navigate = useNavigate()

  const [newWine, setNewWine] = useState({
    producer: "",
    name: "",
    vintage: "",
    region: "",
    subregion: "",
    bottles: "",
    description: "",
    tasted: false,
    cellar: "62432ae75fde428917faea09"
  });

  const formUpdate = (e) => {
    setNewWine({ ...newWine, [e.target.name]: e.target.value });
  };

  const handleSubmit = async (event) => {
    event.preventDefault()
    await axios.post('/newwine', newWine)
    navigate('/cellar')
  };

  return (
    <div className="form-box">
      <h1 className="form-title">Add wine to the cellar.</h1>
      <form className="form" onSubmit={handleSubmit}>
        <input
          type="text"
          value={newWine.producer}
          onChange={formUpdate}
          name={"producer"}
          placeholder={"Producer"}
        />
        <input
          type="text"
          value={newWine.name}
          onChange={formUpdate}
          name={"name"}
          placeholder={"Cuvee or Name"}
        />
        <input
          type="text"
          value={newWine.vintage}
          onChange={formUpdate}
          name={"vintage"}
          placeholder={"Vintage"}
        />
        <input
          type="text"
          value={newWine.region}
          onChange={formUpdate}
          name={"region"}
          placeholder={"Region"}
        />
        <input
          type="text"
          value={newWine.subr}
          onChange={formUpdate}
          name={"subregion"}
          placeholder={"Sub Region"}
        />
        <input
          type="text"
          value={newWine.bottles}
          onChange={formUpdate}
          name={"bottles"}
          placeholder={"How many bottles are you adding?"}
        />
          <textarea
          type="text"
          value={newWine.description}
          onChange={formUpdate}
          name={"description"}
          placeholder={"Description of the wine you added."}
        />
        <button className="btn">Submit</button>
      </form>
    </div>
  );
};

export default AddWine;
