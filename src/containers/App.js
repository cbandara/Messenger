import React from "react";
import Sidebar from "../components/Sidebar";
import Main from "../components/Main";
import "./App.css";
import { contacts } from "../static-data";
const _ = require("lodash");

const App = () => {
  return (
    <div className="App">
      <Sidebar contacts={_.values(contacts)} />
      <Main />
    </div>
  );
};

export default App;
