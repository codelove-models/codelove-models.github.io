# Rigged Children — 4 free 3D models (Characters)

> Part of models.codelove.in (https://models.codelove.in/), 6,792 free 3D models. License: MIT License — Keep the included license file with the model when you ship or share it.

- Collection page: https://models.codelove.in/models/collection/rigged-children/
- Whole collection as one .zip: https://models.codelove.in/packs/ (file list: https://models.codelove.in/data/packs/rigged-children.json)
- Every collection: https://models.codelove.in/llms.txt

- Format: glTF 2.0 binary (.glb), one file per model with textures embedded, compressed with EXT_meshopt_compression and EXT_texture_webp. three.js (GLTFLoader + MeshoptDecoder; drei's useGLTF sets this up) and Babylon.js load them directly; other engines need meshopt support or a decompressed copy.
- Size is the bounding box (width × height × depth) in glTF units, which are metres by the glTF spec; models are Y-up. A few imported models are not to real-world scale, so scale them to fit.
- Rigged humans use a Biped skeleton (root bone Bip01; the child characters use Bip02). The 20 animation clips (10 motions: idle, look around, talk, thoughtful, wave, cheer, clap, dance, walk, run) are separate skeleton-only .glb files in a female (f_) and a male (m_) set: load a character and a clip from its set, then play the clip with THREE.AnimationMixer — the bone names match.
- Each .glb carries its license and credit in the glTF asset block (asset.copyright, asset.extras).

Each line: name and model page — .glb URL · triangles · size · file size, then notes. Total 2.0 MB.

## Models

- [Female Child 01](https://models.codelove.in/models/female-child-01/) — https://models.codelove.in/models/female-child-01.glb · 7,102 tris · 0.99×1.43×0.3 · 527 KB · Female · Child · rigged · plays the female animation clips
- [Female Child 02](https://models.codelove.in/models/female-child-02/) — https://models.codelove.in/models/female-child-02.glb · 6,870 tris · 0.99×1.44×0.27 · 457 KB · Female · Child · rigged · plays the female animation clips
- [Male Child 01](https://models.codelove.in/models/male-child-01/) — https://models.codelove.in/models/male-child-01.glb · 6,660 tris · 1.06×1.43×0.26 · 549 KB · Male · Child · rigged · plays the male animation clips
- [Male Child 02](https://models.codelove.in/models/male-child-02/) — https://models.codelove.in/models/male-child-02.glb · 7,310 tris · 1.06×1.43×0.25 · 526 KB · Male · Child · rigged · plays the male animation clips

## Animation clips

- Idle: female https://models.codelove.in/animations/f_idle_neutral_01.glb (15.5 s) · male https://models.codelove.in/animations/m_idle_neutral_01.glb (11.7 s)
- Look around: female https://models.codelove.in/animations/f_idle_look_around_01.glb (4.5 s) · male https://models.codelove.in/animations/m_idle_look_around_01.glb (4.6 s)
- Talk: female https://models.codelove.in/animations/f_gestic_talk_neutral_01.glb (27.3 s) · male https://models.codelove.in/animations/m_gestic_talk_neutral_01.glb (35.6 s)
- Thoughtful: female https://models.codelove.in/animations/f_gestic_thoughtful_01.glb (9.4 s) · male https://models.codelove.in/animations/m_gestic_thoughtful_01.glb (13.5 s)
- Wave: female https://models.codelove.in/animations/f_wave_01.glb (5.5 s) · male https://models.codelove.in/animations/m_wave_01.glb (2.8 s)
- Cheer: female https://models.codelove.in/animations/f_cheer_01.glb (15.3 s) · male https://models.codelove.in/animations/m_cheer_01.glb (24.6 s)
- Clap: female https://models.codelove.in/animations/f_claphands_01.glb (15.9 s) · male https://models.codelove.in/animations/m_claphands_01.glb (7.0 s)
- Dance: female https://models.codelove.in/animations/f_dancing_neutral.glb (25.0 s) · male https://models.codelove.in/animations/m_dancing_neutral.glb (21.5 s)
- Walk: female https://models.codelove.in/animations/f_walk_neutral_01.glb (1.2 s) · male https://models.codelove.in/animations/m_walk_neutral_01.glb (1.2 s)
- Run: female https://models.codelove.in/animations/f_run_neutral_01.glb (0.8 s) · male https://models.codelove.in/animations/m_run_neutral_01.glb (0.7 s)
