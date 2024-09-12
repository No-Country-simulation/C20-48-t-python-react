import Rating from "@mui/material/Rating";
import Stack from "@mui/material/Stack";

export default function UserRating({ scale, mode }) {
  return (
    <Stack spacing={1}>
      <Rating
        name="half-rating"
        sx={{ scale: scale }}
        defaultValue={2.5}
        precision={0.5}
        readOnly={mode === "read"}
      />
    </Stack>
  );
}
