# Rovers & Landers — 5 free 3D models (Space)

> Part of models.codelove.in (https://models.codelove.in/), 6,792 free 3D models. License: Public domain — No attribution required; don't use insignia or logos shown on the model to imply endorsement.

- Collection page: https://models.codelove.in/models/collection/rovers/
- Whole collection as one .zip: https://models.codelove.in/packs/ (file list: https://models.codelove.in/data/packs/rovers.json)
- Every collection: https://models.codelove.in/llms.txt

- Format: glTF 2.0 binary (.glb), one file per model with textures embedded, compressed with EXT_meshopt_compression and EXT_texture_webp. three.js (GLTFLoader + MeshoptDecoder; drei's useGLTF sets this up) and Babylon.js load them directly; other engines need meshopt support or a decompressed copy.
- Size is the bounding box (width × height × depth) in glTF units, which are metres by the glTF spec; models are Y-up. A few imported models are not to real-world scale, so scale them to fit.
- Rigged humans use a Biped skeleton (root bone Bip01; the child characters use Bip02). The 20 animation clips (10 motions: idle, look around, talk, thoughtful, wave, cheer, clap, dance, walk, run) are separate skeleton-only .glb files in a female (f_) and a male (m_) set: load a character and a clip from its set, then play the clip with THREE.AnimationMixer — the bone names match.
- Each .glb carries its license and credit in the glTF asset block (asset.copyright, asset.extras).

Each line: name and model page — .glb URL · triangles · size · file size, then notes. Total 12.9 MB.

## Models

- [InSight Cruise Lander](https://models.codelove.in/models/in-sight-cruise-lander/) — https://models.codelove.in/library/rovers/in-sight-cruise-lander.glb · 121,443 tris · 6.13×2.17×3.33 · 3.1 MB
- [InSight Cruise Lander (2)](https://models.codelove.in/models/in-sight-cruise-lander-2/) — https://models.codelove.in/library/rovers/in-sight-cruise-lander-2.glb · 121,443 tris · 6.13×1.58×2.77 · 3.1 MB
- [InSight Cruise Lander (3)](https://models.codelove.in/models/in-sight-cruise-lander-3/) — https://models.codelove.in/library/rovers/in-sight-cruise-lander-3.glb · 121,443 tris · 2.47×1.58×2.56 · 3.0 MB
- [InSight Cruise Lander (4)](https://models.codelove.in/models/in-sight-cruise-lander-4/) — https://models.codelove.in/library/rovers/in-sight-cruise-lander-4.glb · 120,849 tris · 1.95×1.04×2.31 · 3.1 MB
- [Viking Lander](https://models.codelove.in/models/viking-lander/) — https://models.codelove.in/library/rovers/viking-lander.glb · 99,526 tris · 16.7×8.97×12.6 · 598 KB · 2 animations inside
