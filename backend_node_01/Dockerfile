# Usamos la imagen oficial de Node.js
FROM node:16

# Instala las dependencias de Node.js
WORKDIR /app
COPY package.json package-lock.json ./
RUN npm install

# Instala Python y sus dependencias
RUN apt-get update && apt-get install -y python3 python3-pip
COPY requirements.txt ./
RUN pip3 install --no-cache-dir -r requirements.txt

# Copia todo el código de la aplicación
COPY . .

# Especifica el comando para ejecutar la aplicación
CMD ["npm", "start"]
