(globalThis.TURBOPACK||(globalThis.TURBOPACK=[])).push(["object"==typeof document?document.currentScript:void 0,75603,e=>{"use strict";let t,i;var n,s,r,o,a=e.i(33395),l=e.i(11935),c=e.i(50263),h=e.i(52900),u=e.i(7094),p=e.i(67516),d=e.i(24325),m=e.i(8359),f=e.i(9621),g=m;let y=parseInt(m.REVISION.replace(/\D+/g,"")),w=(n={cellSize:.5,sectionSize:1,fadeDistance:100,fadeStrength:1,fadeFrom:1,cellThickness:.5,sectionThickness:1,cellColor:new m.Color,sectionColor:new m.Color,infiniteGrid:!1,followCamera:!1,worldCamProjPosition:new m.Vector3,worldPlanePosition:new m.Vector3},s=`
    varying vec3 localPosition;
    varying vec4 worldPosition;

    uniform vec3 worldCamProjPosition;
    uniform vec3 worldPlanePosition;
    uniform float fadeDistance;
    uniform bool infiniteGrid;
    uniform bool followCamera;

    void main() {
      localPosition = position.xzy;
      if (infiniteGrid) localPosition *= 1.0 + fadeDistance;
      
      worldPosition = modelMatrix * vec4(localPosition, 1.0);
      if (followCamera) {
        worldPosition.xyz += (worldCamProjPosition - worldPlanePosition);
        localPosition = (inverse(modelMatrix) * worldPosition).xyz;
      }

      gl_Position = projectionMatrix * viewMatrix * worldPosition;
    }
  `,r=`
    varying vec3 localPosition;
    varying vec4 worldPosition;

    uniform vec3 worldCamProjPosition;
    uniform float cellSize;
    uniform float sectionSize;
    uniform vec3 cellColor;
    uniform vec3 sectionColor;
    uniform float fadeDistance;
    uniform float fadeStrength;
    uniform float fadeFrom;
    uniform float cellThickness;
    uniform float sectionThickness;

    float getGrid(float size, float thickness) {
      vec2 r = localPosition.xz / size;
      vec2 grid = abs(fract(r - 0.5) - 0.5) / fwidth(r);
      float line = min(grid.x, grid.y) + 1.0 - thickness;
      return 1.0 - min(line, 1.0);
    }

    void main() {
      float g1 = getGrid(cellSize, cellThickness);
      float g2 = getGrid(sectionSize, sectionThickness);

      vec3 from = worldCamProjPosition*vec3(fadeFrom);
      float dist = distance(from, worldPosition.xyz);
      float d = 1.0 - min(dist / fadeDistance, 1.0);
      vec3 color = mix(cellColor, sectionColor, min(1.0, sectionThickness * g2));

      gl_FragColor = vec4(color, (g1 + g2) * pow(d, fadeStrength));
      gl_FragColor.a = mix(0.75 * gl_FragColor.a, gl_FragColor.a, g2);
      if (gl_FragColor.a <= 0.0) discard;

      #include <tonemapping_fragment>
      #include <${y>=154?"colorspace_fragment":"encodings_fragment"}>
    }
  `,(o=class extends g.ShaderMaterial{constructor(e){for(const t in super({vertexShader:s,fragmentShader:r,...e}),n)this.uniforms[t]=new g.Uniform(n[t]),Object.defineProperty(this,t,{get(){return this.uniforms[t].value},set(e){this.uniforms[t].value=e}});this.uniforms=g.UniformsUtils.clone(this.uniforms)}}).key=g.MathUtils.generateUUID(),o),x=l.forwardRef(({args:e,cellColor:t="#000000",sectionColor:i="#2080ff",cellSize:n=.5,sectionSize:s=1,followCamera:r=!1,infiniteGrid:o=!1,fadeDistance:a=100,fadeStrength:c=1,fadeFrom:u=1,cellThickness:p=.5,sectionThickness:g=1,side:y=m.BackSide,...x},v)=>{(0,f.extend)({GridMaterial:w});let b=l.useRef(null);l.useImperativeHandle(v,()=>b.current,[]);let M=new m.Plane,S=new m.Vector3(0,1,0),E=new m.Vector3(0,0,0);return(0,h.useFrame)(e=>{M.setFromNormalAndCoplanarPoint(S,E).applyMatrix4(b.current.matrixWorld);let t=b.current.material,i=t.uniforms.worldCamProjPosition,n=t.uniforms.worldPlanePosition;M.projectPoint(e.camera.position,i.value),n.value.set(0,0,0).applyMatrix4(b.current.matrixWorld)}),l.createElement("mesh",(0,d.default)({ref:b,frustumCulled:!1},x),l.createElement("gridMaterial",(0,d.default)({transparent:!0,"extensions-derivatives":!0,side:y},{cellSize:n,sectionSize:s,cellColor:t,sectionColor:i,cellThickness:p,sectionThickness:g},{fadeDistance:a,fadeStrength:c,fadeFrom:u,infiniteGrid:o,followCamera:r})),l.createElement("planeGeometry",{args:e}))});var v=e.i(88332),b=m,M=m;let S=new M.Box3,E=new M.Vector3;class A extends M.InstancedBufferGeometry{constructor(){super(),this.isLineSegmentsGeometry=!0,this.type="LineSegmentsGeometry",this.setIndex([0,2,1,2,3,1,2,4,3,4,5,3,4,6,5,6,7,5]),this.setAttribute("position",new M.Float32BufferAttribute([-1,2,0,1,2,0,-1,1,0,1,1,0,-1,0,0,1,0,0,-1,-1,0,1,-1,0],3)),this.setAttribute("uv",new M.Float32BufferAttribute([-1,2,1,2,-1,1,1,1,-1,-1,1,-1,-1,-2,1,-2],2))}applyMatrix4(e){let t=this.attributes.instanceStart,i=this.attributes.instanceEnd;return void 0!==t&&(t.applyMatrix4(e),i.applyMatrix4(e),t.needsUpdate=!0),null!==this.boundingBox&&this.computeBoundingBox(),null!==this.boundingSphere&&this.computeBoundingSphere(),this}setPositions(e){let t;e instanceof Float32Array?t=e:Array.isArray(e)&&(t=new Float32Array(e));let i=new M.InstancedInterleavedBuffer(t,6,1);return this.setAttribute("instanceStart",new M.InterleavedBufferAttribute(i,3,0)),this.setAttribute("instanceEnd",new M.InterleavedBufferAttribute(i,3,3)),this.computeBoundingBox(),this.computeBoundingSphere(),this}setColors(e,t=3){let i;e instanceof Float32Array?i=e:Array.isArray(e)&&(i=new Float32Array(e));let n=new M.InstancedInterleavedBuffer(i,2*t,1);return this.setAttribute("instanceColorStart",new M.InterleavedBufferAttribute(n,t,0)),this.setAttribute("instanceColorEnd",new M.InterleavedBufferAttribute(n,t,t)),this}fromWireframeGeometry(e){return this.setPositions(e.attributes.position.array),this}fromEdgesGeometry(e){return this.setPositions(e.attributes.position.array),this}fromMesh(e){return this.fromWireframeGeometry(new M.WireframeGeometry(e.geometry)),this}fromLineSegments(e){let t=e.geometry;return this.setPositions(t.attributes.position.array),this}computeBoundingBox(){null===this.boundingBox&&(this.boundingBox=new M.Box3);let e=this.attributes.instanceStart,t=this.attributes.instanceEnd;void 0!==e&&void 0!==t&&(this.boundingBox.setFromBufferAttribute(e),S.setFromBufferAttribute(t),this.boundingBox.union(S))}computeBoundingSphere(){null===this.boundingSphere&&(this.boundingSphere=new M.Sphere),null===this.boundingBox&&this.computeBoundingBox();let e=this.attributes.instanceStart,t=this.attributes.instanceEnd;if(void 0!==e&&void 0!==t){let i=this.boundingSphere.center;this.boundingBox.getCenter(i);let n=0;for(let s=0,r=e.count;s<r;s++)E.fromBufferAttribute(e,s),n=Math.max(n,i.distanceToSquared(E)),E.fromBufferAttribute(t,s),n=Math.max(n,i.distanceToSquared(E));this.boundingSphere.radius=Math.sqrt(n),isNaN(this.boundingSphere.radius)&&console.error("THREE.LineSegmentsGeometry.computeBoundingSphere(): Computed radius is NaN. The instanced position data is likely to have NaN values.",this)}}toJSON(){}applyMatrix(e){return console.warn("THREE.LineSegmentsGeometry: applyMatrix() has been renamed to applyMatrix4()."),this.applyMatrix4(e)}}var T=m,C=e.i(27919),P=e.i(16366);class L extends T.ShaderMaterial{constructor(e){super({type:"LineMaterial",uniforms:T.UniformsUtils.clone(T.UniformsUtils.merge([C.UniformsLib.common,C.UniformsLib.fog,{worldUnits:{value:1},linewidth:{value:1},resolution:{value:new T.Vector2(1,1)},dashOffset:{value:0},dashScale:{value:1},dashSize:{value:1},gapSize:{value:1}}])),vertexShader:`
				#include <common>
				#include <fog_pars_vertex>
				#include <logdepthbuf_pars_vertex>
				#include <clipping_planes_pars_vertex>

				uniform float linewidth;
				uniform vec2 resolution;

				attribute vec3 instanceStart;
				attribute vec3 instanceEnd;

				#ifdef USE_COLOR
					#ifdef USE_LINE_COLOR_ALPHA
						varying vec4 vLineColor;
						attribute vec4 instanceColorStart;
						attribute vec4 instanceColorEnd;
					#else
						varying vec3 vLineColor;
						attribute vec3 instanceColorStart;
						attribute vec3 instanceColorEnd;
					#endif
				#endif

				#ifdef WORLD_UNITS

					varying vec4 worldPos;
					varying vec3 worldStart;
					varying vec3 worldEnd;

					#ifdef USE_DASH

						varying vec2 vUv;

					#endif

				#else

					varying vec2 vUv;

				#endif

				#ifdef USE_DASH

					uniform float dashScale;
					attribute float instanceDistanceStart;
					attribute float instanceDistanceEnd;
					varying float vLineDistance;

				#endif

				void trimSegment( const in vec4 start, inout vec4 end ) {

					// trim end segment so it terminates between the camera plane and the near plane

					// conservative estimate of the near plane
					float a = projectionMatrix[ 2 ][ 2 ]; // 3nd entry in 3th column
					float b = projectionMatrix[ 3 ][ 2 ]; // 3nd entry in 4th column
					float nearEstimate = - 0.5 * b / a;

					float alpha = ( nearEstimate - start.z ) / ( end.z - start.z );

					end.xyz = mix( start.xyz, end.xyz, alpha );

				}

				void main() {

					#ifdef USE_COLOR

						vLineColor = ( position.y < 0.5 ) ? instanceColorStart : instanceColorEnd;

					#endif

					#ifdef USE_DASH

						vLineDistance = ( position.y < 0.5 ) ? dashScale * instanceDistanceStart : dashScale * instanceDistanceEnd;
						vUv = uv;

					#endif

					float aspect = resolution.x / resolution.y;

					// camera space
					vec4 start = modelViewMatrix * vec4( instanceStart, 1.0 );
					vec4 end = modelViewMatrix * vec4( instanceEnd, 1.0 );

					#ifdef WORLD_UNITS

						worldStart = start.xyz;
						worldEnd = end.xyz;

					#else

						vUv = uv;

					#endif

					// special case for perspective projection, and segments that terminate either in, or behind, the camera plane
					// clearly the gpu firmware has a way of addressing this issue when projecting into ndc space
					// but we need to perform ndc-space calculations in the shader, so we must address this issue directly
					// perhaps there is a more elegant solution -- WestLangley

					bool perspective = ( projectionMatrix[ 2 ][ 3 ] == - 1.0 ); // 4th entry in the 3rd column

					if ( perspective ) {

						if ( start.z < 0.0 && end.z >= 0.0 ) {

							trimSegment( start, end );

						} else if ( end.z < 0.0 && start.z >= 0.0 ) {

							trimSegment( end, start );

						}

					}

					// clip space
					vec4 clipStart = projectionMatrix * start;
					vec4 clipEnd = projectionMatrix * end;

					// ndc space
					vec3 ndcStart = clipStart.xyz / clipStart.w;
					vec3 ndcEnd = clipEnd.xyz / clipEnd.w;

					// direction
					vec2 dir = ndcEnd.xy - ndcStart.xy;

					// account for clip-space aspect ratio
					dir.x *= aspect;
					dir = normalize( dir );

					#ifdef WORLD_UNITS

						// get the offset direction as perpendicular to the view vector
						vec3 worldDir = normalize( end.xyz - start.xyz );
						vec3 offset;
						if ( position.y < 0.5 ) {

							offset = normalize( cross( start.xyz, worldDir ) );

						} else {

							offset = normalize( cross( end.xyz, worldDir ) );

						}

						// sign flip
						if ( position.x < 0.0 ) offset *= - 1.0;

						float forwardOffset = dot( worldDir, vec3( 0.0, 0.0, 1.0 ) );

						// don't extend the line if we're rendering dashes because we
						// won't be rendering the endcaps
						#ifndef USE_DASH

							// extend the line bounds to encompass  endcaps
							start.xyz += - worldDir * linewidth * 0.5;
							end.xyz += worldDir * linewidth * 0.5;

							// shift the position of the quad so it hugs the forward edge of the line
							offset.xy -= dir * forwardOffset;
							offset.z += 0.5;

						#endif

						// endcaps
						if ( position.y > 1.0 || position.y < 0.0 ) {

							offset.xy += dir * 2.0 * forwardOffset;

						}

						// adjust for linewidth
						offset *= linewidth * 0.5;

						// set the world position
						worldPos = ( position.y < 0.5 ) ? start : end;
						worldPos.xyz += offset;

						// project the worldpos
						vec4 clip = projectionMatrix * worldPos;

						// shift the depth of the projected points so the line
						// segments overlap neatly
						vec3 clipPose = ( position.y < 0.5 ) ? ndcStart : ndcEnd;
						clip.z = clipPose.z * clip.w;

					#else

						vec2 offset = vec2( dir.y, - dir.x );
						// undo aspect ratio adjustment
						dir.x /= aspect;
						offset.x /= aspect;

						// sign flip
						if ( position.x < 0.0 ) offset *= - 1.0;

						// endcaps
						if ( position.y < 0.0 ) {

							offset += - dir;

						} else if ( position.y > 1.0 ) {

							offset += dir;

						}

						// adjust for linewidth
						offset *= linewidth;

						// adjust for clip-space to screen-space conversion // maybe resolution should be based on viewport ...
						offset /= resolution.y;

						// select end
						vec4 clip = ( position.y < 0.5 ) ? clipStart : clipEnd;

						// back to clip space
						offset *= clip.w;

						clip.xy += offset;

					#endif

					gl_Position = clip;

					vec4 mvPosition = ( position.y < 0.5 ) ? start : end; // this is an approximation

					#include <logdepthbuf_vertex>
					#include <clipping_planes_vertex>
					#include <fog_vertex>

				}
			`,fragmentShader:`
				uniform vec3 diffuse;
				uniform float opacity;
				uniform float linewidth;

				#ifdef USE_DASH

					uniform float dashOffset;
					uniform float dashSize;
					uniform float gapSize;

				#endif

				varying float vLineDistance;

				#ifdef WORLD_UNITS

					varying vec4 worldPos;
					varying vec3 worldStart;
					varying vec3 worldEnd;

					#ifdef USE_DASH

						varying vec2 vUv;

					#endif

				#else

					varying vec2 vUv;

				#endif

				#include <common>
				#include <fog_pars_fragment>
				#include <logdepthbuf_pars_fragment>
				#include <clipping_planes_pars_fragment>

				#ifdef USE_COLOR
					#ifdef USE_LINE_COLOR_ALPHA
						varying vec4 vLineColor;
					#else
						varying vec3 vLineColor;
					#endif
				#endif

				vec2 closestLineToLine(vec3 p1, vec3 p2, vec3 p3, vec3 p4) {

					float mua;
					float mub;

					vec3 p13 = p1 - p3;
					vec3 p43 = p4 - p3;

					vec3 p21 = p2 - p1;

					float d1343 = dot( p13, p43 );
					float d4321 = dot( p43, p21 );
					float d1321 = dot( p13, p21 );
					float d4343 = dot( p43, p43 );
					float d2121 = dot( p21, p21 );

					float denom = d2121 * d4343 - d4321 * d4321;

					float numer = d1343 * d4321 - d1321 * d4343;

					mua = numer / denom;
					mua = clamp( mua, 0.0, 1.0 );
					mub = ( d1343 + d4321 * ( mua ) ) / d4343;
					mub = clamp( mub, 0.0, 1.0 );

					return vec2( mua, mub );

				}

				void main() {

					#include <clipping_planes_fragment>

					#ifdef USE_DASH

						if ( vUv.y < - 1.0 || vUv.y > 1.0 ) discard; // discard endcaps

						if ( mod( vLineDistance + dashOffset, dashSize + gapSize ) > dashSize ) discard; // todo - FIX

					#endif

					float alpha = opacity;

					#ifdef WORLD_UNITS

						// Find the closest points on the view ray and the line segment
						vec3 rayEnd = normalize( worldPos.xyz ) * 1e5;
						vec3 lineDir = worldEnd - worldStart;
						vec2 params = closestLineToLine( worldStart, worldEnd, vec3( 0.0, 0.0, 0.0 ), rayEnd );

						vec3 p1 = worldStart + lineDir * params.x;
						vec3 p2 = rayEnd * params.y;
						vec3 delta = p1 - p2;
						float len = length( delta );
						float norm = len / linewidth;

						#ifndef USE_DASH

							#ifdef USE_ALPHA_TO_COVERAGE

								float dnorm = fwidth( norm );
								alpha = 1.0 - smoothstep( 0.5 - dnorm, 0.5 + dnorm, norm );

							#else

								if ( norm > 0.5 ) {

									discard;

								}

							#endif

						#endif

					#else

						#ifdef USE_ALPHA_TO_COVERAGE

							// artifacts appear on some hardware if a derivative is taken within a conditional
							float a = vUv.x;
							float b = ( vUv.y > 0.0 ) ? vUv.y - 1.0 : vUv.y + 1.0;
							float len2 = a * a + b * b;
							float dlen = fwidth( len2 );

							if ( abs( vUv.y ) > 1.0 ) {

								alpha = 1.0 - smoothstep( 1.0 - dlen, 1.0 + dlen, len2 );

							}

						#else

							if ( abs( vUv.y ) > 1.0 ) {

								float a = vUv.x;
								float b = ( vUv.y > 0.0 ) ? vUv.y - 1.0 : vUv.y + 1.0;
								float len2 = a * a + b * b;

								if ( len2 > 1.0 ) discard;

							}

						#endif

					#endif

					vec4 diffuseColor = vec4( diffuse, alpha );
					#ifdef USE_COLOR
						#ifdef USE_LINE_COLOR_ALPHA
							diffuseColor *= vLineColor;
						#else
							diffuseColor.rgb *= vLineColor;
						#endif
					#endif

					#include <logdepthbuf_fragment>

					gl_FragColor = diffuseColor;

					#include <tonemapping_fragment>
					#include <${P.version>=154?"colorspace_fragment":"encodings_fragment"}>
					#include <fog_fragment>
					#include <premultiplied_alpha_fragment>

				}
			`,clipping:!0}),this.isLineMaterial=!0,this.onBeforeCompile=function(){this.transparent?this.defines.USE_LINE_COLOR_ALPHA="1":delete this.defines.USE_LINE_COLOR_ALPHA},Object.defineProperties(this,{color:{enumerable:!0,get:function(){return this.uniforms.diffuse.value},set:function(e){this.uniforms.diffuse.value=e}},worldUnits:{enumerable:!0,get:function(){return"WORLD_UNITS"in this.defines},set:function(e){!0===e?this.defines.WORLD_UNITS="":delete this.defines.WORLD_UNITS}},linewidth:{enumerable:!0,get:function(){return this.uniforms.linewidth.value},set:function(e){this.uniforms.linewidth.value=e}},dashed:{enumerable:!0,get:function(){return"USE_DASH"in this.defines},set(e){!!e!="USE_DASH"in this.defines&&(this.needsUpdate=!0),!0===e?this.defines.USE_DASH="":delete this.defines.USE_DASH}},dashScale:{enumerable:!0,get:function(){return this.uniforms.dashScale.value},set:function(e){this.uniforms.dashScale.value=e}},dashSize:{enumerable:!0,get:function(){return this.uniforms.dashSize.value},set:function(e){this.uniforms.dashSize.value=e}},dashOffset:{enumerable:!0,get:function(){return this.uniforms.dashOffset.value},set:function(e){this.uniforms.dashOffset.value=e}},gapSize:{enumerable:!0,get:function(){return this.uniforms.gapSize.value},set:function(e){this.uniforms.gapSize.value=e}},opacity:{enumerable:!0,get:function(){return this.uniforms.opacity.value},set:function(e){this.uniforms.opacity.value=e}},resolution:{enumerable:!0,get:function(){return this.uniforms.resolution.value},set:function(e){this.uniforms.resolution.value.copy(e)}},alphaToCoverage:{enumerable:!0,get:function(){return"USE_ALPHA_TO_COVERAGE"in this.defines},set:function(e){!!e!="USE_ALPHA_TO_COVERAGE"in this.defines&&(this.needsUpdate=!0),!0===e?(this.defines.USE_ALPHA_TO_COVERAGE="",this.extensions.derivatives=!0):(delete this.defines.USE_ALPHA_TO_COVERAGE,this.extensions.derivatives=!1)}}}),this.setValues(e)}}let z=P.version>=125?"uv1":"uv2",I=new b.Vector4,R=new b.Vector3,j=new b.Vector3,V=new b.Vector4,_=new b.Vector4,U=new b.Vector4,D=new b.Vector3,O=new b.Matrix4,B=new b.Line3,k=new b.Vector3,F=new b.Box3,N=new b.Sphere,Q=new b.Vector4;function G(e,t,n){return Q.set(0,0,-t,1).applyMatrix4(e.projectionMatrix),Q.multiplyScalar(1/Q.w),Q.x=i/n.width,Q.y=i/n.height,Q.applyMatrix4(e.projectionMatrixInverse),Q.multiplyScalar(1/Q.w),Math.abs(Math.max(Q.x,Q.y))}class X extends b.Mesh{constructor(e=new A,t=new L({color:0xffffff*Math.random()})){super(e,t),this.isLineSegments2=!0,this.type="LineSegments2"}computeLineDistances(){let e=this.geometry,t=e.attributes.instanceStart,i=e.attributes.instanceEnd,n=new Float32Array(2*t.count);for(let e=0,s=0,r=t.count;e<r;e++,s+=2)R.fromBufferAttribute(t,e),j.fromBufferAttribute(i,e),n[s]=0===s?0:n[s-1],n[s+1]=n[s]+R.distanceTo(j);let s=new b.InstancedInterleavedBuffer(n,2,1);return e.setAttribute("instanceDistanceStart",new b.InterleavedBufferAttribute(s,1,0)),e.setAttribute("instanceDistanceEnd",new b.InterleavedBufferAttribute(s,1,1)),this}raycast(e,n){let s,r,o=this.material.worldUnits,a=e.camera;null!==a||o||console.error('LineSegments2: "Raycaster.camera" needs to be set in order to raycast against LineSegments2 while worldUnits is set to false.');let l=void 0!==e.params.Line2&&e.params.Line2.threshold||0;t=e.ray;let c=this.matrixWorld,h=this.geometry,u=this.material;if(i=u.linewidth+l,null===h.boundingSphere&&h.computeBoundingSphere(),N.copy(h.boundingSphere).applyMatrix4(c),o)s=.5*i;else{let e=Math.max(a.near,N.distanceToPoint(t.origin));s=G(a,e,u.resolution)}if(N.radius+=s,!1!==t.intersectsSphere(N)){if(null===h.boundingBox&&h.computeBoundingBox(),F.copy(h.boundingBox).applyMatrix4(c),o)r=.5*i;else{let e=Math.max(a.near,F.distanceToPoint(t.origin));r=G(a,e,u.resolution)}F.expandByScalar(r),!1!==t.intersectsBox(F)&&(o?function(e,n){let s=e.matrixWorld,r=e.geometry,o=r.attributes.instanceStart,a=r.attributes.instanceEnd,l=Math.min(r.instanceCount,o.count);for(let r=0;r<l;r++){B.start.fromBufferAttribute(o,r),B.end.fromBufferAttribute(a,r),B.applyMatrix4(s);let l=new b.Vector3,c=new b.Vector3;t.distanceSqToSegment(B.start,B.end,c,l),c.distanceTo(l)<.5*i&&n.push({point:c,pointOnLine:l,distance:t.origin.distanceTo(c),object:e,face:null,faceIndex:r,uv:null,[z]:null})}}(this,n):function(e,n,s){let r=n.projectionMatrix,o=e.material.resolution,a=e.matrixWorld,l=e.geometry,c=l.attributes.instanceStart,h=l.attributes.instanceEnd,u=Math.min(l.instanceCount,c.count),p=-n.near;t.at(1,U),U.w=1,U.applyMatrix4(n.matrixWorldInverse),U.applyMatrix4(r),U.multiplyScalar(1/U.w),U.x*=o.x/2,U.y*=o.y/2,U.z=0,D.copy(U),O.multiplyMatrices(n.matrixWorldInverse,a);for(let n=0;n<u;n++){if(V.fromBufferAttribute(c,n),_.fromBufferAttribute(h,n),V.w=1,_.w=1,V.applyMatrix4(O),_.applyMatrix4(O),V.z>p&&_.z>p)continue;if(V.z>p){let e=V.z-_.z,t=(V.z-p)/e;V.lerp(_,t)}else if(_.z>p){let e=_.z-V.z,t=(_.z-p)/e;_.lerp(V,t)}V.applyMatrix4(r),_.applyMatrix4(r),V.multiplyScalar(1/V.w),_.multiplyScalar(1/_.w),V.x*=o.x/2,V.y*=o.y/2,_.x*=o.x/2,_.y*=o.y/2,B.start.copy(V),B.start.z=0,B.end.copy(_),B.end.z=0;let l=B.closestPointToPointParameter(D,!0);B.at(l,k);let u=b.MathUtils.lerp(V.z,_.z,l),d=u>=-1&&u<=1,m=D.distanceTo(k)<.5*i;if(d&&m){B.start.fromBufferAttribute(c,n),B.end.fromBufferAttribute(h,n),B.start.applyMatrix4(a),B.end.applyMatrix4(a);let i=new b.Vector3,r=new b.Vector3;t.distanceSqToSegment(B.start,B.end,r,i),s.push({point:r,pointOnLine:i,distance:t.origin.distanceTo(r),object:e,face:null,faceIndex:n,uv:null,[z]:null})}}}(this,a,n))}}onBeforeRender(e){let t=this.material.uniforms;t&&t.resolution&&(e.getViewport(I),this.material.uniforms.resolution.value.set(I.z,I.w))}}class Y extends A{constructor(){super(),this.isLineGeometry=!0,this.type="LineGeometry"}setPositions(e){let t=e.length-3,i=new Float32Array(2*t);for(let n=0;n<t;n+=3)i[2*n]=e[n],i[2*n+1]=e[n+1],i[2*n+2]=e[n+2],i[2*n+3]=e[n+3],i[2*n+4]=e[n+4],i[2*n+5]=e[n+5];return super.setPositions(i),this}setColors(e,t=3){let i=e.length-t,n=new Float32Array(2*i);if(3===t)for(let s=0;s<i;s+=t)n[2*s]=e[s],n[2*s+1]=e[s+1],n[2*s+2]=e[s+2],n[2*s+3]=e[s+3],n[2*s+4]=e[s+4],n[2*s+5]=e[s+5];else for(let s=0;s<i;s+=t)n[2*s]=e[s],n[2*s+1]=e[s+1],n[2*s+2]=e[s+2],n[2*s+3]=e[s+3],n[2*s+4]=e[s+4],n[2*s+5]=e[s+5],n[2*s+6]=e[s+6],n[2*s+7]=e[s+7];return super.setColors(n,t),this}fromLine(e){let t=e.geometry;return this.setPositions(t.attributes.position.array),this}}class Z extends X{constructor(e=new Y,t=new L({color:0xffffff*Math.random()})){super(e,t),this.isLine2=!0,this.type="Line2"}}let H=l.forwardRef(function({points:e,color:t=0xffffff,vertexColors:i,linewidth:n,lineWidth:s,segments:r,dashed:o,...a},c){var h,p;let f=(0,u.useThree)(e=>e.size),g=l.useMemo(()=>r?new X:new Z,[r]),[y]=l.useState(()=>new L),w=(null==i||null==(h=i[0])?void 0:h.length)===4?4:3,x=l.useMemo(()=>{let n=r?new A:new Y,s=e.map(e=>{let t=Array.isArray(e);return e instanceof m.Vector3||e instanceof m.Vector4?[e.x,e.y,e.z]:e instanceof m.Vector2?[e.x,e.y,0]:t&&3===e.length?[e[0],e[1],e[2]]:t&&2===e.length?[e[0],e[1],0]:e});if(n.setPositions(s.flat()),i){t=0xffffff;let e=i.map(e=>e instanceof m.Color?e.toArray():e);n.setColors(e.flat(),w)}return n},[e,r,i,w]);return l.useLayoutEffect(()=>{g.computeLineDistances()},[e,g]),l.useLayoutEffect(()=>{o?y.defines.USE_DASH="":delete y.defines.USE_DASH,y.needsUpdate=!0},[o,y]),l.useEffect(()=>()=>{x.dispose(),y.dispose()},[x]),l.createElement("primitive",(0,d.default)({object:g,ref:c},a),l.createElement("primitive",{object:x,attach:"geometry"}),l.createElement("primitive",(0,d.default)({object:y,attach:"material",color:t,vertexColors:!!i,resolution:[f.width,f.height],linewidth:null!=(p=null!=n?n:s)?p:1,dashed:o,transparent:4===w},a)))});var W=e.i(45244),q=m,K=Object.defineProperty,$=(e,t,i)=>{let n;return(n="symbol"!=typeof t?t+"":t)in e?K(e,n,{enumerable:!0,configurable:!0,writable:!0,value:i}):e[n]=i,i};let J=(()=>{let e={uniforms:{turbidity:{value:2},rayleigh:{value:1},mieCoefficient:{value:.005},mieDirectionalG:{value:.8},sunPosition:{value:new q.Vector3},up:{value:new q.Vector3(0,1,0)}},vertexShader:`
      uniform vec3 sunPosition;
      uniform float rayleigh;
      uniform float turbidity;
      uniform float mieCoefficient;
      uniform vec3 up;

      varying vec3 vWorldPosition;
      varying vec3 vSunDirection;
      varying float vSunfade;
      varying vec3 vBetaR;
      varying vec3 vBetaM;
      varying float vSunE;

      // constants for atmospheric scattering
      const float e = 2.71828182845904523536028747135266249775724709369995957;
      const float pi = 3.141592653589793238462643383279502884197169;

      // wavelength of used primaries, according to preetham
      const vec3 lambda = vec3( 680E-9, 550E-9, 450E-9 );
      // this pre-calcuation replaces older TotalRayleigh(vec3 lambda) function:
      // (8.0 * pow(pi, 3.0) * pow(pow(n, 2.0) - 1.0, 2.0) * (6.0 + 3.0 * pn)) / (3.0 * N * pow(lambda, vec3(4.0)) * (6.0 - 7.0 * pn))
      const vec3 totalRayleigh = vec3( 5.804542996261093E-6, 1.3562911419845635E-5, 3.0265902468824876E-5 );

      // mie stuff
      // K coefficient for the primaries
      const float v = 4.0;
      const vec3 K = vec3( 0.686, 0.678, 0.666 );
      // MieConst = pi * pow( ( 2.0 * pi ) / lambda, vec3( v - 2.0 ) ) * K
      const vec3 MieConst = vec3( 1.8399918514433978E14, 2.7798023919660528E14, 4.0790479543861094E14 );

      // earth shadow hack
      // cutoffAngle = pi / 1.95;
      const float cutoffAngle = 1.6110731556870734;
      const float steepness = 1.5;
      const float EE = 1000.0;

      float sunIntensity( float zenithAngleCos ) {
        zenithAngleCos = clamp( zenithAngleCos, -1.0, 1.0 );
        return EE * max( 0.0, 1.0 - pow( e, -( ( cutoffAngle - acos( zenithAngleCos ) ) / steepness ) ) );
      }

      vec3 totalMie( float T ) {
        float c = ( 0.2 * T ) * 10E-18;
        return 0.434 * c * MieConst;
      }

      void main() {

        vec4 worldPosition = modelMatrix * vec4( position, 1.0 );
        vWorldPosition = worldPosition.xyz;

        gl_Position = projectionMatrix * modelViewMatrix * vec4( position, 1.0 );
        gl_Position.z = gl_Position.w; // set z to camera.far

        vSunDirection = normalize( sunPosition );

        vSunE = sunIntensity( dot( vSunDirection, up ) );

        vSunfade = 1.0 - clamp( 1.0 - exp( ( sunPosition.y / 450000.0 ) ), 0.0, 1.0 );

        float rayleighCoefficient = rayleigh - ( 1.0 * ( 1.0 - vSunfade ) );

      // extinction (absorbtion + out scattering)
      // rayleigh coefficients
        vBetaR = totalRayleigh * rayleighCoefficient;

      // mie coefficients
        vBetaM = totalMie( turbidity ) * mieCoefficient;

      }
    `,fragmentShader:`
      varying vec3 vWorldPosition;
      varying vec3 vSunDirection;
      varying float vSunfade;
      varying vec3 vBetaR;
      varying vec3 vBetaM;
      varying float vSunE;

      uniform float mieDirectionalG;
      uniform vec3 up;

      const vec3 cameraPos = vec3( 0.0, 0.0, 0.0 );

      // constants for atmospheric scattering
      const float pi = 3.141592653589793238462643383279502884197169;

      const float n = 1.0003; // refractive index of air
      const float N = 2.545E25; // number of molecules per unit volume for air at 288.15K and 1013mb (sea level -45 celsius)

      // optical length at zenith for molecules
      const float rayleighZenithLength = 8.4E3;
      const float mieZenithLength = 1.25E3;
      // 66 arc seconds -> degrees, and the cosine of that
      const float sunAngularDiameterCos = 0.999956676946448443553574619906976478926848692873900859324;

      // 3.0 / ( 16.0 * pi )
      const float THREE_OVER_SIXTEENPI = 0.05968310365946075;
      // 1.0 / ( 4.0 * pi )
      const float ONE_OVER_FOURPI = 0.07957747154594767;

      float rayleighPhase( float cosTheta ) {
        return THREE_OVER_SIXTEENPI * ( 1.0 + pow( cosTheta, 2.0 ) );
      }

      float hgPhase( float cosTheta, float g ) {
        float g2 = pow( g, 2.0 );
        float inverse = 1.0 / pow( 1.0 - 2.0 * g * cosTheta + g2, 1.5 );
        return ONE_OVER_FOURPI * ( ( 1.0 - g2 ) * inverse );
      }

      void main() {

        vec3 direction = normalize( vWorldPosition - cameraPos );

      // optical length
      // cutoff angle at 90 to avoid singularity in next formula.
        float zenithAngle = acos( max( 0.0, dot( up, direction ) ) );
        float inverse = 1.0 / ( cos( zenithAngle ) + 0.15 * pow( 93.885 - ( ( zenithAngle * 180.0 ) / pi ), -1.253 ) );
        float sR = rayleighZenithLength * inverse;
        float sM = mieZenithLength * inverse;

      // combined extinction factor
        vec3 Fex = exp( -( vBetaR * sR + vBetaM * sM ) );

      // in scattering
        float cosTheta = dot( direction, vSunDirection );

        float rPhase = rayleighPhase( cosTheta * 0.5 + 0.5 );
        vec3 betaRTheta = vBetaR * rPhase;

        float mPhase = hgPhase( cosTheta, mieDirectionalG );
        vec3 betaMTheta = vBetaM * mPhase;

        vec3 Lin = pow( vSunE * ( ( betaRTheta + betaMTheta ) / ( vBetaR + vBetaM ) ) * ( 1.0 - Fex ), vec3( 1.5 ) );
        Lin *= mix( vec3( 1.0 ), pow( vSunE * ( ( betaRTheta + betaMTheta ) / ( vBetaR + vBetaM ) ) * Fex, vec3( 1.0 / 2.0 ) ), clamp( pow( 1.0 - dot( up, vSunDirection ), 5.0 ), 0.0, 1.0 ) );

      // nightsky
        float theta = acos( direction.y ); // elevation --> y-axis, [-pi/2, pi/2]
        float phi = atan( direction.z, direction.x ); // azimuth --> x-axis [-pi/2, pi/2]
        vec2 uv = vec2( phi, theta ) / vec2( 2.0 * pi, pi ) + vec2( 0.5, 0.0 );
        vec3 L0 = vec3( 0.1 ) * Fex;

      // composition + solar disc
        float sundisk = smoothstep( sunAngularDiameterCos, sunAngularDiameterCos + 0.00002, cosTheta );
        L0 += ( vSunE * 19000.0 * Fex ) * sundisk;

        vec3 texColor = ( Lin + L0 ) * 0.04 + vec3( 0.0, 0.0003, 0.00075 );

        vec3 retColor = pow( texColor, vec3( 1.0 / ( 1.2 + ( 1.2 * vSunfade ) ) ) );

        gl_FragColor = vec4( retColor, 1.0 );

      #include <tonemapping_fragment>
      #include <${P.version>=154?"colorspace_fragment":"encodings_fragment"}>

      }
    `},t=new q.ShaderMaterial({name:"SkyShader",fragmentShader:e.fragmentShader,vertexShader:e.vertexShader,uniforms:q.UniformsUtils.clone(e.uniforms),side:q.BackSide,depthWrite:!1});class i extends q.Mesh{constructor(){super(new q.BoxGeometry(1,1,1),t)}}return $(i,"SkyShader",e),$(i,"material",t),i})();function ee(e,t,i=new m.Vector3){let n=Math.PI*(e-.5),s=2*Math.PI*(t-.5);return i.x=Math.cos(s),i.y=Math.sin(n),i.z=Math.sin(s),i}let et=l.forwardRef(({inclination:e=.6,azimuth:t=.1,distance:i=1e3,mieCoefficient:n=.005,mieDirectionalG:s=.8,rayleigh:r=.5,turbidity:o=10,sunPosition:a=ee(e,t),...c},h)=>{let u=l.useMemo(()=>new m.Vector3().setScalar(i),[i]),[p]=l.useState(()=>new J);return l.createElement("primitive",(0,d.default)({object:p,ref:h,"material-uniforms-mieCoefficient-value":n,"material-uniforms-mieDirectionalG-value":s,"material-uniforms-rayleigh-value":r,"material-uniforms-sunPosition-value":a,"material-uniforms-turbidity-value":o,scale:u},c))});var ei=m;class en extends ei.ShaderMaterial{constructor(){super({uniforms:{time:{value:0},fade:{value:1}},vertexShader:`
      uniform float time;
      attribute float size;
      varying vec3 vColor;
      void main() {
        vColor = color;
        vec4 mvPosition = modelViewMatrix * vec4(position, 0.5);
        gl_PointSize = size * (30.0 / -mvPosition.z) * (3.0 + sin(time + 100.0));
        gl_Position = projectionMatrix * mvPosition;
      }`,fragmentShader:`
      uniform sampler2D pointTexture;
      uniform float fade;
      varying vec3 vColor;
      void main() {
        float opacity = 1.0;
        if (fade == 1.0) {
          float d = distance(gl_PointCoord, vec2(0.5, 0.5));
          opacity = 1.0 / (1.0 + exp(16.0 * (d - 0.25)));
        }
        gl_FragColor = vec4(vColor, opacity);

        #include <tonemapping_fragment>
	      #include <${y>=154?"colorspace_fragment":"encodings_fragment"}>
      }`})}}let es=e=>new ei.Vector3().setFromSpherical(new ei.Spherical(e,Math.acos(1-2*Math.random()),2*Math.random()*Math.PI)),er=l.forwardRef(({radius:e=100,depth:t=50,count:i=5e3,saturation:n=0,factor:s=4,fade:r=!1,speed:o=1},a)=>{let c=l.useRef(null),[u,p,d]=l.useMemo(()=>{let r=[],o=[],a=Array.from({length:i},()=>(.5+.5*Math.random())*s),l=new ei.Color,c=e+t,h=t/i;for(let e=0;e<i;e++)c-=h*Math.random(),r.push(...es(c).toArray()),l.setHSL(e/i,n,.9),o.push(l.r,l.g,l.b);return[new Float32Array(r),new Float32Array(o),new Float32Array(a)]},[i,t,s,e,n]);(0,h.useFrame)(e=>c.current&&(c.current.uniforms.time.value=e.clock.elapsedTime*o));let[m]=l.useState(()=>new en);return l.createElement("points",{ref:a},l.createElement("bufferGeometry",null,l.createElement("bufferAttribute",{attach:"attributes-position",args:[u,3]}),l.createElement("bufferAttribute",{attach:"attributes-color",args:[p,3]}),l.createElement("bufferAttribute",{attach:"attributes-size",args:[d,1]})),l.createElement("primitive",{ref:c,object:m,attach:"material",blending:ei.AdditiveBlending,"uniforms-fade-value":r,depthWrite:!1,transparent:!0,vertexColors:!0}))});var eo=m,ea=Object.defineProperty,el=(e,t,i)=>{let n;return(n="symbol"!=typeof t?t+"":t)in e?ea(e,n,{enumerable:!0,configurable:!0,writable:!0,value:i}):e[n]=i,i};class ec extends eo.Object3D{constructor(e,t){super(),el(this,"isTransformControls",!0),el(this,"visible",!1),el(this,"domElement"),el(this,"raycaster",new eo.Raycaster),el(this,"gizmo"),el(this,"plane"),el(this,"tempVector",new eo.Vector3),el(this,"tempVector2",new eo.Vector3),el(this,"tempQuaternion",new eo.Quaternion),el(this,"unit",{X:new eo.Vector3(1,0,0),Y:new eo.Vector3(0,1,0),Z:new eo.Vector3(0,0,1)}),el(this,"pointStart",new eo.Vector3),el(this,"pointEnd",new eo.Vector3),el(this,"offset",new eo.Vector3),el(this,"rotationAxis",new eo.Vector3),el(this,"startNorm",new eo.Vector3),el(this,"endNorm",new eo.Vector3),el(this,"rotationAngle",0),el(this,"cameraPosition",new eo.Vector3),el(this,"cameraQuaternion",new eo.Quaternion),el(this,"cameraScale",new eo.Vector3),el(this,"parentPosition",new eo.Vector3),el(this,"parentQuaternion",new eo.Quaternion),el(this,"parentQuaternionInv",new eo.Quaternion),el(this,"parentScale",new eo.Vector3),el(this,"worldPositionStart",new eo.Vector3),el(this,"worldQuaternionStart",new eo.Quaternion),el(this,"worldScaleStart",new eo.Vector3),el(this,"worldPosition",new eo.Vector3),el(this,"worldQuaternion",new eo.Quaternion),el(this,"worldQuaternionInv",new eo.Quaternion),el(this,"worldScale",new eo.Vector3),el(this,"eye",new eo.Vector3),el(this,"positionStart",new eo.Vector3),el(this,"quaternionStart",new eo.Quaternion),el(this,"scaleStart",new eo.Vector3),el(this,"camera"),el(this,"object"),el(this,"enabled",!0),el(this,"axis",null),el(this,"mode","translate"),el(this,"translationSnap",null),el(this,"rotationSnap",null),el(this,"scaleSnap",null),el(this,"space","world"),el(this,"size",1),el(this,"dragging",!1),el(this,"showX",!0),el(this,"showY",!0),el(this,"showZ",!0),el(this,"changeEvent",{type:"change"}),el(this,"mouseDownEvent",{type:"mouseDown",mode:this.mode}),el(this,"mouseUpEvent",{type:"mouseUp",mode:this.mode}),el(this,"objectChangeEvent",{type:"objectChange"}),el(this,"intersectObjectWithRay",(e,t,i)=>{let n=t.intersectObject(e,!0);for(let e=0;e<n.length;e++)if(n[e].object.visible||i)return n[e];return!1}),el(this,"attach",e=>(this.object=e,this.visible=!0,this)),el(this,"detach",()=>(this.object=void 0,this.visible=!1,this.axis=null,this)),el(this,"reset",()=>(this.enabled&&this.dragging&&void 0!==this.object&&(this.object.position.copy(this.positionStart),this.object.quaternion.copy(this.quaternionStart),this.object.scale.copy(this.scaleStart),this.dispatchEvent(this.changeEvent),this.dispatchEvent(this.objectChangeEvent),this.pointStart.copy(this.pointEnd)),this)),el(this,"updateMatrixWorld",()=>{void 0!==this.object&&(this.object.updateMatrixWorld(),null===this.object.parent?console.error("TransformControls: The attached 3D object must be a part of the scene graph."):this.object.parent.matrixWorld.decompose(this.parentPosition,this.parentQuaternion,this.parentScale),this.object.matrixWorld.decompose(this.worldPosition,this.worldQuaternion,this.worldScale),this.parentQuaternionInv.copy(this.parentQuaternion).invert(),this.worldQuaternionInv.copy(this.worldQuaternion).invert()),this.camera.updateMatrixWorld(),this.camera.matrixWorld.decompose(this.cameraPosition,this.cameraQuaternion,this.cameraScale),this.eye.copy(this.cameraPosition).sub(this.worldPosition).normalize(),super.updateMatrixWorld()}),el(this,"pointerHover",e=>{if(void 0===this.object||!0===this.dragging)return;this.raycaster.setFromCamera(e,this.camera);let t=this.intersectObjectWithRay(this.gizmo.picker[this.mode],this.raycaster);t?this.axis=t.object.name:this.axis=null}),el(this,"pointerDown",e=>{if(void 0!==this.object&&!0!==this.dragging&&0===e.button&&null!==this.axis){this.raycaster.setFromCamera(e,this.camera);let t=this.intersectObjectWithRay(this.plane,this.raycaster,!0);if(t){let e=this.space;if("scale"===this.mode?e="local":("E"===this.axis||"XYZE"===this.axis||"XYZ"===this.axis)&&(e="world"),"local"===e&&"rotate"===this.mode){let e=this.rotationSnap;"X"===this.axis&&e&&(this.object.rotation.x=Math.round(this.object.rotation.x/e)*e),"Y"===this.axis&&e&&(this.object.rotation.y=Math.round(this.object.rotation.y/e)*e),"Z"===this.axis&&e&&(this.object.rotation.z=Math.round(this.object.rotation.z/e)*e)}this.object.updateMatrixWorld(),this.object.parent&&this.object.parent.updateMatrixWorld(),this.positionStart.copy(this.object.position),this.quaternionStart.copy(this.object.quaternion),this.scaleStart.copy(this.object.scale),this.object.matrixWorld.decompose(this.worldPositionStart,this.worldQuaternionStart,this.worldScaleStart),this.pointStart.copy(t.point).sub(this.worldPositionStart)}this.dragging=!0,this.mouseDownEvent.mode=this.mode,this.dispatchEvent(this.mouseDownEvent)}}),el(this,"pointerMove",e=>{let t=this.axis,i=this.mode,n=this.object,s=this.space;if("scale"===i?s="local":("E"===t||"XYZE"===t||"XYZ"===t)&&(s="world"),void 0===n||null===t||!1===this.dragging||-1!==e.button)return;this.raycaster.setFromCamera(e,this.camera);let r=this.intersectObjectWithRay(this.plane,this.raycaster,!0);if(r){if(this.pointEnd.copy(r.point).sub(this.worldPositionStart),"translate"===i)this.offset.copy(this.pointEnd).sub(this.pointStart),"local"===s&&"XYZ"!==t&&this.offset.applyQuaternion(this.worldQuaternionInv),-1===t.indexOf("X")&&(this.offset.x=0),-1===t.indexOf("Y")&&(this.offset.y=0),-1===t.indexOf("Z")&&(this.offset.z=0),"local"===s&&"XYZ"!==t?this.offset.applyQuaternion(this.quaternionStart).divide(this.parentScale):this.offset.applyQuaternion(this.parentQuaternionInv).divide(this.parentScale),n.position.copy(this.offset).add(this.positionStart),this.translationSnap&&("local"===s&&(n.position.applyQuaternion(this.tempQuaternion.copy(this.quaternionStart).invert()),-1!==t.search("X")&&(n.position.x=Math.round(n.position.x/this.translationSnap)*this.translationSnap),-1!==t.search("Y")&&(n.position.y=Math.round(n.position.y/this.translationSnap)*this.translationSnap),-1!==t.search("Z")&&(n.position.z=Math.round(n.position.z/this.translationSnap)*this.translationSnap),n.position.applyQuaternion(this.quaternionStart)),"world"===s&&(n.parent&&n.position.add(this.tempVector.setFromMatrixPosition(n.parent.matrixWorld)),-1!==t.search("X")&&(n.position.x=Math.round(n.position.x/this.translationSnap)*this.translationSnap),-1!==t.search("Y")&&(n.position.y=Math.round(n.position.y/this.translationSnap)*this.translationSnap),-1!==t.search("Z")&&(n.position.z=Math.round(n.position.z/this.translationSnap)*this.translationSnap),n.parent&&n.position.sub(this.tempVector.setFromMatrixPosition(n.parent.matrixWorld))));else if("scale"===i){if(-1!==t.search("XYZ")){let e=this.pointEnd.length()/this.pointStart.length();0>this.pointEnd.dot(this.pointStart)&&(e*=-1),this.tempVector2.set(e,e,e)}else this.tempVector.copy(this.pointStart),this.tempVector2.copy(this.pointEnd),this.tempVector.applyQuaternion(this.worldQuaternionInv),this.tempVector2.applyQuaternion(this.worldQuaternionInv),this.tempVector2.divide(this.tempVector),-1===t.search("X")&&(this.tempVector2.x=1),-1===t.search("Y")&&(this.tempVector2.y=1),-1===t.search("Z")&&(this.tempVector2.z=1);n.scale.copy(this.scaleStart).multiply(this.tempVector2),this.scaleSnap&&this.object&&(-1!==t.search("X")&&(this.object.scale.x=Math.round(n.scale.x/this.scaleSnap)*this.scaleSnap||this.scaleSnap),-1!==t.search("Y")&&(n.scale.y=Math.round(n.scale.y/this.scaleSnap)*this.scaleSnap||this.scaleSnap),-1!==t.search("Z")&&(n.scale.z=Math.round(n.scale.z/this.scaleSnap)*this.scaleSnap||this.scaleSnap))}else if("rotate"===i){this.offset.copy(this.pointEnd).sub(this.pointStart);let e=20/this.worldPosition.distanceTo(this.tempVector.setFromMatrixPosition(this.camera.matrixWorld));"E"===t?(this.rotationAxis.copy(this.eye),this.rotationAngle=this.pointEnd.angleTo(this.pointStart),this.startNorm.copy(this.pointStart).normalize(),this.endNorm.copy(this.pointEnd).normalize(),this.rotationAngle*=0>this.endNorm.cross(this.startNorm).dot(this.eye)?1:-1):"XYZE"===t?(this.rotationAxis.copy(this.offset).cross(this.eye).normalize(),this.rotationAngle=this.offset.dot(this.tempVector.copy(this.rotationAxis).cross(this.eye))*e):("X"===t||"Y"===t||"Z"===t)&&(this.rotationAxis.copy(this.unit[t]),this.tempVector.copy(this.unit[t]),"local"===s&&this.tempVector.applyQuaternion(this.worldQuaternion),this.rotationAngle=this.offset.dot(this.tempVector.cross(this.eye).normalize())*e),this.rotationSnap&&(this.rotationAngle=Math.round(this.rotationAngle/this.rotationSnap)*this.rotationSnap),"local"===s&&"E"!==t&&"XYZE"!==t?(n.quaternion.copy(this.quaternionStart),n.quaternion.multiply(this.tempQuaternion.setFromAxisAngle(this.rotationAxis,this.rotationAngle)).normalize()):(this.rotationAxis.applyQuaternion(this.parentQuaternionInv),n.quaternion.copy(this.tempQuaternion.setFromAxisAngle(this.rotationAxis,this.rotationAngle)),n.quaternion.multiply(this.quaternionStart).normalize())}this.dispatchEvent(this.changeEvent),this.dispatchEvent(this.objectChangeEvent)}}),el(this,"pointerUp",e=>{0===e.button&&(this.dragging&&null!==this.axis&&(this.mouseUpEvent.mode=this.mode,this.dispatchEvent(this.mouseUpEvent)),this.dragging=!1,this.axis=null)}),el(this,"getPointer",e=>{var t;if(this.domElement&&(null==(t=this.domElement.ownerDocument)?void 0:t.pointerLockElement))return{x:0,y:0,button:e.button};{let t=e.changedTouches?e.changedTouches[0]:e,i=this.domElement.getBoundingClientRect();return{x:(t.clientX-i.left)/i.width*2-1,y:-(t.clientY-i.top)/i.height*2+1,button:e.button}}}),el(this,"onPointerHover",e=>{if(this.enabled)switch(e.pointerType){case"mouse":case"pen":this.pointerHover(this.getPointer(e))}}),el(this,"onPointerDown",e=>{this.enabled&&this.domElement&&(this.domElement.style.touchAction="none",this.domElement.ownerDocument.addEventListener("pointermove",this.onPointerMove),this.pointerHover(this.getPointer(e)),this.pointerDown(this.getPointer(e)))}),el(this,"onPointerMove",e=>{this.enabled&&this.pointerMove(this.getPointer(e))}),el(this,"onPointerUp",e=>{this.enabled&&this.domElement&&(this.domElement.style.touchAction="",this.domElement.ownerDocument.removeEventListener("pointermove",this.onPointerMove),this.pointerUp(this.getPointer(e)))}),el(this,"getMode",()=>this.mode),el(this,"setMode",e=>{this.mode=e}),el(this,"setTranslationSnap",e=>{this.translationSnap=e}),el(this,"setRotationSnap",e=>{this.rotationSnap=e}),el(this,"setScaleSnap",e=>{this.scaleSnap=e}),el(this,"setSize",e=>{this.size=e}),el(this,"setSpace",e=>{this.space=e}),el(this,"update",()=>{console.warn("THREE.TransformControls: update function has no more functionality and therefore has been deprecated.")}),el(this,"connect",e=>{e===document&&console.error('THREE.OrbitControls: "document" should not be used as the target "domElement". Please use "renderer.domElement" instead.'),this.domElement=e,this.domElement.addEventListener("pointerdown",this.onPointerDown),this.domElement.addEventListener("pointermove",this.onPointerHover),this.domElement.ownerDocument.addEventListener("pointerup",this.onPointerUp)}),el(this,"dispose",()=>{var e,t,i,n,s,r;null==(e=this.domElement)||e.removeEventListener("pointerdown",this.onPointerDown),null==(t=this.domElement)||t.removeEventListener("pointermove",this.onPointerHover),null==(n=null==(i=this.domElement)?void 0:i.ownerDocument)||n.removeEventListener("pointermove",this.onPointerMove),null==(r=null==(s=this.domElement)?void 0:s.ownerDocument)||r.removeEventListener("pointerup",this.onPointerUp),this.traverse(e=>{e.geometry&&e.geometry.dispose(),e.material&&e.material.dispose()})}),this.domElement=t,this.camera=e,this.gizmo=new eh,this.add(this.gizmo),this.plane=new eu,this.add(this.plane);const i=(e,t)=>{let i=t;Object.defineProperty(this,e,{get:function(){return void 0!==i?i:t},set:function(t){i!==t&&(i=t,this.plane[e]=t,this.gizmo[e]=t,this.dispatchEvent({type:e+"-changed",value:t}),this.dispatchEvent(this.changeEvent))}}),this[e]=t,this.plane[e]=t,this.gizmo[e]=t};i("camera",this.camera),i("object",this.object),i("enabled",this.enabled),i("axis",this.axis),i("mode",this.mode),i("translationSnap",this.translationSnap),i("rotationSnap",this.rotationSnap),i("scaleSnap",this.scaleSnap),i("space",this.space),i("size",this.size),i("dragging",this.dragging),i("showX",this.showX),i("showY",this.showY),i("showZ",this.showZ),i("worldPosition",this.worldPosition),i("worldPositionStart",this.worldPositionStart),i("worldQuaternion",this.worldQuaternion),i("worldQuaternionStart",this.worldQuaternionStart),i("cameraPosition",this.cameraPosition),i("cameraQuaternion",this.cameraQuaternion),i("pointStart",this.pointStart),i("pointEnd",this.pointEnd),i("rotationAxis",this.rotationAxis),i("rotationAngle",this.rotationAngle),i("eye",this.eye),void 0!==t&&this.connect(t)}}class eh extends eo.Object3D{constructor(){super(),el(this,"isTransformControlsGizmo",!0),el(this,"type","TransformControlsGizmo"),el(this,"tempVector",new eo.Vector3(0,0,0)),el(this,"tempEuler",new eo.Euler),el(this,"alignVector",new eo.Vector3(0,1,0)),el(this,"zeroVector",new eo.Vector3(0,0,0)),el(this,"lookAtMatrix",new eo.Matrix4),el(this,"tempQuaternion",new eo.Quaternion),el(this,"tempQuaternion2",new eo.Quaternion),el(this,"identityQuaternion",new eo.Quaternion),el(this,"unitX",new eo.Vector3(1,0,0)),el(this,"unitY",new eo.Vector3(0,1,0)),el(this,"unitZ",new eo.Vector3(0,0,1)),el(this,"gizmo"),el(this,"picker"),el(this,"helper"),el(this,"rotationAxis",new eo.Vector3),el(this,"cameraPosition",new eo.Vector3),el(this,"worldPositionStart",new eo.Vector3),el(this,"worldQuaternionStart",new eo.Quaternion),el(this,"worldPosition",new eo.Vector3),el(this,"worldQuaternion",new eo.Quaternion),el(this,"eye",new eo.Vector3),el(this,"camera",null),el(this,"enabled",!0),el(this,"axis",null),el(this,"mode","translate"),el(this,"space","world"),el(this,"size",1),el(this,"dragging",!1),el(this,"showX",!0),el(this,"showY",!0),el(this,"showZ",!0),el(this,"updateMatrixWorld",()=>{let e=this.space;"scale"===this.mode&&(e="local");let t="local"===e?this.worldQuaternion:this.identityQuaternion;this.gizmo.translate.visible="translate"===this.mode,this.gizmo.rotate.visible="rotate"===this.mode,this.gizmo.scale.visible="scale"===this.mode,this.helper.translate.visible="translate"===this.mode,this.helper.rotate.visible="rotate"===this.mode,this.helper.scale.visible="scale"===this.mode;let i=[];i=(i=(i=i.concat(this.picker[this.mode].children)).concat(this.gizmo[this.mode].children)).concat(this.helper[this.mode].children);for(let e=0;e<i.length;e++){let n,s=i[e];if(s.visible=!0,s.rotation.set(0,0,0),s.position.copy(this.worldPosition),n=this.camera.isOrthographicCamera?(this.camera.top-this.camera.bottom)/this.camera.zoom:this.worldPosition.distanceTo(this.cameraPosition)*Math.min(1.9*Math.tan(Math.PI*this.camera.fov/360)/this.camera.zoom,7),s.scale.set(1,1,1).multiplyScalar(n*this.size/7),"helper"===s.tag){s.visible=!1,"AXIS"===s.name?(s.position.copy(this.worldPositionStart),s.visible=!!this.axis,"X"===this.axis&&(this.tempQuaternion.setFromEuler(this.tempEuler.set(0,0,0)),s.quaternion.copy(t).multiply(this.tempQuaternion),Math.abs(this.alignVector.copy(this.unitX).applyQuaternion(t).dot(this.eye))>.9&&(s.visible=!1)),"Y"===this.axis&&(this.tempQuaternion.setFromEuler(this.tempEuler.set(0,0,Math.PI/2)),s.quaternion.copy(t).multiply(this.tempQuaternion),Math.abs(this.alignVector.copy(this.unitY).applyQuaternion(t).dot(this.eye))>.9&&(s.visible=!1)),"Z"===this.axis&&(this.tempQuaternion.setFromEuler(this.tempEuler.set(0,Math.PI/2,0)),s.quaternion.copy(t).multiply(this.tempQuaternion),Math.abs(this.alignVector.copy(this.unitZ).applyQuaternion(t).dot(this.eye))>.9&&(s.visible=!1)),"XYZE"===this.axis&&(this.tempQuaternion.setFromEuler(this.tempEuler.set(0,Math.PI/2,0)),this.alignVector.copy(this.rotationAxis),s.quaternion.setFromRotationMatrix(this.lookAtMatrix.lookAt(this.zeroVector,this.alignVector,this.unitY)),s.quaternion.multiply(this.tempQuaternion),s.visible=this.dragging),"E"===this.axis&&(s.visible=!1)):"START"===s.name?(s.position.copy(this.worldPositionStart),s.visible=this.dragging):"END"===s.name?(s.position.copy(this.worldPosition),s.visible=this.dragging):"DELTA"===s.name?(s.position.copy(this.worldPositionStart),s.quaternion.copy(this.worldQuaternionStart),this.tempVector.set(1e-10,1e-10,1e-10).add(this.worldPositionStart).sub(this.worldPosition).multiplyScalar(-1),this.tempVector.applyQuaternion(this.worldQuaternionStart.clone().invert()),s.scale.copy(this.tempVector),s.visible=this.dragging):(s.quaternion.copy(t),this.dragging?s.position.copy(this.worldPositionStart):s.position.copy(this.worldPosition),this.axis&&(s.visible=-1!==this.axis.search(s.name)));continue}s.quaternion.copy(t),"translate"===this.mode||"scale"===this.mode?(("X"===s.name||"XYZX"===s.name)&&Math.abs(this.alignVector.copy(this.unitX).applyQuaternion(t).dot(this.eye))>.99&&(s.scale.set(1e-10,1e-10,1e-10),s.visible=!1),("Y"===s.name||"XYZY"===s.name)&&Math.abs(this.alignVector.copy(this.unitY).applyQuaternion(t).dot(this.eye))>.99&&(s.scale.set(1e-10,1e-10,1e-10),s.visible=!1),("Z"===s.name||"XYZZ"===s.name)&&Math.abs(this.alignVector.copy(this.unitZ).applyQuaternion(t).dot(this.eye))>.99&&(s.scale.set(1e-10,1e-10,1e-10),s.visible=!1),"XY"===s.name&&.2>Math.abs(this.alignVector.copy(this.unitZ).applyQuaternion(t).dot(this.eye))&&(s.scale.set(1e-10,1e-10,1e-10),s.visible=!1),"YZ"===s.name&&.2>Math.abs(this.alignVector.copy(this.unitX).applyQuaternion(t).dot(this.eye))&&(s.scale.set(1e-10,1e-10,1e-10),s.visible=!1),"XZ"===s.name&&.2>Math.abs(this.alignVector.copy(this.unitY).applyQuaternion(t).dot(this.eye))&&(s.scale.set(1e-10,1e-10,1e-10),s.visible=!1),-1!==s.name.search("X")&&(0>this.alignVector.copy(this.unitX).applyQuaternion(t).dot(this.eye)?"fwd"===s.tag?s.visible=!1:s.scale.x*=-1:"bwd"===s.tag&&(s.visible=!1)),-1!==s.name.search("Y")&&(0>this.alignVector.copy(this.unitY).applyQuaternion(t).dot(this.eye)?"fwd"===s.tag?s.visible=!1:s.scale.y*=-1:"bwd"===s.tag&&(s.visible=!1)),-1!==s.name.search("Z")&&(0>this.alignVector.copy(this.unitZ).applyQuaternion(t).dot(this.eye)?"fwd"===s.tag?s.visible=!1:s.scale.z*=-1:"bwd"===s.tag&&(s.visible=!1))):"rotate"===this.mode&&(this.tempQuaternion2.copy(t),this.alignVector.copy(this.eye).applyQuaternion(this.tempQuaternion.copy(t).invert()),-1!==s.name.search("E")&&s.quaternion.setFromRotationMatrix(this.lookAtMatrix.lookAt(this.eye,this.zeroVector,this.unitY)),"X"===s.name&&(this.tempQuaternion.setFromAxisAngle(this.unitX,Math.atan2(-this.alignVector.y,this.alignVector.z)),this.tempQuaternion.multiplyQuaternions(this.tempQuaternion2,this.tempQuaternion),s.quaternion.copy(this.tempQuaternion)),"Y"===s.name&&(this.tempQuaternion.setFromAxisAngle(this.unitY,Math.atan2(this.alignVector.x,this.alignVector.z)),this.tempQuaternion.multiplyQuaternions(this.tempQuaternion2,this.tempQuaternion),s.quaternion.copy(this.tempQuaternion)),"Z"===s.name&&(this.tempQuaternion.setFromAxisAngle(this.unitZ,Math.atan2(this.alignVector.y,this.alignVector.x)),this.tempQuaternion.multiplyQuaternions(this.tempQuaternion2,this.tempQuaternion),s.quaternion.copy(this.tempQuaternion))),s.visible=s.visible&&(-1===s.name.indexOf("X")||this.showX),s.visible=s.visible&&(-1===s.name.indexOf("Y")||this.showY),s.visible=s.visible&&(-1===s.name.indexOf("Z")||this.showZ),s.visible=s.visible&&(-1===s.name.indexOf("E")||this.showX&&this.showY&&this.showZ),s.material.tempOpacity=s.material.tempOpacity||s.material.opacity,s.material.tempColor=s.material.tempColor||s.material.color.clone(),s.material.color.copy(s.material.tempColor),s.material.opacity=s.material.tempOpacity,this.enabled?this.axis&&(s.name===this.axis||this.axis.split("").some(function(e){return s.name===e})?s.material.opacity=1:s.material.opacity*=.25,s.material.color.lerp(new eo.Color(1,1,1),.5)):(s.material.opacity*=.5,s.material.color.lerp(new eo.Color(1,1,1),.5))}super.updateMatrixWorld()});const e=new eo.MeshBasicMaterial({depthTest:!1,depthWrite:!1,transparent:!0,side:eo.DoubleSide,fog:!1,toneMapped:!1}),t=new eo.LineBasicMaterial({depthTest:!1,depthWrite:!1,transparent:!0,linewidth:1,fog:!1,toneMapped:!1}),i=e.clone();i.opacity=.15;const n=e.clone();n.opacity=.33;const s=e.clone();s.color.set(0xff0000);const r=e.clone();r.color.set(65280);const o=e.clone();o.color.set(255);const a=e.clone();a.opacity=.25;const l=a.clone();l.color.set(0xffff00);const c=a.clone();c.color.set(65535);const h=a.clone();h.color.set(0xff00ff),e.clone().color.set(0xffff00);const u=t.clone();u.color.set(0xff0000);const p=t.clone();p.color.set(65280);const d=t.clone();d.color.set(255);const m=t.clone();m.color.set(65535);const f=t.clone();f.color.set(0xff00ff);const g=t.clone();g.color.set(0xffff00);const y=t.clone();y.color.set(7895160);const w=g.clone();w.opacity=.25;const x=new eo.CylinderGeometry(0,.05,.2,12,1,!1),v=new eo.BoxGeometry(.125,.125,.125),b=new eo.BufferGeometry;b.setAttribute("position",new eo.Float32BufferAttribute([0,0,0,1,0,0],3));const M=(e,t)=>{let i=new eo.BufferGeometry,n=[];for(let i=0;i<=64*t;++i)n.push(0,Math.cos(i/32*Math.PI)*e,Math.sin(i/32*Math.PI)*e);return i.setAttribute("position",new eo.Float32BufferAttribute(n,3)),i},S={X:[[new eo.Mesh(x,s),[1,0,0],[0,0,-Math.PI/2],null,"fwd"],[new eo.Mesh(x,s),[1,0,0],[0,0,Math.PI/2],null,"bwd"],[new eo.Line(b,u)]],Y:[[new eo.Mesh(x,r),[0,1,0],null,null,"fwd"],[new eo.Mesh(x,r),[0,1,0],[Math.PI,0,0],null,"bwd"],[new eo.Line(b,p),null,[0,0,Math.PI/2]]],Z:[[new eo.Mesh(x,o),[0,0,1],[Math.PI/2,0,0],null,"fwd"],[new eo.Mesh(x,o),[0,0,1],[-Math.PI/2,0,0],null,"bwd"],[new eo.Line(b,d),null,[0,-Math.PI/2,0]]],XYZ:[[new eo.Mesh(new eo.OctahedronGeometry(.1,0),a.clone()),[0,0,0],[0,0,0]]],XY:[[new eo.Mesh(new eo.PlaneGeometry(.295,.295),l.clone()),[.15,.15,0]],[new eo.Line(b,g),[.18,.3,0],null,[.125,1,1]],[new eo.Line(b,g),[.3,.18,0],[0,0,Math.PI/2],[.125,1,1]]],YZ:[[new eo.Mesh(new eo.PlaneGeometry(.295,.295),c.clone()),[0,.15,.15],[0,Math.PI/2,0]],[new eo.Line(b,m),[0,.18,.3],[0,0,Math.PI/2],[.125,1,1]],[new eo.Line(b,m),[0,.3,.18],[0,-Math.PI/2,0],[.125,1,1]]],XZ:[[new eo.Mesh(new eo.PlaneGeometry(.295,.295),h.clone()),[.15,0,.15],[-Math.PI/2,0,0]],[new eo.Line(b,f),[.18,0,.3],null,[.125,1,1]],[new eo.Line(b,f),[.3,0,.18],[0,-Math.PI/2,0],[.125,1,1]]]},E={X:[[new eo.Mesh(new eo.CylinderGeometry(.2,0,1,4,1,!1),i),[.6,0,0],[0,0,-Math.PI/2]]],Y:[[new eo.Mesh(new eo.CylinderGeometry(.2,0,1,4,1,!1),i),[0,.6,0]]],Z:[[new eo.Mesh(new eo.CylinderGeometry(.2,0,1,4,1,!1),i),[0,0,.6],[Math.PI/2,0,0]]],XYZ:[[new eo.Mesh(new eo.OctahedronGeometry(.2,0),i)]],XY:[[new eo.Mesh(new eo.PlaneGeometry(.4,.4),i),[.2,.2,0]]],YZ:[[new eo.Mesh(new eo.PlaneGeometry(.4,.4),i),[0,.2,.2],[0,Math.PI/2,0]]],XZ:[[new eo.Mesh(new eo.PlaneGeometry(.4,.4),i),[.2,0,.2],[-Math.PI/2,0,0]]]},A={START:[[new eo.Mesh(new eo.OctahedronGeometry(.01,2),n),null,null,null,"helper"]],END:[[new eo.Mesh(new eo.OctahedronGeometry(.01,2),n),null,null,null,"helper"]],DELTA:[[new eo.Line((()=>{let e=new eo.BufferGeometry;return e.setAttribute("position",new eo.Float32BufferAttribute([0,0,0,1,1,1],3)),e})(),n),null,null,null,"helper"]],X:[[new eo.Line(b,n.clone()),[-1e3,0,0],null,[1e6,1,1],"helper"]],Y:[[new eo.Line(b,n.clone()),[0,-1e3,0],[0,0,Math.PI/2],[1e6,1,1],"helper"]],Z:[[new eo.Line(b,n.clone()),[0,0,-1e3],[0,-Math.PI/2,0],[1e6,1,1],"helper"]]},T={X:[[new eo.Line(M(1,.5),u)],[new eo.Mesh(new eo.OctahedronGeometry(.04,0),s),[0,0,.99],null,[1,3,1]]],Y:[[new eo.Line(M(1,.5),p),null,[0,0,-Math.PI/2]],[new eo.Mesh(new eo.OctahedronGeometry(.04,0),r),[0,0,.99],null,[3,1,1]]],Z:[[new eo.Line(M(1,.5),d),null,[0,Math.PI/2,0]],[new eo.Mesh(new eo.OctahedronGeometry(.04,0),o),[.99,0,0],null,[1,3,1]]],E:[[new eo.Line(M(1.25,1),w),null,[0,Math.PI/2,0]],[new eo.Mesh(new eo.CylinderGeometry(.03,0,.15,4,1,!1),w),[1.17,0,0],[0,0,-Math.PI/2],[1,1,.001]],[new eo.Mesh(new eo.CylinderGeometry(.03,0,.15,4,1,!1),w),[-1.17,0,0],[0,0,Math.PI/2],[1,1,.001]],[new eo.Mesh(new eo.CylinderGeometry(.03,0,.15,4,1,!1),w),[0,-1.17,0],[Math.PI,0,0],[1,1,.001]],[new eo.Mesh(new eo.CylinderGeometry(.03,0,.15,4,1,!1),w),[0,1.17,0],[0,0,0],[1,1,.001]]],XYZE:[[new eo.Line(M(1,1),y),null,[0,Math.PI/2,0]]]},C={AXIS:[[new eo.Line(b,n.clone()),[-1e3,0,0],null,[1e6,1,1],"helper"]]},P={X:[[new eo.Mesh(new eo.TorusGeometry(1,.1,4,24),i),[0,0,0],[0,-Math.PI/2,-Math.PI/2]]],Y:[[new eo.Mesh(new eo.TorusGeometry(1,.1,4,24),i),[0,0,0],[Math.PI/2,0,0]]],Z:[[new eo.Mesh(new eo.TorusGeometry(1,.1,4,24),i),[0,0,0],[0,0,-Math.PI/2]]],E:[[new eo.Mesh(new eo.TorusGeometry(1.25,.1,2,24),i)]],XYZE:[[new eo.Mesh(new eo.SphereGeometry(.7,10,8),i)]]},L={X:[[new eo.Mesh(v,s),[.8,0,0],[0,0,-Math.PI/2]],[new eo.Line(b,u),null,null,[.8,1,1]]],Y:[[new eo.Mesh(v,r),[0,.8,0]],[new eo.Line(b,p),null,[0,0,Math.PI/2],[.8,1,1]]],Z:[[new eo.Mesh(v,o),[0,0,.8],[Math.PI/2,0,0]],[new eo.Line(b,d),null,[0,-Math.PI/2,0],[.8,1,1]]],XY:[[new eo.Mesh(v,l),[.85,.85,0],null,[2,2,.2]],[new eo.Line(b,g),[.855,.98,0],null,[.125,1,1]],[new eo.Line(b,g),[.98,.855,0],[0,0,Math.PI/2],[.125,1,1]]],YZ:[[new eo.Mesh(v,c),[0,.85,.85],null,[.2,2,2]],[new eo.Line(b,m),[0,.855,.98],[0,0,Math.PI/2],[.125,1,1]],[new eo.Line(b,m),[0,.98,.855],[0,-Math.PI/2,0],[.125,1,1]]],XZ:[[new eo.Mesh(v,h),[.85,0,.85],null,[2,.2,2]],[new eo.Line(b,f),[.855,0,.98],null,[.125,1,1]],[new eo.Line(b,f),[.98,0,.855],[0,-Math.PI/2,0],[.125,1,1]]],XYZX:[[new eo.Mesh(new eo.BoxGeometry(.125,.125,.125),a.clone()),[1.1,0,0]]],XYZY:[[new eo.Mesh(new eo.BoxGeometry(.125,.125,.125),a.clone()),[0,1.1,0]]],XYZZ:[[new eo.Mesh(new eo.BoxGeometry(.125,.125,.125),a.clone()),[0,0,1.1]]]},z={X:[[new eo.Mesh(new eo.CylinderGeometry(.2,0,.8,4,1,!1),i),[.5,0,0],[0,0,-Math.PI/2]]],Y:[[new eo.Mesh(new eo.CylinderGeometry(.2,0,.8,4,1,!1),i),[0,.5,0]]],Z:[[new eo.Mesh(new eo.CylinderGeometry(.2,0,.8,4,1,!1),i),[0,0,.5],[Math.PI/2,0,0]]],XY:[[new eo.Mesh(v,i),[.85,.85,0],null,[3,3,.2]]],YZ:[[new eo.Mesh(v,i),[0,.85,.85],null,[.2,3,3]]],XZ:[[new eo.Mesh(v,i),[.85,0,.85],null,[3,.2,3]]],XYZX:[[new eo.Mesh(new eo.BoxGeometry(.2,.2,.2),i),[1.1,0,0]]],XYZY:[[new eo.Mesh(new eo.BoxGeometry(.2,.2,.2),i),[0,1.1,0]]],XYZZ:[[new eo.Mesh(new eo.BoxGeometry(.2,.2,.2),i),[0,0,1.1]]]},I={X:[[new eo.Line(b,n.clone()),[-1e3,0,0],null,[1e6,1,1],"helper"]],Y:[[new eo.Line(b,n.clone()),[0,-1e3,0],[0,0,Math.PI/2],[1e6,1,1],"helper"]],Z:[[new eo.Line(b,n.clone()),[0,0,-1e3],[0,-Math.PI/2,0],[1e6,1,1],"helper"]]},R=e=>{let t=new eo.Object3D;for(let i in e)for(let n=e[i].length;n--;){let s=e[i][n][0].clone(),r=e[i][n][1],o=e[i][n][2],a=e[i][n][3],l=e[i][n][4];s.name=i,s.tag=l,r&&s.position.set(r[0],r[1],r[2]),o&&s.rotation.set(o[0],o[1],o[2]),a&&s.scale.set(a[0],a[1],a[2]),s.updateMatrix();let c=s.geometry.clone();c.applyMatrix4(s.matrix),s.geometry=c,s.renderOrder=1/0,s.position.set(0,0,0),s.rotation.set(0,0,0),s.scale.set(1,1,1),t.add(s)}return t};this.gizmo={},this.picker={},this.helper={},this.add(this.gizmo.translate=R(S)),this.add(this.gizmo.rotate=R(T)),this.add(this.gizmo.scale=R(L)),this.add(this.picker.translate=R(E)),this.add(this.picker.rotate=R(P)),this.add(this.picker.scale=R(z)),this.add(this.helper.translate=R(A)),this.add(this.helper.rotate=R(C)),this.add(this.helper.scale=R(I)),this.picker.translate.visible=!1,this.picker.rotate.visible=!1,this.picker.scale.visible=!1}}class eu extends eo.Mesh{constructor(){super(new eo.PlaneGeometry(1e5,1e5,2,2),new eo.MeshBasicMaterial({visible:!1,wireframe:!0,side:eo.DoubleSide,transparent:!0,opacity:.1,toneMapped:!1})),el(this,"isTransformControlsPlane",!0),el(this,"type","TransformControlsPlane"),el(this,"unitX",new eo.Vector3(1,0,0)),el(this,"unitY",new eo.Vector3(0,1,0)),el(this,"unitZ",new eo.Vector3(0,0,1)),el(this,"tempVector",new eo.Vector3),el(this,"dirVector",new eo.Vector3),el(this,"alignVector",new eo.Vector3),el(this,"tempMatrix",new eo.Matrix4),el(this,"identityQuaternion",new eo.Quaternion),el(this,"cameraQuaternion",new eo.Quaternion),el(this,"worldPosition",new eo.Vector3),el(this,"worldQuaternion",new eo.Quaternion),el(this,"eye",new eo.Vector3),el(this,"axis",null),el(this,"mode","translate"),el(this,"space","world"),el(this,"updateMatrixWorld",()=>{let e=this.space;switch(this.position.copy(this.worldPosition),"scale"===this.mode&&(e="local"),this.unitX.set(1,0,0).applyQuaternion("local"===e?this.worldQuaternion:this.identityQuaternion),this.unitY.set(0,1,0).applyQuaternion("local"===e?this.worldQuaternion:this.identityQuaternion),this.unitZ.set(0,0,1).applyQuaternion("local"===e?this.worldQuaternion:this.identityQuaternion),this.alignVector.copy(this.unitY),this.mode){case"translate":case"scale":switch(this.axis){case"X":this.alignVector.copy(this.eye).cross(this.unitX),this.dirVector.copy(this.unitX).cross(this.alignVector);break;case"Y":this.alignVector.copy(this.eye).cross(this.unitY),this.dirVector.copy(this.unitY).cross(this.alignVector);break;case"Z":this.alignVector.copy(this.eye).cross(this.unitZ),this.dirVector.copy(this.unitZ).cross(this.alignVector);break;case"XY":this.dirVector.copy(this.unitZ);break;case"YZ":this.dirVector.copy(this.unitX);break;case"XZ":this.alignVector.copy(this.unitZ),this.dirVector.copy(this.unitY);break;case"XYZ":case"E":this.dirVector.set(0,0,0)}break;default:this.dirVector.set(0,0,0)}0===this.dirVector.length()?this.quaternion.copy(this.cameraQuaternion):(this.tempMatrix.lookAt(this.tempVector.set(0,0,0),this.dirVector,this.alignVector),this.quaternion.setFromRotationMatrix(this.tempMatrix)),super.updateMatrixWorld()})}}let ep=l.forwardRef(({children:e,domElement:t,onChange:i,onMouseDown:n,onMouseUp:s,onObjectChange:r,object:o,makeDefault:a,camera:c,enabled:h,axis:p,mode:f,translationSnap:g,rotationSnap:y,scaleSnap:w,space:x,size:v,showX:b,showY:M,showZ:S,...E},A)=>{let T=(0,u.useThree)(e=>e.controls),C=(0,u.useThree)(e=>e.gl),P=(0,u.useThree)(e=>e.events),L=(0,u.useThree)(e=>e.camera),z=(0,u.useThree)(e=>e.invalidate),I=(0,u.useThree)(e=>e.get),R=(0,u.useThree)(e=>e.set),j=c||L,V=t||P.connected||C.domElement,_=l.useMemo(()=>new ec(j,V),[j,V]),U=l.useRef(null);l.useLayoutEffect(()=>(o?_.attach(o instanceof m.Object3D?o:o.current):U.current instanceof m.Object3D&&_.attach(U.current),()=>void _.detach()),[o,e,_]),l.useEffect(()=>{if(T){let e=e=>T.enabled=!e.value;return _.addEventListener("dragging-changed",e),()=>_.removeEventListener("dragging-changed",e)}},[_,T]);let D=l.useRef(void 0),O=l.useRef(void 0),B=l.useRef(void 0),k=l.useRef(void 0);return l.useLayoutEffect(()=>void(D.current=i),[i]),l.useLayoutEffect(()=>void(O.current=n),[n]),l.useLayoutEffect(()=>void(B.current=s),[s]),l.useLayoutEffect(()=>void(k.current=r),[r]),l.useEffect(()=>{let e=e=>{z(),null==D.current||D.current(e)},t=e=>null==O.current?void 0:O.current(e),i=e=>null==B.current?void 0:B.current(e),n=e=>null==k.current?void 0:k.current(e);return _.addEventListener("change",e),_.addEventListener("mouseDown",t),_.addEventListener("mouseUp",i),_.addEventListener("objectChange",n),()=>{_.removeEventListener("change",e),_.removeEventListener("mouseDown",t),_.removeEventListener("mouseUp",i),_.removeEventListener("objectChange",n)}},[z,_]),l.useEffect(()=>{if(a){let e=I().controls;return R({controls:_}),()=>R({controls:e})}},[a,_]),l.createElement(l.Fragment,null,l.createElement("primitive",{ref:A,object:_,enabled:h,axis:p,mode:f,translationSnap:g,rotationSnap:y,scaleSnap:w,space:x,size:v,showX:b,showY:M,showZ:S}),l.createElement("group",(0,d.default)({ref:U},E),e))});var ed=e.i(3253),em=e.i(44135);let ef={POSITION:["byte","byte normalized","unsigned byte","unsigned byte normalized","short","short normalized","unsigned short","unsigned short normalized"],NORMAL:["byte normalized","short normalized"],TANGENT:["byte normalized","short normalized"],TEXCOORD:["byte","byte normalized","unsigned byte","short","short normalized","unsigned short"]};class eg{constructor(){this.textureUtils=null,this.pluginCallbacks=[],this.register(function(e){return new eT(e)}),this.register(function(e){return new eC(e)}),this.register(function(e){return new eI(e)}),this.register(function(e){return new eR(e)}),this.register(function(e){return new ej(e)}),this.register(function(e){return new eV(e)}),this.register(function(e){return new eP(e)}),this.register(function(e){return new eL(e)}),this.register(function(e){return new ez(e)}),this.register(function(e){return new e_(e)}),this.register(function(e){return new eU(e)}),this.register(function(e){return new eD(e)}),this.register(function(e){return new eO(e)}),this.register(function(e){return new eB(e)})}register(e){return -1===this.pluginCallbacks.indexOf(e)&&this.pluginCallbacks.push(e),this}unregister(e){return -1!==this.pluginCallbacks.indexOf(e)&&this.pluginCallbacks.splice(this.pluginCallbacks.indexOf(e),1),this}setTextureUtils(e){return this.textureUtils=e,this}parse(e,t,i,n){let s=new eA,r=[];for(let e=0,t=this.pluginCallbacks.length;e<t;e++)r.push(this.pluginCallbacks[e](s));s.setPlugins(r),s.setTextureUtils(this.textureUtils),s.writeAsync(e,t,n).catch(i)}parseAsync(e,t){let i=this;return new Promise(function(n,s){i.parse(e,n,s,t)})}}let ey="KHR_mesh_quantization",ew={};ew[m.NearestFilter]=9728,ew[m.NearestMipmapNearestFilter]=9984,ew[m.NearestMipmapLinearFilter]=9986,ew[m.LinearFilter]=9729,ew[m.LinearMipmapNearestFilter]=9985,ew[m.LinearMipmapLinearFilter]=9987,ew[m.ClampToEdgeWrapping]=33071,ew[m.RepeatWrapping]=10497,ew[m.MirroredRepeatWrapping]=33648;let ex={scale:"scale",position:"translation",quaternion:"rotation",morphTargetInfluences:"weights"},ev=new m.Color;function eb(e,t){return e.length===t.length&&e.every(function(e,i){return e===t[i]})}function eM(e){return 4*Math.ceil(e/4)}function eS(e,t=0){let i=eM(e.byteLength);if(i!==e.byteLength){let n=new Uint8Array(i);if(n.set(new Uint8Array(e)),0!==t)for(let s=e.byteLength;s<i;s++)n[s]=t;return n.buffer}return e}function eE(){return"u"<typeof document&&"u">typeof OffscreenCanvas?new OffscreenCanvas(1,1):document.createElement("canvas")}class eA{constructor(){this.plugins=[],this.options={},this.pending=[],this.buffers=[],this.byteOffset=0,this.buffers=[],this.nodeMap=new Map,this.skins=[],this.extensionsUsed={},this.extensionsRequired={},this.uids=new Map,this.uid=0,this.json={asset:{version:"2.0",generator:"THREE.GLTFExporter r"+m.REVISION}},this.cache={meshes:new Map,attributes:new Map,attributesNormalized:new Map,materials:new Map,textures:new Map,images:new Map,normalMaps:new Map},this.textureUtils=null}setPlugins(e){this.plugins=e}setTextureUtils(e){this.textureUtils=e}async writeAsync(e,t,i={}){this.options=Object.assign({binary:!1,trs:!1,onlyVisible:!0,maxTextureSize:1/0,animations:[],includeCustomExtensions:!1,copyright:null},i),this.options.animations.length>0&&(this.options.trs=!0),await this.processInputAsync(e),await Promise.all(this.pending);let n=this.buffers,s=this.json;i=this.options;let r=this.extensionsUsed,o=this.extensionsRequired,a=new Blob(n,{type:"application/octet-stream"}),l=Object.keys(r),c=Object.keys(o);if(l.length>0&&(s.extensionsUsed=l),c.length>0&&(s.extensionsRequired=c),s.buffers&&s.buffers.length>0&&(s.buffers[0].byteLength=a.size),i.copyright&&(s.asset.copyright=i.copyright),!0===i.binary){let e=new FileReader;e.readAsArrayBuffer(a),e.onloadend=function(){var i;let n=eS(e.result),r=new DataView(new ArrayBuffer(8));r.setUint32(0,n.byteLength,!0),r.setUint32(4,5130562,!0);let o=eS((i=JSON.stringify(s),new TextEncoder().encode(i).buffer),32),a=new DataView(new ArrayBuffer(8));a.setUint32(0,o.byteLength,!0),a.setUint32(4,0x4e4f534a,!0);let l=new ArrayBuffer(12),c=new DataView(l);c.setUint32(0,0x46546c67,!0),c.setUint32(4,2,!0);let h=12+a.byteLength+o.byteLength+r.byteLength+n.byteLength;c.setUint32(8,h,!0);let u=new Blob([l,a,o,r,n],{type:"application/octet-stream"}),p=new FileReader;p.readAsArrayBuffer(u),p.onloadend=function(){t(p.result)}}}else if(s.buffers&&s.buffers.length>0){let e=new FileReader;e.readAsDataURL(a),e.onloadend=function(){let i=e.result;s.buffers[0].uri=i,t(s)}}else t(s)}serializeUserData(e,t){if(0===Object.keys(e.userData).length)return;let i=this.options,n=this.extensionsUsed;try{let s=JSON.parse(JSON.stringify(e.userData));if(i.includeCustomExtensions&&s.gltfExtensions){for(let e in void 0===t.extensions&&(t.extensions={}),s.gltfExtensions)t.extensions[e]=s.gltfExtensions[e],n[e]=!0;delete s.gltfExtensions}Object.keys(s).length>0&&(t.extras=s)}catch(t){console.warn("THREE.GLTFExporter: userData of '"+e.name+"' won't be serialized because of JSON.stringify error - "+t.message)}}getUID(e,t=!1){if(!1===this.uids.has(e)){let t=new Map;t.set(!0,this.uid++),t.set(!1,this.uid++),this.uids.set(e,t)}return this.uids.get(e).get(t)}isNormalizedNormalAttribute(e){if(this.cache.attributesNormalized.has(e))return!1;let t=new m.Vector3;for(let i=0,n=e.count;i<n;i++)if(Math.abs(t.fromBufferAttribute(e,i).length()-1)>5e-4)return!1;return!0}createNormalizedNormalAttribute(e){let t=this.cache;if(t.attributesNormalized.has(e))return t.attributesNormalized.get(e);let i=e.clone(),n=new m.Vector3;for(let e=0,t=i.count;e<t;e++)n.fromBufferAttribute(i,e),0===n.x&&0===n.y&&0===n.z?n.setX(1):n.normalize(),i.setXYZ(e,n.x,n.y,n.z);return t.attributesNormalized.set(e,i),i}applyTextureTransform(e,t){let i=!1,n={};(0!==t.offset.x||0!==t.offset.y)&&(n.offset=t.offset.toArray(),i=!0),0!==t.rotation&&(n.rotation=t.rotation,i=!0),(1!==t.repeat.x||1!==t.repeat.y)&&(n.scale=t.repeat.toArray(),i=!0),i&&(e.extensions=e.extensions||{},e.extensions.KHR_texture_transform=n,this.extensionsUsed.KHR_texture_transform=!0)}async buildMetalRoughTextureAsync(e,t){if(e===t)return e;function i(e){return e.colorSpace===m.SRGBColorSpace?function(e){return e<.04045?.0773993808*e:Math.pow(.9478672986*e+.0521327014,2.4)}:function(e){return e}}e instanceof m.CompressedTexture&&(e=await this.decompressTextureAsync(e)),t instanceof m.CompressedTexture&&(t=await this.decompressTextureAsync(t));let n=e?e.image:null,s=t?t.image:null,r=Math.max(n?n.width:0,s?s.width:0),o=Math.max(n?n.height:0,s?s.height:0),a=eE();a.width=r,a.height=o;let l=a.getContext("2d",{willReadFrequently:!0});l.fillStyle="#00ffff",l.fillRect(0,0,r,o);let c=l.getImageData(0,0,r,o);if(n){l.drawImage(n,0,0,r,o);let t=i(e),s=l.getImageData(0,0,r,o).data;for(let e=2;e<s.length;e+=4)c.data[e]=256*t(s[e]/256)}if(s){l.drawImage(s,0,0,r,o);let e=i(t),n=l.getImageData(0,0,r,o).data;for(let t=1;t<n.length;t+=4)c.data[t]=256*e(n[t]/256)}l.putImageData(c,0,0);let h=(e||t).clone();return h.source=new m.TextureSource(a),h.colorSpace=m.NoColorSpace,h.channel=(e||t).channel,e&&t&&e.channel!==t.channel&&console.warn("THREE.GLTFExporter: UV channels for metalnessMap and roughnessMap textures must match."),console.warn("THREE.GLTFExporter: Merged metalnessMap and roughnessMap textures."),h}async buildNormalMapTextureAsync(e,t,i){e instanceof m.CompressedTexture&&(e=await this.decompressTextureAsync(e));let n=e.image,s=eE();s.width=n.width,s.height=n.height;let r=s.getContext("2d",{willReadFrequently:!0});r.drawImage(n,0,0,s.width,s.height);let o=r.getImageData(0,0,s.width,s.height),a=o.data;for(let e=0;e<a.length;e+=4)t&&(a[e+0]=255-a[e+0]),i&&(a[e+1]=255-a[e+1]);r.putImageData(o,0,0);let l=e.clone();return l.source=new m.TextureSource(s),l}async decompressTextureAsync(e,t=1/0){if(null===this.textureUtils)throw Error("THREE.GLTFExporter: setTextureUtils() must be called to process compressed textures.");return await this.textureUtils.decompress(e,t)}processBuffer(e){let t=this.json,i=this.buffers;return t.buffers||(t.buffers=[{byteLength:0}]),i.push(e),0}processBufferView(e,t,i,n,s){let r,o=this.json;switch(!o.bufferViews&&(o.bufferViews=[]),t){case 5120:case 5121:r=1;break;case 5122:case 5123:r=2;break;default:r=4}let a=e.itemSize*r;34962===s&&(a=4*Math.ceil(a/4));let l=eM(n*a),c=new DataView(new ArrayBuffer(l)),h=0;for(let s=i;s<i+n;s++){for(let i=0;i<e.itemSize;i++){let n;e.itemSize>4?n=e.array[s*e.itemSize+i]:(0===i?n=e.getX(s):1===i?n=e.getY(s):2===i?n=e.getZ(s):3===i&&(n=e.getW(s)),!0===e.normalized&&(n=m.MathUtils.normalize(n,e.array))),5126===t?c.setFloat32(h,n,!0):5124===t?c.setInt32(h,n,!0):5125===t?c.setUint32(h,n,!0):5122===t?c.setInt16(h,n,!0):5123===t?c.setUint16(h,n,!0):5120===t?c.setInt8(h,n):5121===t&&c.setUint8(h,n),h+=r}h%a!=0&&(h+=a-h%a)}let u={buffer:this.processBuffer(c.buffer),byteOffset:this.byteOffset,byteLength:l};return void 0!==s&&(u.target=s),34962===s&&(u.byteStride=a),this.byteOffset+=l,o.bufferViews.push(u),{id:o.bufferViews.length-1,byteLength:0}}processBufferViewImage(e){let t=this,i=t.json;return i.bufferViews||(i.bufferViews=[]),new Promise(function(n){let s=new FileReader;s.readAsArrayBuffer(e),s.onloadend=function(){let e=eS(s.result),r={buffer:t.processBuffer(e),byteOffset:t.byteOffset,byteLength:e.byteLength};t.byteOffset+=e.byteLength,n(i.bufferViews.push(r)-1)}})}processAccessor(e,t,i,n){let s,r,o=this.json;if(e.array.constructor===Float32Array)s=5126;else if(e.array.constructor===Int32Array)s=5124;else if(e.array.constructor===Uint32Array)s=5125;else if(e.array.constructor===Int16Array)s=5122;else if(e.array.constructor===Uint16Array)s=5123;else if(e.array.constructor===Int8Array)s=5120;else if(e.array.constructor===Uint8Array)s=5121;else throw Error("THREE.GLTFExporter: Unsupported bufferAttribute component type: "+e.array.constructor.name);if(void 0===i&&(i=0),(void 0===n||n===1/0)&&(n=e.count),0===n)return null;let a=function(e,t,i){let n={min:Array(e.itemSize).fill(1/0),max:Array(e.itemSize).fill(-1/0)};for(let s=t;s<t+i;s++)for(let t=0;t<e.itemSize;t++){let i;e.itemSize>4?i=e.array[s*e.itemSize+t]:(0===t?i=e.getX(s):1===t?i=e.getY(s):2===t?i=e.getZ(s):3===t&&(i=e.getW(s)),!0===e.normalized&&(i=m.MathUtils.normalize(i,e.array))),n.min[t]=Math.min(n.min[t],i),n.max[t]=Math.max(n.max[t],i)}return n}(e,i,n);void 0!==t&&(r=e===t.index?34963:34962);let l=this.processBufferView(e,s,i,n,r),c={bufferView:l.id,byteOffset:l.byteOffset,componentType:s,count:n,max:a.max,min:a.min,type:{1:"SCALAR",2:"VEC2",3:"VEC3",4:"VEC4",9:"MAT3",16:"MAT4"}[e.itemSize]};return!0===e.normalized&&(c.normalized=!0),o.accessors||(o.accessors=[]),o.accessors.push(c)-1}processImage(e,t,i,n="image/png"){if(null!==e){let s=this,r=s.cache,o=s.json,a=s.options,l=s.pending;r.images.has(e)||r.images.set(e,{});let c=r.images.get(e),h=n+":flipY/"+i.toString();if(void 0!==c[h])return c[h];o.images||(o.images=[]);let u={mimeType:n},p=eE();p.width=Math.min(e.width,a.maxTextureSize),p.height=Math.min(e.height,a.maxTextureSize);let d=p.getContext("2d",{willReadFrequently:!0});if(!0===i&&(d.translate(0,p.height),d.scale(1,-1)),void 0!==e.data){t!==m.RGBAFormat&&console.error("GLTFExporter: Only RGBAFormat is supported.",t),(e.width>a.maxTextureSize||e.height>a.maxTextureSize)&&console.warn("GLTFExporter: Image size is bigger than maxTextureSize",e);let i=new Uint8ClampedArray(e.height*e.width*4);for(let t=0;t<i.length;t+=4)i[t+0]=e.data[t+0],i[t+1]=e.data[t+1],i[t+2]=e.data[t+2],i[t+3]=e.data[t+3];d.putImageData(new ImageData(i,e.width,e.height),0,0)}else if("u">typeof HTMLImageElement&&e instanceof HTMLImageElement||"u">typeof HTMLCanvasElement&&e instanceof HTMLCanvasElement||"u">typeof ImageBitmap&&e instanceof ImageBitmap||"u">typeof OffscreenCanvas&&e instanceof OffscreenCanvas)d.drawImage(e,0,0,p.width,p.height);else throw Error("THREE.GLTFExporter: Invalid image type. Use HTMLImageElement, HTMLCanvasElement, ImageBitmap or OffscreenCanvas.");!0===a.binary?l.push((function(e,t){if(!("u">typeof OffscreenCanvas&&e instanceof OffscreenCanvas))return new Promise(i=>e.toBlob(i,t));{let i;return"image/jpeg"===t?i=.92:"image/webp"===t&&(i=.8),e.convertToBlob({type:t,quality:i})}})(p,n).then(e=>s.processBufferViewImage(e)).then(e=>{u.bufferView=e})):u.uri=m.ImageUtils.getDataURL(p,n);let f=o.images.push(u)-1;return c[h]=f,f}throw Error("THREE.GLTFExporter: No valid image data found. Unable to process texture.")}processSampler(e){let t=this.json;t.samplers||(t.samplers=[]);let i={magFilter:ew[e.magFilter],minFilter:ew[e.minFilter],wrapS:ew[e.wrapS],wrapT:ew[e.wrapT]};return t.samplers.push(i)-1}async processTextureAsync(e){let t=this.options,i=this.cache,n=this.json;if(i.textures.has(e))return i.textures.get(e);n.textures||(n.textures=[]),e instanceof m.CompressedTexture&&(e=await this.decompressTextureAsync(e,t.maxTextureSize));let s=e.userData.mimeType,r=this.processImage(e.image,e.format,e.flipY,s),o={sampler:this.processSampler(e)};"image/webp"===s?(o.extensions=o.extensions||{},o.extensions.EXT_texture_webp={source:r},this.extensionsUsed.EXT_texture_webp=!0,this.extensionsRequired.EXT_texture_webp=!0):o.source=r,e.name&&(o.name=e.name),await this._invokeAllAsync(async function(t){t.writeTexture&&await t.writeTexture(e,o)});let a=n.textures.push(o)-1;return i.textures.set(e,a),a}async processMaterialAsync(e,t){let i=this.cache,n=this.json,s=void 0!==t&&t.hasAttribute("tangent"),r=e.normalMap?e.uuid+":"+s:e.uuid;if(i.materials.has(r))return i.materials.get(r);if(e.isShaderMaterial)return console.warn("GLTFExporter: THREE.ShaderMaterial not supported."),null;n.materials||(n.materials=[]);let o={pbrMetallicRoughness:{}};!0!==e.isMeshStandardMaterial&&!0!==e.isMeshBasicMaterial&&console.warn("GLTFExporter: Use MeshStandardMaterial or MeshBasicMaterial for best results.");let a=e.color.toArray().concat([e.opacity]);if(eb(a,[1,1,1,1])||(o.pbrMetallicRoughness.baseColorFactor=a),e.isMeshStandardMaterial?(o.pbrMetallicRoughness.metallicFactor=e.metalness,o.pbrMetallicRoughness.roughnessFactor=e.roughness):(o.pbrMetallicRoughness.metallicFactor=0,o.pbrMetallicRoughness.roughnessFactor=1),e.metalnessMap||e.roughnessMap){let t=await this.buildMetalRoughTextureAsync(e.metalnessMap,e.roughnessMap),i={index:await this.processTextureAsync(t),texCoord:t.channel};this.applyTextureTransform(i,t),o.pbrMetallicRoughness.metallicRoughnessTexture=i}if(e.map){let t={index:await this.processTextureAsync(e.map),texCoord:e.map.channel};this.applyTextureTransform(t,e.map),o.pbrMetallicRoughness.baseColorTexture=t}if(e.emissive){let t=e.emissive;if(Math.max(t.r,t.g,t.b)>0&&(o.emissiveFactor=e.emissive.toArray()),e.emissiveMap){let t={index:await this.processTextureAsync(e.emissiveMap),texCoord:e.emissiveMap.channel};this.applyTextureTransform(t,e.emissiveMap),o.emissiveTexture=t}}if(e.normalMap){let t=e.normalScale,n=t.x<0,r=s?t.y<0:t.y>0,a=e.normalMap;if(n||r){!1===i.normalMaps.has(e.normalMap)&&i.normalMaps.set(e.normalMap,{});let t=i.normalMaps.get(e.normalMap),s=`${n}:${r}`;void 0===t[s]&&(t[s]=await this.buildNormalMapTextureAsync(e.normalMap,n,r)),a=t[s]}let l={index:await this.processTextureAsync(a),texCoord:e.normalMap.channel};1!==Math.abs(t.x)&&(l.scale=Math.abs(t.x)),this.applyTextureTransform(l,e.normalMap),o.normalTexture=l}if(e.aoMap){let t={index:await this.processTextureAsync(e.aoMap),texCoord:e.aoMap.channel};1!==e.aoMapIntensity&&(t.strength=e.aoMapIntensity),this.applyTextureTransform(t,e.aoMap),o.occlusionTexture=t}e.transparent?o.alphaMode="BLEND":e.alphaTest>0&&(o.alphaMode="MASK",o.alphaCutoff=e.alphaTest),e.side===m.DoubleSide&&(o.doubleSided=!0),""!==e.name&&(o.name=e.name),this.serializeUserData(e,o),await this._invokeAllAsync(async function(t){t.writeMaterialAsync&&await t.writeMaterialAsync(e,o)});let l=n.materials.push(o)-1;return i.materials.set(r,l),l}async processMeshAsync(e){let t,i=this.cache,n=this.json,s=[e.geometry.uuid];if(Array.isArray(e.material))for(let t=0,i=e.material.length;t<i;t++)s.push(e.material[t].uuid);else s.push(e.material.uuid);let r=s.join(":");if(i.meshes.has(r))return i.meshes.get(r);let o=e.geometry;t=e.isLineSegments?1:e.isLineLoop?2:e.isLine?3:e.isPoints?0:e.material.wireframe?1:4;let a={},l={},c=[],h=[],u={uv:"TEXCOORD_0",uv1:"TEXCOORD_1",uv2:"TEXCOORD_2",uv3:"TEXCOORD_3",color:"COLOR_0",skinWeight:"WEIGHTS_0",skinIndex:"JOINTS_0"},p=o.getAttribute("normal");void 0===p||this.isNormalizedNormalAttribute(p)||(console.warn("THREE.GLTFExporter: Creating normalized normal attribute from the non-normalized one."),o.setAttribute("normal",this.createNormalizedNormalAttribute(p)));let d=null;for(let e in o.attributes){if("morph"===e.slice(0,5))continue;let t=o.attributes[e];if(e=u[e]||e.toUpperCase(),/^(POSITION|NORMAL|TANGENT|TEXCOORD_\d+|COLOR_\d+|JOINTS_\d+|WEIGHTS_\d+)$/.test(e)||e.startsWith("_")||(e="_"+e),i.attributes.has(this.getUID(t))){l[e]=i.attributes.get(this.getUID(t));continue}d=null;let n=t.array;"JOINTS_0"!==e||n instanceof Uint16Array||n instanceof Uint8Array?(n instanceof Uint32Array||n instanceof Int32Array)&&!e.startsWith("_")&&(console.warn(`GLTFExporter: Attribute "${e}" converted to type FLOAT.`),d=eg.Utils.toTypedBufferAttribute(t,Float32Array)):(console.warn('GLTFExporter: Attribute "skinIndex" converted to type UNSIGNED_SHORT.'),d=eg.Utils.toTypedBufferAttribute(t,Uint16Array));let s=this.processAccessor(d||t,o);null!==s&&(e.startsWith("_")||this.detectMeshQuantization(e,t),l[e]=s,i.attributes.set(this.getUID(t),s))}if(void 0!==p&&o.setAttribute("normal",p),0===Object.keys(l).length)return null;if(void 0!==e.morphTargetInfluences&&e.morphTargetInfluences.length>0){let t=[],n=[],s={};if(void 0!==e.morphTargetDictionary)for(let t in e.morphTargetDictionary)s[e.morphTargetDictionary[t]]=t;for(let r=0;r<e.morphTargetInfluences.length;++r){let a={},l=!1;for(let e in o.morphAttributes){if("position"!==e&&"normal"!==e){l||(console.warn("GLTFExporter: Only POSITION and NORMAL morph are supported."),l=!0);continue}let t=o.morphAttributes[e][r],n=e.toUpperCase(),s=o.attributes[e];if(i.attributes.has(this.getUID(t,!0))){a[n]=i.attributes.get(this.getUID(t,!0));continue}let c=t.clone();if(!o.morphTargetsRelative)for(let e=0,i=t.count;e<i;e++)for(let i=0;i<t.itemSize;i++)0===i&&c.setX(e,t.getX(e)-s.getX(e)),1===i&&c.setY(e,t.getY(e)-s.getY(e)),2===i&&c.setZ(e,t.getZ(e)-s.getZ(e)),3===i&&c.setW(e,t.getW(e)-s.getW(e));a[n]=this.processAccessor(c,o),i.attributes.set(this.getUID(s,!0),a[n])}h.push(a),t.push(e.morphTargetInfluences[r]),void 0!==e.morphTargetDictionary&&n.push(s[r])}a.weights=t,n.length>0&&(a.extras={},a.extras.targetNames=n)}let m=Array.isArray(e.material);if(m&&0===o.groups.length)return null;let f=!1;if(m&&null===o.index){let e=[];for(let t=0,i=o.attributes.position.count;t<i;t++)e[t]=t;o.setIndex(e),f=!0}let g=m?e.material:[e.material],y=m?o.groups:[{materialIndex:0,start:void 0,count:void 0}];for(let e=0,n=y.length;e<n;e++){let n={mode:t,attributes:l};if(this.serializeUserData(o,n),h.length>0&&(n.targets=h),null!==o.index){let t=this.getUID(o.index);(void 0!==y[e].start||void 0!==y[e].count)&&(t+=":"+y[e].start+":"+y[e].count),i.attributes.has(t)?n.indices=i.attributes.get(t):(n.indices=this.processAccessor(o.index,o,y[e].start,y[e].count),i.attributes.set(t,n.indices)),null===n.indices&&delete n.indices}let s=await this.processMaterialAsync(g[y[e].materialIndex],o);null!==s&&(n.material=s),c.push(n)}!0===f&&o.setIndex(null),a.primitives=c,n.meshes||(n.meshes=[]),await this._invokeAllAsync(function(t){t.writeMesh&&t.writeMesh(e,a)});let w=n.meshes.push(a)-1;return i.meshes.set(r,w),w}detectMeshQuantization(e,t){let i;if(this.extensionsUsed[ey])return;switch(t.array.constructor){case Int8Array:i="byte";break;case Uint8Array:i="unsigned byte";break;case Int16Array:i="short";break;case Uint16Array:i="unsigned short";break;default:return}t.normalized&&(i+=" normalized");let n=e.split("_",1)[0];ef[n]&&ef[n].includes(i)&&(this.extensionsUsed[ey]=!0,this.extensionsRequired[ey]=!0)}processCamera(e){let t=this.json;t.cameras||(t.cameras=[]);let i=e.isOrthographicCamera,n={type:i?"orthographic":"perspective"};return i?n.orthographic={xmag:2*e.right,ymag:2*e.top,zfar:e.far<=0?.001:e.far,znear:e.near<0?0:e.near}:n.perspective={aspectRatio:e.aspect,yfov:m.MathUtils.degToRad(e.fov),zfar:e.far<=0?.001:e.far,znear:e.near<0?0:e.near},""!==e.name&&(n.name=e.type),t.cameras.push(n)-1}processAnimation(e,t){let i=this.json,n=this.nodeMap;i.animations||(i.animations=[]);let s=(e=eg.Utils.mergeMorphTargetTracks(e.clone(),t)).tracks,r=[],o=[];for(let e=0;e<s.length;++e){let i,a=s[e],l=m.PropertyBinding.parseTrackName(a.name),c=m.PropertyBinding.findNode(t,l.nodeName),h=ex[l.propertyName];if("bones"===l.objectName&&(c=!0===c.isSkinnedMesh?c.skeleton.getBoneByName(l.objectIndex):void 0),!c||!h){console.warn('THREE.GLTFExporter: Could not export animation track "%s".',a.name);continue}let u=a.values.length/a.times.length;h===ex.morphTargetInfluences&&(u/=c.morphTargetInfluences.length),!0===a.createInterpolant.isInterpolantFactoryMethodGLTFCubicSpline?(i="CUBICSPLINE",u/=3):i=a.getInterpolation()===m.InterpolateDiscrete?"STEP":"LINEAR",o.push({input:this.processAccessor(new m.BufferAttribute(a.times,1)),output:this.processAccessor(new m.BufferAttribute(a.values,u)),interpolation:i}),r.push({sampler:o.length-1,target:{node:n.get(c),path:h}})}let a={name:e.name||"clip_"+i.animations.length,samplers:o,channels:r};return this.serializeUserData(e,a),i.animations.push(a),i.animations.length-1}processSkin(e){let t=this.json,i=this.nodeMap,n=t.nodes[i.get(e)],s=e.skeleton;if(void 0===s)return null;let r=e.skeleton.bones[0];if(void 0===r)return null;let o=[],a=new Float32Array(16*s.bones.length),l=new m.Matrix4;for(let t=0;t<s.bones.length;++t)o.push(i.get(s.bones[t])),l.copy(s.boneInverses[t]),l.multiply(e.bindMatrix).toArray(a,16*t);return void 0===t.skins&&(t.skins=[]),t.skins.push({inverseBindMatrices:this.processAccessor(new m.BufferAttribute(a,16)),joints:o,skeleton:i.get(r)}),n.skin=t.skins.length-1}async processNodeAsync(e){let t=this.json,i=this.options,n=this.nodeMap;if(t.nodes||(t.nodes=[]),null!==e.pivot)return await this._processNodeWithPivotAsync(e);let s={};if(i.trs){let t=e.quaternion.toArray(),i=e.position.toArray(),n=e.scale.toArray();eb(t,[0,0,0,1])||(s.rotation=t),eb(i,[0,0,0])||(s.translation=i),eb(n,[1,1,1])||(s.scale=n)}else e.matrixAutoUpdate&&e.updateMatrix(),!1===eb(e.matrix.elements,[1,0,0,0,0,1,0,0,0,0,1,0,0,0,0,1])&&(s.matrix=e.matrix.elements);if(""!==e.name&&(s.name=String(e.name)),this.serializeUserData(e,s),e.isMesh||e.isLine||e.isPoints){let t=await this.processMeshAsync(e);null!==t&&(s.mesh=t)}else e.isCamera&&(s.camera=this.processCamera(e));e.isSkinnedMesh&&this.skins.push(e);let r=t.nodes.push(s)-1;if(n.set(e,r),e.children.length>0){let t=[];for(let n=0,s=e.children.length;n<s;n++){let s=e.children[n];if(s.visible||!1===i.onlyVisible){let e=await this.processNodeAsync(s);null!==e&&t.push(e)}}t.length>0&&(s.children=t)}return await this._invokeAllAsync(function(t){t.writeNode&&t.writeNode(e,s)}),r}async _processNodeWithPivotAsync(e){let t=this.json,i=this.options,n=this.nodeMap,s=e.pivot,r={},o=e.quaternion.toArray(),a=[e.position.x+s.x,e.position.y+s.y,e.position.z+s.z],l=e.scale.toArray();eb(o,[0,0,0,1])||(r.rotation=o),eb(a,[0,0,0])||(r.translation=a),eb(l,[1,1,1])||(r.scale=l),r.extras={pivot:s.toArray()},""!==e.name&&(r.name=String(e.name)),this.serializeUserData(e,r);let c=t.nodes.push(r)-1;n.set(e,c);let h={},u=[-s.x,-s.y,-s.z];if(eb(u,[0,0,0])||(h.translation=u),e.isMesh||e.isLine||e.isPoints){let t=await this.processMeshAsync(e);null!==t&&(h.mesh=t)}else e.isCamera&&(h.camera=this.processCamera(e));e.isSkinnedMesh&&this.skins.push(e);let p=t.nodes.push(h)-1;if(e.children.length>0){let t=[];for(let n=0,s=e.children.length;n<s;n++){let s=e.children[n];if(s.visible||!1===i.onlyVisible){let e=await this.processNodeAsync(s);null!==e&&t.push(e)}}t.length>0&&(h.children=t)}return r.children=[p],await this._invokeAllAsync(function(t){t.writeNode&&t.writeNode(e,r)}),c}async processSceneAsync(e){let t=this.json,i=this.options;t.scenes||(t.scenes=[],t.scene=0);let n={};""!==e.name&&(n.name=e.name),t.scenes.push(n);let s=[];for(let t=0,n=e.children.length;t<n;t++){let n=e.children[t];if(n.visible||!1===i.onlyVisible){let e=await this.processNodeAsync(n);null!==e&&s.push(e)}}s.length>0&&(n.nodes=s),this.serializeUserData(e,n)}async processObjectsAsync(e){let t=new m.Scene;t.name="AuxScene";for(let i=0;i<e.length;i++)t.children.push(e[i]);await this.processSceneAsync(t)}async processInputAsync(e){let t=this.options;e=e instanceof Array?e:[e],await this._invokeAllAsync(function(t){t.beforeParse&&t.beforeParse(e)});let i=[];for(let t=0;t<e.length;t++)e[t]instanceof m.Scene?await this.processSceneAsync(e[t]):i.push(e[t]);i.length>0&&await this.processObjectsAsync(i);for(let e=0;e<this.skins.length;++e)this.processSkin(this.skins[e]);if(1===e.length)for(let i=0;i<t.animations.length;++i)this.processAnimation(t.animations[i],e[0]);else for(let i=0;i<e.length;i++){let n=t.animations[i]||[];for(let t=0;t<n.length;++t)this.processAnimation(n[t],e[i])}await this._invokeAllAsync(function(t){t.afterParse&&t.afterParse(e)})}async _invokeAllAsync(e){for(let t=0,i=this.plugins.length;t<i;t++)await e(this.plugins[t])}}class eT{constructor(e){this.writer=e,this.name="KHR_lights_punctual"}writeNode(e,t){if(!e.isLight)return;if(!e.isDirectionalLight&&!e.isPointLight&&!e.isSpotLight)return void console.warn("THREE.GLTFExporter: Only directional, point, and spot lights are supported.",e);let i=this.writer,n=i.json,s=i.extensionsUsed,r={};e.name&&(r.name=e.name),r.color=e.color.toArray(),r.intensity=e.intensity,e.isDirectionalLight?r.type="directional":e.isPointLight?(r.type="point",e.distance>0&&(r.range=e.distance)):e.isSpotLight&&(r.type="spot",e.distance>0&&(r.range=e.distance),r.spot={},r.spot.innerConeAngle=(1-e.penumbra)*e.angle,r.spot.outerConeAngle=e.angle),void 0!==e.decay&&2!==e.decay&&console.warn("THREE.GLTFExporter: Light decay may be lost. glTF is physically-based, and expects light.decay=2."),e.target&&(e.target.parent!==e||0!==e.target.position.x||0!==e.target.position.y||-1!==e.target.position.z)&&console.warn("THREE.GLTFExporter: Light direction may be lost. For best results, make light.target a child of the light with position 0,0,-1."),s[this.name]||(n.extensions=n.extensions||{},n.extensions[this.name]={lights:[]},s[this.name]=!0);let o=n.extensions[this.name].lights;o.push(r),t.extensions=t.extensions||{},t.extensions[this.name]={light:o.length-1}}}class eC{constructor(e){this.writer=e,this.name="KHR_materials_unlit"}async writeMaterialAsync(e,t){if(!e.isMeshBasicMaterial)return;let i=this.writer.extensionsUsed;t.extensions=t.extensions||{},t.extensions[this.name]={},i[this.name]=!0,t.pbrMetallicRoughness.metallicFactor=0,t.pbrMetallicRoughness.roughnessFactor=.9}}class eP{constructor(e){this.writer=e,this.name="KHR_materials_clearcoat"}async writeMaterialAsync(e,t){if(!e.isMeshPhysicalMaterial||0===e.clearcoat)return;let i=this.writer,n=i.extensionsUsed,s={};if(s.clearcoatFactor=e.clearcoat,e.clearcoatMap){let t={index:await i.processTextureAsync(e.clearcoatMap),texCoord:e.clearcoatMap.channel};i.applyTextureTransform(t,e.clearcoatMap),s.clearcoatTexture=t}if(s.clearcoatRoughnessFactor=e.clearcoatRoughness,e.clearcoatRoughnessMap){let t={index:await i.processTextureAsync(e.clearcoatRoughnessMap),texCoord:e.clearcoatRoughnessMap.channel};i.applyTextureTransform(t,e.clearcoatRoughnessMap),s.clearcoatRoughnessTexture=t}if(e.clearcoatNormalMap){let t={index:await i.processTextureAsync(e.clearcoatNormalMap),texCoord:e.clearcoatNormalMap.channel};1!==e.clearcoatNormalScale.x&&(t.scale=e.clearcoatNormalScale.x),i.applyTextureTransform(t,e.clearcoatNormalMap),s.clearcoatNormalTexture=t}t.extensions=t.extensions||{},t.extensions[this.name]=s,n[this.name]=!0}}class eL{constructor(e){this.writer=e,this.name="KHR_materials_dispersion"}async writeMaterialAsync(e,t){if(!e.isMeshPhysicalMaterial||0===e.dispersion)return;let i=this.writer.extensionsUsed,n={};n.dispersion=e.dispersion,t.extensions=t.extensions||{},t.extensions[this.name]=n,i[this.name]=!0}}class ez{constructor(e){this.writer=e,this.name="KHR_materials_iridescence"}async writeMaterialAsync(e,t){if(!e.isMeshPhysicalMaterial||0===e.iridescence)return;let i=this.writer,n=i.extensionsUsed,s={};if(s.iridescenceFactor=e.iridescence,e.iridescenceMap){let t={index:await i.processTextureAsync(e.iridescenceMap),texCoord:e.iridescenceMap.channel};i.applyTextureTransform(t,e.iridescenceMap),s.iridescenceTexture=t}if(s.iridescenceIor=e.iridescenceIOR,s.iridescenceThicknessMinimum=e.iridescenceThicknessRange[0],s.iridescenceThicknessMaximum=e.iridescenceThicknessRange[1],e.iridescenceThicknessMap){let t={index:await i.processTextureAsync(e.iridescenceThicknessMap),texCoord:e.iridescenceThicknessMap.channel};i.applyTextureTransform(t,e.iridescenceThicknessMap),s.iridescenceThicknessTexture=t}t.extensions=t.extensions||{},t.extensions[this.name]=s,n[this.name]=!0}}class eI{constructor(e){this.writer=e,this.name="KHR_materials_transmission"}async writeMaterialAsync(e,t){if(!e.isMeshPhysicalMaterial||0===e.transmission)return;let i=this.writer,n=i.extensionsUsed,s={};if(s.transmissionFactor=e.transmission,e.transmissionMap){let t={index:await i.processTextureAsync(e.transmissionMap),texCoord:e.transmissionMap.channel};i.applyTextureTransform(t,e.transmissionMap),s.transmissionTexture=t}t.extensions=t.extensions||{},t.extensions[this.name]=s,n[this.name]=!0}}class eR{constructor(e){this.writer=e,this.name="KHR_materials_volume"}async writeMaterialAsync(e,t){if(!e.isMeshPhysicalMaterial||0===e.transmission)return;let i=this.writer,n=i.extensionsUsed,s={};if(s.thicknessFactor=e.thickness,e.thicknessMap){let t={index:await i.processTextureAsync(e.thicknessMap),texCoord:e.thicknessMap.channel};i.applyTextureTransform(t,e.thicknessMap),s.thicknessTexture=t}e.attenuationDistance!==1/0&&(s.attenuationDistance=e.attenuationDistance),s.attenuationColor=e.attenuationColor.toArray(),t.extensions=t.extensions||{},t.extensions[this.name]=s,n[this.name]=!0}}class ej{constructor(e){this.writer=e,this.name="KHR_materials_ior"}async writeMaterialAsync(e,t){if(!e.isMeshPhysicalMaterial||1.5===e.ior)return;let i=this.writer.extensionsUsed,n={};n.ior=e.ior,t.extensions=t.extensions||{},t.extensions[this.name]=n,i[this.name]=!0}}class eV{constructor(e){this.writer=e,this.name="KHR_materials_specular"}async writeMaterialAsync(e,t){if(!e.isMeshPhysicalMaterial||1===e.specularIntensity&&e.specularColor.equals(ev)&&!e.specularIntensityMap&&!e.specularColorMap)return;let i=this.writer,n=i.extensionsUsed,s={};if(e.specularIntensityMap){let t={index:await i.processTextureAsync(e.specularIntensityMap),texCoord:e.specularIntensityMap.channel};i.applyTextureTransform(t,e.specularIntensityMap),s.specularTexture=t}if(e.specularColorMap){let t={index:await i.processTextureAsync(e.specularColorMap),texCoord:e.specularColorMap.channel};i.applyTextureTransform(t,e.specularColorMap),s.specularColorTexture=t}s.specularFactor=e.specularIntensity,s.specularColorFactor=e.specularColor.toArray(),t.extensions=t.extensions||{},t.extensions[this.name]=s,n[this.name]=!0}}class e_{constructor(e){this.writer=e,this.name="KHR_materials_sheen"}async writeMaterialAsync(e,t){if(!e.isMeshPhysicalMaterial||0==e.sheen)return;let i=this.writer,n=i.extensionsUsed,s={};if(e.sheenRoughnessMap){let t={index:await i.processTextureAsync(e.sheenRoughnessMap),texCoord:e.sheenRoughnessMap.channel};i.applyTextureTransform(t,e.sheenRoughnessMap),s.sheenRoughnessTexture=t}if(e.sheenColorMap){let t={index:await i.processTextureAsync(e.sheenColorMap),texCoord:e.sheenColorMap.channel};i.applyTextureTransform(t,e.sheenColorMap),s.sheenColorTexture=t}s.sheenRoughnessFactor=e.sheenRoughness,s.sheenColorFactor=e.sheenColor.toArray(),t.extensions=t.extensions||{},t.extensions[this.name]=s,n[this.name]=!0}}class eU{constructor(e){this.writer=e,this.name="KHR_materials_anisotropy"}async writeMaterialAsync(e,t){if(!e.isMeshPhysicalMaterial||0==e.anisotropy)return;let i=this.writer,n=i.extensionsUsed,s={};if(e.anisotropyMap){let t={index:await i.processTextureAsync(e.anisotropyMap)};i.applyTextureTransform(t,e.anisotropyMap),s.anisotropyTexture=t}s.anisotropyStrength=e.anisotropy,s.anisotropyRotation=e.anisotropyRotation,t.extensions=t.extensions||{},t.extensions[this.name]=s,n[this.name]=!0}}class eD{constructor(e){this.writer=e,this.name="KHR_materials_emissive_strength"}async writeMaterialAsync(e,t){if(!e.isMeshStandardMaterial||1===e.emissiveIntensity)return;let i=this.writer.extensionsUsed,n={};n.emissiveStrength=e.emissiveIntensity,t.extensions=t.extensions||{},t.extensions[this.name]=n,i[this.name]=!0}}class eO{constructor(e){this.writer=e,this.name="EXT_materials_bump"}async writeMaterialAsync(e,t){if(!e.isMeshStandardMaterial||1===e.bumpScale&&!e.bumpMap)return;let i=this.writer,n=i.extensionsUsed,s={};if(e.bumpMap){let t={index:await i.processTextureAsync(e.bumpMap),texCoord:e.bumpMap.channel};i.applyTextureTransform(t,e.bumpMap),s.bumpTexture=t}s.bumpFactor=e.bumpScale,t.extensions=t.extensions||{},t.extensions[this.name]=s,n[this.name]=!0}}class eB{constructor(e){this.writer=e,this.name="EXT_mesh_gpu_instancing"}writeNode(e,t){if(!e.isInstancedMesh)return;let i=this.writer,n=new Float32Array(3*e.count),s=new Float32Array(4*e.count),r=new Float32Array(3*e.count),o=new m.Matrix4,a=new m.Vector3,l=new m.Quaternion,c=new m.Vector3;for(let t=0;t<e.count;t++)e.getMatrixAt(t,o),o.decompose(a,l,c),a.toArray(n,3*t),l.toArray(s,4*t),c.toArray(r,3*t);let h={TRANSLATION:i.processAccessor(new m.BufferAttribute(n,3)),ROTATION:i.processAccessor(new m.BufferAttribute(s,4)),SCALE:i.processAccessor(new m.BufferAttribute(r,3))};e.instanceColor&&(h._COLOR_0=i.processAccessor(e.instanceColor)),t.extensions=t.extensions||{},t.extensions[this.name]={attributes:h},i.extensionsUsed[this.name]=!0,i.extensionsRequired[this.name]=!0}}eg.Utils={insertKeyframe:function(e,t){let i,n=e.getValueSize(),s=new e.TimeBufferType(e.times.length+1),r=new e.ValueBufferType(e.values.length+n),o=e.createInterpolant(new e.ValueBufferType(n));if(0===e.times.length){s[0]=t;for(let e=0;e<n;e++)r[e]=0;i=0}else if(t<e.times[0]){if(.001>Math.abs(e.times[0]-t))return 0;s[0]=t,s.set(e.times,1),r.set(o.evaluate(t),0),r.set(e.values,n),i=0}else if(t>e.times[e.times.length-1]){if(.001>Math.abs(e.times[e.times.length-1]-t))return e.times.length-1;s[s.length-1]=t,s.set(e.times,0),r.set(e.values,0),r.set(o.evaluate(t),e.values.length),i=s.length-1}else for(let a=0;a<e.times.length;a++){if(.001>Math.abs(e.times[a]-t))return a;if(e.times[a]<t&&e.times[a+1]>t){s.set(e.times.slice(0,a+1),0),s[a+1]=t,s.set(e.times.slice(a+1),a+2),r.set(e.values.slice(0,(a+1)*n),0),r.set(o.evaluate(t),(a+1)*n),r.set(e.values.slice((a+1)*n),(a+2)*n),i=a+1;break}}return e.times=s,e.values=r,i},mergeMorphTargetTracks:function(e,t){let i=[],n={},s=e.tracks;for(let e=0;e<s.length;++e){let r,o=s[e],a=m.PropertyBinding.parseTrackName(o.name),l=m.PropertyBinding.findNode(t,a.nodeName);if("morphTargetInfluences"!==a.propertyName||void 0===a.propertyIndex){i.push(o);continue}if(o.createInterpolant!==o.InterpolantFactoryMethodDiscrete&&o.createInterpolant!==o.InterpolantFactoryMethodLinear){if(o.createInterpolant.isInterpolantFactoryMethodGLTFCubicSpline)throw Error("THREE.GLTFExporter: Cannot merge tracks with glTF CUBICSPLINE interpolation.");console.warn("THREE.GLTFExporter: Morph target interpolation mode not yet supported. Using LINEAR instead."),(o=o.clone()).setInterpolation(m.InterpolateLinear)}let c=l.morphTargetInfluences.length,h=l.morphTargetDictionary[a.propertyIndex];if(void 0===h)throw Error("THREE.GLTFExporter: Morph target name not found: "+a.propertyIndex);if(void 0===n[l.uuid]){let e=new(r=o.clone()).ValueBufferType(c*r.times.length);for(let t=0;t<r.times.length;t++)e[t*c+h]=r.values[t];r.name=(a.nodeName||"")+".morphTargetInfluences",r.values=e,n[l.uuid]=r,i.push(r);continue}let u=o.createInterpolant(new o.ValueBufferType(1));r=n[l.uuid];for(let e=0;e<r.times.length;e++)r.values[e*c+h]=u.evaluate(r.times[e]);for(let e=0;e<o.times.length;e++){let t=this.insertKeyframe(r,o.times[e]);r.values[t*c+h]=o.values[e]}}return e.tracks=i,e},toTypedBufferAttribute:function(e,t){let i=new m.BufferAttribute(new t(e.count*e.itemSize),e.itemSize,!1);if(!e.normalized&&!e.isInterleavedBufferAttribute)return i.array.set(e.array),i;for(let t=0,n=e.count;t<n;t++)for(let n=0;n<e.itemSize;n++)i.setComponent(t,n,e.getComponent(t,n));return i}};var ek=e.i(93209),eF=e.i(3295),eN=e.i(7335),eQ=e.i(44390),eG=e.i(48458);let eX="#a78bfa",eY=e=>Math.round(1e3*e)/1e3,eZ=e=>[eY(e.x),eY(e.y),eY(e.z)];function eH(e,t,i){let n=[];for(let i of e.tracks){let{nodeName:e}=m.PropertyBinding.parseTrackName(i.name),s=t.getObjectByName(e);if(!s)continue;let r=i.clone();r.name=s.uuid+i.name.slice(e.length),n.push(r)}return new m.AnimationClip(i,e.duration,n)}function eW(e,t,i=null){t?e.userData.exportClip=t:delete e.userData.exportClip,i?e.userData.stopClip=i:delete e.userData.stopClip}function eq(e,t){t?e.userData.motion=t:delete e.userData.motion}let eK=(0,l.createContext)({current:!1}),e$=(0,l.createContext)({current:0}),eJ=(0,l.createContext)(null);function e0({clockRef:e}){let t=(0,l.useContext)(eK);return(0,h.useFrame)((i,n)=>{t.current||(e.current+=Math.min(n,.1))},-1),null}function e1({clip:e,stopClip:t,root:i,label:n}){let s=(0,l.useContext)(eK),r=(0,l.useContext)(eJ),o=(0,l.useMemo)(()=>new m.AnimationMixer(i),[i]),a=(0,l.useRef)(null);return(0,l.useEffect)(()=>{let s=eH(e,i,n),r=o.clipAction(s);r.setLoop(m.LoopRepeat,1/0).play();let l=t?eH(t,i,`${n} (waiting)`):null,c=l?o.clipAction(l):null;return c?.setLoop(m.LoopRepeat,1/0).play().setEffectiveWeight(0),a.current={move:r,stop:c},eW(i,s,l),()=>{a.current=null,r.stop(),c?.stop(),o.uncacheClip(s),l&&o.uncacheClip(l),eW(i,null),i.traverse(e=>{let t=e.userData.rest;t&&(e.position.copy(t.p),e.quaternion.copy(t.q),e.scale.copy(t.s))})}},[e,t,i,o,n]),(0,h.useFrame)((e,t)=>{let i=s.current?0:Math.min(t,.1),n=a.current;if(n?.stop){let e=n.stop.getEffectiveWeight(),t=r?.current?Math.min(1,e+5*i):Math.max(0,e-5*i);n.stop.setEffectiveWeight(t),n.move.setEffectiveWeight(1-t)}o.update(i)}),null}function e2({motion:e,position:t,rotation:i,groupRef:n,active:s,waitingRef:r}){let o=(0,l.useContext)(e$),a=(0,l.useMemo)(()=>new eN.MotionSampler(e,t),[e,t]),c=(0,l.useMemo)(()=>new m.Quaternion().setFromEuler(new m.Euler(i[0],i[1],i[2])),[i]),u=(0,l.useMemo)(()=>({sampler:a,offset:c}),[a,c]),p=(0,l.useRef)(!1),d=(0,l.useRef)({position:t,rotation:i});return(0,l.useLayoutEffect)(()=>{d.current={position:t,rotation:i}}),(0,l.useLayoutEffect)(()=>()=>{let e=n.current;if(!e)return;eq(e,null);let{position:t,rotation:i}=d.current;e.position.set(t[0],t[1],t[2]),e.rotation.set(i[0],i[1],i[2])},[n]),(0,h.useFrame)(()=>{let e=n.current;e&&(e.userData.motion!==u&&eq(e,u),s?(r.current=a.pose(o.current,e.position,e.quaternion,c),p.current=!1):p.current||(a.pose(0,e.position,e.quaternion,c),e.position.set(t[0],t[1],t[2]),r.current=!1,p.current=!0))}),null}function e3({item:e}){let t=(0,l.useMemo)(()=>{let[t,i,n]=e.position,s=e.motion.path.map(e=>[e[0]+t,e[1]+i+.08,e[2]+n]);return[...s,s[0]]},[e.motion,e.position]);return(0,a.jsx)(H,{points:t,color:eX,lineWidth:2,dashed:!0,dashSize:.6,gapSize:.4,depthTest:!1,transparent:!0,opacity:.85,renderOrder:998})}function e5(e,t){let i=e.map(e=>e.duration).filter(e=>e>.001);if(!i.length)return new m.AnimationClip(t,0,e.flatMap(e=>e.tracks.map(e=>e.clone())));let n=Math.max(...i),s={length:n,error:1/0};for(let e=n;e<=Math.max(n,Math.min(4*n,60))+1e-6;e+=n/200){let t=Math.max(...i.map(t=>Math.abs(Math.max(1,Math.round(e/t))*t-e)/e));if(t<s.error-.002&&(s={length:e,error:t}),s.error<.004)break}let r=s.length,o=[];for(let t of e){let e=t.duration;if(e<=.001){o.push(...t.tracks.map(e=>e.clone()));continue}let i=Math.max(1,Math.round(r/e)),n=r/(i*e);for(let s of t.tracks){let t=s.getValueSize(),a=[],l=[];for(let r=0;r<i;r++)for(let i=0;i<s.times.length;i++){let o=(s.times[i]+r*e)*n;if(!a.length||!(o<=a[a.length-1]+1e-5)){a.push(o);for(let e=0;e<t;e++)l.push(s.values[i*t+e])}}if(a[a.length-1]<r-1e-4){a.push(r);for(let e=0;e<t;e++)l.push(s.values[e])}let c=new s.constructor(s.name,a,l,s.getInterpolation());s.createInterpolant.isInterpolantFactoryMethodGLTFCubicSpline&&(c.createInterpolant=s.createInterpolant),o.push(c)}}return new m.AnimationClip(t,r,o)}function e4({source:e,root:t,children:i}){return e?"clip"in e?(0,a.jsx)(a.Fragment,{children:i(e.clip)}):(0,a.jsx)(e8,{url:e.url,root:t,children:i}):(0,a.jsx)(a.Fragment,{children:i(null)})}function e8({url:e,root:t,children:i}){let n=(0,u.useThree)(e=>e.gl),{animations:s}=(0,ed.useGLTF)(e,(0,ek.asset)("/decoders/draco/"),!0,e=>{(0,eF.configureGLTFLoader)(e,n)}),r=(0,l.useMemo)(()=>s[0]?(0,eQ.retarget)(s[0],t):null,[s,t]);return(0,a.jsx)(a.Fragment,{children:i(r)})}function e9({item:e,part:t,clips:i,onClips:n}){let s=(0,u.useThree)(e=>e.gl),r=(0,ed.useGLTF)((0,ek.asset)(e.glb),(0,ek.asset)("/decoders/draco/"),!0,e=>{(0,eF.configureGLTFLoader)(e,s)}),o=(0,l.useMemo)(()=>{var e;let t;return e=r.scene,(t=(0,em.clone)(e)).name="",t.traverse(e=>{e.isMesh&&(e.castShadow=!0,e.receiveShadow=!0,e.isSkinnedMesh&&(e.frustumCulled=!1)),e.userData.rest={p:e.position.clone(),q:e.quaternion.clone(),s:e.scale.clone()}}),(0,eQ.recordRestPose)(t),t},[r.scene]),c=(0,l.useMemo)(()=>r.animations.map(e=>e.name),[r.animations]);(0,l.useEffect)(()=>n(e.glb,c),[e.glb,c,n]);let h=t?.set??null,p=e=>{if(!e)return null;let t=r.animations.find(t=>t.name===e);if(t)return{clip:t,label:t.name};let n=h?i.find(t=>t.id===e&&t.set===h):void 0;return n?{url:(0,ek.asset)(n.file),label:n.label}:null},d=p(void 0===e.animation?h?`${h}_idle_neutral_01`:(0,eG.defaultClip)(c):e.animation),m=e.motion?p(e.motion.stopAnimation):null,f=`${e.name}: ${d?.label??""}`;return(0,a.jsxs)(a.Fragment,{children:[(0,a.jsx)("primitive",{object:o}),(0,a.jsx)(l.Suspense,{fallback:null,children:(0,a.jsx)(e4,{source:d,root:o,children:e=>e&&(0,a.jsx)(e4,{source:m,root:o,children:t=>(0,a.jsx)(e1,{clip:e,stopClip:t,root:o,label:f})})})})]})}function e6({size:e}){let t=(0,l.useRef)(null);return(0,h.useFrame)(({clock:e})=>{let i=t.current?.material;i&&(i.opacity=.25+.15*Math.sin(4*e.elapsedTime))}),(0,a.jsxs)("mesh",{ref:t,position:[0,e[1]/2,0],userData:{editorOnly:!0},children:[(0,a.jsx)("boxGeometry",{args:e}),(0,a.jsx)("meshBasicMaterial",{color:eX,wireframe:!0,transparent:!0,opacity:.3})]})}function e7({item:e}){let t=(0,l.useRef)(null),i=e.light??{color:"#ffa040",intensity:14,distance:14},n=(0,l.useMemo)(()=>[...e.id].reduce((e,t)=>(31*e+t.charCodeAt(0))%1e3,7)/10,[e.id]);return(0,l.useEffect)(()=>{t.current&&(t.current.userData.baseIntensity=i.intensity)},[i.intensity]),(0,h.useFrame)(({clock:e})=>{if(!t.current)return;if(!i.flicker){t.current.intensity=i.intensity;return}let s=9*e.elapsedTime+n,r=.82+.1*Math.sin(s)+.06*Math.sin(2.7*s+1.3)+.05*Math.sin(6.1*s);t.current.intensity=i.intensity*r}),(0,a.jsxs)(a.Fragment,{children:[(0,a.jsx)("pointLight",{ref:t,color:i.color,intensity:i.intensity,distance:i.distance,decay:2}),(0,a.jsxs)("mesh",{userData:{editorOnly:!0},children:[(0,a.jsx)("sphereGeometry",{args:[.16,16,12]}),(0,a.jsx)("meshBasicMaterial",{color:i.color,toneMapped:!1})]}),(0,a.jsxs)("mesh",{userData:{editorOnly:!0},children:[(0,a.jsx)("sphereGeometry",{args:[.32,12,8]}),(0,a.jsx)("meshBasicMaterial",{color:i.color,wireframe:!0,transparent:!0,opacity:.35,toneMapped:!1})]})]})}function te({item:e,part:t,clips:i,selected:n,register:s,onClick:r,onDoubleClick:o,onClips:c}){let h=e.id,u=(0,l.useRef)(null),p=(0,l.useRef)(!1),d=(0,l.useCallback)(e=>{u.current=e,s(h,e)},[h,s]);return(0,a.jsxs)("group",{ref:d,name:e.name,position:e.position,rotation:e.rotation,scale:e.scale,visible:!e.hidden,onClick:t=>r(e,t),onDoubleClick:t=>o(e,t),children:[e.motion&&(0,a.jsx)(e2,{motion:e.motion,position:e.position,rotation:e.rotation,groupRef:u,active:!n,waitingRef:p}),"light"===e.kind?(0,a.jsx)(e7,{item:e}):(0,a.jsx)(eJ.Provider,{value:e.motion?p:null,children:(0,a.jsx)(l.Suspense,{fallback:(0,a.jsx)(e6,{size:t?.size??[1,1,1]}),children:(0,a.jsx)(e9,{item:e,part:t,clips:i,onClips:c})})})]})}function tt({object:e}){let t=(0,l.useMemo)(()=>{let t=new m.BoxHelper(e,eX);return t.material.depthTest=!1,t.material.transparent=!0,t.material.opacity=.9,t.renderOrder=999,t},[e]);return(0,l.useEffect)(()=>()=>t.dispose(),[t]),(0,h.useFrame)(()=>t.update()),(0,a.jsx)("primitive",{object:t})}function ti({objects:e,mode:t,snap:i,gizmoRef:n,onStart:s,onCommit:r}){let o=(0,l.useMemo)(()=>new m.Group,[]),c=(0,l.useRef)(null),h=(0,l.useCallback)(()=>{let t=new m.Vector3;for(let i of e)t.add(i.position);o.position.copy(t.divideScalar(Math.max(e.length,1))),o.quaternion.identity(),o.scale.setScalar(1),o.updateMatrixWorld(!0)},[e,o]);return(0,l.useLayoutEffect)(h,[h]),(0,a.jsxs)(a.Fragment,{children:[(0,a.jsx)("primitive",{object:o}),(0,a.jsx)(ep,{ref:n,object:o,mode:t,size:.85,translationSnap:i||null,rotationSnap:i?m.MathUtils.degToRad(15):null,scaleSnap:i?.1:null,onMouseDown:()=>{s(),o.updateMatrixWorld(!0),c.current={inverse:o.matrixWorld.clone().invert(),matrices:e.map(e=>(e.updateMatrix(),e.matrix.clone()))}},onObjectChange:()=>{let t=c.current;if(!t)return;o.updateMatrixWorld(!0);let i=o.matrixWorld.clone().multiply(t.inverse);e.forEach((e,n)=>new m.Matrix4().multiplyMatrices(i,t.matrices[n]).decompose(e.position,e.quaternion,e.scale))},onMouseUp:()=>{c.current=null,r(),h()}})]})}function tn({placing:e,groupRef:t}){return(0,a.jsx)("group",{ref:t,visible:!1,rotation:[0,e.rotation,0],children:"model"===e.kind?(0,a.jsx)(l.Suspense,{fallback:(0,a.jsx)(e6,{size:e.part.size}),children:(0,a.jsx)(ts,{glb:e.part.glb})}):(0,a.jsxs)("mesh",{children:[(0,a.jsx)("sphereGeometry",{args:[.25,16,12]}),(0,a.jsx)("meshBasicMaterial",{color:"#ffb050",transparent:!0,opacity:.7,toneMapped:!1})]})})}function ts({glb:e}){let t=(0,u.useThree)(e=>e.gl),i=(0,ed.useGLTF)((0,ek.asset)(e),(0,ek.asset)("/decoders/draco/"),!0,e=>{(0,eF.configureGLTFLoader)(e,t)}),{root:n,materials:s}=(0,l.useMemo)(()=>{let e=(0,em.clone)(i.scene),t=[];return e.traverse(e=>{if(!e.isMesh)return;e.raycast=()=>{};let i=e=>{let i=e.clone();return i.transparent=!0,i.opacity=.55,i.depthWrite=!1,t.push(i),i};e.material=Array.isArray(e.material)?e.material.map(i):i(e.material)}),{root:e,materials:t}},[i.scene]);return(0,l.useEffect)(()=>()=>s.forEach(e=>e.dispose()),[s]),(0,a.jsx)("primitive",{object:n})}function tr(e,t,i,n,s,r,o){e.setFromCamera(i,t);let a=null;if(n){for(let t of e.intersectObjects(n.children,!0))if(t.object.isMesh&&!t.object.userData.editorOnly&&to(t.object)&&!(o&&ta(t.object,o))){a=t.point.clone();break}}return a||(a=new m.Vector3,e.ray.intersectPlane(new m.Plane(new m.Vector3(0,1,0),-s),a))?(r>0&&(a.x=Math.round(a.x/r)*r,a.z=Math.round(a.z/r)*r),a):null}function to(e){for(let t=e;t;t=t.parent)if(!t.visible)return!1;return!0}function ta(e,t){for(let i=e;i;i=i.parent)if(i===t)return!0;return!1}function tl({placing:e,snap:t,itemsRoot:i,groundY:n,onPlace:s}){let r=(0,u.useThree)(e=>e.get),o=(0,l.useRef)(null),c=(0,l.useRef)(s);return(0,l.useLayoutEffect)(()=>{c.current=s}),(0,l.useEffect)(()=>{let{gl:e}=r(),s=e.domElement,a=new m.Vector2,l=null,h=e=>{let o=s.getBoundingClientRect();a.set((e.clientX-o.left)/o.width*2-1,-(2*((e.clientY-o.top)/o.height))+1);let{raycaster:l,camera:c}=r();return tr(l,c,a,i.current,n,t)},u=e=>{let t=h(e);o.current&&(o.current.visible=!!t,t&&o.current.position.copy(t))},p=e=>{0===e.button&&(l={x:e.clientX,y:e.clientY})},d=e=>{if(!l||0!==e.button)return;let t=Math.hypot(e.clientX-l.x,e.clientY-l.y);if(l=null,t>5)return;let i=h(e);i&&c.current([eY(i.x),eY(i.y),eY(i.z)],e.shiftKey)},f=()=>{o.current&&(o.current.visible=!1)};return s.addEventListener("pointermove",u),s.addEventListener("pointerdown",p),s.addEventListener("pointerup",d),s.addEventListener("pointerleave",f),s.style.cursor="crosshair",()=>{s.removeEventListener("pointermove",u),s.removeEventListener("pointerdown",p),s.removeEventListener("pointerup",d),s.removeEventListener("pointerleave",f),s.style.cursor=""}},[r,i,n,t]),(0,a.jsx)(tn,{placing:e,groupRef:o})}function tc({env:e,groundSize:t}){let i=eG.ENVIRONMENTS[e],n=Math.max(1,(t-80)/120),s=Math.max(1,1+(t-200)/50),r=i.sun.position.map(e=>e*n),o=42*n,c=(0,u.useThree)(e=>e.get);return(0,l.useLayoutEffect)(()=>{let{gl:e}=c();e.toneMapping=m.NeutralToneMapping,e.toneMappingExposure=i.exposure},[c,i.exposure]),(0,a.jsxs)(a.Fragment,{children:[(0,a.jsx)("color",{attach:"background",args:[i.background]}),i.fog&&(0,a.jsx)("fog",{attach:"fog",args:[i.fog[0],i.fog[1]*s,i.fog[2]*s]}),i.sky&&(0,a.jsx)(et,{distance:900,sunPosition:i.sky.sunPosition,turbidity:i.sky.turbidity,rayleigh:i.sky.rayleigh,mieCoefficient:.006,mieDirectionalG:.82}),i.stars&&(0,a.jsx)(er,{radius:260,depth:80,count:5e3,factor:7,saturation:.4,fade:!0,speed:.4}),"night"===e&&(0,a.jsxs)("mesh",{position:[-70,85,-160],children:[(0,a.jsx)("sphereGeometry",{args:[7,32,16]}),(0,a.jsx)("meshBasicMaterial",{color:"#e9ecff",fog:!1,toneMapped:!1})]}),(0,a.jsx)("hemisphereLight",{args:i.hemi}),(0,a.jsx)("directionalLight",{castShadow:!0,position:r,color:i.sun.color,intensity:i.sun.intensity,"shadow-mapSize":[2048,2048],"shadow-bias":-4e-4,"shadow-normalBias":.03,"shadow-camera-left":-o,"shadow-camera-right":o,"shadow-camera-top":o,"shadow-camera-bottom":-o,"shadow-camera-near":1,"shadow-camera-far":160*n},o),(0,a.jsxs)(p.Environment,{resolution:128,frames:1,environmentIntensity:i.envIntensity,children:[(0,a.jsx)(v.Lightformer,{form:"rect",intensity:2.4,position:[0,8,4],scale:[10,5,1],color:i.sun.color}),(0,a.jsx)(v.Lightformer,{form:"rect",intensity:1.2,position:[-8,3,2],scale:[5,6,1],color:i.hemi[0]}),(0,a.jsx)(v.Lightformer,{form:"rect",intensity:1.1,position:[8,3,-2],scale:[5,6,1],color:i.hemi[0]}),(0,a.jsx)(v.Lightformer,{form:"circle",intensity:.8,position:[0,-5,0],scale:8,color:i.hemi[1]})]},e)]})}function th({apiRef:e,exportRoot:t,itemsRoot:i,editorRoot:n,groundRef:s,gizmoRef:r,registry:o,groundY:a,snap:c,onReady:h}){let p=(0,u.useThree)(e=>e.get),d=(0,l.useRef)(h);return(0,l.useLayoutEffect)(()=>{d.current=h}),(0,l.useEffect)(()=>{let l=async(e,t,i)=>{let s=[],o=e=>{e&&(s.push([e,e.visible]),e.visible=!1)};e.traverse(e=>{(e.userData.editorOnly||t(e))&&o(e)}),o(n.current),o(r.current);try{return await i()}finally{for(let[e,t]of s.reverse())e.visible=t}};return e.current={async exportGLB(e){let n=t.current;if(!n)throw Error("Scene not ready");let r=[];n.traverse(e=>{e.isPointLight&&"number"==typeof e.userData.baseIntensity&&(r.push([e,e.intensity]),e.intensity=e.userData.baseIntensity)});let o=s.current,a=o?{position:o.position.clone(),scale:o.scale.clone()}:null;if(e.ground&&o&&i.current){let e=new m.Box3;i.current.updateWorldMatrix(!0,!0),i.current.traverseVisible(t=>{t.isMesh&&!t.userData.editorOnly&&e.expandByObject(t)});let t=o.geometry.parameters.width;if(!e.isEmpty()){let i=e.getSize(new m.Vector3),n=e.getCenter(new m.Vector3),s=Math.min(t,1.15*Math.max(i.x,i.z)+4);o.position.set(n.x,o.position.y,n.z),o.scale.set(s/t,s/t,1),o.updateMatrixWorld(!0)}}try{return await l(n,t=>!e.lights&&t.isLight||!e.ground&&t===s.current,async()=>{let t=[];if("none"!==e.animations){var i;let s,r;i="separate"===e.animations,s=[],r=new Set,n.traverse(e=>{if(r.has(e)||!to(e))return;let t=e.userData.motion;if(t){let n=e.name||"Moving part",o=[(0,eN.motionClip)(t.sampler,e.uuid,t.offset,`${n}: path`)];e.traverse(i=>{let n=i.userData.exportClip;if(i===e||!n)return;r.add(i);let s=i.userData.stopClip;o.push(s?(0,eN.spliceClips)(n,s,t.sampler.spans(),t.sampler.duration,e=>{let{nodeName:t,propertyName:n}=m.PropertyBinding.parseTrackName(e),s=i.getObjectByProperty("uuid",t)?.userData.rest;return s?"position"===n?s.p.toArray():"quaternion"===n?s.q.toArray():"scale"===n?s.s.toArray():null:null},n.name):n)}),i&&o.length>1?s.push(e5(o,n)):s.push(...o);return}let n=e.userData.exportClip;n&&s.push(n)}),t=s,"together"===e.animations&&t.length>1&&(t=[e5(t,"All animations")])}let s=new eg,r=function(e){let t=new Set;e.traverseVisible(e=>{if(e.isMesh)for(let i of Array.isArray(e.material)?e.material:[e.material])for(let e of Object.values(i))e?.isTexture&&e.image&&t.add(e)});let i=document.createElement("canvas"),n=i.getContext("2d",{willReadFrequently:!0}),s=new Map,r=e=>{if(s.has(e))return s.get(e);let t=null;try{i.width=e.width,i.height=e.height,n.clearRect(0,0,e.width,e.height),n.drawImage(e,0,0);let s=new Uint32Array(n.getImageData(0,0,e.width,e.height).data.buffer),r=0x811c9dc5;for(let e=0;e<s.length;e++)r=Math.imul(r^s[e],0x1000193);t=`${e.width}x${e.height}:${r>>>0}`}catch{t=null}return s.set(e,t),t},o=new Map,a=[];for(let e of t){let t=e.image;if(!n||!t.width||!t.height)continue;let i=r(t);if(!i)continue;let s=`${i}:${e.userData.mimeType??""}:${e.flipY}`,l=o.get(s);l?l!==t&&(a.push([e,t]),e.source.data=l):o.set(s,t)}return()=>{for(let[e,t]of a)e.source.data=t}}(n);s.register(t=>({afterParse(){Object.assign(t.json.asset,{generator:"3D Models — Scene Builder",copyright:e.asset.copyright,extras:e.asset.extras})}}));let o=new Map;n.traverse(e=>{Object.keys(e.userData).length&&(o.set(e,e.userData),e.userData={})});try{return await s.parseAsync(n,{binary:!0,animations:t,onlyVisible:!0})}finally{for(let[e,t]of o)e.userData=t;r()}})}finally{for(let[e,t]of r)e.intensity=t;o&&a&&(o.position.copy(a.position),o.scale.copy(a.scale))}},async screenshot(){let{gl:e,scene:i}=p();return l(t.current??i,()=>!1,()=>new Promise((t,n)=>{let s=e.getPixelRatio(),r=e.getSize(new m.Vector2);e.setPixelRatio(Math.min(4,Math.max(s,1920/Math.max(r.x,r.y,1))));try{e.render(i,p().camera),e.domElement.toBlob(e=>e?t(e):n(Error("Capture failed")),"image/png")}finally{e.setPixelRatio(s)}}))},focus(e){let t=(e?.length?e.map(e=>o.get(e)):[i.current]).filter(e=>!!e),n=p().controls;if(!t.length||!n)return;let s=new m.Box3;for(let e of t)e.updateWorldMatrix(!0,!0),e.traverseVisible(e=>{e.isMesh&&!e.userData.editorOnly&&s.expandByObject(e)});s.isEmpty()&&s.setFromCenterAndSize(t[0].getWorldPosition(new m.Vector3),new m.Vector3(1,1,1));let r=s.getCenter(new m.Vector3),a=Math.max(s.getSize(new m.Vector3).length()/2,.5),l=p().camera,c=l.position.clone().sub(n.target).normalize(),h=a/Math.sin(m.MathUtils.degToRad(l.fov)/2)*(e?.length?1.25:.85);n.target.copy(r),l.position.copy(r).addScaledVector(c,h),n.update()},getCamera(){let e=p().controls;return{position:eZ(p().camera.position),target:e?eZ(e.target):[0,0,0]}},setCamera(e){let t=p().controls,i=p().camera;i.position.set(...e.position),t?(t.target.set(...e.target),t.update()):i.lookAt(...e.target)},pointAt(e,t){let{gl:n,raycaster:s}=p(),r=n.domElement.getBoundingClientRect(),o=new m.Vector2((e-r.left)/r.width*2-1,-(2*((t-r.top)/r.height))+1),l=tr(s,p().camera,o,i.current,a,c);return l?[eY(l.x),eY(l.y),eY(l.z)]:null},dropY(e){let t=o.get(e);if(!t)return null;t.updateWorldMatrix(!0,!0);let n=new m.Box3;if(t.traverseVisible(e=>{e.isMesh&&!e.userData.editorOnly&&n.expandByObject(e)}),n.isEmpty())return null;let s=n.getCenter(new m.Vector3),r=new m.Raycaster(new m.Vector3(s.x,n.min.y+.05,s.z),new m.Vector3(0,-1,0)),l=a;for(let e of i.current?r.intersectObjects(i.current.children,!0):[])if(!(!e.object.isMesh||e.object.userData.editorOnly||ta(e.object,t))&&to(e.object)){l=Math.max(l,e.point.y);break}return eY(t.position.y+(l-n.min.y))}},d.current?.(),()=>{e.current=null}},[e,t,i,n,s,r,o,a,c,p]),null}e.s(["default",0,function({doc:e,parts:t,clips:i,selectedIds:n,mode:s,space:r,paused:o,snap:h,showGrid:u,placing:p,apiRef:d,onSelect:f,onTransform:g,onPlace:y,onClips:w,onReady:v}){let b=(0,l.useRef)(null),M=(0,l.useRef)(null),S=(0,l.useRef)(null),E=(0,l.useRef)(null),A=(0,l.useRef)(null),[T,C]=(0,l.useState)(()=>new Map),P=(0,l.useRef)(0),L=(0,l.useRef)(p),z=(0,l.useRef)(o);(0,l.useLayoutEffect)(()=>{L.current=p,z.current=o});let I=(0,l.useCallback)((e,t)=>{C(i=>{if(t?i.get(e)===t:!i.has(e))return i;let n=new Map(i);return t?n.set(e,t):n.delete(e),n})},[]),R=(0,l.useCallback)((e,t)=>{if(L.current||t.delta>4||performance.now()-P.current<250)return;t.stopPropagation();let i=t.shiftKey||t.ctrlKey||t.metaKey;if(e.locked){i||f(null,!1);return}f(e.id,i)},[f]),j=(0,l.useCallback)((e,t)=>{L.current||e.locked||(t.stopPropagation(),d.current?.focus([e.id]))},[d]),V=(0,l.useCallback)((e,t)=>{P.current=performance.now(),y(e,t)},[y]),_=(0,l.useMemo)(()=>new Set(n),[n]),U=(0,l.useMemo)(()=>e.items.filter(e=>_.has(e.id)),[e.items,_]),D=(0,l.useRef)(0),O=(0,l.useMemo)(()=>U.map(e=>({item:e,object:T.get(e.id)})).filter(e=>!!e.object),[U,T]),B=(0,l.useMemo)(()=>O.filter(e=>!e.item.locked),[O]),k=(0,l.useMemo)(()=>B.map(e=>e.object),[B]),F=eG.GROUNDS[e.ground.kind],N=(0,l.useCallback)(()=>{P.current=performance.now(),g(B.map(({item:e,object:t})=>({id:e.id,position:eZ(t.position),rotation:function(e){let t=e.userData.motion;if(!t)return eZ(e.rotation);let i=new m.Quaternion;return t.sampler.pose(0,new m.Vector3,i,new m.Quaternion),eZ(new m.Euler().setFromQuaternion(i.invert().multiply(e.quaternion)))}(t),scale:eZ(t.scale)})))},[B,g]),Q=(0,l.useCallback)(()=>{P.current=performance.now()},[]);return(0,a.jsx)(c.Canvas,{shadows:!0,dpr:[1,2],gl:{antialias:!0,powerPreference:"high-performance"},camera:{fov:45,position:[0,16,34],near:.1,far:2e3},className:"touch-none",onPointerMissed:e=>{!("click"!==e.type||L.current||performance.now()-P.current<250)&&(e.shiftKey||e.ctrlKey||e.metaKey||f(null,!1))},children:(0,a.jsx)(eK.Provider,{value:z,children:(0,a.jsxs)(e$.Provider,{value:D,children:[(0,a.jsx)(e0,{clockRef:D}),(0,a.jsx)(tc,{env:e.environment,groundSize:e.ground.size}),(0,a.jsxs)("group",{ref:b,name:e.name||"Scene",children:[(0,a.jsx)("group",{ref:M,name:"Items",children:e.items.map(e=>(0,a.jsx)(te,{item:e,part:e.part?t.get(e.part):void 0,clips:i,selected:_.has(e.id),register:I,onClick:R,onDoubleClick:j,onClips:w},e.id))}),F.color&&(0,a.jsxs)("mesh",{ref:E,name:"Ground","rotation-x":-Math.PI/2,"position-y":e.ground.y,receiveShadow:!0,children:[(0,a.jsx)("planeGeometry",{args:[e.ground.size,e.ground.size]}),(0,a.jsx)("meshStandardMaterial",{color:F.color,roughness:1,metalness:0})]})]}),(0,a.jsxs)("group",{ref:S,children:[u&&(0,a.jsx)(x,{position:[0,e.ground.y+.004,0],cellSize:h||1,sectionSize:4*(h||1),cellThickness:.6,sectionThickness:1,cellColor:"#4c4870",sectionColor:"#7d6bc9",fadeDistance:55,fadeStrength:1.6,infiniteGrid:!0}),O.map(({item:e,object:t})=>(0,a.jsx)(tt,{object:t},e.id)),U.map(e=>e.motion&&(0,a.jsx)(e3,{item:e},e.id))]}),!p&&1===B.length&&(0,a.jsx)(ep,{ref:A,object:B[0].object,mode:s,space:r,size:.85,translationSnap:h||null,rotationSnap:h?m.MathUtils.degToRad(15):null,scaleSnap:h?.1:null,onMouseDown:Q,onMouseUp:N}),!p&&B.length>1&&(0,a.jsx)(ti,{objects:k,mode:s,snap:h,gizmoRef:A,onStart:Q,onCommit:N}),p&&(0,a.jsx)(tl,{placing:p,snap:h,itemsRoot:M,groundY:e.ground.y,onPlace:V}),(0,a.jsx)(W.OrbitControls,{makeDefault:!0,enableDamping:!0,dampingFactor:.1,maxPolarAngle:Math.PI/2-.03,minDistance:1,maxDistance:400}),(0,a.jsx)(th,{apiRef:d,exportRoot:b,itemsRoot:M,editorRoot:S,groundRef:E,gizmoRef:A,registry:T,groundY:e.ground.y,snap:h,onReady:v})]})})})}],75603)},98501,function(e){e.n(e.i(75603))}]);