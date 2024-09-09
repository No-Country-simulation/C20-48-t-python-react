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
import { useContext, useState } from "react";
import Cucumber from "../assets/profile-icons/cucumber.jpg";
import Muffin from "../assets/profile-icons/muffin.png";
import Pizza from "../assets/profile-icons/pizza.jpg";
import Hamburguer from "../assets/profile-icons/hamburguer.jpg";
import { UserContext } from "../Context/UserContext";

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

  // Importar el contexto de usuario
  const { userInfo, setUserInfo, userList, setUserList } =
    useContext(UserContext);
  console.log(userInfo);

  function HandleEditProfile() {
    if (userInfo.name) {
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
  function handleUserNameEdit(editName) {
    console.log("editName:", editName);
    if (isEditable && editName.length > 2) {
      setUserInfo({ ...userInfo, name: editName });
      setEditName(editName);
      setUserList(
        userList.map((user) =>
          user.email === userInfo.email
            ? { ...user, name: editName }
            : user
        )
      )
      setIsEditable(false);
    }
  }

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
            my={1}
            px={2}
            sx={{ borderRadius: 2 }}
          >
            {!isEditable ? (
              <Typography variant="h5" sx={{ mt: 2 }}>
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
              onClick={handleUserNameEdit(editName)}
              disabled={!isEditable}
            >
              <EditIcon sx={{ fontSize: 30 }} />
            </Fab>
          </Box>

          <Paper elevation={0} sx={{ padding: 1, borderRadius: 2, mt: 2 }}>
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
          </Paper>
          <Button
            variant="contained"
            color="primary"
            sx={{ mt: 2 }}
            onClick={HandleEditProfile}
          >
            editar perfil
          </Button>
          {isEditable && (
            <Button
              variant="contained"
              color="primary"
              sx={{ mt: 2 }}
              onClick={HandleConfirmChanges || handleUserNameEdit}
            >
              Guardar cambios
            </Button>
          )}
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
