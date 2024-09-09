package C20_48_t_Python_React.demo.dto;

import C20_48_t_Python_React.demo.persistence.entity.Ingredientes;
import lombok.AllArgsConstructor;
import lombok.Builder;
import lombok.Data;
import lombok.NoArgsConstructor;

@Data
@NoArgsConstructor
@AllArgsConstructor
@Builder
public class IngredientesDTO {
    private Long id;
    private String nombre;
    private String cantidad;
    private String unidadMedida;

    public static IngredientesDTO fromEntity(Ingredientes ingrediente) {
        IngredientesDTO dto = new IngredientesDTO();
        dto.setId(ingrediente.getId());
        dto.setNombre(ingrediente.getNombre());
        dto.setUnidadMedida(ingrediente.getUnidadMedida());
        dto.setCantidad(ingrediente.getCantidad());
        return dto;
    }
}
