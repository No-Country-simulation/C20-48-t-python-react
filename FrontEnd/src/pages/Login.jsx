import { useState } from 'react';
import { TextField, Button, Typography, Container, Box } from '@mui/material';
import { Link } from 'react-router-dom';

function Login() {
  // Estado para manejar los valores de los campos y los errores
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');
  const [emailError, setEmailError] = useState('');
  const [passwordError, setPasswordError] = useState('');

  // Función para manejar el envío del formulario
  const handleSubmit = (event) => {
    event.preventDefault();

    // Resetear errores
    setEmailError('');
    setPasswordError('');

    // Validaciones
    let valid = true;

    if (!email) {
      setEmailError('El correo electrónico es obligatorio.');
      valid = false;
    } else if (!/\S+@\S+\.\S+/.test(email)) {
      setEmailError('El formato del correo electrónico es inválido.');
      valid = false;
    }

    if (!password) {
      setPasswordError('La contraseña es obligatoria.');
      valid = false;
    }

    // Si todo está bien, puedes manejar el envío del formulario aquí
    if (valid) {
      console.log('Formulario enviado');
      // Aquí puedes agregar la lógica para enviar los datos del formulario
    }
  };

  return (
    <Container maxWidth="sm">
      <Box display="flex" flexDirection="column" alignItems="center" mt={4}>
        <Typography variant="h5">Iniciar sesión</Typography>
        <TextField
          label="Email"
          type="email" // Cambié el tipo a "email" para validación automática del formato
          variant="outlined"
          fullWidth
          margin="normal"
          value={email}
          onChange={(e) => setEmail(e.target.value)}
          error={!!emailError}
          helperText={emailError}
        />
        <TextField
          label="Contraseña"
          type="password"
          variant="outlined"
          fullWidth
          margin="normal"
          value={password}
          onChange={(e) => setPassword(e.target.value)}
          error={!!passwordError}
          helperText={passwordError}
        />
        <p></p>

        <Typography variant="p">¿No tienes una cuenta? <Link to="/registro">
            <Typography variant="p" sx={{ 
            color: "primary.main",
            textDecoration: "none",
            }}>
              Registraté
            </Typography>
          </Link>
        </Typography>


        <p></p>
        <Button variant="contained" onClick={handleSubmit}>
          Inicia sesión
        </Button>
      </Box>
    </Container>
  );
}

export default Login;