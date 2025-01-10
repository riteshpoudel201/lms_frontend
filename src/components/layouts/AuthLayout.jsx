/* eslint-disable react/prop-types */

import { useSelector } from "react-redux";
import { Navigate } from "react-router-dom";

const AuthLayout = ({ children }) => {
  const { user } = useSelector((state) => state.userInfo);
  const isAuth = user?._id;
  return isAuth ? children : <Navigate to="/signin" />;
};

export default AuthLayout;
