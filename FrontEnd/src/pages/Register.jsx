import { Link } from "react-router-dom";
import { TextField } from "@mui/material" 
import { Button } from "@mui/material"
import "./Pages.css";
function Register() {
return (<>

    <div className="loginRegisterCard">
    <div><h2>Registrate</h2></div>
    <div><TextField id="standard-basic" label="Email" variant="standard" /></div>
    <div><TextField id="standard-basic" label="Contraseña" variant="standard" /></div>
    <div><Button variant="contained">Registrate</Button></div>
    </div>

</>)
}

export default Register;
