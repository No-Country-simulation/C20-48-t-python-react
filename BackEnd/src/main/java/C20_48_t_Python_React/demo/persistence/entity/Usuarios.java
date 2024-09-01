package C20_48_t_Python_React.demo.persistence.entity;

import jakarta.persistence.*;
import lombok.Data;
import lombok.NoArgsConstructor;

import java.time.LocalDateTime;
import java.util.List;


//Estas dos anotaciones son de Lombok-
    @Data
    //@Data genera Genera getters, setters, toString, equals, y hashCode automáticamente.
    @NoArgsConstructor
    //@NoArgsConstructor: Genera un constructor sin argumentos.

@Entity
@Table(name = "usuarios")
public class Usuarios {
    @Id
    @GeneratedValue(strategy = GenerationType.IDENTITY)
    private Long id;

    @Column(name = "nombre_usuario", nullable = false, unique = true)
    private String nombreUsuario;
    //@Column(name=) Se usa para declarar la columna con un nombre mas facil de usar.

    @Column(nullable = false)
    private String email;

    @Column(nullable = false)
    private String contrasena;

    @Column(name = "fecha_registro", nullable = false)
    private LocalDateTime fechaRegistro;

    @Column(name = "intentos_fallidos")
    private int intentosFallidos;

    @Column(name = "bloqueado")
    private boolean bloqueado;

    @OneToMany(mappedBy = "usuarios")
    private List<Recetas> recetas;
    //Une las recetas del usuario mediante el id

    @OneToMany(mappedBy = "usuarios")
    private List<Likes> likes;
    //Lo mismo con los likes.

    @OneToMany(mappedBy = "usuarios")
    private List<Comentarios> comentarios;
    //Une los comentarios con el usuario

}
