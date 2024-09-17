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

  return (
    <AppDataContext.Provider
      value={{ categorias, categoriasLoading, categoriasError }}
    >
      {children}
    </AppDataContext.Provider>
  );
};
