import TextField from "@mui/material/TextField";
import Autocomplete from "@mui/material/Autocomplete";


export default function AutoCompleteSelection({ field, handler, options }) {
  return (
    <Autocomplete
      disablePortal
      options={options}
      renderInput={(params) => <TextField {...params} label={field} />}
      onChange={(event, newValue) => {
        handler(newValue);
      }}
    />
  );
}
