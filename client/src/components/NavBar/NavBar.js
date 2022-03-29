import React from "react";
import { Link, useNavigate } from "react-router-dom";

const NavBar = () => {
  let navigate = useNavigate();

  return (
    <nav className="navlist">
      <h1 className="cellar-icon">Cellar</h1>
      <div className="menu-icon"></div>
      <ul>
        <Link className="btn" to="/">
          Home
        </Link>
        <Link className="btn" to="/addbottle">
          Add Bottles
        </Link>
        <Link className="btn" to="/cellar">
          My Cellar
        </Link>
        <Link className="btn" to={() => navigate(-1)}>
          Back
        </Link>
      </ul>
      <p>Welcome to Cellar! What would you like to do?</p>
    </nav>
  );
};

export default NavBar;
