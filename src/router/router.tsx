import React from "react";
import { Route, Routes } from "react-router-dom";
import Analytics from "../pages/Analytics";
import Dashboard from "../pages/Dashboard";
import Order from "../pages/Orders";
import Store from "../pages/Store";

const RouterComp: React.FC = () => {
  return (
    <React.Fragment>
      <Routes>
        <Route path="/" element={<Dashboard />} />
        <Route path="/order" element={<Order />} />
        <Route path="/store" element={<Store />} />
        <Route path="/analytics" element={<Analytics />} />
      </Routes>
    </React.Fragment>
  );
};

export default RouterComp;
