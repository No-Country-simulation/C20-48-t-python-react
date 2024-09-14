package C20_48_t_Python_React.demo.persistence.entity;
import jakarta.persistence.*;
import lombok.Data;
import lombok.NoArgsConstructor;

import java.util.List;

@Data
@NoArgsConstructor
@Entity
@Table(name = "categorias")
public class Categorias {
    @Id
    @GeneratedValue(strategy = GenerationType.IDENTITY)
    private Long id;
    @Column(length = 100)
    private String nombre;

    @OneToMany(mappedBy = "categorias")
    private List<RecetaCategoria> recetaCategorias;
}
