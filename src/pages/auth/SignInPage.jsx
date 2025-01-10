import { Button, Card, Form } from "react-bootstrap";
import CustomInput from "@components/common/CustomInput";
import useForm from "@hooks/useForm";
import { signInUser } from "../../services/authService";
import { Link, useNavigate } from "react-router-dom";
import { useDispatch, useSelector } from "react-redux";
import { fetchUserAction } from "../../features/users/userAction";
import { useEffect } from "react";

const SignInPage = () => {
  const { formData, handleChange, isLoading, setIsLoading } = useForm({});

  const nav = useNavigate();
  const dispatch = useDispatch();
  const { user } = useSelector((state)=> state.userInfo);

  useEffect(()=>{
    user?._id && nav("/user");
  },[user?._id,nav])

  const handleSubmit = async (e) => {
    e.preventDefault();
    setIsLoading(true);
    const { status, data } = await signInUser(formData);
    // console.log(result);
    if (status === "success") {
      const { accessJwt, refreshJwt } = data;
      sessionStorage.setItem("accessToken", accessJwt);
      localStorage.setItem("refreshToken", refreshJwt);
      dispatch(fetchUserAction());
      setIsLoading(false);
    }

    setIsLoading(false);
  };
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
              Forget password? <Link to="/forget">Reset Now</Link>
            </p>
          </Card.Footer>
        </Card.Body>
      </Card>
    </div>
  );
};

export default SignInPage;
