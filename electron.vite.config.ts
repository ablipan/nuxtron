import { resolve } from 'node:path'
import { defineConfig, externalizeDepsPlugin } from 'electron-vite'

// see: https://evite.netlify.app/config/
export default defineConfig({
  main: {
    plugins: [
      externalizeDepsPlugin(),
    ],
    build: {
      outDir: resolve(__dirname, '.output/electron/main'),
      rollupOptions: {
        input: {
          index: resolve(__dirname, 'electron/main/index.ts'),
        },
        output: {
          entryFileNames: '[name].cjs',
        },
      },
    },
  },
})
