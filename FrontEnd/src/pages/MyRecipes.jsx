import DisplayCategories from "../components/DisplayCategories";
import { useUser } from "../Context/UserContext";
import { useState, useEffect } from "react";
import { Helmet } from "react-helmet-async";

export default function Favourites() {
  // const { recipes } = useContext(RecipeListContext);
  const [userInfo, setUserInfo] = useState(
    JSON.parse(localStorage.getItem("userInfo")) || null,
  );
  const [recetas, setRecetas] = useState([]);
  const [loading, setLoading] = useState(false);
  const [error, setError] = useState(false);

  // console.log(userInfo);
  useEffect(() => {
    if (userInfo) {
      setLoading(true);
      try {
        const data = fetch(
          `https://recetapp-ggh9.onrender.com/${userInfo.id}/mis-recetas?page=0&size=10`,
          {
            method: "GET",
            headers: {
              Authorization: `Bearer ${localStorage.getItem("token")}`,
            },
          },
        );
        setRecetas(data);
      } catch (e) {
        setError(true);
      } finally {
        setLoading(false);
      }
    }
  }, [userInfo]);

  return (
    <>
      <Helmet>
        <title>Mis Recetas</title>
        <meta
          name="description"
          content="Aqui veras todas tus recetas creadas"
        />
      </Helmet>
      {recetas && (
        <DisplayCategories recetas={recetas} category={"Mis Recetas"} />
      )}
      {
        <div style={{ textAlign: "center", marginBlock: 4 }}>
          {loading && <p>Cargando...</p>}
          {error && <p>Error al cargar</p>}
        </div>
      }
    </>
  );
}
