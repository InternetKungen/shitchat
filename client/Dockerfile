# Använd en officiell Node.js-bild från Docker Hub som grund
FROM node:14

# Skapa en arbetskatalog inuti containern
WORKDIR /app

# Kopiera package.json och package-lock.json för att installera dependencies
COPY package*.json ./

# Installera dependencies med npm
RUN npm install

# Kopiera resten av app-koden till arbetskatalogen i containern
COPY . .

# Kopiera .env filen
COPY .env ./

# Exponera port 4000 där servern kommer att lyssna
EXPOSE 4000

# Kommando för att starta servern
CMD ["npm", "run", "dev"]
