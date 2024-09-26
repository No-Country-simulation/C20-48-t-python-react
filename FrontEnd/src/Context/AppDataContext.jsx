import { createContext, useContext, useState, useEffect } from "react";
import useFetch from "../hooks/useFetch";
export const AppDataContext = createContext();

export function useAppData() {
  return useContext(AppDataContext);
}

export const AppDataProvider = ({ children }) => {
  const [update, setUpdate] = useState(false); //para actualizar el estado de la app. se pasa como dependencia de useFetch cuando se requiere actualizar

  //pedido de categorias - no cambian
  const {
    data: categorias,
    loading: categoriasLoading,
    error: categoriasError,
  } = useFetch("https://recetapp-ggh9.onrender.com/categorias");

  // pedido de recetas favoritas - cambian
  const {
    data: recetasFavoritas,
    loading: loadingFavoritos,
    error: errorFavoritos,
  } = useFetch(
    "https://recetapp-ggh9.onrender.com/user/mis-favoritos",
    {
      method: "GET",
      headers: {
        Authorization: `Bearer ${localStorage.getItem("token")}`,
      },
    },
    [update],
  );

  // pedido de recetas mis recetas - cambian
  const {
    data: misRecetas,
    loading: loadingMisRecetas,
    error: errorMisRecetas,
  } = useFetch(
    "https://recetapp-ggh9.onrender.com/user/mis-recetas?page=0&size=51",
    {
      method: "GET",
      headers: {
        Authorization: `Bearer ${localStorage.getItem("token")}`,
      },
    },
    [update],
  );

  return (
    <AppDataContext.Provider
      value={{
        update,
        setUpdate,
        categorias,
        categoriasLoading,
        categoriasError,
        // Agregar las recetas favoritas al contexto
        recetasFavoritas,
        loadingFavoritos,
        errorFavoritos,
        // fetchRecetasFavoritas,
        // Agregar las recetas mis recetas al contexto
        misRecetas,
        loadingMisRecetas,
        errorMisRecetas,
      }}
    >
      {children}
    </AppDataContext.Provider>
  );
};
