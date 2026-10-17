(globalThis.TURBOPACK||(globalThis.TURBOPACK=[])).push(["object"==typeof document?document.currentScript:void 0,73829,e=>{"use strict";var t=e.i(33395),r=e.i(11935),i=e.i(50263),a=e.i(52900),s=e.i(7094),o=e.i(44442),n=e.i(45244),l=e.i(8359),u=e.i(95570);class c{model;mixer;rest;constructor(e){this.model=e,this.rest=[],this.mixer=new l.AnimationMixer(e.root),e.root.traverse(e=>this.rest.push([e,e.position.clone(),e.quaternion.clone(),e.scale.clone()]))}play(e){let t=null===e?null:this.model.animations[e];if(!t)return;let r=this.mixer.clipAction(t).reset().play();return()=>{for(let[e,i,a,s]of(r.stop(),this.mixer.uncacheAction(t),this.rest))e.position.copy(i),e.quaternion.copy(a),e.scale.copy(s)}}setPlaying(e){this.mixer.timeScale=+!!e}setWireframe(e){this.model.root.traverse(t=>{let r=t.material;for(let t of Array.isArray(r)?r:r?[r]:[])"wireframe"in t&&(t.wireframe=e)})}update(e){this.mixer.update(Math.min(e,.1))}dispose(){this.mixer.stopAllAction()}}function m({model:e,clip:i,playing:n,wireframe:l,resetKey:f,onPick:v}){let h=(0,s.useThree)(e=>e.get),d=(0,s.useThree)(e=>e.controls),p=(0,r.useMemo)(()=>new c(e),[e]);(0,r.useEffect)(()=>()=>p.dispose(),[p]),(0,r.useEffect)(()=>p.setPlaying(n),[p,n]),(0,r.useEffect)(()=>p.setWireframe(l),[p,l]),(0,r.useEffect)(()=>p.play(i),[p,i]),(0,r.useLayoutEffect)(()=>{let t=h();(0,u.frameCamera)(t.camera,t.controls,e.size,.6)},[h,e,d,f]),(0,a.useFrame)((e,t)=>p.update(t));let{size:x,offset:g}=e,y=1.6*Math.max(x.x,x.z,.6*x.y);return(0,t.jsxs)(t.Fragment,{children:[(0,t.jsx)("group",{position:g,children:(0,t.jsx)("primitive",{object:e.root,onClick:e=>{e.delta>4||(e.stopPropagation(),v(e.object,e.faceIndex??-1))}})}),(0,t.jsx)(o.ContactShadows,{position:[0,.001,0],scale:y,blur:2.4,opacity:.55,far:Math.max(x.y,.01),resolution:512,color:"#000000"})]})}e.s(["default",0,function({model:e,autoRotate:r,onRenderer:a,onMiss:s,...o}){return(0,t.jsxs)(i.Canvas,{dpr:[1,2],gl:{antialias:!0,alpha:!0,powerPreference:"high-performance"},camera:{fov:32,position:[0,1.2,5]},className:"touch-none",onCreated:({gl:e})=>a(e),onPointerMissed:s,children:[(0,t.jsx)(u.ToneMapping,{}),(0,t.jsx)(u.Studio,{}),(0,t.jsx)("hemisphereLight",{args:["#e8e6ff","#1a1626",.35]}),(0,t.jsx)("directionalLight",{position:[3,5,4],intensity:1.4}),(0,t.jsx)("directionalLight",{position:[-4,3,-3],intensity:.6,color:"#a5f3fc"}),e&&(0,t.jsx)(m,{model:e,...o}),(0,t.jsx)(n.OrbitControls,{makeDefault:!0,enableDamping:!0,dampingFactor:.08,autoRotate:r,autoRotateSpeed:.9,maxPolarAngle:.62*Math.PI})]})}])},80407,function(e){e.n(e.i(73829))},95570,44442,e=>{"use strict";var t=e.i(33395),r=e.i(11935),i=e.i(50263),a=e.i(52900),s=e.i(7094),o=e.i(24325),n=e.i(8359);let l={uniforms:{tDiffuse:{value:null},h:{value:1/512}},vertexShader:`
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
  `},u={uniforms:{tDiffuse:{value:null},v:{value:1/512}},vertexShader:`
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
  `},c=r.forwardRef(({scale:e=10,frames:t=1/0,opacity:i=1,width:c=1,height:m=1,blur:f=1,near:v=0,far:h=10,resolution:d=512,smooth:p=!0,color:x="#000000",depthWrite:g=!1,renderOrder:y,...M},D)=>{let U,j,T=r.useRef(null),b=(0,s.useThree)(e=>e.scene),w=(0,s.useThree)(e=>e.gl),L=r.useRef(null);c*=Array.isArray(e)?e[0]:e||1,m*=Array.isArray(e)?e[1]:e||1;let[A,P,S,C,E,R,F]=r.useMemo(()=>{let e=new n.WebGLRenderTarget(d,d),t=new n.WebGLRenderTarget(d,d);t.texture.generateMipmaps=e.texture.generateMipmaps=!1;let r=new n.PlaneGeometry(c,m).rotateX(Math.PI/2),i=new n.Mesh(r),a=new n.MeshDepthMaterial;a.depthTest=a.depthWrite=!1,a.onBeforeCompile=e=>{e.uniforms={...e.uniforms,ucolor:{value:new n.Color(x)}},e.fragmentShader=e.fragmentShader.replace("void main() {",`uniform vec3 ucolor;
           void main() {
          `),e.fragmentShader=e.fragmentShader.replace("vec4( vec3( 1.0 - fragCoordZ ), opacity );","vec4( ucolor * fragCoordZ * 2.0, ( 1.0 - fragCoordZ ) * 1.0 );")};let s=new n.ShaderMaterial(l),o=new n.ShaderMaterial(u);return o.depthTest=s.depthTest=!1,[e,r,a,i,s,o,t]},[d,c,m,e,x]),k=e=>{C.visible=!0,C.material=E,E.uniforms.tDiffuse.value=A.texture,E.uniforms.h.value=e/256,w.setRenderTarget(F),w.render(C,L.current),C.material=R,R.uniforms.tDiffuse.value=F.texture,R.uniforms.v.value=e/256,w.setRenderTarget(A),w.render(C,L.current),C.visible=!1},I=0;return(0,a.useFrame)(()=>{L.current&&(t===1/0||I<t)&&(I++,U=b.background,j=b.overrideMaterial,T.current.visible=!1,b.background=null,b.overrideMaterial=S,w.setRenderTarget(A),w.render(b,L.current),k(f),p&&k(.4*f),w.setRenderTarget(null),T.current.visible=!0,b.overrideMaterial=j,b.background=U)}),r.useImperativeHandle(D,()=>T.current,[]),r.createElement("group",(0,o.default)({"rotation-x":Math.PI/2},M,{ref:T}),r.createElement("mesh",{renderOrder:y,geometry:P,scale:[1,-1,1],rotation:[-Math.PI/2,0,0]},r.createElement("meshBasicMaterial",{transparent:!0,map:A.texture,opacity:i,depthWrite:g})),r.createElement("orthographicCamera",{ref:L,args:[-c/2,c/2,m/2,-m/2,v,h]}))});e.s(["ContactShadows",0,c],44442);var m=e.i(67516),f=e.i(88332),v=e.i(45244),h=e.i(3253),d=e.i(44135),p=e.i(93209),x=e.i(3295),g=e.i(44390);function y({name:e,animations:t,mixer:i}){let a=e.replace(/^embedded:/,""),s=(0,r.useMemo)(()=>t.find(e=>e.name===a)??t[0]??null,[t,a]);return(0,r.useEffect)(()=>{if(!s)return;let e=i.clipAction(s);return e.reset().setLoop(n.LoopRepeat,1/0).fadeIn(.35).play(),()=>{e.fadeOut(.35)}},[s,i]),null}function M({url:e,root:t,mixer:i}){let a=(0,s.useThree)(e=>e.gl),{animations:o}=(0,h.useGLTF)(e,(0,p.asset)("/decoders/draco/"),!0,e=>{(0,x.configureGLTFLoader)(e,a)}),l=(0,r.useMemo)(()=>o[0]?(0,g.retarget)(o[0],t):null,[o,t]);return(0,r.useEffect)(()=>{if(!l)return;let e=i.clipAction(l);return e.reset().setLoop(n.LoopRepeat,1/0).fadeIn(.35).play(),()=>{e.fadeOut(.35)}},[l,i]),null}class D{scene;mixer;skeleton;size;materials=[];constructor(e){this.scene=(0,d.clone)(e),this.scene.traverse(e=>{if(!e.isMesh)return;e.frustumCulled=!1;let t=(Array.isArray(e.material)?e.material:[e.material]).map(e=>{let t=e.clone();return t.alphaTest>0&&(t.alphaToCoverage=!0),this.materials.push(t),t});e.material=Array.isArray(e.material)?t:t[0]}),(0,g.recordRestPose)(this.scene),this.scene.updateMatrixWorld(!0);const t=new n.Box3().setFromObject(this.scene,!0),r=t.getCenter(new n.Vector3);this.scene.position.set(-r.x,-t.min.y,-r.z),this.size=t.getSize(new n.Vector3),this.mixer=new n.AnimationMixer(this.scene),this.skeleton=new n.SkeletonHelper(this.scene)}setWireframe(e){for(let t of this.materials)t.wireframe=e}setPlaying(e){this.mixer.timeScale=+!!e}dispose(){for(let e of(this.mixer.stopAllAction(),this.skeleton.dispose(),this.materials))e.dispose()}}function U(e,t,r,i){let a=r.length()/2,s=n.MathUtils.degToRad(e.fov),o=.92*Math.max(a/Math.sin(s/2),a/Math.sin(Math.atan(Math.tan(s/2)*Math.max(e.aspect,.6)))),l=new n.Vector3(0,.5*r.y,0),u=new n.Vector3(Math.sin(i),.12,Math.cos(i)).normalize();e.position.copy(l).addScaledVector(u,o),e.near=o/100,e.far=100*o,e.updateProjectionMatrix(),t?(t.target.copy(l),t.minDistance=.35*a,t.maxDistance=3*o,t.update()):e.lookAt(l)}function j({url:e,animationUrl:i,playing:o,wireframe:n,skeleton:l,resetKey:u,azimuth:m=0,onLoaded:f}){let v=(0,s.useThree)(e=>e.gl),d=(0,h.useGLTF)(e,(0,p.asset)("/decoders/draco/"),!0,e=>{(0,x.configureGLTFLoader)(e,v)}),g=(0,s.useThree)(e=>e.get),T=(0,s.useThree)(e=>e.controls),b=(0,r.useMemo)(()=>new D(d.scene),[d.scene]);(0,r.useEffect)(()=>()=>b.dispose(),[b]),(0,r.useEffect)(()=>b.setWireframe(n),[b,n]),(0,r.useEffect)(()=>b.setPlaying(o),[b,o]),(0,r.useLayoutEffect)(()=>{let e=g();U(e.camera,e.controls,b.size,m)},[g,b,T,u,m]),(0,r.useEffect)(()=>{f?.()},[b,f]),(0,a.useFrame)((e,t)=>b.mixer.update(Math.min(t,.1)));let{size:w}=b,L=1.6*Math.max(w.x,w.z,.6*w.y);return(0,t.jsxs)(t.Fragment,{children:[(0,t.jsx)("primitive",{object:b.scene}),l&&(0,t.jsx)("primitive",{object:b.skeleton}),i&&(i.startsWith("embedded:")||d.animations.some(e=>e.name===i))&&d.animations.length>0?(0,t.jsx)(y,{name:i,animations:d.animations,mixer:b.mixer},i):i?(0,t.jsx)(r.Suspense,{fallback:null,children:(0,t.jsx)(M,{url:i,root:b.scene,mixer:b.mixer},i)}):d.animations.length>0?(0,t.jsx)(y,{name:d.animations[0].name,animations:d.animations,mixer:b.mixer},"default-embedded"):null,(0,t.jsx)(c,{position:[0,.001,0],scale:L,blur:2.4,opacity:.55,far:w.y,resolution:512,color:"#000000"})]})}function T(){let e=(0,s.useThree)(e=>e.get);return(0,r.useLayoutEffect)(()=>{let{gl:t}=e();t.toneMapping=n.NeutralToneMapping,t.toneMappingExposure=1.05},[e]),null}function b(){return(0,t.jsxs)(m.Environment,{resolution:256,frames:1,children:[(0,t.jsx)("color",{attach:"background",args:["#14121c"]}),(0,t.jsx)(f.Lightformer,{form:"rect",intensity:3,position:[0,6,3],scale:[8,4,1]}),(0,t.jsx)(f.Lightformer,{form:"rect",intensity:1.6,position:[-6,2,2],scale:[4,6,1],color:"#dcd6ff"}),(0,t.jsx)(f.Lightformer,{form:"rect",intensity:1.4,position:[6,2,1],scale:[4,6,1],color:"#d4f6ff"}),(0,t.jsx)(f.Lightformer,{form:"rect",intensity:2,position:[0,2,-6],scale:[8,3,1],color:"#b8a6ff"}),(0,t.jsx)(f.Lightformer,{form:"circle",intensity:1.2,position:[0,-4,0],scale:6})]})}e.s(["Studio",0,b,"ToneMapping",0,T,"default",0,function({interactive:e=!0,autoRotate:a,paused:s=!1,...o}){return(0,r.useEffect)(()=>{o.animationUrl&&h.useGLTF.preload(o.animationUrl,(0,p.asset)("/decoders/draco/"),!0,e=>{(0,x.configureGLTFLoader)(e)})},[o.animationUrl]),(0,t.jsxs)(i.Canvas,{frameloop:s?"never":"always",dpr:[1,2],gl:{antialias:!0,alpha:!0,powerPreference:"high-performance"},camera:{fov:32,position:[0,1.2,5]},className:e?"touch-none":"touch-pan-y",children:[(0,t.jsx)(T,{}),(0,t.jsx)(b,{}),(0,t.jsx)("hemisphereLight",{args:["#e8e6ff","#1a1626",.35]}),(0,t.jsx)("directionalLight",{position:[3,5,4],intensity:1.4}),(0,t.jsx)("directionalLight",{position:[-4,3,-3],intensity:.6,color:"#a5f3fc"}),(0,t.jsx)(r.Suspense,{fallback:null,children:(0,t.jsx)(j,{...o})}),(0,t.jsx)(v.OrbitControls,{makeDefault:!0,enableDamping:!0,dampingFactor:.08,enablePan:e,enableZoom:e,autoRotate:a,autoRotateSpeed:.9,minPolarAngle:e?0:.45*Math.PI,maxPolarAngle:e?.62*Math.PI:.45*Math.PI})]})},"frameCamera",0,U],95570)}]);