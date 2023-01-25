# Nuxt Monorepo starter
## NX | Nuxt 3 | TypeScript 

## Description

Monorepo template with NX Workspaces, Nuxt 3 and TypeScript.

* [NX workspace](https://nx.dev/getting-started/intro) to manage monorepo
* Nuxt application and Shared/Utils module packages 
* Front-end package: [Nuxt 3](https://nuxt.com/docs)
* Shared package: shared code used in all packages

## Prerequisites

Suggest to install globally in dev environment:

- [nx](https://nx.dev)

## Quick start

```bash

# 1. Clone the repository
git clone https://github.com/DhivinX/nx-nuxt-starter.git

# 2. Enter your newly-cloned folder
cd nx-nuxt-starter

# 3. Install the project and build packages in libs folder
npm install

# 4. Or run apps with hot reload parallel
npm run apps:dev

```


## Volar and Visual Studio Code (Takeover Mode)

* Install [Volar](https://marketplace.visualstudio.com/items?itemName=vue.volar) extension
* In your project workspace, bring up the command palette with Ctrl + Shift + P (macOS: Cmd + Shift + P).
* Type built and select "Extensions: Show Built-in Extensions".
* Type typescript in the extension search box (do not remove @builtin prefix).
* Click the little gear icon of "TypeScript and JavaScript Language Features", and select "Disable (Workspace)".
* Reload the workspace. Takeover mode will be enabled when you open a Vue or TS file.

More info here: https://vuejs.org/guide/typescript/overview.html#takeover-mode

## Top-Level Scripts
 
* `apps:dev` - run all apps simultaneously with hot reload
* `web:dev` - run front-end with hot reload
* `build` - build all packages
* `clean` - clean all packages
* `lint` - lint all packages

## Visual Studio Code extensions

```json

{
  "recommendations": [
    "nrwl.angular-console",
    "vue.volar",
    "dbaeumer.vscode-eslint",
    "editorconfig.editorconfig",
    "syler.sass-indented",
    "eamodio.gitlens",
    "donjayamanne.githistory",
    "aaron-bond.better-comments",
    "visualstudioexptteam.vscodeintellicode",
    "pkief.material-icon-theme"
  ]
}

```

### Required

* `nrwl.angular-console` - Nx Console
* `vue.volar` - Vue Language Features (Volar)
* `syler.sass-indented` - Sass syntax highlighting.
* `dbaeumer.vscode-eslint` - VS Code ESLint extension.
* `editorconfig.editorconfig` - EditorConfig for VS Code.

### Optional

* `eamodio.gitlens` - GitLens - Git supercharged.
* `donjayamanne.githistory` - Git History
* `visualstudioexptteam.vscodeintellicode` - IntelliCode
* `pkief.material-icon-theme` - Material Icon Theme in VS Code
* `aaron-bond.better-comments` - Better Comments

## Enhancements and Bug Reports

If you find a bug, or have an enhancement in mind please post [issues](https://github.com/DhivinX/nx-nuxt-starter/issues) on GitHub.

## License

MIT
