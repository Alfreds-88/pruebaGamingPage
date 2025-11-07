# pruebaGamingPage - Apache + MySQL con Docker

Este repositorio incluye un Dockerfile y un `docker-compose.yml` para levantar un servidor Apache que sirve los archivos estáticos del proyecto y una base de datos MySQL.

## Qué contiene

- `Dockerfile` - imagen basada en `httpd:2.4-alpine` que copia los archivos del proyecto a Apache.
- `docker-compose.yml` - define dos servicios:
  - `web`: construye la imagen Apache y expone el puerto 8080 en el host.
  - `db`: utiliza `mysql:8.0` con volúmen persistente.
- `.dockerignore` - archivos ignorados al construir la imagen.

## Credenciales por defecto (cámbialas antes de producción)

- MySQL root: `rootpassword`
- MySQL database: `gamingdb`
- MySQL user: `gamer`
- MySQL password: `gamerpassword`

## Cómo ejecutar (requerimientos)

Necesitas tener Docker y Docker Compose instalados.

1. Construir y levantar los servicios:

```powershell
# desde la carpeta del proyecto
docker-compose up --build -d
```

2. Abrir el sitio web en tu navegador:

- http://localhost:8080

3. Conectar a MySQL (por ejemplo usando MySQL Workbench, DBeaver o la CLI):

Host: localhost
Puerto: 3306
Usuario: gamer
Contraseña: gamerpassword

## Notas y recomendaciones

- Cambia las contraseñas de MySQL en `docker-compose.yml` antes de usar en producción.
- En el `docker-compose.yml` se monta el directorio del proyecto sobre la carpeta de Apache en modo lectura (`:ro`) para desarrollo; quita `:ro` si necesitas que el contenedor escriba en el volumen.
- Para reiniciar la base de datos y limpiar datos, detén los servicios y borra el volumen `db_data`:

```powershell
docker-compose down -v
```

## Validación rápida

- Después de `docker-compose up` deberías ver los contenedores corriendo con `docker ps`.
- El sitio (index.html) se serve en `http://localhost:8080`.

Si quieres, puedo:
- Añadir un servicio phpMyAdmin para administrar MySQL desde el navegador.
- Usar una imagen de Apache + PHP si necesitas lógica del lado del servidor.
- Crear un `Dockerfile` que también instale PHP y extensiones (si es necesario).
