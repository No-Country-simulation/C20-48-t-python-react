package C20_48_t_Python_React.demo.persistence.entity;

import jakarta.persistence.*;
import lombok.Data;
import lombok.NoArgsConstructor;

import java.time.LocalDateTime;

@Data
@NoArgsConstructor
@Entity
@Table(name = "likes")
public class Likes {

    @Id
    @GeneratedValue(strategy = GenerationType.IDENTITY)
    private Long id;

    @ManyToOne
    @JoinColumn(name = "usuario_id", nullable = false)
    private Usuarios usuarios;

    @ManyToOne
    @JoinColumn(name = "receta_id", nullable = false)
    private Recetas recetas;

    @Column(name = "fecha_like", nullable = false)
    private LocalDateTime fechaLike;
}