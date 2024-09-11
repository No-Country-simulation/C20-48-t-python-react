package C20_48_t_Python_React.demo.service;

import C20_48_t_Python_React.demo.persistence.entity.Recetas;
import C20_48_t_Python_React.demo.persistence.entity.Usuarios;
import C20_48_t_Python_React.demo.persistence.entity.Valoraciones;
import C20_48_t_Python_React.demo.persistence.repository.RecetasRepository;
import C20_48_t_Python_React.demo.persistence.repository.UsuariosRepository;
import C20_48_t_Python_React.demo.persistence.repository.ValoracionRepository;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Service;

import java.time.LocalDateTime;
import java.util.Optional;
@Service
public class ValoracionService {
    @Autowired
    private ValoracionRepository valoracionesRepository;

    @Autowired
    private RecetasRepository recetasRepository;

    @Autowired
    private UsuariosRepository usuariosRepository;

    public void valorarReceta(Long recetaId, Integer puntuacion, Long usuarioId) {
        // Buscar la receta
        Recetas receta = recetasRepository.findById(recetaId)
                .orElseThrow(() -> new RuntimeException("Receta no encontrada"));

        // Buscar el usuario
        Usuarios usuario = usuariosRepository.findById(usuarioId)
                .orElseThrow(() -> new RuntimeException("Usuario no encontrado"));

        // Comprobar si ya existe una valoración
        Optional<Valoraciones> valoracionExistente = valoracionesRepository.findByRecetaAndUsuario(receta, usuario);
        if (valoracionExistente.isPresent()) {
            // Si existe, actualizar la puntuación y la fecha
            Valoraciones valoracion = valoracionExistente.get();
            valoracion.setPuntuacion(puntuacion);
            valoracion.setFechaValoracion(LocalDateTime.now());
            valoracionesRepository.save(valoracion);
        } else {
            // Crear nueva valoración
            Valoraciones nuevaValoracion = new Valoraciones();
            nuevaValoracion.setReceta(receta);
            nuevaValoracion.setUsuario(usuario);
            nuevaValoracion.setPuntuacion(puntuacion);
            nuevaValoracion.setFechaValoracion(LocalDateTime.now());
            valoracionesRepository.save(nuevaValoracion);
        }
    }
}
