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
  const [thumbnail, setThumbnail] = useState(formData?.imageURL ?? "");

  const { id } = useParams();
  const navigate = useNavigate();
  const dispatch = useDispatch();

  const handleRemoveImage = (imageToRemove) => {
    setFormData((prevData) => ({
      ...prevData,
      imageList: prevData.imageList.filter((img) => img !== imageToRemove),
    }));
  };

  const handleImageChange = (e) => {
    console.log(e.target.files);
    if (e.target.files.length > 2) {
      e.target.value = "";
      return alert("Maximum 2 images are allowed.");
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
      imageURL,
      imageList,
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
    image?.map((img) => bookFormData.append("bookImage", img));
    imageList?.map((img) => bookFormData.append("imageList", img));
    bookFormData.append("imageURL", thumbnail);
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

      <div className="d-flex flex-column gap-3 w-100 mb-3">
        <h4 className="fw-bold">Available Images:</h4>
        <div className="d-flex flex-wrap gap-3">
          {formData?.imageList &&
            formData.imageList.map((image) => (
              <div
                key={image}
                className="position-relative shadow rounded"
                style={{ width: "220px" }}
              >
                <div
                  className="position-relative w-100 rounded"
                  style={{ height: "200px" }}
                >
                  {/* Image */}
                  <img
                    src={`${import.meta.env.VITE_API_BASE_URL}/${image}`}
                    alt="Image Unavailable"
                    className="w-100 h-100 object-fit-cover rounded"
                  />

                  {/* Close button */}
                  <button
                    type="button"
                    className="btn btn-dark position-absolute top-0 start-100 translate-middle d-flex align-items-center justify-content-center"
                    style={{
                      width: "16px",
                      height: "24px",
                      borderRadius: "50%",
                      zIndex: "10",
                      color: "white",
                      fontSize: "16px",
                    }}
                    onClick={handleRemoveImage}
                  >
                    ×
                  </button>

                  {/* Hover overlay */}
                  <div
                    className="position-absolute top-0 start-0 w-100 h-100 d-flex justify-content-center align-items-center bg-dark bg-opacity-50 opacity-0 hover-overlay transition-opacity"
                    style={{ transition: "opacity 0.3s ease" }}
                  >
                    <button
                      type="button"
                      className="btn btn-light"
                      onClick={() => setThumbnail(image)}
                    >
                      Set Thumbnail
                    </button>
                  </div>
                </div>
              </div>
            ))}
        </div>
      </div>

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
            src={`${import.meta.env.VITE_API_BASE_URL}/${
              thumbnail || formData?.imageURL
            }`}
            alt="Image Unavailable"
            style={{
              height: "100px",
              width: "100px",
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
