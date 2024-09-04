package C20_48_t_Python_React.demo.persistence.entity;

import jakarta.persistence.*;
import lombok.Data;
import lombok.NoArgsConstructor;

import java.time.LocalDateTime;
import java.util.List;

@Data
@NoArgsConstructor
@Entity
@Table(name = "recetas")
public class Recetas {
    @Id
    @GeneratedValue(strategy = GenerationType.IDENTITY)
    private Long id;

    @Column(nullable = false)
    private String titulo;

    @Column(columnDefinition = "TEXT")
    private String descripcion;

    private String duracion;

    private String dificultad;

    @Column(name = "imagen_url", columnDefinition = "TEXT")
    private String imagenUrl;

    @ManyToOne
    @JoinColumn(name = "usuario_id", nullable = false)
    private Usuarios usuarios;

    @Column(name = "fecha_creacion", nullable = false)
    private LocalDateTime fechaCreacion;

    @OneToMany(mappedBy = "recetas")
    private List<RecetaCategoria> recetaCategorias;

    @OneToMany(mappedBy = "recetas")
    private List<Pasos> pasos;

    @OneToMany(mappedBy = "recetas")
    private List<Likes> likes;

    @OneToMany(mappedBy = "recetas")
    private List<Ingredientes> ingredientes;

    @OneToMany(mappedBy = "recetas")
    private List<Comentarios> comentarios;

    @Transient
    private Double promedioPuntuacion;
}
