# Gaming & Esports — 3 free 3D models (Gaming)

> Part of models.codelove.in (https://models.codelove.in/), 6,792 free 3D models. License: CC0 1.0 — public domain — No attribution required.

- Collection page: https://models.codelove.in/models/collection/gaming/
- Whole collection as one .zip: https://models.codelove.in/packs/ (file list: https://models.codelove.in/data/packs/gaming.json)
- Every collection: https://models.codelove.in/llms.txt

- Format: glTF 2.0 binary (.glb), one file per model with textures embedded, compressed with EXT_meshopt_compression and EXT_texture_webp. three.js (GLTFLoader + MeshoptDecoder; drei's useGLTF sets this up) and Babylon.js load them directly; other engines need meshopt support or a decompressed copy.
- Size is the bounding box (width × height × depth) in glTF units, which are metres by the glTF spec; models are Y-up. A few imported models are not to real-world scale, so scale them to fit.
- Rigged humans use a Biped skeleton (root bone Bip01; the child characters use Bip02). The 20 animation clips (10 motions: idle, look around, talk, thoughtful, wave, cheer, clap, dance, walk, run) are separate skeleton-only .glb files in a female (f_) and a male (m_) set: load a character and a clip from its set, then play the clip with THREE.AnimationMixer — the bone names match.
- Each .glb carries its license and credit in the glTF asset block (asset.copyright, asset.extras).

Each line: name and model page — .glb URL · triangles · size · file size, then notes. Total 3.8 MB.

## Models

- [Cyber Combat Soldier](https://models.codelove.in/models/gaming-combat-soldier/) — https://models.codelove.in/library/gaming/combat-soldier.glb · 8,200 tris · 0.85×1.85×0.6 · 775 KB · rigged · 4 animations inside
- [Dungeon Battle Arena](https://models.codelove.in/models/gaming-dungeon-war-arena/) — https://models.codelove.in/library/gaming/dungeon-war-arena.glb · 28,400 tris · 18.5×4.2×16.8 · 3.0 MB
- [Platformer Battle Stage](https://models.codelove.in/models/gaming-game-collision-stage/) — https://models.codelove.in/library/gaming/game-collision-stage.glb · 480 tris · 12×3.5×12 · 36 KB
