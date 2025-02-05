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

const AppRoutes = () => {
  return (
    <Routes>
      {/* public routes  */}
      <Route path="/" element={<DefaultLayout />}>
        <Route index element={<HomePage />} />
        <Route path="signin" element={<SignInPage />} />
        <Route path="signup" element={<SignUpPage />} />
        <Route path="/password" element={<ForgetPassword />}>
          <Route index element={<Navigate to="/password/request-otp" />} />
          <Route path="request-otp" element={<RequestOtpForm />} />
          <Route path="reset" element={<ResetPasswordForm />} />
        </Route>
        <Route path="activate-user" element={<VerifyUser />} />
      </Route>

      {/* private routes  */}
      <Route path="/user" element={<UserLayout />}>
        <Route index element={<DashboardPage />} />
        <Route path="users" element={<UserPage />} />
        <Route path="profile" element={<ProfilePage />} />
        <Route path="books" element={<Books />} />
        <Route path="new-book" element={<NewBookPage />} />
        <Route path="edit-book" element={<EditBookPage />} />
        <Route path="book-landing" element={<BookLandingPage />} />
        <Route path="reviews" element={<ReviewsPage />} />
        <Route path="borrow" element={<BorrowPage />} />
      </Route>
    </Routes>
  );
};

export default AppRoutes;
