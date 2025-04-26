import { defineConfig } from "astro/config";
import tailwind from "@astrojs/tailwind";

export default defineConfig({
  integrations: [
    tailwind(/* opcional: aquí podés pasar tu config de Tailwind */),
  ],
  // ...otras opciones
});
