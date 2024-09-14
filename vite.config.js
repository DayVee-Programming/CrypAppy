import { defineConfig } from "vite";
import vue from "@vitejs/plugin-vue";

function viteIgnoreStaticImport(importKeys) {
  return {
    name: "vite-plugin-ignore-static-import",
    enforce: "pre",
    config(config) {
      config.optimizeDeps = {
        ...(config.optimizeDeps ?? {}),
        exclude: [...(config.optimizeDeps?.exclude ?? []), ...importKeys],
      };
    },
    configResolved(resolvedConfig) {
      const VALID_ID_PREFIX = `/@id/`;
      const reg = new RegExp(
        `${VALID_ID_PREFIX}(${importKeys.join("|")})`,
        "g"
      );
      resolvedConfig.plugins.push({
        name: "vite-plugin-ignore-static-import-replace-idprefix",
        transform: (code) =>
          reg.test(code) ? code.replace(reg, (m, s1) => s1) : code,
      });
    },
    resolveId: (id) => {
      if (importKeys.includes(id) || id === "vue") {
        return { id, external: true };
      }
    },
  };
}

// https://vitejs.dev/config/
export default defineConfig({
  plugins: [vue(), viteIgnoreStaticImport(["vuetify"])],
});
