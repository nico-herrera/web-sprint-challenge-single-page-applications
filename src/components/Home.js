import React from "react";
import { Link } from "react-router-dom";
import Form from "./Form";
import App from "../App";

const Home = () => {
  console.log("test");
  return (
    <div>
      <header>
        <Link to="/pizza">
          <button>Pizza?</button>
        </Link>
      </header>
    </div>
  );
};

export default Home;
