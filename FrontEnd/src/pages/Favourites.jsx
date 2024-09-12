import DisplayCategories from "../components/DisplayCategories";
// import Container from "@mui/material/Container";
import { recetas } from "../assets/recetas";
export default function Favourites() {
  return <DisplayCategories recetas={recetas} category={"Favourites"} />;
}
