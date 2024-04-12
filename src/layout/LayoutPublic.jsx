import React from "react";
import { Outlet } from "react-router-dom";
import Example from "../components/Navbar";

const LayoutPublic = () => {
  return (
    <>
      <Example />
      <Outlet />
      <div>Aqui va el Footer</div>
    </>
  );
};

export default LayoutPublic;
