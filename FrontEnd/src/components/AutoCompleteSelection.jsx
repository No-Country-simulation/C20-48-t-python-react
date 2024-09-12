import TextField from "@mui/material/TextField";
import Autocomplete from "@mui/material/Autocomplete";

export default function AutoCompleteSelection({
  field,
  handler,
  options,
  value,
}) {
  return (
    <Autocomplete
      disablePortal
      value={value}
      options={options}
      renderInput={(params) => <TextField {...params} label={field} />}
      onChange={(event, newValue) => {
        handler(newValue);
      }}
    />
  );
}
