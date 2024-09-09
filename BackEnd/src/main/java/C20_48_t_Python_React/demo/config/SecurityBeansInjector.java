package C20_48_t_Python_React.demo.config;

import C20_48_t_Python_React.demo.exeption.ObjectNotFoundException;
import C20_48_t_Python_React.demo.persistence.entity.Usuarios;
import C20_48_t_Python_React.demo.persistence.repository.UsuariosRepository;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.context.annotation.Bean;
import org.springframework.context.annotation.Configuration;
import org.springframework.security.authentication.AuthenticationManager;
import org.springframework.security.authentication.AuthenticationProvider;
import org.springframework.security.authentication.dao.DaoAuthenticationProvider;
import org.springframework.security.config.annotation.authentication.configuration.AuthenticationConfiguration;
import org.springframework.security.core.authority.SimpleGrantedAuthority;
import org.springframework.security.core.userdetails.User;
import org.springframework.security.core.userdetails.UserDetailsService;
import org.springframework.security.core.userdetails.UsernameNotFoundException;
import org.springframework.security.crypto.bcrypt.BCryptPasswordEncoder;
import org.springframework.security.crypto.password.PasswordEncoder;
import org.springframework.security.core.userdetails.UserDetailsService;

import java.util.List;
@Configuration
public class SecurityBeansInjector {

    @Autowired
    private UsuariosRepository usuariosRepository;

    @Bean
    public AuthenticationManager authenticationManager(AuthenticationConfiguration authenticationConfiguration) throws Exception {
        return authenticationConfiguration.getAuthenticationManager();
    }

    @Bean
    public UserDetailsService userDetailsService() {
        return username -> {
            Usuarios user = usuariosRepository.findByEmail(username)
                    .orElseThrow(() -> new UsernameNotFoundException("User not found with username " + username));
            return new User(user.getEmail(), user.getContrasena(), List.of(new SimpleGrantedAuthority(user.getRol())));
        };
    }

    @Bean
    public AuthenticationProvider authenticationProvider(){
        DaoAuthenticationProvider authenticationStrategy = new DaoAuthenticationProvider();
        authenticationStrategy.setPasswordEncoder( passwordEncoder() );
        authenticationStrategy.setUserDetailsService( userDetailsService() );

        return authenticationStrategy;
    }
    @Bean
    public PasswordEncoder passwordEncoder() {
        return new BCryptPasswordEncoder();
    }

}