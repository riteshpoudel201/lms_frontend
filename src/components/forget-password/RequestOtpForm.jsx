import CustomInput from "@components/common/CustomInput";
import { Button, Form } from "react-bootstrap";
import useForm from "@hooks/useForm";
const RequestOtpForm = () => {
  const { formData, handleChange, isLoading, setIsLoading } = useForm({});
  const handleSubmit = (e) => {
    e.preventDefault();
    setIsLoading(true);
    console.log(formData);
    setIsLoading(false);
  };
  return (
    <Form onSubmit={handleSubmit}>
      <CustomInput
        name="email"
        label="Email"
        placeholder="email@email.com"
        type="email"
        onChange={handleChange}
        required
      />

      <Button
        variant="dark"
        className="w-100"
        type="submit"
        disabled={isLoading}
      >
        {isLoading ? "Requesting otp..." : "Request OTP"}
      </Button>
    </Form>
  );
};

export default RequestOtpForm;
