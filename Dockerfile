# Dockerfile para servir archivos estáticos con Apache
# Usamos la imagen ligera de httpd (Apache) sobre Alpine
FROM httpd:2.4-alpine

LABEL maintainer="pruebaGamingPage <no-reply@example.com>"

# Copiamos los archivos del sitio al directorio por defecto de Apache
# Si quieres montar en desarrollo, docker-compose tiene un volumen que sobreescribe esto.
COPY ./ /usr/local/apache2/htdocs/

# Exponer el puerto 80
EXPOSE 80

# Comando por defecto ya está definido en la imagen base (httpd -D FOREGROUND)

# Nota: para añadir PHP u otras dependencias, sería mejor usar una imagen con PHP o crear un Dockerfile más complejo.
