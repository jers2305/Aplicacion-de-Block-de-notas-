Aplicacion-lista-de-tareas
Descripción
Aplicacion-lista-de-tareas es una aplicación de gestión de tareas diseñada para ayudar a los usuarios a organizar y priorizar sus tareas diarias. La aplicación permite a los usuarios añadir, visualizar y eliminar tareas. Las tareas se pueden clasificar por prioridades: alta, media y baja.

Características
Añadir Nueva Tarea: Permite a los usuarios añadir nuevas tareas con un título, descripción, fecha y prioridad.

Visualización de Tareas: Muestra todas las tareas en tarjetas, con un indicador de color según su prioridad.

Eliminación de Tareas: Los usuarios pueden eliminar tareas individuales.

Filtro por Prioridad: Los usuarios pueden filtrar las tareas por prioridad: alta, media, baja.

Menú de Navegación: Incluye navegación a través de un menú desplegable.

Botón Flotante de Nueva Nota: Un botón siempre visible en la esquina inferior derecha para añadir nuevas notas.

Tecnologías Utilizadas
Angular: Framework de desarrollo front-end.

Bootstrap: Biblioteca de estilos CSS.

TypeScript: Lenguaje de programación.

HTML y SCSS: Lenguajes de marcado y estilos.

Instalación
Clona el repositorio:

sh
git clone https://github.com/usuario/aplicacion-lista-de-tareas.git
cd aplicacion-lista-de-tareas
Instala las dependencias:

sh
npm install
Inicia el servidor de desarrollo:

sh
ng serve
Abre tu navegador y ve a http://localhost:4200.

Estructura del Proyecto
src/app/: Contiene todos los componentes, servicios y modelos de la aplicación.

header/: Contiene el componente del header.

lista-tareas/: Contiene el componente de la lista de tareas.

add-tarea/: Contiene el componente para añadir una nueva tarea.

usuario/: Contiene el componente del usuario.

tareas.service.ts: Servicio para gestionar las tareas.

tarea.model.ts: Modelo de datos de las tareas.

Uso
Añadir Nueva Tarea:

Haz clic en el botón "Nueva Nota" en la esquina inferior derecha.

Completa el formulario con el título, descripción, fecha y prioridad de la tarea.

Haz clic en "Añadir Tarea".

Visualizar Tareas:

Las tareas se muestran en tarjetas, con un indicador de color según su prioridad (rojo para alta, amarillo para media, verde para baja).

Eliminar Tareas:

Haz clic en el botón "X" en la tarjeta de la tarea que deseas eliminar.

Filtrar por Prioridad:

Usa el menú desplegable para filtrar las tareas por prioridad (alta, media, baja).

Contribuciones
Las contribuciones son bienvenidas. Si deseas colaborar, por favor sigue estos pasos:

Haz un fork del repositorio.

Crea una rama con tu nueva funcionalidad (git checkout -b nueva-funcionalidad).

Realiza los cambios necesarios y haz commit (git commit -m 'Añadir nueva funcionalidad').

Push a la rama (git push origin nueva-funcionalidad).

Abre una Pull Request.

Licencia
Este proyecto está bajo la licencia MIT. Consulta el archivo LICENSE para más detalles.
