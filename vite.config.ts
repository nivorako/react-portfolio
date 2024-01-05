import { defineConfig, mergeConfig } from 'vite';
import react from '@vitejs/plugin-react';

// https://vitejs.dev/config/
const defaultConfig  = defineConfig({
    plugins: [react()],
});

const productionConfig = {
    build: {
        chunkSizeWarningLimit: 1000,
    },
};

export default mergeConfig(defaultConfig, productionConfig);