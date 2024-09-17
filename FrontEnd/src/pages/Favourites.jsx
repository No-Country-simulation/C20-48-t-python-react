import DisplayCategories from "../components/DisplayCategories";
import { useContext } from "react";
import { RecipeListContext } from "../Context/RecipeContext";
import { UserContext } from "../Context/UserContext";
import { Helmet } from "react-helmet-async";
// import Container from "@mui/material/Container";

export default function Favourites() {
  const { recipes } = useContext(RecipeListContext);
  const { userInfo } = useContext(UserContext);

  const recetasFavoritas = recipes.filter((receta) =>
    userInfo.favorites.includes(receta.id),
  );

  return (
    <>
    <Helmet>
      <title>Favoritos</title>
      <meta name="description" content="Aqui veras todas tus recetas guardadas" />
    </Helmet>
      <DisplayCategories recetas={recetasFavoritas} category={"Favoritos"} />;
    </>
  );
}
