import React from "react";
import { Layout, Typography, Space } from "antd";
import { Route, Link, Routes } from "react-router-dom";
import {
  Home,
  CryptoCurrencies,
  CryptoDetails,
  News,
  Exchanges,
} from "./components";

const Router = () => {
  return (
    <Layout>
      <div className="routes">
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/cryptocurrencies" element={<CryptoCurrencies />} />
          <Route path="/exchanges" element={<Exchanges />} />
          <Route path="/news" element={<News />} />
          <Route path="/crypto/:coinId" element={<CryptoDetails />} />
        </Routes>
      </div>
    </Layout>
  );
};

export default Router;
