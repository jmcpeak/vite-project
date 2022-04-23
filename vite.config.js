import react from '@vitejs/plugin-react';
import { resolve } from 'path';

// https://vitejs.dev/config/
export default {
  optimizeDeps: {
    esbuildOptions: {
      // Node.js global to browser globalThis
      define: {
        global: 'globalThis', // <-- AWS SDK
      },
    },
  },
  plugins: [react()],
  resolve: {
    alias: {
      consts: resolve(__dirname, 'src/consts.js'),
      hooks: resolve(__dirname, 'src/hooks/index.js'),
      './runtimeConfig': './runtimeConfig.browser', // <-- AWS SDK
    },
  },
  test: {
    globals: true,
    environment: 'jsdom',
    setupFiles: './src/setupTests.js',
  },
};
