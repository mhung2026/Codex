# Codex - Alliance Software CI/CD

This repository demonstrates a simple Continuous Integration and Deployment (CI/CD) pipeline for the Alliance Software Company.
The example uses GitHub Actions to run a script on every push or pull request.

## Repository Structure
- `frontend/` – Simple React app showcasing UI.

- `scripts/hello.sh` – Sample build step executed by the pipeline.
- `.github/workflows/ci.yml` – GitHub Actions workflow configuration.

## How it works

1. When you push changes, GitHub Actions triggers the workflow defined in `ci.yml`.
2. The workflow checks out the repository and runs `scripts/hello.sh`.
3. The workflow runs `npm run build` inside `frontend/` to demonstrate building the React app.

This minimal setup can be extended to include testing, building and deployment steps tailored to your project.
