# Deploy with GitHub and Vercel

## Preferred: Vercel Git integration
1. Create a separate GitHub repository for the generated site.
2. Ensure it has a root `index.html` or document the static output directory.
3. Import the GitHub repository in Vercel.
4. For plain HTML/CSS/JS, no build command is normally needed. Set the output directory to the project root (or actual static output folder).
5. Confirm the production branch, usually `main`.
6. Pushes to connected branches can create previews; pushes/merges to the production branch can create production deployments.
7. Verify deployment status and URL before reporting success.

Vercel documents automatic Git deployments and previews: https://vercel.com/docs/git

## Constraints
- GitHub access does not automatically grant Vercel access.
- Never claim a Vercel project is connected unless confirmed.
- A successful Git push is not proof of a successful deployment.
- Never put Vercel tokens or API keys in source files.
- If Vercel is not connected, provide manual import/configuration steps.
- Use GitHub Actions and Vercel CLI only when required credentials are configured securely.
