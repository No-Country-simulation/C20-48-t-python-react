package C20_48_t_Python_React.demo.persistence.repository;
import C20_48_t_Python_React.demo.persistence.entity.Pasos;
import org.springframework.data.jpa.repository.JpaRepository;
import org.springframework.stereotype.Repository;

@Repository
public interface PasosRepository extends JpaRepository<Pasos, Long> {

    void deleteByRecetasId(Long recetaId);
}