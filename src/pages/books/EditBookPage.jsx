import { EditBookForm } from "@components/forms";
import { deleteBookAction } from "@features/books/bookAction";
import { ArrowLeft } from "lucide-react";
import { Button } from "react-bootstrap";
import { useDispatch } from "react-redux";
import { Link, useNavigate, useParams } from "react-router-dom";

const EditBookPage = () => {
  const { id } = useParams();
  const dispatch = useDispatch();
  const navigate = useNavigate();
  const handleDeleteButtonClick = () => {
    const confirmDialog = confirm("Are you sure to do this?");
    if (!confirmDialog) return;
    dispatch(deleteBookAction(id));
    navigate("/user/books")
  };
  return (
    <div className="m-2 mx-4">
      <h3 className="mb-4 d-flex flex-row gap-4">
        <Link to="/user/books" className="text-dark">
          <ArrowLeft />
        </Link>
        Update Book Details
      </h3>
      <EditBookForm />
      <div className="w-100 text-center mt-2">
        <Button onClick={handleDeleteButtonClick} variant="outline" className="text-danger text-decoration-underline underline-offset-8 p-1" >
          Delete this book
        </Button>
      </div>
    </div>
  );
};

export default EditBookPage;
