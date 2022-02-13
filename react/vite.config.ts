import { defineConfig } from "vite";
import react from "@vitejs/plugin-react";

// https://vitejs.dev/config/
export default defineConfig(({ command }) => {
  if (command === "build") {
    return {
      base: "/dungeonist/",
      plugins: [react()],
      build: {
        // Required to support top-level await
        target: "esnext",
      },
    };
  }

  return { plugins: [react()] };
});
