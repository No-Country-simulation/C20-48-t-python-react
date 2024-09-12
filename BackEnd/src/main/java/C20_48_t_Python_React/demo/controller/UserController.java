package C20_48_t_Python_React.demo.controller;

import C20_48_t_Python_React.demo.dto.MostrarReceta;
import C20_48_t_Python_React.demo.persistence.entity.Recetas;
import C20_48_t_Python_React.demo.persistence.entity.Usuarios;
import C20_48_t_Python_React.demo.persistence.repository.LikesRepository;
import C20_48_t_Python_React.demo.persistence.repository.ValoracionRepository;
import C20_48_t_Python_React.demo.service.RecetaService;
import C20_48_t_Python_React.demo.service.UsuarioService;
import C20_48_t_Python_React.demo.service.auth.JwtService;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.http.HttpStatus;
import org.springframework.http.ResponseEntity;
import org.springframework.security.core.Authentication;
import org.springframework.security.core.context.SecurityContextHolder;
import org.springframework.web.bind.annotation.GetMapping;
import org.springframework.web.bind.annotation.RequestHeader;
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
    @Autowired
    ValoracionRepository valoracionRepository;
    @Autowired
    private final JwtService jwtService;
    @Autowired
    private final  LikesRepository likesRepository;

    public UserController(JwtService jwtService, LikesRepository likesRepository) {
        this.jwtService = jwtService;
        this.likesRepository = likesRepository;
    }

    @GetMapping("/misrecetas")
    public ResponseEntity<List<MostrarReceta>> obtenerRecetasUsuario() {
        Authentication authentication = SecurityContextHolder.getContext().getAuthentication();
        if (authentication == null || !authentication.isAuthenticated()) {
            return ResponseEntity.status(HttpStatus.UNAUTHORIZED).build();
        }


        String username = authentication.getName();
        Usuarios usuario = usuarioService.findOneByUsername(username)
                .orElseThrow(() -> new RuntimeException("Usuario no encontrado"));

        List<Recetas> recetas = recetaService.obtenerRecetasPorUsuario(usuario.getId());
        List<MostrarReceta> recetaResponseDTOs = recetas.stream()
                .map(receta -> MostrarReceta.fromEntity(receta, valoracionRepository, likesRepository ))  // Pasar el repo de valoraciones
                .collect(Collectors.toList());

        return ResponseEntity.ok(recetaResponseDTOs);
    }

    @GetMapping("/mis-favoritos")
    public ResponseEntity<List<MostrarReceta>> obtenerFavoritos(@RequestHeader("Authorization") String token) {
        Long usuarioId = jwtService.extractUserId(token.replace("Bearer ", ""));
        List<Recetas> favoritas = recetaService.obtenerRecetasFavoritasPorUsuario(usuarioId);

        List<MostrarReceta> recetaDTOs = favoritas.stream()
                .map(receta -> MostrarReceta.fromEntity(receta, valoracionRepository, likesRepository)) // Pasando ambos repositorios
                .collect(Collectors.toList());
        return ResponseEntity.ok(recetaDTOs);
    }
    }
