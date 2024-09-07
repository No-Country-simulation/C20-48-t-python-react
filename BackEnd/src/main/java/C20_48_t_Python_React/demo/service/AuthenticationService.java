package C20_48_t_Python_React.demo.service;

import C20_48_t_Python_React.demo.dto.GuardarUsuarios;
import C20_48_t_Python_React.demo.dto.RegisteredUser;
import C20_48_t_Python_React.demo.persistence.entity.Usuarios;
import C20_48_t_Python_React.demo.service.impl.UsuarioServiceImpl;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Service;

import java.util.HashMap;
import java.util.Map;

@Service
public class AuthenticationService {
    @Autowired
    private UsuarioServiceImpl usuarioServiceImpl;
    public RegisteredUser registerOneCustomer(GuardarUsuarios newUser) {
        Usuarios user = usuarioServiceImpl.registerOneCustomer(newUser);
        RegisteredUser userDto = new RegisteredUser();
        userDto.setId(user.getId());
        userDto.setName(user.getNombreUsuario());
        userDto.setUsername(user.getEmail());
        userDto.setRole(user.getRol());

        return userDto;
    }


    private Map<String, Object> generateExtraClaims(Usuarios user) {
        Map<String, Object> extraClaims = new HashMap<>();
        extraClaims.put("name",user.getEmail());
        extraClaims.put("role",user.getRol());
        return extraClaims;
    }
}
