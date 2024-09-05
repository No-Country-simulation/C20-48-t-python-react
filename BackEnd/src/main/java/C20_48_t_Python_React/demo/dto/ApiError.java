package C20_48_t_Python_React.demo.dto;

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
public class ApiError implements Serializable {
    private String backendMessage;
    private String message;
    private String url;
    private String method;
    private LocalDateTime timeStamp;
}
