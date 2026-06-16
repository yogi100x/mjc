import { defineConfig } from 'vite';
import react from '@vitejs/plugin-react';
// base './' keeps asset URLs relative so the build works at any path,
// including GitHub Pages project site (yogi100x.github.io/mjc/).
export default defineConfig({
    base: './',
    plugins: [react()],
});
