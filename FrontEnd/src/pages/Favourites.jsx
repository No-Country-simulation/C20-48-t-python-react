import DisplayCategories from "../components/DisplayCategories";
import { useUser } from "../Context/UserContext";
import { useContext } from "react";
import { RecipeListContext } from "../Context/RecipeContext";
import { Helmet } from "react-helmet-async";
import { useEffect, useState } from "react";

export default function Favourites() {
  // const { recipes } = useContext(RecipeListContext);
  // const recetasFavoritas = recipes;
  const { userInfo } = useUser();
  const [recetasFavoritas, setRecetasFavoritas] = useState([]);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    async function fetchData() {
      setLoading(true);
      try {
        const response = await fetch(
          `https://recetapp-ggh9.onrender.com/user/mis-favoritos`,
          {
            method: "GET",
            headers: {
              "Content-Type": "application/json",
              Authorization: `Bearer ${localStorage.getItem("token")}`,
            },
          },
        );
        const data = await response.json();
        setRecetasFavoritas(data);
        setLoading(false);
      } catch (e) {
        console.log(e);
      }
    }
    fetchData();
  }, []);

  return (
    <>
      <Helmet>
        <title>Favoritos</title>
        <meta
          name="description"
          content="Aqui veras todas tus recetas guardadas"
        />
      </Helmet>
      <DisplayCategories
        recetas={recetasFavoritas}
        loading={loading}
        category={"Favoritos"}
      />
    </>
  );
}
