import React from "react";
import { Routes, Route, Outlet } from "react-router-dom";

const Services = () => {
  return (
    <div>
      Services <Outlet />
    </div>
  );
};

export default Services;
