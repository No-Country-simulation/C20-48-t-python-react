package C20_48_t_Python_React.demo.persistence.entity;

import com.fasterxml.jackson.annotation.JsonManagedReference;
import com.fasterxml.jackson.annotation.JsonProperty.Access;
import com.fasterxml.jackson.annotation.JsonProperty;
import jakarta.persistence.*;
import lombok.Data;
import lombok.NoArgsConstructor;

import java.time.LocalDateTime;
import java.util.ArrayList;
import java.util.List;

@Data
@NoArgsConstructor
@Entity
@Table(name = "recetas")
public class Recetas {
    @Id
    @GeneratedValue(strategy = GenerationType.IDENTITY)
    @JsonProperty(access = Access.READ_ONLY)
    private Long id;

    @Column(nullable = false)
    private String titulo;

    @Column(columnDefinition = "TEXT")
    private String descripcion;

    private String duracion;

    private String dificultad;

    @Column(name = "imagen_url", columnDefinition = "TEXT")
    private String imagenUrl;
    @Column(name = "tips", columnDefinition = "TEXT")
    private String tips;
    @Column(nullable = false)
    private boolean activo = true;

    @ManyToOne
    @JoinColumn(name = "usuario_id", nullable = false)
    @JsonProperty(access = Access.READ_ONLY)
    private Usuarios usuarios;

    @Column(name = "fecha_creacion", nullable = false)
    @JsonProperty(access = Access.READ_ONLY)
    private LocalDateTime fechaCreacion;

    @OneToMany(mappedBy = "recetas", cascade = CascadeType.ALL)
    private List<RecetaCategoria> recetaCategorias = new ArrayList<>();

    @OneToMany(mappedBy = "recetas")
    private List<Likes> likes;


    @OneToMany(mappedBy = "recetas", cascade = CascadeType.ALL)
    private List<Ingredientes> ingredientes = new ArrayList<>();

    @OneToMany(mappedBy = "recetas", cascade = CascadeType.ALL)
    private List<Pasos> pasos = new ArrayList<>();


    @OneToMany(mappedBy = "recetas")

    private List<Comentarios> comentarios;

    @Transient
    private Double promedioPuntuacion;

    @Transient
    private Long totalLikes;

    public Long getTotalLikes() {
        return (long) this.likes.size();  // Si tienes la relación bidireccional con la entidad Likes
    }
}
