# Prototype Bits — 72 free 3D models (Props)

> Part of models.codelove.in (https://models.codelove.in/), 6,792 free 3D models. License: CC0 1.0 — public domain — No attribution required.

- Collection page: https://models.codelove.in/models/collection/prototype-bits/
- Whole collection as one .zip: https://models.codelove.in/packs/ (file list: https://models.codelove.in/data/packs/prototype-bits.json)
- Every collection: https://models.codelove.in/llms.txt

- Format: glTF 2.0 binary (.glb), one file per model with textures embedded, compressed with EXT_meshopt_compression and EXT_texture_webp. three.js (GLTFLoader + MeshoptDecoder; drei's useGLTF sets this up) and Babylon.js load them directly; other engines need meshopt support or a decompressed copy.
- Size is the bounding box (width × height × depth) in glTF units, which are metres by the glTF spec; models are Y-up. A few imported models are not to real-world scale, so scale them to fit.
- Rigged humans use a Biped skeleton (root bone Bip01; the child characters use Bip02). The 20 animation clips (10 motions: idle, look around, talk, thoughtful, wave, cheer, clap, dance, walk, run) are separate skeleton-only .glb files in a female (f_) and a male (m_) set: load a character and a clip from its set, then play the clip with THREE.AnimationMixer — the bone names match.
- Each .glb carries its license and credit in the glTF asset block (asset.copyright, asset.extras).

Each line: name and model page — .glb URL · triangles · size · file size, then notes. Total 2.3 MB.

## Models

- [Barrel A](https://models.codelove.in/models/prototype-bits-barrel-a/) — https://models.codelove.in/library/prototype-bits/barrel-a.glb · 384 tris · 1×1×1 · 33 KB
- [Barrel B](https://models.codelove.in/models/prototype-bits-barrel-b/) — https://models.codelove.in/library/prototype-bits/barrel-b.glb · 384 tris · 1×1×1 · 33 KB
- [Barrel C](https://models.codelove.in/models/prototype-bits-barrel-c/) — https://models.codelove.in/library/prototype-bits/barrel-c.glb · 384 tris · 1×1×1 · 33 KB
- [Box A](https://models.codelove.in/models/prototype-bits-box-a/) — https://models.codelove.in/library/prototype-bits/box-a.glb · 56 tris · 0.46×0.51×0.46 · 30 KB
- [Box B](https://models.codelove.in/models/prototype-bits-box-b/) — https://models.codelove.in/library/prototype-bits/box-b.glb · 80 tris · 0.6×0.4×0.41 · 30 KB
- [Box C](https://models.codelove.in/models/prototype-bits-box-c/) — https://models.codelove.in/library/prototype-bits/box-c.glb · 98 tris · 0.8×0.4×0.61 · 30 KB
- [Can A](https://models.codelove.in/models/prototype-bits-can-a/) — https://models.codelove.in/library/prototype-bits/can-a.glb · 208 tris · 0.3×0.48×0.3 · 32 KB
- [Can B](https://models.codelove.in/models/prototype-bits-can-b/) — https://models.codelove.in/library/prototype-bits/can-b.glb · 208 tris · 0.3×0.48×0.3 · 32 KB
- [Coin A](https://models.codelove.in/models/prototype-bits-coin-a/) — https://models.codelove.in/library/prototype-bits/coin-a.glb · 236 tris · 1×1×0.35 · 32 KB
- [Coin B](https://models.codelove.in/models/prototype-bits-coin-b/) — https://models.codelove.in/library/prototype-bits/coin-b.glb · 236 tris · 1×1×0.35 · 32 KB
- [Coin C](https://models.codelove.in/models/prototype-bits-coin-c/) — https://models.codelove.in/library/prototype-bits/coin-c.glb · 236 tris · 1×1×0.35 · 32 KB
- [Cube Prototype Large A](https://models.codelove.in/models/prototype-bits-cube-prototype-large-a/) — https://models.codelove.in/library/prototype-bits/cube-prototype-large-a.glb · 44 tris · 4×4×4 · 29 KB
- [Cube Prototype Large B](https://models.codelove.in/models/prototype-bits-cube-prototype-large-b/) — https://models.codelove.in/library/prototype-bits/cube-prototype-large-b.glb · 44 tris · 4×4×4 · 29 KB
- [Cube Prototype Small](https://models.codelove.in/models/prototype-bits-cube-prototype-small/) — https://models.codelove.in/library/prototype-bits/cube-prototype-small.glb · 44 tris · 2×2×2 · 29 KB
- [Door A](https://models.codelove.in/models/prototype-bits-door-a/) — https://models.codelove.in/library/prototype-bits/door-a.glb · 296 tris · 1.6×2.8×0.55 · 33 KB
- [Door A Decorated](https://models.codelove.in/models/prototype-bits-door-a-decorated/) — https://models.codelove.in/library/prototype-bits/door-a-decorated.glb · 392 tris · 1.6×2.8×0.63 · 34 KB
- [Door B](https://models.codelove.in/models/prototype-bits-door-b/) — https://models.codelove.in/library/prototype-bits/door-b.glb · 167 tris · 1.6×2.8×0.54 · 32 KB
- [Dummy Base](https://models.codelove.in/models/prototype-bits-dummy-base/) — https://models.codelove.in/library/prototype-bits/dummy-base.glb · 2,454 tris · 1.94×2.2×0.99 · 74 KB
- [Floor](https://models.codelove.in/models/prototype-bits-floor/) — https://models.codelove.in/library/prototype-bits/floor.glb · 52 tris · 4×0.5×4 · 29 KB
- [Floor Dirt](https://models.codelove.in/models/prototype-bits-floor-dirt/) — https://models.codelove.in/library/prototype-bits/floor-dirt.glb · 120 tris · 4×0.53×4 · 31 KB
- [Floor Prototype](https://models.codelove.in/models/prototype-bits-floor-prototype/) — https://models.codelove.in/library/prototype-bits/floor-prototype.glb · 20 tris · 4×0.5×4 · 29 KB
- [Pallet Large](https://models.codelove.in/models/prototype-bits-pallet-large/) — https://models.codelove.in/library/prototype-bits/pallet-large.glb · 132 tris · 4×0.5×4 · 31 KB
- [Pallet Small](https://models.codelove.in/models/prototype-bits-pallet-small/) — https://models.codelove.in/library/prototype-bits/pallet-small.glb · 132 tris · 2×0.5×2 · 31 KB
- [Pallet Small Decorated A](https://models.codelove.in/models/prototype-bits-pallet-small-decorated-a/) — https://models.codelove.in/library/prototype-bits/pallet-small-decorated-a.glb · 1,668 tris · 2×1.5×2 · 51 KB
- [Pallet Small Decorated B](https://models.codelove.in/models/prototype-bits-pallet-small-decorated-b/) — https://models.codelove.in/library/prototype-bits/pallet-small-decorated-b.glb · 3,130 tris · 2×3×2 · 73 KB
- [Pillar A](https://models.codelove.in/models/prototype-bits-pillar-a/) — https://models.codelove.in/library/prototype-bits/pillar-a.glb · 44 tris · 0.6×4.1×0.6 · 29 KB
- [Pillar B](https://models.codelove.in/models/prototype-bits-pillar-b/) — https://models.codelove.in/library/prototype-bits/pillar-b.glb · 44 tris · 1×4.1×1 · 29 KB
- [Primitive Beam](https://models.codelove.in/models/prototype-bits-primitive-beam/) — https://models.codelove.in/library/prototype-bits/primitive-beam.glb · 12 tris · 4×1×1 · 29 KB
- [Primitive Cube](https://models.codelove.in/models/prototype-bits-primitive-cube/) — https://models.codelove.in/library/prototype-bits/primitive-cube.glb · 12 tris · 4×4×4 · 29 KB
- [Primitive Cube Small](https://models.codelove.in/models/prototype-bits-primitive-cube-small/) — https://models.codelove.in/library/prototype-bits/primitive-cube-small.glb · 12 tris · 2×2×2 · 29 KB
- [Primitive Doorway](https://models.codelove.in/models/prototype-bits-primitive-doorway/) — https://models.codelove.in/library/prototype-bits/primitive-doorway.glb · 28 tris · 4×4×1 · 29 KB
- [Primitive Floor](https://models.codelove.in/models/prototype-bits-primitive-floor/) — https://models.codelove.in/library/prototype-bits/primitive-floor.glb · 12 tris · 4×1×4 · 29 KB
- [Primitive Floor Hole](https://models.codelove.in/models/prototype-bits-primitive-floor-hole/) — https://models.codelove.in/library/prototype-bits/primitive-floor-hole.glb · 32 tris · 4×1×4 · 29 KB
- [Primitive Pillar](https://models.codelove.in/models/prototype-bits-primitive-pillar/) — https://models.codelove.in/library/prototype-bits/primitive-pillar.glb · 12 tris · 1×4×1 · 29 KB
- [Primitive Slope](https://models.codelove.in/models/prototype-bits-primitive-slope/) — https://models.codelove.in/library/prototype-bits/primitive-slope.glb · 8 tris · 4×4×4 · 29 KB
- [Primitive Slope Half](https://models.codelove.in/models/prototype-bits-primitive-slope-half/) — https://models.codelove.in/library/prototype-bits/primitive-slope-half.glb · 16 tris · 4×4×4 · 29 KB
- [Primitive Slope Half Inner Corner](https://models.codelove.in/models/prototype-bits-primitive-slope-half-inner-corner/) — https://models.codelove.in/library/prototype-bits/primitive-slope-half-inner-corner.glb · 18 tris · 4×4×4 · 29 KB
- [Primitive Slope Half Outer Corner](https://models.codelove.in/models/prototype-bits-primitive-slope-half-outer-corner/) — https://models.codelove.in/library/prototype-bits/primitive-slope-half-outer-corner.glb · 18 tris · 4×4×4 · 29 KB
- [Primitive Slope Inner Corner](https://models.codelove.in/models/prototype-bits-primitive-slope-inner-corner/) — https://models.codelove.in/library/prototype-bits/primitive-slope-inner-corner.glb · 10 tris · 4×4×4 · 29 KB
- [Primitive Slope Outer Corner](https://models.codelove.in/models/prototype-bits-primitive-slope-outer-corner/) — https://models.codelove.in/library/prototype-bits/primitive-slope-outer-corner.glb · 6 tris · 4×4×4 · 29 KB
- [Primitive Stairs](https://models.codelove.in/models/prototype-bits-primitive-stairs/) — https://models.codelove.in/library/prototype-bits/primitive-stairs.glb · 68 tris · 4×4×4 · 29 KB
- [Primitive Stairs Half](https://models.codelove.in/models/prototype-bits-primitive-stairs-half/) — https://models.codelove.in/library/prototype-bits/primitive-stairs-half.glb · 36 tris · 2×2×4 · 29 KB
- [Primitive Wall](https://models.codelove.in/models/prototype-bits-primitive-wall/) — https://models.codelove.in/library/prototype-bits/primitive-wall.glb · 12 tris · 4×4×1 · 29 KB
- [Primitive Wall Half](https://models.codelove.in/models/prototype-bits-primitive-wall-half/) — https://models.codelove.in/library/prototype-bits/primitive-wall-half.glb · 12 tris · 2×4×1 · 29 KB
- [Primitive Wall Open Corner](https://models.codelove.in/models/prototype-bits-primitive-wall-open-corner/) — https://models.codelove.in/library/prototype-bits/primitive-wall-open-corner.glb · 20 tris · 4×4×1 · 29 KB
- [Primitive Wall Short](https://models.codelove.in/models/prototype-bits-primitive-wall-short/) — https://models.codelove.in/library/prototype-bits/primitive-wall-short.glb · 12 tris · 4×2×1 · 29 KB
- [Primitive Wall Slope](https://models.codelove.in/models/prototype-bits-primitive-wall-slope/) — https://models.codelove.in/library/prototype-bits/primitive-wall-slope.glb · 8 tris · 4×4×1 · 29 KB
- [Primitive Window](https://models.codelove.in/models/prototype-bits-primitive-window/) — https://models.codelove.in/library/prototype-bits/primitive-window.glb · 32 tris · 4×4×1 · 29 KB
- [Table Medium](https://models.codelove.in/models/prototype-bits-table-medium/) — https://models.codelove.in/library/prototype-bits/table-medium.glb · 152 tris · 2×0.8×1.5 · 32 KB
- [Table Medium Decorated](https://models.codelove.in/models/prototype-bits-table-medium-decorated/) — https://models.codelove.in/library/prototype-bits/table-medium-decorated.glb · 900 tris · 2×1.71×1.5 · 45 KB
- [Table Medium Long](https://models.codelove.in/models/prototype-bits-table-medium-long/) — https://models.codelove.in/library/prototype-bits/table-medium-long.glb · 152 tris · 3×1×1.5 · 32 KB
- [Target](https://models.codelove.in/models/prototype-bits-target/) — https://models.codelove.in/library/prototype-bits/target.glb · 120 tris · 1×1×0.2 · 31 KB
- [Target Pieces A](https://models.codelove.in/models/prototype-bits-target-pieces-a/) — https://models.codelove.in/library/prototype-bits/target-pieces-a.glb · 30 tris · 0.43×0.5×0.2 · 29 KB
- [Target Pieces B](https://models.codelove.in/models/prototype-bits-target-pieces-b/) — https://models.codelove.in/library/prototype-bits/target-pieces-b.glb · 40 tris · 0.5×0.68×0.2 · 29 KB
- [Target Pieces C](https://models.codelove.in/models/prototype-bits-target-pieces-c/) — https://models.codelove.in/library/prototype-bits/target-pieces-c.glb · 20 tris · 0.25×0.5×0.2 · 29 KB
- [Target Pieces D](https://models.codelove.in/models/prototype-bits-target-pieces-d/) — https://models.codelove.in/library/prototype-bits/target-pieces-d.glb · 30 tris · 0.43×0.5×0.2 · 29 KB
- [Target Pieces E](https://models.codelove.in/models/prototype-bits-target-pieces-e/) — https://models.codelove.in/library/prototype-bits/target-pieces-e.glb · 40 tris · 0.5×0.68×0.2 · 30 KB
- [Target Pieces F](https://models.codelove.in/models/prototype-bits-target-pieces-f/) — https://models.codelove.in/library/prototype-bits/target-pieces-f.glb · 20 tris · 0.25×0.5×0.2 · 29 KB
- [Target Small](https://models.codelove.in/models/prototype-bits-target-small/) — https://models.codelove.in/library/prototype-bits/target-small.glb · 132 tris · 0.5×1.1×0.15 · 31 KB
- [Target Stand A](https://models.codelove.in/models/prototype-bits-target-stand-a/) — https://models.codelove.in/library/prototype-bits/target-stand-a.glb · 208 tris · 1×2×1.5 · 33 KB
- [Target Stand A Decorated](https://models.codelove.in/models/prototype-bits-target-stand-a-decorated/) — https://models.codelove.in/library/prototype-bits/target-stand-a-decorated.glb · 1,216 tris · 1.94×2.44×1.5 · 49 KB
- [Target Stand B](https://models.codelove.in/models/prototype-bits-target-stand-b/) — https://models.codelove.in/library/prototype-bits/target-stand-b.glb · 208 tris · 1×2×1.5 · 33 KB
- [Target Wall Large A](https://models.codelove.in/models/prototype-bits-target-wall-large-a/) — https://models.codelove.in/library/prototype-bits/target-wall-large-a.glb · 12 tris · 2×2×0.2 · 29 KB
- [Target Wall Large B](https://models.codelove.in/models/prototype-bits-target-wall-large-b/) — https://models.codelove.in/library/prototype-bits/target-wall-large-b.glb · 12 tris · 2×2×0.2 · 29 KB
- [Target Wall Small](https://models.codelove.in/models/prototype-bits-target-wall-small/) — https://models.codelove.in/library/prototype-bits/target-wall-small.glb · 96 tris · 1.18×1.14×0.33 · 30 KB
- [Wall](https://models.codelove.in/models/prototype-bits-wall/) — https://models.codelove.in/library/prototype-bits/wall.glb · 96 tris · 4×4×0.53 · 30 KB
- [Wall Decorated](https://models.codelove.in/models/prototype-bits-wall-decorated/) — https://models.codelove.in/library/prototype-bits/wall-decorated.glb · 288 tris · 4×4×0.91 · 33 KB
- [Wall Doorway](https://models.codelove.in/models/prototype-bits-wall-doorway/) — https://models.codelove.in/library/prototype-bits/wall-doorway.glb · 178 tris · 4×4×0.53 · 32 KB
- [Wall Half](https://models.codelove.in/models/prototype-bits-wall-half/) — https://models.codelove.in/library/prototype-bits/wall-half.glb · 84 tris · 2×4×0.53 · 30 KB
- [Wall Target](https://models.codelove.in/models/prototype-bits-wall-target/) — https://models.codelove.in/library/prototype-bits/wall-target.glb · 126 tris · 4×4×0.99 · 31 KB
- [Wall Window Closed](https://models.codelove.in/models/prototype-bits-wall-window-closed/) — https://models.codelove.in/library/prototype-bits/wall-window-closed.glb · 220 tris · 4×4×0.53 · 32 KB
- [Wall Window Open](https://models.codelove.in/models/prototype-bits-wall-window-open/) — https://models.codelove.in/library/prototype-bits/wall-window-open.glb · 208 tris · 4×4×0.53 · 32 KB
