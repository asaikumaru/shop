import { defineConfig } from 'vite'
import svgrPlugin from 'vite-plugin-svgr'
import tsConfigPaths from 'vite-tsconfig-paths'
import react from '@vitejs/plugin-react'

// https://vitejs.dev/config/
export default defineConfig(() => {
  return {
    plugins: [
      react({
        jsxImportSource: '@welldone-software/why-did-you-render', // <-----
      }),
      tsConfigPaths(),
      svgrPlugin(),
      // mkcert(),
    ],
    server: {
      port: 5117,
      // https: true,
    },
  }
})
