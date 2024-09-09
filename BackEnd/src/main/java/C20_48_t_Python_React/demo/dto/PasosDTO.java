package C20_48_t_Python_React.demo.dto;

import C20_48_t_Python_React.demo.persistence.entity.Pasos;
import lombok.AllArgsConstructor;
import lombok.Builder;
import lombok.Data;
import lombok.NoArgsConstructor;

@Data
@NoArgsConstructor
@AllArgsConstructor
@Builder
public class PasosDTO {
    private Long id;
    private String descripcion;
    private Integer orden;

    public static PasosDTO fromEntity(Pasos paso) {
        PasosDTO dto = new PasosDTO();
        dto.setId(paso.getId());
        dto.setDescripcion(paso.getDescripcion());
        dto.setOrden(paso.getOrden());
        return dto;
    }
}
