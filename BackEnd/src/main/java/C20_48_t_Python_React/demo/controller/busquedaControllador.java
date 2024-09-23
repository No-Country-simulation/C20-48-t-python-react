package C20_48_t_Python_React.demo.controller;

import C20_48_t_Python_React.demo.dto.MostrarReceta;
import C20_48_t_Python_React.demo.persistence.entity.Recetas;
import C20_48_t_Python_React.demo.persistence.entity.Categorias;
import C20_48_t_Python_React.demo.persistence.repository.CategoriasRepository;
import C20_48_t_Python_React.demo.persistence.repository.LikesRepository;
import C20_48_t_Python_React.demo.persistence.repository.RecetasRepository;
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
import org.springframework.data.web.PageableDefault;
import org.springframework.http.ResponseEntity;
import org.springframework.web.bind.annotation.*;

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
    @Autowired
    private CategoriasRepository categoriasRepository;

    @Autowired
    private RecetasRepository recetasRepository;


    @GetMapping()
    public Page<MostrarReceta> buscarRecetas(@RequestParam(required = false) String titulo,
                                             @RequestParam(required = false) String dificultad,
                                             @RequestParam(required = false) String ingrediente,
                                             @RequestParam(required = false) List<String> categoriaNombres,
                                             @PageableDefault(size = 10) Pageable pageable) {
        List<Long> categoriaIds = null;

        if (categoriaNombres != null && !categoriaNombres.isEmpty()) {
            categoriaIds = categoriasRepository.findByNombreIn(categoriaNombres)
                    .stream()
                    .map(Categorias::getId)
                    .collect(Collectors.toList());
        }

        Page<Recetas> recetasPage = recetaService.buscarRecetas(titulo, dificultad, ingrediente, categoriaIds, pageable);
        return recetasPage.map(receta -> MostrarReceta.fromEntity(receta, valoracionRepository, likesRepository));
    }
}
