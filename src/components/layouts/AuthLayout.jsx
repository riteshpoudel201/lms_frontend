/* eslint-disable react/prop-types */

import { Navigate } from "react-router-dom";

const AuthLayout = ({children}) => {
    const isAuth = true;
  return isAuth ? children : <Navigate to="/signin" />
}

export default AuthLayout