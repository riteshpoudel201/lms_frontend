import { useState, useEffect, useRef } from "react";
import { Button, Col, Container, Row } from "react-bootstrap";
import { useSelector } from "react-redux";
import { useParams } from "react-router-dom";

const BookLandingPage = () => {
  const { slug } = useParams();
  const { publicBooks } = useSelector((state) => state.bookInfo);
  const [isTruncated, setIsTruncated] = useState(false);
  const descriptionRef = useRef(null);

  const book = publicBooks.find((book) => book.slug === slug);

  useEffect(() => {
    if (descriptionRef.current) {
      setIsTruncated(descriptionRef.current.scrollHeight > descriptionRef.current.clientHeight);
    }
  }, [book]); 

  if (!book) {
    return <h2>Book not found</h2>;
  }

  return (
    <Container className="mt-2">
      <Row>
        <Col md={4}>
          <img src={book.imageURL} alt={book.title} className="img-fluid" />
        </Col>

        <Col md={8} className="d-flex flex-column">
          <div className="d-flex flex-column gap-2 flex-grow-1">
            <h3>{book.title}</h3>
            <b>
              {book.author} - {book.year}
            </b>
            <span>
              {book.genre} | {book.averageRating}
            </span>
            <p
              ref={descriptionRef}
              className={`book-description ${isTruncated ? "truncate" : ""}`}
            >
              {book.description}
            </p>
          </div>
          <hr />
          <Button variant="dark" className="mt-auto">
            Add to Borrowing List
          </Button>
        </Col>
      </Row>

      <Row>
        <Col>Bottom More Details Section</Col>
      </Row>
    </Container>
  );
};

export default BookLandingPage;
