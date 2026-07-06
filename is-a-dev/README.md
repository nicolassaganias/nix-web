# Configurar nix.is-a.dev

## Dominio raíz (`nix.is-a.dev`)

`domains/nix.json` → CNAME a `cname.vercel-dns.com`

En Vercel: agregá **nix.is-a.dev** (sin redirect a www). Si pide TXT de verificación, creá `domains/_vercel.nix.json` con ese valor.

## www (`www.nix.is-a.dev`)

Vercel ya dio estos registros (incluidos en el PR):

| Archivo | Contenido |
|---------|-----------|
| `www.nix.json` | CNAME → `9c1e0363078a4f93.vercel-dns-017.com` |
| `_vercel.www.nix.json` | TXT de verificación Vercel |

## PR en is-a-dev/register

Los JSON están en `is-a-dev/domains/`. Copiarlos a un fork de [is-a-dev/register](https://github.com/is-a-dev/register) y abrir PR.

Cuando mergeen + verifiques en Vercel → `https://www.nix.is-a.dev` (y `https://nix.is-a.dev` si registraste también el raíz).
