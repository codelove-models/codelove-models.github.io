# Momus Park — 72 free 3D models (Animals 5, Buildings 9, Furniture 10, Nature 37, Trees 4, Props 7)

> Part of models.codelove.in (https://models.codelove.in/), 6,792 free 3D models. License: CC0 1.0 — public domain — No attribution required.

- Collection page: https://models.codelove.in/models/collection/momuspark/
- Whole collection as one .zip: https://models.codelove.in/packs/ (file list: https://models.codelove.in/data/packs/momuspark.json)
- Every collection: https://models.codelove.in/llms.txt

- Format: glTF 2.0 binary (.glb), one file per model with textures embedded, compressed with EXT_meshopt_compression and EXT_texture_webp. three.js (GLTFLoader + MeshoptDecoder; drei's useGLTF sets this up) and Babylon.js load them directly; other engines need meshopt support or a decompressed copy.
- Size is the bounding box (width × height × depth) in glTF units, which are metres by the glTF spec; models are Y-up. A few imported models are not to real-world scale, so scale them to fit.
- Rigged humans use a Biped skeleton (root bone Bip01; the child characters use Bip02). The 20 animation clips (10 motions: idle, look around, talk, thoughtful, wave, cheer, clap, dance, walk, run) are separate skeleton-only .glb files in a female (f_) and a male (m_) set: load a character and a clip from its set, then play the clip with THREE.AnimationMixer — the bone names match.
- Each .glb carries its license and credit in the glTF asset block (asset.copyright, asset.extras).

Each line: name and model page — .glb URL · triangles · size · file size, then notes. Total 7.4 MB.

## Models

### Animals (5)

- [Butterfly](https://models.codelove.in/models/momuspark-butterfly/) — https://models.codelove.in/library/momuspark/butterfly.glb · 112 tris · 1.12×0.64×0.19 · 37 KB · rigged
- [Deer Armature](https://models.codelove.in/models/momuspark-deer-armature/) — https://models.codelove.in/library/momuspark/deer-armature.glb · 3,356 tris · 0.01×0.02×0.03 · 139 KB · rigged
- [Mountain Lion](https://models.codelove.in/models/momuspark-mountain-lion/) — https://models.codelove.in/library/momuspark/mountain-lion.glb · 2,488 tris · 0.01×0.01×0.01 · 191 KB · rigged
- [Owl](https://models.codelove.in/models/momuspark-owl/) — https://models.codelove.in/library/momuspark/owl.glb · 1,904 tris · 0.48×0.67×0.55 · 113 KB · rigged
- [Pig Armature](https://models.codelove.in/models/momuspark-pig-armature/) — https://models.codelove.in/library/momuspark/pig-armature.glb · 2,000 tris · 1.14×0.79×1.24 · 143 KB · rigged

### Buildings (9)

- [Statue Greek 01 Art](https://models.codelove.in/models/momuspark-statue-greek-01-art/) — https://models.codelove.in/library/momuspark/statue-greek-01-art.glb · 1,982 tris · 0.65×1.95×0.47 · 72 KB
- [Statue Greek 02 Art](https://models.codelove.in/models/momuspark-statue-greek-02-art/) — https://models.codelove.in/library/momuspark/statue-greek-02-art.glb · 2,482 tris · 0.73×2×0.51 · 75 KB
- [Str Amphitheater 01 Art](https://models.codelove.in/models/momuspark-str-amphitheater-01-art/) — https://models.codelove.in/library/momuspark/str-amphitheater-01-art.glb · 504 tris · 21.9×2.49×9.11 · 90 KB
- [Str Column 04 Art](https://models.codelove.in/models/momuspark-str-column-04-art/) — https://models.codelove.in/library/momuspark/str-column-04-art.glb · 250 tris · 1.75×12×1.86 · 89 KB
- [Str Fountain 01 Art](https://models.codelove.in/models/momuspark-str-fountain-01-art/) — https://models.codelove.in/library/momuspark/str-fountain-01-art.glb · 1,112 tris · 6.73×1.52×6.75 · 239 KB
- [Str Ruins 01 Art](https://models.codelove.in/models/momuspark-str-ruins-01-art/) — https://models.codelove.in/library/momuspark/str-ruins-01-art.glb · 284 tris · 2.13×3.73×1.63 · 109 KB
- [Str Ruins 02 Art](https://models.codelove.in/models/momuspark-str-ruins-02-art/) — https://models.codelove.in/library/momuspark/str-ruins-02-art.glb · 878 tris · 1.91×2.51×1.92 · 85 KB
- [Str Ruins 03 Art](https://models.codelove.in/models/momuspark-str-ruins-03-art/) — https://models.codelove.in/library/momuspark/str-ruins-03-art.glb · 144 tris · 1.91×1.32×1.92 · 54 KB
- [Str Ruins 05 Art](https://models.codelove.in/models/momuspark-str-ruins-05-art/) — https://models.codelove.in/library/momuspark/str-ruins-05-art.glb · 210 tris · 3.25×1.23×1.18 · 89 KB

### Furniture (10)

- [Bench 01 Art](https://models.codelove.in/models/momuspark-bench-01-art/) — https://models.codelove.in/library/momuspark/bench-01-art.glb · 452 tris · 4.04×0.81×1.5 · 87 KB
- [Fence 01 Art](https://models.codelove.in/models/momuspark-fence-01-art/) — https://models.codelove.in/library/momuspark/fence-01-art.glb · 384 tris · 2.45×0.81×0.1 · 76 KB
- [Fence 01 Post Art](https://models.codelove.in/models/momuspark-fence-01-post-art/) — https://models.codelove.in/library/momuspark/fence-01-post-art.glb · 324 tris · 0.73×1.36×0.72 · 90 KB
- [Path 01 Art](https://models.codelove.in/models/momuspark-path-01-art/) — https://models.codelove.in/library/momuspark/path-01-art.glb · 84 tris · 6.35×0.21×4.67 · 55 KB
- [Path 02 Art](https://models.codelove.in/models/momuspark-path-02-art/) — https://models.codelove.in/library/momuspark/path-02-art.glb · 80 tris · 6.85×0.21×2.97 · 56 KB
- [Path 03 Art](https://models.codelove.in/models/momuspark-path-03-art/) — https://models.codelove.in/library/momuspark/path-03-art.glb · 228 tris · 1.88×0.17×1.93 · 85 KB
- [Path 04 Art](https://models.codelove.in/models/momuspark-path-04-art/) — https://models.codelove.in/library/momuspark/path-04-art.glb · 84 tris · 6.35×0.21×4.76 · 55 KB
- [Shelter Art](https://models.codelove.in/models/momuspark-shelter-art/) — https://models.codelove.in/library/momuspark/shelter-art.glb · 429 tris · 2.78×1.64×2.73 · 171 KB
- [Signal 01 Art](https://models.codelove.in/models/momuspark-signal-01-art/) — https://models.codelove.in/library/momuspark/signal-01-art.glb · 508 tris · 2.68×2.69×0.34 · 155 KB
- [Signal 02 Art](https://models.codelove.in/models/momuspark-signal-02-art/) — https://models.codelove.in/library/momuspark/signal-02-art.glb · 1,352 tris · 2.98×3.81×1.77 · 106 KB

### Nature (37)

- [Brick Step 01 Art](https://models.codelove.in/models/momuspark-brick-step-01-art/) — https://models.codelove.in/library/momuspark/brick-step-01-art.glb · 144 tris · 5.82×1.11×1.5 · 73 KB
- [Bush 01 Art](https://models.codelove.in/models/momuspark-bush-01-art/) — https://models.codelove.in/library/momuspark/bush-01-art.glb · 472 tris · 2.4×1.36×1.59 · 126 KB
- [Bush 02 Art](https://models.codelove.in/models/momuspark-bush-02-art/) — https://models.codelove.in/library/momuspark/bush-02-art.glb · 696 tris · 2.85×1.36×1.57 · 128 KB
- [Bush 03 Art](https://models.codelove.in/models/momuspark-bush-03-art/) — https://models.codelove.in/library/momuspark/bush-03-art.glb · 744 tris · 2.8×1.68×1.4 · 161 KB
- [Floating Island 01 Art](https://models.codelove.in/models/momuspark-floating-island-01-art/) — https://models.codelove.in/library/momuspark/floating-island-01-art.glb · 574 tris · 14.9×5.77×14.6 · 141 KB
- [Floating Island 02 Art](https://models.codelove.in/models/momuspark-floating-island-02-art/) — https://models.codelove.in/library/momuspark/floating-island-02-art.glb · 776 tris · 17.9×7.01×16.3 · 146 KB
- [Floating Island 3 Art](https://models.codelove.in/models/momuspark-floating-island-3-art/) — https://models.codelove.in/library/momuspark/floating-island-3-art.glb · 631 tris · 15.7×4.29×16 · 149 KB
- [Floating Island 4 Art](https://models.codelove.in/models/momuspark-floating-island-4-art/) — https://models.codelove.in/library/momuspark/floating-island-4-art.glb · 1,138 tris · 15.3×11.2×15.7 · 82 KB
- [Flower 01 A](https://models.codelove.in/models/momuspark-flower-01-a/) — https://models.codelove.in/library/momuspark/flower-01-a.glb · 178 tris · 0.15×0.81×0.35 · 48 KB
- [Flower 01 B](https://models.codelove.in/models/momuspark-flower-01-b/) — https://models.codelove.in/library/momuspark/flower-01-b.glb · 222 tris · 0.24×1.08×0.5 · 49 KB
- [Flower 02 A Art](https://models.codelove.in/models/momuspark-flower-02-a-art/) — https://models.codelove.in/library/momuspark/flower-02-a-art.glb · 624 tris · 0.79×0.85×0.55 · 90 KB
- [Flower 02 B Art](https://models.codelove.in/models/momuspark-flower-02-b-art/) — https://models.codelove.in/library/momuspark/flower-02-b-art.glb · 512 tris · 0.6×0.79×0.6 · 88 KB
- [Flower 03 A](https://models.codelove.in/models/momuspark-flower-03-a/) — https://models.codelove.in/library/momuspark/flower-03-a.glb · 388 tris · 0.74×0.86×0.78 · 52 KB
- [Flower 03 B](https://models.codelove.in/models/momuspark-flower-03-b/) — https://models.codelove.in/library/momuspark/flower-03-b.glb · 624 tris · 0.97×1.05×0.96 · 56 KB
- [Grass 01 A](https://models.codelove.in/models/momuspark-grass-01-a/) — https://models.codelove.in/library/momuspark/grass-01-a.glb · 4 tris · 0.85×0.44×0 · 43 KB
- [Grass 01 B](https://models.codelove.in/models/momuspark-grass-01-b/) — https://models.codelove.in/library/momuspark/grass-01-b.glb · 4 tris · 1.25×0.65×0 · 43 KB
- [LAND Floor](https://models.codelove.in/models/momuspark-land-floor/) — https://models.codelove.in/library/momuspark/land-floor.glb · 2 tris · 16×0×16 · 86 KB
- [Log 01 Art](https://models.codelove.in/models/momuspark-log-01-art/) — https://models.codelove.in/library/momuspark/log-01-art.glb · 1,685 tris · 3.27×1.48×1.34 · 145 KB
- [MOMUS Logo Top](https://models.codelove.in/models/momuspark-momus-logo-top/) — https://models.codelove.in/library/momuspark/momus-logo-top.glb · 72 tris · 6×6.15×1.25 · 29 KB
- [Mushroom 01 Art](https://models.codelove.in/models/momuspark-mushroom-01-art/) — https://models.codelove.in/library/momuspark/mushroom-01-art.glb · 172 tris · 0.82×0.56×0.85 · 98 KB
- [Mushroom 02 Art](https://models.codelove.in/models/momuspark-mushroom-02-art/) — https://models.codelove.in/library/momuspark/mushroom-02-art.glb · 144 tris · 0.43×0.76×0.39 · 99 KB
- [Rock 01 Art](https://models.codelove.in/models/momuspark-rock-01-art/) — https://models.codelove.in/library/momuspark/rock-01-art.glb · 270 tris · 4.24×2.47×3.03 · 80 KB
- [Rock 02 Art](https://models.codelove.in/models/momuspark-rock-02-art/) — https://models.codelove.in/library/momuspark/rock-02-art.glb · 350 tris · 2.67×2.55×1.65 · 103 KB
- [Rock 03 Art](https://models.codelove.in/models/momuspark-rock-03-art/) — https://models.codelove.in/library/momuspark/rock-03-art.glb · 668 tris · 6.82×4.43×4.91 · 142 KB
- [Rock 04 Art](https://models.codelove.in/models/momuspark-rock-04-art/) — https://models.codelove.in/library/momuspark/rock-04-art.glb · 472 tris · 3.24×1.69×2.76 · 106 KB
- [Rock 05 Art](https://models.codelove.in/models/momuspark-rock-05-art/) — https://models.codelove.in/library/momuspark/rock-05-art.glb · 188 tris · 2.75×2.61×2.38 · 44 KB
- [Root 01 Art](https://models.codelove.in/models/momuspark-root-01-art/) — https://models.codelove.in/library/momuspark/root-01-art.glb · 508 tris · 4.55×1.72×1.35 · 70 KB
- [Root 02 Art](https://models.codelove.in/models/momuspark-root-02-art/) — https://models.codelove.in/library/momuspark/root-02-art.glb · 360 tris · 5.03×1.71×1.43 · 69 KB
- [Terrain Amount 01 Art](https://models.codelove.in/models/momuspark-terrain-amount-01-art/) — https://models.codelove.in/library/momuspark/terrain-amount-01-art.glb · 68 tris · 9×1.6×5.02 · 176 KB
- [Terrain Amount 02 Art](https://models.codelove.in/models/momuspark-terrain-amount-02-art/) — https://models.codelove.in/library/momuspark/terrain-amount-02-art.glb · 148 tris · 9.05×2.44×5.02 · 177 KB
- [Tree Trunk 01 Art](https://models.codelove.in/models/momuspark-tree-trunk-01-art/) — https://models.codelove.in/library/momuspark/tree-trunk-01-art.glb · 892 tris · 3.42×3.02×3.26 · 156 KB
- [Water Fall 01 Art](https://models.codelove.in/models/momuspark-water-fall-01-art/) — https://models.codelove.in/library/momuspark/water-fall-01-art.glb · 10 tris · 5.12×14.9×2.77 · 165 KB
- [Water Fall 01 Art.001](https://models.codelove.in/models/momuspark-water-fall-01-art-001/) — https://models.codelove.in/library/momuspark/water-fall-01-art-001.glb · 10 tris · 5.12×14.9×2.77 · 165 KB
- [Water Fall 02 Art](https://models.codelove.in/models/momuspark-water-fall-02-art/) — https://models.codelove.in/library/momuspark/water-fall-02-art.glb · 10 tris · 2.59×14.9×3.38 · 165 KB
- [Water FX 2 Art](https://models.codelove.in/models/momuspark-water-fx-2-art/) — https://models.codelove.in/library/momuspark/water-fx-2-art.glb · 2 tris · 1.5×0×4 · 159 KB
- [Water Plane Art](https://models.codelove.in/models/momuspark-water-plane-art/) — https://models.codelove.in/library/momuspark/water-plane-art.glb · 2 tris · 4×0×1.5 · 165 KB
- [Water Pond 01 Art](https://models.codelove.in/models/momuspark-water-pond-01-art/) — https://models.codelove.in/library/momuspark/water-pond-01-art.glb · 8 tris · 14.1×0×12.1 · 165 KB

### Trees (4)

- [Tree 01 Art](https://models.codelove.in/models/momuspark-tree-01-art/) — https://models.codelove.in/library/momuspark/tree-01-art.glb · 882 tris · 15.9×12.1×9.76 · 163 KB
- [Tree 02 Art](https://models.codelove.in/models/momuspark-tree-02-art/) — https://models.codelove.in/library/momuspark/tree-02-art.glb · 928 tris · 12.8×11.8×14 · 164 KB
- [Tree 03 Art](https://models.codelove.in/models/momuspark-tree-03-art/) — https://models.codelove.in/library/momuspark/tree-03-art.glb · 692 tris · 2.52×2.76×2.31 · 189 KB
- [Tree 04 Art](https://models.codelove.in/models/momuspark-tree-04-art/) — https://models.codelove.in/library/momuspark/tree-04-art.glb · 616 tris · 8.57×14.5×6.64 · 188 KB

### Props (7)

- [Eyes Haunted 01 Art](https://models.codelove.in/models/momuspark-eyes-haunted-01-art/) — https://models.codelove.in/library/momuspark/eyes-haunted-01-art.glb · 2 tris · 0.4×0.4×0 · 24 KB
- [Eyes Haunted 02 Art](https://models.codelove.in/models/momuspark-eyes-haunted-02-art/) — https://models.codelove.in/library/momuspark/eyes-haunted-02-art.glb · 2 tris · 0.4×0.4×0 · 24 KB
- [Eyes Haunted 03 Art](https://models.codelove.in/models/momuspark-eyes-haunted-03-art/) — https://models.codelove.in/library/momuspark/eyes-haunted-03-art.glb · 2 tris · 1.2×0.4×0 · 24 KB
- [Eyes Haunted 04 Art](https://models.codelove.in/models/momuspark-eyes-haunted-04-art/) — https://models.codelove.in/library/momuspark/eyes-haunted-04-art.glb · 2 tris · 1.2×0.4×0 · 24 KB
- [Eyes Haunted 05 Art](https://models.codelove.in/models/momuspark-eyes-haunted-05-art/) — https://models.codelove.in/library/momuspark/eyes-haunted-05-art.glb · 4 tris · 1.2×0.4×0 · 24 KB
- [Momus Collection Sign 01](https://models.codelove.in/models/momuspark-momus-collection-sign-01/) — https://models.codelove.in/library/momuspark/momus-collection-sign-01.glb · 2 tris · 1.03×0.34×0 · 28 KB
- [Skydoor Art](https://models.codelove.in/models/momuspark-skydoor-art/) — https://models.codelove.in/library/momuspark/skydoor-art.glb · 5,146 tris · 15.8×9.85×2.41 · 231 KB
