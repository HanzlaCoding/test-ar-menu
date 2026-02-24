import { defineConfig } from 'vite';
import react from '@vitejs/plugin-react';
import tailwindcss from '@tailwindcss/vite';
import basicSsl from '@vitejs/plugin-basic-ssl';

export default defineConfig({
    plugins: [
        react(),
        tailwindcss(),
        // Enables self-signed HTTPS — required for WebXR camera AR on mobile
        basicSsl(),
    ],
    server: {
        host: true,   // expose to your local network (WiFi) so phone can reach it
        https: true,  // serve over HTTPS
    },
});
