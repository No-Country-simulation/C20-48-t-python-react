import Skeleton from "@mui/material/Skeleton";
import Container from "@mui/material/Container";

export default function LoadingSkeleton() {
  return (
    <Container>
      {Array.from({ length: 7 }).map((_, i) => (
        <>
          <Skeleton key={i} animation="wave" />
          <Skeleton key={i} animation="wave" />
          <Skeleton key={i} animation="wave" />
          <br />
        </>
      ))}
    </Container>
  );
}
