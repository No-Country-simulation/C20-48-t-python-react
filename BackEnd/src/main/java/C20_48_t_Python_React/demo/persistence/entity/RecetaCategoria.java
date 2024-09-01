package C20_48_t_Python_React.demo.persistence.entity;

import jakarta.persistence.*;
import lombok.Data;
import lombok.NoArgsConstructor;

@Data
@NoArgsConstructor
@Entity
@Table(name = "receta_categorias")
public class RecetaCategoria {

    @Id
    @ManyToOne
    @JoinColumn(name = "receta_id", nullable = false)
    private Recetas recetas;

    @Id
    @ManyToOne
    @JoinColumn(name = "categoria_id", nullable = false)
    private Categorias categorias;
}