import React from "react";
import { Routes, Route } from "react-router-dom";
import Home from "../pages/public/Home";
import Login from "../pages/public/Login";
import Regulamento from "../pages/public/Regiment";
import About from "../pages/public/About";
import AnoLetivo from "../pages/admin/anoletivo/AnoLetivo";
import Authorization from "./Authorization";
import Unauthorized from "../pages/public/Unauthorizad";
import PERMISSIONS from "../constants/Permissions";
import Turma from "../pages/admin/turma/Turma";

const RoutePath = () => {
  return (
    <Routes>
      <Route path="/" element={<Home />} />
      <Route path="/about" element={<About />} />
      <Route path="/regiment" element={<Regulamento />} />
      <Route path="/login" element={<Login />} />
      
      <Route element={<Authorization permissions={[PERMISSIONS.ROLE_ADMIN]} />}>
        <Route path="/anoletivo" element={<AnoLetivo />} />
      </Route>

      <Route element={<Authorization permissions={[PERMISSIONS.ROLE_ADMIN]} />}>
        <Route path="/turma" element={<Turma />} />
      </Route>

      <Route path="/accessdenied" element={<Unauthorized />} />
    </Routes>
  );
};

export default RoutePath;
