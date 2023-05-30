
# REST-API 

Este proyecto consiste en un REST API diseñado para consumir [JSONPlaceholder](https://jsonplaceholder.typicode.com/), una API en línea falsa para desarrolladores. Proporciona un conjunto de endpoints que permiten interactuar con los recursos disponibles en JSONPlaceholder de manera fácil y eficiente.

El REST API está desarrollado en Node.js utilizando el framework Express.js. Se utiliza la biblioteca Axios para realizar las solicitudes HTTP hacia JSONPlaceholder y procesar las respuestas.

Con esta API, los usuarios pueden realizar operaciones como obtener todos los usuarios, obtener usuarios por ID, crear nuevos usuarios, actualizar información de usuarios existentes y eliminar usuarios.


## Endpoints

- `GET /users` Obtiene todos los usuarios.
- `GET /users/:id` Obtiene un usuario por su ID.
- `POST /users` Crea un nuevo usuario.
- `DELETE /users/:id` Elimina un usuario existente.
    
## Autor

- [@MilenaIsasi](https://www.github.com/MilenaIsasi)


## Instalación
A continuacion se muestra como realizar la instalacion y configuración de la aplicación.
- Clone el repositorio.
`git clone https://github.com/MilenaIsasi/rest-api.git`
- Instale los paquetes NPM.
`npm install`
- Ejecute el proyecto.
`node server.js`

