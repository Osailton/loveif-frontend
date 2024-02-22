import { Navigate, Outlet } from "react-router-dom";
import Unauthorized from "../pages/Unauthorizad";

import { useAuth } from "../providers/AuthProvider";

const Authorization = ({ permissions }) => {
  const { user } = useAuth();

  return (
    <>
      {user.roles.length > 0 && permissions.some((allowed) => user.roles.includes(allowed)) ? <Outlet /> : <Unauthorized />}
    </>
  );
};

export default Authorization;
