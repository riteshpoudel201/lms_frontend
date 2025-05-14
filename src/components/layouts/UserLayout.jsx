import { Outlet } from "react-router-dom";
import Footer from "../common/Footer";
import Header from "../common/Header";
import Sidebar from "../common/Sidebar";
import AuthLayout from "./AuthLayout";
import { useSelector } from "react-redux";

const UserLayout = () => {
  const {user} = useSelector(state=> state.userInfo)
  return (
    <AuthLayout>
      <Header />
      <div className="w-100 d-flex flex-row">
        <div className="p-3 bg-dark text-white" style={{ width: "15vw" }}>
          <div>Welcome Back</div>
          <h4>{user.firstName + " " +user.lastName}</h4>
          <h5 style={{textTransform:"capitalize", fontSize:"0.8rem"}}>({user.role})</h5>
          <hr />
          <Sidebar />
        </div>
        <main className="user-main">
          <Outlet />
        </main>
      </div>

      <Footer />
    </AuthLayout>
  );
};

export default UserLayout;
