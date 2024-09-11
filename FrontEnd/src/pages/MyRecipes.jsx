import DisplayCategories from "../components/DisplayCategories";
import { recetas } from "../assets/recetas";
export default function Favourites() {
  return <DisplayCategories recetas={recetas} category={"My Recipes"} />;
}
