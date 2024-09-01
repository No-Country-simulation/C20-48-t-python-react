package C20_48_t_Python_React.demo.persistence.entity;
import lombok.Data;
import lombok.NoArgsConstructor;
import jakarta.persistence.*;

@Data
@NoArgsConstructor
@Entity
@Table(name = "pasos")
public class Pasos {

    @Id
    @GeneratedValue(strategy = GenerationType.IDENTITY)
    private Long id;

    @Column(columnDefinition = "TEXT")
    private String descripcion;

    @Column(nullable = false)
    private int orden;

    @ManyToOne
    @JoinColumn(name = "receta_id", nullable = false)
    private Recetas recetas;
}