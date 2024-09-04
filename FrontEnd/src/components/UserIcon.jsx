import Avatar from "@mui/icons-material/AccountCircle";
import { Box } from "@mui/material";
import { Link } from "react-router-dom";

function UserIcon() {
  return (
    <>
      <Link to="/perfil" style={{ textDecoration: "none" }}>
        <Box
          sx={{
            flexGrow: 0,
            margin: 0,
            padding: 0.7,
            borderRadius: "100%",
            backgroundColor: "background.paper",
            cursor: "pointer",
          }}
        >
          <Avatar
            sx={{
              cursor: "pointer",
              color: "primary.main",
              display: "flex",
              scale: 0.8,
              alignItems: "center",
              justifyContent: "center",
            }}
          />
        </Box>
      </Link>
    </>
  );
}

export default UserIcon;
