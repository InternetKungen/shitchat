# Använd en officiell Node.js-bild från Docker Hub som grund
FROM node:18

# Skapa en arbetskatalog inuti containern
WORKDIR /app

# Kopiera package.json och package-lock.json för att installera dependencies
COPY package*.json ./

# Installera dependencies med npm
RUN npm install

# Kopiera resten av app-koden till arbetskatalogen i containern
COPY . .

# Exponera port 3000 där API-servern kommer att lyssna
EXPOSE 3000

# Kommando för att starta API-servern
CMD ["npm", "run", "dev"]
