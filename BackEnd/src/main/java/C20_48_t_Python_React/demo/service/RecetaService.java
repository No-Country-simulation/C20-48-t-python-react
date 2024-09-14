package C20_48_t_Python_React.demo.service;

import C20_48_t_Python_React.demo.dto.IngredientesDTO;
import C20_48_t_Python_React.demo.dto.PasosDTO;
import C20_48_t_Python_React.demo.dto.RecetaCategoriaDTO;
import C20_48_t_Python_React.demo.dto.RecetaDTO;
import C20_48_t_Python_React.demo.persistence.entity.*;
import C20_48_t_Python_React.demo.persistence.repository.*;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.data.domain.Page;
import org.springframework.data.domain.Pageable;
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

    public Page<Recetas> obtenerRecetasPorCategoria(Long categoriaId, Pageable pageable) {
        return recetasRepository.findByCategoriaId(categoriaId, pageable);
    }

    public Page<Recetas> obtenerRecetasEnComun(List<Long> categoriaIds, Pageable pageable) {
        long categoriaCount = categoriaIds.size();
        return recetasRepository.findByCategoriaIdsIn(categoriaIds, categoriaCount, pageable);
    }

    public Page<Recetas> buscarRecetas(String titulo, String descripcion, String ingrediente, String dificultad, Pageable pageable) {
        if (titulo != null && descripcion != null && ingrediente != null && dificultad != null) {
            return recetasRepository.findByTituloContainingAndDescripcionContainingAndIngredientesNombreContainingAndDificultad(titulo, descripcion, ingrediente, dificultad, pageable);
        } else if (titulo != null && descripcion != null && dificultad != null) {
            return recetasRepository.findByTituloContainingAndDescripcionContainingAndDificultad(titulo, descripcion, dificultad, pageable);
        } else if (titulo != null && ingrediente != null && dificultad != null) {
            return recetasRepository.findByTituloContainingAndIngredientesNombreContainingAndDificultad(titulo, ingrediente, dificultad, pageable);
        } else if (titulo != null && descripcion != null) {
            return recetasRepository.findByTituloContainingAndDescripcionContaining(titulo, descripcion, pageable);
        } else if (titulo != null && ingrediente != null) {
            return recetasRepository.findByTituloContainingAndIngredientesNombreContaining(titulo, ingrediente, pageable);
        } else if (titulo != null && dificultad != null) {
            return recetasRepository.findByTituloContainingAndDificultad(titulo, dificultad, pageable);
        } else if (descripcion != null && ingrediente != null) {
            return recetasRepository.findByDescripcionContainingAndIngredientesNombreContaining(descripcion, ingrediente, pageable);
        } else if (descripcion != null && dificultad != null) {
            return recetasRepository.findByDescripcionContainingAndDificultad(descripcion, dificultad, pageable);
        } else if (ingrediente != null && dificultad != null) {
            return recetasRepository.findByIngredientesNombreContainingAndDificultad(ingrediente, dificultad, pageable);
        } else if (titulo != null) {
            return recetasRepository.findByTituloContaining(titulo, pageable);
        } else if (descripcion != null) {
            return recetasRepository.findByDescripcionContaining(descripcion, pageable);
        } else if (ingrediente != null) {
            return recetasRepository.findByIngredientesNombreContaining(ingrediente, pageable);
        } else if (dificultad != null) {
            return recetasRepository.findByDificultad(dificultad, pageable);
        } else {
            return recetasRepository.findAll(pageable);
        }

    }
    public Recetas obtenerRecetaPorId(Long id){
        return recetasRepository.findById(id).orElse(null);
    }
    public RecetaDTO editarReceta(Long recetaId, RecetaDTO recetaDTO, Long usuarioId) {
        // Buscar la receta por ID
        Recetas receta = recetasRepository.findById(recetaId)
                .orElseThrow(() -> new RuntimeException("Receta no encontrada"));

        // Verificar si el usuario es el propietario de la receta
        if (!receta.getUsuarios().getId().equals(usuarioId)) {
            throw new RuntimeException("No tienes permiso para editar esta receta.");
        }

        // Actualizar los campos de la receta
        receta.setTitulo(recetaDTO.getTitulo());
        receta.setDescripcion(recetaDTO.getDescripcion());
        receta.setDuracion(recetaDTO.getDuracion());
        receta.setDificultad(recetaDTO.getDificultad());
        receta.setImagenUrl(recetaDTO.getImagenUrl());
        receta.setTips(recetaDTO.getTips());

        // Guardar los cambios en la receta
        Recetas recetaGuardada = recetasRepository.save(receta);

        // Actualizar las relaciones receta-categoría
        categoriaRepository.deleteByRecetasId(recetaId);  // Eliminar las categorías actuales
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

        // Actualizar los ingredientes
        ingredientesRepository.deleteByRecetasId(recetaId);  // Eliminar los ingredientes actuales
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

        // Actualizar los pasos
        pasosRepository.deleteByRecetasId(recetaId);  // Eliminar los pasos actuales
        List<Pasos> pasos = recetaDTO.getPasos().stream()
                .map(pasoDTO -> {
                    Pasos paso = new Pasos();
                    paso.setDescripcion(pasoDTO.getDescripcion());
                    paso.setOrden(pasoDTO.getOrden());
                    paso.setRecetas(recetaGuardada);
                    return paso;
                }).collect(Collectors.toList());
        pasosRepository.saveAll(pasos);

        // Convertir la receta actualizada en un DTO de respuesta
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

    public void DisabledReceta(Long recetaId) {
        Recetas receta = recetasRepository.findById(recetaId)
                .orElseThrow(() -> new RuntimeException("Receta no encontrada"));

        // Cambiar el estado de 'activo' a 'false'
        receta.setActivo(false);

        recetasRepository.save(receta); // Guardar los cambios
    }
}
