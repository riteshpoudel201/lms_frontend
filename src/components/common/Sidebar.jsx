import { Stack } from "react-bootstrap";
import { FaBookReader, FaUserCircle, FaUsers } from "react-icons/fa";
import { IoBookSharp } from "react-icons/io5";
import { MdDashboard, MdReviews } from "react-icons/md";
import { useSelector } from "react-redux";
import { NavLink } from "react-router-dom";

const sidebarData = [
  {
    link: "/user",
    icon: "MdDashboard",
    name: "Dashboard",
    isAdminOnly: true,
  },
  {
    link: "/user/books",
    icon: "IoBookSharp",
    name: "Books",
    isAdminOnly: true,
  },
  {
    link: "/user/reviews",
    icon: "MdReviews",
    name: "Reviews",
    isAdminOnly: true,
  },
  {
    link: "/user/users",
    icon: "FaUsers",
    name: "Users",
    isAdminOnly: true,
  },
  {
    link: "/user/borrow",
    icon: "FaBookReader",
    name: "Borrow History",
    isAdminOnly: false,
  },
  {
    link: "/user/profile",
    icon: "FaUserCircle",
    name: "Profile",
    isAdminOnly: false,
  },
];
const Sidebar = () => {
  const { user } = useSelector((state) => state.userInfo);
  const hasAdminAccess = user.role === "admin";
  return (
    <Stack gap={1}>
      {sidebarData.map((sidebar) => {
        const Icon = sidebar.icon;
        return (
          <>
            {(hasAdminAccess || !sidebar.isAdminOnly) && (
              <SidebarLink
                link={sidebar.link}
                icon={<Icon className="me-2" />}
                name={sidebar.name}
              />
            )}
          </>
        );
      })}
    </Stack>
  );
};

export default Sidebar;

const SidebarLink = ({ link, icon, name }) => {
  return (
    <div className="p-2">
      <NavLink className="nav-link" to={link}>
        {icon} {name}
      </NavLink>
    </div>
  );
};
