import tailwind from "@astrojs/tailwind";
import icon from "astro-icon";
import { defineConfig } from "astro/config";

export default defineConfig({
  site: "https://essenceofyou.care/",
  integrations: [tailwind(), icon()],
});
