package C20_48_t_Python_React.demo.persistence.entity;

import jakarta.persistence.*;
import lombok.Data;
import lombok.NoArgsConstructor;

import java.time.LocalDateTime;

@Data
@NoArgsConstructor
@Entity
@Table(name = "ingredientes")
public class Ingredientes {

    @Id
    @GeneratedValue(strategy = GenerationType.IDENTITY)
    private Long id;

    @Column(nullable = false)
    private String nombre;

    @Column(nullable = false)
    private String cantidad;

    @Column(name = "unidad_medida", nullable = false)
    private String unidadMedida;

    @ManyToOne
    @JoinColumn(name = "receta_id", nullable = false)
    private Recetas recetas;
}