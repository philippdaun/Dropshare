import { defineConfig } from "vite"
import { viteSingleFile } from "vite-plugin-singlefile"

export default defineConfig({
  plugins: [
    viteSingleFile({ removeViteModuleLoader: true })
  ],
  root: 'src',
  build: {
    outDir: '../dist'
  }
})
