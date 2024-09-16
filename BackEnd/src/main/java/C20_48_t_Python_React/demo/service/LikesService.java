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
import java.util.Optional;

@Service
public class LikesService {
    @Autowired
    private LikesRepository likesRepository;

    @Autowired
    private RecetasRepository recetasRepository;

    @Autowired
    private UsuariosRepository usuariosRepository;

    public String  agregarLike(Long recetaId, Long usuarioId) {
        Recetas receta = recetasRepository.findById(recetaId)
                .orElseThrow(() -> new RuntimeException("Receta no encontrada"));
        Usuarios usuario = usuariosRepository.findById(usuarioId)
                .orElseThrow(() -> new RuntimeException("Usuario no encontrado"));

        // Buscar el like existente
        Optional<Likes> likeExistenteOpt = likesRepository.findByRecetasAndUsuarios(receta, usuario);

        if (likeExistenteOpt.isPresent()) {
            // Eliminar el like si ya existe
            likesRepository.delete(likeExistenteOpt.get());
            return "Like eliminado";
        } else {
            // Crear el like si no existe
            Likes nuevoLike = new Likes();
            nuevoLike.setRecetas(receta);
            nuevoLike.setUsuarios(usuario);
            nuevoLike.setFechaLike(LocalDateTime.now());

            // Guardar el nuevo like
            likesRepository.save(nuevoLike);
            return "Like agregado";
        }
    }
}
