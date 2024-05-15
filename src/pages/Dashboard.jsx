import React from "react";
import { hookContext } from "../context/UserContext";

const Dashboard = () => {
  const { user } = hookContext();
  return (
    <>
      <div>Dashboard</div>;<h1>Bienvenido {user.name}</h1>
      <h2> {user.email}</h2>
    </>
  );
};

export default Dashboard;
