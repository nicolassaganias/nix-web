# nix.is-a.dev con GitHub Pages

Hosting: **GitHub Pages** (workflow `.github/workflows/pages.yml`).

## 1. Activar Pages en el repo

1. [nix-web → Settings → Pages](https://github.com/nicolassaganias/nix-web/settings/pages)
2. **Build and deployment** → Source: **GitHub Actions**
3. Tras el próximo push a `main`, el workflow publica la web de `/html` + `/images`.

URL temporal: `https://nicolassaganias.github.io/nix-web/` (hasta configurar el dominio).

## 2. Dominio en is-a.dev

PR en [is-a-dev/register](https://github.com/is-a-dev/register) con:

| Archivo | Contenido |
|---------|-----------|
| `domains/nix.json` | CNAME → `nicolassaganias.github.io` |

Cuando mergeen el PR, el DNS de `nix.is-a.dev` apunta a GitHub.

## 3. Verificar dominio en GitHub

**Después** de que mergeen el PR de is-a.dev:

1. Repo **nix-web** → Settings → Pages → **Custom domain** → `nix.is-a.dev`
2. GitHub muestra un **TXT** de verificación (hostname tipo `_github-pages-challenge-nix.is-a.dev`).
3. Copiá ese valor en `is-a-dev/domains/_github-pages-challenge-nix.nix.json` y abrí **otro PR** en is-a-dev/register.
4. Cuando mergeen, volvé a GitHub y pulsá **Verify**.
5. Activá **Enforce HTTPS**.

## Notas

- No hace falta Vercel: el deploy es solo por GitHub Actions.
- Si antes registraste `www.nix.is-a.dev` para Vercel, ignorá esos archivos (`www.nix.json`, `_vercel.www.nix.json`); ya no aplican.
