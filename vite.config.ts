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
            "antd-mobile",
          ],
          app: ["./src/main.tsx", "./src/App.tsx"],
          icons: ["emoji-mart", "antd-mobile-icons"],
        },
      },
    },
    outDir: "./docs",
    chunkSizeWarningLimit: 600,
  },
  base: "./",
});
