import { MealsList } from "./MealsList";
import { useHttp } from "../hooks/useHttp";
import { Error } from "./UI/Error";

import ReactLoading from "react-loading";

const config = {};

export const Meals = () => {
  const {
    isLoading,
    error,
    data: loadedMeals,
  } = useHttp("http://localhost:3000/meals", config, []);

  if (isLoading) {
    return (
      <div className="center">
        <ReactLoading
          type={"balls"}
          color={"#ffc404"}
          height={667}
          width={375}
        />
      </div>
    );
  }

  if (error) {
    return <Error text={"Failed to fetch meals"} message={error} />;
  }

  return (
    <ul id="meals">
      {loadedMeals.map((meal) => (
        <MealsList key={meal.id} meal={meal} />
      ))}
    </ul>
  );
};
