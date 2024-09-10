import { Link } from "react-router-dom";
import { Typography } from "@mui/material";

export default function LinkUnstyled({ children, ...props }) {
  return (
    <Link style={{ textDecoration: "none", color: "inherit" }} {...props}>
      {children}
    </Link>
  );
}
