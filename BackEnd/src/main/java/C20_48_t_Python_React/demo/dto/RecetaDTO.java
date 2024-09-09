package C20_48_t_Python_React.demo.dto;

import C20_48_t_Python_React.demo.persistence.entity.Likes;
import C20_48_t_Python_React.demo.persistence.entity.RecetaCategoria;
import C20_48_t_Python_React.demo.persistence.entity.Recetas;
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
public class RecetaDTO {
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
    private Double promedioPuntuacion;
    private List<Long> categoriaIds;
    private List<PasosDTO> pasos;
    private List<Likes> likes;
    private List<IngredientesDTO> ingredientes;
    private List<ComentariosDTO> comentarios;
    public static RecetaDTO fromEntity(Recetas receta) {
        RecetaDTO dto = new RecetaDTO();
        dto.setId(receta.getId());
        dto.setTitulo(receta.getTitulo());
        dto.setDescripcion(receta.getDescripcion());
        dto.setDuracion(receta.getDuracion());
        dto.setDificultad(receta.getDificultad());
        dto.setImagenUrl(receta.getImagenUrl());
        dto.setTips(receta.getTips());
        dto.setUsuarioEmail(receta.getUsuarios().getEmail()); // Solo email del usuario
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
                .map(ComentariosDTO::fromEntity)
                .collect(Collectors.toList()));
        dto.setPromedioPuntuacion(receta.getPromedioPuntuacion());
        return dto;
    }
}
