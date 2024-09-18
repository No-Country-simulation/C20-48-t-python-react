import Container from "@mui/material/Container";
import Skeleton from "@mui/material/Skeleton";

export default function SearchbarSkeleton() {
  return (
    <Container
      maxWidth="xl"
      disableGutters
      sx={{
        paddingBlock: 2,
        display: "flex",
        gap: 2,
        gridTemplateColumns: {
          xs: "1fr",
          lg: "2fr 3fr ",
        },
        justifyItems: "start",
      }}
    >
      <Skeleton
        variant="rectangular"
        height={40}
        width={"80%"}
        animation="wave"
        sx={{
          borderRadius: 1,
        }}
      />
      <Skeleton
        variant="rectangular"
        width={40}
        height={40}
        animation="wave"
        sx={{
          borderRadius: 10,
        }}
      />
    </Container>
  );
}
