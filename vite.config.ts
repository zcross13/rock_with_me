import { defineConfig } from "vite";
import react from "@vitejs/plugin-react";
import path from "path";

// https://vitejs.dev/config/
export default defineConfig({
  plugins: [react()],
  resolve: {
    alias: {
      // Create aliases to simplify imports in your code
      "@": path.resolve(__dirname, "./src"),
    },
  },
  server: {
    // Optionally configure server options here
    port: 3000, // You can change the port if needed
    open: true, // Automatically open the browser when the server starts
  },
  build: {
    // Optionally configure build options here
    outDir: "dist", // Define the output directory
  },
});
