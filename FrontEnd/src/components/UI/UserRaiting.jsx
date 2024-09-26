import Rating from "@mui/material/Rating";
import Stack from "@mui/material/Stack";
import { useUser } from "../../Context/UserContext";
import { useState } from "react";

export default function UserRating({ scale, defaultRating, onRatingChange }) {
  const { isLogin } = useUser();
  const [rating, setRating] = useState(defaultRating);
  const [mode, setMode] = useState(false);

  function handleChange(event, newValue) {
    setRating(newValue);
    setMode(true);
        // Llamar a la función del padre para actualizar el estado
        if (onRatingChange) {
          onRatingChange(newValue); 
        }
  }

  return (
    <Stack spacing={1}>
      <Rating
        name="half-rating"
        disabled={!isLogin}
        sx={{ scale: scale }}
        defaultValue={defaultRating}
        value={rating}
        precision={0.5}
        readOnly={mode}
        onChange={handleChange}
      />
    </Stack>
  );
}
