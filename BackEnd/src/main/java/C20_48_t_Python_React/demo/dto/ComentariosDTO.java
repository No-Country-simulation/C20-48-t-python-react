package C20_48_t_Python_React.demo.dto;

import C20_48_t_Python_React.demo.persistence.entity.Comentarios;
import lombok.AllArgsConstructor;
import lombok.Builder;
import lombok.Data;
import lombok.NoArgsConstructor;

import java.time.LocalDateTime;
@Data
@NoArgsConstructor
@AllArgsConstructor
@Builder
public class ComentariosDTO {
    private Long id;
    private String comentario;
    private String   usuarioemail;
    private LocalDateTime fechaComentario;
    private boolean activo;

    public static ComentariosDTO fromEntity(Comentarios comentario) {
        ComentariosDTO dto = new ComentariosDTO();
        dto.setId(comentario.getId());
        dto.setComentario(comentario.getComentario());
        dto.setUsuarioemail(comentario.getUsuarios().getEmail());
        dto.setFechaComentario(comentario.getFechaComentario());
        dto.setActivo(comentario.isActivo());
        return dto;
    }
}
