import { defineConfig } from "vitest/config";

export default defineConfig({
  base: "./src/",
  test: {
    // coverage: {
    //   // reporter: ["text", "json", "html"],
    //   provider: "c8" // "istanbul" or "c8" Default "c8"
    // },
    globals: true /* auto global imported describe, test, expect */
  }
});
