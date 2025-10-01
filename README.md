# React + Vite + SCSS + Storybook Starter

A modern starter using **React**, **Vite**, **TypeScript**, **SCSS**, **ESLint**, **Prettier**, and **Storybook**.

> **Requirements:** Node.js 18+ and npm 9+ recommended.

---

## 🚀 Getting Started

### 1) Install dependencies
```bash
npm install
```

### 2) Start the dev server
```bash
npm run dev
```
- App runs at: http://localhost:5173

---

## 📖 Storybook

### Start Storybook
```bash
npm run storybook
```
- Storybook runs at: http://localhost:6006

### Build Storybook (static docs)
```bash
npm run build-storybook
```
- Output: `storybook-static/` (can be deployed to any static host)

---

## 🧹 Linting & Formatting

### Lint
```bash
npm run lint
```

### Format
```bash
npm run format
```

---

## 📦 Build & Preview (App)

### Production build
```bash
npm run build
```
- Output: `dist/`

### Preview the production build locally
```bash
npm run preview
```
- Preview runs at: http://localhost:4173

---

## 🚢 Deployment

You deploy the **app** by uploading the `dist/` folder; deploy **Storybook** by uploading the `storybook-static/` folder.

### Vercel (App)
1. Run `npm run build` locally or let Vercel build.
2. Framework: **Vite** (or Other → Output Directory: `dist`).
3. Deploy.

### Netlify (App)
1. New site → **Import from Git**.
2. Build command: `npm run build`
3. Publish directory: `dist`
4. Deploy.

### GitHub Pages (App)
1. Build: `npm run build`
2. Push `dist/` to a `gh-pages` branch (e.g. via `gh-pages` npm package) or configure an action to publish `dist/`.

### GitHub Pages (Storybook)
1. Build: `npm run build-storybook`
2. Publish `storybook-static/` to `gh-pages` (or a dedicated docs branch).

---

## 🗂 Project Structure

```
.
├─ .storybook/            # Storybook configuration
├─ public/                # Static assets
├─ src/
│  ├─ components/
│  │  └─ Button/
│  │     ├─ Button.module.scss
│  │     ├─ Button.stories.tsx
│  │     └─ Button.tsx
│  ├─ styles/
│  │  ├─ _mixins.scss
│  │  ├─ _variables.scss
│  │  └─ global.scss
│  ├─ App.tsx
│  └─ main.tsx
├─ index.html
├─ package.json
├─ tsconfig.json
└─ vite.config.ts
```

---

## 🔧 Notes

- SCSS variables & mixins are auto-injected via `vite.config.ts` (`additionalData`), so you can use them without importing in every file.
- Storybook (Vite builder) respects your Vite aliases and SCSS setup out of the box.
- To switch to plain JS, rename `*.ts(x)` to `*.js(x)` and remove TypeScript deps/config.
