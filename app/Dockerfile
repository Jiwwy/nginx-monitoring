FROM node:16

# Establecemos el directorio de trabajo
WORKDIR /app

# Copiamos los archivos de la aplicación
COPY . /app

# Instalamos las dependencias
RUN npm install

# Exponemos el puerto donde la app va a correr
EXPOSE 3000

# Comando para arrancar la app
CMD ["node", "server.js"]
