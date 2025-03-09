import { defineConfig } from "vite";
import react from "@vitejs/plugin-react";

// https://vite.dev/config/
export default defineConfig({
  plugins: [react()],
  build: {
    outDir: "dist",
    rollupOptions: {
      output: {
        entryFileNames: "widget.js", // Ensure output file is always named "widget.js"
        assetFileNames: "assets/[name].[ext]", // Keeps assets in a separate folder
      },
    },
  },
});
