package C20_48_t_Python_React.demo.dto.auth;

import lombok.AllArgsConstructor;
import lombok.Builder;
import lombok.Data;
import lombok.NoArgsConstructor;

import java.io.Serializable;

@Data
@NoArgsConstructor
@AllArgsConstructor
@Builder
public class LoginResponse implements Serializable {

    private String jwt;
    private String role;
    private Long userId;
}
