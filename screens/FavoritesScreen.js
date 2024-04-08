import { MEALS } from "../data/dummy-data";
import MealsList from "../components/MealsList/MealsList";
import { useSelector } from "react-redux";

function FavoritesScreen() {
  let ids = useSelector((state) => state.favoriteMeals.ids);

  let favMeals = MEALS.filter((meal) => ids.includes(meal.id));
  console.log("Render");
  return <MealsList items={favMeals} />;
}

export default FavoritesScreen;
