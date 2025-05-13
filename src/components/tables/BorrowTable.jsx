import { formatISODate } from "@utils/date";
import { generateImageUrl } from "@utils/generateUrl";
import { Button, Table } from "react-bootstrap";
import { Link } from "react-router-dom";

export const BorrowTable = ({ data , message }) => {
  return (
    <Table striped bordered hover>
      <thead className="table-dark">
        <tr className="text-center">
          <th>#</th>
          <th>Thumbnail</th>
          <th>Book Title</th>
          <th>User ID</th>
          <th>Borrowed Date</th>
          <th>Due Date</th>
          <th>Action</th>
        </tr>
      </thead>
      <tbody>
        {data?.length > 0 ? (
          data.map((borrow, index) => (
            <tr key={borrow?._id} className="text-center align-middle">
              <td>{index + 1}</td>
              <td>
                <img
                  src={generateImageUrl(borrow?.book?.imageURL)}
                  alt=""
                  style={{ width: "90px", borderRadius: "6px" }}
                  onError={(e) =>
                    (e.currentTarget.src = "/book-placeholder.png")
                  }
                />
              </td>
              <td title={borrow?.book?.title}>{borrow?.book?.title?.slice(0,20)}...</td>
              <td>{borrow?.userId}</td>
              <td>{formatISODate(borrow.createdAt)}</td>
              <td>{formatISODate(borrow.dueDate)}</td>
              <td>
                <Link to={`/user/edit-book/${borrow?._id}`}>
                  <Button variant="secondary">Edit</Button>
                </Link>
              </td>
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
