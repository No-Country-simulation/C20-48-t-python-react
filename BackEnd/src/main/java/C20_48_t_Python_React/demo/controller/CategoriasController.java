package C20_48_t_Python_React.demo.controller;

import C20_48_t_Python_React.demo.dto.CategoriasDTO;
import C20_48_t_Python_React.demo.dto.MostrarReceta;
import C20_48_t_Python_React.demo.persistence.entity.Categorias;
import C20_48_t_Python_React.demo.persistence.entity.Recetas;
import C20_48_t_Python_React.demo.persistence.repository.LikesRepository;
import C20_48_t_Python_React.demo.persistence.repository.ValoracionRepository;
import C20_48_t_Python_React.demo.service.CategoriaService;
import C20_48_t_Python_React.demo.service.RecetaService;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.data.domain.Page;
import org.springframework.data.domain.PageImpl;
import org.springframework.data.domain.PageRequest;
import org.springframework.data.domain.Pageable;
import org.springframework.http.ResponseEntity;
import org.springframework.web.bind.annotation.*;

import java.util.List;
import java.util.stream.Collectors;

@RestController
@RequestMapping("/categorias")
public class CategoriasController {
    @Autowired
    private RecetaService recetaService;

    @Autowired
    private ValoracionRepository valoracionRepository;

    @Autowired
    private LikesRepository likesRepository;
    @Autowired
    private CategoriaService categoriaService;

    @GetMapping
    public ResponseEntity<List<CategoriasDTO>> obtenerTodasCategorias() {
        List<CategoriasDTO> categorias = categoriaService.obtenerTodasCategorias();
        return ResponseEntity.ok(categorias);
    }

    @GetMapping("/{categoriaId}")
    public ResponseEntity<Page<MostrarReceta>> obtenerRecetasPorCategoria(
            @PathVariable Long categoriaId,
            @RequestParam(defaultValue = "0") int page,
            @RequestParam(defaultValue = "10") int size) {

        Pageable pageable = PageRequest.of(page, size);
        Page<Recetas> recetasPage = recetaService.obtenerRecetasPorCategoria(categoriaId, pageable);

        // Filtrar las recetas activas
        List<Recetas> recetasActivas = recetasPage.getContent().stream()
                .filter(Recetas::isActivo)  // Filtrar solo recetas activas
                .collect(Collectors.toList());

        // Convertir las recetas activas a DTOs
        List<MostrarReceta> recetaDTOs = recetasActivas.stream()
                .map(receta -> MostrarReceta.fromEntity(receta, valoracionRepository, likesRepository))
                .collect(Collectors.toList());

        // Crear una página de DTOs con la información de la página original
        Page<MostrarReceta> recetaDTOsPage = new PageImpl<>(recetaDTOs, pageable, recetasPage.getTotalElements());

        return ResponseEntity.ok(recetaDTOsPage);
    }
    @PostMapping
    public ResponseEntity<Categorias> crearCategoria(@RequestBody CategoriasDTO categoriaDTO) {
        Categorias nuevaCategoria = categoriaService.crearCategoria(categoriaDTO);
        return ResponseEntity.ok(nuevaCategoria);
    }

}
