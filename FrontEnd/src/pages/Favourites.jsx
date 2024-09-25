import DisplayCategories from "../components/DisplayCategories";
import { Helmet } from "react-helmet-async";
import { useAppData } from "../Context/AppDataContext";

export default function Favourites() {
  const { recetasFavoritas, loadingFavoritos } = useAppData();

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
        loading={loadingFavoritos}
        category={"Favoritos"}
      />
    </>
  );
}
