import { Navigate, Route, Routes } from "react-router-dom";
import {
  HomePage,
  DashboardPage,
  UserPage,
  SignInPage,
  SignUpPage,
  ForgetPassword,
  Books,
  NewBookPage,
  EditBookPage,
  BookLandingPage,
  ReviewsPage,
  BorrowPage,
  ProfilePage,
} from "@pages";
import DefaultLayout from "@components/layouts/DefaultLayout";
import UserLayout from "@components/layouts/UserLayout";
import VerifyUser from "@pages/auth/VerifyUser";
import RequestOtpForm from "@components/forget-password/RequestOtpForm";
import ResetPasswordForm from "@components/forget-password/ResetPasswordForm";
import BookListPage from "@pages/books/BookListPage";
import CartPage from "@pages/borrow/CartPage";
import ThankYouPage from "@pages/borrow/ThankYouPage";

export const availableRoutes = [
  { path: "/", breadcrumb: "Home" },
  { path: "/book", breadcrumb: "Book" },
  { path: "/book/:slug", breadcrumb: "Book Details" },
  { path: "/signin", breadcrumb: "Sign In" },
  { path: "/signup", breadcrumb: "Sign Up" },
  { path: "/password/request-otp", breadcrumb: "Request OTP" },
  { path: "/password/reset", breadcrumb: "Reset Password" },
  { path: "/activate-user", breadcrumb: "Verify User" },
  { path: "/user", breadcrumb: "User" },
  { path: "/user/users", breadcrumb: "Users" },
  { path: "/user/profile", breadcrumb: "Profile" },
  { path: "/user/books", breadcrumb: "Books" },
  { path: "/user/new-book", breadcrumb: "New Book" },
  { path: "/user/edit-book/:id", breadcrumb: "Edit Book" },
  { path: "/user/reviews", breadcrumb: "Reviews" },
  { path: "/user/borrow", breadcrumb: "Borrow" },
];


// src/routesConfig.ts
export const routesConfig = [
  {
    path: "/",
    element: <DefaultLayout />,
    breadcrumb: "Home",
    children: [
      { path: "", element: <HomePage />, breadcrumb: "Home" },
      { path: "book", element: <BookListPage />, breadcrumb: "Book" },
      { path: "book/:slug", element: <BookLandingPage />, breadcrumb: "Book Details" },
      { path: "cart", element: <CartPage />, breadcrumb: "Book Cart" },
      { path: "signin", element: <SignInPage />, breadcrumb: "Sign In" },
      { path: "signup", element: <SignUpPage />, breadcrumb: "Sign Up" },
      {
        path: "password",
        element: <ForgetPassword />,
        breadcrumb: "Forgot Password",
        children: [
          { path: "", element: <Navigate to="/password/request-otp" />, breadcrumb: "Request OTP" },
          { path: "request-otp", element: <RequestOtpForm />, breadcrumb: "Request OTP" },
          { path: "reset", element: <ResetPasswordForm />, breadcrumb: "Reset Password" },
        ],
      },
      { path: "activate-user", element: <VerifyUser />, breadcrumb: "Verify User" },
      
      { path: "*", element: <div><h1>404 - Page Not Found</h1></div>, breadcrumb: "404" },
    ],
  },
  {
    path: "/user",
    element: <UserLayout />,
    breadcrumb: "User",
    children: [
      { path: "", element: <DashboardPage />, breadcrumb: "Dashboard" },
      { path: "profile", element: <ProfilePage />, breadcrumb: "Profile" },
      { path: "books", element: <Books />, breadcrumb: "Books" },
      { path: "new-book", element: <NewBookPage />, breadcrumb: "New Book" },
      { path: "edit-book/:id", element: <EditBookPage />, breadcrumb: "Edit Book" },
      { path: "reviews", element: <ReviewsPage />, breadcrumb: "Reviews" },
      { path: "borrow", element: <BorrowPage />, breadcrumb: "Borrow" },
      { path: "thank-you", element: <ThankYouPage />, breadcrumb: "Thank you" },
    ],
  },
];


const AppRoutes = () => {
  const renderRoutes = (routes) => {
    return routes.map(({ path, element, children }) => (
      <Route key={path} path={path} element={element}>
        {children && renderRoutes(children)}
      </Route>
    ));
  };

  return <Routes>{renderRoutes(routesConfig)}</Routes>;
};

export default AppRoutes;
