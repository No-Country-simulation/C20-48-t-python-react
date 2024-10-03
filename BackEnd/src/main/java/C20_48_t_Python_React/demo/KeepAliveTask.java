package C20_48_t_Python_React.demo;

import org.springframework.scheduling.annotation.Scheduled;
import org.springframework.stereotype.Service;
import org.springframework.web.client.RestTemplate;

@Service
public class KeepAliveTask {

    private final RestTemplate restTemplate = new RestTemplate();
    private final String url = "https://recetapp-no-country.onrender.com/";

    @Scheduled(fixedRate = 10 * 60 * 1000) // Cada 10 minutos
    public void pingSelf() {
        try {
            restTemplate.getForObject(url, String.class);
            System.out.println("KeepAlive: Ping exitoso a la API.");
        } catch (Exception e) {
            System.out.println("KeepAlive: Fallo al hacer ping a la API.");
        }
    }
}
