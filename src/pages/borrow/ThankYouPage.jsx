import { clearRecentBorrow } from "@features/borrow/borrowSlice";
import { formatISODate } from "@utils/date";
import { generateImageUrl } from "@utils/generateUrl";
import React, { useEffect } from "react";
import { Alert, Col, Container, Row, Table } from "react-bootstrap";
import { useDispatch, useSelector } from "react-redux";
import { Link } from "react-router-dom";

const ThankYouPage = () => {
  const { recentBorrow } = useSelector((state) => state.borrowInfo);
  const dispatch = useDispatch();
  useEffect(() => {
  let isFirstRun = true;

  return () => {
    if (isFirstRun) {
      isFirstRun = false; // won't persist across renders, just illustrative
      return;
    }

    dispatch(clearRecentBorrow());
  };
}, [dispatch]);

  return (
    <Container>
      <Row className="mt-4">
        <Col>
          <Alert variant="success" dismissible>
            Thank you for borrowing the books.
          </Alert>
          <Link to={`/user/borrow`}>Go to view all borrowed books.</Link>
        </Col>
      </Row>
      {recentBorrow.length > 0 && (
        <Row className="mt-4">
          <h3>Here are the list of books, you borrowed.</h3>

          <BorrowedTable recentBorrow={recentBorrow} />
        </Row>
      )}
    </Container>
  );
};

export default ThankYouPage;

const BorrowedTable = ({ recentBorrow }) => {
  return (
    <Table striped>
      <thead>
        <tr>
          <th>Thumbnail</th>
          <th>Title</th>
          <th>Due Date</th>
          <th>Borrowed At</th>
        </tr>
      </thead>
      <tbody>
        {recentBorrow.map((borrow) => (
          <tr style={{ verticalAlign: "middle" }}>
            <td>
              <img
                src={generateImageUrl(borrow.book.imageURL)}
                style={{ width: "80px", height: "auto" }}
              />
            </td>
            <td>{borrow.book.title}</td>
            <td>{formatISODate(borrow.dueDate)}</td>
            <td>{formatISODate(borrow.createdAt)}</td>
          </tr>
        ))}
      </tbody>
    </Table>
  );
};
