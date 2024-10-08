package C20_48_t_Python_React.demo.persistence.repository;

import C20_48_t_Python_React.demo.persistence.entity.Likes;
import C20_48_t_Python_React.demo.persistence.entity.Recetas;
import C20_48_t_Python_React.demo.persistence.entity.Usuarios;
import org.springframework.data.domain.Pageable;
import org.springframework.data.jpa.repository.JpaRepository;
import org.springframework.data.jpa.repository.Query;
import org.springframework.data.repository.query.Param;
import org.springframework.stereotype.Repository;

import java.util.List;
import java.util.Optional;

@Repository
public interface LikesRepository extends JpaRepository<Likes, Long> {

    boolean existsByRecetasAndUsuarios(Recetas receta, Usuarios usuario);

    List<Recetas> findRecetasByUsuariosId(Long usuarioId);
    @Query("SELECT l.recetas FROM Likes l WHERE l.usuarios.id = :usuarioId")
    List<Recetas> findRecetasFavoritasPorUsuario(@Param("usuarioId") Long usuarioId, Pageable pageable);

    long countByRecetas_Id(Long id);

    Optional<Likes> findByRecetasAndUsuarios(Recetas receta, Usuarios usuario);
}