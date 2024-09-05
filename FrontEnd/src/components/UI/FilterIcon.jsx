import TuneIcon from '@mui/icons-material/Tune';
import { Box } from "@mui/material";

function FilterIcon() {
  return (
    <>
            <Box
          sx={{
            flexGrow: 0,
            margin: 0,
            padding: 0.7,
            borderRadius: "100%",
            backgroundColor: "primary.main",
            '&:hover': {
            backgroundColor: "primary.dark",
          },
            cursor: "pointer",
          }}
        >
          <TuneIcon
            sx={{
              cursor: "pointer",
              color: "primary.contrastText",
              display: "flex",
              scale: 0.8,
              alignItems: "center",
              justifyContent: "center",
            }}
          />
        </Box>
    </>
  )
}

export default FilterIcon
