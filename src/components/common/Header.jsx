import { LibraryBig } from "lucide-react";
import { Container, Nav, Navbar } from "react-bootstrap";
import { FaHome, FaSignInAlt } from "react-icons/fa";
import { HiOutlineLogin } from "react-icons/hi";
import { MdDashboard } from "react-icons/md";
import { PiSignOutBold } from "react-icons/pi";
import { useDispatch, useSelector } from "react-redux";
import { NavLink } from "react-router-dom";
import { signOutUser } from "@services/authService";
import { toast } from "react-toastify";
import { setUsers } from "@features/users/userSlice";
const Header = () => {
  const { user } = useSelector((state) => state.userInfo);
  const dispatch = useDispatch();

  const handleLogout =async () => {
    //logout from backend via api
    const {status, message} = await signOutUser();
    if(status === "success"){
      toast[status](message);
      sessionStorage.removeItem("accessToken");
      localStorage.removeItem("refreshToken");
      dispatch(setUsers({}))
    }
  }
  return (
    <Navbar expand="lg" className="bg-dark" variant="dark">
      <Container>
        <Navbar.Brand
          href="#home"
          className="d-flex align-items-center justify-content-center fs-1"
        >
          <LibraryBig
            className="me-1"
            style={{ width: "0.9em", height: "0.9em" }}
          />{" "}
          <span style={{ color: "gray" }}>L</span>M
          <span style={{ color: "gray" }}>S</span>
        </Navbar.Brand>
        <Navbar.Toggle aria-controls="basic-navbar-nav" />
        <Navbar.Collapse id="basic-navbar-nav">
          <Nav className="ms-auto">
            <NavLink className="nav-link" to="/">
              <FaHome />
              Home
            </NavLink>
            {user._id ? (
              <>
                <NavLink className="nav-link" to="/user">
                  <MdDashboard className="me-2" />
                  Dashboard
                </NavLink>
                <NavLink className="nav-link" to="/" onClick={handleLogout}>
                  <PiSignOutBold className="me-2" />
                  Logout
                </NavLink>
              </>
            ) : (
              <>
                <NavLink className="nav-link" to="/signin">
                  <HiOutlineLogin />
                  Login
                </NavLink>
                <NavLink className="nav-link" to="/signup">
                  <FaSignInAlt />
                  Register
                </NavLink>
              </>
            )}
          </Nav>
        </Navbar.Collapse>
      </Container>
    </Navbar>
  );
};

export default Header;
