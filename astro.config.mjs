import { defineConfig } from 'astro/config';
import mdx from '@astrojs/mdx';
import sitemap from '@astrojs/sitemap';

// https://astro.build/config
import tailwind from "@astrojs/tailwind";
import solidJs from "@astrojs/solid-js";

// https://astro.build/config

// https://astro.build/config
export default defineConfig({
  site: 'https://gekidantknssk.netlify.app/',
  markdown: { drafts: true },
  integrations: [mdx(), sitemap(), tailwind(), solidJs()]
});