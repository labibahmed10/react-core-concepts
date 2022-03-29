import React from "react";
import { Route, Routes } from "react-router-dom";
import About from "../About/About";
import Friend from "../Friends/Friends";
import Home from "../Home/Home";
import NotFound from "../NotFound/NotFound";
import "./Navbar.css";
const Navbar = () => {
  return (
    <div>
      <ul className="navbar">
        <li>
          <a href="/">Home</a>
        </li>
        <li>
          <a href="/about">About</a>
        </li>
        <li>
          <a href="/friends">Friends</a>
        </li>
      </ul>
      {/* <Routes>
        <Route path="/" element={<Home></Home>}></Route>
        <Route path="/friend" element={<Friend></Friend>}></Route>
        <Route path="/about" element={<About></About>}></Route>
        <Route path="*" element={<NotFound> </NotFound>}></Route>
      </Routes> */}
    </div>
  );
};

export default Navbar;
