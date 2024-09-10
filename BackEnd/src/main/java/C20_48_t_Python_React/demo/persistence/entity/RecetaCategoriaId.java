package C20_48_t_Python_React.demo.persistence.entity;

import jakarta.persistence.Embeddable;
import jakarta.persistence.Entity;
import jakarta.persistence.Table;
import lombok.Data;
import lombok.NoArgsConstructor;

import java.io.Serializable;
import java.util.Objects;

@Data
@NoArgsConstructor
@Embeddable
public class RecetaCategoriaId implements Serializable {
    private Long recetaId;
    private Long categoriaId;
    @Override
    public boolean equals(Object o) {
        if (this == o) return true;
        if (o == null || getClass() != o.getClass()) return false;
        RecetaCategoriaId that = (RecetaCategoriaId) o;
        return Objects.equals(recetaId, that.recetaId) &&
                Objects.equals(categoriaId, that.categoriaId);
    }

    @Override
    public int hashCode() {
        return Objects.hash(recetaId, categoriaId);
    }
}
