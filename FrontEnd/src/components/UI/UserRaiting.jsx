import Rating from "@mui/material/Rating";
import Stack from "@mui/material/Stack";
import { useUser } from "../../Context/UserContext";

export default function UserRating({ scale, mode }) {
  const { isLogin } = useUser();
  return (
    <Stack spacing={1}>
      <Rating
        name="half-rating"
        disabled={!isLogin}
        sx={{ scale: scale }}
        defaultValue={2.5}
        precision={0.5}
        readOnly={mode === "read"}
      />
    </Stack>
  );
}
