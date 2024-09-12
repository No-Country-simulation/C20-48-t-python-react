import DisplayCategories from "../components/DisplayCategories";
import { useContext } from "react";
import { RecipeListContext } from "../Context/RecipeContext";
import { UserContext } from "../Context/UserContext";
export default function Favourites() {
  const { recipes } = useContext(RecipeListContext);
  const {userInfo} = useContext(UserContext)

  const misRecetas = recipes.filter((receta) => receta.id_usuario === userInfo.id);

  return(
    <>
    <DisplayCategories recetas={misRecetas} category={"Mis Recetas"} />;
    </>
  )
}
