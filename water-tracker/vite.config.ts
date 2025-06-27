import { defineConfig } from 'vite';

export default defineConfig({
  base: '/water-accounting/',
  build: {
    outDir: 'dist',
  },
  plugins: [
    {
      name: 'github-pages-spa-fallback',
      closeBundle: async () => {
        const fs = await import('fs/promises');
        const path = await import('path');
        const indexPath = path.resolve('dist/index.html');
        const fallbackPath = path.resolve('dist/404.html');

        try {
          await fs.copyFile(indexPath, fallbackPath);
        } catch (err) {
          console.error('Failed to copy index.html to 404.html', err);
        }
      },
    },
  ],
});
