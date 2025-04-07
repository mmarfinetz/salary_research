import { defineConfig } from "vite";
import react from "@vitejs/plugin-react";


export default defineConfig({
  plugins: [react()],
  base: '/salary_research/', // Add this line - must match your repo name
  // other config options...
})
