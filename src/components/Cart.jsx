import { useContext } from "react";

import { formating } from "../util/formating";
import { Modal } from "./UI/Modal";
import { Button } from "./UI/Button";
import { CartContext } from "../app/CartContext";
import { UserProgressContext } from "../app/UserProgress";
import { CartItems } from "./CartItems";

export const Cart = () => {
  const cartCtx = useContext(CartContext);
  const userProgressCtx = useContext(UserProgressContext);
  const cartTotal = cartCtx.items.reduce((curNumber, item) => {
    return curNumber + item.price * item.quantity;
  }, 0);

  const closeCartHandler = () => {
    userProgressCtx.hideCart();
  };

  const showCheckoutHandler = () => {
    userProgressCtx.showCheckout();
  };

  return (
    <Modal
      className="cart"
      onClose={userProgressCtx.progress === "cart" ? closeCartHandler : null}
      open={userProgressCtx.progress === "cart"}
    >
      <h2>Your Cart</h2>
      <ul>
        {cartCtx.items.map((item) => (
          <CartItems
            key={item.id}
            {...item}
            onDec={() => cartCtx.removeItem(item.id)}
            onInc={() => cartCtx.addItem(item)}
          />
        ))}
      </ul>

      <div className="cart-total">Total Amount: {formating.format(cartTotal)}</div>
      <div className="modal-actions">
        <Button textOnly onClick={closeCartHandler}>
          Close
        </Button>
        {cartCtx.items.length !== 0 && (
          <Button onClick={showCheckoutHandler}>CheckOut</Button>
        )}
      </div>
    </Modal>
  );
};
