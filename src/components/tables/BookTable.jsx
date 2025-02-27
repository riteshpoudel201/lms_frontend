/* eslint-disable react/prop-types */
import { Button } from "react-bootstrap";
import Table from "react-bootstrap/Table";
import { Link } from "react-router-dom";

function BooksTable({ data }) {
  return (
    <Table striped bordered hover>
      <thead className="table-dark">
        <tr className="text-center">
          <th>#</th>
          <th>Thumbnail</th>
          <th> Name</th>
          <th>Availability</th>
          <th>Status</th>
          <th>Action</th>
        </tr>
      </thead>
      <tbody>
        {data?.length > 0 ? (
          data.map((book, index) => (
            <tr key={book?._id} className="text-center align-middle">
              <td>{index + 1}</td>
              <td>
                <img
                  src={
                    book?.imageURL.includes("http")
                      ? book?.imageURL
                      : `${import.meta.env.VITE_API_BASE_URL}/${book?.imageURL}`
                  }
                  alt=""
                  style={{ width: "90px", borderRadius: "6px" }}
                  onError={(e) =>
                    (e.currentTarget.src = "/book-placeholder.png")
                  }
                />
              </td>
              <td>{book?.title}</td>
              <td>
                {book.available
                  ? "Available"
                  : book?.expectedAvailabilityDate
                  ? "From: " + book.expectedAvailabilityDate.slice(0, 10)
                  : "Not Available"}
              </td>
              <td>
                <p
                  className={`text-white py-1 ${
                    book.status === "active"
                      ? "bg-success rounded-pill"
                      : "bg-danger rounded-pill"
                  }`}
                >
                  {book.status}
                </p>
              </td>
              <td>
                <Link to={`/user/edit-book/${book?._id}`}>
                  <Button variant="secondary">Edit</Button>
                </Link>
              </td>
            </tr>
          ))
        ) : (
          <tr>
            <td colSpan={6} className="text-center">
              No books available.
            </td>
          </tr>
        )}
      </tbody>
    </Table>
  );
}

export default BooksTable;
