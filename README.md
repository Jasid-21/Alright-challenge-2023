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
