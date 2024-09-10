package C20_48_t_Python_React.demo.controller;

import C20_48_t_Python_React.demo.dto.RecetaDTO;
import C20_48_t_Python_React.demo.dto.RecetaResponse;
import C20_48_t_Python_React.demo.dto.auth.LoginResponse;
import C20_48_t_Python_React.demo.persistence.entity.Recetas;
import C20_48_t_Python_React.demo.service.LikesService;
import C20_48_t_Python_React.demo.service.RecetaService;
import C20_48_t_Python_React.demo.service.ValoracionService;
import C20_48_t_Python_React.demo.service.auth.JwtService;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.http.ResponseEntity;
import org.springframework.security.core.Authentication;
import org.springframework.security.core.annotation.AuthenticationPrincipal;
import org.springframework.security.core.context.SecurityContextHolder;
import org.springframework.web.bind.annotation.*;

@RestController
@RequestMapping("/recetas")
public class RecetaController {
    @Autowired
    private ValoracionService valoracionService;

    @Autowired
    private RecetaService recetaService;
    @Autowired
    private final JwtService jwtService;
    @Autowired
    private LikesService likesService;

    public RecetaController(RecetaService recetaService, JwtService jwtService) {
        this.recetaService = recetaService;
        this.jwtService = jwtService;
    }
    @PostMapping
    public ResponseEntity<RecetaResponse> crearReceta(@RequestBody RecetaDTO recetaDTO,
                                                         @RequestHeader("Authorization") String token) {
        // Eliminar el prefijo "Bearer " del token para obtener el JWT puro
        String jwt = token.replace("Bearer ", "");

        // Extraer el ID del usuario autenticado desde el JWT
        Long usuarioId = jwtService.extractUserId(jwt);

        // Crear la receta
        recetaService.crearReceta(recetaDTO, usuarioId);

        // Devolver solo el mensaje de éxito
        return ResponseEntity.ok(new RecetaResponse("La receta ha sido creada exitosamente"));
    }
    @PostMapping("/{recetaId}")
    public ResponseEntity<String> valorarReceta(
            @PathVariable Long recetaId,
            @RequestParam Integer puntuacion,
            @RequestHeader("Authorization") String token) {
        String jwt = token.replace("Bearer ", "");

        Long usuarioId = jwtService.extractUserId(jwt);

        valoracionService.valorarReceta(recetaId, puntuacion, usuarioId);
        return ResponseEntity.ok("La receta ha sido valorada exitosamente.");
    }
    @PostMapping("/{recetaId}/like")
    public ResponseEntity<String> agregarLike(@PathVariable Long recetaId, @RequestHeader("Authorization") String token) {
        // Extraer el ID del usuario autenticado desde el JWT
        Long usuarioId = jwtService.extractUserId(token.replace("Bearer ", ""));

        // Llamar al servicio para agregar el like
        likesService.agregarLike(recetaId, usuarioId);

        return ResponseEntity.ok("Like agregado exitosamente");
    }

}