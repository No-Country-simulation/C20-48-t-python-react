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

  return (
    <AppDataContext.Provider
      value={{
        categorias,
        categoriasLoading,
        categoriasError,
        cacheMisRecetas,
        setCacheMisRecetas,
      }}
    >
      {children}
    </AppDataContext.Provider>
  );
};
