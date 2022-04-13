import react from '@vitejs/plugin-react'
import { viteCommonjs } from '@originjs/vite-plugin-commonjs'
import {resolve} from "path";

// https://vitejs.dev/config/
export default {
  resolve: {
    alias: {
      // "payrailz-ontrac-client-sdk": resolve(__dirname, 'node_modules/payrailz-ontrac-client-sdk/dist/index.js'),
      "payrailz-ontrac-client-sdk": resolve(__dirname, 'src/jason.js'),
    },
  },
  plugins: [react(), viteCommonjs({
    include: ['payrailz-ontrac-client-sdk']
  })]
}
