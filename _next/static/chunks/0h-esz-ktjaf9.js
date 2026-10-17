(globalThis.TURBOPACK||(globalThis.TURBOPACK=[])).push(["object"==typeof document?document.currentScript:void 0,95570,44442,e=>{"use strict";var t=e.i(33395),r=e.i(11935),i=e.i(50263),a=e.i(52900),s=e.i(7094),n=e.i(24325),o=e.i(8359);let u={uniforms:{tDiffuse:{value:null},h:{value:1/512}},vertexShader:`
      varying vec2 vUv;

      void main() {

        vUv = uv;
        gl_Position = projectionMatrix * modelViewMatrix * vec4( position, 1.0 );

      }
  `,fragmentShader:`
    uniform sampler2D tDiffuse;
    uniform float h;

    varying vec2 vUv;

    void main() {

    	vec4 sum = vec4( 0.0 );

    	sum += texture2D( tDiffuse, vec2( vUv.x - 4.0 * h, vUv.y ) ) * 0.051;
    	sum += texture2D( tDiffuse, vec2( vUv.x - 3.0 * h, vUv.y ) ) * 0.0918;
    	sum += texture2D( tDiffuse, vec2( vUv.x - 2.0 * h, vUv.y ) ) * 0.12245;
    	sum += texture2D( tDiffuse, vec2( vUv.x - 1.0 * h, vUv.y ) ) * 0.1531;
    	sum += texture2D( tDiffuse, vec2( vUv.x, vUv.y ) ) * 0.1633;
    	sum += texture2D( tDiffuse, vec2( vUv.x + 1.0 * h, vUv.y ) ) * 0.1531;
    	sum += texture2D( tDiffuse, vec2( vUv.x + 2.0 * h, vUv.y ) ) * 0.12245;
    	sum += texture2D( tDiffuse, vec2( vUv.x + 3.0 * h, vUv.y ) ) * 0.0918;
    	sum += texture2D( tDiffuse, vec2( vUv.x + 4.0 * h, vUv.y ) ) * 0.051;

    	gl_FragColor = sum;

    }
  `},l={uniforms:{tDiffuse:{value:null},v:{value:1/512}},vertexShader:`
    varying vec2 vUv;

    void main() {

      vUv = uv;
      gl_Position = projectionMatrix * modelViewMatrix * vec4( position, 1.0 );

    }
  `,fragmentShader:`

  uniform sampler2D tDiffuse;
  uniform float v;

  varying vec2 vUv;

  void main() {

    vec4 sum = vec4( 0.0 );

    sum += texture2D( tDiffuse, vec2( vUv.x, vUv.y - 4.0 * v ) ) * 0.051;
    sum += texture2D( tDiffuse, vec2( vUv.x, vUv.y - 3.0 * v ) ) * 0.0918;
    sum += texture2D( tDiffuse, vec2( vUv.x, vUv.y - 2.0 * v ) ) * 0.12245;
    sum += texture2D( tDiffuse, vec2( vUv.x, vUv.y - 1.0 * v ) ) * 0.1531;
    sum += texture2D( tDiffuse, vec2( vUv.x, vUv.y ) ) * 0.1633;
    sum += texture2D( tDiffuse, vec2( vUv.x, vUv.y + 1.0 * v ) ) * 0.1531;
    sum += texture2D( tDiffuse, vec2( vUv.x, vUv.y + 2.0 * v ) ) * 0.12245;
    sum += texture2D( tDiffuse, vec2( vUv.x, vUv.y + 3.0 * v ) ) * 0.0918;
    sum += texture2D( tDiffuse, vec2( vUv.x, vUv.y + 4.0 * v ) ) * 0.051;

    gl_FragColor = sum;

  }
  `},c=r.forwardRef(({scale:e=10,frames:t=1/0,opacity:i=1,width:c=1,height:v=1,blur:f=1,near:m=0,far:d=10,resolution:h=512,smooth:x=!0,color:p="#000000",depthWrite:g=!1,renderOrder:y,...D},U)=>{let M,j,T=r.useRef(null),b=(0,s.useThree)(e=>e.scene),L=(0,s.useThree)(e=>e.gl),w=r.useRef(null);c*=Array.isArray(e)?e[0]:e||1,v*=Array.isArray(e)?e[1]:e||1;let[S,P,A,C,R,E,k]=r.useMemo(()=>{let e=new o.WebGLRenderTarget(h,h),t=new o.WebGLRenderTarget(h,h);t.texture.generateMipmaps=e.texture.generateMipmaps=!1;let r=new o.PlaneGeometry(c,v).rotateX(Math.PI/2),i=new o.Mesh(r),a=new o.MeshDepthMaterial;a.depthTest=a.depthWrite=!1,a.onBeforeCompile=e=>{e.uniforms={...e.uniforms,ucolor:{value:new o.Color(p)}},e.fragmentShader=e.fragmentShader.replace("void main() {",`uniform vec3 ucolor;
           void main() {
          `),e.fragmentShader=e.fragmentShader.replace("vec4( vec3( 1.0 - fragCoordZ ), opacity );","vec4( ucolor * fragCoordZ * 2.0, ( 1.0 - fragCoordZ ) * 1.0 );")};let s=new o.ShaderMaterial(u),n=new o.ShaderMaterial(l);return n.depthTest=s.depthTest=!1,[e,r,a,i,s,n,t]},[h,c,v,e,p]),F=e=>{C.visible=!0,C.material=R,R.uniforms.tDiffuse.value=S.texture,R.uniforms.h.value=e/256,L.setRenderTarget(k),L.render(C,w.current),C.material=E,E.uniforms.tDiffuse.value=k.texture,E.uniforms.v.value=e/256,L.setRenderTarget(S),L.render(C,w.current),C.visible=!1},G=0;return(0,a.useFrame)(()=>{w.current&&(t===1/0||G<t)&&(G++,M=b.background,j=b.overrideMaterial,T.current.visible=!1,b.background=null,b.overrideMaterial=A,L.setRenderTarget(S),L.render(b,w.current),F(f),x&&F(.4*f),L.setRenderTarget(null),T.current.visible=!0,b.overrideMaterial=j,b.background=M)}),r.useImperativeHandle(U,()=>T.current,[]),r.createElement("group",(0,n.default)({"rotation-x":Math.PI/2},D,{ref:T}),r.createElement("mesh",{renderOrder:y,geometry:P,scale:[1,-1,1],rotation:[-Math.PI/2,0,0]},r.createElement("meshBasicMaterial",{transparent:!0,map:S.texture,opacity:i,depthWrite:g})),r.createElement("orthographicCamera",{ref:w,args:[-c/2,c/2,v/2,-v/2,m,d]}))});e.s(["ContactShadows",0,c],44442);var v=e.i(67516),f=e.i(88332),m=e.i(45244),d=e.i(3253),h=e.i(44135),x=e.i(93209),p=e.i(3295),g=e.i(44390);function y({name:e,animations:t,mixer:i}){let a=e.replace(/^embedded:/,""),s=(0,r.useMemo)(()=>t.find(e=>e.name===a)??t[0]??null,[t,a]);return(0,r.useEffect)(()=>{if(!s)return;let e=i.clipAction(s);return e.reset().setLoop(o.LoopRepeat,1/0).fadeIn(.35).play(),()=>{e.fadeOut(.35)}},[s,i]),null}function D({url:e,root:t,mixer:i}){let a=(0,s.useThree)(e=>e.gl),{animations:n}=(0,d.useGLTF)(e,(0,x.asset)("/decoders/draco/"),!0,e=>{(0,p.configureGLTFLoader)(e,a)}),u=(0,r.useMemo)(()=>n[0]?(0,g.retarget)(n[0],t):null,[n,t]);return(0,r.useEffect)(()=>{if(!u)return;let e=i.clipAction(u);return e.reset().setLoop(o.LoopRepeat,1/0).fadeIn(.35).play(),()=>{e.fadeOut(.35)}},[u,i]),null}class U{scene;mixer;skeleton;size;materials=[];constructor(e){this.scene=(0,h.clone)(e),this.scene.traverse(e=>{if(!e.isMesh)return;e.frustumCulled=!1;let t=(Array.isArray(e.material)?e.material:[e.material]).map(e=>{let t=e.clone();return t.alphaTest>0&&(t.alphaToCoverage=!0),this.materials.push(t),t});e.material=Array.isArray(e.material)?t:t[0]}),(0,g.recordRestPose)(this.scene),this.scene.updateMatrixWorld(!0);const t=new o.Box3().setFromObject(this.scene,!0),r=t.getCenter(new o.Vector3);this.scene.position.set(-r.x,-t.min.y,-r.z),this.size=t.getSize(new o.Vector3),this.mixer=new o.AnimationMixer(this.scene),this.skeleton=new o.SkeletonHelper(this.scene)}setWireframe(e){for(let t of this.materials)t.wireframe=e}setPlaying(e){this.mixer.timeScale=+!!e}dispose(){for(let e of(this.mixer.stopAllAction(),this.skeleton.dispose(),this.materials))e.dispose()}}function M(e,t,r,i){let a=r.length()/2,s=o.MathUtils.degToRad(e.fov),n=.92*Math.max(a/Math.sin(s/2),a/Math.sin(Math.atan(Math.tan(s/2)*Math.max(e.aspect,.6)))),u=new o.Vector3(0,.5*r.y,0),l=new o.Vector3(Math.sin(i),.12,Math.cos(i)).normalize();e.position.copy(u).addScaledVector(l,n),e.near=n/100,e.far=100*n,e.updateProjectionMatrix(),t?(t.target.copy(u),t.minDistance=.35*a,t.maxDistance=3*n,t.update()):e.lookAt(u)}function j({url:e,animationUrl:i,playing:n,wireframe:o,skeleton:u,resetKey:l,azimuth:v=0,onLoaded:f}){let m=(0,s.useThree)(e=>e.gl),h=(0,d.useGLTF)(e,(0,x.asset)("/decoders/draco/"),!0,e=>{(0,p.configureGLTFLoader)(e,m)}),g=(0,s.useThree)(e=>e.get),T=(0,s.useThree)(e=>e.controls),b=(0,r.useMemo)(()=>new U(h.scene),[h.scene]);(0,r.useEffect)(()=>()=>b.dispose(),[b]),(0,r.useEffect)(()=>b.setWireframe(o),[b,o]),(0,r.useEffect)(()=>b.setPlaying(n),[b,n]),(0,r.useLayoutEffect)(()=>{let e=g();M(e.camera,e.controls,b.size,v)},[g,b,T,l,v]),(0,r.useEffect)(()=>{f?.()},[b,f]),(0,a.useFrame)((e,t)=>b.mixer.update(Math.min(t,.1)));let{size:L}=b,w=1.6*Math.max(L.x,L.z,.6*L.y);return(0,t.jsxs)(t.Fragment,{children:[(0,t.jsx)("primitive",{object:b.scene}),u&&(0,t.jsx)("primitive",{object:b.skeleton}),i&&(i.startsWith("embedded:")||h.animations.some(e=>e.name===i))&&h.animations.length>0?(0,t.jsx)(y,{name:i,animations:h.animations,mixer:b.mixer},i):i?(0,t.jsx)(r.Suspense,{fallback:null,children:(0,t.jsx)(D,{url:i,root:b.scene,mixer:b.mixer},i)}):h.animations.length>0?(0,t.jsx)(y,{name:h.animations[0].name,animations:h.animations,mixer:b.mixer},"default-embedded"):null,(0,t.jsx)(c,{position:[0,.001,0],scale:w,blur:2.4,opacity:.55,far:L.y,resolution:512,color:"#000000"})]})}function T(){let e=(0,s.useThree)(e=>e.get);return(0,r.useLayoutEffect)(()=>{let{gl:t}=e();t.toneMapping=o.NeutralToneMapping,t.toneMappingExposure=1.05},[e]),null}function b(){return(0,t.jsxs)(v.Environment,{resolution:256,frames:1,children:[(0,t.jsx)("color",{attach:"background",args:["#14121c"]}),(0,t.jsx)(f.Lightformer,{form:"rect",intensity:3,position:[0,6,3],scale:[8,4,1]}),(0,t.jsx)(f.Lightformer,{form:"rect",intensity:1.6,position:[-6,2,2],scale:[4,6,1],color:"#dcd6ff"}),(0,t.jsx)(f.Lightformer,{form:"rect",intensity:1.4,position:[6,2,1],scale:[4,6,1],color:"#d4f6ff"}),(0,t.jsx)(f.Lightformer,{form:"rect",intensity:2,position:[0,2,-6],scale:[8,3,1],color:"#b8a6ff"}),(0,t.jsx)(f.Lightformer,{form:"circle",intensity:1.2,position:[0,-4,0],scale:6})]})}e.s(["Studio",0,b,"ToneMapping",0,T,"default",0,function({interactive:e=!0,autoRotate:a,paused:s=!1,...n}){return(0,r.useEffect)(()=>{n.animationUrl&&d.useGLTF.preload(n.animationUrl,(0,x.asset)("/decoders/draco/"),!0,e=>{(0,p.configureGLTFLoader)(e)})},[n.animationUrl]),(0,t.jsxs)(i.Canvas,{frameloop:s?"never":"always",dpr:[1,2],gl:{antialias:!0,alpha:!0,powerPreference:"high-performance"},camera:{fov:32,position:[0,1.2,5]},className:e?"touch-none":"touch-pan-y",children:[(0,t.jsx)(T,{}),(0,t.jsx)(b,{}),(0,t.jsx)("hemisphereLight",{args:["#e8e6ff","#1a1626",.35]}),(0,t.jsx)("directionalLight",{position:[3,5,4],intensity:1.4}),(0,t.jsx)("directionalLight",{position:[-4,3,-3],intensity:.6,color:"#a5f3fc"}),(0,t.jsx)(r.Suspense,{fallback:null,children:(0,t.jsx)(j,{...n})}),(0,t.jsx)(m.OrbitControls,{makeDefault:!0,enableDamping:!0,dampingFactor:.08,enablePan:e,enableZoom:e,autoRotate:a,autoRotateSpeed:.9,minPolarAngle:e?0:.45*Math.PI,maxPolarAngle:e?.62*Math.PI:.45*Math.PI})]})},"frameCamera",0,M],95570)},38082,function(e){e.n(e.i(95570))}]);