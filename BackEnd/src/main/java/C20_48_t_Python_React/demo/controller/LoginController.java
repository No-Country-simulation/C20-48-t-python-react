package C20_48_t_Python_React.demo.controller;

import C20_48_t_Python_React.demo.dto.GuardarUsuarios;
import C20_48_t_Python_React.demo.dto.auth.LoginRequest;
import C20_48_t_Python_React.demo.dto.auth.LoginResponse;
import C20_48_t_Python_React.demo.service.auth.AuthenticationService;
import C20_48_t_Python_React.demo.service.impl.UsuarioServiceImpl;
import jakarta.validation.Valid;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.http.ResponseEntity;
import org.springframework.web.bind.annotation.*;

@RestController
@RequestMapping("/login")
public class LoginController {
    @Autowired
    private AuthenticationService authenticationService;

    @PostMapping()
    public  ResponseEntity<LoginResponse> authenticate(
            @RequestBody @Valid LoginRequest loginRequest){

        LoginResponse rsp = authenticationService.login(loginRequest);
        return ResponseEntity.ok(rsp);
    }
}
