import React from "react";
import { useNavigate } from "react-router-dom";

const AddCellar = (props) => {
  const handleSubmit = (e) => {
    props.addUser(e);
  };
  const newUser = props.newUser;

  return (
    <div>
      <h1 className="bodytitle">Join our newsletter for deals on airfare, lodging, and tickets!</h1>
      <form onSubmit={handleSubmit}>
        <input
          type="text"
          value={newUser.firstName}
          onChange={props.handleChange}
          name={"firstName"}
          placeholder={"First Name"}
        />
        <input
          type="text"
          value={newUser.lastName}
          onChange={props.handleChange}
          name={"lastName"}
          placeholder={"Last Name"}
        />
        <input
          type="text"
          value={newUser.email}
          onChange={props.handleChange}
          name={"email"}
          placeholder={"Email"}
        />
        <input
          type="text"
          value={newUser.age}
          onChange={props.handleChange}
          name={"age"}
          placeholder={"Age"}
        />
        <button>Submit</button>
      </form>
    </div>
  );
};

export default AddCellar;