import React from "react";
import { Link } from "react-router-dom";
import CustomLink from "../CustomLink/CustomLink";

import "./Navbar.css";
const Navbar = () => {
  return (
    <div>
      <ul className="navbar">
        <li>
          <CustomLink to="/">Home</CustomLink>
        </li>
        <li>
          <CustomLink to="/about">About</CustomLink>
        </li>
        <li>
          <CustomLink to="/friends">Friends</CustomLink>
        </li>
      </ul>
    </div>
  );
};

export default Navbar;
