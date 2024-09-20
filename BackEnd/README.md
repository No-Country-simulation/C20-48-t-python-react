![Logo](https://github.com/No-Country-simulation/C20-48-t-python-react/blob/main/assets/logo2.jpg)




# RECETAPP

El proyecto es una API para la gestión de recetas, de libre acceso para todo el mundo y permitiendo a los usuarios autenticados mediante JWT crear, actualizar, eliminar y consultar recetas. Cada receta puede ser valorada, recibir likes y estar asociada con diferentes categorías e ingredientes. Los usuarios pueden ver sus recetas, buscar recetas por categorías, nombre y hasta ingredientes.

## Despliegue del Backend
https://recetapp-ggh9.onrender.com/categorias

## Tecnologías Utilizadas
- **Backend**: Spring Boot
- **Base de Datos**: Postgresql
- **Autenticación**: JWT (JSON Web Token)
- **Dependencias**: Spring Data JPA, Spring Security, Spring  Web, Lombok

## Arquitectura del Proyecto
El proyecto sigue una arquitectura en capas con los siguientes componentes:
- **Controladores**: Gestionan las peticiones HTTP y devuelven respuestas a los clientes.
- **Servicios**: Implementan la lógica de negocio.
- **Repositorios**: Gestionan las operaciones con la base de datos.
- **DTOs**: Estructuran los datos intercambiados entre el cliente y el servidor.

## Endpoints y API

[Documento Postman](https://documenter.getpostman.com/view/28379736/2sAXqta1kX#2a381a52-5a65-44b0-b543-bc172d3782f6)
