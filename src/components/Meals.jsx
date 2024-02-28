import { useEffect } from "react";
import { useState } from "react";

import { MealsList } from "./MealsList";

export const Meals = () => {
  const [loadedMeals, setLoadedMeals] = useState([]);

  useEffect(() => {
    async function fetchMeals() {
      const res = await fetch("http://localhost:3000/meals");

      if (!res.ok) {
        return <p>Error</p>;
      }

      const meals = await res.json();
      setLoadedMeals(meals);
    }
    fetchMeals();
  }, []);
  return (
    <ul id="meals">
      {loadedMeals.map((meal) => (
        <MealsList key={meal.id} meal={meal} />
      ))}
    </ul>
  );
};
