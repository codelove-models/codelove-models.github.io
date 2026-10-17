# Mini Forest — 22 free 3D models (Nature 18, Trees 2, Weapons 2)

> Part of models.codelove.in (https://models.codelove.in/), 6,792 free 3D models. License: CC0 1.0 — public domain — No attribution required.

- Collection page: https://models.codelove.in/models/collection/mini-forest/
- Whole collection as one .zip: https://models.codelove.in/packs/ (file list: https://models.codelove.in/data/packs/mini-forest.json)
- Every collection: https://models.codelove.in/llms.txt

- Format: glTF 2.0 binary (.glb), one file per model with textures embedded, compressed with EXT_meshopt_compression and EXT_texture_webp. three.js (GLTFLoader + MeshoptDecoder; drei's useGLTF sets this up) and Babylon.js load them directly; other engines need meshopt support or a decompressed copy.
- Size is the bounding box (width × height × depth) in glTF units, which are metres by the glTF spec; models are Y-up. A few imported models are not to real-world scale, so scale them to fit.
- Rigged humans use a Biped skeleton (root bone Bip01; the child characters use Bip02). The 20 animation clips (10 motions: idle, look around, talk, thoughtful, wave, cheer, clap, dance, walk, run) are separate skeleton-only .glb files in a female (f_) and a male (m_) set: load a character and a clip from its set, then play the clip with THREE.AnimationMixer — the bone names match.
- Each .glb carries its license and credit in the glTF asset block (asset.copyright, asset.extras).

Each line: name and model page — .glb URL · triangles · size · file size, then notes. Total 341 KB.

## Models

### Nature (18)

- [Bridge](https://models.codelove.in/models/mini-forest-bridge/) — https://models.codelove.in/library/mini-forest/bridge.glb · 372 tris · 1.04×0.47×0.8 · 14 KB
- [Building Platform](https://models.codelove.in/models/mini-forest-building-platform/) — https://models.codelove.in/library/mini-forest/building-platform.glb · 508 tris · 1.3×0.5×1.3 · 18 KB
- [Building Roof](https://models.codelove.in/models/mini-forest-building-roof/) — https://models.codelove.in/library/mini-forest/building-roof.glb · 324 tris · 1.34×1.05×1.17 · 13 KB
- [Building Structure](https://models.codelove.in/models/mini-forest-building-structure/) — https://models.codelove.in/library/mini-forest/building-structure.glb · 144 tris · 1×1×1 · 9 KB
- [Character Archer](https://models.codelove.in/models/mini-forest-character-archer/) — https://models.codelove.in/library/mini-forest/character-archer.glb · 574 tris · 0.78×0.82×0.47 · 73 KB · rigged · 32 animations inside
- [Fence](https://models.codelove.in/models/mini-forest-fence/) — https://models.codelove.in/library/mini-forest/fence.glb · 330 tris · 1.1×0.4×0.25 · 13 KB
- [Flag](https://models.codelove.in/models/mini-forest-flag/) — https://models.codelove.in/library/mini-forest/flag.glb · 162 tris · 0.43×0.75×0.16 · 10 KB
- [Ladder](https://models.codelove.in/models/mini-forest-ladder/) — https://models.codelove.in/library/mini-forest/ladder.glb · 216 tris · 0.51×1×0.14 · 11 KB
- [Patch Dirt](https://models.codelove.in/models/mini-forest-patch-dirt/) — https://models.codelove.in/library/mini-forest/patch-dirt.glb · 108 tris · 1×0.1×1 · 8 KB
- [Patch Grass](https://models.codelove.in/models/mini-forest-patch-grass/) — https://models.codelove.in/library/mini-forest/patch-grass.glb · 295 tris · 1×0.17×1 · 13 KB
- [Plant](https://models.codelove.in/models/mini-forest-plant/) — https://models.codelove.in/library/mini-forest/plant.glb · 156 tris · 0.4×0.19×0.43 · 12 KB
- [Platform](https://models.codelove.in/models/mini-forest-platform/) — https://models.codelove.in/library/mini-forest/platform.glb · 651 tris · 1×0.47×1 · 22 KB
- [Rocks High](https://models.codelove.in/models/mini-forest-rocks-high/) — https://models.codelove.in/library/mini-forest/rocks-high.glb · 342 tris · 1×1×1 · 12 KB
- [Rocks Low](https://models.codelove.in/models/mini-forest-rocks-low/) — https://models.codelove.in/library/mini-forest/rocks-low.glb · 342 tris · 1×0.52×1 · 12 KB
- [Rocks Ramp](https://models.codelove.in/models/mini-forest-rocks-ramp/) — https://models.codelove.in/library/mini-forest/rocks-ramp.glb · 234 tris · 1×0.5×1 · 11 KB
- [Stones](https://models.codelove.in/models/mini-forest-stones/) — https://models.codelove.in/library/mini-forest/stones.glb · 236 tris · 0.9×0.45×0.85 · 11 KB
- [Target](https://models.codelove.in/models/mini-forest-target/) — https://models.codelove.in/library/mini-forest/target.glb · 188 tris · 0.55×0.58×0.47 · 10 KB
- [Tent](https://models.codelove.in/models/mini-forest-tent/) — https://models.codelove.in/library/mini-forest/tent.glb · 847 tris · 1.26×1×1.07 · 25 KB

### Trees (2)

- [Tree](https://models.codelove.in/models/mini-forest-tree/) — https://models.codelove.in/library/mini-forest/tree.glb · 182 tris · 0.93×1.68×0.88 · 12 KB
- [Tree High](https://models.codelove.in/models/mini-forest-tree-high/) — https://models.codelove.in/library/mini-forest/tree-high.glb · 266 tris · 0.93×2.28×0.88 · 14 KB

### Weapons (2)

- [Weapon Arrow](https://models.codelove.in/models/mini-forest-weapon-arrow/) — https://models.codelove.in/library/mini-forest/weapon-arrow.glb · 58 tris · 0.12×0.12×0.46 · 8 KB
- [Weapon Bow](https://models.codelove.in/models/mini-forest-weapon-bow/) — https://models.codelove.in/library/mini-forest/weapon-bow.glb · 80 tris · 0.12×0.48×0.21 · 8 KB
