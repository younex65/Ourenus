import { defineConfig } from "vite";
import react from "@vitejs/plugin-react";
import { viteSingleFile } from "vite-plugin-singlefile";

export default defineConfig(() => {
  return {
    plugins: [react(), viteSingleFile()],
    build: {
      outDir: "build",
      sourcemap: false,
      target: "esnext",
      assetsInlineLimit: 100000000,
      cssCodeSplit: false,
    },
  };
});
