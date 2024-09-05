package C20_48_t_Python_React.demo.persistence.repository;

import C20_48_t_Python_React.demo.persistence.entity.Valoraciones;
import org.springframework.data.jpa.repository.JpaRepository;
import org.springframework.data.jpa.repository.Query;
import org.springframework.data.repository.query.Param;
import org.springframework.stereotype.Repository;

@Repository
public interface ValoracionRepository extends JpaRepository<Valoraciones, Long> {

}
