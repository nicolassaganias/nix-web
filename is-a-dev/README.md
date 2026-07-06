# Configurar nix.is-a.dev

`nix.is-a.dev` está **disponible** (no registrado todavía).

Este repo ya está en Vercel como **nix-web**. Los archivos de esta carpeta hay que copiarlos al repo [is-a-dev/register](https://github.com/is-a-dev/register) en un PR.

## 1. Deploy de la web nueva

`vercel.json` en la raíz hace que `nix.is-a.dev` sirva la carpeta `html/` (no la web vieja de `index.html`).

Después de pushear a `main`, Vercel redeploya solo.

## 2. Dominio en Vercel

1. Abrí [Vercel → nix-web → Settings → Domains](https://vercel.com/dashboard).
2. **Add** → `nix.is-a.dev`
3. **No** actives el redirect a `www.nix.is-a.dev`.
4. En **Continue manually**, copiá el valor **TXT** (`vc-domain-verify=...`).

Si Vercel muestra un registro **A** en lugar de CNAME, usá ese valor en `nix.json` en lugar de `cname.vercel-dns.com` (ver [guía is-a.dev + Vercel](https://docs.is-a.dev/guides/vercel)).

## 3. PR en is-a-dev/register

```bash
git clone https://github.com/TU_USUARIO/register.git is-a-dev-register
cd is-a-dev-register
cp /ruta/a/nix-web/is-a-dev/domains/nix.json domains/
cp /ruta/a/nix-web/is-a-dev/domains/_vercel.nix.json domains/
```

Editá `domains/_vercel.nix.json` y reemplazá `PEGAR_AQUI_EL_TXT_DE_VERCEL` por el TXT de Vercel.

```bash
git checkout -b add-nix-domain
git add domains/nix.json domains/_vercel.nix.json
git commit -m "feat(domain): add nix.is-a.dev for Vercel"
git push -u origin add-nix-domain
gh pr create --title "Add nix.is-a.dev" --body "Portfolio NIX → Vercel project nix-web (github.com/nicolassaganias/nix-web)"
```

Cuando mergeen el PR (suele tardar horas o 1–2 días), el DNS queda activo.

## 4. Verificar en Vercel

Volvé a **Domains** en Vercel y pulsá **Verify** si hace falta. En unos minutos `https://nix.is-a.dev` debería mostrar la web de `/html`.

## Notas

- Las imágenes usan rutas `/images/...` para funcionar en el dominio raíz.
- La web vieja sigue en los archivos de la raíz (`index.html`, etc.) pero no se sirve en producción con esta config.
