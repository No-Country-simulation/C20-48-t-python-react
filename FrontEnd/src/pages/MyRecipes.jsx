import DisplayCategories from "../components/DisplayCategories";
import { useUser } from "../Context/UserContext";
import { useState, useEffect } from "react";
import { Helmet } from "react-helmet-async";
import { Snackbar, Alert } from "@mui/material";
import useFetch from "../hooks/useFetch";
import { useAppData } from "../Context/AppDataContext";
import FloatingAB from "../components/FloatingAB";

export default function Favourites() {
  const {
    misRecetas: recetas,
    loadingMisRecetas: loading,
    errorMisRecetas: error,
  } = useAppData();

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

      <Snackbar open={loading}>
        <Alert severity="info">Cargando...</Alert>
      </Snackbar>
      <Snackbar open={error}>
        <Alert severity="error">Error al cargar los datos</Alert>
      </Snackbar>
      <FloatingAB />
    </>
  );
}
