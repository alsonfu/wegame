import type { UserConfig, ConfigEnv } from "vite";
import { loadEnv } from "vite";
import { createProxy } from './build/vite/proxy';
import { createVitePlugins } from "./build/vite/plugin";
import { wrapperEnv } from "./build/utils";
import { resolve } from "path";
// https://vitejs.dev/config/
function pathResolve(dir: string) {
  return resolve(process.cwd(), ".", dir);
}
export default ({ command, mode }: ConfigEnv): UserConfig => {
  const root = process.cwd();
  const isBuild = command === "build";
  const env = loadEnv(mode, root);
  const viteEnv = wrapperEnv(env);
  return {
    server: {
      // Listening on all local IPs
      host: true,
      port: viteEnv.VITE_PORT,
      // Load proxy configuration from .env
      proxy: createProxy([["/basic-api","http://192.168.31.64:8080"]]),
    },
    resolve: {
      alias: [
        {
          find: /\/#\//,
          replacement: pathResolve("types") + "/",
        },
        {
          find: "@",
          replacement: pathResolve("src") + "/",
        },
      ],
    },
    css: {
      preprocessorOptions: {
        // 全局引入了 scss 的文件
        scss: {
          // 添加你的全局共享scss文件
          additionalData: ``,
          javascriptEnabled: true,
        },
      },
      postcss: {},
    },
    plugins: createVitePlugins(viteEnv, isBuild),
  };
};
