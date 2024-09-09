package C20_48_t_Python_React.demo.service;

import C20_48_t_Python_React.demo.dto.GuardarUsuarios;
import C20_48_t_Python_React.demo.persistence.entity.Usuarios;
import org.springframework.stereotype.Service;

import java.util.Optional;

public interface UsuarioService {

    Usuarios registerOneCustomer(GuardarUsuarios newUser);
    Optional<Usuarios> findOneByUsername(String username);
}
