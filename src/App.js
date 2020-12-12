import React from "react";
import Home from "./components/Home";
import { Link, Route } from "react-router-dom";
import Form from "./components/Form";
import Navbar from "./components/Navbar";

const App = () => {
  return (
    <div>
      <Navbar />
      <Route exact path="/" component={Home} />
      <Route exact path="/pizza" component={Form} />
    </div>
  );
};
export default App;
