# Trabajo de grado: Servicios univalle

Este proyecto ha sido concebido y desarrollado por Laura Hernández Muñoz, como parte integral de su trabajo de grado para obtener el título de Ingeniera de Sistemas de la Universidad del Valle.

## Backend

El backend de este proyecto está desarrollado en Node.js y Express. Utiliza una base de datos MongoDB Atlas y las credenciales están almacenadas en un archivo `.env`.

### Requisitos Previos
- [Node.js](https://nodejs.org/)
- [MongoDB Atlas](https://www.mongodb.com/cloud/atlas)

### Configuración

Clona el repositorio:

```bash
git clone https://github.com/laura-hmz/Prueba_TG_02
cd backend_node_01
```
### Instala las dependencias:
```bash
npm install
```
Crea un archivo .env en la carpeta backend y agrega las credenciales de tu base de datos:
```bash
DB_CONNECTION_STRING=tu-connection-string-de-mongodb-atlas
```
Inicia el servidor:
```bash
npm run start
```
El servidor estará disponible en http://localhost:3000. Puedes cambiar el puerto en el archivo index.js si es necesario.

### Uso
Una vez que el servidor está en marcha, puedes acceder a las rutas de la API. Asegúrate de configurar el frontend para consumir estas rutas.

## Frontend
El frontend está construido con Express y Vite. Por defecto, está configurado para consumir el backend desplegado en Render. Si deseas cambiar a un backend local, sigue los pasos a continuación.

### Requisitos Previos
Node.js
### Configuración
### Instala las dependencias:
```bash
cd frontend_vite_react_01
cd vite-project 
npm install
```
Abre el archivo api/index.js y modifica el baseURL según tu backend local:
```bash
const baseURL = "http://localhost:3000/"; // Cambia el puerto según tu configuración
```
### Inicia el servidor de desarrollo:
```bash
npm run dev
```
El frontend estará disponible en http://localhost:3000.

# Despliegue
## Backend
El backend está desplegado en Render.com. Asegúrate de configurar las variables de entorno en tu proyecto de Render.

## Frontend
El frontend está desplegado en Vercel: prueba-tg-02.vercel.app.

## Consideraciones Importantes:

Se recomienda utilizar el navegador Google Chrome, preferiblemente en la versión 119.0.6045.124 o posterior, para garantizar una experiencia óptima del usuario al interactuar con el prototipo en caso de su despliegue.

Por favor, ten en cuenta que la aplicación puede tardar un poco en iniciar, ya que el backend alojado en Render.com se apaga después de 15 minutos de inactividad.

La aplicación es accesible tanto desde dispositivos móviles como desde ordenadores que utilicen el navegador Google Chrome. Sin embargo, se aconseja tener precaución con ciertas extensiones que podrían causar conflictos. En caso de experimentar algún problema, no dudes en ponerte en contacto escribiendo a laura.hernandez.munoz@correounivalle.edu.co. Se proporcionará asistencia para garantizar un acceso sin inconvenientes a la aplicación.

https://prueba-tg-02.vercel.app/

