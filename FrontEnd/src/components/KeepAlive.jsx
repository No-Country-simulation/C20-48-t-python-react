import { useEffect } from "react";

const KeepAlive = () => {
  useEffect(() => {
    const keepAlive = async () => {
      try {
        await fetch("https://recetapp-ggh9.onrender.com/categorias");
        console.log("Manteniendo aplicación activa");
      } catch (error) {
        console.error("Error al mantener la aplicación activa:", error);
      }
    };

    // Ejecuta la función inmediatamente al montar el componente
    keepAlive();

    // Configura un intervalo para realizar la solicitud cada 10 minutos (600,000 ms)
    const intervalId = setInterval(keepAlive, 600000);

    // Limpia el intervalo cuando el componente se desmonta
    return () => clearInterval(intervalId);
  }, []);

  return null; // No renderiza nada en pantalla
};

export default KeepAlive;
