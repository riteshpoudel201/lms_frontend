/* eslint-disable react-hooks/exhaustive-deps */
import { Alert, Button, Form } from "react-bootstrap";
import CustomInput from "@components/common/CustomInput";
import useForm from "@hooks/useForm";
import { Link } from "react-router-dom";
import { useEffect, useState } from "react";
import { validator } from "../../utils/validatePassword";

const ResetPasswordForm = () => {
  const [passwordErrors, setPasswordErrors] = useState();
  const { formData, handleChange, isLoading, setIsLoading } = useForm({});
  const handleSubmit = (e) => {
    e.preventDefault();
    setIsLoading(true);
    console.log(formData);
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
          type="email"
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
