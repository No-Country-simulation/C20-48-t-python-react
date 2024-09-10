import Avatar from "@mui/icons-material/AccountCircle";
import { Box } from "@mui/material";
import { useContext } from "react";
import { Link } from "react-router-dom";
import { UserContext } from "../Context/UserContext";

function UserIcon() {
  const { isLogin } = useContext(UserContext);

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
        <Link to={isLogin ? "/perfil" : "/login"} style={{ textDecoration: "none" }}>
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
