import { borrowNewBookAction } from "@features/borrow/borrowAction";
import { clearCart, deleteBookFromCart } from "@features/cart/cartSlice";
import { generateImageUrl } from "@utils/generateUrl";
import { X } from "lucide-react";
import { Alert, Button, Container, Row } from "react-bootstrap";
import { useDispatch, useSelector } from "react-redux";
import { Link, useNavigate } from "react-router-dom";
import { toast } from "react-toastify";

const CartPage = () => {
  const { cartItems } = useSelector((state) => state.cartInfo);

  return (
    <Container>
      <Row>
        <h2 className="py-4">My Borrowing List</h2>
        <div className="d-flex flex-column  gap-4">
          {cartItems &&
            cartItems?.map((cart, index) => {
              return <CartItem key={index} item={cart} cartItems={cartItems} />;
            })}
          {cartItems?.length > 0 ? (
            <BorrowListButton />
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
    toast("Book removed successfully from the cart.")
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
        style={{ border: "0", outline: "none", background: "none", color:"red" }}
        onClick={() => handleRemoveButtonClick(item._id)}
      >
        <X /> Remove
      </button>
    </div>
  );
};

const BorrowListButton = () => {
  const { user } = useSelector((state) => state.userInfo);
  const {cartItems:cart} = useSelector(state=> state.cartInfo);

  const navigate = useNavigate();
  const dispatch = useDispatch();

  const handleBurrowClick = async () => {
    const confirmDialog = confirm("Are you sure to borrow this book?");
    if (confirmDialog) {
      //TODO
      //1. Call api to register the borrowed book.
      const payload = cart?.map(item=> ({
        book: item._id
      }))
      console.log("Payload: ")
      const response = await dispatch(borrowNewBookAction(payload))
      //2. Clear the cart.
console.log(response);
      // dispatch(clearCart())
      //3. Redirect to success or error page.
      toast.success("Borrow success.")
    }
  };

  return (
    <>
      {user?._id ? (
        <Button variant="dark" onClick={handleBurrowClick}>
          Proceed to Borrow
        </Button>
      ) : (
        <Button
          variant="dark"
          onClick={() => navigate("/signin", { state: { from: "/cart" } })}
        >
          Login to Borrow
        </Button>
      )}
    </>
  );
};
