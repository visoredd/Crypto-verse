import React from "react";
import Main from "./routes";
import { Nav, Footer } from "./components";
import "./app.css";

const App = () => {
  return (
    <div>
      <div className="app">
        <div className="navbar">
          <Nav />
        </div>
        <div className="main">
          <Main />
        </div>
      </div>
      <div className="footer">
        <Footer />
      </div>
    </div>
  );
};

export default App;
