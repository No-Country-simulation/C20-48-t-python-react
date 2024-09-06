import TextField from "@mui/material/TextField";
import Autocomplete from "@mui/material/Autocomplete";

const top100Films = [
  "Pastas",
  "Ensaladas",
  "Veganos",
  "Vegetarianos",
  "Carnes",
  "Proteínas",
  "Frutas",
  "Legumbres",
  "Verduras",
  "Crustáceos",
  "Lácteos",
  "Soja",
  "Grasas",
];

export default function AutoCompleteSelection({ field, handler }) {
  return (
    <Autocomplete
      disablePortal
      options={top100Films}
      renderInput={(params) => <TextField {...params} label={field} />}
      onChange={(event, newValue) => {
        handler(newValue);
      }}
    />
  );
}
