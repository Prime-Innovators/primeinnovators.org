# 🚀 Prime Innovators

> **Pakistan's first open-source incubator.** Building high-impact, community-driven, and transparent platforms to empower developers and accelerate innovation across Pakistan.

[![CI Status](https://github.com/Prime-Innovators/primeinnovators.org/actions/workflows/ci.yml/badge.svg)](https://github.com/Prime-Innovators/primeinnovators.org/actions/workflows/ci.yml)
[![Deployment Status](https://img.shields.io/badge/Deploy-Cloudflare%20Pages-orange?style=flat&logo=cloudflare)](https://primeinnovators.org)
[![License](https://img.shields.io/badge/License-Apache%202.0-blue.svg)](LICENSE)
[![Code Style: Biome](https://img.shields.io/badge/Code%20Style-Biome-60a5fa.svg)](https://biomejs.dev)

---

## 🌟 Vision & Mission

Prime Innovators is dedicated to open-sourcing the startup incubation ecosystem in Pakistan. We bridge the gap between talented developers, recruiters, and mentors by creating tools that measure contributions transparently, visualize development artifacts, and verify developer skills in public.

Our main platform (this repository) serves as the landing hub, onboarding point, and contributor directory.

---

## 🛠️ Tech Stack

This project is built using a modern, performant, and fully type-safe frontend and serverless backend architecture:

### Frontend
- **Framework**: [React 18](https://react.dev/)
- **Build System**: [Vite 5](https://vite.dev/)
- **Static Site Generation (SSG)**: [Vite React SSG](https://github.com/antfu/vite-react-ssg) (For lightning-fast SEO and initial load times)
- **Styling**: [Tailwind CSS v3](https://tailwindcss.com/)
- **SEO Optimization**: [React Helmet Async](https://github.com/staylor/react-helmet-async) & automated sitemap generation

### Backend & Tooling
- **Serverless Runtime**: [Cloudflare Workers & Pages](https://pages.cloudflare.com/) (using Wrangler CLI)
- **Linter & Formatter**: [Biome v2](https://biomejs.dev/) (Sub-millisecond Rust-powered linting and formatting)

---

## 📦 Getting Started

Follow these steps to run the landing page locally on your system.

### Prerequisites
Make sure you have the following installed on your machine:
- **Node.js** (v18.x or higher recommended)
- **npm** (v8.x or higher) or your preferred package manager (pnpm, yarn)

### 1. Clone the Repository
```bash
git clone https://github.com/Prime-Innovators/primeinnovators.org.git
cd primeinnovators.org
```

### 2. Install Dependencies
```bash
npm install
```

### 3. Setup Environment Variables
Create a local `.env` file in the root directory:
```bash
cp .env.example .env
```
*(Optionally adjust variables like `VITE_GA_ID` for local tracking if needed).*

### 4. Start Local Development Server
```bash
npm run dev
```
Open [http://localhost:3000](http://localhost:3000) in your browser. The page will hot-reload as you make changes.

### 5. Build for Production
To test a production-ready Static Site Generated (SSG) bundle:
```bash
npm run build
```
This generates optimized HTML, CSS, and JS assets in the `dist/` directory.

---

## 🤝 Contributing

We love contributions! Prime Innovators is entirely community-funded and open-source. Whether you want to fix a bug, improve UI styles, write documentation, or propose a new feature, you are welcome.

1. Review the [Contributing Guidelines](CONTRIBUTING.md) to understand our Git workflow and code styling rules.
2. Read the [Code of Conduct](CODE_OF_CONDUCT.md) to align with community standards.
3. Check out the open [Issues](https://github.com/Prime-Innovators/primeinnovators.org/issues) for topics labeled `good first issue` or `help wanted`.

---

## 🛡️ License

This project is licensed under the Apache License 2.0. See the [LICENSE](LICENSE) file for details.
