# --- ETAPA 1: CONSTRUCCIÓN (BUILD) ---
# IMPORTANTE: "as build" define el nombre que usaremos después
FROM node:24.12.0-alpine as build

WORKDIR /app

# Copiamos archivos de dependencias
COPY package*.json ./

# Instalamos dependencias
RUN npm install

# Copiamos el código fuente
COPY . .

# Generamos la carpeta 'dist'
RUN npm run build

# --- ETAPA 2: SERVIDOR (NGINX) ---
FROM nginx:alpine

# Copiamos desde la etapa llamada "build"
COPY --from=build /app/dist /usr/share/nginx/html

# Copiamos la configuración de nginx
COPY nginx.conf /etc/nginx/conf.d/default.conf

EXPOSE 80

CMD ["nginx", "-g", "daemon off;"]