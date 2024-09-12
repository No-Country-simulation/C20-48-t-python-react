import { useContext, useState } from "react";
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
  const { userInfo, setUserInfo, userList, setIsLogin } = useContext(
    UserContext
  );

  console.log(userList);
  console.log(userInfo);

  // Estado para manejar los valores de los campos y los errores
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [emailError, setEmailError] = useState("");
  const [passwordError, setPasswordError] = useState("");

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

    if (email && password) {
      const user = userList.filter((user) => {
        return user.email === email && user.password === password;
      });

      if (user.length === 0) {
        setEmailError("El correo electrónico es incorrecto.");
        setPasswordError("La contraseña es incorrecta.");
        valid = false;
      }

      if (valid) {
        setUserInfo(user[0]);
        setIsLogin(true);
      }
    }
  };

  // Aquí puedes agregar la lógica para enviar los datos del formulario
  return (
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
          ¿No tienes una cuenta?{" "}
          <Link
            to="/registro"
            style={{ textDecoration: "none", color: "#ff7961" }}
          >
            Registráte
          </Link>
        </Typography>
        <p></p>
        {!userInfo.name ? (
          <Button variant="contained" onClick={handleSubmit}>
            Inicia sesión
          </Button>
        ) : (
          <Button variant="contained">
            <Link to="/" style={{ textDecoration: "none", color: "white" }}>
              Ir a la página principal
            </Link>
          </Button>
        )}
      </Box>
    </Container>
  );
}

export default Login;
