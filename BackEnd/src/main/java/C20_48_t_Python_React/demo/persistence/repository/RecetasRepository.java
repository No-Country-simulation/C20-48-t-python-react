package C20_48_t_Python_React.demo.persistence.repository;

import C20_48_t_Python_React.demo.persistence.entity.Recetas;
import org.springframework.data.domain.Page;
import org.springframework.data.domain.Pageable;
import org.springframework.data.jpa.repository.JpaRepository;
import org.springframework.data.jpa.repository.Query;
import org.springframework.data.repository.query.Param;
import org.springframework.stereotype.Repository;

import java.util.List;
import java.util.Optional;

@Repository
public interface RecetasRepository extends JpaRepository<Recetas, Long> {
    List<Recetas> findByUsuariosId(Long usuarioId);

    @Query("SELECT r FROM Recetas r JOIN r.recetaCategorias rc WHERE rc.categorias.id = :categoriaId")
    Page<Recetas> findByCategoriaId(@Param("categoriaId") Long categoriaId, Pageable pageable);

    @Query("SELECT r FROM Recetas r JOIN r.recetaCategorias rc WHERE rc.categorias.id IN :categoriaIds GROUP BY r.id HAVING COUNT(DISTINCT rc.categorias.id) = :categoriaCount")
    Page<Recetas> findByCategoriaIdsIn(@Param("categoriaIds") List<Long> categoriaIds, @Param("categoriaCount") long categoriaCount, Pageable pageable);

    Page<Recetas> findByTituloContainingAndDescripcionContainingAndIngredientesNombreContaining(String titulo, String descripcion, String ingrediente, Pageable pageable);

    Page<Recetas> findByTituloContainingAndDescripcionContaining(String titulo, String descripcion, Pageable pageable);

    Page<Recetas> findByDescripcionContainingAndIngredientesNombreContaining(String descripcion, String ingrediente, Pageable pageable);

    Page<Recetas> findByTituloContainingAndIngredientesNombreContaining(String titulo, String ingrediente, Pageable pageable);

    Page<Recetas> findByTituloContaining(String titulo, Pageable pageable);

    Page<Recetas> findByDescripcionContaining(String descripcion, Pageable pageable);

    Page<Recetas> findByIngredientesNombreContaining(String ingrediente, Pageable pageable);
    Optional<Recetas> findById(Long id);
}
