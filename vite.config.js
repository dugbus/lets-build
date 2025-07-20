import { defineConfig } from 'vite';
import injectHTML from 'vite-plugin-html-inject';

export default defineConfig({
  plugins: [injectHTML()],
  build: {
    rollupOptions: {
      input: {
        main: 'index.html',
        p5CrowdedHouse: 'en/crowded-house/index.html',
        p5PerlinContours: 'en/perlin-contours/index.html',
        p5Tadpoles: 'en/tadpoles/index.html',
        canvasTestCard: 'en/test-card/index.html',
        p5Wipeout: 'en/wipeout/index.html',
        canvasChalkyWalkers: 'en/chalky-walkers/index.html',
      }
    }
  }
});