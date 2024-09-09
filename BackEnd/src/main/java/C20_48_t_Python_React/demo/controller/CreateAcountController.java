package C20_48_t_Python_React.demo.controller;

import C20_48_t_Python_React.demo.dto.GuardarUsuarios;
import C20_48_t_Python_React.demo.dto.RegisteredUser;
import C20_48_t_Python_React.demo.service.auth.AuthenticationService;
import jakarta.validation.Valid;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.http.HttpStatus;
import org.springframework.http.ResponseEntity;
import org.springframework.web.bind.annotation.*;

@RestController
@RequestMapping("/register")
public class CreateAcountController {
    @Autowired
    private AuthenticationService authenticationService;
    @PostMapping()
    public ResponseEntity<RegisteredUser> registerOne(@RequestBody @Valid GuardarUsuarios newUser) {
        RegisteredUser registeredUser = (RegisteredUser) authenticationService.registerOneCustomer(newUser);

        return ResponseEntity.status(HttpStatus.CREATED).body(registeredUser);
    }
}
