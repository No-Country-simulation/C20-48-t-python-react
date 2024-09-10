package C20_48_t_Python_React.demo.service;

import C20_48_t_Python_React.demo.persistence.entity.Likes;
import C20_48_t_Python_React.demo.persistence.entity.Recetas;
import C20_48_t_Python_React.demo.persistence.entity.Usuarios;
import C20_48_t_Python_React.demo.persistence.repository.LikesRepository;
import C20_48_t_Python_React.demo.persistence.repository.RecetasRepository;
import C20_48_t_Python_React.demo.persistence.repository.UsuariosRepository;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Service;

import java.time.LocalDateTime;

@Service
public class LikesService {
    @Autowired
    private LikesRepository likesRepository;

    @Autowired
    private RecetasRepository recetasRepository;

    @Autowired
    private UsuariosRepository usuariosRepository;

    public void agregarLike(Long recetaId, Long usuarioId) {
        Recetas receta = recetasRepository.findById(recetaId)
                .orElseThrow(() -> new RuntimeException("Receta no encontrada"));
        Usuarios usuario = usuariosRepository.findById(usuarioId)
                .orElseThrow(() -> new RuntimeException("Usuario no encontrado"));

        // Verificar si el usuario ya ha dado like a la receta
        if (likesRepository.existsByRecetasAndUsuarios(receta, usuario)) {
            throw new RuntimeException("Ya has marcado esta receta como favorita.");
        }

        // Crear el like
        Likes like = new Likes();
        like.setRecetas(receta);
        like.setUsuarios(usuario);
        like.setFechaLike(LocalDateTime.now());

        // Guardar el like
        likesRepository.save(like);
    }
}
