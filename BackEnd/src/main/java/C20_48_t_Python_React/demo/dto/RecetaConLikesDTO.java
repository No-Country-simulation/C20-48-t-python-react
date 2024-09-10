package C20_48_t_Python_React.demo.dto;

import lombok.AllArgsConstructor;
import lombok.Builder;
import lombok.Data;
import lombok.NoArgsConstructor;

@Data
@NoArgsConstructor
@AllArgsConstructor
@Builder
public class RecetaConLikesDTO {
    private MostrarReceta receta;
    private Long cantidadLikes;
}
