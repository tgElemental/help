import { defineConfig } from "vite";
import react from "@vitejs/plugin-react";
import basicSsl from "@vitejs/plugin-basic-ssl";

export default defineConfig({
  plugins: [react(), basicSsl()],
  build: {
    rollupOptions: {
      output: {
        manualChunks: {
          // Group your dependencies into a 'vendor' chunk
          vendor: [
            "react",
            "react-dom",
            "react-router-dom",
            "react-transition-group",
            "@twa-dev/sdk",
            "react-microsoft-clarity",
            "antd",
          ],
          app: ["./src/main.tsx", "./src/App.tsx"],
        },
      },
    },
    outDir: "./docs",
    chunkSizeWarningLimit: 500,
  },
  base: "./",
});
