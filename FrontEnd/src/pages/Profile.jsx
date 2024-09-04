import { Avatar, TextField, Button, Container, Box } from '@mui/material';
function Profile() {
    let userName = "Hola Mundo";
  return (
    <>
     <Container maxWidth="sm">
      <Box display="flex" flexDirection="column" alignItems="center" mt={4}>
        <Avatar sx={{ width: 100, height: 100 }} />
        <TextField
          label={userName || "Nombre de usuario"}
          variant="outlined"
          fullWidth
          margin="normal"
          disabled
          />
        <TextField
          label="Cambiar contraseña"
          type="password"
          variant="outlined"
          fullWidth
          margin="normal"
          disabled
          />
        <TextField
          label="Repetir contraseña"
          type="password"
          variant="outlined"
          fullWidth
          margin="normal"
          disabled
        />
        <Button variant="contained" color="primary" sx={{ mt: 2 }}>
          Editar perfil
        </Button>
        <Button variant="contained" color="primary" sx={{ mt: 2 }}>
          Guardar cambios
        </Button>
      </Box>
    </Container>
    </>
  );
}

export default Profile;