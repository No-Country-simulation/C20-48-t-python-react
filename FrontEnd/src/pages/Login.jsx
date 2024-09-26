import { useState } from "react";
import {
  TextField,
  Button,
  Typography,
  Container,
  Box,
  Paper,
  Snackbar,
  Alert,
} from "@mui/material";
import { Link } from "react-router-dom";
import { useUser } from "../Context/UserContext";
import { Helmet } from "react-helmet-async";

function Login() {
  const [loading, setLoading] = useState(false);
  const [error, setErrors] = useState(false);
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [emailError, setEmailError] = useState("");
  const [passwordError, setPasswordError] = useState("");

  const { isLogin, login } = useUser();

  // Función para manejar el envío del formulario
  const handleSubmit = async (event) => {
    event.preventDefault();

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

    if (valid) {
      try {
        setLoading(true);
        const rta = await login({ username: email, password });
      } catch (error) {
        setErrors(true);
        console.log(error);
      } finally {
        setLoading(false);
      }
    }
  };

  // Aquí puedes agregar la lógica para enviar los datos del formulario
  return (
    <Container maxWidth="sm">
      <Helmet>
        <title>Iniciar Sesión</title>
        <meta name="description" content="Iniciar Sesión" />
      </Helmet>
      <Box
        display="flex"
        flexDirection="column"
        alignItems="center"
        mt={4}
        sx={{
          backgroundColor: "background.paper",
          padding: 3.3,
          borderRadius: "1rem",
        }}
      >
        <Typography
          variant="h5"
          sx={{
            backgroundColor: "background.paper",
            padding: 0.3,
            borderRadius: 2,
          }}
        >
          INICIAR SESIÓN
        </Typography>
        <Paper
          sx={{
            backgroundColor: "background.paper",
            padding: 1,
            borderRadius: 2,
            marginY: 1,
          }}
        >
          <TextField
            label="Email"
            type="email" // Cambié el tipo a "email" para validación automática del formato
            variant="filled"
            fullWidth
            margin="normal"
            value={email}
            onChange={(e) => setEmail(e.target.value)}
            error={!!emailError}
            helperText={emailError}
            sx={{
              borderRadius: "15rem",
            }}
          />
          <TextField
            label="Contraseña"
            type="password"
            variant="filled"
            fullWidth
            margin="normal"
            value={password}
            onChange={(e) => setPassword(e.target.value)}
            error={!!passwordError}
            helperText={passwordError}
          />
          <p></p>
        </Paper>
        <Typography
          variant="body"
          sx={{
            backgroundColor: "background.paper",
            padding: 1,
            borderRadius: 2,
          }}
        >
          ¿No tienes una cuenta?
          <Link
            to="/registro"
            style={{ textDecoration: "none", color: "#ff7961", marginLeft: 5 }}
          >
            Registráte
          </Link>
        </Typography>

        {!isLogin ? (
          <Button variant="contained" onClick={handleSubmit}>
            {loading ? "Cargando..." : "Inicia sesión"}
          </Button>
        ) : (
          <Button variant="contained">
            <Link to="/" style={{ textDecoration: "none", color: "white" }}>
              Ir a la página principal
            </Link>
          </Button>
        )}

        <Snackbar
          open={error}
          autoHideDuration={4000}
          onClose={() => setErrors(false)}
        >
          <Alert severity="error">No se pudo iniciar sesión</Alert>
        </Snackbar>
      </Box>
    </Container>
  );
}

export default Login;
