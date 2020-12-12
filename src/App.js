import React from "react";
import Home from "./components/Home";
import { Link, Route } from "react-router-dom";
import Form from "./components/Form";

const App = () => {
  return (
    <div>
      <header>
        <h1>Lambda Eats</h1>
        <Link to="/">Home</Link>
        <Link to="/pizza">
          <button>Pizza?</button>
        </Link>
        <Route exact path="/" component={Home} />
        <Route path="/pizza" component={Form} />
      </header>
    </div>
  );
};
export default App;
