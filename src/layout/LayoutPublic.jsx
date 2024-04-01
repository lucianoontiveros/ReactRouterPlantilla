import React from "react";
import { Outlet } from "react-router-dom";

const LayoutPublic = () => {
  return (
    <>
      <div>Aqui va el Nav</div>
      <Outlet />
      <div>Aqui va el Footer</div>
    </>
  );
};

export default LayoutPublic;
