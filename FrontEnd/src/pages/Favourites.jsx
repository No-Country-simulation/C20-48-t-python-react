import DisplayCategories from "../components/DisplayCategories";
import { useContext } from "react";
import { RecipeListContext } from "../Context/RecipeContext";
import { UserContext } from "../Context/UserContext";
// import Container from "@mui/material/Container";

export default function Favourites() {
  const {recipes} = useContext(RecipeListContext)
  const {userInfo} = useContext(UserContext)

  const recetasFavoritas = recipes.filter((receta) => userInfo.favorites.includes(receta.id));

  return (
    <>
    <DisplayCategories recetas={recetasFavoritas} category={"Favouritos"} />;
    </>
  )
}
