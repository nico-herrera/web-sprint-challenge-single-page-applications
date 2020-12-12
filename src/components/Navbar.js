import React from "react";
import { Link } from "react-router-dom";

const Navbar = () => {
  console.log("test");
  return (
    <div>
      <header>
        <h1>Lambda Eats</h1>
        <Link to="/">Home</Link>
        <br />
      </header>
    </div>
  );
};

export default Navbar;
