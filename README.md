Para iniciar este proyecto siga las instrucciones de las carpetas frontend y backend.
Resumidamente estas son:

* Entrar a cada carpeta y ejecutar el comando `npm i`. Es importante tener tanto Angular 16.0.0 y nest.js 9.5.0, dado que fueron las versiones en las cuales se desarrolló el proyecto. También es importante tener un servidor de sql listo para funcionar.

* Crear un archivo llamado `.env` dentro de la carpeta backend y agregar las siguientes lineas:

DB_USERNAME=<el usuario de tu base de datos><br />
DB_PASSWORD=<la contraseña de tu base de datos><br />
DB_NAME=<el nombre de tu base de datos><br />
DB_HOST=<la url de tu base de datos><br />

SECRET=<una palabra cualquiera. Mientras más complicada, mejor><br />
TOKEN_EXP=30d <br />

Una vez realizados los pasos anteriores, puede ejecutar el proyecto de backend utilizando el comando `npm start` y el proyecto de frontend usando `ng serve`. Asegurese que el servidor está corriendo en el localhost sobre el puerto 3000, de lo contrario debera cambiar las rutas de la aplicación de frontend para que coincidan con la url base de la api.

Cabe señalar que, dada la falta de experiencia específica en los frameworks utilizados, no fue posible completar todo el desarrollo. Hubo discrepancia en tanto al funcionamiento de algunas características como el manejo de estado y componentes respecto a tecnologías previamente dominadas como lo son Vue.js. Sin embargo, se dio todo lo que se pudo en el tiempo otorgado y al mismo tiempo se adquirió experiencia en las tecnologías de Angular y Nest.js. Muy probablemente utilizando un framework previamente estudiado se hubiese logrado completar, pero se quiso asumir el reto de desarrollar el challenge en la tecnología nueva para adquirir conocimiento y destresa simulando un ambiente real.

Al entrar a la aplicación deberá entrar a la ruta `/register` para crear un usuario. Una vez creado será redirigido automaticamente a la página principal, donde verá una barra de navegación a la izquierda con su nombre de usuario y las opciones Documents y Reviews (actualmente esta opción no está en funcionamiento). En la sección de Documents podrá ver todos los documentos que hayan sido cargados por usted o a los que le hayan referido para una revisión. El estado de cada documento se indica en el mismo item.

Para cargar un nuevo documento puede dar click al botón Upload, el cual abrirá una ventana modal que le pedirá un nombre y el documento. Una vez creado, el item aparecerá automaticamente en la sección de Documents. Para verlo puede dar click al ícono de Lupa a la derecha del item y para eliminar puede dar click en el ícono de al lado.

En la ventana modal de vista podrá ver el documento en sí junto con algunas opciones arriba: Solicitar revisión, Comentar, Aceptar y Rechazar. (Las opciones de Aceptar y Rechazar actualmente no están en funcionamiento).
