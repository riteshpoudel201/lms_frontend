import { returnBorrowedBookAction } from "@features/borrow/borrowAction";
import { formatISODate } from "@utils/date";
import { generateImageUrl } from "@utils/generateUrl";
import { Button, Table } from "react-bootstrap";
import { useDispatch } from "react-redux";
import { Link, useNavigate } from "react-router-dom";
import { toast } from "react-toastify";

export const BorrowTable = ({ data, message, isAdmin }) => {
  const navigate = useNavigate();

  const dispatch = useDispatch();

  const handleBookReturn = ({ book }) => {
    const alertMessage = "Are you sure to return this book?";
    if (confirm(alertMessage)) {
      const completeBorrow = dispatch(returnBorrowedBookAction(book));

      toast[completeBorrow.status](completeBorrow.message);
    } else {
      toast.error("Unable to return sir.");
    }
  };
  return (
    <Table striped bordered hover>
      <thead className="table-dark">
        <tr className="text-center">
          <th>#</th>
          <th>Status</th>
          <th>Thumbnail</th>
          <th>Book Title</th>
          <th>User ID</th>
          <th>Borrowed Date</th>
          <th>Due Date</th>
          {!isAdmin && <th>Action</th>}
        </tr>
      </thead>
      <tbody>
        {data?.length > 0 ? (
          data.map((borrow, index) => (
            <tr key={borrow?._id} className="text-center align-middle">
              <td>{index + 1}</td>
              <td>
                {borrow?.isReturned ? "Returned" : "Borrowed"}
                {borrow?.reviewId && "& Reviewed"}
              </td>
              <td>
                <img
                  src={generateImageUrl(borrow?.book?.imageURL)}
                  alt=""
                  style={{ width: "60px", borderRadius: "6px" }}
                  onError={(e) =>
                    (e.currentTarget.src = "/book-placeholder.png")
                  }
                />
              </td>
              <td
                title={borrow?.book?.title}
                onClick={() => navigate(`/book/${borrow?.book?.slug}`)}
                style={{ cursor: "pointer", textDecoration: "underline" }}
              >
                {borrow?.book?.title?.slice(0, 20)}...
              </td>
              <td>{borrow?.userId}</td>
              <td>{formatISODate(borrow.createdAt)}</td>
              <td>{formatISODate(borrow.dueDate)}</td>
              {!isAdmin && (
                <td>
                  <div className="d-flex flex-row gap-1">
                    {!borrow?.isReturned && (
                      <Button variant="warning" onClick={handleBookReturn}>
                        Return Book{" "}
                      </Button>
                    )}
                    {borrow?.isReturned && !borrow?.reviewId && (
                      <Link to={`/user/book/review/${borrow?.book?._id}`}>
                        <Button
                          variant="outline"
                          style={{ textDecoration: "underline" }}
                        >
                          Review
                        </Button>
                      </Link>
                    )}

                    {borrow?.reviewId && "Reviewed"}
                  </div>
                </td>
              )}
            </tr>
          ))
        ) : (
          <tr>
            <td colSpan={7} className="text-center">
              {message?.length > 0 ? message : "No books have been borrowed."}
            </td>
          </tr>
        )}
      </tbody>
    </Table>
  );
};
