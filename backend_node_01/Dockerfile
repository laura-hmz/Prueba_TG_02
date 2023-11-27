FROM node:16
WORKDIR /app
COPY package.json package-lock.json ./
RUN npm install
RUN apt-get update && apt-get install -y python3 python3-pip python3-dev libblas-dev liblapack-dev gfortran
COPY requirements.txt ./
RUN pip3 install --no-cache-dir -r requirements.txt
COPY . .
EXPOSE 3000
CMD ["npm", "start"]