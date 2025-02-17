import { defineConfig } from 'vite';
import injectHTML from 'vite-plugin-html-inject';

export default defineConfig({
  plugins: [injectHTML()],
  build: {
    rollupOptions: {
      input: {
        main: 'index.html',
        wordleGolf: 'projects/wordle-golf/index.html',
        canvasTestCard: 'canvas/test-card/index.html',
        canvasWipeout: 'p5/wipeout/index.html',
        perlinContours: 'p5/perlin-contours/index.html',
      }
    }
  }
});