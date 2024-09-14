package C20_48_t_Python_React.demo.controller;

import C20_48_t_Python_React.demo.dto.*;
import C20_48_t_Python_React.demo.persistence.entity.Comentarios;
import C20_48_t_Python_React.demo.persistence.entity.Recetas;
import C20_48_t_Python_React.demo.persistence.entity.Usuarios;
import C20_48_t_Python_React.demo.persistence.repository.*;
import C20_48_t_Python_React.demo.service.ComentarioService;
import C20_48_t_Python_React.demo.service.LikesService;
import C20_48_t_Python_React.demo.service.RecetaService;
import C20_48_t_Python_React.demo.service.ValoracionService;
import C20_48_t_Python_React.demo.service.auth.JwtService;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.data.domain.Page;
import org.springframework.data.domain.PageRequest;
import org.springframework.data.domain.Pageable;
import org.springframework.http.HttpStatus;
import org.springframework.http.ResponseEntity;
import org.springframework.web.bind.annotation.*;

import java.time.LocalDateTime;

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
    @Autowired
    private ComentarioService comentarioService;

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
    @GetMapping("/{id}")
    public ResponseEntity<MostrarReceta> obtenerRecetaPorId(@PathVariable Long id) {
        Recetas receta = recetaService.obtenerRecetaPorId(id);
        if (receta == null) {
            return ResponseEntity.notFound().build();
        }
        MostrarReceta recetaDTO = MostrarReceta.fromEntity(receta, valoracionRepository, likesRepository);
        return ResponseEntity.ok(recetaDTO);
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
    @PutMapping("/{recetaId}")
    public ResponseEntity<RecetaDTO> editarReceta(@PathVariable Long recetaId, @RequestBody RecetaDTO recetaDTO, @RequestHeader("Authorization") String token) {
        Long usuarioId = jwtService.extractUserId(token.replace("Bearer ", ""));
        RecetaDTO recetaActualizada = recetaService.editarReceta(recetaId, recetaDTO, usuarioId);
        return ResponseEntity.ok(recetaActualizada);
    }

    @PostMapping("/{recetaId}/comentarios")
    public ResponseEntity<RecetaResponse> agregarComentario(
            @PathVariable Long recetaId,
            @RequestBody ComentariosDTO comentarioDTO,
            @RequestHeader("Authorization") String token) {

        comentarioService.agregarComentario(recetaId, comentarioDTO, token);
        return ResponseEntity.ok(new RecetaResponse("El comentario fue creado con exito"));
    }


    @PutMapping("/comentario/{comentarioId}")
    public ResponseEntity<RecetaResponse> actualizarComentario(
            @PathVariable Long comentarioId,
            @RequestBody ComentariosDTO comentarioDTO,
            @RequestHeader("Authorization") String token) {
        try {
            comentarioService.actualizarComentario(comentarioId, comentarioDTO, token);
            return ResponseEntity.ok(new RecetaResponse("Fue editado con exito."));
        } catch (RuntimeException e) {
            return ResponseEntity.ok(new RecetaResponse("Lo sentimos ha ocurrido un error inesperado."));
        }
    }

    @PutMapping("/comentario/{comentarioId}/delete")
    public ResponseEntity<RecetaResponse> deleteComentario(
            @PathVariable Long comentarioId,
            @RequestHeader("Authorization") String token) {
        try {
            comentarioService.deleteComentario(comentarioId, token);
            return ResponseEntity.ok(new RecetaResponse("Fue Eliminado con exito"));
        } catch (RuntimeException e) {
            return ResponseEntity.ok(new RecetaResponse("Lo sentimos ha ocurrido un error inesperado."));
        }
    }
    @PutMapping("/{recetaId}/eliminar")
    public ResponseEntity<RecetaResponse> actualizarEstadoReceta(
            @PathVariable Long recetaId) {

        try {
            recetaService.DisabledReceta(recetaId);
            return ResponseEntity.ok(new RecetaResponse("Fue Eliminado con exito"));
        } catch (RuntimeException e) {
            return ResponseEntity.ok(new RecetaResponse("Lo sentimos ha ocurrido un error inesperado."));
        }
    }

}