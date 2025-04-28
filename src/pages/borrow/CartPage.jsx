import { deleteBookFromCart, setCartItems } from "@features/books/bookSlice";
import { generateImageUrl } from "@utils/generateUrl";
import { X } from "lucide-react";
import { Alert, Button, Container, Row } from "react-bootstrap";
import { FaXRay } from "react-icons/fa";
import { useDispatch, useSelector } from "react-redux";
import { Link } from "react-router-dom";

const CartPage = () => {
  const { cartItems } = useSelector((state) => state.bookInfo);
  return (
    <Container>
      <Row>
        <h2 className="py-4">My Borrowing List</h2>
        <div className="d-flex flex-column  gap-4">
          {cartItems &&
            cartItems?.map((cart) => {
              return <CartItem item={cart} cartItems={cartItems} />;
            })}
          {cartItems?.length > 0 ? (
            <Button variant="dark">Login to Burrow || Proceed to Burrow</Button>
          ) : (
            <>
              <Alert className="d-flex justify-content-between align-items-center">
                No books in the burrowing list.{" "}
                <Link to={"/book"} replace>
                  <Button
                    variant="outline-dark"
                    style={{ width: "fit-content" }}
                  >
                    Burrow Now
                  </Button>
                </Link>
              </Alert>
            </>
          )}
        </div>
      </Row>
    </Container>
  );
};

export default CartPage;

const CartItem = ({ item, cartItems }) => {
  const dispatch = useDispatch();
  const handleRemoveButtonClick = (id) => {
    dispatch(deleteBookFromCart(id));
  };
  return (
    <div className="d-flex flex-row gap-4 align-items-center justify-content-between">
      <img
        src={generateImageUrl(item.imageURL)}
        style={{
          width: "80px",
          height: "auto",
          objectFit: "cover",
          objectPosition: "center",
        }}
      />
      <Link to={`/book/${item.slug}`} replace>
        <h6>{item.title}</h6>
      </Link>
      <span>Returning: {"2026-01-04"}</span>
      <button
        style={{ border: "0", outline: "none", background: "none" }}
        onClick={() => handleRemoveButtonClick(item._id)}
      >
        <X /> {" "} Remove
      </button>
    </div>
  );
};
