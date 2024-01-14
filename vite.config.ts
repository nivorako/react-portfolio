import { defineConfig, mergeConfig } from 'vite';
import react from '@vitejs/plugin-react';

// https://vitejs.dev/config/
export default defineConfig({
    plugins: [react()],
    build: {
        chunkSizeWarningLimit: 1000,
    },
    server: {
        host: '0.0.0.0',
    },
});

// const productionConfig = {
//     build: {
//         chunkSizeWarningLimit: 1000,
//     },
// };

// const serverConfig = {
//     server: {
//         host: '0.0.0.0',
//     },
//     // Autres configurations du serveur...
// };

//export default mergeConfig(defaultConfig);