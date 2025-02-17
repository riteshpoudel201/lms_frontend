/* eslint-disable react-hooks/exhaustive-deps */
import CustomInput from "@components/common/CustomInput";
import useForm from "@hooks/useForm";
import { Button, Form } from "react-bootstrap";
import { bookFields } from "@/assets/custom-inputs/bookInputs";
import { useSelector } from "react-redux";
import { useNavigate, useParams } from "react-router-dom";
import { useEffect } from "react";
// import { postNewBookAction } from "@features/books/bookAction";
// import { useDispatch } from "react-redux";

const EditBookForm = () => {
  const { formData, setFormData, handleChange, isLoading, setIsLoading } =
    useForm({});
  const { books } = useSelector((state) => state.bookInfo);
  const { id } = useParams();
  const navigate = useNavigate();

  // const dispatch = useDispatch();
  console.log("Type of Book: ", typeof books);
  const handleSubmit = async (e) => {
    e.preventDefault();
    setIsLoading(true);
    // dispatch(postNewBookAction(formData));
    console.log(formData);
    setIsLoading(false);
  };
  useEffect(() => {
    console.log("I am inside use effect.");
    if (id !== formData?._id) {
      console.log("Inside id check.");
      const selectedBook = books?.find((book) => book._id === id);
      console.log("Selected Book: ", selectedBook);
      setFormData(selectedBook);
    } else {
      navigate("/user/books");
    }
  }, [id, navigate, setFormData]);
  console.log("Form data:", formData);
  console.log("Book fields: ", bookFields);
  return (
    <Form onSubmit={handleSubmit}>
      <Form.Check
        name="status"
        type="switch"
        id="custom-switch"
        label={formData?.status.toUpperCase() || "Status"}
        checked={formData?.status === "active"}
        onChange={handleChange}
      />
      {bookFields &&
        bookFields.map((field) => (
          <CustomInput
            key={field.name}
            onChange={handleChange}
            value={formData?.[field.name] || ""}
            {...field}
          />
        ))}
      <div className="container p-4 bg-light rounded shadow-sm mb-3">
        <hr />
        <h4 className="fw-bold mb-3 text-dark">Additional Info</h4>
        <div className="mb-2">
          <strong>Added By:</strong> {formData?.addedBy?.name || "N/A"} <br />
          <strong>Date:</strong> {formData?.createdAt || "N/A"}
        </div>
        <div className="mb-2">
          <strong>Last Updated By:</strong> {formData?.lastUpdatedBy?.name || "N/A"}{" "}
          <br />
          <strong>Date:</strong> {formData?.updatedAt || "N/A"}
        </div>
      </div>

      <div className="d-grid">
        <Button type="submit" disabled={isLoading}>
          {isLoading ? "Updating book..." : "Update Book"}
        </Button>
      </div>
    </Form>
  );
};

export default EditBookForm;
