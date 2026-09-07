# TaskPulse Product Documentation

> Official documentation site for **TaskPulse** — a fast, lightweight developer task & workflow automation CLI.
>
> 🌐 **Live GitHub Pages Documentation**: [https://anumitaray.github.io/product-docs/](https://anumitaray.github.io/product-docs/)

---

## 📚 Documentation Sections

- **[Product Overview](https://anumitaray.github.io/product-docs/docs/intro)**: Architecture, features, and core philosophy.
- **[Getting Started](https://anumitaray.github.io/product-docs/docs/getting-started)**: 5-minute quickstart tutorial.
- **[Installation Guide](https://anumitaray.github.io/product-docs/docs/installation)**: Setup across macOS, Linux, and Windows via npm, Homebrew, and shell scripts.
- **[User Guide](https://anumitaray.github.io/product-docs/docs/user-guide)**: Full CLI reference, automation hooks, configuration specs, and FAQs.

---

## 🛠️ Local Development

### Prerequisites
- Node.js (v18.0.0 or higher)
- npm or yarn

### Installation
```bash
npm install
```

### Start Development Server
```bash
npm start
```
The site will run locally at `http://localhost:3000/product-docs/`.

### Build for Production
```bash
npm run build
```
Generated static assets are emitted into the `build/` directory.

---

## 🚀 GitHub Pages Deployment

The documentation site is automatically built and deployed to GitHub Pages via the GitHub Actions workflow in `.github/workflows/deploy.yml` on every push to `main`.
