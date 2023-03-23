<p align="center">
  <img width="170" src="https://github.com/ablipan/nuxtron/raw/main/public/logo.svg?raw=true">
</p>

# Nuxtron
The best way to create desktop applications with Nuxt and Electron

## Why
1. Develop your app in the browser with hot module replacement and Vue devtools
2. Avoid tedious IPC communication between main and renderer processes
3. Write minimal main process code and restart it less often
4. Care about Electron only when you need to build and distribute your app

## Features

* 🚀 Enjoy all the benefits of Nuxt, such as SSR, server API, code splitting and more
* 📦 Start with a simple template that you can customize to your needs

## Try it now!

### GitHub Template

[Create a repo from this template on GitHub](https://github.com/ablipan/nuxtron/generate).

### Clone to local

If you prefer to do it manually with the cleaner git history

```bash
npx degit ablipan/nuxtron my-nuxt-electron-app
cd my-nuxt-electron-app
pnpm install # You can use any package manager you like
```

## Checklist

When you use this template, try follow the checklist to update your info properly

- [ ] Change the author name in `LICENSE`
- [ ] Change the name,author in `package.json`
- [ ] Change the title in `nuxt.config.ts`
- [ ] Change the title in `electron/main/createWindow.ts`
- [ ] Change the appId,productName in `electron-builder.config.cjs`
- [ ] Change the logo.svg in `public`
- [ ] Clean up the READMEs

And, enjoy :)

## Usage

### Development

Just run and visit http://localhost:3000

```bash
pnpm dev
```

### Build

To build the Nuxt, run

```bash
pnpm build
```

Then to build the Electron app, run

```bash
pnpm electron:build
```

Then package the app, run

```bash
pnpm electron:builder
```

Check the `release` folder for the packaged app.