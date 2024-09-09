package C20_48_t_Python_React.demo.persistence.entity;

import com.fasterxml.jackson.annotation.JsonBackReference;
import jakarta.persistence.*;
import lombok.Data;
import lombok.NoArgsConstructor;

@Data
@NoArgsConstructor
@Entity
public class RecetaCategoria  {
    @EmbeddedId
    private RecetaCategoriaId id;

    @ManyToOne
    @MapsId("recetaId")
    @JoinColumn(name = "receta_id", nullable = false)
    private Recetas recetas;

    @ManyToOne
    @MapsId("categoriaId")
    @JoinColumn(name = "categoria_id", nullable = false)
    private Categorias categorias;

}