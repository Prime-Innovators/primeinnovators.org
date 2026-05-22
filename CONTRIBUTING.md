# Contributing to Prime Innovators

First off, thank you for your interest in contributing to Prime Innovators! 🌟 It’s developers like you who make open-source a powerful vehicle for positive change.

This guide outlines our development workflow, coding standards, and repository practices. Following these guidelines helps ensure a smooth, efficient, and professional collaboration.

---

## Code of Conduct

By participating in this project, you agree to abide by our [Code of Conduct](CODE_OF_CONDUCT.md). Please report any unacceptable behavior to the project maintainers.

---

## How Can I Contribute?

### 1. Reporting Bugs
If you find a bug:
- Check the [Issues tracker](https://github.com/Prime-Innovators/primeinnovators.org/issues) to ensure it hasn't already been reported.
- Open a new issue using our **Bug Report** template.
- Provide a clear description, reproduction steps, expected behavior, and environment details (browser, OS).

### 2. Suggesting Features
Have an idea to improve the site?
- Open a new issue using our **Feature Request** template.
- Explain the user problem, your proposed solution, and why it benefits the incubator community.

### 3. Submitting Code Changes (Pull Requests)
We welcome code contributions! Please follow the steps below to set up your environment and submit a Pull Request.

---

## Local Development Workflow

### Step 1: Fork and Clone
1. Fork the repository to your own GitHub account.
2. Clone your fork locally:
   ```bash
   git clone https://github.com/YOUR-USERNAME/primeinnovators.org.git
   cd primeinnovators.org
   ```
3. Add the upstream remote to stay synced with the main repository:
   ```bash
   git remote add upstream https://github.com/Prime-Innovators/primeinnovators.org.git
   ```

### Step 2: Install and Setup
1. Install project dependencies:
   ```bash
   npm install
   ```
2. Copy the example environment file:
   ```bash
   cp .env.example .env
   ```

### Step 3: Branching Strategy
Always create a new branch for your work instead of committing directly to `main`. Use descriptive prefix naming:
- `feature/your-feature-name` (e.g., `feature/contact-form`)
- `bugfix/issue-description` (e.g., `bugfix/nav-overlap`)
- `docs/topic-name` (e.g., `docs/update-installation`)
- `refactor/component-name` (e.g., `refactor/waitlist-form`)

```bash
git checkout -b feature/your-feature-name
```

---

## Coding Standards & Quality

We enforce strict quality gates to keep our codebase clean, maintainable, and uniform.

### 1. Code Formatting & Linting (Biome)
This project uses [Biome.js](https://biomejs.dev/) to format and lint JavaScript, JSX, and JSON files. Before committing, you **must** run the linter and formatter:

- **Check for lint and formatting errors**:
  ```bash
  npm run lint
  ```
- **Automatically fix safe linter/formatter issues**:
  ```bash
  npm run lint:fix
  ```
- **Write code formatting fixes**:
  ```bash
  npm run format:write
  ```

*Tip: We highly recommend installing the [Biome extension](https://biomejs.dev/reference/editors/) for your preferred code editor (VS Code, WebStorm, etc.) to format on save automatically.*

### 2. Build Verification
Before making a Pull Request, ensure that the project compiles successfully:
```bash
npm run build
```
If there are any SSG errors, Vite build warnings, or compilation bugs, resolve them before pushing.

---

## Git Commit & Pull Request Rules

### Commit Messages
We follow the **Conventional Commits** style. This helps automate release logs and keeps history clean:
- `feat: add loading animation to waitlist button`
- `fix: correct typo in footer link`
- `docs: update setup steps in README`
- `style: fix padding on mobile navigation card`
- `refactor: extract form hooks into separate file`

### Submitting a Pull Request
1. Keep your PRs small and focused. Avoid mixing unrelated refactors, bugfixes, and features in a single PR.
2. Push your branch to your GitHub fork.
3. Open a Pull Request from your branch to `Prime-Innovators/primeinnovators.org:main`.
4. Fill out the **Pull Request Template** fully.
5. Ensure the automated **GitHub Actions CI check** passes successfully. (If it fails due to Biome checks or build issues, fix the errors and push again).

### Review Process
- A maintainer will review your Pull Request. 
- Be open to feedback and requests for changes! It's a standard part of the collaborative open-source process.
- Once approved and tests pass, your changes will be merged into `main`.

Thank you again for contributing! Happy coding! 🚀
