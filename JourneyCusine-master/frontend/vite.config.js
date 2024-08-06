import { defineConfig } from 'vite';
import react from '@vitejs/plugin-react';
import { nodeResolve } from '@rollup/plugin-node-resolve';
import commonjs from '@rollup/plugin-commonjs';
import replace from '@rollup/plugin-replace';

export default defineConfig({
  plugins: [
    react(),
    nodeResolve({
      browser: true,
      extensions: ['.js', '.jsx', '.json']
    }),
    commonjs(),
    replace({
      'process.env.NODE_ENV': JSON.stringify('development'), // or 'production'
      preventAssignment: true,
    })
  ],
  build: {
    rollupOptions: {
      external: ['redux', 'redux-logger', 'redux-thunk', 'react-redux']
    }
  }
});
