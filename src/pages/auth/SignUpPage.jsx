// import UserForm from "../../components/UserForm"
import Button from "react-bootstrap/Button";
import Form from "react-bootstrap/Form";
import CustomInput from "../../components/common/CustomInput";
import useForm from "../../hooks/useForm";
import { registerNewUser } from "../../services/authService";
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
    placeholder: "Enter your email address..",
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
    console.log(result);
    setTimeout(() => {
      setIsLoading(false);
    }, 1500);

    // setIsLoading(false);
  };
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
      </Form>
    </div>
  );
};

export default SignUpPage;
