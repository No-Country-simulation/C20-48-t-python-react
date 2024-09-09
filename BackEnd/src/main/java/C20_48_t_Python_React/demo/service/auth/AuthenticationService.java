package C20_48_t_Python_React.demo.service.auth;

import C20_48_t_Python_React.demo.dto.GuardarUsuarios;
import C20_48_t_Python_React.demo.dto.RegisteredUser;
import C20_48_t_Python_React.demo.dto.auth.LoginRequest;
import C20_48_t_Python_React.demo.dto.auth.LoginResponse;
import C20_48_t_Python_React.demo.service.UsuarioService;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.security.authentication.AuthenticationManager;
import C20_48_t_Python_React.demo.persistence.entity.Usuarios;
import org.springframework.security.authentication.BadCredentialsException;
import org.springframework.security.authentication.UsernamePasswordAuthenticationToken;
import org.springframework.security.core.Authentication;
import org.springframework.security.core.userdetails.UserDetails;
import org.springframework.security.core.userdetails.UsernameNotFoundException;
import org.springframework.stereotype.Service;
import org.springframework.security.crypto.password.PasswordEncoder;
import org.springframework.security.core.GrantedAuthority;
import org.springframework.security.core.authority.SimpleGrantedAuthority;

import java.util.HashMap;
import java.util.List;
import java.util.Map;
@Service
public class AuthenticationService {
    @Autowired
    private UsuarioService usuarioService;

    @Autowired
    private JwtService jwtService;
    @Autowired
    private PasswordEncoder passwordEncoder;

    @Autowired
    private AuthenticationManager authenticationManager;
    public RegisteredUser registerOneCustomer(GuardarUsuarios newUser) {
        Usuarios user = usuarioService.registerOneCustomer(newUser);

        RegisteredUser userDto = new RegisteredUser();
        userDto.setId(user.getId());
        userDto.setName(user.getNombreUsuario());
        userDto.setEmail(user.getUsername());
        userDto.setRole(user.getRol());


        return userDto;
    }

    private Map<String, Object> generateExtraClaims(Usuarios user) {
        Map<String, Object> extraClaims = new HashMap<>();
        extraClaims.put("username",user.getEmail());
        extraClaims.put("role",user.getRol());
        extraClaims.put("userId", user.getId());
        return extraClaims;
    }


    public LoginResponse login(LoginRequest autRequest) {

        try {
            Authentication authentication = new UsernamePasswordAuthenticationToken(
                    autRequest.getUsername(), autRequest.getPassword()
            );

            Authentication authenticated = authenticationManager.authenticate(authentication);

            UserDetails user = usuarioService.findOneByUsername(autRequest.getUsername()).get();
            String jwt = jwtService.generateToken(user, generateExtraClaims((Usuarios) user));

            LoginResponse authRsp = new LoginResponse();
            authRsp.setJwt(jwt);


            String role = user.getAuthorities().stream()
                    .map(GrantedAuthority::getAuthority)
                    .findFirst()
                    .orElse("USER");

            Long userId = ((Usuarios) user).getId();
            authRsp.setUserId(userId);

            authRsp.setRole(role);

            return authRsp;
        } catch (BadCredentialsException e) {
            throw new RuntimeException("Invalid username or password");
        } catch (UsernameNotFoundException e) {
            System.out.println("UsernameNotFoundException: User not found - " + e.getMessage());
            throw new RuntimeException("User not found");
        } catch (Exception e) {
            e.printStackTrace();
            throw new RuntimeException("Login failed: " + e.getMessage());
        }
    }

    public boolean validateToken(String jwt) {

        try{
            jwtService.extractUsername(jwt);
            return true;
        }catch (Exception e){
            System.out.println(e.getMessage());
            return false;
        }

    }
}
