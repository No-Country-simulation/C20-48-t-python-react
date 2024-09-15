package C20_48_t_Python_React.demo.service;

import C20_48_t_Python_React.demo.dto.CategoriasDTO;
import C20_48_t_Python_React.demo.persistence.entity.Categorias;
import C20_48_t_Python_React.demo.persistence.repository.CategoriasRepository;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Service;

import java.util.List;
import java.util.stream.Collectors;
@Service
public class CategoriaService {
    @Autowired
    private CategoriasRepository categoriasRepository;

    public List<CategoriasDTO> obtenerTodasCategorias() {
        List<Categorias> categorias = categoriasRepository.findAll();
        return categorias.stream()
                .map(categoria -> new CategoriasDTO(categoria.getId(), categoria.getNombre()))
                .collect(Collectors.toList());
    }
}
