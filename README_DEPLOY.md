Deployment guide — free hosting options

I can't deploy to an external host or create a public URL from this environment. However, here's a short, copy-pasteable guide that will get your Vite app hosted for free and produce a public URL. Pick one of the three recommended providers (Vercel, Netlify, GitHub Pages).

Prerequisites (one-time on your machine):
- Node.js (>=16) and npm installed
- A GitHub account (recommended for automatic deploys)

Option A — Vercel (recommended: easiest, instant preview URLs)

1. Create a GitHub repo and push your project:

   ```bash
   git init
   git add -A
   git commit -m "initial commit"
   # create a repo on GitHub and add remote, then:
   git remote add origin git@github.com:<your-username>/<repo>.git
   git branch -M main
   git push -u origin main
   ```

2. Visit https://vercel.com and sign up (GitHub sign-in).
3. Click "New Project" → import your GitHub repo. Vercel auto-detects Vite.
   - Build Command: npm run build
   - Output Directory: dist
4. Deploy. Vercel will give you a public URL like https://<project-name>.vercel.app

Or deploy from your machine (quick, no push required):

```bash
npm i -g vercel
vercel login
# from project root
vercel --prod
```

Option B — Netlify

1. Push repo to GitHub (see above).
2. Sign up at https://app.netlify.com and "New site from Git" → choose GitHub repo.
   - Build command: npm run build
   - Publish directory: dist
3. Deploy. Netlify will provide a url like https://<site-name>.netlify.app

Or from local machine without GitHub:

```bash
npm run build
npm i -g netlify-cli
netlify login
netlify deploy --dir=dist --prod
```

Option C — GitHub Pages (works for static sites)

1. Add this package to deploy to gh-pages:

```bash
npm install --save-dev gh-pages
```

2. In `package.json` add:

```json
"homepage": ".",
"scripts": {
  "predeploy": "npm run build",
  "deploy": "gh-pages -d dist"
}
```

3. Push to GitHub and run:

```bash
npm run deploy
```

This publishes to https://<your-username>.github.io/<repo>/

Notes & tips
- The `public/` folder is served as static root by Vite; files you added in `public/data/*` will be available at `/data/...` after deploy.
- If you want both frontend and a Node/Express backend, deploy the frontend separately (Vercel/Netlify) and host the backend on Render / Railway / Fly / Heroku. You can also run the server locally and configure Vite's proxy option for development.

Files I added to this repo to help:
- `vercel.json` — recommended settings for Vercel
- `netlify.toml` — recommended settings for Netlify
- `README_DEPLOY.md` — this file with step-by-step commands

If you want, I can:
- Create a GitHub repo for you (requires your GitHub token / permission; I won't do this without credentials).
- Configure a GitHub Action to build and deploy automatically (needs repo + secrets for some hosts).
- Help you run a one-off `vercel --prod` deploy from your machine (I can provide the exact commands and what to expect).
 
Automated deploy with GitHub Actions -> Vercel
------------------------------------------------
If you'd like push-to-deploy, I added a workflow `.github/workflows/vercel-deploy.yml`.

What you must do to enable it:
1. Create a Vercel token:
   - Go to https://vercel.com/account/tokens and create a new token (Name it e.g. `github-action`).
2. In your GitHub repo go to Settings → Secrets → Actions and add a new secret named `VERCEL_TOKEN` with that token value.
3. Push your code to GitHub `main` branch. The workflow will run automatically and deploy to your Vercel account associated with the token.

Notes:
- The workflow uses `npx vercel --prod` to publish. The token must have rights to create deployments for the target account.
- If you want the deployment to go to a specific Vercel project under an org, you can instead provide `--token` plus `--team-id`/`--scope` arguments, or create the project from the Vercel dashboard and the CLI will link it on first deploy.

Local (one-off) deploy with token
---------------------------------
If you prefer to deploy from your machine (without adding GitHub Actions), run:

```bash
# set the token in the environment (POSIX shells)
export VERCEL_TOKEN="<your-token>"
npm run deploy:vercel
```

Or run directly without adding the token to your env:

```bash
npx vercel --prod --confirm --token <your-token>
```

Security note: treat `VERCEL_TOKEN` like a password. Do not paste it into public places.

Tell me which provider you prefer and whether you'd like me to add any GitHub Actions or scripts. I can also produce the exact `vercel` or `netlify` CLI commands you'll run locally.