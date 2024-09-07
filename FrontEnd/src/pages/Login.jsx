import { useContext, useEffect, useState } from "react";
import {
  TextField,
  Button,
  Typography,
  Container,
  Box,
  Paper,
} from "@mui/material";
import { Link } from "react-router-dom";
import { UserContext } from "../Context/UserContext";

function Login() {
  // Importar el contexto de usuario
  const { userInfo } = useContext(UserContext);

  useEffect(() => {
    console.log(userInfo);
  }, [userInfo]);

  // Estado para manejar los valores de los campos y los errores
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [emailError, setEmailError] = useState("");
  const [passwordError, setPasswordError] = useState("");
  const [isLogin, setIsLogin] = useState(false);

  // Función para manejar el envío del formulario
  const handleSubmit = (event) => {
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

    // Si todo está bien, puedes manejar el envío del formulario aquí
    if (valid) {
      console.log("Formulario enviado");
      setIsLogin(true);
    }
  };

  // Aquí puedes agregar la lógica para enviar los datos del formulario
  return (
    <Container maxWidth="sm">
      <Box display="flex" flexDirection="column" alignItems="center" mt={4}>
        <Typography
          variant="h5"
          sx={{
            backgroundColor: "background.paper",
            padding: 0.3,
            borderRadius: 2,
          }}
        >
          Iniciar sesión
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
        </Paper>
        <Typography
          variant="body"
          sx={{
            backgroundColor: "background.paper",
            padding: 1,
            borderRadius: 2,
          }}
        >
          ¿No tienes una cuenta?{" "}
          <Link
            to="/registro"
            style={{ textDecoration: "none", color: "#ff7961" }}
          >
            Registráte
          </Link>
        </Typography>
        <p></p>
        {
          !isLogin ?
          <Button variant="contained" onClick={handleSubmit}>
          Inicia sesión
        </Button>
        :
        <Button variant="contained">
        <Link
        to="/"
            style={{ textDecoration: "none", color: "white" }}
        >
          Ir a la página principal
        </Link>
        </Button>
        }
      </Box>
    </Container>
  );
}

export default Login;
