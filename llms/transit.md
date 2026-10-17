# Transit — 23 free 3D models (Vehicles 2, Buildings 17, Furniture 1, Nature 3)

> Part of models.codelove.in (https://models.codelove.in/), 6,792 free 3D models. License: CC0 1.0 — public domain — No attribution required.

- Collection page: https://models.codelove.in/models/collection/transit/
- Whole collection as one .zip: https://models.codelove.in/packs/ (file list: https://models.codelove.in/data/packs/transit.json)
- Every collection: https://models.codelove.in/llms.txt

- Format: glTF 2.0 binary (.glb), one file per model with textures embedded, compressed with EXT_meshopt_compression and EXT_texture_webp. three.js (GLTFLoader + MeshoptDecoder; drei's useGLTF sets this up) and Babylon.js load them directly; other engines need meshopt support or a decompressed copy.
- Size is the bounding box (width × height × depth) in glTF units, which are metres by the glTF spec; models are Y-up. A few imported models are not to real-world scale, so scale them to fit.
- Rigged humans use a Biped skeleton (root bone Bip01; the child characters use Bip02). The 20 animation clips (10 motions: idle, look around, talk, thoughtful, wave, cheer, clap, dance, walk, run) are separate skeleton-only .glb files in a female (f_) and a male (m_) set: load a character and a clip from its set, then play the clip with THREE.AnimationMixer — the bone names match.
- Each .glb carries its license and credit in the glTF asset block (asset.copyright, asset.extras).

Each line: name and model page — .glb URL · triangles · size · file size, then notes. Total 5.2 MB.

## Models

### Vehicles (2)

- [Train 01 Art](https://models.codelove.in/models/transit-train-01-art/) — https://models.codelove.in/library/transit/train-01-art.glb · 24,731 tris · 5.02×4.35×16.6 · 500 KB
- [Train 02 Art](https://models.codelove.in/models/transit-train-02-art/) — https://models.codelove.in/library/transit/train-02-art.glb · 20,035 tris · 5.02×4.58×16.6 · 396 KB

### Buildings (17)

- [Dirt Path Art](https://models.codelove.in/models/transit-dirt-path-art/) — https://models.codelove.in/library/transit/dirt-path-art.glb · 52 tris · 9.85×0.03×2.95 · 116 KB
- [Iron Structure 01 Art](https://models.codelove.in/models/transit-iron-structure-01-art/) — https://models.codelove.in/library/transit/iron-structure-01-art.glb · 572 tris · 7.5×6.02×7.5 · 364 KB
- [Pipe 01 Art](https://models.codelove.in/models/transit-pipe-01-art/) — https://models.codelove.in/library/transit/pipe-01-art.glb · 136 tris · 1.77×16×1.77 · 115 KB
- [Platform 01 Art](https://models.codelove.in/models/transit-platform-01-art/) — https://models.codelove.in/library/transit/platform-01-art.glb · 100 tris · 8.64×0.17×8.64 · 97 KB
- [Tower Ornamental Fence Art](https://models.codelove.in/models/transit-tower-ornamental-fence-art/) — https://models.codelove.in/library/transit/tower-ornamental-fence-art.glb · 652 tris · 3.9×1.13×1.79 · 85 KB
- [Tower Station 01 Art](https://models.codelove.in/models/transit-tower-station-01-art/) — https://models.codelove.in/library/transit/tower-station-01-art.glb · 56,322 tris · 15×42.3×16 · 1.7 MB
- [Tower Station 01 Sponsor Rings Art](https://models.codelove.in/models/transit-tower-station-01-sponsor-rings-art/) — https://models.codelove.in/library/transit/tower-station-01-sponsor-rings-art.glb · 1,920 tris · 4.51×3.13×4.4 · 211 KB
- [Tower Station Caller Button Art](https://models.codelove.in/models/transit-tower-station-caller-button-art/) — https://models.codelove.in/library/transit/tower-station-caller-button-art.glb · 50 tris · 0.37×1.27×0.34 · 112 KB
- [Tower Station Dirt Art](https://models.codelove.in/models/transit-tower-station-dirt-art/) — https://models.codelove.in/library/transit/tower-station-dirt-art.glb · 24 tris · 6.85×0.53×7.72 · 116 KB
- [Tower Station Elevator Art](https://models.codelove.in/models/transit-tower-station-elevator-art/) — https://models.codelove.in/library/transit/tower-station-elevator-art.glb · 9,964 tris · 5.12×13.1×5.01 · 327 KB
- [Tower Station Fence Art](https://models.codelove.in/models/transit-tower-station-fence-art/) — https://models.codelove.in/library/transit/tower-station-fence-art.glb · 100 tris · 2.2×1.05×0.12 · 76 KB
- [Tower Station Ground Art](https://models.codelove.in/models/transit-tower-station-ground-art/) — https://models.codelove.in/library/transit/tower-station-ground-art.glb · 2 tris · 16×0×15.9 · 110 KB
- [Tower Station Light Art](https://models.codelove.in/models/transit-tower-station-light-art/) — https://models.codelove.in/library/transit/tower-station-light-art.glb · 112 tris · 0.95×0.4×0.46 · 112 KB
- [Tower Station Sign Art](https://models.codelove.in/models/transit-tower-station-sign-art/) — https://models.codelove.in/library/transit/tower-station-sign-art.glb · 114 tris · 2.14×1.36×0.51 · 84 KB
- [Tower Station Telephone Art](https://models.codelove.in/models/transit-tower-station-telephone-art/) — https://models.codelove.in/library/transit/tower-station-telephone-art.glb · 472 tris · 0.69×1.14×0.64 · 121 KB
- [Track 01 Tap Art](https://models.codelove.in/models/transit-track-01-tap-art/) — https://models.codelove.in/library/transit/track-01-tap-art.glb · 40 tris · 0×1.28×2.26 · 18 KB
- [Train Track 01](https://models.codelove.in/models/transit-train-track-01/) — https://models.codelove.in/library/transit/train-track-01.glb · 84 tris · 2.26×1.28×16 · 19 KB

### Furniture (1)

- [Bench 01](https://models.codelove.in/models/transit-bench-01/) — https://models.codelove.in/library/transit/bench-01.glb · 152 tris · 2.14×0.89×0.95 · 77 KB

### Nature (3)

- [Plant 01 Art](https://models.codelove.in/models/transit-plant-01-art/) — https://models.codelove.in/library/transit/plant-01-art.glb · 298 tris · 3.12×3.08×3.45 · 287 KB
- [Plant 02 Art](https://models.codelove.in/models/transit-plant-02-art/) — https://models.codelove.in/library/transit/plant-02-art.glb · 184 tris · 3.12×2.6×3.45 · 92 KB
- [Rock 01](https://models.codelove.in/models/transit-rock-01/) — https://models.codelove.in/library/transit/rock-01.glb · 96 tris · 4.07×2.35×4.61 · 146 KB
