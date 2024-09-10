package C20_48_t_Python_React.demo.dto;

import lombok.AllArgsConstructor;
import lombok.Builder;
import lombok.Data;
import lombok.NoArgsConstructor;

import java.io.Serializable;
@Data
@NoArgsConstructor
@AllArgsConstructor
@Builder
public class RegisteredUser implements Serializable {
    private Long id;
    private String email;
    private String name;
    private String contrasena;
    private String role;
}