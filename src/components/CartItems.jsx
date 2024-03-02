import { formating } from "../util/formating"

export const CartItems = ({onInc, onDec, ...item}) => {
  return (
    <li className="cart-item">
      <p>
        {item.name} - {item.quantity} x {formating.format(item.price)}
      </p>
      <div className="cart-item-actions">
        <button onClick={onDec}>-</button>
        <span>{item.quantity}</span>
        <button onClick={onInc}>+</button>
      </div>
    </li>
  )
}
