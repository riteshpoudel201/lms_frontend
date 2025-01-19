import CustomInput from "@components/common/CustomInput";
import { Button, Form } from "react-bootstrap";
import useForm from "@hooks/useForm";
import { requestOTP } from "../../services/authService";
import { toast } from "react-toastify";
import { useNavigate } from "react-router-dom";

const RequestOtpForm = () => {
  const { formData, handleChange, isLoading, setIsLoading } = useForm({});
  const navigate = useNavigate();
  const handleSubmit = async (e) => {
    e.preventDefault();
    setIsLoading(true);
    const pending = requestOTP(formData?.email);
    toast.promise(pending, {
      pending: "Requesting otp...",
    });
    if (!formData.email) {
      toast.error("Email is required.");
      return;
    }
    const { status, message } = await pending;
    toast[status](message);
    if (status === "success") {
      navigate("/password/reset");
    }
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
