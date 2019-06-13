import React from "react";
import { Route } from "react-router-dom";

import PrivateRoute from "./components/PrivateRoute";
import TechList from "./components/TechList";
import Login from "./components/Login";

import "./App.css";

function App() {
  return (
    <div className="App">
      <Route exact path="/" component={Login} />
      <PrivateRoute exact path="/tech" component={TechList} />
    </div>
  );
}

export default App;
