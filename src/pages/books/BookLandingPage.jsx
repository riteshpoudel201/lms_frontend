import BreadcrumbComponent from "@components/common/Breadcrumb";
import SpinnerLoader from "@components/common/Spinner";
import { fetchBookBySlugAction } from "@features/books/bookAction";
import { useState, useEffect, useRef } from "react";
import { Alert, Button, Col, Container, Row } from "react-bootstrap";
import { useDispatch, useSelector } from "react-redux";
import { useParams } from "react-router-dom";

const BookLandingPage = () => {
  const { slug } = useParams();
  const dispatch = useDispatch();
  const { publicBooks } = useSelector((state) => state.bookInfo);
  const { book } = useSelector((state) => state.bookInfo);
  const [isTruncated, setIsTruncated] = useState(false);
  const descriptionRef = useRef(null);
  const [bookDetails, setBookDetails] = useState({});
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    if (descriptionRef.current) {
      setIsTruncated(
        descriptionRef.current.scrollHeight >
          descriptionRef.current.clientHeight
      );
    }
    const selectedBook = publicBooks.find((book) => book.slug === slug);
    setBookDetails(selectedBook);

    //fetching from the server
    if (!selectedBook) {
      setLoading(true);
      dispatch(fetchBookBySlugAction(slug));
      setBookDetails(book);
    }
    setLoading(false);

  }, [book, slug, dispatch, publicBooks]);

  if (loading) {
    return (
      <Container
        fluid
        className="d-flex justify-content-center align-items-center"
        style={{ height: "75vh" }}
      >
        <Row className="w-100">
          <Col className="d-flex justify-content-center align-items-center">
            <SpinnerLoader />
          </Col>
        </Row>
      </Container>
    );
  }

  if (!bookDetails) {
    return (
      <Container className="mt-4">
        <Row>
          <Col>
            <Alert variant="danger">
              Book unavailable. Please contact admin.
            </Alert>
          </Col>
        </Row>
      </Container>
    );
  }

  return (
    <Container className="mt-2">
      <Row>
        <BreadcrumbComponent
          title={
            bookDetails?.title?.length > 10
              ? `${bookDetails?.title?.slice(0, 10)}...`
              : bookDetails?.title
          }
        />
        <Col md={4}>
          <img
            src={bookDetails?.imageURL}
            alt={bookDetails?.title}
            className="img-fluid"
          />
        </Col>

        <Col md={8} className="d-flex flex-column">
          <div className="d-flex flex-column gap-2 flex-grow-1">
            <h3>{bookDetails?.title}</h3>
            <b>
              {bookDetails?.author} - {bookDetails?.year}
            </b>
            <span>
              {bookDetails?.genre} | {bookDetails?.averageRating}
            </span>
            <p
              ref={descriptionRef}
              className={`book-description ${isTruncated ? "truncate" : ""}`}
            >
              {bookDetails?.description}
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
