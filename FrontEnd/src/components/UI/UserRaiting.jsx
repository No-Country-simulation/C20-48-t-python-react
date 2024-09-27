import Rating from "@mui/material/Rating";
import Stack from "@mui/material/Stack";
import { useUser } from "../../Context/UserContext";
import { useState } from "react";
import { useAppData } from "../../Context/AppDataContext";

export default function UserRating({ scale, defaultRating, onRatingChange, recetaId, mode: modo }) {
  const { isLogin } = useUser();
  const [rating, setRating] = useState(defaultRating);
  const [mode, setMode] = useState(modo === "read");
  const {update , setUpdate} = useAppData();

  async function  handleChange(event, newValue) {
    try {
      // Llamar a la función del padre para actualizar el estado
    const response = await fetch(`https://recetapp-ggh9.onrender.com/recetas/${recetaId}?puntuacion=${newValue}`,
      {method : 'POST', headers:  {'Content-Type': 'application/json', Authorization: `Bearer ${localStorage.getItem("token")}`}}
    )
    const data = await response.json();
    setRating(newValue);
    setMode(true);
    // Llamar a la función del padre para actualizar el estado
    if (onRatingChange) {
      onRatingChange(newValue);
    }
    setUpdate(!update);
  } catch (error) {
    console.log(error);
  }
  }

  return (
    <Stack spacing={1}>
      <Rating
        name="half-rating"
        disabled={!isLogin}
        sx={{ scale: scale }}
        // defaultValue={defaultRating}
        value={rating}
        precision={1}
        readOnly={mode}
        onChange={handleChange}
      />
    </Stack>
  );
}
