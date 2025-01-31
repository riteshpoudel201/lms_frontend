import { Outlet } from "react-router-dom";
import Footer from "../common/Footer";
import Header from "../common/Header";
import Sidebar from "../common/Sidebar";
import AuthLayout from "./AuthLayout";

const UserLayout = () => {
  return (
    <AuthLayout>
      <Header />
      <div className="w-100 d-flex flex-row">
        <div className="p-3 bg-dark text-white" style={{ width: "15vw" }}>
          <div>Welcome Back</div>
          <h4>Ritesh Poudel</h4>
          <hr />
          <Sidebar />
        </div>
        <main className="main">
          <Outlet />
        </main>
      </div>

      <Footer />
    </AuthLayout>
  );
};

export default UserLayout;
