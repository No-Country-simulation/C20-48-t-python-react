import { useContext, useState } from "react";
import { UserContext } from "../Context/UserContext";
import {
  TextField,
  Button,
  Typography,
  Container,
  Box,
  Paper,
} from "@mui/material";
import { Link } from "react-router-dom";

function Register() {
  // Estado para manejar los valores de los campos y los errores
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [confirmPassword, setConfirmPassword] = useState("");
  const [emailError, setEmailError] = useState("");
  const [passwordError, setPasswordError] = useState("");
  const [confirmPasswordError, setConfirmPasswordError] = useState("");

  // Luego de registrarse, redireccionar al usuario a la página de inicio de sesión
  const [isRegistered, setIsRegistered] = useState(false);

  // Función para manejar el envío del formulario

  // Importar el contexto de usuario

  const { userInfo, saveUserInfo, userList } = useContext(UserContext);

  // Función para manejar el envío del formulario
  const handleSubmit = (event) => {
    event.preventDefault();

    // Resetear errores
    setEmailError("");
    setPasswordError("");
    setConfirmPasswordError("");
    // Validaciones
    let valid = true;

    if (!email) {
      setEmailError("El correo electrónico es obligatorio.");
      valid = false;
    } else if (!/\S+@\S+\.\S+/.test(email)) {
      setEmailError("El formato del correo electrónico es inválido.");
      valid = false;
    } else if (email.split("@")[0].length < 3) {
      setEmailError("El email debe tener al menos 3 caracteres.");
      valid = false;
    } else if (
      email.split("@")[0] === userList.map((user) => user.email.split("@")[0])
    ) {
      setEmailError("El email ya existe.");
      valid = false;
    }

    if (!password) {
      setPasswordError("La contraseña es obligatoria.");
      valid = false;
    } else if (password.length < 6) {
      setPasswordError("La contraseña debe tener al menos 6 caracteres.");
      valid = false;
    }

    if (!confirmPassword) {
      setConfirmPasswordError("Debes repetir la contraseña.");
      valid = false;
    } else if (confirmPassword !== password) {
      setConfirmPasswordError("Las contraseñas no coinciden.");
      valid = false;
    }

    // Si todo está bien, puedes manejar el envío del formulario aquí
    if (valid) {
      // Aquí puedes agregar la lógica para enviar los datos del formulario

      const newUserInfo = {
        id: userInfo.id + 1,
        name: email.split("@")[0],
        email: email,
        password: password,
        avatar: "",
        favorites: [],
      };

      saveUserInfo(newUserInfo);
      setIsRegistered(true);
    }

    // Luego de enviarlos, puedes redireccionar o mostrar un mensaje de éxito
  };
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
          gap: 1,
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
          REGISTRARSE
        </Typography>
        <Paper
          sx={{
            backgroundColor: "background.paper",
            padding: 1,
            borderRadius: 2,
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
          <TextField
            label="Repetir contraseña"
            type="password"
            variant="filled"
            fullWidth
            margin="normal"
            value={confirmPassword}
            onChange={(e) => setConfirmPassword(e.target.value)}
            error={!!confirmPasswordError}
            helperText={confirmPasswordError}
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
          ¿Ya tienes una cuenta?
          <Link
            to="/login"
            style={{ textDecoration: "none", color: "#ff7961" }}
          >
            {" "}
            Inicia sesión
          </Link>
        </Typography>

        <p></p>
        {
          /* Botón para enviar el formulario */
          !isRegistered ? (
            <Button variant="contained" onClick={handleSubmit}>
              Regístrate
            </Button>
          ) : (
            <Button variant="contained">
              <Link
                to="/login"
                style={{ textDecoration: "none", color: "#ffffff" }}
              >
                Iniciar sesión
              </Link>
            </Button>
          )
        }
      </Box>
    </Container>
  );
}

export default Register;
