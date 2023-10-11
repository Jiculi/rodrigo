import { defineConfig } from 'astro/config';

import sanity from "astro-sanity";

// https://astro.build/config
export default defineConfig({
  integrations: [sanity({
    projectId: "cby784h6",
    dataset: "production",
    apiVersion: "2021-03-25",  //"2023-02-08",
    useCdn: true
  })]
});