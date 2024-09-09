package C20_48_t_Python_React.demo.persistence.repository;

import C20_48_t_Python_React.demo.persistence.entity.Usuarios;
import org.springframework.data.jpa.repository.JpaRepository;
import org.springframework.stereotype.Repository;

import java.util.Optional;

@Repository
public interface UsuariosRepository extends JpaRepository<Usuarios, Long> {

    Optional<Usuarios> findByEmail(String email);

}