# Chromatic Chaos — 49 free 3D models (Buildings 10, Nature 1, Props 38)

> Part of models.codelove.in (https://models.codelove.in/), 6,792 free 3D models. License: CC0 1.0 — public domain — No attribution required.

- Collection page: https://models.codelove.in/models/collection/chromatic-chaos/
- Whole collection as one .zip: https://models.codelove.in/packs/ (file list: https://models.codelove.in/data/packs/chromatic-chaos.json)
- Every collection: https://models.codelove.in/llms.txt

- Format: glTF 2.0 binary (.glb), one file per model with textures embedded, compressed with EXT_meshopt_compression and EXT_texture_webp. three.js (GLTFLoader + MeshoptDecoder; drei's useGLTF sets this up) and Babylon.js load them directly; other engines need meshopt support or a decompressed copy.
- Size is the bounding box (width × height × depth) in glTF units, which are metres by the glTF spec; models are Y-up. A few imported models are not to real-world scale, so scale them to fit.
- Rigged humans use a Biped skeleton (root bone Bip01; the child characters use Bip02). The 20 animation clips (10 motions: idle, look around, talk, thoughtful, wave, cheer, clap, dance, walk, run) are separate skeleton-only .glb files in a female (f_) and a male (m_) set: load a character and a clip from its set, then play the clip with THREE.AnimationMixer — the bone names match.
- Each .glb carries its license and credit in the glTF asset block (asset.copyright, asset.extras).

Each line: name and model page — .glb URL · triangles · size · file size, then notes. Total 9.6 MB.

## Models

### Buildings (10)

- [Building Corner 01](https://models.codelove.in/models/chromatic-chaos-building-corner-01/) — https://models.codelove.in/library/chromatic-chaos/building-corner-01.glb · 3,222 tris · 5.39×8×5.15 · 441 KB · rigged · 7 animations inside
- [Building Rect 01](https://models.codelove.in/models/chromatic-chaos-building-rect-01/) — https://models.codelove.in/library/chromatic-chaos/building-rect-01.glb · 1,174 tris · 4.64×8×5.1 · 333 KB
- [Building Vapor Ramp 01](https://models.codelove.in/models/chromatic-chaos-building-vapor-ramp-01/) — https://models.codelove.in/library/chromatic-chaos/building-vapor-ramp-01.glb · 8 tris · 5.49×2.42×4.8 · 60 KB
- [Building Vapor Ramp 02](https://models.codelove.in/models/chromatic-chaos-building-vapor-ramp-02/) — https://models.codelove.in/library/chromatic-chaos/building-vapor-ramp-02.glb · 140 tris · 4.8×2.6×5.56 · 283 KB
- [Column Vapor 01](https://models.codelove.in/models/chromatic-chaos-column-vapor-01/) — https://models.codelove.in/library/chromatic-chaos/column-vapor-01.glb · 200 tris · 1.67×3.27×1.88 · 102 KB
- [Column Vapor 02](https://models.codelove.in/models/chromatic-chaos-column-vapor-02/) — https://models.codelove.in/library/chromatic-chaos/column-vapor-02.glb · 260 tris · 1.7×7.96×1.92 · 63 KB
- [Column Vapor 03](https://models.codelove.in/models/chromatic-chaos-column-vapor-03/) — https://models.codelove.in/library/chromatic-chaos/column-vapor-03.glb · 364 tris · 1.71×8.54×1.92 · 66 KB
- [Floor Vapor 01](https://models.codelove.in/models/chromatic-chaos-floor-vapor-01/) — https://models.codelove.in/library/chromatic-chaos/floor-vapor-01.glb · 116 tris · 3.51×0.1×3.51 · 265 KB · 2 animations inside
- [Floor Vapor 02](https://models.codelove.in/models/chromatic-chaos-floor-vapor-02/) — https://models.codelove.in/library/chromatic-chaos/floor-vapor-02.glb · 182 tris · 2.48×0.1×3.92 · 314 KB
- [Glass Corner Vapor](https://models.codelove.in/models/chromatic-chaos-glass-corner-vapor/) — https://models.codelove.in/library/chromatic-chaos/glass-corner-vapor.glb · 608 tris · 3.04×7.99×5.99 · 237 KB

### Nature (1)

- [Terrain](https://models.codelove.in/models/chromatic-chaos-terrain/) — https://models.codelove.in/library/chromatic-chaos/terrain.glb · 2 tris · 50×0×50 · 42 KB

### Props (38)

- [Cell Phone Retro](https://models.codelove.in/models/chromatic-chaos-cell-phone-retro/) — https://models.codelove.in/library/chromatic-chaos/cell-phone-retro.glb · 574 tris · 1.05×2.82×0.55 · 151 KB
- [Computer Retro](https://models.codelove.in/models/chromatic-chaos-computer-retro/) — https://models.codelove.in/library/chromatic-chaos/computer-retro.glb · 264 tris · 4.92×2.39×3.35 · 65 KB
- [Computer Screen Open Retro](https://models.codelove.in/models/chromatic-chaos-computer-screen-open-retro/) — https://models.codelove.in/library/chromatic-chaos/computer-screen-open-retro.glb · 188 tris · 2.8×2.48×2.79 · 229 KB
- [Computer Screen Retro](https://models.codelove.in/models/chromatic-chaos-computer-screen-retro/) — https://models.codelove.in/library/chromatic-chaos/computer-screen-retro.glb · 220 tris · 3.71×2.53×2.84 · 314 KB · rigged · 5 animations inside
- [David Retro](https://models.codelove.in/models/chromatic-chaos-david-retro/) — https://models.codelove.in/library/chromatic-chaos/david-retro.glb · 2,366 tris · 3.36×3.74×2.65 · 243 KB
- [Floppy Disk Retro](https://models.codelove.in/models/chromatic-chaos-floppy-disk-retro/) — https://models.codelove.in/library/chromatic-chaos/floppy-disk-retro.glb · 256 tris · 1.78×0.05×1.76 · 145 KB
- [Frame Gameboy Retro 01](https://models.codelove.in/models/chromatic-chaos-frame-gameboy-retro-01/) — https://models.codelove.in/library/chromatic-chaos/frame-gameboy-retro-01.glb · 214 tris · 1.08×8.33×5.46 · 373 KB
- [Frame Neon Vapor 01](https://models.codelove.in/models/chromatic-chaos-frame-neon-vapor-01/) — https://models.codelove.in/library/chromatic-chaos/frame-neon-vapor-01.glb · 96 tris · 6.65×6.65×6.65 · 167 KB
- [Frame Neon Vapor 02](https://models.codelove.in/models/chromatic-chaos-frame-neon-vapor-02/) — https://models.codelove.in/library/chromatic-chaos/frame-neon-vapor-02.glb · 192 tris · 9.12×0.38×9.12 · 167 KB
- [Frame Neon Vapor 03](https://models.codelove.in/models/chromatic-chaos-frame-neon-vapor-03/) — https://models.codelove.in/library/chromatic-chaos/frame-neon-vapor-03.glb · 24 tris · 9.7×0.29×8.4 · 166 KB
- [Frame Old Vapor](https://models.codelove.in/models/chromatic-chaos-frame-old-vapor/) — https://models.codelove.in/library/chromatic-chaos/frame-old-vapor.glb · 176 tris · 4.88×3.09×0.14 · 168 KB
- [Frame Program Retro 01](https://models.codelove.in/models/chromatic-chaos-frame-program-retro-01/) — https://models.codelove.in/library/chromatic-chaos/frame-program-retro-01.glb · 60 tris · 0.15×1.66×6.09 · 30 KB
- [Frame Program Retro 02](https://models.codelove.in/models/chromatic-chaos-frame-program-retro-02/) — https://models.codelove.in/library/chromatic-chaos/frame-program-retro-02.glb · 14 tris · 0.06×4.03×5.5 · 73 KB
- [Frame Program Retro 03](https://models.codelove.in/models/chromatic-chaos-frame-program-retro-03/) — https://models.codelove.in/library/chromatic-chaos/frame-program-retro-03.glb · 2 tris · 0×1.08×4.36 · 73 KB
- [Frame Program Retro 04](https://models.codelove.in/models/chromatic-chaos-frame-program-retro-04/) — https://models.codelove.in/library/chromatic-chaos/frame-program-retro-04.glb · 2 tris · 0×1.08×4.36 · 73 KB
- [Frame Program Retro 05](https://models.codelove.in/models/chromatic-chaos-frame-program-retro-05/) — https://models.codelove.in/library/chromatic-chaos/frame-program-retro-05.glb · 6 tris · 0.02×2.33×2.3 · 73 KB
- [Frame Program Retro 06](https://models.codelove.in/models/chromatic-chaos-frame-program-retro-06/) — https://models.codelove.in/library/chromatic-chaos/frame-program-retro-06.glb · 6 tris · 0.02×2.48×4.33 · 73 KB
- [Frame Program Retro 07](https://models.codelove.in/models/chromatic-chaos-frame-program-retro-07/) — https://models.codelove.in/library/chromatic-chaos/frame-program-retro-07.glb · 6 tris · 0.02×2.48×4.32 · 73 KB
- [Icon Computer 01](https://models.codelove.in/models/chromatic-chaos-icon-computer-01/) — https://models.codelove.in/library/chromatic-chaos/icon-computer-01.glb · 2 tris · 1×0×1 · 73 KB
- [Icon Mouse 01](https://models.codelove.in/models/chromatic-chaos-icon-mouse-01/) — https://models.codelove.in/library/chromatic-chaos/icon-mouse-01.glb · 2 tris · 1×0×1 · 73 KB
- [Keyboard Retro](https://models.codelove.in/models/chromatic-chaos-keyboard-retro/) — https://models.codelove.in/library/chromatic-chaos/keyboard-retro.glb · 561 tris · 1.86×0.49×4.71 · 383 KB
- [Mobile Phone Retro](https://models.codelove.in/models/chromatic-chaos-mobile-phone-retro/) — https://models.codelove.in/library/chromatic-chaos/mobile-phone-retro.glb · 216 tris · 1.15×0.13×2.17 · 310 KB · rigged · 6 animations inside
- [Mouse Retro](https://models.codelove.in/models/chromatic-chaos-mouse-retro/) — https://models.codelove.in/library/chromatic-chaos/mouse-retro.glb · 130 tris · 1.21×0.3×0.68 · 227 KB
- [Pot 01 Art.001 Vapor](https://models.codelove.in/models/chromatic-chaos-pot-01-art-001-vapor/) — https://models.codelove.in/library/chromatic-chaos/pot-01-art-001-vapor.glb · 106 tris · 1.58×2.43×1.48 · 123 KB
- [Pot Retro 02](https://models.codelove.in/models/chromatic-chaos-pot-retro-02/) — https://models.codelove.in/library/chromatic-chaos/pot-retro-02.glb · 148 tris · 1.58×2.43×1.48 · 288 KB
- [Pot Retro 03](https://models.codelove.in/models/chromatic-chaos-pot-retro-03/) — https://models.codelove.in/library/chromatic-chaos/pot-retro-03.glb · 113 tris · 1.37×4.42×2.55 · 123 KB
- [Pot Retro 04](https://models.codelove.in/models/chromatic-chaos-pot-retro-04/) — https://models.codelove.in/library/chromatic-chaos/pot-retro-04.glb · 127 tris · 1.68×2.11×1.52 · 291 KB
- [Pot Retro 05](https://models.codelove.in/models/chromatic-chaos-pot-retro-05/) — https://models.codelove.in/library/chromatic-chaos/pot-retro-05.glb · 194 tris · 1.01×2.95×1 · 291 KB
- [Pot Vapor 01](https://models.codelove.in/models/chromatic-chaos-pot-vapor-01/) — https://models.codelove.in/library/chromatic-chaos/pot-vapor-01.glb · 106 tris · 1.58×2.43×1.48 · 123 KB
- [Pot Vapor 02](https://models.codelove.in/models/chromatic-chaos-pot-vapor-02/) — https://models.codelove.in/library/chromatic-chaos/pot-vapor-02.glb · 132 tris · 2.09×2.99×2.1 · 123 KB
- [Pot Vapor 03](https://models.codelove.in/models/chromatic-chaos-pot-vapor-03/) — https://models.codelove.in/library/chromatic-chaos/pot-vapor-03.glb · 197 tris · 1.51×4.43×2.55 · 324 KB
- [Pot Vapor 04](https://models.codelove.in/models/chromatic-chaos-pot-vapor-04/) — https://models.codelove.in/library/chromatic-chaos/pot-vapor-04.glb · 148 tris · 1.68×2.11×1.52 · 349 KB
- [Pot Vapor 05](https://models.codelove.in/models/chromatic-chaos-pot-vapor-05/) — https://models.codelove.in/library/chromatic-chaos/pot-vapor-05.glb · 218 tris · 1.36×2.98×1.36 · 349 KB
- [Screen Retro 01](https://models.codelove.in/models/chromatic-chaos-screen-retro-01/) — https://models.codelove.in/library/chromatic-chaos/screen-retro-01.glb · 526 tris · 3.01×2.27×2.24 · 224 KB
- [Screen Retro 02](https://models.codelove.in/models/chromatic-chaos-screen-retro-02/) — https://models.codelove.in/library/chromatic-chaos/screen-retro-02.glb · 392 tris · 3.73×2.27×2.24 · 312 KB · rigged · 6 animations inside
- [Screen Retro 03](https://models.codelove.in/models/chromatic-chaos-screen-retro-03/) — https://models.codelove.in/library/chromatic-chaos/screen-retro-03.glb · 528 tris · 4.25×2.71×2.26 · 313 KB · rigged · 6 animations inside
- [Venus 01 Floating](https://models.codelove.in/models/chromatic-chaos-venus-01-floating/) — https://models.codelove.in/library/chromatic-chaos/venus-01-floating.glb · 5,742 tris · 2.51×3.42×3.33 · 357 KB · 3 animations inside
- [Venus Retro](https://models.codelove.in/models/chromatic-chaos-venus-retro/) — https://models.codelove.in/library/chromatic-chaos/venus-retro.glb · 5,486 tris · 2.48×3.68×2.8 · 267 KB
