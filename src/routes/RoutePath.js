import React from "react";
import { Routes, Route } from "react-router-dom";
import Home from "../pages/Home";
import About from "../pages/About";
import Login from "../pages/Login";
import Regulamento from "../pages/Regiment";
import AnoLetivo from "../pages/AnoLetivo";
import Authorization from "./Authorization";
import Unauthorized from "../pages/Unauthorizad";
import PERMISSIONS from "../constants/Permissions";

const RoutePath = () => {
  return (
    <Routes>
      <Route path="/" element={<Home />} />
      <Route path="/about" element={<About />} />
      <Route path="/regiment" element={<Regulamento />} />
      <Route path="/login" element={<Login />} />
      <Route
        element={
          <Authorization
            permissions={[PERMISSIONS.ROLE_AVAL, PERMISSIONS.ROLE_ADMIN]}
          />
        }
      >
        <Route path="/anoletivo" element={<AnoLetivo />} />
      </Route>

      <Route path="/accessdenied" element={<Unauthorized />} />
    </Routes>
  );
};

export default RoutePath;
