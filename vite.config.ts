import { defineConfig } from "vite";
import react from "@vitejs/plugin-react";

// https://vitejs.dev/config/
export default defineConfig({
  base: "/food_ordering_app_tsx/",
  plugins: [react()],
});
