# Alright - Technical Challenge Eng Lv 1 to 3

Hola! 👋, Si llegaste hasta acá es porque nos estamos llevando muy bien y estás muy cerca de ser una estrella de nuestro equipo :star2:, así que tomate un segundo para sentirte especial, porque para nosotros lo eres! :fire:.

A continuación te presentamos nuestro technical challenge que estará compuesto por dos partes: Frontend App y Backend Server. Para el desarrollo de este reto no es necesario que uses **[Angular](https://angular.io/)**, **[NestJS](https://nestjs.com/)**, **[PDF-Lib](https://pdf-lib.js.org/)** o alojes tu proyecto en **[AWS](https://aws.amazon.com/)**, pero te garantizamos que dará puntos adicionales hacerlo.

Como ya sabrás parte de nuestra plataforma tiene como misión la gestión de documentos legales y por ende queremos retarte a avanzar con un ejercicio muy similar a lo que vas a enfrentarte cuando estés a bordo, así que comencemos con los requerimientos:

## Requerimientos funcionales:

1. **Registro de usuarios:**
   - La aplicación debe permitir a los usuarios registrarse con su dirección de correo electrónico y contraseña.
   - No se requiere verificación de correo electrónico para el registro.
2. **Inicio de sesión**:
   - Los usuarios deben poder iniciar sesión en la aplicación utilizando sus credenciales de registro.
3. **Dashboard**:
   - Después del inicio de sesión, los usuarios deben ver un dashboard que incluya una barra lateral izquierda con las opciones "Mis documentos" y "Mis Revisiones".
   - La sección "Mis documentos" debe ser la selección predeterminada y mostrar una lista de los documentos del usuario con miniaturas, título y estado.
   - La sección "Mis Revisiones" debe mostrar una lista de los documentos en estado de revisión.
4. **Subir documentos**:
   - En la sección "Mis documentos", los usuarios deben tener la opción de subir un nuevo documento en **formato PDF**.
   - Se debe permitir ingresar un título para el documento y el tamaño máximo del archivo debe ser de 5MB.
5. **Visualización de documentos**:
   - Al seleccionar un documento, los usuarios deben poder abrirlo para ver una previsualización dentro de la sección actual del dashboard.
   - Los usuarios deben poder interactuar con el previsualizador del documento y tener la opción de cerrarlo.
6. **Solicitar revisión**:
   - Al seleccionar un documento en la sección "Mis documentos", los usuarios deben poder solicitar una revisión.
   - Debe existir una lista de usuarios registrados para que el usuario pueda seleccionar un revisor.
7. **Eliminar documentos**:
   - Al seleccionar un documento, los usuarios deben tener la opción de eliminarlo.
   - Se debe mostrar un cuadro de diálogo de confirmación antes de borrar el documento.
8. **Comentarios y anotaciones**:
   - Durante el proceso de revisión, los usuarios deben poder dejar comentarios y anotaciones en el documento para que sean revisados por el otro usuario.
   - El usuario al que no pertenece el comentario puede realizar acciones sobre los comentarios, como aceptarlos o rechazarlos.
   - Las anotaciones y comentarios podrán ser aceptadas o rechazadas por el otro usuario, y sólo el usuario creador de una podrá borrarle.
9. **Estado de los documentos**:
   - Los documentos pueden tener los siguientes estados: "Sin revisar", "En revisión", "Rechazado" y "Aceptado".
   - Durante el proceso de revisión, se deben registrar las acciones realizadas por cada usuario, como el inicio de la revisión, adición de comentarios, aceptación o rechazo del documento.
   - Cada acción debe estar asociada a un usuario y registrar la fecha y hora en que se realizó.
10. **Proceso de revisión**:
    * Ambos usuarios podrán rechazar una revisión durante cualquier momento del proceso, pero sólo el usuario invitado podrá aceptar el documento para finalizar la revisión en estado Aceptado.
    * Cualquier usuario que haga parte de la revisión podrá abrir el log de acciones de la misma para revisar el historial de acciones de cada usuario.

## Requerimientos no funcionales:

1. **Diseño responsive**:
   - La aplicación debe ser accesible desde diferentes dispositivos y tamaños de pantalla. Esto es un plus, primero asegura los demás requerimientos de esta categoría.
2. **Seguridad**:
   - La aplicación debe implementar medidas de seguridad para proteger los datos de los usuarios.
   - Se deben utilizar técnicas de encriptación para almacenar las contraseñas de forma segura.
3. **Registro de acciones**:
   - Durante el proceso de revisión, se debe mantener un registro detallado de todas las acciones realizadas por cada usuario. (Esto es muy importante)

## Entrega del challenge

Asegurate de hacer un fork de este proyecto, cambia el nombre de este archivo a `CHALLENGE.md` y crea un `README.md` que contenga la descripción necesaria para poder correr tu proyecto tanto en el frontend como el backend (Node Version, dependencias o tecnologías adicionales, etc), además incluye imágenes del proyecto dentro de la descripción. 

Recuerda, tu proyecto podrá ser privado y al final del desarrollo podrás invitarme como colaborador para tener acceso al código y descargarlo.

**Nota:** Los comandos de inicio de del front y back son muy bien recibidos como parte de los scripts del `package.json`.

**Fecha de cierre del challenge:** Todo commit con fecha mayor o igual al 13 de Junio de 2023 inhabilitará este challenge para este proceso de selección de candidatos.

## Tips

No se compliquen, no hagan algo gigantesco, hagan algo que funcione, que sea intuitivo, hagan algo tan extraordinario como ustedes, sin pecar en la complejidad.