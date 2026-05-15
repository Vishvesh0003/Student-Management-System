import { defineConfig } from "vite";
import react from "@vitejs/plugin-react";
import path from "path"; // Frontend restart triggered!

export default defineConfig({
  plugins: [react()],
  resolve: {
    alias: {
      "@": path.resolve(__dirname, "./src"),
      "@student": path.resolve(__dirname, "./src/student"),
      "@teacher": path.resolve(__dirname, "./src/teacher"),
      "@admin": path.resolve(__dirname, "./src/admin"),
    },
  },
  build: {
    chunkSizeWarningLimit: 700,
    rollupOptions: {
      output: {
        manualChunks(id) {
          if (!id.includes("node_modules")) return undefined;

          if (id.includes("recharts") || id.includes("d3-")) {
            return "vendor-charts";
          }

          if (
            id.includes("@headlessui") ||
            id.includes("@radix-ui") ||
            id.includes("react-day-picker")
          ) {
            return "vendor-ui";
          }

          if (id.includes("axios") || id.includes("socket.io-client")) {
            return "vendor-network";
          }

          return undefined;
        },
      },
    },
  },
});
