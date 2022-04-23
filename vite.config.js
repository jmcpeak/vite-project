import react from '@vitejs/plugin-react';
import { resolve } from 'path';

// https://vitejs.dev/config/
export default {
  resolve: {
    alias: {
      consts: resolve(__dirname, 'src/consts.js'),
      hooks: resolve(__dirname, 'src/hooks/index.js'),
      './runtimeConfig': './runtimeConfig.browser',
    },
  },
  plugins: [react()],
};
