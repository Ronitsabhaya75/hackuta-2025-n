# GitHub Actions Setup

This repository includes 6 separate GitHub Actions workflows that run independently:

## Workflows Created

### 1. Gatekeeper (`gatekeeper.yml`)
- **Trigger**: On PR open, sync, or reopen  
- **Purpose**: Auto-approves workflow runs to bypass manual approval requirement
- **Features**:
  - Automatically approves all workflows for PRs
  - Enables workflows to run without maintainer approval

### 2. Label PRs (`auto-labeler.yml`)
- **Trigger**: On PR open (using pull_request_target)
- **Purpose**: Automatically labels PRs based on changed files using Node.js style config
- **Labels Applied**:
  - `CI Changes` - Config files, package.json, workflows, etc.
  - `JavaScript Changes` - .js, .jsx, .ts, .tsx files
  - `JSON Changes` - .json files
  - `Styles Changes` - CSS/SCSS files
  - `Assets Changes` - Images, fonts, public files
  - `Documentation Changes` - Markdown files

### 3. Lint Check (`lint.yml`)
- **Trigger**: PR to main (using pull_request_target), push to main
- **Purpose**: Runs ESLint checks
- **Features**:
  - Uses pnpm for package management
  - Comments on PR with results
  - Runs automatically without approval

### 4. Build Check (`build.yml`)
- **Trigger**: PR to main (using pull_request_target), push to main
- **Purpose**: Ensures application builds successfully
- **Features**:
  - TypeScript type checking
  - Next.js build process
  - Uploads build artifacts
  - Comments on PR with results
  - Includes placeholder Supabase env vars for build process
  - Runs automatically without approval

### 5. Security Check (`security-check.yml`)
- **Trigger**: PR to main, push to main, weekly schedule
- **Purpose**: Scans for security vulnerabilities and performs code analysis
- **Features**:
  - npm audit for dependency vulnerabilities
  - CodeQL analysis for code security issues
  - Comments on PR with security findings
  - Weekly scheduled scans

### 6. Workflow Reporter (`workflow-reporter.yml`)
- **Trigger**: When other workflows complete
- **Purpose**: Provides consolidated reporting of all workflow results
- **Features**:
  - Creates/updates a status table in PR comments
  - Shows status, duration, and links for each workflow
  - Real-time updates as workflows complete

## Labels to Create

Create these labels in your GitHub repository:
- `CI Changes` (color: #0052cc)
- `JavaScript Changes` (color: #f1e05a)
- `JSON Changes` (color: #292929)
- `Styles Changes` (color: #563d7c)
- `Assets Changes` (color: #89e051)
- `Documentation Changes` (color: #083fa1)

All workflows are independent and will run based on their specific triggers.
