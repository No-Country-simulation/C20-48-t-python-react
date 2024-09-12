import {
  Avatar,
  TextField,
  Button,
  Container,
  Box,
  Dialog,
  DialogActions,
  DialogContent,
  DialogTitle,
  Fab,
  Paper,
  Typography,
} from "@mui/material";
import EditIcon from "@mui/icons-material/Edit";
import SaveIcon from "@mui/icons-material/Save";
import CancelIcon from "@mui/icons-material/Cancel";

import { useContext, useState } from "react";
import cucumber from "../assets/profile-icons/cucumber-avatar.svg";
import lemon from "../assets/profile-icons/lemon-avatar.svg";
import radish from "../assets/profile-icons/radish-avatar.svg";
import pepper from "../assets/profile-icons/pepper-avatar.svg";
import { UserContext } from "../Context/UserContext";
import { useEffect } from "react";
import { Navigate } from "react-router-dom";
function Profile() {
  const [editName, setEditName] = useState("");
  const [newPassword, setNewPassword] = useState("");
  const [newPasswordError, setNewPasswordError] = useState("");
  const [confirmPassword, setConfirmPassword] = useState("");
  const [confirmPasswordError, setConfirmPasswordError] = useState("");
  // Edit Profile
  const [isEditable, setIsEditable] = useState(false);
  // DIalog
  const [open, setOpen] = useState(false);

  const [avatarIcon, setAvatarIcon] = useState("");

  // Importar el contexto de usuario
  const {
    userInfo,
    setUserInfo,
    userList,
    setUserList,
    isLogin,
    setIsLogin,
  } = useContext(UserContext);

  useEffect(() => {
    console.log(userInfo);
  }, [userList]);

  function HandleEditProfile() {
    if (isLogin) {
      setIsEditable(!isEditable);
    }
    // Resetear errores
    setNewPasswordError("");
    setConfirmPasswordError("");
    setEditName("");
    setNewPassword("");
    setConfirmPassword("");
  }

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
      setUserList(
        userList.map((user) =>
          user.email === userInfo.email
            ? { ...user, password: newPassword }
            : user
        )
      );
      setNewPassword("");
      setConfirmPassword("");
      setIsEditable(false);
    }
  }

  // Dialog open close
  const handleClickOpen = () => {
    setOpen(true);
  };

  const handleClose = () => {
    setOpen(false);
  };

  // funcion editar nombre
  function handleUserNameEdit() {
    if (editName.length > 2) {
      setEditName(editName);
      setUserInfo({ ...userInfo, name: editName });
      console.log("editName:", editName);
      console.log(userInfo);

      setUserList(
        userList.map((user) =>
          user.email === userInfo.email ? { ...user, name: editName } : user
        )
      );

      setIsEditable(false);
    }
  }

  // funcion cambiar avatars

  function handleAvatarChange(event) {
    setAvatarIcon(event.target.src);
    setUserInfo({ ...userInfo, avatar: event.target.src });
    handleClose();
  }
// Array avatares
  const avatarList = [cucumber, lemon, radish, pepper];

  function handleLogout() {
    setUserInfo({
      ...userInfo,
      name: "",
      email: "",
      password: "",
      avatar: "",
      id: "",
      favorites: [],
    });
    setIsLogin(false);
    setIsEditable(false);
    // Redirigir al usuario a /login
    Navigate("/login");
    console.log(userInfo);
  }

  return (
    <>
      <Container maxWidth="sm">
        <Box
          display="flex"
          flexDirection="column"
          alignItems="center"
          mt={4}
          sx={{
            backgroundColor: "background.paper",
            padding: 3.3,
            borderRadius: "1rem",
            gap: 1,
          }}
        >
          <Box position="relative">
            <Avatar
              sx={{ width: 100, height: 100 }}
              src={avatarIcon || userInfo.avatar}
            />
            <Fab
              color="primary"
              aria-label="edit"
              sx={{
                position: "absolute",
                bottom: -10,
                right: -10,
                zIndex: 1,
                width: 40,
                height: 40,
                cursor: "pointer",
              }}
              onClick={handleClickOpen}
              disabled={!isEditable}
            >
              <EditIcon sx={{ fontSize: 30 }} />
            </Fab>
          </Box>

          <Box
            backgroundColor="background.paper"
            display={"flex"}
            flexDirection="row"
            alignItems="center"
            justifyContent="space-between"
            mt={1}
            px={2}
            sx={{ borderRadius: 2 }}
          >
            {!isEditable ? (
              <Typography variant="h5" sx={{ m: 1 }}>
                {userInfo.name || "Nombre de usuario"}
              </Typography>
            ) : (
              <TextField
                label={"Nombre de usuario"}
                type="name"
                variant="filled"
                fullWidth
                margin="normal"
                value={editName}
                onChange={(e) => setEditName(e.target.value)}
                disabled={!isEditable}
              />
            )}
            <Fab
              color="primary"
              aria-label="edit"
              sx={{
                zIndex: 1,
                width: 40,
                height: 40,
                cursor: "pointer",
              }}
              onClick={handleUserNameEdit}
              disabled={!isEditable}
            >
              <EditIcon sx={{ fontSize: 30 }} />
            </Fab>
          </Box>

          <Paper elevation={0} sx={{ padding: 1, borderRadius: 2, mt: 1 }}>
            <TextField
              label="Cambiar contraseña"
              type="password"
              variant="filled"
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
              variant="filled"
              fullWidth
              margin="normal"
              value={confirmPassword}
              onChange={(e) => setConfirmPassword(e.target.value)}
              error={!!confirmPasswordError}
              helperText={confirmPasswordError}
              disabled={!isEditable}
            />
          </Paper>

          <Box>
            {isEditable ? (
              <Button
                variant="contained"
                startIcon={<CancelIcon />}
                color="primary"
                sx={{ mt: 1 }}
                onClick={HandleEditProfile}
              >
                Cancelar
              </Button>
            ) : (
              <Button
                variant="contained"
                startIcon={<EditIcon />}
                color="primary"
                sx={{ mt: 1 }}
                onClick={HandleEditProfile}
              >
                Editar
              </Button>
            )}

            {isEditable && (
              <Button
                variant="contained"
                startIcon={<SaveIcon />}
                color="primary"
                sx={{ mt: 1 }}
                onClick={HandleConfirmChanges}
              >
                Guardar
              </Button>
            )}
          </Box>
          <Button
            variant="contained"
            color="primary"
            sx={{ mt: 1 }}
            onClick={handleLogout}
          >
            Cerrar sesion
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
