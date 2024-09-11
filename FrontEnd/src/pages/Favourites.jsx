import DisplayCategories from "../components/DisplayCategories";
import Container from "@mui/material/Container";
import { recetas } from "../assets/recetas";
export default function Favourites() {
  return (
    <Container maxWidth={"xl"} sx={{ mt: 4 }}>
      <DisplayCategories recetas={recetas} category={"Favourites"} />
    </Container>
  );
}
