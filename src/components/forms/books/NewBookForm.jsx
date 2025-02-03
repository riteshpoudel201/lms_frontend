import CustomInput from "@components/common/CustomInput";
import useForm from "@hooks/useForm";
import { Button, Form } from "react-bootstrap";
import { bookFields } from "@/assets/custom-inputs/bookInputs";
import { postNewBookAction } from "@features/books/bookAction";
import { useDispatch } from "react-redux";

const NewBookForm = () => {
  const { formData, handleChange, isLoading, setIsLoading } = useForm({});

  const dispatch = useDispatch();

  const handleSubmit = async (e) => {
    e.preventDefault();
    setIsLoading(true);
    const response = await dispatch(postNewBookAction(formData));
    setIsLoading(false);
  };
  return (
    <Form onSubmit={handleSubmit}>
      {bookFields &&
        bookFields.map((field) => (
          <CustomInput key={field.name} onChange={handleChange} {...field} />
        ))}
      <div className="d-grid">
        <Button type="submit" disabled={isLoading}>
          {isLoading ? "Adding book..." : "Add Book"}
        </Button>
      </div>
    </Form>
  );
};

export default NewBookForm;
