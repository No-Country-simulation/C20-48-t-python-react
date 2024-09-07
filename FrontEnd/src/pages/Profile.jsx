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

  const [password, setPassword] = useState("");
  const [passwordError, setPasswordError] = useState("");
  // Edit Profile
  const [isEditable, setIsEditable] = useState(false);
  // DIalog
  const [open, setOpen] = useState(false);

  // Importar el contexto de usuario
  const { userInfo } = useContext(UserContext);


  function HandleEditProfile() {
    if (userInfo.name) {
      setIsEditable(!isEditable);
    }
  }

  function HandleConfirmChanges() {
    
  }
  
  /* const handleSubmit = (event) => {
    event.preventDefault();

    // Resetear errores
    setEmailError("");
    setPasswordError("");

    // Validaciones
    let valid = true;

    if (!email) {
      setEmailError("El correo electrónico es obligatorio.");
      valid = false;
    } else if (!/\S+@\S+\.\S+/.test(email)) {
      setEmailError("El formato del correo electrónico es inválido.");
      valid = false;
    }

    if (!password) {
      setPasswordError("La contraseña es obligatoria.");
      valid = false;
    }

    if (email !== userInfo.email) {
      setEmailError("El correo electrónico o usuario es incorrecto.");
      valid = false;
    }

    if (password !== userInfo.password) {
      setPasswordError("La contraseña es incorrecta.");
      valid = false;
    }
  }; */

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
  }

  const avatarList = [Cucumber, Muffin, Pizza, Hamburguer];
  const randomIndex = Math.floor(Math.random() * avatarList.length);

  return (
    <>
      <Container maxWidth="sm">
        <Box display="flex" flexDirection="column" alignItems="center" mt={4}>
          <Box position="relative">
            <Avatar sx={{ width: 100, height: 100 }}  src={avatarIcon}/>
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
            disabled={!isEditable}
          />
          <TextField
            label="Repetir contraseña"
            type="password"
            variant="outlined"
            fullWidth
            margin="normal"
            disabled={!isEditable}
          />
          <Button
            variant="contained"
            color="primary"
            sx={{ mt: 2 }}
            onClick={HandleEditProfile}
          >
            Editar perfil
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
            <Avatar src={Cucumber} sx={{ width: 60, height: 60, m: 1 }} onClick={handleAvatarChange} />
            <Avatar src={Muffin} sx={{ width: 60, height: 60, m: 1 }} onClick={handleAvatarChange} />
            <Avatar src={Pizza} sx={{ width: 60, height: 60, m: 1 }} onClick={handleAvatarChange}/>
            <Avatar src={Hamburguer} sx={{ width: 60, height: 60, m: 1 }} onClick={handleAvatarChange} />
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
