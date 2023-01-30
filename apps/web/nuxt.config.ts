import path from 'path';
import tsconfigPaths from 'vite-tsconfig-paths';
import fullReload from 'vite-plugin-full-reload';

const resolve = (p: string) => path.resolve(__dirname, p);
const workspaceDir = (p?: string) => resolve(`../../${p}`);

// https://nuxt.com/docs/api/configuration/nuxt-config
export default defineNuxtConfig({
    modulesDir: [workspaceDir('node_modules')],
    buildDir: workspaceDir('dist/.nuxt-web'),
    srcDir: './src',

    vite: {
        plugins: [
            tsconfigPaths({
                projects: [workspaceDir('tsconfig.base.json')],
            }),
            fullReload([workspaceDir('libs/**/*')]),
        ],
    },

    typescript: {
        tsConfig: {
            extends: workspaceDir('tsconfig.base.json'),
        },

        typeCheck: true,
    },
});
