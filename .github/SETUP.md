# GitHub Actions Setup

This repository includes 3 separate GitHub Actions workflows that run independently:

## Workflows Created

### 1. Auto Labeler (`auto-labeler.yml`)
- **Trigger**: On PR open, sync, or reopen
- **Purpose**: Automatically labels PRs based on changed files
- **Labels Applied**:
  - `CI Changes` - Config files, package.json, etc.
  - `JavaScript Changes` - .js, .jsx, .ts, .tsx files
  - `JSON Changes` - .json files
  - `Styles Changes` - CSS/SCSS files
  - `Assets Changes` - Images, fonts, public files
  - `Documentation Changes` - Markdown files

### 2. Lint Check (`lint.yml`)
- **Trigger**: PR to main, push to main (JS/TS files only)
- **Purpose**: Runs ESLint checks
- **Features**:
  - Uses pnpm for package management
  - Comments on PR with results
  - Only runs when relevant files change

### 3. Build Check (`build.yml`)
- **Trigger**: PR to main, push to main
- **Purpose**: Ensures application builds successfully
- **Features**:
  - TypeScript type checking
  - Next.js build process
  - Uploads build artifacts
  - Comments on PR with results
  - Includes placeholder Supabase env vars for build process

## Labels to Create

Create these labels in your GitHub repository:
- `CI Changes` (color: #0052cc)
- `JavaScript Changes` (color: #f1e05a)
- `JSON Changes` (color: #292929)
- `Styles Changes` (color: #563d7c)
- `Assets Changes` (color: #89e051)
- `Documentation Changes` (color: #083fa1)

All workflows are independent and will run based on their specific triggers.
