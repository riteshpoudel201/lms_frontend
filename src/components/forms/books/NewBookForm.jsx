import CustomInput from "@components/common/CustomInput";
import useForm from "@hooks/useForm";
import { Button, Form } from "react-bootstrap";
import { bookFields } from "@/assets/custom-inputs/bookInputs";



const NewBookForm = () => {
  const {formData, handleChange, isLoading, setIsLoading} = useForm({});

  const handleSubmit =(e) =>{
    e.preventDefault();
    setIsLoading(true);
    console.log(formData);
    setIsLoading(false);
  }
  return (
    <Form onSubmit={handleSubmit}>
      {bookFields && bookFields.map((field) => (
        <CustomInput
          key={field.name}
          onChange={handleChange}
          {...field}
        />
      ))}
   <div className="d-grid">
    <Button type="submit" disabled={isLoading}>{isLoading ? "Adding book..." : "Add Book"}</Button>
   </div>
    </Form>
  );
};

export default NewBookForm;
