import DisplayCategories from "../components/DisplayCategories";
import { useUser } from "../Context/UserContext";
import { useContext } from "react";
import { RecipeListContext } from "../Context/RecipeContext";
import { Helmet } from "react-helmet-async";

export default function Favourites() {
  const { recipes } = useContext(RecipeListContext);
  const { userInfo } = useUser();

  const recetasFavoritas = recipes;

  return (
    <>
      <Helmet>
        <title>Favoritos</title>
        <meta
          name="description"
          content="Aqui veras todas tus recetas guardadas"
        />
      </Helmet>
      <DisplayCategories recetas={recetasFavoritas} category={"Favoritos"} />;
    </>
  );
}
