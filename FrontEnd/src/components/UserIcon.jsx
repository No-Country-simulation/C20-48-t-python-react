import Avatar from "@mui/icons-material/AccountCircle";
import { Box } from "@mui/material";
import { Link } from "react-router-dom";

function UserIcon() {
  return (
    <>
      <Box
        sx={{
          flexGrow: 0,
          margin: 0,
          padding: 0.7,
          borderRadius: "100%",
          backgroundColor: "background.default",
          cursor: "pointer",
        }}
      >
        <Link to="/perfil" style={{ textDecoration: "none" }}>
          <Avatar
            sx={{
              cursor: "pointer",
              color: "primary.light",
              display: "flex",
              scale: 0.8,
              alignItems: "center",
              justifyContent: "center",
            }}
          />
        </Link>
      </Box>
    </>
  );
}

export default UserIcon;
