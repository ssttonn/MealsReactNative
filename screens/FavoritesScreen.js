import { useContext } from "react";
import { FavoritesContext } from "../store/context/favorites-context";
import { MEALS } from "../data/dummy-data";
import MealsList from "../components/MealsList/MealsList";

function FavoritesScreen() {
  let { ids } = useContext(FavoritesContext);
  let favMeals = MEALS.filter((meal) => ids.includes(meal.id));

  return <MealsList item={favMeals} />;
}

export default FavoritesScreen;
