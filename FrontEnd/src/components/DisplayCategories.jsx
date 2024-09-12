import Paper from "@mui/material/Paper";
import Container from "@mui/material/Container";
import Card from "./Card";
import Typography from "@mui/material/Typography";
import { Suspense } from "react";
import LoadingSkeleton from "./skeletons/LoadingSkeleton";
import filtersToString from "../utils/filtersToString";

export default function DisplayCategories({ category, recetas }) {
  const filters = filtersToString(category);

  return (
    <Container sx={{ marginTop: 4 }} maxWidth={"xl"} disableGutters>
      <Typography
        variant="h5"
        sx={{
          padding: 2,
          paddingLeft: 4,
          borderRadius: 4,
          backgroundColor: "background.paper",
          display: "flex",
          alignItems: "center",
          gap: 1,
          flexWrap: "wrap",
        }}
      >
        Recetas de
        <Typography
          variant="h5"
          borderRadius={1}
          sx={{
            color: "primary.main",
            backgroundColor: "background.default",
            paddingInline: 2,
          }}
        >
          {filters}
        </Typography>
      </Typography>
      <Paper
        elevation={0}
        sx={{
          padding: {
            xs: 2,
            sm: 2,
            md: 4,
            lg: 4,
            xl: 4,
          },
          borderRadius: 4,
          marginBlock: 4,
        }}
      >
        <Suspense fallback={<LoadingSkeleton />}>
          <Container
            disableGutters
            maxWidth={"xl"}
            sx={{
              display: "grid",
              gridTemplateColumns: "repeat(auto-fit, minmax(300px, 1fr))",
              gap: 4,
              margin: 0,
              padding: 0,
            }}
          >
            {recetas.map((receta) => (
              <Card key={receta.id} receta={receta} />
            ))}
          </Container>
        </Suspense>
      </Paper>
    </Container>
  );
}
