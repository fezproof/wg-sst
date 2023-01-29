import solid from "solid-start/vite";
import { defineConfig } from "vite";

// @ts-ignore
import aws from "solid-start-aws";

export default defineConfig({
  plugins: [
    solid({
      adapter: aws(),
    }),
  ],
});
