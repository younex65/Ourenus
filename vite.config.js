import { defineConfig } from "vite";
import react from "@vitejs/plugin-react";
import javascriptObfuscator from "rollup-plugin-obfuscator";
import { viteSingleFile } from "vite-plugin-singlefile";

export default defineConfig(({ mode }) => {
  return {
    plugins: [
      react(),
      viteSingleFile(),
      mode === "production" &&
        javascriptObfuscator({
          rotateStringArray: true,
        }),
    ].filter(Boolean),
    build: {
      outDir: "build",
      sourcemap: false,
      target: "esnext",
      assetsInlineLimit: 100000000,
      cssCodeSplit: false,
      rollupOptions: {
        output: {
          inlineDynamicImports: true,
        },
      },
    },
  };
});
