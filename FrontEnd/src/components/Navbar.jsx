import MenuIcon from "@mui/icons-material/Menu";
import ContrastIcon from "@mui/icons-material/Contrast";
import UserIcon from "./UserIcon";
import AppIcon from "./AppIcon";
import Brightness6Icon from "@mui/icons-material/Brightness6";
import RecetAppLogoTextLink from "./UI/RecetAppLogoTextLink";
import {
  AppBar,
  Box,
  Button,
  Container,
  IconButton,
  Stack,
  MenuItem,
  Toolbar,
  Tooltip,
  Typography,
  Fade,
} from "@mui/material";
import Drawer from "@mui/material/Drawer";
import LoginBtn from "./LoginBtn.jsx";
import LinkUnstyled from "./UI/LinkUnstyled";
import { useContext, useState } from "react";
import { useTheme } from "@emotion/react";
import { UserContext } from "../Context/UserContext.jsx";

// const menu = ["Home", "Mis recetas", "Favoritos"];
const menu = [
  { name: "Home", path: "/" },
  { name: "Mis recetas", path: "/mis-recetas" },
  { name: "Favoritos", path: "/favoritos" },
  { name: "About", path: "/about" },
];

function ResponsiveAppBar({ toggleTheme }) {
  const [anchorElNav, setAnchorElNav] = useState(null);
  const { isLogin } = useContext(UserContext);

  const handleOpenNavMenu = (event) => {
    setAnchorElNav(event.currentTarget);
  };

  const handleCloseNavMenu = () => {
    setAnchorElNav(null);
  };

  // Theme context para cambiar icono
  const theme = useTheme();

  return (
    <AppBar position="sticky" elevation={0}>
      <Container maxWidth="full" sx={{ margin: 0 }}>
        <Toolbar disableGutters>
          {/* Start Mobile Menu */}
          <Box
            sx={{
              flexGrow: 1,
              display: { xs: "flex", md: "none" },
            }}
          >
            <IconButton
              size="large"
              aria-label="account of current user"
              aria-controls="menu-appbar"
              aria-haspopup="true"
              onClick={handleOpenNavMenu}
              color="white"
            >
              <MenuIcon sx={{ color: "white" }} />
            </IconButton>

            <Stack
              direction="row"
              alignItems="center"
              gap={2}
              sx={{
                alignItems: "center",
                justifyContent: "center",
              }}
            >
              <AppIcon scale={0.7} />
              <RecetAppLogoTextLink />
            </Stack>
            <Drawer
              maxWidth="md"
              id="menu-appbar"
              anchor="left"
              elevation={0}
              open={Boolean(anchorElNav)}
              onClose={handleCloseNavMenu}
            >
              <Container
                sx={{
                  paddingBlock: 4,
                  display: "flex",
                  flexDirection: "column",
                  width: "250px",
                }}
              >
                <Stack
                  direction="row"
                  alignItems="center"
                  sx={{
                    marginBlock: 2,
                    gap: 2,
                    paddingBlock: 2,
                    borderRadius: "10px",
                    justifyContent: "center",
                    backgroundColor: "#00000066",
                  }}
                >
                  <AppIcon />
                  <RecetAppLogoTextLink />
                </Stack>
                {menu.map((page) => (
                  <MenuItem key={page.name} onClick={handleCloseNavMenu}>
                    <LinkUnstyled to={page.path}>{page.name}</LinkUnstyled>
                  </MenuItem>
                ))}
                <Typography
                  variant="body2"
                  sx={{
                    textAlign: "center",
                    color: "text.disabled",
                    marginTop: 10,
                  }}
                >
                  © {new Date().getFullYear()} RecetApp
                </Typography>
              </Container>
            </Drawer>
          </Box>
          {/* End Mobile Menu */}
          <Box sx={{ flexGrow: 1, display: { xs: "none", md: "flex" } }}>
            <Stack direction="row" alignItems="center" gap={2}>
              <AppIcon />
              <RecetAppLogoTextLink />
            </Stack>
            <Stack direction="row" ml={4} alignItems="center" gap={2}>
              {menu.map((page) => (
                <Button
                  key={page.name}
                  onClick={handleCloseNavMenu}
                  sx={{
                    color: "white",
                    display: "block",
                  }}
                >
                  <LinkUnstyled to={page.path}>{page.name}</LinkUnstyled>
                </Button>
              ))}
            </Stack>
            <LoginBtn />
          </Box>

          <Tooltip
            title={isLogin ? "Ver perfil" : "Iniciar sesión"}
            TransitionComponent={Fade}
            TransitionProps={{ timeout: 600 }}
            sx={{ bgcolor: "background.paper" }}
          >
            <Box sx={{ mx: 1 }}>
              <UserIcon />
            </Box>
          </Tooltip>
          <Box
            onClick={toggleTheme}
            sx={{
              flexGrow: 0,
              margin: 0,
              padding: 0.7,
              borderRadius: "100%",
              backgroundColor: "background.default",
              cursor: "pointer",
            }}
          >
            {theme.palette.mode === "dark" ? (
              <Brightness6Icon
                sx={{
                  display: "flex",
                  scale: 0.8,
                  alignItems: "center",
                  justifyContent: "center",
                  color: "primary.light",
                }}
              />
            ) : (
              <ContrastIcon
                sx={{
                  display: "flex",
                  scale: 0.8,
                  alignItems: "center",
                  justifyContent: "center",
                  color: "primary.light",
                }}
              />
            )}
          </Box>
        </Toolbar>
      </Container>
    </AppBar>
  );
}
export default ResponsiveAppBar;
