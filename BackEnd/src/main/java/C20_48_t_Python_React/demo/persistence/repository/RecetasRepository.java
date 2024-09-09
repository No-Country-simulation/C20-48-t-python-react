package C20_48_t_Python_React.demo.persistence.repository;

import C20_48_t_Python_React.demo.persistence.entity.Recetas;
import org.springframework.data.jpa.repository.JpaRepository;
import org.springframework.stereotype.Repository;

import java.util.List;

@Repository
public interface RecetasRepository extends JpaRepository<Recetas, Long> {
    List<Recetas> findByUsuariosId(Long usuarioId);
}