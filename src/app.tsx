import React from "react";
import { Layout, Typography, Space } from "antd";
import Main from "./routes";
import { Route, Link, Routes } from "react-router-dom";
import { Nav } from "./components";
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
        <Typography.Title
          level={5}
          style={{ color: "white", textAlign: "center" }}
        >
          Cryptoverse <br />
          All rights reserved.
        </Typography.Title>
        <Space>
          <Link to="/">Home</Link>
          <Link to="/exchanges">Exchanges</Link>
          <Link to="/news">News</Link>
        </Space>
      </div>
    </div>
  );
};

export default App;
