package C20_48_t_Python_React.demo.controller;

import C20_48_t_Python_React.demo.dto.MostrarReceta;
import C20_48_t_Python_React.demo.persistence.entity.Recetas;
import C20_48_t_Python_React.demo.persistence.entity.Usuarios;
import C20_48_t_Python_React.demo.service.RecetaService;
import C20_48_t_Python_React.demo.service.UsuarioService;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.http.HttpStatus;
import org.springframework.http.ResponseEntity;
import org.springframework.security.core.Authentication;
import org.springframework.security.core.context.SecurityContextHolder;
import org.springframework.web.bind.annotation.GetMapping;
import org.springframework.web.bind.annotation.RequestMapping;
import org.springframework.web.bind.annotation.RestController;

import java.util.List;
import java.util.stream.Collectors;

@RestController
@RequestMapping("/user")
public class UserController {
    @Autowired
    UsuarioService usuarioService;

    @Autowired
    RecetaService recetaService;
    @GetMapping()
    public ResponseEntity<List<MostrarReceta>> obtenerRecetasUsuario() {
        // Obtener el usuario autenticado desde el contexto de seguridad
        Authentication authentication = SecurityContextHolder.getContext().getAuthentication();
        if (authentication == null || !authentication.isAuthenticated()) {
            return ResponseEntity.status(HttpStatus.UNAUTHORIZED).build();
        }


        String username = authentication.getName();
        Usuarios usuario = usuarioService.findOneByUsername(username)
                .orElseThrow(() -> new RuntimeException("Usuario no encontrado"));

        // Obtener las recetas del usuario
        List<Recetas> recetas = recetaService.obtenerRecetasPorUsuario(usuario.getId());
        List<MostrarReceta> recetaResponseDTOs = recetas.stream()
                .map(MostrarReceta::fromEntity)
                .collect(Collectors.toList());
        return ResponseEntity.ok(recetaResponseDTOs);
    }

    }
