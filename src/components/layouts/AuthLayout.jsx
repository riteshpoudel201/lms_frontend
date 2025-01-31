/* eslint-disable react/prop-types */

import { useSelector } from "react-redux";
import { Navigate } from "react-router-dom";
import { useLocation } from "react-router-dom";

const AuthLayout = ({ children }) => {
  const location = useLocation();
  const { user } = useSelector((state) => state.userInfo);
  const isAuth = user?._id;
  return isAuth ? (
    children
  ) : (
    <Navigate state={{ from: location.pathname }} to="/signin" />
  );
};

export default AuthLayout;
