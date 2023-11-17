# test_karnameh

## Description

This is a Next.js project that serves as test_karnameh. It includes a JSON server deployed on [https://api-wgi1.onrender.com](https://api-wgi1.onrender.com) to handle data. The frontend is deployed on Vercel at [https://test-karnameh.vercel.app/](https://test-karnameh.vercel.app/).

## Getting Started

To get started with the project, follow these instructions:

1. Clone the repository:

    ```bash
    git clone git@github.com:sarmadiAli/test_karnameh.git
    ```

2. Install dependencies:

    ```bash
    npm install
    ```

3. Run the development server:

    ```bash
    npm run dev
    ```

## CI/CD Workflow

The project has a CI/CD workflow set up with GitHub Actions for Vercel. The workflow consists of 7 jobs:

1. **Checkout Source**: Clones the repository to the GitHub Actions runner.

2. **Run Dev on npm run dev**: Executes the development server.

3. **Install Vercel CLI**: Installs the Vercel CLI to interact with Vercel during the workflow.

4. **Install Packages**: Installs project dependencies.

5. **Check lint**: Checks the codebase for linting issues.

6. **Run Test**: Executes tests using the command `npm run test`.

7. **Pull Vercel Environment Information, Build Project Artifacts, Deploy Project Artifacts to Vercel**: These jobs handle the deployment process to Vercel.

## Pre-commit and Pre-push Hooks

The project is configured with pre-commit and pre-push hooks using the Husky package. This ensures that linting and tests are run before committing and pushing changes.

To manually run tests:

```bash
npm run test
