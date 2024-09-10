package C20_48_t_Python_React.demo.exeption;

public class ResourceNotFoundException extends RuntimeException{
    public ResourceNotFoundException() {

    }
    public ResourceNotFoundException(String message)
    {
        super(message);
    }
    public ResourceNotFoundException(String message, Throwable cause) {
        super(message, cause);
    }
}
