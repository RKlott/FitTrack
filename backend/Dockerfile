FROM node:20-alpine
# Image de base : Node.js 20 LTS sur Alpine Linux (ultra-légère ~50Mo)
# Téléchargée depuis Docker Hub au premier build

WORKDIR /app
# Tous les fichiers seront dans /app à l'intérieur du container

COPY package*.json ./
# ÉTAPE 1 : On copie d'abord UNIQUEMENT les fichiers de dépendances.
# C'est cette étape placée ici qui permet de bénéficier du cache de Docker !

RUN npm install
# ÉTAPE 2 : On installe les modules. 
# Docker ne réexécutera cette ligne que si tu modifies ton package.json.

COPY . .
# ÉTAPE 3 : On copie tout le reste du code source (les dossiers, server.js, etc.) dans /app.

EXPOSE 5000
# Documentation : ce container utilise le port 5000
# (la vraie exposition est dans docker-compose.yml)

CMD ["npm", "run", "dev"]
# Commande lancée au DÉMARRAGE du container
# npm run dev = nodemon server.js (redémarre à chaque modif)