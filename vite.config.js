import { defineConfig } from 'vite';
import injectHTML from 'vite-plugin-html-inject';

export default defineConfig({
  plugins: [injectHTML()],
  build: {
    rollupOptions: {
      input: {
        main: 'index.html',
        code: 'code/scrypt/index.html',
        wordleGolf: 'text/wordle-golf/index.html',
        canvasTestCard: 'canvas/test-card/index.html',
        p5Wipeout: 'p5/wipeout/index.html',
        p5PerlinContours: 'p5/perlin-contours/index.html',
        p5ChaosCircles: 'p5/chaos-circles/index.html',
        p5Tadpoles: 'p5/tadpoles/index.html',
      }
    }
  }
});