/* eslint-disable react-hooks/exhaustive-deps */
import Button from "react-bootstrap/Button";
import Form from "react-bootstrap/Form";
import CustomInput from "../../components/common/CustomInput";
import useForm from "../../hooks/useForm";
import { registerNewUser } from "../../services/authService";
import { useEffect, useState } from "react";
import { validator } from "../../utils/validatePassword";
import { useNavigate } from "react-router-dom";
const formFields = [
  {
    name: "firstName",
    label: "First name",
    placeholder: "Enter your first name..",
    required: true,
  },
  {
    name: "lastName",
    label: "Last name",
    placeholder: "Enter your last name..",
    required: true,
  },
  {
    name: "email",
    type: "email",
    label: "Email address",
    placeholder: "Enter your email address..",
    required: true,
  },
  {
    name: "phone",
    type: "Number",
    label: "Phone",
    placeholder: "Enter your phone number..",
    required: false,
  },
  {
    name: "password",
    type: "password",
    label: "Password",
    placeholder: "***********",
    required: true,
  },
  {
    name: "confirmPassword",
    type: "password",
    label: "Confirm Password",
    placeholder: "***********",
    required: true,
  },
];
const SignUpPage = () => {
  const { data, handleChange, isLoading, setIsLoading } = useForm({});
  const [passwordErrors, setPasswordErrors] = useState();
const nav = useNavigate();
  const handleSubmit = async (e) => {
    e.preventDefault();
    setIsLoading(true);
    const { confirmPassword, ...rest } = data;
    if (confirmPassword !== rest.password) {
      alert("Password not matching.");
      setIsLoading(false);
      return;
    }
    const result = await registerNewUser(data);
    if (result.data.status === "success") {
      setIsLoading(false);
      nav("/signin")
    }
    console.log(result);
    setTimeout(() => {
      setIsLoading(false);
    }, 1500);

    // setIsLoading(false);
  };

  useEffect(() => {
    if (!data) return;
    // Only run validation if both password and confirmPassword exist
    if (data.password && data.confirmPassword) {
      const errors = validator(data.password, data.confirmPassword);
      if (errors && errors.length > 0) {
        setPasswordErrors(errors);
      } else {
        setPasswordErrors(); // Clear errors if there are no validation issues
      }
    }
  }, [data?.password, data?.confirmPassword]);

  console.log(passwordErrors);
  return (
    <div
      className="card shadow-lg py-3 px-5 mt-5 mb-3 d-flex justify-content-center align-items-center"
      style={{ width: "450px", marginInline: "auto" }}
    >
      <h1 className="text-center">Join our library community.</h1>
      <hr />
      <Form className="w-100" onSubmit={handleSubmit}>
        {formFields?.map((formfield) => (
          <CustomInput
            {...formfield}
            key={formfield.name}
            ritesh={"ritesh-p"}
            onChange={handleChange}
          />
        ))}
        <Button
          variant="dark"
          type="submit"
          className="w-100"
          disabled={isLoading}
        >
          {isLoading ? "Submitting..." : "Submit"}
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
    </div>
  );
};

export default SignUpPage;