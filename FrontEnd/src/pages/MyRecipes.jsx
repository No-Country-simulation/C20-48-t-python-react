import DisplayCategories from "../components/DisplayCategories";
import { useUser } from "../Context/UserContext";
import { useState, useEffect } from "react";
import { Helmet } from "react-helmet-async";
import { Snackbar, Alert } from "@mui/material";
import { useAppData } from "../Context/AppDataContext";
import FloatingAB from "../components/FloatingAB";

export default function Favourites() {
  const { userInfo } = useUser();
  const [recetas, setRecetas] = useState([]);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState(false);

  useEffect(() => {
    const fetchData = async () => {
      setLoading(true);
      try {
        const response = await fetch(
          `https://recetapp-ggh9.onrender.com/user/mis-recetas?page=0&size=20`,
          {
            method: "GET",
            headers: {
              Authorization: `Bearer ${localStorage.getItem("token")}`,
            },
          },
        );

        if (!response.ok) {
          throw new Error("Failed to fetch data");
        }

        const data = await response.json();
        // setCacheMisRecetas(data);
        setRecetas(data); // Asegúrate de que `data` sea el formato correcto para `setRecetas`
        setLoading(false);
      } catch (e) {
        setError(true);
      }
    };

    fetchData();
  }, [userInfo]); // Asegúrate de incluir `userInfo` como dependencia

  return (
    <>
      <Helmet>
        <title>Mis Recetas</title>
        <meta
          name="description"
          content="Aqui veras todas tus recetas creadas"
        />
      </Helmet>

      <DisplayCategories
        recetas={recetas}
        loading={loading}
        category={"Mis Recetas"}
      />

      <Snackbar open={loading} onClose={() => setLoading(false)}>
        <Alert severity="info">Cargando...</Alert>
      </Snackbar>
      <Snackbar open={error} onClose={() => setError(false)}>
        <Alert severity="error">Error al cargar los datos</Alert>
      </Snackbar>
      <FloatingAB />
    </>
  );
}
