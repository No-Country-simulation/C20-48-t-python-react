package C20_48_t_Python_React.demo.exeption;

import C20_48_t_Python_React.demo.dto.ApiError;
import C20_48_t_Python_React.demo.dto.RegisterError;
import jakarta.servlet.http.HttpServletRequest;
import org.springframework.dao.DataIntegrityViolationException;
import org.springframework.http.HttpStatus;
import org.springframework.http.ResponseEntity;
import org.springframework.web.bind.MethodArgumentNotValidException;
import org.springframework.web.bind.annotation.ExceptionHandler;
import org.springframework.web.bind.annotation.RestControllerAdvice;

import java.time.LocalDateTime;
import java.util.stream.Collectors;

@RestControllerAdvice
public class GlobalExceptionHandler {
    @ExceptionHandler(Exception.class)
    public ResponseEntity<?> handlerGenericException(HttpServletRequest request, Exception exception) {
        ApiError apiError = new ApiError();
        apiError.setBackendMessage(exception.getLocalizedMessage());
        apiError.setUrl(request.getRequestURL().toString());
        apiError.setMethod(request.getMethod());
        apiError.setTimeStamp(LocalDateTime.now());
        apiError.setMessage("Error interno en el servidor, vuelva mas tarde");
        int statusCode = HttpStatus.INTERNAL_SERVER_ERROR.value();
        apiError.setStatusCode(statusCode);
        return ResponseEntity.status(HttpStatus.INTERNAL_SERVER_ERROR).body(apiError);
    }
    @ExceptionHandler(MethodArgumentNotValidException.class)
    public ResponseEntity<?> handlerMethodArgumentNotValidException(HttpServletRequest request,
                                                                    MethodArgumentNotValidException exception) {
        ApiError apiError = new ApiError();
        apiError.setBackendMessage(exception.getLocalizedMessage());
        apiError.setUrl(request.getRequestURL().toString());
        apiError.setMethod(request.getMethod());
        apiError.setTimeStamp(LocalDateTime.now());
        apiError.setMessage("Error en la peticion enviada.");
        int statusCode = HttpStatus.INTERNAL_SERVER_ERROR.value();
        apiError.setStatusCode(statusCode);
        System.out.println(
                exception.getAllErrors().stream().map(each -> each.getDefaultMessage())
                        .collect(Collectors.toList())
        );

        return ResponseEntity.status(HttpStatus.BAD_REQUEST).body(apiError);
    }

    @ExceptionHandler(DataIntegrityViolationException.class)
    public ResponseEntity<RegisterError> handleDataIntegrityViolationException(DataIntegrityViolationException ex) {
        RegisterError registerError;

        if (ex.getMessage().contains("usuarios.email")) {
            registerError = new RegisterError("Error: El email ya está asociado a un usuario", ex.getMostSpecificCause().getMessage());
        } else {
            registerError = new RegisterError("Error: Violación de integridad de datos", ex.getMostSpecificCause().getMessage());
        }

        return ResponseEntity.status(HttpStatus.BAD_REQUEST).body(registerError);
    }
}
