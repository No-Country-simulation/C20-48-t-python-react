package C20_48_t_Python_React.demo.controller;

import C20_48_t_Python_React.demo.dto.RecetaDTO;
import C20_48_t_Python_React.demo.dto.RecetaResponse;
import C20_48_t_Python_React.demo.dto.auth.LoginResponse;
import C20_48_t_Python_React.demo.persistence.entity.Recetas;
import C20_48_t_Python_React.demo.service.RecetaService;
import C20_48_t_Python_React.demo.service.auth.JwtService;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.http.ResponseEntity;
import org.springframework.security.core.Authentication;
import org.springframework.security.core.context.SecurityContextHolder;
import org.springframework.web.bind.annotation.*;

@RestController
@RequestMapping("/recetas")
public class RecetaController {

    @Autowired
    private RecetaService recetaService;
    @Autowired
    private final JwtService jwtService;

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
}