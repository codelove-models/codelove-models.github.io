# Rockets & Crewed Craft — 28 free 3D models (Space 26, Weapons 2)

> Part of models.codelove.in (https://models.codelove.in/), 6,792 free 3D models. License: Public domain — No attribution required; don't use insignia or logos shown on the model to imply endorsement.

- Collection page: https://models.codelove.in/models/collection/crewed/
- Whole collection as one .zip: https://models.codelove.in/packs/ (file list: https://models.codelove.in/data/packs/crewed.json)
- Every collection: https://models.codelove.in/llms.txt

- Format: glTF 2.0 binary (.glb), one file per model with textures embedded, compressed with EXT_meshopt_compression and EXT_texture_webp. three.js (GLTFLoader + MeshoptDecoder; drei's useGLTF sets this up) and Babylon.js load them directly; other engines need meshopt support or a decompressed copy.
- Size is the bounding box (width × height × depth) in glTF units, which are metres by the glTF spec; models are Y-up. A few imported models are not to real-world scale, so scale them to fit.
- Rigged humans use a Biped skeleton (root bone Bip01; the child characters use Bip02). The 20 animation clips (10 motions: idle, look around, talk, thoughtful, wave, cheer, clap, dance, walk, run) are separate skeleton-only .glb files in a female (f_) and a male (m_) set: load a character and a clip from its set, then play the clip with THREE.AnimationMixer — the bone names match.
- Each .glb carries its license and credit in the glTF asset block (asset.copyright, asset.extras).

Each line: name and model page — .glb URL · triangles · size · file size, then notes. Total 13.1 MB.

## Models

### Space (26)

- [Apollo Lunar Module](https://models.codelove.in/models/apollo-lunar-module/) — https://models.codelove.in/library/crewed/apollo-lunar-module.glb · 97,588 tris · 6.43×5.01×6.43 · 948 KB · 135 animations inside
- [Apollo Soyuz](https://models.codelove.in/models/apollo-soyuz/) — https://models.codelove.in/library/crewed/apollo-soyuz.glb · 32,996 tris · 21.6×9.63×5.12 · 249 KB · 2 animations inside
- [ESAS Crew Module](https://models.codelove.in/models/esas-crew-module/) — https://models.codelove.in/library/crewed/esas-crew-module.glb · 650 tris · 166.3×163.8×86 · 11 KB · 3 animations inside
- [Gemini](https://models.codelove.in/models/gemini/) — https://models.codelove.in/library/crewed/gemini.glb · 38,840 tris · 7.21×13.7×7.21 · 467 KB · 77 animations inside
- [Geostationary Operational Environmental Satellites](https://models.codelove.in/models/geostationary-operational-environmental-satellites/) — https://models.codelove.in/library/crewed/geostationary-operational-environmental-satellites.glb · 40,935 tris · 0.13×0.12×0.11 · 593 KB
- [International Space Station (ISS) (A)](https://models.codelove.in/models/international-space-station-iss-a/) — https://models.codelove.in/library/crewed/international-space-station-iss-a.glb · 6,642 tris · 25.6×16×15.4 · 66 KB
- [International Space Station (ISS) (B)](https://models.codelove.in/models/international-space-station-iss-b/) — https://models.codelove.in/library/crewed/international-space-station-iss-b.glb · 119,279 tris · 14.4×45.4×45.5 · 801 KB · 11 animations inside
- [JSC Mission Control Room](https://models.codelove.in/models/jsc-mission-control-room/) — https://models.codelove.in/library/crewed/jsc-mission-control-room.glb · 11,130 tris · 14.5×5.89×24.6 · 339 KB
- [Lunar Reconnaissance Orbiter (A)](https://models.codelove.in/models/lunar-reconnaissance-orbiter-a/) — https://models.codelove.in/library/crewed/lunar-reconnaissance-orbiter-a.glb · 76,349 tris · 33.3×26.3×32.3 · 1.2 MB
- [Lunar Reconnaissance Orbiter (B)](https://models.codelove.in/models/lunar-reconnaissance-orbiter-b/) — https://models.codelove.in/library/crewed/lunar-reconnaissance-orbiter-b.glb · 8,142 tris · 5.45×3.66×5.5 · 326 KB
- [MErcury Surface, Space ENvironment, GEochemistry, and Ranging (MESSENGER)](https://models.codelove.in/models/mercury-surface-space-environment-geochemistry-and-ranging-messenger/) — https://models.codelove.in/library/crewed/mercury-surface-space-environment-geochemistry-and-ranging-messenger.glb · 11,572 tris · 5.28×2.64×6.96 · 363 KB
- [Ocean Surface Topography Mission (OSTM Jason-2)](https://models.codelove.in/models/ocean-surface-topography-mission-ostm-jason-2/) — https://models.codelove.in/library/crewed/ocean-surface-topography-mission-ostm-jason-2.glb · 65,314 tris · 0.99×0.54×2.25 · 640 KB
- [Space Shuttle (A)](https://models.codelove.in/models/space-shuttle-a/) — https://models.codelove.in/library/crewed/space-shuttle-a.glb · 120,215 tris · 19.8×14.2×41.9 · 1.3 MB · 177 animations inside
- [Space Shuttle (B)](https://models.codelove.in/models/space-shuttle-b/) — https://models.codelove.in/library/crewed/space-shuttle-b.glb · 2,476 tris · 5.77×8.92×3.42 · 21 KB · 1 animation inside
- [Space Shuttle (C)](https://models.codelove.in/models/space-shuttle-c/) — https://models.codelove.in/library/crewed/space-shuttle-c.glb · 4,999 tris · 1471.1×937×555.4 · 47 KB · 2 animations inside
- [Space Shuttle (D) (3)](https://models.codelove.in/models/space-shuttle-d-3/) — https://models.codelove.in/library/crewed/space-shuttle-d-3.glb · 5,686 tris · 102.6×97×97 · 192 KB
- [Space Shuttle (D) (4)](https://models.codelove.in/models/space-shuttle-d-4/) — https://models.codelove.in/library/crewed/space-shuttle-d-4.glb · 5,686 tris · 51.3×48.5×48.5 · 192 KB
- [Space Shuttle (D) (5)](https://models.codelove.in/models/space-shuttle-d-5/) — https://models.codelove.in/library/crewed/space-shuttle-d-5.glb · 19,378 tris · 1471.1×937×555.4 · 535 KB · 2 animations inside
- [Space Shuttle Parts](https://models.codelove.in/models/space-shuttle-parts/) — https://models.codelove.in/library/crewed/space-shuttle-parts.glb · 6,430 tris · 38×72.7×32.9 · 219 KB
- [Space Shuttle Parts (2)](https://models.codelove.in/models/space-shuttle-parts-2/) — https://models.codelove.in/library/crewed/space-shuttle-parts-2.glb · 6,326 tris · 1879.7×379.6×388 · 262 KB
- [Space Shuttle Parts (3)](https://models.codelove.in/models/space-shuttle-parts-3/) — https://models.codelove.in/library/crewed/space-shuttle-parts-3.glb · 5,635 tris · 107.2×191.6×160.1 · 224 KB
- [Space Shuttle Parts (4)](https://models.codelove.in/models/space-shuttle-parts-4/) — https://models.codelove.in/library/crewed/space-shuttle-parts-4.glb · 2,487 tris · 475.9×183×37.8 · 72 KB
- [Space Shuttle Parts (5)](https://models.codelove.in/models/space-shuttle-parts-5/) — https://models.codelove.in/library/crewed/space-shuttle-parts-5.glb · 4,136 tris · 1781.2×229.4×229.4 · 200 KB
- [Space Shuttle Remote Manipulator System (Canadarm)](https://models.codelove.in/models/space-shuttle-remote-manipulator-system-canadarm/) — https://models.codelove.in/library/crewed/space-shuttle-remote-manipulator-system-canadarm.glb · 1,080 tris · 15.5×30.2×596.4 · 58 KB
- [Station Explorer for X-Ray Timing and Navigation (SEXTANT)](https://models.codelove.in/models/station-explorer-for-x-ray-timing-and-navigation-sextant/) — https://models.codelove.in/library/crewed/station-explorer-for-x-ray-timing-and-navigation-sextant.glb · 340,266 tris · 116.1×105.5×158.8 · 3.0 MB
- [Tropical Rainfall Measuring Mission (TRMM)](https://models.codelove.in/models/tropical-rainfall-measuring-mission-trmm/) — https://models.codelove.in/library/crewed/tropical-rainfall-measuring-mission-trmm.glb · 52,320 tris · 356.8×1011.6×375.8 · 351 KB

### Weapons (2)

- [Mobile Launcher](https://models.codelove.in/models/mobile-launcher/) — https://models.codelove.in/library/crewed/mobile-launcher.glb · 19,296 tris · 1.02×2.46×0.87 · 394 KB · 1 animation inside
- [Mobile Launcher (2)](https://models.codelove.in/models/mobile-launcher-2/) — https://models.codelove.in/library/crewed/mobile-launcher-2.glb · 11,652 tris · 1.02×0.5×0.87 · 198 KB · 1 animation inside
