import { Outlet, Navigate } from "react-router-dom";
import { hookContext } from "../context/UserContext";

const LayaoutPrivate = () => {
  const { user } = hookContext();

  return <>{user ? <Outlet /> : <Navigate to="/" />};</>;
};

export default LayaoutPrivate;
