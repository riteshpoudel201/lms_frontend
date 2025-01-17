import { Button, Card, Form, Spinner } from "react-bootstrap";
import CustomInput from "@components/common/CustomInput";
import useForm from "@hooks/useForm";
import { signInUser } from "@services/authService";
import { Link, useNavigate } from "react-router-dom";
import { useDispatch, useSelector } from "react-redux";
import {
  autoLoginUser,
  fetchUserAction,
} from "../../features/users/userAction";
import { useEffect, useState } from "react";

const SignInPage = () => {
  const { formData, handleChange, isLoading, setIsLoading } = useForm({});
  const [showSpinner, setShowSpinner] = useState(true);

  const nav = useNavigate();
  const dispatch = useDispatch();

  const { user } = useSelector((state) => state.userInfo);

  useEffect(() => {
    const hasToken =
      sessionStorage.getItem("accessToken") || localStorage.getItem("refreshToken");

    if (hasToken) {
      dispatch(autoLoginUser());
    }
    
    const timer = setTimeout(() => setShowSpinner(false), 2000);
    return () => clearTimeout(timer); // Clean up the timer on component unmount
  }, [dispatch]);

  useEffect(() => {
    if (user?._id) {
      nav("/user");
    }
  }, [user?._id, nav]);

  const handleSubmit = async (e) => {
    e.preventDefault();
    setIsLoading(true);
    const { status, data } = await signInUser(formData);
    if (status === "success") {
      const { accessJwt, refreshJwt } = data;
      sessionStorage.setItem("accessToken", accessJwt);
      localStorage.setItem("refreshToken", refreshJwt);
      dispatch(fetchUserAction());
    }
    setIsLoading(false);
  };

  if (showSpinner) {
    return (
      <div className="vh-100 d-flex justify-content-center align-items-center">
        <Spinner animation="border" role="status">
          <span className="visually-hidden">Loading...</span>
        </Spinner>
      </div>
    );
  }

  return (
    <div
      className="bg-primary d-flex justify-content-center align-items-center"
      style={{
        height: "80vh",
        backgroundImage: "url('./src/assets/background.jpg')",
        backgroundPosition: "center",
        backgroundRepeat: "no-repeat",
        backgroundSize: "cover",
      }}
    >
      <Card style={{ width: "18rem", borderRadius: "10px" }}>
        <Card.Title style={{ textAlign: "center", marginTop: "0.9rem" }}>
          Welcome to LMS
        </Card.Title>
        <Card.Body>
          <Form onSubmit={handleSubmit}>
            <CustomInput
              name="email"
              label="Email"
              placeholder="email@email.com"
              type="email"
              onChange={handleChange}
              required
            />
            <CustomInput
              name="password"
              label="Password"
              placeholder="********"
              type="password"
              onChange={handleChange}
              required
            />
            <Button
              variant="dark"
              className="w-100"
              type="submit"
              disabled={isLoading}
            >
              {isLoading ? "Logging in..." : "Login"}
            </Button>
          </Form>
          <Card.Footer>
            <p>
              Forget password? <Link to="/password">Reset Now</Link>
            </p>
          </Card.Footer>
        </Card.Body>
      </Card>
    </div>
  );
};

export default SignInPage;
