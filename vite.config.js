import { defineConfig } from "vite";
import react from "@vitejs/plugin-react";
import path from "path";
import { fileURLToPath } from "url";

const __filename = fileURLToPath(import.meta.url);
const __dirname = path.dirname(__filename);
const createPath = (dirName) => path.resolve(__dirname, `src/${dirName}`);
// components => /你的项目路径/src/components

// https://vite.dev/config/
export default defineConfig({
  plugins: [
    react({
      jsxRuntime: "automatic",
      fastRefresh: true, // Enable Fast Refresh for React components，just use for development, it will be removed in production build
    }),
  ],
  server: {
    port: 3000,
  },
  resolve: {
    alias: {
      "@": createPath(""), // src/, 项目根目录
      "@components": createPath("components"), // src/components, 组件目录
      "~img": createPath("assets/images"), // src/assets/images, 图片目录
      "#types": createPath("/types"), // src/types, 类型目录
    },
  },
});
