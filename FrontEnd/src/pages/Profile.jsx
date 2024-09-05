import {
  Avatar,
  TextField,
  Button,
  Container,
  Box,
  Typography,
} from "@mui/material";
import EditIcon from "@mui/icons-material/Edit";
import Fab from "@mui/material/Fab";
import { useState } from "react";

function Profile() {
  let userName = "asdads";

  const [isEditable, setIsEditable] = useState(false);

  function HandleEditProfile() {
    if (userName){
      setIsEditable(!isEditable);
    }}

  function HandleConfirmChanges () {
    if (userName){
      console.log("Confirmados cambios");
    }}


  return (
    <>
      <Container maxWidth="sm">
      <Box display="flex" flexDirection="column" alignItems="center" mt={4}>
        <Box position="relative">
          <Avatar sx={{ width: 100, height: 100 }} />
          <Fab
            color="primary"
            aria-label="edit"
            sx={{
              position: "absolute",
              bottom: -10,
              right: -10,
              zIndex: 1,
            }}
          >
            <EditIcon sx={{ fontSize: 20 }}/>
          </Fab>
        </Box>
          <Typography variant="h5" sx={{ mt: 2 }}>
            {userName || "Nombre de usuario"}
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
          <Button variant="contained" color="primary" sx={{ mt: 2 }}
          onClick={HandleEditProfile}
          >
            Editar perfil
          </Button>
          <Button variant="contained" color="primary" sx={{ mt: 2 }}
          onClick={HandleConfirmChanges}
          >
            Guardar cambios
          </Button>
        </Box>
      </Container>
    </>
  );
}

export default Profile;
