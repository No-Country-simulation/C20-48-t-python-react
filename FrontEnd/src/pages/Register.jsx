import { TextField, Button, Typography, Container, Box} from "@mui/material"
import "./LoginRegister.css";
function Register() { return (<>

  <Container maxWidth="sm">
    <Box display="flex" flexDirection="column" alignItems="center" mt={4}>
      <Typography variant="h5">Registrarse</Typography>
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
        <TextField 
          label="Repitir contraseña"
          type="password"
          variant="outlined"
          fullWidth
          margin="normal"
        />
        <p></p>
        <Button variant="contained">Registrate</Button>        
    </Box>
  </Container>
    
</>)}

export default Register
