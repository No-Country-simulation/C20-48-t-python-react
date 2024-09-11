import { Box, Button } from "@mui/material";
import { Link } from "react-router-dom";
function LoginBtn() {
  return (
    <>
      <Link to="/login" style={{ textDecoration: "none" }}>
        <Box sx={{ margin: "1rem", cursor: "pointer" }}>
          <Button>Inicia sesión</Button>
        </Box>
      </Link>
    </>
  );
}

export default LoginBtn;
