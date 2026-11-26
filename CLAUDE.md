# Notes for Claude sessions working on Satoshi Levels

A personal phone PWA in one `index.html`, no build step, served by GitHub Pages from `main`.

## Script hash in the security policy (do not forget)

`index.html` has a Content-Security-Policy `<meta>` that allows the app's script only by its sha256 hash.
**After any change to the `<script>` block, update the `script-src 'sha256-…'` value**, or the app shows a blank page.

```bash
python3 -c "import re,hashlib,base64;s=open('index.html',encoding='utf-8').read();print(base64.b64encode(hashlib.sha256(re.search(r'^<script>(.*?)</script>',s,re.S|re.M).group(1).encode()).digest()).decode())"
```

Then check in a browser (Playwright) that there are no "Content Security Policy" errors in the console.
A new data source must also be added to `connect-src` in the same policy.

## Every change

- Bump `CACHE` in `sw.js` (e.g. v44 → v45); new app files also go in its `FILES` list.
- Test at phone widths (375/390/430) before committing.

## Git and GitHub

- Work on a branch. Push only when the user explicitly says so ("push it"); never push to `main`.
  The user opens the pull request and uses "Squash and merge", so the commit on `main` is Verified.
- Commit as `git -c user.name="Dan-e-l" -c user.email="70596648+Dan-e-l@users.noreply.github.com" commit …`,
  with no attribution trailers and no model names.
- Don't change `README.md`: the user edits it on GitHub.

## Promises to keep

- No analytics, no tracking, no backend or proxy. Fonts are self-hosted in `fonts/`.
- Never send the user's personal details to outside services.
