# Abm — 51 free 3D models (Vehicles 4, Buildings 27, Nature 10, Trees 3, Props 7)

> Part of models.codelove.in (https://models.codelove.in/), 6,792 free 3D models. License: CC0 1.0 — public domain — No attribution required.

- Collection page: https://models.codelove.in/models/collection/abm/
- Whole collection as one .zip: https://models.codelove.in/packs/ (file list: https://models.codelove.in/data/packs/abm.json)
- Every collection: https://models.codelove.in/llms.txt

- Format: glTF 2.0 binary (.glb), one file per model with textures embedded, compressed with EXT_meshopt_compression and EXT_texture_webp. three.js (GLTFLoader + MeshoptDecoder; drei's useGLTF sets this up) and Babylon.js load them directly; other engines need meshopt support or a decompressed copy.
- Size is the bounding box (width × height × depth) in glTF units, which are metres by the glTF spec; models are Y-up. A few imported models are not to real-world scale, so scale them to fit.
- Rigged humans use a Biped skeleton (root bone Bip01; the child characters use Bip02). The 20 animation clips (10 motions: idle, look around, talk, thoughtful, wave, cheer, clap, dance, walk, run) are separate skeleton-only .glb files in a female (f_) and a male (m_) set: load a character and a clip from its set, then play the clip with THREE.AnimationMixer — the bone names match.
- Each .glb carries its license and credit in the glTF asset block (asset.copyright, asset.extras).

Each line: name and model page — .glb URL · triangles · size · file size, then notes. Total 4.4 MB.

## Models

### Vehicles (4)

- [Elevator Teleport01 Art](https://models.codelove.in/models/abm-elevator-teleport01-art/) — https://models.codelove.in/library/abm/elevator-teleport01-art.glb · 4,656 tris · 4.25×6.84×3.54 · 169 KB
- [Teleporter VIP01 Art](https://models.codelove.in/models/abm-teleporter-vip01-art/) — https://models.codelove.in/library/abm/teleporter-vip01-art.glb · 914 tris · 1.73×2×0.25 · 170 KB
- [Teleporter01 Art](https://models.codelove.in/models/abm-teleporter01-art/) — https://models.codelove.in/library/abm/teleporter01-art.glb · 918 tris · 1.18×3.17×0.25 · 39 KB
- [Teleporter02 Art](https://models.codelove.in/models/abm-teleporter02-art/) — https://models.codelove.in/library/abm/teleporter02-art.glb · 2,400 tris · 1.97×3.17×0.56 · 103 KB

### Buildings (27)

- [Dome Extra01 Art](https://models.codelove.in/models/abm-dome-extra01-art/) — https://models.codelove.in/library/abm/dome-extra01-art.glb · 2,960 tris · 37.8×28.6×28.3 · 218 KB
- [Dome01 Art](https://models.codelove.in/models/abm-dome01-art/) — https://models.codelove.in/library/abm/dome01-art.glb · 4,378 tris · 27.6×33×44.3 · 241 KB
- [Dome02 Art](https://models.codelove.in/models/abm-dome02-art/) — https://models.codelove.in/library/abm/dome02-art.glb · 3,102 tris · 41.4×34.6×34.2 · 221 KB
- [Dome03 Art](https://models.codelove.in/models/abm-dome03-art/) — https://models.codelove.in/library/abm/dome03-art.glb · 4,908 tris · 38.5×36.1×40.5 · 243 KB
- [Dome04 Art](https://models.codelove.in/models/abm-dome04-art/) — https://models.codelove.in/library/abm/dome04-art.glb · 3,934 tris · 37.1×29.3×43.7 · 232 KB
- [Entrance Door01 Art](https://models.codelove.in/models/abm-entrance-door01-art/) — https://models.codelove.in/library/abm/entrance-door01-art.glb · 280 tris · 5.71×4.78×4.9 · 17 KB
- [Entrance Door02 Art](https://models.codelove.in/models/abm-entrance-door02-art/) — https://models.codelove.in/library/abm/entrance-door02-art.glb · 120 tris · 5.71×4.78×2.36 · 14 KB
- [Floor Panel01 Art](https://models.codelove.in/models/abm-floor-panel01-art/) — https://models.codelove.in/library/abm/floor-panel01-art.glb · 142 tris · 1.19×0.91×0.12 · 19 KB
- [Floor Panel02 Art](https://models.codelove.in/models/abm-floor-panel02-art/) — https://models.codelove.in/library/abm/floor-panel02-art.glb · 142 tris · 1.19×0.91×0.12 · 19 KB
- [Floor Panel03 Art](https://models.codelove.in/models/abm-floor-panel03-art/) — https://models.codelove.in/library/abm/floor-panel03-art.glb · 142 tris · 1.19×0.91×0.12 · 19 KB
- [Floor Panel04 Art](https://models.codelove.in/models/abm-floor-panel04-art/) — https://models.codelove.in/library/abm/floor-panel04-art.glb · 142 tris · 1.19×0.91×0.12 · 19 KB
- [Floor Panel05 Art](https://models.codelove.in/models/abm-floor-panel05-art/) — https://models.codelove.in/library/abm/floor-panel05-art.glb · 142 tris · 1.19×0.91×0.12 · 19 KB
- [Hexagon Large VIP01 Art](https://models.codelove.in/models/abm-hexagon-large-vip01-art/) — https://models.codelove.in/library/abm/hexagon-large-vip01-art.glb · 767 tris · 31.5×6.52×27.7 · 80 KB
- [Hexagon Large VIP02 Art](https://models.codelove.in/models/abm-hexagon-large-vip02-art/) — https://models.codelove.in/library/abm/hexagon-large-vip02-art.glb · 636 tris · 31.6×3.11×27.7 · 78 KB
- [Hexagon Large VIP03 Art](https://models.codelove.in/models/abm-hexagon-large-vip03-art/) — https://models.codelove.in/library/abm/hexagon-large-vip03-art.glb · 688 tris · 31.5×2.64×27.7 · 80 KB
- [Hexagon Large VIP04 Art](https://models.codelove.in/models/abm-hexagon-large-vip04-art/) — https://models.codelove.in/library/abm/hexagon-large-vip04-art.glb · 544 tris · 31.6×1.97×27.7 · 56 KB
- [Hexagon Platform Large01 Art](https://models.codelove.in/models/abm-hexagon-platform-large01-art/) — https://models.codelove.in/library/abm/hexagon-platform-large01-art.glb · 520 tris · 17.7×1.1×15.6 · 68 KB
- [Hexagon Platform Medium01 Art](https://models.codelove.in/models/abm-hexagon-platform-medium01-art/) — https://models.codelove.in/library/abm/hexagon-platform-medium01-art.glb · 520 tris · 11.9×0.81×10.4 · 45 KB
- [Hexagon Platform Ramp01 Art](https://models.codelove.in/models/abm-hexagon-platform-ramp01-art/) — https://models.codelove.in/library/abm/hexagon-platform-ramp01-art.glb · 2 tris · 2.35×0×3.59 · 21 KB
- [Hexagon Platform Small01 Art](https://models.codelove.in/models/abm-hexagon-platform-small01-art/) — https://models.codelove.in/library/abm/hexagon-platform-small01-art.glb · 396 tris · 6×1.13×5.49 · 38 KB
- [Platform Barrier01 Art](https://models.codelove.in/models/abm-platform-barrier01-art/) — https://models.codelove.in/library/abm/platform-barrier01-art.glb · 24 tris · 58.9×3.22×67.8 · 121 KB
- [Platform Holder01 Art](https://models.codelove.in/models/abm-platform-holder01-art/) — https://models.codelove.in/library/abm/platform-holder01-art.glb · 64 tris · 1.95×0.17×1.75 · 48 KB
- [Platform01 Art](https://models.codelove.in/models/abm-platform01-art/) — https://models.codelove.in/library/abm/platform01-art.glb · 6,762 tris · 59.6×1.9×68.8 · 197 KB
- [Vip Barrier01 Art](https://models.codelove.in/models/abm-vip-barrier01-art/) — https://models.codelove.in/library/abm/vip-barrier01-art.glb · 1,904 tris · 27.8×4.07×24.2 · 44 KB
- [VIP Domes Outline](https://models.codelove.in/models/abm-vip-domes-outline/) — https://models.codelove.in/library/abm/vip-domes-outline.glb · 2,446 tris · 66.5×58.2×58.8 · 211 KB
- [VIPBridge01 Art](https://models.codelove.in/models/abm-vipbridge01-art/) — https://models.codelove.in/library/abm/vipbridge01-art.glb · 3,180 tris · 6.73×7.39×11.7 · 61 KB
- [VIPWall01 Art](https://models.codelove.in/models/abm-vipwall01-art/) — https://models.codelove.in/library/abm/vipwall01-art.glb · 2,246 tris · 28.1×12.2×14.9 · 61 KB

### Nature (10)

- [Branch Flowers01 Art](https://models.codelove.in/models/abm-branch-flowers01-art/) — https://models.codelove.in/library/abm/branch-flowers01-art.glb · 5,000 tris · 15.6×12.1×8.28 · 204 KB
- [Holo Bush01 Art](https://models.codelove.in/models/abm-holo-bush01-art/) — https://models.codelove.in/library/abm/holo-bush01-art.glb · 2 tris · 1.09×0.8×0 · 38 KB
- [Holo Bush02 Art](https://models.codelove.in/models/abm-holo-bush02-art/) — https://models.codelove.in/library/abm/holo-bush02-art.glb · 2 tris · 0.81×0.6×0 · 38 KB
- [Holo Bush03 Art](https://models.codelove.in/models/abm-holo-bush03-art/) — https://models.codelove.in/library/abm/holo-bush03-art.glb · 2 tris · 1.23×0.69×0 · 38 KB
- [Petals01 Art](https://models.codelove.in/models/abm-petals01-art/) — https://models.codelove.in/library/abm/petals01-art.glb · 2 tris · 1.26×0×2 · 81 KB
- [Petals02 Art](https://models.codelove.in/models/abm-petals02-art/) — https://models.codelove.in/library/abm/petals02-art.glb · 2 tris · 0.54×0×0.77 · 81 KB
- [Sakura01 Art](https://models.codelove.in/models/abm-sakura01-art/) — https://models.codelove.in/library/abm/sakura01-art.glb · 6,316 tris · 5.89×6.27×5.86 · 246 KB
- [Terrain Path01 Art](https://models.codelove.in/models/abm-terrain-path01-art/) — https://models.codelove.in/library/abm/terrain-path01-art.glb · 122 tris · 2.03×0×2 · 13 KB
- [Terrain Walls01 Art](https://models.codelove.in/models/abm-terrain-walls01-art/) — https://models.codelove.in/library/abm/terrain-walls01-art.glb · 2 tris · 24×7.97×0 · 55 KB
- [Terrain01 Art](https://models.codelove.in/models/abm-terrain01-art/) — https://models.codelove.in/library/abm/terrain01-art.glb · 2 tris · 2×0×2 · 21 KB

### Trees (3)

- [Holo Tree01](https://models.codelove.in/models/abm-holo-tree01/) — https://models.codelove.in/library/abm/holo-tree01.glb · 2 tris · 5.2×6.27×0 · 56 KB
- [Holo Tree01 Art](https://models.codelove.in/models/abm-holo-tree01-art/) — https://models.codelove.in/library/abm/holo-tree01-art.glb · 922 tris · 4.41×4.41×0.27 · 72 KB
- [Tree01 Art](https://models.codelove.in/models/abm-tree01-art/) — https://models.codelove.in/library/abm/tree01-art.glb · 5,794 tris · 58.6×84.1×64.8 · 256 KB

### Props (7)

- [Altar01 Art](https://models.codelove.in/models/abm-altar01-art/) — https://models.codelove.in/library/abm/altar01-art.glb · 964 tris · 7.34×5.12×7.3 · 102 KB
- [Gong01 Art](https://models.codelove.in/models/abm-gong01-art/) — https://models.codelove.in/library/abm/gong01-art.glb · 499 tris · 2×3.23×0.17 · 32 KB
- [Holo Pot01 Art](https://models.codelove.in/models/abm-holo-pot01-art/) — https://models.codelove.in/library/abm/holo-pot01-art.glb · 144 tris · 3.38×3.04×3.91 · 50 KB
- [Info Panel01 Art](https://models.codelove.in/models/abm-info-panel01-art/) — https://models.codelove.in/library/abm/info-panel01-art.glb · 2,560 tris · 1.97×3.17×0.56 · 104 KB
- [Info Panel02 Art](https://models.codelove.in/models/abm-info-panel02-art/) — https://models.codelove.in/library/abm/info-panel02-art.glb · 1,078 tris · 1.18×3.17×0.21 · 39 KB
- [Signbook Board01 Art](https://models.codelove.in/models/abm-signbook-board01-art/) — https://models.codelove.in/library/abm/signbook-board01-art.glb · 142 tris · 3.64×3.29×0.1 · 18 KB
- [Signbook Button01 Art](https://models.codelove.in/models/abm-signbook-button01-art/) — https://models.codelove.in/library/abm/signbook-button01-art.glb · 920 tris · 0.68×0.79×0.14 · 29 KB
