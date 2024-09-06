import TextField from "@mui/material/TextField";
import Autocomplete from "@mui/material/Autocomplete";

export default function AutoCompleteSelection({ field , options }) {
  return (
    <Autocomplete
      disablePortal
      options={options}
      sx={{
        width: "30%",
      }}
      renderInput={(params) => <TextField {...params} label={field} />}
    />
  );
}
