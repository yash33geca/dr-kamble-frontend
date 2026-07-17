import { defineConfig, loadEnv } from 'vite'
import react from '@vitejs/plugin-react'

export default defineConfig(({ mode }) => {
  const env = loadEnv(mode, process.cwd(), '')
  const functionsOrigin = env.VITE_FUNCTIONS_EMULATOR_ORIGIN || 'http://127.0.0.1:5001'
  const functionsProjectId = env.VITE_FUNCTIONS_PROJECT_ID || env.VITE_FIREBASE_PROJECT_ID || 'my-doctor-d9d7b'
  const functionsRegion = env.VITE_FUNCTIONS_REGION || 'us-central1'

  return {
    plugins: [react()],
    server: {
      proxy: {
        '/api/google-reviews': {
          target: functionsOrigin,
          changeOrigin: true,
          rewrite: () => `/${functionsProjectId}/${functionsRegion}/googleReviews`,
        },
      },
    },
  }
})
