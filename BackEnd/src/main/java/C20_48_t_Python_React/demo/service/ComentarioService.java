package C20_48_t_Python_React.demo.service;

import C20_48_t_Python_React.demo.dto.ComentariosDTO;
import C20_48_t_Python_React.demo.persistence.entity.Comentarios;
import C20_48_t_Python_React.demo.persistence.entity.Recetas;
import C20_48_t_Python_React.demo.persistence.entity.Usuarios;
import C20_48_t_Python_React.demo.persistence.repository.ComentariosRepository;
import C20_48_t_Python_React.demo.persistence.repository.RecetasRepository;
import C20_48_t_Python_React.demo.persistence.repository.UsuariosRepository;
import C20_48_t_Python_React.demo.service.auth.JwtService;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Service;

import java.time.LocalDateTime;

@Service
public class ComentarioService {
    @Autowired
    private ComentariosRepository comentariosRepository;

    @Autowired
    private UsuariosRepository usuariosRepository;

    @Autowired
    private RecetasRepository recetasRepository;

    @Autowired
    private JwtService jwtService;

    public void agregarComentario(Long recetaId, ComentariosDTO comentarioDTO, String token) {
        // Obtener el ID del usuario desde el JWT
        String jwt = token.replace("Bearer ", "");
        String emailUsuario = jwtService.extractUsername(jwt); //

        Usuarios usuario = usuariosRepository.findByEmail(emailUsuario)
                .orElseThrow(() -> new RuntimeException("Usuario no encontrado"));

        Recetas receta = recetasRepository.findById(recetaId)
                .orElseThrow(() -> new RuntimeException("Receta no encontrada"));

        // Crear el comentario
        Comentarios comentario = new Comentarios();
        comentario.setComentario(comentarioDTO.getComentario());
        comentario.setUsuarios(usuario);
        comentario.setRecetas(receta);
        comentario.setFechaComentario(LocalDateTime.now());

        comentariosRepository.save(comentario);
    }

    public void actualizarComentario(Long comentarioId, ComentariosDTO comentarioDTO, String token) {
        // Obtener el email del usuario desde el token JWT
        String jwt = token.replace("Bearer ", "");
        String emailUsuario = jwtService.extractUsername(jwt); // Extraer email

        Usuarios usuario = usuariosRepository.findByEmail(emailUsuario)
                .orElseThrow(() -> new RuntimeException("Usuario no encontrado"));

        Comentarios comentario = comentariosRepository.findById(comentarioId)
                .orElseThrow(() -> new RuntimeException("Comentario no encontrado"));

        // Verificar si el comentario pertenece al usuario que lo creó
        if (!comentario.getUsuarios().getId().equals(usuario.getId())) {
            throw new RuntimeException("No puedes editar este comentario");
        }

        // Actualizar el contenido del comentario
        comentario.setComentario(comentarioDTO.getComentario());
        comentario.setFechaComentario(LocalDateTime.now());

        comentariosRepository.save(comentario);
    }
    public void deleteComentario(Long comentarioId, String token) {
        // Obtener el email del usuario desde el token JWT
        String jwt = token.replace("Bearer ", "");
        String emailUsuario = jwtService.extractUsername(jwt); // Extraer email

        Usuarios usuario = usuariosRepository.findByEmail(emailUsuario)
                .orElseThrow(() -> new RuntimeException("Usuario no encontrado"));

        Comentarios comentario = comentariosRepository.findById(comentarioId)
                .orElseThrow(() -> new RuntimeException("Comentario no encontrado"));

        // Verificar si el comentario pertenece al usuario que lo creó
        if (!comentario.getUsuarios().getId().equals(usuario.getId())) {
            throw new RuntimeException("No puedes editar este comentario");
        }

        // Actualizar el contenido del comentario
        comentario.setActivo(false);
        comentariosRepository.save(comentario);

        comentariosRepository.save(comentario);
    }

}
