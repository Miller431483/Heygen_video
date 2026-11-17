# Heygen_video — Pub motion design « PÈRE NOËL™ » (3D isométrique)

Publicité de 28 s réalisée avec **HyperFrames** (HTML + GSAP → MP4), en style **3D isométrique**.
Le Père Noël y est traité comme une entreprise : on voit son système de distribution de cadeaux.

## Rendu vidéo
- `renders/santa-pub_2026-11-17_11-19-18.mp4` — **1920×1080, 30 fps, 28 s, H.264** (~6,1 MB)

## Chapitres
1. **Titre** — « PÈRE NOËL™ » + accroche (0–5 s)
2. **L'atelier au Pôle Nord** — tapis roulant, cadeaux, lutins, fumée (5–11 s)
3. **La tournée de minuit** — village isométrique, traîneau sur une route en pointillés (11–17 s)
4. **Par la cheminée** — le cadeau tombe dans la cheminée, puis salon « Livré. ✓ » (17–22 s)
5. **Résultats + CTA** — barres isométriques, compteur 2 000 000 000, carte d'appel à l'action (22–28 s)

## Structure
- `index.html` — composition racine (monte les 5 scènes)
- `compositions/s1.html … s5.html` — les 5 scènes
- `assets/iso.js` — projection isométrique déterministe ; `assets/gsap.min.js` — GSAP embarqué (hors CDN)
- `package.json` / `hyperframes.json` / `meta.json` — config HyperFrames

## Re-rendre le MP4
```bash
# prérequis : ffmpeg/ffprobe + chrome-headless-shell, puis :
cd <ce dossier>
node ~/.agents/skills/hyperframes/scripts/plugin-cli.mjs check --json
node ~/.agents/skills/hyperframes/scripts/plugin-cli.mjs render
```
