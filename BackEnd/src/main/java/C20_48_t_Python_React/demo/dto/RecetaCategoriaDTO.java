package C20_48_t_Python_React.demo.dto;

import C20_48_t_Python_React.demo.persistence.entity.RecetaCategoria;
import lombok.AllArgsConstructor;
import lombok.Builder;
import lombok.Data;
import lombok.NoArgsConstructor;

@Data
@NoArgsConstructor
@AllArgsConstructor
@Builder
public class RecetaCategoriaDTO {

    private Long id;
    private String nombreCategoria;


    public static RecetaCategoriaDTO fromEntity(RecetaCategoria recetaCategoria) {
        RecetaCategoriaDTO dto = new RecetaCategoriaDTO();
        dto.setId(recetaCategoria.getCategorias().getId());
        dto.setNombreCategoria(recetaCategoria.getCategorias().getNombre());
        return dto;
    }
}