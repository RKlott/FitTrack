import { defineConfig } from 'vite';
import react from '@vitejs/plugin-react';
import tailwindcss from '@tailwindcss/vite';

// https://vite.dev/config/
export default defineConfig({
  plugins: [react(), tailwindcss()],

  server: {
      host: '0.0.0.0',
      // OBLIGATOIRE avec Docker :
      // Par défaut, Vite écoute sur 127.0.0.1 (loopback)
      // Avec 0.0.0.0, il écoute sur toutes les interfaces
      // → accessible depuis l'extérieur du container

      port: 3000,
      // Port du serveur de développement Vite

      watch: { // Force vite à garder l'oeil ouvert sur les modifications front
      usePolling: true,
      interval: 100, // Vérifie les changements toutes les 100ms
    },

      hmr: {
      clientPort: 80, // Dit à Vite d'envoyer le signal de reload via le port 80 de Nginx
    },

      proxy: {
        '/api': {
          target: 'http://backend:5000',
          // "backend" = nom du service Docker Compose
          // Toutes les requêtes /api/* sont redirigées vers Node.js
          changeOrigin: true,
          // Nécessaire pour que le header Host soit correct
        },
        
      },
    },
  })