import { createContext, useContext, useState, useEffect } from "react";
import useFetch from "../hooks/useFetch";

export const AppDataContext = createContext();

export function useAppData() {
  return useContext(AppDataContext);
}

export const AppDataProvider = ({ children }) => {
  const {
    data: categorias,
    loading: categoriasLoading,
    error: categoriasError,
  } = useFetch("https://recetapp-ggh9.onrender.com/categorias");
  const [cacheMisRecetas, setCacheMisRecetas] = useState([]);
  // Estado para almacenar las recetas favoritas
  const [recetasFavoritas, setRecetasFavoritas] = useState([]);
  const [loadingFavoritos, setLoadingFavoritos] = useState(true);

  // Función para obtener las recetas favoritas del usuario
  const fetchRecetasFavoritas = async () => {
    setLoadingFavoritos(true);
    try {
      const response = await fetch(
        `https://recetapp-ggh9.onrender.com/user/mis-favoritos`,
        {
          method: "GET",
          headers: {
            "Content-Type": "application/json",
            Authorization: `Bearer ${localStorage.getItem("token")}`,
          },
        }
      );
      const data = await response.json();
      setRecetasFavoritas(data);
    } catch (e) {
      console.log(e);
    } finally {
      setLoadingFavoritos(false);
    }
  };

  useEffect(() => {
    // Solo busca recetas favoritas si el usuario ha iniciado sesión
    if (localStorage.getItem("token")) {
      fetchRecetasFavoritas();
    }
  }, []);

  return (
    <AppDataContext.Provider
      value={{
        categorias,
        categoriasLoading,
        categoriasError,
        cacheMisRecetas,
        setCacheMisRecetas,
        // Agregar las recetas favoritas al contexto
        recetasFavoritas,
        loadingFavoritos,
        fetchRecetasFavoritas,
      }}
    >
      {children}
    </AppDataContext.Provider>
  );
};
