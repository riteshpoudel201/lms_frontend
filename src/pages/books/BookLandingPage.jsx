import BreadcrumbComponent from "@components/common/Breadcrumb";
import SpinnerLoader from "@components/common/Spinner";
import { fetchBookBySlugAction } from "@features/books/bookAction";
import { useState, useEffect, useRef } from "react";
import { Alert, Button, Col, Container, Row, Tab, Tabs } from "react-bootstrap";
import { useDispatch, useSelector } from "react-redux";
import { useParams } from "react-router-dom";
import { generateImageUrl } from "@utils/generateUrl";
import Star from "@components/common/Star";
import Reviews from "@components/common/Reviews";
import { setCartItems } from "@features/cart/cartSlice";
import { toast } from "react-toastify";

const BookLandingPage = () => {
  const { slug } = useParams();
  const dispatch = useDispatch();
  const { publicBooks } = useSelector((state) => state.bookInfo);
  const { cartItems } = useSelector((state) => state.cartInfo);
  const { book } = useSelector((state) => state.bookInfo);
  const [isTruncated, setIsTruncated] = useState(false);
  const descriptionRef = useRef(null);
  const [bookDetails, setBookDetails] = useState({});
  const [loading, setLoading] = useState(true);
  const [selectedImage, setSelectedImage] = useState("");

  const isBookInTheCart = cartItems.some((item) => item._id === bookDetails?._id);

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
        <Col md={4} className="d-flex flex-column gap-3 overflow-hidden">
          <Row className="" style={{ height: "400px" }}>
            <img
              src={selectedImage || bookDetails?.imageURL}
              alt={bookDetails?.title}
              className="img-fluid w-100 h-100"
              style={{
                objectFit: "contain",
                objectPosition: "center",
              }}
            />
          </Row>
          <Row
            className=" d-flex flex-row flex-nowrap"
            style={{ overflow: "auto" }}
          >
            {bookDetails?.imageList?.map((image) => (
              <img
                key={image}
                src={generateImageUrl(image)}
                alt="images"
                className="w-20"
                style={{ width: "auto", height: "5rem", borderRadius: "5px" }}
                onClick={() => setSelectedImage(image)}
              />
            ))}
          </Row>
        </Col>
        <Col md={8} className="d-flex flex-column">
          <div className="d-flex flex-column gap-2 flex-grow-1">
            <h3>{bookDetails?.title}</h3>
            <b>
              {bookDetails?.author} - {bookDetails?.year}
            </b>
            <div className="d-flex flex-row gap-2">
              <span>{bookDetails?.genre}</span>
              <Star rating={bookDetails?.averageRating} />
              <span className="text-secondary">443 reviews</span>
            </div>

            <p
              ref={descriptionRef}
              className={`book-description ${isTruncated ? "truncate" : ""}`}
            >
              {bookDetails?.description}
            </p>
          </div>
          <hr />
          <Button
            variant="dark"
            className="mt-auto"
            onClick={() => {
              toast("Book added to the cart.");
              dispatch(setCartItems(bookDetails));
            }}
            disabled={isBookInTheCart}
          >
            {isBookInTheCart ? "Already in the cart" : "Add to Borrowing List"}
          </Button>
        </Col>
      </Row>

      <Row className="border mt-5 mb-5">
        <Col className="p-3">
          <h3 className="margin-auto mt-2 text-center">More Details</h3>
          <Tabs defaultActiveKey="description" className="mb-3">
            <Tab eventKey="description" title="Description">
              {bookDetails?.description}
            </Tab>
            <Tab eventKey="reviews" title="Reviews">
              <Reviews bookRef={bookDetails?.id} />
            </Tab>
          </Tabs>
        </Col>
      </Row>
    </Container>
  );
};

export default BookLandingPage;
