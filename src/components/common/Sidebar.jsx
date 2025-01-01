import { Stack } from "react-bootstrap";
import { FaBookReader, FaUserCircle, FaUsers } from "react-icons/fa";
import { IoBookSharp } from "react-icons/io5";
import { MdDashboard, MdReviews } from "react-icons/md";
import { NavLink } from "react-router-dom";

const Sidebar = () => {
  return (
    <Stack gap={1}>
      <div className="p-2">
        <NavLink className="nav-link" to="/user">
          <MdDashboard className="me-2" /> Dashboard
        </NavLink>
      </div>
      <div className="p-2">
        <NavLink className="nav-link" to="/user/books">
          <IoBookSharp className="me-2" /> Books
        </NavLink>
      </div>
      <div className="p-2">
        <NavLink className="nav-link" to="/user/reviews">
          <MdReviews className="me-2" /> Reviews
        </NavLink>
      </div>
      <div className="p-2">
        <NavLink className="nav-link" to="/user/users">
          <FaUsers className="me-2" /> Users
        </NavLink>
      </div>
      <div className="p-2">
        <NavLink className="nav-link" to="/user/borrow">
          <FaBookReader className="me-2" /> Borrow History
        </NavLink>
      </div>
      <div className="p-2">
        <NavLink className="nav-link" to="/user/profile">
          <FaUserCircle className="me-2" /> Profile
        </NavLink>
      </div>
    </Stack>
  );
};

export default Sidebar;
