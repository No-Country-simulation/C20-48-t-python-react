package C20_48_t_Python_React.demo.config.filter;
import C20_48_t_Python_React.demo.exeption.ObjectNotFoundException;
import C20_48_t_Python_React.demo.persistence.entity.Usuarios;
import C20_48_t_Python_React.demo.service.UsuarioService;
import C20_48_t_Python_React.demo.service.auth.JwtService;
import jakarta.servlet.*;
import jakarta.servlet.http.HttpServletRequest;
import jakarta.servlet.http.HttpServletResponse;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.security.authentication.UsernamePasswordAuthenticationToken;
import org.springframework.security.core.Authentication;
import org.springframework.security.core.context.SecurityContextHolder;
import org.springframework.security.core.userdetails.UserDetails;
import org.springframework.security.web.authentication.WebAuthenticationDetails;
import org.springframework.stereotype.Component;
import org.springframework.util.StringUtils;
import org.springframework.web.filter.GenericFilterBean;
import org.springframework.web.filter.OncePerRequestFilter;

import java.io.IOException;
import org.springframework.stereotype.Component;

@Component
public class JwtAuthenticationFilter extends OncePerRequestFilter {
    @Autowired
    private JwtService jwtService;

    @Autowired
    private UsuarioService usuarioService;
    @Override
    protected void doFilterInternal(HttpServletRequest request, HttpServletResponse response, FilterChain filterChain)
            throws ServletException, IOException {

        String authorizationHeader = request.getHeader("Authorization");//Bearer jwt
        if(!StringUtils.hasText(authorizationHeader) || !authorizationHeader.startsWith("Bearer ")){
            filterChain.doFilter(request, response);
            return;
        }

        String jwt = authorizationHeader.split(" ")[1];
        System.out.println("JWT: " + jwt); // Depuración

        String username = jwtService.extractUsername(jwt);
        System.out.println("Username extracted: " + username); // Depuración

        Long userId = jwtService.extractUserId(jwt);
        System.out.println("User ID extracted: " + userId);

        Usuarios user = usuarioService.findOneByUsername(username)
                .orElseThrow(() -> new ObjectNotFoundException("User not found. Username: " + username));

        UsernamePasswordAuthenticationToken authToken = new UsernamePasswordAuthenticationToken(
                username, null, user.getAuthorities()
        );
        authToken.setDetails(new WebAuthenticationDetails(request));
        SecurityContextHolder.getContext().setAuthentication(authToken);

        filterChain.doFilter(request, response);
    }


    }

