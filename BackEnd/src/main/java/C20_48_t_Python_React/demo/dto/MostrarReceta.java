package C20_48_t_Python_React.demo.dto;

import C20_48_t_Python_React.demo.persistence.entity.Recetas;
import C20_48_t_Python_React.demo.persistence.repository.LikesRepository;
import C20_48_t_Python_React.demo.persistence.repository.ValoracionRepository;
import lombok.AllArgsConstructor;
import lombok.Builder;
import lombok.Data;
import lombok.NoArgsConstructor;

import java.time.LocalDateTime;
import java.util.List;
import java.util.stream.Collectors;

@Data
@NoArgsConstructor
@AllArgsConstructor
@Builder
public class MostrarReceta {
    private Long id;
    private String titulo;
    private String descripcion;
    private String duracion;
    private String dificultad;
    private String imagenUrl;
    private String tips;
    private String usuarioEmail;
    private LocalDateTime fechaCreacion;
    private List<RecetaCategoriaDTO> recetaCategorias;
    private List<PasosDTO> pasos;
    private List<IngredientesDTO> ingredientes;
    private List<ComentariosDTO> comentarios;
    private Double promedioPuntuacion;
    private Long cantidadLikes;
    private boolean activo;
    // Getters y Setters

    public static MostrarReceta fromEntity(Recetas receta, ValoracionRepository valoracionRepository, LikesRepository likesRepository) {

        MostrarReceta dto = new MostrarReceta();
        dto.setId(receta.getId());
        dto.setTitulo(receta.getTitulo());
        dto.setDescripcion(receta.getDescripcion());
        dto.setDuracion(receta.getDuracion());
        dto.setDificultad(receta.getDificultad());
        dto.setImagenUrl(receta.getImagenUrl());
        dto.setTips(receta.getTips());
        dto.setUsuarioEmail(receta.getUsuarios() != null ? receta.getUsuarios().getEmail() : null);
        dto.setFechaCreacion(receta.getFechaCreacion());
        dto.setRecetaCategorias(receta.getRecetaCategorias().stream()
                .map(RecetaCategoriaDTO::fromEntity)
                .collect(Collectors.toList()));
        dto.setPasos(receta.getPasos().stream()
                .map(PasosDTO::fromEntity)
                .collect(Collectors.toList()));
        dto.setIngredientes(receta.getIngredientes().stream()
                .map(IngredientesDTO::fromEntity)
                .collect(Collectors.toList()));
        dto.setComentarios(receta.getComentarios().stream()
                .filter(Comentario -> Comentario.isActivo())
                .map(ComentariosDTO::fromEntity)
                .collect(Collectors.toList()));
        long cantidadLikes = likesRepository.countByRecetas_Id(receta.getId());
        dto.setCantidadLikes(cantidadLikes);
        dto.setActivo(receta.isActivo());
        Double promedioPuntuacion = valoracionRepository.calcularPromedioPorReceta(receta.getId());
        dto.setPromedioPuntuacion(promedioPuntuacion);
        
        return dto;
    }
}
