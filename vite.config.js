import { defineConfig } from 'vite';
import tailwindcss from '@tailwindcss/vite';

export default defineConfig({
  plugins: [
    tailwindcss(),
  ],
  build: {
    rollupOptions: {
      input: {
        main: 'index.html',
        notFound: '404.html',
        brand: 'brand/index.html',
        posters: 'posters/index.html'
      },
    },
  },
});