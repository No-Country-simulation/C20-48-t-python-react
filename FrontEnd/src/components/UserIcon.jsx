import Avatar from "@mui/material/Avatar";
import { Box } from "@mui/material";
import { Link } from "react-router-dom";
import { useUser } from "../Context/UserContext";
import cucumber from "../assets/profile-icons/cucumber-avatar.svg";
import lemon from "../assets/profile-icons/lemon-avatar.svg";
import pepper from "../assets/profile-icons/pepper-avatar.svg";
import radish from "../assets/profile-icons/radish-avatar.svg";

const avatars = {
  lemon: lemon,
  cucumber: cucumber,
  pepper: pepper,
  radish: radish,
};

function UserIcon() {
  const { isLogin, userInfo } = useUser();

  return (
    <>
      <Box
        sx={{
          display: "flex",
          borderRadius: "100%",
          backgroundColor: "background.default",
          alignItems: "center",
          justifyContent: "center",
          cursor: "pointer",
          height: "35.19px",
          width: "35.19px",
        }}
      >
        <Link
          to={isLogin ? "/perfil" : "/login"}
          style={{ textDecoration: "none" }}
        >
          <Avatar
            src={isLogin ? avatars[userInfo?.avatar] || lemon : ""}
            size="sm"
            sx={{
              cursor: "pointer",
              color: "primary.light",
              backgroundColor: "background.default",
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
