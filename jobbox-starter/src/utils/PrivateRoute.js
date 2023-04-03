import React from "react";
import { useSelector } from "react-redux";
import { Navigate, useLocation } from "react-router-dom";
import Loading from "../components/reusable/Loading";

const PrivateRoute = ({ children }) => {
  const { pathname } = useLocation();
  const {email, user, isLoading} = useSelector(state => state.user)

  if (isLoading) {
    return <Loading />;
  }

  if (!user && !email) {
    return <Navigate to='/login' state={{ path: pathname }} />;
  }

  return children;
};

export default PrivateRoute;
