Rutas Protegidas con Sistema de Login - Vite & React
Introducción
Este proyecto es un Sistema de Login creado con Vite y React, que muestra cómo proteger ciertas rutas contra el acceso no autorizado. El objetivo de este proyecto es demostrar cómo funciona la autenticación utilizando React Router para salvaguardar las rutas privadas, asegurando que solo los usuarios autenticados puedan acceder a partes específicas de la aplicación.

Es un buen punto de partida para quienes desean aprender a integrar un sistema de login con rutas protegidas en React.

-Características
Autenticación de Usuarios: Funcionalidad básica de inicio de sesión usando un sistema de autenticación simulado.
Rutas Protegidas: Solo los usuarios autenticados pueden acceder a ciertas rutas.
Rutas Públicas: Los usuarios no autenticados solo pueden acceder a páginas públicas.
Contexto de React: Administra el estado de autenticación en toda la aplicación.
Enrutamiento con React Router: Maneja la navegación y redirección según el estado de autenticación.

-Uso
Una vez que el proyecto esté configurado, puedes comenzar a utilizar el sistema de login:

Página de Login: Navega a /login e ingresa las credenciales predeterminadas.
Acceso a Rutas Protegidas: Intenta acceder a una ruta protegida como /dashboard. Si no estás autenticado, serás redirigido a la página de login.
Cerrar Sesión: Una vez autenticado, puedes usar la funcionalidad de logout para terminar la sesión y volver a la página de login.

-Contribuciones
¡Las contribuciones son bienvenidas! Si te gustaría contribuir a este proyecto:

Haz un fork del repositorio.
Crea una nueva rama para tu característica o corrección de errores (git checkout -b rama-caracteristica).
Realiza los cambios necesarios.
Haz un commit de tus cambios (git commit -m 'Agregar nueva característica').
Haz push a la rama (git push origin rama-caracteristica).
Crea un pull request.

-Tecnologías
Este proyecto está construido con:

Vite: Herramienta de desarrollo rápido para proyectos web modernos.
React: Librería de JavaScript para construir interfaces de usuario.
React Router: Maneja el enrutamiento de la aplicación, incluidas rutas públicas y protegidas.
CSS Modules: Utilizado para el estilizado con alcance limitado.

Licencia
Distribuido bajo la licencia MIT. Consulta el archivo LICENSE para más información.
