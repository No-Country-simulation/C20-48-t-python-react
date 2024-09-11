package C20_48_t_Python_React.demo.persistence.repository;

import C20_48_t_Python_React.demo.persistence.entity.Recetas;
import C20_48_t_Python_React.demo.persistence.entity.Usuarios;
import C20_48_t_Python_React.demo.persistence.entity.Valoraciones;
import org.springframework.data.jpa.repository.JpaRepository;
import org.springframework.data.jpa.repository.Query;
import org.springframework.data.repository.query.Param;
import org.springframework.stereotype.Repository;

import java.util.Optional;

@Repository
public interface ValoracionRepository extends JpaRepository<Valoraciones, Long> {
    Optional<Valoraciones> findByRecetaAndUsuario(Recetas receta, Usuarios usuario);

    @Query("SELECT AVG(v.puntuacion) FROM Valoraciones v WHERE v.receta.id = :recetaId")
    Double calcularPromedioPorReceta(@Param("recetaId") Long recetaId);
}