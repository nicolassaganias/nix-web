# nix.is-a.dev con Vercel

Hosting: **Vercel** (proyecto `nix-web`).

## Archivos para el PR en is-a-dev/register

Copiá estos 3 archivos a `domains/` en tu fork de [is-a-dev/register](https://github.com/is-a-dev/register):

| Archivo | Registro |
|---------|----------|
| `nix.json` | A → `216.198.79.1` |
| `_vercel.nix.json` | TXT de verificación (apex + www) |
| `www.nix.json` | CNAME → `9c1e0363078a4f93.vercel-dns-017.com` |

El mensaje *"linked to another Vercel account"* es normal si el dominio se usó antes en otra cuenta o proyecto. El TXT en `_vercel.nix.json` prueba que sos vos.

## Pasos

1. Fork [is-a-dev/register](https://github.com/is-a-dev/register/fork)
2. Subí los 3 JSON de `is-a-dev/domains/` a `domains/` en el fork
3. Abrí el PR (plantilla completa + captura de https://nix-web.vercel.app)
4. Cuando mergeen (~horas/días), en Vercel → Domains → **Refresh** en `nix.is-a.dev` y `www.nix.is-a.dev`
5. Cuando pasen a **Valid**, activá HTTPS

## Notas

- Los tokens TXT van solo en `_vercel.nix.json`, no en `nix.json`.
- Si Vercel regenera los tokens, actualizá `_vercel.nix.json` con un nuevo PR.
- Apex: `nix.is-a.dev` · www: `www.nix.is-a.dev` (308 redirect configurado en Vercel).
