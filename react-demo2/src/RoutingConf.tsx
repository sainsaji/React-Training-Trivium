import React from "react";
import { Routes, Route, BrowserRouter } from "react-router-dom";
import Navigate from "./Pages/Navigate";
import Home from "./Pages/Home";
import Features from "./Pages/Features";
import Pricing from "./Pages/Pricing";
import Nopage from "./Pages/Nopage";

const RoutingConf = () => {
  return (
    <div>
      <BrowserRouter>
        <Routes>
          <Route path="/" element={<Navigate />}>
            <Route index element={<Home />} />
            <Route path="features" element={<Features />} />
            <Route path="pricing" element={<Pricing />} />
            <Route path="*" element={<Nopage />} />
          </Route>
        </Routes>
      </BrowserRouter>
    </div>
  );
};

export default RoutingConf;
