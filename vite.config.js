import { defineConfig } from 'vite';
import { resolve } from 'path';

export default defineConfig({
  build: {
    rollupOptions: {
      input: {
        main: resolve(__dirname, 'index.html'),
        reserve: resolve(__dirname, 'reserve-section.html'),
        finish: resolve(__dirname, 'finish-booking.html'),
      },
    },
  },
});
