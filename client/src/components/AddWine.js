import React, { useState, useEffect } from "react";
import axios from "axios";


const AddWine = () => {
  const [newWine, setNewWine] = useState({
    producer: "",
    name: "",
    vintage: "",
    region: "",
    subregion: "",
    bottles: "",
    tasted: false,
    cellar: "62432ae75fde428917faea09"
  });

  const formUpdate = (e) => {
    setNewWine({ ...newWine, [e.target.name]: e.target.value });
    console.log(newWine)
  };

  const handleSubmit = async (event) => {
    event.preventDefault()

    await axios.post('http://localhost:3001/newwine', newWine)
  };

  return (
    <div>
      <h1 className="bodytitle">Add wine to the cellar.</h1>
      <form  onSubmit={handleSubmit}>
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
        <button>Submit</button>
      </form>
      <button onClick={console.log()}>whats the data</button>
    </div>
  );
};

export default AddWine;
