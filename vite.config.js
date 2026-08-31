import { defineConfig } from "vite";
import react from "@vitejs/plugin-react";
import tailwindcss from "@tailwindcss/vite";

// base is "/" because this deploys to the user site jtabron1.github.io
export default defineConfig({
  base: "/",
  plugins: [react(), tailwindcss()],
});
