import { defineConfig } from 'vite';
import react from '@vitejs/plugin-react';

export default defineConfig({
  plugins: [react()],
  assetsInclude: ['**/*.glb', '**/*.wasm'],
  optimizeDeps: {
    exclude: ['@dimforge/rapier3d-compat']
  }
});
