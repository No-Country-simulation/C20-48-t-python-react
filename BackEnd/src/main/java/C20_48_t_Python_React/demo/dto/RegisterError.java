package C20_48_t_Python_React.demo.dto;

import lombok.AllArgsConstructor;
import lombok.Builder;
import lombok.Data;
import lombok.NoArgsConstructor;

import java.time.LocalDateTime;
@Data
@NoArgsConstructor
@AllArgsConstructor
@Builder
public class RegisterError {
        private String mensaje;
        private LocalDateTime timestamp;

        public RegisterError(String mensaje, String detalle) {
            this.mensaje = mensaje;
            this.timestamp = LocalDateTime.now();
        }
}
