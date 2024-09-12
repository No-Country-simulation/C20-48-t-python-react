package C20_48_t_Python_React.demo.controller;

import C20_48_t_Python_React.demo.dto.MostrarReceta;
import C20_48_t_Python_React.demo.dto.RecetaDTO;
import C20_48_t_Python_React.demo.dto.RecetaResponse;
import C20_48_t_Python_React.demo.persistence.entity.Recetas;
import C20_48_t_Python_React.demo.persistence.repository.LikesRepository;
import C20_48_t_Python_React.demo.persistence.repository.ValoracionRepository;
import C20_48_t_Python_React.demo.service.LikesService;
import C20_48_t_Python_React.demo.service.RecetaService;
import C20_48_t_Python_React.demo.service.ValoracionService;
import C20_48_t_Python_React.demo.service.auth.JwtService;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.data.domain.Page;
import org.springframework.data.domain.PageRequest;
import org.springframework.data.domain.Pageable;
import org.springframework.http.ResponseEntity;
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
    private final ValoracionRepository valoracionRepository;
    @Autowired
    private final LikesRepository likesRepository;
    @Autowired
    private LikesService likesService;

    public RecetaController(RecetaService recetaService, JwtService jwtService, ValoracionRepository valoracionRepository, LikesRepository likesRepository) {
        this.recetaService = recetaService;
        this.jwtService = jwtService;
        this.valoracionRepository = valoracionRepository;
        this.likesRepository = likesRepository;
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
    public ResponseEntity<RecetaResponse> valorarReceta(
            @PathVariable Long recetaId,
            @RequestParam Integer puntuacion,
            @RequestHeader("Authorization") String token) {
        String jwt = token.replace("Bearer ", "");

        Long usuarioId = jwtService.extractUserId(jwt);

        valoracionService.valorarReceta(recetaId, puntuacion, usuarioId);
        return ResponseEntity.ok(new RecetaResponse("La receta ha sido valorada exitosamente."));
    }
    @PostMapping("/{recetaId}/like")
    public ResponseEntity<RecetaResponse> agregarLike(@PathVariable Long recetaId, @RequestHeader("Authorization") String token) {
        // Extraer el ID del usuario autenticado desde el JWT
        Long usuarioId = jwtService.extractUserId(token.replace("Bearer ", ""));

        // Llamar al servicio para agregar el like
        likesService.agregarLike(recetaId, usuarioId);

        return ResponseEntity.ok(new RecetaResponse("Like"));
    }

    @DeleteMapping("/{recetaId}/like")
    public ResponseEntity<RecetaResponse> quitarLike(@PathVariable Long recetaId, @RequestHeader("Authorization") String token) {

        Long usuarioId = jwtService.extractUserId(token.replace("Bearer ", ""));
        likesService.quitarLike(recetaId, usuarioId);
        return ResponseEntity.ok(new RecetaResponse("Deslike."));
    }


    @GetMapping("/busqueda")
    public ResponseEntity<Page<MostrarReceta>> buscarRecetas(
            @RequestParam(required = false) String titulo,
            @RequestParam(required = false) String descripcion,
            @RequestParam(required = false) String ingrediente,
            @RequestParam(required = false) String dificultad,
            @RequestParam(defaultValue = "0") int page,
            @RequestParam(defaultValue = "10") int size) {

        Pageable pageable = PageRequest.of(page, size);
        Page<Recetas> recetas = recetaService.buscarRecetas(titulo, descripcion, ingrediente, dificultad, pageable);
        Page<MostrarReceta> recetaDTOs = recetas.map(receta -> MostrarReceta.fromEntity(receta, valoracionRepository, likesRepository));

        return ResponseEntity.ok(recetaDTOs);
    }
    @GetMapping("/{id}")
    public ResponseEntity<MostrarReceta> obtenerRecetaPorId(@PathVariable Long id) {
        Recetas receta = recetaService.obtenerRecetaPorId(id);
        if (receta == null) {
            return ResponseEntity.notFound().build();
        }
        MostrarReceta recetaDTO = MostrarReceta.fromEntity(receta, valoracionRepository, likesRepository);
        return ResponseEntity.ok(recetaDTO);
    }

}