package C20_48_t_Python_React.demo;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.scheduling.annotation.Scheduled;
import org.springframework.stereotype.Service;

import javax.sql.DataSource;
import java.sql.Connection;
import java.sql.SQLException;

@Service
public class KeepAliveService {

    @Autowired
    private DataSource dataSource;

    @Scheduled(fixedRate = 10 * 60 * 1000)
    public void keepDatabaseAlive() {
        try (Connection connection = dataSource.getConnection()) {
            connection.prepareStatement("SELECT 1").executeQuery();
        } catch (SQLException e) {
            e.printStackTrace();
        }
    }
}