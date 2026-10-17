# Bikes & Motorcycles — 4 free 3D models (Bikes)

> Part of models.codelove.in (https://models.codelove.in/), 6,792 free 3D models. License: CC0 1.0 — public domain — No attribution required.

- Collection page: https://models.codelove.in/models/collection/bikes/
- Whole collection as one .zip: https://models.codelove.in/packs/ (file list: https://models.codelove.in/data/packs/bikes.json)
- Every collection: https://models.codelove.in/llms.txt

- Format: glTF 2.0 binary (.glb), one file per model with textures embedded, compressed with EXT_meshopt_compression and EXT_texture_webp. three.js (GLTFLoader + MeshoptDecoder; drei's useGLTF sets this up) and Babylon.js load them directly; other engines need meshopt support or a decompressed copy.
- Size is the bounding box (width × height × depth) in glTF units, which are metres by the glTF spec; models are Y-up. A few imported models are not to real-world scale, so scale them to fit.
- Rigged humans use a Biped skeleton (root bone Bip01; the child characters use Bip02). The 20 animation clips (10 motions: idle, look around, talk, thoughtful, wave, cheer, clap, dance, walk, run) are separate skeleton-only .glb files in a female (f_) and a male (m_) set: load a character and a clip from its set, then play the clip with THREE.AnimationMixer — the bone names match.
- Each .glb carries its license and credit in the glTF asset block (asset.copyright, asset.extras).

Each line: name and model page — .glb URL · triangles · size · file size, then notes. Total 8.9 MB.

## Models

- [Carbon Road Racing Bike](https://models.codelove.in/models/bikes-carbon-racing-bike/) — https://models.codelove.in/library/bikes/carbon-racing-bike.glb · 36,400 tris · 0.55×1.05×1.85 · 3.7 MB
- [Cyberpunk Neon Motorbike](https://models.codelove.in/models/bikes-cyberpunk-motorbike/) — https://models.codelove.in/library/bikes/cyberpunk-motorbike.glb · 18,450 tris · 0.85×1.25×2.2 · 501 KB
- [Urban Commuter Bicycle](https://models.codelove.in/models/bikes-urban-bicycle/) — https://models.codelove.in/library/bikes/urban-bicycle.glb · 14,200 tris · 0.5×1.1×1.75 · 1.2 MB
- [V-Twin Chopper Motorcycle](https://models.codelove.in/models/bikes-chopper-motorcycle/) — https://models.codelove.in/library/bikes/chopper-motorcycle.glb · 42,100 tris · 0.95×1.35×2.45 · 3.5 MB
