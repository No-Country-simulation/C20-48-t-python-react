import { TextField, Button, Typography, Container, Box} from "@mui/material"
import "./LoginRegister.css";
function Login() { return (<>

  <Container maxWidth="sm">
    <Box display="flex" flexDirection="column" alignItems="center" mt={4}>
      <Typography variant="h5">Iniciar sesión</Typography>
        <TextField
          label="Email"
          type="password"
          variant="outlined"
          fullWidth
          margin="normal"
        />
        <TextField 
          label="Contraseña"
          type="password"
          variant="outlined"
          fullWidth
          margin="normal"
        />
        <p></p>
        <Button variant="contained">Inicia sesión</Button>        
    </Box>
  </Container>
    
</>)}

export default Login
