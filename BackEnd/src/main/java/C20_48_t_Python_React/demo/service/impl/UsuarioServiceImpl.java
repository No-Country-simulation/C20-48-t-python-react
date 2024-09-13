package C20_48_t_Python_React.demo.service.impl;

import C20_48_t_Python_React.demo.dto.GuardarUsuarios;
import C20_48_t_Python_React.demo.dto.UsuarioDto;
import C20_48_t_Python_React.demo.dto.auth.LoginResponse;
import C20_48_t_Python_React.demo.exeption.InvalidPasswordException;
import C20_48_t_Python_React.demo.persistence.entity.Usuarios;
import C20_48_t_Python_React.demo.persistence.repository.UsuariosRepository;
import C20_48_t_Python_React.demo.service.UsuarioService;
import C20_48_t_Python_React.demo.service.auth.JwtService;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.security.authentication.AuthenticationManager;
import org.springframework.security.authentication.UsernamePasswordAuthenticationToken;
import org.springframework.security.core.userdetails.UsernameNotFoundException;
import org.springframework.security.crypto.password.PasswordEncoder;
import org.springframework.stereotype.Service;
import org.springframework.util.StringUtils;

import java.time.LocalDateTime;
import java.util.Optional;

@Service
public class UsuarioServiceImpl implements UsuarioService {
    @Autowired
    private UsuariosRepository userRepository;
    @Autowired
    private PasswordEncoder passwordEncoder;

    @Autowired
    private JwtService jwtService;
    @Override
    public Usuarios registerOneCustomer(GuardarUsuarios newUser) {
        validatePassword(newUser);

        Usuarios user = new Usuarios();
        user.setEmail(newUser.getEmail());
        user.setNombreUsuario(newUser.getNombre());
        user.setContrasena(passwordEncoder.encode(newUser.getContrasena()));
        user.setFechaRegistro(LocalDateTime.now());
        user.setAvatar(newUser.getAvatar());
        user.setRol("USER");

        return userRepository.save(user);
    }
    @Override
    public Optional<Usuarios> findOneByUsername(String username) {
        return userRepository.findByEmail(username);
    }
    private void validatePassword(GuardarUsuarios dto) {
        if(!StringUtils.hasText(dto.getContrasena())|| !StringUtils.hasText(dto.getRepeatcontrasena())){
            throw new InvalidPasswordException("No coinciden las contraseñas");
        }
        if(!dto.getContrasena().equals(dto.getRepeatcontrasena())){
            throw new InvalidPasswordException("No coinciden las contraseñas");
        }

        }

    public UsuarioDto obtenerUsuarioPorToken(String token) {
        // Extraer el email del JWT
        String jwt = token.replace("Bearer ", "");
        String email = jwtService.extractUsername(jwt);

        // Buscar el usuario en la base de datos
        Usuarios usuario = userRepository.findByEmail(email)
                .orElseThrow(() -> new RuntimeException("Usuario no encontrado"));

        // Mapear a DTO
        UsuarioDto usuarioDto = new UsuarioDto();
        usuarioDto.setAvatar(usuario.getAvatar());
        usuarioDto.setNombreusuario(usuario.getNombreUsuario());

        return usuarioDto;
    }

}

