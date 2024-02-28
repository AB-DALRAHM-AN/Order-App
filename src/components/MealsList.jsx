import { useContext } from "react";

import { Button } from "./UI/Button";
import { formating } from "../util/formating";
import { CartContext } from "../app/CartContext";

export const MealsList = ({ meal }) => {
  const cartCtx = useContext(CartContext);

  const addMealToCart = () => {
    cartCtx.addItem(meal);
  };

  return (
    <li className="meal-item">
      <article>
        <img src={`http://localhost:3000/${meal.image}`} alt={meal.name} />
        <div>
          <h3>{meal.name}</h3>
          <p className="meal-item-price">{formating.format(meal.price)}</p>
          <p className="meal-item-description">{meal.description}</p>
        </div>
        <div className="meal-item-actions">
          <Button onClick={addMealToCart}>Add to Cart</Button>
        </div>
      </article>
    </li>
  );
};
