# Deploy Cibleemploi to GitHub Pages

Live website: https://danieloseguin67.github.io/cibleemploi/

Repository: https://github.com/danieloseguin67/cibleemploi

## How deployment works

Every push to `main` starts the **Deploy to GitHub Pages** workflow in
[`.github/workflows/deploy.yml`](../.github/workflows/deploy.yml).
GitHub installs dependencies, builds the Angular application, and publishes the
generated website. You do not need to commit build output or create a `gh-pages` branch.

| Setting | Project value |
| --- | --- |
| Deployment branch | `main` |
| Node.js version used by the workflow | `22` |
| Install command | `npm ci` from the repository root |
| Production build command | `npm run build:prod` |
| Website base path | `/cibleemploi/` |
| Published directory | `client/dist/client/browser/` |
| Pages publishing source | GitHub Actions |

## One-time setup

The current repository already has GitHub Pages configured. If setting it up again:

1. Install Node.js 22, npm, and Git on your computer.
2. Ensure you have permission to push to the repository and configure its Pages settings.
3. Open the repository's [Settings > Pages](https://github.com/danieloseguin67/cibleemploi/settings/pages).
4. Under **Build and deployment**, select **GitHub Actions** as the source.
5. Ensure the workflow exists at `.github/workflows/deploy.yml` in the repository root.
   GitHub will not discover a workflow placed inside `client/.github/`.

The workflow declares `contents: read`, `pages: write`, and `id-token: write`
permissions and deploys to the `github-pages` environment. It uses GitHub's
automatically supplied token; no personal access token needs to be added to the project.

See [GitHub's custom workflow documentation](https://docs.github.com/en/pages/getting-started-with-github-pages/using-custom-workflows-with-github-pages)
for the Pages workflow requirements.

## Publish an update

Run these commands from the repository root (`C:\local\angulardev\ciblemploi` on this computer).

1. Check your branch and changes:

   ```bash
   git branch --show-current
   git status
   ```

   The deployment runs when changes reach `main`. If you work on another branch,
   merge that branch into `main` through your usual review process.

2. Install the locked dependencies and verify the production build:

   ```bash
   npm ci
   npm run build:prod
   ```

   The build must succeed before publishing. The root script runs Angular inside
   the `client` workspace and sets the base URL to `/cibleemploi/`.

3. Review and commit the files you intend to publish:

   ```bash
   git diff
   git add <file1> <file2>
   git commit -m "Update website content"
   git push origin main
   ```

   Replace `<file1> <file2>` with your changed file paths. If the changes are already
   committed, only the push is needed. Do not force-push to deploy.

4. Open [GitHub Actions](https://github.com/danieloseguin67/cibleemploi/actions/workflows/deploy.yml)
   and select the latest **Deploy to GitHub Pages** run. Both `build` and `deploy`
   must succeed.
5. Open the [live website](https://danieloseguin67.github.io/cibleemploi/).
   Check French and English navigation, images, and the pages you changed.
   Refresh the browser if it still shows an earlier version.

On Windows PowerShell, if `npm` fails because `npm.ps1` is blocked by the execution
policy, use `npm.cmd` in these commands instead:

```powershell
npm.cmd ci
npm.cmd run build:prod
```

## Manually deploy the current main branch

A manual deployment republishes the code already on GitHub. It does **not** commit
or upload local changes; push those first.

In the repository's **Actions** tab, choose **Deploy to GitHub Pages**, select
**Run workflow**, and choose `main`.

Alternatively, with GitHub CLI installed and authenticated:

```bash
gh auth status
# If you are not authenticated:
gh auth login

npm run deploy
```

The `deploy` script runs `gh workflow run deploy.yml --ref main`. It starts the
remote workflow without building locally or waiting for completion.

To inspect and monitor a run:

```bash
gh run list --workflow deploy.yml --limit 5
gh run watch <run-id> --exit-status
```

Replace `<run-id>` with the run ID from the list.

## Angular routes and hosting limitations

The workflow copies the generated `index.html` to `404.html` before uploading.
This lets direct links such as `/cibleemploi/fr/contact` load Angular, which then
displays the requested page. GitHub Pages still returns HTTP 404 for those direct
requests, which matters for crawlers and link checkers.

GitHub Pages hosts the static frontend. It does not run a Node.js server or process
form submissions. The current contact and career forms display a local success
message and are not connected to a backend or email service.

## Troubleshooting

| Problem | What to check |
| --- | --- |
| No workflow starts after a push | Confirm the push reached `main` and the workflow is in the root `.github/workflows/` directory. |
| Angular reports that the command is outside a workspace | Run `npm run build:prod` from the repository root; this delegates to the `client` workspace. |
| `npm ci` fails | Read the install step's log. If dependencies changed, run `npm install` locally and commit the resulting `package-lock.json` with the relevant `package.json` changes. |
| Build fails | Run `npm run build:prod` locally and fix the reported compilation or bundle-budget errors. |
| Upload fails or the published site is missing files | Confirm the workflow uploads `client/dist/client/browser/`, which contains `index.html`. |
| JavaScript, styles, or images fail to load | Confirm the production build uses `--base-href /cibleemploi/` and assets use paths compatible with that prefix. |
| Deployment fails during Pages configuration | Confirm Settings > Pages uses GitHub Actions, and inspect the failing step for permission or environment restrictions. |
| Refreshing a nested route shows GitHub's default 404 | Confirm the deployed artifact includes `404.html` copied from the generated `index.html`. |
| Local edits do not appear after a manual deployment | Commit and push the edits to `main`; the manual workflow uses remote code. |

If the repository is renamed or the site moves to a custom domain, update the
`build:prod` base path in the root `package.json` to match the new hosting URL.

## Restore a previous version

Use a new commit that reverts the unwanted change, then push it to `main`:

```bash
git revert <commit-sha>
git push origin main
```

Replace `<commit-sha>` with the commit to undo. For a merge commit or several related
changes, review the required revert carefully before pushing. The resulting push
starts a new deployment through the same workflow.

=========================================================================================

Example where i had manually tried to do it and i had some issues.
The codex agent has fixed these deployment issues:
- Workflow location: moved it from client/.github/workflows/ to .github/workflows/ so GitHub detects it.
- Build commands: updated root package.json scripts to run Angular inside the client workspace.
- Upload directory: corrected it to client/dist/client/browser/.
- Site URL: ensured production builds use /cibleemploi/ as the base path.
- Direct page links: added a 404.html fallback so Angular routes load when opened directly.
- Deployment setup: added Pages configuration, deployment concurrency, and Node.js 22.
- Manual deployment: changed npm run deploy to trigger the GitHub Actions workflow.
I verified the production build, pushed the fixes, and confirmed deployment succeeded.
Afterward, I created the Markdown deployment guide and linked it from the README. Those documentation changes are still local.

=========================================================================================