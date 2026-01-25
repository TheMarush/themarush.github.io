import { defineConfig } from "vite";

export default defineConfig({
  build: {
    outDir: "dist",
    sourcemap: false,
    minify: "esbuild",
    cssMinify: "esbuild",
  },
  // Optimize dev server for better performance
  server: {
    // Reduce HMR overhead
    hmr: {
      overlay: false, // Disable error overlay for better performance
    },
  },
  // Optimize dependencies in dev mode
  optimizeDeps: {
    // Pre-bundle dependencies for faster dev server startup
    include: ["lit"],
  },
});
