import { defineConfig } from '@rsbuild/core';
import { pluginReact } from '@rsbuild/plugin-react';
import { pluginSass } from '@rsbuild/plugin-sass'

export default defineConfig({
plugins: [pluginReact(), pluginSass()],
  output: {
    polyfill: "usage"
  },
  html: {
    title: "Finowise",
    favicon: "./src/assets/favicon.ico"
  },
  environments: {
    web: {
      source: {
        alias: {
          "@components": "./src/components",
          "@system": "./src/system",
          "@layouts": "./src/layouts",
          "@modules": "./src/modules",
        }
      }
    }
  }
});
