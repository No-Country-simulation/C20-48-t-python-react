package C20_48_t_Python_React.demo.dto;
import jakarta.validation.constraints.Size;
import lombok.AllArgsConstructor;
import lombok.Builder;
import lombok.Data;
import lombok.NoArgsConstructor;

import java.io.Serializable;
import java.time.LocalDateTime;

@Data
@NoArgsConstructor
@AllArgsConstructor
@Builder
public class GuardarUsuarios implements Serializable {
    @Size(min=4)
    private String nombre;
    @Size(min=4)
    private String email;
    private LocalDateTime fecharegistro;
    @Size(min=8)
    private String contrasena;
    @Size(min=8)
    private String repeatcontrasena;


    public String getRepeatcontrasena() {
        return repeatcontrasena;
    }
    public void setRepeatPassword(String repeatcontrasena) {
        this.repeatcontrasena = repeatcontrasena;
    }

}
