package C20_48_t_Python_React.demo.persistence.entity;

import com.fasterxml.jackson.annotation.JsonIgnore;
import com.fasterxml.jackson.annotation.JsonManagedReference;
import com.fasterxml.jackson.annotation.JsonProperty;
import jakarta.persistence.*;
import lombok.Data;
import lombok.NoArgsConstructor;
import org.springframework.security.core.GrantedAuthority;
import org.springframework.security.core.authority.SimpleGrantedAuthority;
import org.springframework.security.core.userdetails.UserDetails;
import com.fasterxml.jackson.annotation.JsonProperty;
import com.fasterxml.jackson.annotation.JsonProperty.Access;
import java.time.LocalDateTime;
import java.util.Collection;
import java.util.List;


//Estas dos anotaciones son de Lombok-
    @Data
    //@Data genera Genera getters, setters, toString, equals, y hashCode automáticamente.
    @NoArgsConstructor
    //@NoArgsConstructor: Genera un constructor sin argumentos.

@Entity
@Table(name = "usuarios")
public class Usuarios implements UserDetails {
    @Id
    @GeneratedValue(strategy = GenerationType.IDENTITY)
    @JsonProperty(access = Access.READ_ONLY)
    private Long id;

    @Column(name = "nombre_usuario", nullable = false, length = 100)
    private String nombreUsuario;
    //@Column(name=) Se usa para declarar la columna con un nombre mas facil de usar.

    @Column(nullable = false, unique = true, length = 100)
    private String email;

    @Column(nullable = false)
    private String contrasena;

    private String avatar;

    @Column(name = "fecha_registro", nullable = false)
    @JsonProperty(access = Access.READ_ONLY)
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

    @Column(name = "rol", length = 20)
    private String rol;

    //Implementacion de la clase UserDetails de Spring Security

    @Override
    public Collection<? extends GrantedAuthority> getAuthorities() {

        return List.of(new SimpleGrantedAuthority(rol));
    }

    @Override
    public String getPassword() {
        return null;
    }

    @Override
    public String getUsername() {
        return null;
    }

    @Override
    public boolean isAccountNonExpired() {
        return true;
    }

    @Override
    public boolean isAccountNonLocked() {
        return true;
    }

    @Override
    public boolean isCredentialsNonExpired() {
        return true;
    }

    @Override
    public boolean isEnabled() {
        return true;
    }
}
