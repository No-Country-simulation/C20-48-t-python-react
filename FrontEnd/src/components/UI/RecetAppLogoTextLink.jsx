import { Link } from "react-router-dom";
import { Typography } from "@mui/material";
import Stack from "@mui/material/Stack";

export default function RecetAppLogoTextLink() {
  return (
    <Link to="/" style={{ textDecoration: "none" }}>
      <Stack sx={{ width: "100%" }}>
        <Typography
          variant="h6"
          noWrap
          component="a"
          href="#app-bar-with-responsive-menu"
          sx={{
            fontFamily: "monospace",
            fontWeight: 700,
            letterSpacing: ".1rem",
            color: "white",
            textDecoration: "none",
          }}
        >
          RECET
          <Typography
            variant="h6"
            noWrap
            component="a"
            sx={{
              fontFamily: "monospace",
              fontWeight: 700,
              letterSpacing: ".1rem",
              color: "secondary.main",
              textDecoration: "none",
              alignItems: "end",
            }}
          >
            APP
          </Typography>
        </Typography>
        <Typography
          variant="p"
          sx={{
            fontFamily: "Arial",
            fontWeight: 700,
            letterSpacing: ".1rem",
            color: "white",
            fontSize: "0.5rem",
            textDecoration: "none",
          }}
        >
          Delicias del mundo
        </Typography>
      </Stack>
    </Link>
  );
}
