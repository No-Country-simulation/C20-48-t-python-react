package C20_48_t_Python_React.demo.persistence.entity;

import jakarta.persistence.*;
import lombok.Data;
import lombok.NoArgsConstructor;

import java.time.LocalDateTime;
import java.util.List;

@Data
@NoArgsConstructor
@Entity
@Table(name = "comentarios")
public class Comentarios {

    @Id
    @GeneratedValue(strategy = GenerationType.IDENTITY)
    private Long id;

    @Column(name ="contenido", columnDefinition = "TEXT", nullable = false)
    private String comentario;

    @ManyToOne
    @JoinColumn(name = "usuario_id", nullable = false)
    private Usuarios usuarios;

    @ManyToOne
    @JoinColumn(name = "receta_id", nullable = false)
    private Recetas recetas;

    @Column(name = "fecha_comentario", nullable = false)
    private LocalDateTime fechaComentario;

    @Column(nullable = false)
    private boolean activo = true;
};
