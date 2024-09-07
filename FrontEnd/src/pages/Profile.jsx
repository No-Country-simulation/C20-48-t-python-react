import {
  Avatar,
  TextField,
  Button,
  Container,
  Box,
  Typography,
  Dialog,
  DialogActions,
  DialogContent,
  DialogTitle,
  Fab,
} from "@mui/material";
import EditIcon from "@mui/icons-material/Edit";
import { useContext, useState } from "react";
import Cucumber from "../assets/profile-icons/cucumber.jpg";
import Muffin from "../assets/profile-icons/muffin.png";
import Pizza from "../assets/profile-icons/pizza.jpg";
import Hamburguer from "../assets/profile-icons/hamburguer.jpg";
import { UserContext } from "../Context/UserContext";

function Profile() {
  const [newPassword, setNewPassword] = useState("");
  const [newPasswordError, setNewPasswordError] = useState("");
  const [confirmPassword, setConfirmPassword] = useState("");
  const [confirmPasswordError, setConfirmPasswordError] = useState("");
  // Edit Profile
  const [isEditable, setIsEditable] = useState(false);
  // DIalog
  const [open, setOpen] = useState(false);

  // Importar el contexto de usuario
  const { userInfo, setUserInfo } = useContext(UserContext);

  function HandleEditProfile() {
    if (userInfo.name) {
      setIsEditable(!isEditable);
    }
    // Resetear errores
    setNewPasswordError("");
    setConfirmPasswordError("");
  }

  /*       function handleEditProfile(event) {
        if (newPassword !== userInfo.password) {
          setPasswordError("La contraseña es incorrecta.");
        }
      } */

  function HandleConfirmChanges(event) {
    event.preventDefault();

    // Resetear errores
    setNewPasswordError("");
    setConfirmPasswordError("");

    // Validaciones
    let valid = true;

    if (!newPassword) {
      setNewPasswordError("La contraseña es obligatoria.");
      valid = false;
    }

    if (!confirmPassword) {
      setConfirmPasswordError("Debes repetir la contraseña.");
      valid = false;
    } else if (confirmPassword !== newPassword) {
      setConfirmPasswordError("Las contraseñas no coinciden.");
      valid = false;
    }

    if (valid) {
      console.log("cambio exitoso");
      setUserInfo({ ...userInfo, password: newPassword });
      setNewPassword("");
      setConfirmPassword("");
      setIsEditable(false);
    }
  }

  const handleClickOpen = () => {
    setOpen(true);
  };

  const handleClose = () => {
    setOpen(false);
  };

  // Estado Iconos avatars
  const [avatarIcon, setAvatarIcon] = useState("");

  function handleAvatarChange(event) {
    setAvatarIcon(event.target.src);
    setUserInfo({ ...userInfo, avatar: event.target.src });
    handleClose();
  }

  const avatarList = [Cucumber, Muffin, Pizza, Hamburguer];
  // const randomIndex = Math.floor(Math.random() * avatarList.length);

  return (
    <>
      <Container maxWidth="sm">
        <Box display="flex" flexDirection="column" alignItems="center" mt={4}>
          <Box position="relative">
            <Avatar sx={{ width: 100, height: 100 }} src={avatarIcon} />
            <Fab
              color="primary"
              aria-label="edit"
              sx={{
                position: "absolute",
                bottom: -10,
                right: -10,
                zIndex: 1,
              }}
              onClick={handleClickOpen}
            >
              <EditIcon sx={{ fontSize: 20 }} />
            </Fab>
          </Box>
          <Typography variant="h5" sx={{ mt: 2 }}>
            {userInfo.name || "Nombre de usuario"}
          </Typography>
          <TextField
            label="Cambiar contraseña"
            type="password"
            variant="outlined"
            fullWidth
            margin="normal"
            value={newPassword}
            error={!!newPasswordError}
            helperText={newPasswordError}
            onChange={(e) => setNewPassword(e.target.value)}
            disabled={!isEditable}
          />
          <TextField
            label="Repetir contraseña"
            type="password"
            variant="outlined"
            fullWidth
            margin="normal"
            value={confirmPassword}
            onChange={(e) => setConfirmPassword(e.target.value)}
            error={!!confirmPasswordError}
            helperText={confirmPasswordError}
            disabled={!isEditable}
          />
          <Button
            variant="contained"
            color="primary"
            sx={{ mt: 2 }}
            onClick={HandleEditProfile}
          >
            cambiar contraseña
          </Button>
          <Button
            variant="contained"
            color="primary"
            sx={{ mt: 2 }}
            onClick={HandleConfirmChanges}
          >
            Guardar cambios
          </Button>
        </Box>
      </Container>

      <Dialog open={open} onClose={handleClose}>
        <DialogTitle>{"Elige tu avatar"}</DialogTitle>
        <DialogContent>
          <Box display="flex" justifyContent="space-around" flexWrap="wrap">
            {avatarList.map((avatar, index) => (
              <Avatar
                src={avatar}
                key={index}
                sx={{ width: 60, height: 60, m: 1 }}
                onClick={handleAvatarChange}
              />
            ))}
          </Box>
        </DialogContent>
        <DialogActions>
          <Button onClick={handleClose} color="primary.main">
            Salir
          </Button>
        </DialogActions>
      </Dialog>
    </>
  );
}

export default Profile;
