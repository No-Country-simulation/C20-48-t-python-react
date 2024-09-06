package C20_48_t_Python_React.demo.service.impl;

import C20_48_t_Python_React.demo.dto.GuardarUsuarios;
import C20_48_t_Python_React.demo.exeption.InvalidPasswordException;
import C20_48_t_Python_React.demo.persistence.entity.Usuarios;
import C20_48_t_Python_React.demo.persistence.repository.UsuariosRepository;
import C20_48_t_Python_React.demo.service.UsuarioService;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.security.crypto.password.PasswordEncoder;
import org.springframework.stereotype.Service;
import org.springframework.util.StringUtils;

import java.time.LocalDateTime;
@Service
public class UsuarioServiceImpl implements UsuarioService {
    @Autowired
    private UsuariosRepository userRepository;
    @Autowired
    private PasswordEncoder passwordEncoder;
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

    private void validatePassword(GuardarUsuarios dto) {
        if(!StringUtils.hasText(dto.getContrasena())|| !StringUtils.hasText(dto.getRepeatcontrasena())){
            throw new InvalidPasswordException("No coinciden las contraseñas");
        }
        if(!dto.getContrasena().equals(dto.getRepeatcontrasena())){
            throw new InvalidPasswordException("No coinciden las contraseñas");
        }
}
}