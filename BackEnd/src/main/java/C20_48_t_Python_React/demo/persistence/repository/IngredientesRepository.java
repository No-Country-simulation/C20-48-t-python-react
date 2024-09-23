package C20_48_t_Python_React.demo.persistence.repository;

import C20_48_t_Python_React.demo.persistence.entity.Ingredientes;
import org.springframework.data.jpa.repository.JpaRepository;
import org.springframework.stereotype.Repository;

import java.util.List;

@Repository
public interface IngredientesRepository extends JpaRepository<Ingredientes, Long> {

    void deleteByRecetasId(Long recetaId);

    List<Ingredientes> findByRecetasId(Long recetaId);
}