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
    List<Recetas> findByUsuariosId(Long usuarioId, Pageable pageable);

    @Query("SELECT r FROM Recetas r JOIN r.recetaCategorias rc WHERE rc.categorias.id = :categoriaId")
    Page<Recetas> findByCategoriaId(@Param("categoriaId") Long categoriaId, Pageable pageable);

    @Query("SELECT r FROM Recetas r JOIN r.recetaCategorias rc WHERE rc.categorias.id IN :categoriaIds GROUP BY r.id HAVING COUNT(DISTINCT rc.categorias.id) = :categoriaCount")
    Page<Recetas> findByCategoriaIdsIn(@Param("categoriaIds") List<Long> categoriaIds, @Param("categoriaCount") long categoriaCount, Pageable pageable);

    Page<Recetas> findByTituloContainingAndDescripcionContaining(String titulo, String descripcion, Pageable pageable);

    Page<Recetas> findByDescripcionContainingAndIngredientesNombreContaining(String descripcion, String ingrediente, Pageable pageable);

    Page<Recetas> findByTituloContainingAndIngredientesNombreContaining(String titulo, String ingrediente, Pageable pageable);

    Page<Recetas> findByTituloContaining(String titulo, Pageable pageable);

    Page<Recetas> findByDescripcionContaining(String descripcion, Pageable pageable);

    Page<Recetas> findByIngredientesNombreContaining(String ingrediente, Pageable pageable);

    Optional<Recetas> findById(Long id);

    Page<Recetas> findByDificultad(String dificultad, Pageable pageable);

    Page<Recetas> findByTituloContainingAndDescripcionContainingAndIngredientesNombreContainingAndDificultad(String titulo, String descripcion, String ingrediente, String dificultad, Pageable pageable);

    Page<Recetas> findByTituloContainingAndDescripcionContainingAndDificultad(String titulo, String descripcion, String dificultad, Pageable pageable);

    Page<Recetas> findByTituloContainingAndIngredientesNombreContainingAndDificultad(String titulo, String ingrediente, String dificultad, Pageable pageable);

    Page<Recetas> findByTituloContainingAndDificultad(String titulo, String dificultad, Pageable pageable);

    Page<Recetas> findByDescripcionContainingAndDificultad(String descripcion, String dificultad, Pageable pageable);

    Page<Recetas> findByIngredientesNombreContainingAndDificultad(String ingrediente, String dificultad, Pageable pageable);

    @Query("SELECT r FROM Recetas r JOIN r.recetaCategorias rc WHERE rc.categorias.id IN :categoriaIds AND LOWER(r.titulo) LIKE LOWER(CONCAT('%', :titulo, '%')) GROUP BY r.id HAVING COUNT(DISTINCT rc.categorias.id) = :categoriaCount")
    Page<Recetas> findByCategoriaIdsInAndTituloContaining(@Param("categoriaIds") List<Long> categoriaIds, @Param("categoriaCount") long categoriaCount, @Param("titulo") String titulo, Pageable pageable);

    @Query("SELECT r FROM Recetas r JOIN r.recetaCategorias rc WHERE rc.categorias.id IN :categoriaIds AND r.titulo LIKE %:titulo% GROUP BY r.id HAVING COUNT(DISTINCT rc.categorias.id) = :categoriaCount")
    Page<Recetas> findByCategoriaIdsInAndTituloContaining(@Param("titulo") String titulo, @Param("categoriaIds") List<Long> categoriaIds, @Param("categoriaCount") long categoriaCount, Pageable pageable);

    @Query("SELECT r FROM Recetas r " +
            "LEFT JOIN r.ingredientes i " +
            "LEFT JOIN r.recetaCategorias rc " +
            "WHERE (COALESCE(:titulo, '') = '' OR LOWER(r.titulo) LIKE LOWER(CONCAT('%', :titulo, '%'))) " +
            "AND (COALESCE(:dificultad, '') = '' OR r.dificultad = :dificultad) " +
            "AND (COALESCE(:ingrediente, '') = '' OR LOWER(i.nombre) LIKE LOWER(CONCAT('%', :ingrediente, '%'))) " +
            "AND (COALESCE(:categoriaIds, '') = '' OR rc.categorias.id IN :categoriaIds) " +
            "AND r.activo = true")
    Page<Recetas> buscarRecetas(@Param("titulo") String titulo,
                                @Param("dificultad") String dificultad,
                                @Param("ingrediente") String ingrediente,
                                @Param("categoriaIds") List<Long> categoriaIds,
                                Pageable pageable);
    @Query("SELECT r FROM Recetas r " +
            "LEFT JOIN r.ingredientes i " +
            "WHERE (:titulo IS NULL OR LOWER(r.titulo) LIKE LOWER(CONCAT('%', :titulo, '%'))) " +
            "AND (:descripcion IS NULL OR LOWER(r.descripcion) LIKE LOWER(CONCAT('%', :descripcion, '%'))) " +
            "AND (:ingrediente IS NULL OR (i IS NULL OR LOWER(i.nombre) LIKE LOWER(CONCAT('%', :ingrediente, '%')))) " +
            "AND r.activo = true")
    Page<Recetas> buscarRecetasDos(@Param("titulo") String titulo,
                                @Param("descripcion") String descripcion,
                                @Param("ingrediente") String ingrediente,
                                Pageable pageable);

}