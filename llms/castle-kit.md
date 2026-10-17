# Castle Kit — 76 free 3D models (Buildings 68, Trees 2, Weapons 6)

> Part of models.codelove.in (https://models.codelove.in/), 6,792 free 3D models. License: CC0 1.0 — public domain — No attribution required.

- Collection page: https://models.codelove.in/models/collection/castle-kit/
- Whole collection as one .zip: https://models.codelove.in/packs/ (file list: https://models.codelove.in/data/packs/castle-kit.json)
- Every collection: https://models.codelove.in/llms.txt

- Format: glTF 2.0 binary (.glb), one file per model with textures embedded, compressed with EXT_meshopt_compression and EXT_texture_webp. three.js (GLTFLoader + MeshoptDecoder; drei's useGLTF sets this up) and Babylon.js load them directly; other engines need meshopt support or a decompressed copy.
- Size is the bounding box (width × height × depth) in glTF units, which are metres by the glTF spec; models are Y-up. A few imported models are not to real-world scale, so scale them to fit.
- Rigged humans use a Biped skeleton (root bone Bip01; the child characters use Bip02). The 20 animation clips (10 motions: idle, look around, talk, thoughtful, wave, cheer, clap, dance, walk, run) are separate skeleton-only .glb files in a female (f_) and a male (m_) set: load a character and a clip from its set, then play the clip with THREE.AnimationMixer — the bone names match.
- Each .glb carries its license and credit in the glTF asset block (asset.copyright, asset.extras).

Each line: name and model page — .glb URL · triangles · size · file size, then notes. Total 937 KB.

## Models

### Buildings (68)

- [Bridge Draw](https://models.codelove.in/models/castle-kit-bridge-draw/) — https://models.codelove.in/library/castle-kit/bridge-draw.glb · 40 tris · 1×0.1×0.83 · 7 KB
- [Bridge Straight](https://models.codelove.in/models/castle-kit-bridge-straight/) — https://models.codelove.in/library/castle-kit/bridge-straight.glb · 192 tris · 0.93×1.18×0.93 · 9 KB
- [Bridge Straight Pillar](https://models.codelove.in/models/castle-kit-bridge-straight-pillar/) — https://models.codelove.in/library/castle-kit/bridge-straight-pillar.glb · 156 tris · 0.93×1.18×0.93 · 9 KB
- [Door](https://models.codelove.in/models/castle-kit-door/) — https://models.codelove.in/library/castle-kit/door.glb · 188 tris · 0.15×0.6×0.36 · 10 KB
- [Flag](https://models.codelove.in/models/castle-kit-flag/) — https://models.codelove.in/library/castle-kit/flag.glb · 144 tris · 0.11×0.87×0.43 · 9 KB
- [Flag Banner Long](https://models.codelove.in/models/castle-kit-flag-banner-long/) — https://models.codelove.in/library/castle-kit/flag-banner-long.glb · 68 tris · 0.04×2.17×0.63 · 7 KB
- [Flag Banner Short](https://models.codelove.in/models/castle-kit-flag-banner-short/) — https://models.codelove.in/library/castle-kit/flag-banner-short.glb · 68 tris · 0.04×0.78×0.63 · 7 KB
- [Flag Pennant](https://models.codelove.in/models/castle-kit-flag-pennant/) — https://models.codelove.in/library/castle-kit/flag-pennant.glb · 118 tris · 0.11×0.87×0.57 · 9 KB
- [Flag Wide](https://models.codelove.in/models/castle-kit-flag-wide/) — https://models.codelove.in/library/castle-kit/flag-wide.glb · 256 tris · 0.11×0.87×0.55 · 11 KB
- [Gate](https://models.codelove.in/models/castle-kit-gate/) — https://models.codelove.in/library/castle-kit/gate.glb · 146 tris · 0.15×0.91×0.66 · 9 KB
- [Ground](https://models.codelove.in/models/castle-kit-ground/) — https://models.codelove.in/library/castle-kit/ground.glb · 2 tris · 1×0×1 · 6 KB
- [Ground Hills](https://models.codelove.in/models/castle-kit-ground-hills/) — https://models.codelove.in/library/castle-kit/ground-hills.glb · 116 tris · 1×0.29×1 · 9 KB
- [Metal Gate](https://models.codelove.in/models/castle-kit-metal-gate/) — https://models.codelove.in/library/castle-kit/metal-gate.glb · 190 tris · 0.07×0.73×0.69 · 11 KB
- [Rocks Large](https://models.codelove.in/models/castle-kit-rocks-large/) — https://models.codelove.in/library/castle-kit/rocks-large.glb · 150 tris · 1.2×0.5×1.35 · 10 KB
- [Rocks Small](https://models.codelove.in/models/castle-kit-rocks-small/) — https://models.codelove.in/library/castle-kit/rocks-small.glb · 140 tris · 1.03×0.5×1.1 · 9 KB
- [Siege Ram](https://models.codelove.in/models/castle-kit-siege-ram/) — https://models.codelove.in/library/castle-kit/siege-ram.glb · 1,112 tris · 2.09×1.18×1 · 36 KB
- [Siege Ram Demolished](https://models.codelove.in/models/castle-kit-siege-ram-demolished/) — https://models.codelove.in/library/castle-kit/siege-ram-demolished.glb · 776 tris · 2.08×0.72×1.65 · 20 KB
- [Siege Tower](https://models.codelove.in/models/castle-kit-siege-tower/) — https://models.codelove.in/library/castle-kit/siege-tower.glb · 1,598 tris · 1.97×2.68×1.21 · 38 KB
- [Siege Tower Demolished](https://models.codelove.in/models/castle-kit-siege-tower-demolished/) — https://models.codelove.in/library/castle-kit/siege-tower-demolished.glb · 1,390 tris · 2.17×2.1×1.85 · 29 KB
- [Stairs Stone](https://models.codelove.in/models/castle-kit-stairs-stone/) — https://models.codelove.in/library/castle-kit/stairs-stone.glb · 104 tris · 0.23×0.68×0.82 · 8 KB
- [Stairs Stone Square](https://models.codelove.in/models/castle-kit-stairs-stone-square/) — https://models.codelove.in/library/castle-kit/stairs-stone-square.glb · 100 tris · 0.23×0.68×0.82 · 8 KB
- [Tower Base](https://models.codelove.in/models/castle-kit-tower-base/) — https://models.codelove.in/library/castle-kit/tower-base.glb · 332 tris · 1×1.31×1 · 13 KB
- [Tower Hexagon Base](https://models.codelove.in/models/castle-kit-tower-hexagon-base/) — https://models.codelove.in/library/castle-kit/tower-hexagon-base.glb · 68 tris · 0.9×1.31×0.78 · 8 KB
- [Tower Hexagon Mid](https://models.codelove.in/models/castle-kit-tower-hexagon-mid/) — https://models.codelove.in/library/castle-kit/tower-hexagon-mid.glb · 404 tris · 0.95×0.46×0.82 · 13 KB
- [Tower Hexagon Roof](https://models.codelove.in/models/castle-kit-tower-hexagon-roof/) — https://models.codelove.in/library/castle-kit/tower-hexagon-roof.glb · 68 tris · 0.98×0.83×0.85 · 8 KB
- [Tower Hexagon Roof Secondary](https://models.codelove.in/models/castle-kit-tower-hexagon-roof-secondary/) — https://models.codelove.in/library/castle-kit/tower-hexagon-roof-secondary.glb · 114 tris · 0.98×0.75×0.85 · 9 KB
- [Tower Hexagon Top](https://models.codelove.in/models/castle-kit-tower-hexagon-top/) — https://models.codelove.in/library/castle-kit/tower-hexagon-top.glb · 168 tris · 0.86×0.13×0.75 · 9 KB
- [Tower Hexagon Top Wood](https://models.codelove.in/models/castle-kit-tower-hexagon-top-wood/) — https://models.codelove.in/library/castle-kit/tower-hexagon-top-wood.glb · 164 tris · 0.86×0.46×0.75 · 9 KB
- [Tower Slant Roof](https://models.codelove.in/models/castle-kit-tower-slant-roof/) — https://models.codelove.in/library/castle-kit/tower-slant-roof.glb · 534 tris · 1.17×2.14×1.14 · 15 KB
- [Tower Square](https://models.codelove.in/models/castle-kit-tower-square/) — https://models.codelove.in/library/castle-kit/tower-square.glb · 176 tris · 1×1.31×1 · 9 KB
- [Tower Square Arch](https://models.codelove.in/models/castle-kit-tower-square-arch/) — https://models.codelove.in/library/castle-kit/tower-square-arch.glb · 308 tris · 0.93×1.01×0.93 · 11 KB
- [Tower Square Base](https://models.codelove.in/models/castle-kit-tower-square-base/) — https://models.codelove.in/library/castle-kit/tower-square-base.glb · 28 tris · 1×1.01×1 · 7 KB
- [Tower Square Base Border](https://models.codelove.in/models/castle-kit-tower-square-base-border/) — https://models.codelove.in/library/castle-kit/tower-square-base-border.glb · 20 tris · 1×0.45×1 · 7 KB
- [Tower Square Base Color](https://models.codelove.in/models/castle-kit-tower-square-base-color/) — https://models.codelove.in/library/castle-kit/tower-square-base-color.glb · 68 tris · 1×1.01×1 · 7 KB
- [Tower Square Mid](https://models.codelove.in/models/castle-kit-tower-square-mid/) — https://models.codelove.in/library/castle-kit/tower-square-mid.glb · 76 tris · 0.93×1.01×0.93 · 7 KB
- [Tower Square Mid Color](https://models.codelove.in/models/castle-kit-tower-square-mid-color/) — https://models.codelove.in/library/castle-kit/tower-square-mid-color.glb · 52 tris · 0.93×0.2×0.93 · 7 KB
- [Tower Square Mid Door](https://models.codelove.in/models/castle-kit-tower-square-mid-door/) — https://models.codelove.in/library/castle-kit/tower-square-mid-door.glb · 344 tris · 0.93×1.01×0.93 · 11 KB
- [Tower Square Mid Open](https://models.codelove.in/models/castle-kit-tower-square-mid-open/) — https://models.codelove.in/library/castle-kit/tower-square-mid-open.glb · 240 tris · 0.93×1.01×0.93 · 10 KB
- [Tower Square Mid Open Simple](https://models.codelove.in/models/castle-kit-tower-square-mid-open-simple/) — https://models.codelove.in/library/castle-kit/tower-square-mid-open-simple.glb · 176 tris · 0.93×0.88×0.93 · 9 KB
- [Tower Square Mid Windows](https://models.codelove.in/models/castle-kit-tower-square-mid-windows/) — https://models.codelove.in/library/castle-kit/tower-square-mid-windows.glb · 364 tris · 0.93×1.01×0.93 · 11 KB
- [Tower Square Roof](https://models.codelove.in/models/castle-kit-tower-square-roof/) — https://models.codelove.in/library/castle-kit/tower-square-roof.glb · 144 tris · 1×2.01×1 · 9 KB
- [Tower Square Top](https://models.codelove.in/models/castle-kit-tower-square-top/) — https://models.codelove.in/library/castle-kit/tower-square-top.glb · 148 tris · 1×0.3×1 · 8 KB
- [Tower Square Top Color](https://models.codelove.in/models/castle-kit-tower-square-top-color/) — https://models.codelove.in/library/castle-kit/tower-square-top-color.glb · 156 tris · 1×0.38×1 · 9 KB
- [Tower Square Top Roof](https://models.codelove.in/models/castle-kit-tower-square-top-roof/) — https://models.codelove.in/library/castle-kit/tower-square-top-roof.glb · 116 tris · 1×1×1 · 8 KB
- [Tower Square Top Roof High](https://models.codelove.in/models/castle-kit-tower-square-top-roof-high/) — https://models.codelove.in/library/castle-kit/tower-square-top-roof-high.glb · 116 tris · 1×1.35×1 · 8 KB
- [Tower Square Top Roof High Windows](https://models.codelove.in/models/castle-kit-tower-square-top-roof-high-windows/) — https://models.codelove.in/library/castle-kit/tower-square-top-roof-high-windows.glb · 258 tris · 1×1.08×1 · 10 KB
- [Tower Square Top Roof Rounded](https://models.codelove.in/models/castle-kit-tower-square-top-roof-rounded/) — https://models.codelove.in/library/castle-kit/tower-square-top-roof-rounded.glb · 116 tris · 1×0.95×1 · 8 KB
- [Tower Top](https://models.codelove.in/models/castle-kit-tower-top/) — https://models.codelove.in/library/castle-kit/tower-top.glb · 320 tris · 1×0.13×1 · 12 KB
- [Tree Log](https://models.codelove.in/models/castle-kit-tree-log/) — https://models.codelove.in/library/castle-kit/tree-log.glb · 64 tris · 0.25×0.28×1 · 8 KB
- [Tree Trunk](https://models.codelove.in/models/castle-kit-tree-trunk/) — https://models.codelove.in/library/castle-kit/tree-trunk.glb · 38 tris · 0.4×0.38×0.34 · 7 KB
- [Wall](https://models.codelove.in/models/castle-kit-wall/) — https://models.codelove.in/library/castle-kit/wall.glb · 178 tris · 1×1.31×1 · 9 KB
- [Wall Corner](https://models.codelove.in/models/castle-kit-wall-corner/) — https://models.codelove.in/library/castle-kit/wall-corner.glb · 168 tris · 1×1.31×1 · 9 KB
- [Wall Corner Half](https://models.codelove.in/models/castle-kit-wall-corner-half/) — https://models.codelove.in/library/castle-kit/wall-corner-half.glb · 144 tris · 1×1.31×1 · 8 KB
- [Wall Corner Half Tower](https://models.codelove.in/models/castle-kit-wall-corner-half-tower/) — https://models.codelove.in/library/castle-kit/wall-corner-half-tower.glb · 632 tris · 1.5×1.44×1.5 · 18 KB
- [Wall Corner Slant](https://models.codelove.in/models/castle-kit-wall-corner-slant/) — https://models.codelove.in/library/castle-kit/wall-corner-slant.glb · 140 tris · 1×1.31×1 · 9 KB
- [Wall Doorway](https://models.codelove.in/models/castle-kit-wall-doorway/) — https://models.codelove.in/library/castle-kit/wall-doorway.glb · 500 tris · 0.5×1.31×1 · 13 KB
- [Wall Half](https://models.codelove.in/models/castle-kit-wall-half/) — https://models.codelove.in/library/castle-kit/wall-half.glb · 126 tris · 1×1.31×1 · 8 KB
- [Wall Half Modular](https://models.codelove.in/models/castle-kit-wall-half-modular/) — https://models.codelove.in/library/castle-kit/wall-half-modular.glb · 80 tris · 0.6×1.31×1 · 8 KB
- [Wall Narrow](https://models.codelove.in/models/castle-kit-wall-narrow/) — https://models.codelove.in/library/castle-kit/wall-narrow.glb · 126 tris · 0.5×1.31×1 · 8 KB
- [Wall Narrow Corner](https://models.codelove.in/models/castle-kit-wall-narrow-corner/) — https://models.codelove.in/library/castle-kit/wall-narrow-corner.glb · 96 tris · 0.5×1.31×0.5 · 8 KB
- [Wall Narrow Gate](https://models.codelove.in/models/castle-kit-wall-narrow-gate/) — https://models.codelove.in/library/castle-kit/wall-narrow-gate.glb · 192 tris · 0.63×1.31×1 · 9 KB
- [Wall Narrow Stairs](https://models.codelove.in/models/castle-kit-wall-narrow-stairs/) — https://models.codelove.in/library/castle-kit/wall-narrow-stairs.glb · 262 tris · 0.96×1.31×1 · 10 KB
- [Wall Narrow Stairs Rail](https://models.codelove.in/models/castle-kit-wall-narrow-stairs-rail/) — https://models.codelove.in/library/castle-kit/wall-narrow-stairs-rail.glb · 430 tris · 0.99×1.45×1.03 · 12 KB
- [Wall Narrow Wood](https://models.codelove.in/models/castle-kit-wall-narrow-wood/) — https://models.codelove.in/library/castle-kit/wall-narrow-wood.glb · 266 tris · 1×1.31×1 · 11 KB
- [Wall Narrow Wood Fence](https://models.codelove.in/models/castle-kit-wall-narrow-wood-fence/) — https://models.codelove.in/library/castle-kit/wall-narrow-wood-fence.glb · 326 tris · 1.05×1.45×1 · 12 KB
- [Wall Pillar](https://models.codelove.in/models/castle-kit-wall-pillar/) — https://models.codelove.in/library/castle-kit/wall-pillar.glb · 186 tris · 1×1.31×1 · 9 KB
- [Wall Stud](https://models.codelove.in/models/castle-kit-wall-stud/) — https://models.codelove.in/library/castle-kit/wall-stud.glb · 16 tris · 0.27×1.11×0.17 · 7 KB
- [Wall To Narrow](https://models.codelove.in/models/castle-kit-wall-to-narrow/) — https://models.codelove.in/library/castle-kit/wall-to-narrow.glb · 214 tris · 1×1.31×1 · 10 KB

### Trees (2)

- [Tree Large](https://models.codelove.in/models/castle-kit-tree-large/) — https://models.codelove.in/library/castle-kit/tree-large.glb · 229 tris · 0.89×1.85×0.89 · 11 KB
- [Tree Small](https://models.codelove.in/models/castle-kit-tree-small/) — https://models.codelove.in/library/castle-kit/tree-small.glb · 164 tris · 0.74×1.35×0.72 · 10 KB

### Weapons (6)

- [Siege Ballista](https://models.codelove.in/models/castle-kit-siege-ballista/) — https://models.codelove.in/library/castle-kit/siege-ballista.glb · 676 tris · 1.63×0.91×1.2 · 23 KB
- [Siege Ballista Demolished](https://models.codelove.in/models/castle-kit-siege-ballista-demolished/) — https://models.codelove.in/library/castle-kit/siege-ballista-demolished.glb · 618 tris · 1.75×0.51×1.55 · 18 KB
- [Siege Catapult](https://models.codelove.in/models/castle-kit-siege-catapult/) — https://models.codelove.in/library/castle-kit/siege-catapult.glb · 928 tris · 1.74×1.33×1.21 · 30 KB
- [Siege Catapult Demolished](https://models.codelove.in/models/castle-kit-siege-catapult-demolished/) — https://models.codelove.in/library/castle-kit/siege-catapult-demolished.glb · 842 tris · 1.68×0.32×1.67 · 21 KB
- [Siege Trebuchet](https://models.codelove.in/models/castle-kit-siege-trebuchet/) — https://models.codelove.in/library/castle-kit/siege-trebuchet.glb · 1,326 tris · 1.85×1.96×1.26 · 85 KB
- [Siege Trebuchet Demolished](https://models.codelove.in/models/castle-kit-siege-trebuchet-demolished/) — https://models.codelove.in/library/castle-kit/siege-trebuchet-demolished.glb · 804 tris · 1.94×0.31×2.1 · 20 KB
