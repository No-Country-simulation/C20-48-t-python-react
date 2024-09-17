import DisplayCategories from "../components/DisplayCategories";
import { useContext } from "react";
import { RecipeListContext } from "../Context/RecipeContext";
import { UserContext } from "../Context/UserContext";
import { Helmet } from "react-helmet-async";
export default function Favourites() {
  const { recipes } = useContext(RecipeListContext);
  const {userInfo} = useContext(UserContext)

  const misRecetas = recipes.filter((receta) => receta.id_usuario === userInfo.id);

  return(
    <>
    <Helmet>
      <title>Mis Recetas</title>
      <meta name="description" content="Aqui veras todas tus recetas creadas" />
    </Helmet>
    <DisplayCategories recetas={misRecetas} category={"Mis Recetas"} />;
    </>
  )
}
