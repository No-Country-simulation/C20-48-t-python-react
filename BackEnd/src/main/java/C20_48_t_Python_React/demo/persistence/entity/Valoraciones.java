package C20_48_t_Python_React.demo.persistence.entity;

import jakarta.persistence.*;
import jakarta.validation.constraints.Max;
import jakarta.validation.constraints.Min;
import lombok.Data;
import lombok.NoArgsConstructor;

import java.time.LocalDateTime;

@Data
@NoArgsConstructor
@Entity
@Table(name = "valoraciones")
public class Valoraciones {
    @Id
    @GeneratedValue(strategy = GenerationType.IDENTITY)
    private Long id;
    @ManyToOne
    @JoinColumn(name = "usuario_id", nullable = false)
    private Usuarios usuario;

    @ManyToOne
    @JoinColumn(name = "receta_id", nullable = false)
    private Recetas receta;

    @Column(nullable = false)
    @Min(1)
    @Max(5)
    private Integer puntuacion;

    @Column(name = "fecha_valoracion", nullable = false)
    private LocalDateTime fechaValoracion;

}
