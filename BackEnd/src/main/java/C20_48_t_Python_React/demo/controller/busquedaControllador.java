package C20_48_t_Python_React.demo.controller;

import C20_48_t_Python_React.demo.dto.MostrarReceta;
import C20_48_t_Python_React.demo.persistence.entity.Recetas;
import C20_48_t_Python_React.demo.persistence.repository.LikesRepository;
import C20_48_t_Python_React.demo.persistence.repository.ValoracionRepository;
import C20_48_t_Python_React.demo.service.ComentarioService;
import C20_48_t_Python_React.demo.service.LikesService;
import C20_48_t_Python_React.demo.service.RecetaService;
import C20_48_t_Python_React.demo.service.ValoracionService;
import C20_48_t_Python_React.demo.service.auth.JwtService;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.data.domain.Page;
import org.springframework.data.domain.PageImpl;
import org.springframework.data.domain.PageRequest;
import org.springframework.data.domain.Pageable;
import org.springframework.http.ResponseEntity;
import org.springframework.web.bind.annotation.GetMapping;
import org.springframework.web.bind.annotation.RequestMapping;
import org.springframework.web.bind.annotation.RequestParam;
import org.springframework.web.bind.annotation.RestController;

import java.util.List;
import java.util.stream.Collectors;

@RestController
@RequestMapping("/busqueda")
public class busquedaControllador {
    @Autowired
    private LikesRepository likesRepository;

    @Autowired
    private RecetaService recetaService;
    @Autowired
    private ValoracionRepository valoracionRepository;
    @Autowired
    private ComentarioService comentarioService;



    @GetMapping()
    public ResponseEntity<Page<MostrarReceta>> buscarRecetas(
            @RequestParam(required = false) String titulo,
            @RequestParam(required = false) String descripcion,
            @RequestParam(required = false) String ingrediente,
            @RequestParam(required = false) String dificultad,
            @RequestParam(required = false) List<Long> categoriaIds,
            @RequestParam(defaultValue = "0") int page,
            @RequestParam(defaultValue = "10") int size) {

        Pageable pageable = PageRequest.of(page, size);
        Page<Recetas> recetas = recetaService.buscarRecetasPorParametros(titulo, descripcion, ingrediente, dificultad, categoriaIds, pageable);

        // Convertir recetas a DTOs si es necesario
        Page<MostrarReceta> recetaDTOs = recetas.map(receta -> MostrarReceta.fromEntity(receta, valoracionRepository, likesRepository));

        return ResponseEntity.ok(recetaDTOs);
    }
}
