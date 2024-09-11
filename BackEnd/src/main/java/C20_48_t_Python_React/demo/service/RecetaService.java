package C20_48_t_Python_React.demo.service;

import C20_48_t_Python_React.demo.dto.IngredientesDTO;
import C20_48_t_Python_React.demo.dto.PasosDTO;
import C20_48_t_Python_React.demo.dto.RecetaCategoriaDTO;
import C20_48_t_Python_React.demo.dto.RecetaDTO;
import C20_48_t_Python_React.demo.exeption.ResourceNotFoundException;
import C20_48_t_Python_React.demo.persistence.entity.*;
import C20_48_t_Python_React.demo.persistence.repository.*;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Service;

import java.time.LocalDateTime;
import java.util.ArrayList;
import java.util.List;
import java.util.stream.Collectors;

@Service
public class RecetaService {
    @Autowired
    private RecetasRepository recetasRepository;

    @Autowired
    private UsuariosRepository usuariosRepository;

    @Autowired
    private CategoriasRepository categoriasRepository;
    @Autowired
    private RecetaCategoriaRepository categoriaRepository;
    @Autowired
    private IngredientesRepository ingredientesRepository;
    @Autowired
    private PasosRepository pasosRepository;
    @Autowired
    private LikesRepository likesRepository;

    public RecetaDTO crearReceta(RecetaDTO recetaDTO, Long usuarioId) {
        Usuarios usuario = usuariosRepository.findById(usuarioId)
                .orElseThrow(() -> new RuntimeException("Usuario no encontrado"));

        // Crear una nueva receta
        Recetas receta = new Recetas();
        receta.setTitulo(recetaDTO.getTitulo());
        receta.setDescripcion(recetaDTO.getDescripcion());
        receta.setDuracion(recetaDTO.getDuracion());
        receta.setDificultad(recetaDTO.getDificultad());
        receta.setImagenUrl(recetaDTO.getImagenUrl());
        receta.setTips(recetaDTO.getTips());
        receta.setFechaCreacion(LocalDateTime.now());
        receta.setUsuarios(usuario);  // Asignar el usuario autenticado

        // Guardar la receta primero para obtener su ID
        Recetas recetaGuardada = recetasRepository.save(receta);

        // Crear y guardar las relaciones receta-categoría
        List<RecetaCategoria> recetaCategorias = recetaDTO.getCategoriaIds().stream()
                .map(categoriaId -> {
                    Categorias categoria = categoriasRepository.findById(categoriaId)
                            .orElseThrow(() -> new RuntimeException("Categoría no encontrada"));

                    RecetaCategoria recetaCategoria = new RecetaCategoria();
                    RecetaCategoriaId recetaCategoriaId = new RecetaCategoriaId();
                    recetaCategoriaId.setRecetaId(recetaGuardada.getId());
                    recetaCategoriaId.setCategoriaId(categoria.getId());

                    recetaCategoria.setId(recetaCategoriaId);
                    recetaCategoria.setRecetas(recetaGuardada);
                    recetaCategoria.setCategorias(categoria);

                    return recetaCategoria;
                }).collect(Collectors.toList());

        categoriaRepository.saveAll(recetaCategorias);

        // Agrega los ingredientes a la receta
        List<Ingredientes> ingredientes = recetaDTO.getIngredientes().stream()
                .map(ingredienteDTO -> {
                    Ingredientes ingrediente = new Ingredientes();
                    ingrediente.setNombre(ingredienteDTO.getNombre());
                    ingrediente.setUnidadMedida(ingredienteDTO.getUnidadMedida());
                    ingrediente.setCantidad(ingredienteDTO.getCantidad());
                    ingrediente.setRecetas(recetaGuardada);
                    return ingrediente;
                }).collect(Collectors.toList());
        ingredientesRepository.saveAll(ingredientes);

        // Agregar los pasos a la receta
        List<Pasos> pasos = recetaDTO.getPasos().stream()
                .map(pasoDTO -> {
                    Pasos paso = new Pasos();
                    paso.setDescripcion(pasoDTO.getDescripcion());
                    paso.setOrden(pasoDTO.getOrden());
                    paso.setRecetas(recetaGuardada);
                    return paso;
                }).collect(Collectors.toList());
        pasosRepository.saveAll(pasos);

        // Convertir la receta guardada en un DTO de respuesta
        RecetaDTO responseDTO = new RecetaDTO();
        responseDTO.setId(recetaGuardada.getId());
        responseDTO.setTitulo(recetaGuardada.getTitulo());
        responseDTO.setDescripcion(recetaGuardada.getDescripcion());
        responseDTO.setDuracion(recetaGuardada.getDuracion());
        responseDTO.setDificultad(recetaGuardada.getDificultad());
        responseDTO.setImagenUrl(recetaGuardada.getImagenUrl());
        responseDTO.setTips(recetaGuardada.getTips());
        responseDTO.setUsuarioEmail(recetaGuardada.getUsuarios().getEmail());
        responseDTO.setFechaCreacion(recetaGuardada.getFechaCreacion());

        responseDTO.setRecetaCategorias(
                recetaGuardada.getRecetaCategorias() != null
                        ? recetaGuardada.getRecetaCategorias().stream()
                        .map(rc -> {
                            RecetaCategoriaDTO dto = new RecetaCategoriaDTO();
                            dto.setId(rc.getCategorias().getId());
                            dto.setNombreCategoria(rc.getCategorias().getNombre());
                            return dto;
                        }).collect(Collectors.toList())
                        : new ArrayList<>()
        );

        responseDTO.setIngredientes(
                recetaGuardada.getIngredientes() != null
                        ? recetaGuardada.getIngredientes().stream()
                        .map(ing -> {
                            IngredientesDTO dto = new IngredientesDTO();
                            dto.setNombre(ing.getNombre());
                            dto.setUnidadMedida(ing.getUnidadMedida());
                            dto.setCantidad(ing.getCantidad());
                            return dto;
                        }).collect(Collectors.toList())
                        : new ArrayList<>()
        );

        responseDTO.setPasos(recetaGuardada.getPasos().stream()
                .map(ps -> {
                    PasosDTO dto = new PasosDTO();
                    dto.setDescripcion(ps.getDescripcion());
                    dto.setOrden(ps.getOrden());
                    return dto;
                }).collect(Collectors.toList()));

        return responseDTO;
    }

    public List<Recetas> obtenerRecetasPorUsuario(Long usuarioId) {
        return recetasRepository.findByUsuariosId(usuarioId);
    }
    public List<Recetas> obtenerRecetasFavoritasPorUsuario(Long usuarioId) {
        return likesRepository.findRecetasFavoritasPorUsuario(usuarioId);
    }

}
