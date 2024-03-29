import React from "react";
import { useState, useEffect } from "react";
import { Link, useNavigate } from "react-router-dom";
import "./NavBar.css";

const NavBar = () => {
  let navigate = useNavigate();
  const [clicked, setClicked] = useState(false);

  return (
    <nav className="NavBar">
      <h1 className="cellar-icon" onClick={() => navigate("/")}>
        Cellar<i className="fa-solid fa-wine-bottle"></i>
      </h1>
      <div
        className="menu-icon"
        onClick={() => {
          setClicked(!clicked);
        }}
      >
        <i className={clicked ? "fas fa-times" : "fas fa-bars"}></i>
      </div>
      <ul className={clicked ? "nav-menu active" : "nav-menu"}>
        <Link className="iLinks" to="/cellar">
          My Cellar
        </Link>
        <Link className="iLinks login" to="/login">
          Log In
        </Link>
      </ul>
    </nav>
  );
};

export default NavBar;
