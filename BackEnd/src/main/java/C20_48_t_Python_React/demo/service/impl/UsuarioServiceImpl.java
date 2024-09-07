package C20_48_t_Python_React.demo.service.impl;

import C20_48_t_Python_React.demo.dto.GuardarUsuarios;
import C20_48_t_Python_React.demo.exeption.InvalidPasswordException;
import C20_48_t_Python_React.demo.persistence.entity.Usuarios;
import C20_48_t_Python_React.demo.persistence.repository.UsuariosRepository;
import C20_48_t_Python_React.demo.service.JWTUtils;
import C20_48_t_Python_React.demo.service.UsuarioService;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.security.authentication.AuthenticationManager;
import org.springframework.security.authentication.UsernamePasswordAuthenticationToken;
import org.springframework.security.core.userdetails.UsernameNotFoundException;
import org.springframework.security.crypto.password.PasswordEncoder;
import org.springframework.stereotype.Service;
import org.springframework.util.StringUtils;

import java.time.LocalDateTime;
import java.util.HashMap;

@Service
public class UsuarioServiceImpl implements UsuarioService {
    @Autowired
    private UsuariosRepository userRepository;
    @Autowired
    private PasswordEncoder passwordEncoder;
    @Autowired
    private JWTUtils jwtUtils;
    @Autowired
    private AuthenticationManager authenticationManager;
    @Override
    public Usuarios registerOneCustomer(GuardarUsuarios newUser) {
        validatePassword(newUser);


        Usuarios user = new Usuarios();
        user.setNombreUsuario(newUser.getNombre());
        user.setContrasena(passwordEncoder.encode(newUser.getContrasena()));
        user.setEmail(newUser.getEmail());
        user.setFechaRegistro(LocalDateTime.now());
        user.setRol("USER");

        return userRepository.save(user);
    }
    public GuardarUsuarios login(GuardarUsuarios loginRequest) {
        GuardarUsuarios response = new GuardarUsuarios();
        try {
            authenticationManager.authenticate(
                    new UsernamePasswordAuthenticationToken(
                            loginRequest.getEmail(),
                            loginRequest.getContrasena()
                    )
            );

            var user = userRepository.findByEmail(loginRequest.getEmail())
                    .orElseThrow(() -> new UsernameNotFoundException("Usuario no encontrado"));

            // Generar token JWT y refresh token
            var jwt = jwtUtils.generateToken(user);
            var refreshToken = jwtUtils.generateRefreshToken(new HashMap<>(), user);

            response.setStatusCode(200);
            response.setToken(jwt);
            response.setRol(user.getRol());
            response.setRefreshToken(refreshToken);
            response.setExpirationTime("24Hrs");
            response.setMessage("Successfully Logged In");

        } catch (Exception e) {
            response.setStatusCode(500);
            response.setMessage("Login failed: " + e.getMessage());
        }

        return response;
    }

    private void validatePassword(GuardarUsuarios dto) {
        if(!StringUtils.hasText(dto.getContrasena())|| !StringUtils.hasText(dto.getRepeatcontrasena())){
            throw new InvalidPasswordException("No coinciden las contraseñas");
        }
        if(!dto.getContrasena().equals(dto.getRepeatcontrasena())){
            throw new InvalidPasswordException("No coinciden las contraseñas");
        }

        }

}

