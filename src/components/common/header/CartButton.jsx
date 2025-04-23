import { BsCart3 } from "react-icons/bs";
import  styles from "./cart-button.module.css"
import { Link } from "react-router-dom";
import { useDispatch, useSelector } from "react-redux";
export const CartButton = () => {
  const {cartItems} = useSelector(state=> state.bookInfo)
    return (
      <>
        <Link className="nav-link" style={{position:"relative"}} as="link" to="/cart">
          <div className={styles.badge} >{cartItems.length}</div>
          <BsCart3 className="fs-3"/>
        </Link>
      </>
    );
  };