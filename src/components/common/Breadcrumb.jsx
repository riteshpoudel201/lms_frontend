import { useLocation, Link } from "react-router-dom";
import { Breadcrumb } from "react-bootstrap";  
import { availableRoutes } from "@/routes/AppRoutes";

const isDynamicParam = (text) => {
  return /^:/.test(text); 
};

const matchRoute = (routePath, currentPath) => {
  const routeParts = routePath.split("/").filter(Boolean);
  const currentParts = currentPath.split("/").filter(Boolean);

  if (routeParts.length !== currentParts.length) return false;

  for (let i = 0; i < routeParts.length; i++) {
    if (isDynamicParam(routeParts[i])) continue;
    if (routeParts[i] !== currentParts[i]) return false;
  }

  return true;
};

const BreadcrumbComponent = () => {
  const location = useLocation();
  const pathnames = location.pathname.split("/").filter((x) => x);

  return (
    <Breadcrumb>
      {/* Home Link */}
      <Breadcrumb.Item linkAs={Link} linkProps={{ to: "/" }}>
        Home
      </Breadcrumb.Item>

      {pathnames.map((value, index) => {
        const to = `/${pathnames.slice(0, index + 1).join("/")}`;
        const isLast = index === pathnames.length - 1;

        const matchedRoute = availableRoutes.find(route => matchRoute(route.path, to));

        const breadcrumbText = matchedRoute
          ? matchedRoute.breadcrumb
          : value.charAt(0).toUpperCase() + value.slice(1);

        return (
          <Breadcrumb.Item
            key={to}
            linkAs={isLast ? 'span' : Link}
            linkProps={isLast ? {} : { to }}
            active={isLast}
            style={{ display: "flex", alignItems: "center" }}
          >
            {breadcrumbText}
          </Breadcrumb.Item>
        );
      })}
    </Breadcrumb>
  );
};

export default BreadcrumbComponent;
