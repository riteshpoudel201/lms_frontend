/* eslint-disable no-unused-vars */
/* eslint-disable react-hooks/exhaustive-deps */
import CustomInput from "@components/common/CustomInput";
import useForm from "@hooks/useForm";
import { Button, Form } from "react-bootstrap";
import { updateFormBookFields } from "@/assets/custom-inputs/bookInputs";
import { useDispatch, useSelector } from "react-redux";
import { useNavigate, useParams } from "react-router-dom";
import { useEffect, useState } from "react";
import { updateBookAction } from "@features/books/bookAction";

const EditBookForm = () => {
  const { formData, setFormData, handleChange, isLoading, setIsLoading } =
    useForm({});
  const { books } = useSelector((state) => state.bookInfo);
  const [image, setImage] = useState(null);

  const { id } = useParams();
  const navigate = useNavigate();
  const dispatch = useDispatch();

  const handleImageChange = (e) => {
    console.log(e.target.files);
    if(e.target.files.length > 2){
      e.target.value = "";
      return alert("Maximum 2 images are allowed.")
    }
    setImage([...e.target.files]);
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    setIsLoading(true);
    const {
      addedBy,
      createdAt,
      updatedAt,
      lastUpdatedBy,
      __v,
      _id: bookId,
      slug,
      isbn,
      available,
      ...rest
    } = formData;
    const bookFormData = new FormData();
    for (const key in rest) {
      bookFormData.append(key, rest[key]);
    }
    image.map(img=> bookFormData.append("bookImage", img));
    console.log(bookId, rest);
    dispatch(updateBookAction(bookFormData, bookId));

    setIsLoading(false);
  };

  useEffect(() => {
    if (books?.length > 0 && id !== formData?._id) {
      const selectedBook = books?.find((book) => book._id === id);

      setFormData(selectedBook);
    } else {
      navigate("/user/books");
    }
  }, [id, navigate, setFormData]);
  console.log("Form Data: ", formData);
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
      {updateFormBookFields &&
        updateFormBookFields.map((field) => (
          <CustomInput
            key={field.name}
            onChange={handleChange}
            value={formData?.[field.name] || ""}
            {...field}
          />
        ))}
      <CustomInput
        label="Upload More (Max 2)"
        type="file"
        onChange={handleImageChange}
        accept="image/*"
        multiple
      />
      {formData?.imageURL && (
        <div className="m-3">
          <img
            src={`${import.meta.env.VITE_API_BASE_URL}/${formData?.imageURL}`}
            alt="Image Unavailable"
            style={{
              height: "200px",
              width: "200px",
              objectFit: "cover",
              objectPosition: "center",
              borderRadius: "8px",
            }}
          />
        </div>
      )}

      <div className="container p-4 bg-light rounded shadow-sm mb-3">
        <hr />
        <h4 className="fw-bold mb-3 text-dark">Additional Info</h4>
        <div className="mb-2">
          <strong>Added By:</strong> {formData?.addedBy?.name || "N/A"} <br />
          <strong>Date:</strong> {formData?.createdAt || "N/A"}
        </div>
        <div className="mb-2">
          <strong>Last Updated By:</strong>{" "}
          {formData?.lastUpdatedBy?.name || "N/A"} <br />
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
