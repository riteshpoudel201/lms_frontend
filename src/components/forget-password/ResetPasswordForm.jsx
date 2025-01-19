/* eslint-disable react-hooks/exhaustive-deps */
import { Alert, Button, Form } from "react-bootstrap";
import CustomInput from "@components/common/CustomInput";
import useForm from "@hooks/useForm";
import { Link, useNavigate } from "react-router-dom";
import { useEffect, useState } from "react";
import { validator } from "../../utils/validatePassword";
import { resetUserPassword } from "../../services/authService";
import { toast } from "react-toastify";

const ResetPasswordForm = () => {
  const [passwordErrors, setPasswordErrors] = useState();
  const { formData, handleChange, isLoading, setIsLoading } = useForm({});

  const navigate = useNavigate();

  const handleSubmit = async (e) => {
    e.preventDefault();
    setIsLoading(true);
    const pending = resetUserPassword({
      otp: formData.otp,
      password: formData?.password,
    });
    toast.promise(pending, {
      pending: "Resetting password...",
    });

    if (!formData.otp) {
      toast.error("OTP must be provided");
      return;
    }
    if (!formData.password) {
      toast.error("Password must be provided");
      return;
    }
    if (!formData.confirmPassword) {
      toast.error("Confirm password is required.");
      return;
    }
    if (formData.password !== formData.confirmPassword) {
      toast.error("Password not matching.");
      return;
    }

    const { status, message } = await pending;

    toast[status](message);
    if (status === "success") {
      setIsLoading(false);
      navigate("/signin");
    }
    setIsLoading(false);
  };

  useEffect(() => {
    if (!formData) return;

    if (formData.password && formData.confirmPassword) {
      const errors = validator(formData.password, formData.confirmPassword);
      if (errors && errors.length > 0) {
        setPasswordErrors(errors);
      } else {
        setPasswordErrors();
      }
    }
  }, [formData?.password, formData?.confirmPassword]);
  return (
    <>
      <Alert variant="info">
        An OTP has been sent to the email address associated with your account.
        Please check your spam folder if you do not see it in your inbox. Ensure
        that your account is registered with this email address.
      </Alert>
      <Form onSubmit={handleSubmit}>
        <CustomInput
          name="otp"
          label="OTP"
          type="text"
          placeholder="Enter OTP..."
          onChange={handleChange}
          required
        />
        <CustomInput
          name="password"
          label="New Password"
          placeholder="******"
          type="password"
          onChange={handleChange}
          required
        />
        <CustomInput
          name="confirmPassword"
          label="Confirm Password"
          placeholder="******"
          type="password"
          onChange={handleChange}
          required
        />

        <Button
          variant="dark"
          className="w-100"
          type="submit"
          disabled={passwordErrors?.length > 0 || isLoading}
        >
          {isLoading ? "Resetting password..." : "Reset Password"}
        </Button>
        {passwordErrors && (
          <ul
            className="text-danger"
            style={{
              border: "1px solid red",
              borderRadius: "8px",
              marginTop: "1rem",
            }}
          >
            {passwordErrors.map((error) => (
              <li key={error}>{error}</li>
            ))}
          </ul>
        )}
      </Form>
      <p className="w-100 text-center my-3">
        {" "}
        OTP not received.{" "}
        <Link to="/password" className="align-text-center mt-2 mb-3">
          Go back
        </Link>
      </p>
    </>
  );
};

export default ResetPasswordForm;
