package C20_48_t_Python_React.demo.persistence.repository;

import C20_48_t_Python_React.demo.persistence.entity.Valoraciones;
import org.springframework.data.jpa.repository.JpaRepository;
import org.springframework.data.jpa.repository.Query;
import org.springframework.data.repository.query.Param;

public interface ValoracionRepository extends JpaRepository<Valoraciones, Long> {
    @Query("SELECT AVG(v.puntuacion) FROM Valoracion v WHERE v.receta.id = :recetaId")
    Double findAveragePuntuacionByRecetaId(@Param("recetaId") Long recetaId);
}
