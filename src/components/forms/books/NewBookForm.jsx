import CustomInput from "@components/common/CustomInput";
import useForm from "@hooks/useForm";
import { Button, Form } from "react-bootstrap";
import { newFormBookFields } from "@/assets/custom-inputs/bookInputs";
import { postNewBookAction } from "@features/books/bookAction";
import { useDispatch } from "react-redux";
import { useState } from "react";

const NewBookForm = () => {
  const { formData, handleChange, isLoading, setIsLoading } = useForm({});
  const [image, setImage] = useState(null);

  const dispatch = useDispatch();
  const handleImageChange = (e) =>{
setImage(e.target.files[0])
  }

  const handleSubmit = async (e) => {
    e.preventDefault();
    const bookFormData = new FormData();
    for(const key in formData){
      bookFormData.append(key, formData[key]);
    }
    bookFormData.append("bookImage", image);
    setIsLoading(true);
    dispatch(postNewBookAction(bookFormData));
    setIsLoading(false);
  };
  return (
    <Form onSubmit={handleSubmit} encType="multipart/form-data">
      {newFormBookFields &&
        newFormBookFields.map((field) => (
          <CustomInput key={field.name} onChange={field.type === "file" ? handleImageChange : handleChange} {...field} />
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
