import { LibraryBig } from "lucide-react";
import { Container, Form, InputGroup, Nav, Navbar } from "react-bootstrap";
import { FaBook, FaHome, FaSignInAlt } from "react-icons/fa";
import { BsCart3 } from "react-icons/bs";
import { HiOutlineLogin } from "react-icons/hi";
import { MdDashboard } from "react-icons/md";
import { PiSignOutBold } from "react-icons/pi";
import { useDispatch, useSelector } from "react-redux";
import { NavLink } from "react-router-dom";
import { signOutUser } from "@services/authService";
import { toast } from "react-toastify";
import { setUsers } from "@features/users/userSlice";
import SearchBar from "./SearchBar";
import { CartButton } from "./header/CartButton";
const Header = () => {
  const { user } = useSelector((state) => state.userInfo);
  const dispatch = useDispatch();

  const handleLogout = async () => {
    //logout from backend via api
    const { status, message } = await signOutUser();
    if (status === "success") {
      toast[status](message);
      sessionStorage.removeItem("accessToken");
      localStorage.removeItem("refreshToken");
      dispatch(setUsers({}));
    }
  };
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
          <div className="w-100 d-flex flex-column flex-lg-row justify-content-between">
            <div></div>
            <SearchBar />

            <Nav className="">
              {/* search bar starts */}
              {/* search bar ends  */}

              <NavLink className="nav-link" to="/">
                <FaHome />
                Home
              </NavLink>
              <NavLink className="nav-link" to="/book">
                <FaBook />
                Books
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

              <CartButton />
            </Nav>
          </div>
        </Navbar.Collapse>
      </Container>
    </Navbar>
  );
};

export default Header;


