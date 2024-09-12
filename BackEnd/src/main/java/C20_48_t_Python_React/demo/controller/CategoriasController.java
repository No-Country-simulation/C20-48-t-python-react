package C20_48_t_Python_React.demo.controller;

import C20_48_t_Python_React.demo.dto.MostrarReceta;
import C20_48_t_Python_React.demo.persistence.entity.Recetas;
import C20_48_t_Python_React.demo.persistence.repository.LikesRepository;
import C20_48_t_Python_React.demo.persistence.repository.ValoracionRepository;
import C20_48_t_Python_React.demo.service.RecetaService;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.data.domain.Page;
import org.springframework.data.domain.PageRequest;
import org.springframework.data.domain.Pageable;
import org.springframework.http.ResponseEntity;
import org.springframework.web.bind.annotation.*;

import java.util.List;

@RestController
@RequestMapping("/categorias")
public class CategoriasController {
    @Autowired
    private RecetaService recetaService;

    @Autowired
    private ValoracionRepository valoracionRepository;

    @Autowired
    private LikesRepository likesRepository;

    @GetMapping("/{categoriaId}")
    public ResponseEntity<Page<MostrarReceta>> obtenerRecetasPorCategoria(
            @PathVariable Long categoriaId,
            @RequestParam(defaultValue = "0") int page,
            @RequestParam(defaultValue = "10") int size) {

        Pageable pageable = PageRequest.of(page, size);
        Page<Recetas> recetas = recetaService.obtenerRecetasPorCategoria(categoriaId, pageable);
        Page<MostrarReceta> recetaDTOs = recetas.map(receta -> MostrarReceta.fromEntity(receta, valoracionRepository, likesRepository));

        return ResponseEntity.ok(recetaDTOs);
    }
    @GetMapping("/busqueda")
    public ResponseEntity<Page<MostrarReceta>> obtenerRecetasEnComun(
            @RequestParam List<Long> categoriaIds,
            @RequestParam(defaultValue = "0") int page,
            @RequestParam(defaultValue = "10") int size) {

        Pageable pageable = PageRequest.of(page, size);
        Page<Recetas> recetas = recetaService.obtenerRecetasEnComun(categoriaIds, pageable);
        Page<MostrarReceta> recetaDTOs = recetas.map(receta -> MostrarReceta.fromEntity(receta, valoracionRepository, likesRepository));

        return ResponseEntity.ok(recetaDTOs);
    }
}
