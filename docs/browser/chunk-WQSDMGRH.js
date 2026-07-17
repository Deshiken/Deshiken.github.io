import{$ as gi,A as ie,B as ci,C as f,D as re,E as De,F as Qe,G as O,H as g,I as ne,J as Ae,K as Be,L as ui,M as Ke,N as fi,O as pi,P as H,Q as gt,R as mi,S as y,T as Ft,U as vt,V as qe,W as _i,X as j,Y as $e,Z as V,_ as Ve,a as k,aa as q,b as je,ba as Xe,c as Re,ca as vi,d as ft,da as Le,e as ai,ea as St,f as ni,fa as Si,g as E,ga as Je,h as ue,ha as Nt,i as Ne,ia as et,j as wt,ja as b,k as pt,ka as fe,l as xe,la as tt,m as Ot,ma as ze,n as Pe,na as we,o as mt,p as oi,q as li,r as ye,s as _t,t as be,u as hi,v as Ue,w as x,x as di,y as Me,z as P}from"./chunk-EQAQQWIY.js";import{a as Ei}from"./chunk-J52YGQBZ.js";import{a as Te,b as Lt,c as si,f as ae}from"./chunk-EQDQRRRY.js";var Di=Object.defineProperty,Li=(a,t,e)=>t in a?Di(a,t,{enumerable:!0,configurable:!0,writable:!0,value:e}):a[t]=e,Oe=(a,t,e)=>(Li(a,typeof t!="symbol"?t+"":t,e),e),ri=(a,t,e)=>{if(!t.has(a))throw TypeError("Cannot "+e)},I=(a,t,e)=>(ri(a,t,"read from private field"),e?e.call(a):t.get(a)),$=(a,t,e)=>{if(t.has(a))throw TypeError("Cannot add the same private member more than once");t instanceof WeakSet?t.add(a):t.set(a,e)},se=(a,t,e,i)=>(ri(a,t,"write to private field"),i?i.call(a,e):t.set(a,e),e),it=(a,t,e,i)=>({set _(r){se(a,t,r,e)},get _(){return I(a,t,i)}}),wi=(a,t,e)=>(ri(a,t,"access private method"),e),dt=class{constructor(t){if(this._keys=[],this._isDirty=!0,this._areLightsDirty=!0,this._areLightsDisposed=!1,this._areAttributesDirty=!0,this._areTexturesDirty=!0,this._areFresnelDirty=!0,this._areMiscDirty=!0,this._arePrePassDirty=!0,this._areImageProcessingDirty=!0,this._normals=!1,this._uvs=!1,this._needNormals=!1,this._needUVs=!1,this._externalProperties=t,t)for(let e in t)Object.prototype.hasOwnProperty.call(t,e)&&this._setDefaultValue(e)}get isDirty(){return this._isDirty}markAsProcessed(){this._isDirty=!1,this._areAttributesDirty=!1,this._areTexturesDirty=!1,this._areFresnelDirty=!1,this._areLightsDirty=!1,this._areLightsDisposed=!1,this._areMiscDirty=!1,this._arePrePassDirty=!1,this._areImageProcessingDirty=!1}markAsUnprocessed(){this._isDirty=!0}markAllAsDirty(){this._areTexturesDirty=!0,this._areAttributesDirty=!0,this._areLightsDirty=!0,this._areFresnelDirty=!0,this._areMiscDirty=!0,this._areImageProcessingDirty=!0,this._isDirty=!0}markAsImageProcessingDirty(){this._areImageProcessingDirty=!0,this._isDirty=!0}markAsLightDirty(t=!1){this._areLightsDirty=!0,this._areLightsDisposed=this._areLightsDisposed||t,this._isDirty=!0}markAsAttributesDirty(){this._areAttributesDirty=!0,this._isDirty=!0}markAsTexturesDirty(){this._areTexturesDirty=!0,this._isDirty=!0}markAsFresnelDirty(){this._areFresnelDirty=!0,this._isDirty=!0}markAsMiscDirty(){this._areMiscDirty=!0,this._isDirty=!0}markAsPrePassDirty(){this._arePrePassDirty=!0,this._isDirty=!0}rebuild(){this._keys.length=0;for(let t of Object.keys(this))t[0]!=="_"&&this._keys.push(t);if(this._externalProperties)for(let t in this._externalProperties)this._keys.indexOf(t)===-1&&this._keys.push(t)}isEqual(t){if(this._keys.length!==t._keys.length)return!1;for(let e=0;e<this._keys.length;e++){let i=this._keys[e];if(this[i]!==t[i])return!1}return!0}cloneTo(t){this._keys.length!==t._keys.length&&(t._keys=this._keys.slice(0));for(let e=0;e<this._keys.length;e++){let i=this._keys[e];t[i]=this[i]}}reset(){this._keys.forEach(t=>this._setDefaultValue(t))}_setDefaultValue(t){var e,i,r,s,n;let o=(r=(i=(e=this._externalProperties)===null||e===void 0?void 0:e[t])===null||i===void 0?void 0:i.type)!==null&&r!==void 0?r:typeof this[t],d=(n=(s=this._externalProperties)===null||s===void 0?void 0:s[t])===null||n===void 0?void 0:n.default;switch(o){case"number":this[t]=d??0;break;case"string":this[t]=d??"";break;default:this[t]=d??!1;break}}toString(){let t="";for(let e=0;e<this._keys.length;e++){let i=this._keys[e],r=this[i];switch(typeof r){case"number":case"string":t+="#define "+i+" "+r+`
`;break;default:r&&(t+="#define "+i+`
`);break}}return t}};function Oi(a){return new V(a,!0,{preserveDrawingBuffer:!0,stencil:!0})}var ce=class{getDescription(){return""}apply(t,e){return!0}constructor(t=0){this.priority=t}},at=class extends ce{getDescription(){return"Reducing render target texture size to "+this.maximumSize}constructor(t=0,e=1024,i=.5){super(t),this.priority=t,this.maximumSize=e,this.step=i}apply(t,e){let i=!0;for(let r=0;r<t.textures.length;r++){let s=t.textures[r];if(!s.canRescale||s.getContext)continue;let n=s.getSize();Math.max(n.width,n.height)>this.maximumSize&&(s.scale(this.step),i=!1)}return i}},At=class extends ce{getDescription(){return"Setting hardware scaling level to "+this._currentScale}constructor(t=0,e=2,i=.25){super(t),this.priority=t,this.maximumScale=e,this.step=i,this._currentScale=-1,this._directionOffset=1}apply(t,e){return this._currentScale===-1&&(this._currentScale=t.getEngine().getHardwareScalingLevel(),this._currentScale>this.maximumScale&&(this._directionOffset=-1)),this._currentScale+=this._directionOffset*this.step,t.getEngine().setHardwareScalingLevel(this._currentScale),this._directionOffset===1?this._currentScale>=this.maximumScale:this._currentScale<=this.maximumScale}},nt=class extends ce{getDescription(){return"Turning shadows on/off"}apply(t,e){return t.shadowsEnabled=e.isInImprovementMode,!0}},ot=class extends ce{getDescription(){return"Turning post-processes on/off"}apply(t,e){return t.postProcessesEnabled=e.isInImprovementMode,!0}},lt=class extends ce{getDescription(){return"Turning lens flares on/off"}apply(t,e){return t.lensFlaresEnabled=e.isInImprovementMode,!0}},Vt=class extends ce{getDescription(){return this.onGetDescription?this.onGetDescription():"Running user defined callback"}apply(t,e){return this.onApply?this.onApply(t,e):!0}},ht=class extends ce{getDescription(){return"Turning particles on/off"}apply(t,e){return t.particlesEnabled=e.isInImprovementMode,!0}},Ct=class extends ce{getDescription(){return"Turning render targets off"}apply(t,e){return t.renderTargetsEnabled=e.isInImprovementMode,!0}},yt=(()=>{class a extends ce{constructor(){super(...arguments),this._canBeMerged=e=>{if(!(e instanceof ze))return!1;let i=e;return!(i.isDisposed()||!i.isVisible||!i.isEnabled()||i.instances.length>0||i.skeleton||i.hasLODLevels||i.getTotalVertices()===0)}}static get UpdateSelectionTree(){return a._UpdateSelectionTree}static set UpdateSelectionTree(e){a._UpdateSelectionTree=e}getDescription(){return"Merging similar meshes together"}apply(e,i,r){let s=e.meshes.slice(0),n=s.length;for(let d=0;d<n;d++){let l=new Array,h=s[d];if(this._canBeMerged(h)){l.push(h);for(let c=d+1;c<n;c++){let u=s[c];this._canBeMerged(u)&&u.material===h.material&&u.checkCollisions===h.checkCollisions&&(l.push(u),n--,s.splice(c,1),c--)}l.length<2||ze.MergeMeshes(l,void 0,!0)}}let o=e;return o.createOrUpdateSelectionOctree&&(r!=null?r&&o.createOrUpdateSelectionOctree():a.UpdateSelectionTree&&o.createOrUpdateSelectionOctree()),!0}}return a._UpdateSelectionTree=!1,a})(),ct=class a{constructor(t=60,e=2e3){this.targetFrameRate=t,this.trackerDuration=e,this.optimizations=new Array}addOptimization(t){return this.optimizations.push(t),this}addCustomOptimization(t,e,i=0){let r=new Vt(i);return r.onApply=t,r.onGetDescription=e,this.optimizations.push(r),this}static LowDegradationAllowed(t){let e=new a(t),i=0;return e.addOptimization(new yt(i)),e.addOptimization(new nt(i)),e.addOptimization(new lt(i)),i++,e.addOptimization(new ot(i)),e.addOptimization(new ht(i)),i++,e.addOptimization(new at(i,1024)),e}static ModerateDegradationAllowed(t){let e=new a(t),i=0;return e.addOptimization(new yt(i)),e.addOptimization(new nt(i)),e.addOptimization(new lt(i)),i++,e.addOptimization(new ot(i)),e.addOptimization(new ht(i)),i++,e.addOptimization(new at(i,512)),i++,e.addOptimization(new Ct(i)),i++,e.addOptimization(new At(i,2)),e}static HighDegradationAllowed(t){let e=new a(t),i=0;return e.addOptimization(new yt(i)),e.addOptimization(new nt(i)),e.addOptimization(new lt(i)),i++,e.addOptimization(new ot(i)),e.addOptimization(new ht(i)),i++,e.addOptimization(new at(i,256)),i++,e.addOptimization(new Ct(i)),i++,e.addOptimization(new At(i,4)),e}},Xt=class a{get isInImprovementMode(){return this._improvementMode}set isInImprovementMode(t){this._improvementMode=t}get currentPriorityLevel(){return this._currentPriorityLevel}get currentFrameRate(){return this._currentFrameRate}get targetFrameRate(){return this._targetFrameRate}set targetFrameRate(t){this._targetFrameRate=t}get trackerDuration(){return this._trackerDuration}set trackerDuration(t){this._trackerDuration=t}get optimizations(){return this._options.optimizations}constructor(t,e,i=!0,r=!1){if(this._isRunning=!1,this._currentPriorityLevel=0,this._targetFrameRate=60,this._trackerDuration=2e3,this._currentFrameRate=0,this._improvementMode=!1,this.onSuccessObservable=new k,this.onNewOptimizationAppliedObservable=new k,this.onFailureObservable=new k,e?this._options=e:this._options=new ct,this._options.targetFrameRate&&(this._targetFrameRate=this._options.targetFrameRate),this._options.trackerDuration&&(this._trackerDuration=this._options.trackerDuration),i){let s=0;for(let n of this._options.optimizations)n.priority=s++}this._improvementMode=r,this._scene=t||ft.LastCreatedScene,this._sceneDisposeObserver=this._scene.onDisposeObservable.add(()=>{this._sceneDisposeObserver=null,this.dispose()})}stop(){this._isRunning=!1}reset(){this._currentPriorityLevel=0}start(){this._isRunning||(this._isRunning=!0,this._scene.executeWhenReady(()=>{setTimeout(()=>{this._checkCurrentState()},this._trackerDuration)}))}_checkCurrentState(){if(!this._isRunning)return;let t=this._scene,e=this._options;if(this._currentFrameRate=Math.round(t.getEngine().getFps()),this._improvementMode&&this._currentFrameRate<=this._targetFrameRate||!this._improvementMode&&this._currentFrameRate>=this._targetFrameRate){this._isRunning=!1,this.onSuccessObservable.notifyObservers(this);return}let i=!0,r=!0;for(let s=0;s<e.optimizations.length;s++){let n=e.optimizations[s];n.priority===this._currentPriorityLevel&&(r=!1,i=i&&n.apply(t,this),this.onNewOptimizationAppliedObservable.notifyObservers(n))}if(r){this._isRunning=!1,this.onFailureObservable.notifyObservers(this);return}i&&this._currentPriorityLevel++,t.executeWhenReady(()=>{setTimeout(()=>{this._checkCurrentState()},this._trackerDuration)})}dispose(){this.stop(),this.onSuccessObservable.clear(),this.onFailureObservable.clear(),this.onNewOptimizationAppliedObservable.clear(),this._sceneDisposeObserver&&this._scene.onDisposeObservable.remove(this._sceneDisposeObserver)}static OptimizeAsync(t,e,i,r){let s=new a(t,e||ct.ModerateDegradationAllowed(),!1);return i&&s.onSuccessObservable.add(()=>{i()}),r&&s.onFailureObservable.add(()=>{r()}),s.start(),s}};function Fi(a){let{engine:t}=a,e=new $e(t);e.clearColor=new De(0,0,0,0),e.pointerMovePredicate=()=>!1,e.pointerDownPredicate=()=>!1,e.pointerUpPredicate=()=>!1,e.clearCachedVertexData(),e.themeData={};let i=ct.LowDegradationAllowed();return i.optimizations=i.optimizations.splice(1),i.targetFrameRate=60,Xt.OptimizeAsync(e,i),e}var ve=class a extends q{constructor(t,e,i,r=!0){super(t,e,i,r),this._tmpUpVector=x.Zero(),this._tmpTargetVector=x.Zero(),this.cameraDirection=new x(0,0,0),this.cameraRotation=new Ue(0,0),this.ignoreParentScaling=!1,this.updateUpVectorFromRotation=!1,this._tmpQuaternion=new Me,this.rotation=new x(0,0,0),this.speed=2,this.noRotationConstraint=!1,this.invertRotation=!1,this.inverseRotationSpeed=.2,this.lockedTarget=null,this._currentTarget=x.Zero(),this._initialFocalDistance=1,this._viewMatrix=P.Zero(),this._camMatrix=P.Zero(),this._cameraTransformMatrix=P.Zero(),this._cameraRotationMatrix=P.Zero(),this._referencePoint=new x(0,0,1),this._transformedReferencePoint=x.Zero(),this._defaultUp=x.Up(),this._cachedRotationZ=0,this._cachedQuaternionRotationZ=0}getFrontPosition(t){this.getWorldMatrix();let e=this.getTarget().subtract(this.position);return e.normalize(),e.scaleInPlace(t),this.globalPosition.add(e)}_getLockedTargetPosition(){if(!this.lockedTarget)return null;if(this.lockedTarget.absolutePosition){let t=this.lockedTarget;t.computeWorldMatrix().getTranslationToRef(t.absolutePosition)}return this.lockedTarget.absolutePosition||this.lockedTarget}storeState(){return this._storedPosition=this.position.clone(),this._storedRotation=this.rotation.clone(),this.rotationQuaternion&&(this._storedRotationQuaternion=this.rotationQuaternion.clone()),super.storeState()}_restoreStateValues(){return super._restoreStateValues()?(this.position=this._storedPosition.clone(),this.rotation=this._storedRotation.clone(),this.rotationQuaternion&&(this.rotationQuaternion=this._storedRotationQuaternion.clone()),this.cameraDirection.copyFromFloats(0,0,0),this.cameraRotation.copyFromFloats(0,0),!0):!1}_initCache(){super._initCache(),this._cache.lockedTarget=new x(Number.MAX_VALUE,Number.MAX_VALUE,Number.MAX_VALUE),this._cache.rotation=new x(Number.MAX_VALUE,Number.MAX_VALUE,Number.MAX_VALUE),this._cache.rotationQuaternion=new Me(Number.MAX_VALUE,Number.MAX_VALUE,Number.MAX_VALUE,Number.MAX_VALUE)}_updateCache(t){t||super._updateCache();let e=this._getLockedTargetPosition();e?this._cache.lockedTarget?this._cache.lockedTarget.copyFrom(e):this._cache.lockedTarget=e.clone():this._cache.lockedTarget=null,this._cache.rotation.copyFrom(this.rotation),this.rotationQuaternion&&this._cache.rotationQuaternion.copyFrom(this.rotationQuaternion)}_isSynchronizedViewMatrix(){if(!super._isSynchronizedViewMatrix())return!1;let t=this._getLockedTargetPosition();return(this._cache.lockedTarget?this._cache.lockedTarget.equals(t):!t)&&(this.rotationQuaternion?this.rotationQuaternion.equals(this._cache.rotationQuaternion):this._cache.rotation.equals(this.rotation))}_computeLocalCameraSpeed(){let t=this.getEngine();return this.speed*Math.sqrt(t.getDeltaTime()/(t.getFps()*100))}setTarget(t){this.upVector.normalize(),this._initialFocalDistance=t.subtract(this.position).length(),this.position.z===t.z&&(this.position.z+=be),this._referencePoint.normalize().scaleInPlace(this._initialFocalDistance),P.LookAtLHToRef(this.position,t,this._defaultUp,this._camMatrix),this._camMatrix.invert(),this.rotation.x=Math.atan(this._camMatrix.m[6]/this._camMatrix.m[10]);let e=t.subtract(this.position);e.x>=0?this.rotation.y=-Math.atan(e.z/e.x)+Math.PI/2:this.rotation.y=-Math.atan(e.z/e.x)-Math.PI/2,this.rotation.z=0,isNaN(this.rotation.x)&&(this.rotation.x=0),isNaN(this.rotation.y)&&(this.rotation.y=0),isNaN(this.rotation.z)&&(this.rotation.z=0),this.rotationQuaternion&&Me.RotationYawPitchRollToRef(this.rotation.y,this.rotation.x,this.rotation.z,this.rotationQuaternion)}get target(){return this.getTarget()}set target(t){this.setTarget(t)}getTarget(){return this._currentTarget}_decideIfNeedsToMove(){return Math.abs(this.cameraDirection.x)>0||Math.abs(this.cameraDirection.y)>0||Math.abs(this.cameraDirection.z)>0}_updatePosition(){if(this.parent){this.parent.getWorldMatrix().invertToRef(ie.Matrix[0]),x.TransformNormalToRef(this.cameraDirection,ie.Matrix[0],ie.Vector3[0]),this.position.addInPlace(ie.Vector3[0]);return}this.position.addInPlace(this.cameraDirection)}_checkInputs(){let t=this.invertRotation?-this.inverseRotationSpeed:1,e=this._decideIfNeedsToMove(),i=Math.abs(this.cameraRotation.x)>0||Math.abs(this.cameraRotation.y)>0;e&&this._updatePosition(),i&&(this.rotationQuaternion&&this.rotationQuaternion.toEulerAnglesToRef(this.rotation),this.rotation.x+=this.cameraRotation.x*t,this.rotation.y+=this.cameraRotation.y*t,this.noRotationConstraint||(this.rotation.x>1.570796&&(this.rotation.x=1.570796),this.rotation.x<-1.570796&&(this.rotation.x=-1.570796)),this.rotationQuaternion&&this.rotation.lengthSquared()&&Me.RotationYawPitchRollToRef(this.rotation.y,this.rotation.x,this.rotation.z,this.rotationQuaternion)),e&&(Math.abs(this.cameraDirection.x)<this.speed*be&&(this.cameraDirection.x=0),Math.abs(this.cameraDirection.y)<this.speed*be&&(this.cameraDirection.y=0),Math.abs(this.cameraDirection.z)<this.speed*be&&(this.cameraDirection.z=0),this.cameraDirection.scaleInPlace(this.inertia)),i&&(Math.abs(this.cameraRotation.x)<this.speed*be&&(this.cameraRotation.x=0),Math.abs(this.cameraRotation.y)<this.speed*be&&(this.cameraRotation.y=0),this.cameraRotation.scaleInPlace(this.inertia)),super._checkInputs()}_updateCameraRotationMatrix(){this.rotationQuaternion?this.rotationQuaternion.toRotationMatrix(this._cameraRotationMatrix):P.RotationYawPitchRollToRef(this.rotation.y,this.rotation.x,this.rotation.z,this._cameraRotationMatrix)}_rotateUpVectorWithCameraRotationMatrix(){return x.TransformNormalToRef(this._defaultUp,this._cameraRotationMatrix,this.upVector),this}_getViewMatrix(){return this.lockedTarget&&this.setTarget(this._getLockedTargetPosition()),this._updateCameraRotationMatrix(),this.rotationQuaternion&&this._cachedQuaternionRotationZ!=this.rotationQuaternion.z?(this._rotateUpVectorWithCameraRotationMatrix(),this._cachedQuaternionRotationZ=this.rotationQuaternion.z):this._cachedRotationZ!==this.rotation.z&&(this._rotateUpVectorWithCameraRotationMatrix(),this._cachedRotationZ=this.rotation.z),x.TransformCoordinatesToRef(this._referencePoint,this._cameraRotationMatrix,this._transformedReferencePoint),this.position.addToRef(this._transformedReferencePoint,this._currentTarget),this.updateUpVectorFromRotation&&(this.rotationQuaternion?St.Y.rotateByQuaternionToRef(this.rotationQuaternion,this.upVector):(Me.FromEulerVectorToRef(this.rotation,this._tmpQuaternion),St.Y.rotateByQuaternionToRef(this._tmpQuaternion,this.upVector))),this._computeViewMatrix(this.position,this._currentTarget,this.upVector),this._viewMatrix}_computeViewMatrix(t,e,i){if(this.ignoreParentScaling){if(this.parent){let r=this.parent.getWorldMatrix();x.TransformCoordinatesToRef(t,r,this._globalPosition),x.TransformCoordinatesToRef(e,r,this._tmpTargetVector),x.TransformNormalToRef(i,r,this._tmpUpVector),this._markSyncedWithParent()}else this._globalPosition.copyFrom(t),this._tmpTargetVector.copyFrom(e),this._tmpUpVector.copyFrom(i);this.getScene().useRightHandedSystem?P.LookAtRHToRef(this._globalPosition,this._tmpTargetVector,this._tmpUpVector,this._viewMatrix):P.LookAtLHToRef(this._globalPosition,this._tmpTargetVector,this._tmpUpVector,this._viewMatrix);return}if(this.getScene().useRightHandedSystem?P.LookAtRHToRef(t,e,i,this._viewMatrix):P.LookAtLHToRef(t,e,i,this._viewMatrix),this.parent){let r=this.parent.getWorldMatrix();this._viewMatrix.invert(),this._viewMatrix.multiplyToRef(r,this._viewMatrix),this._viewMatrix.getTranslationToRef(this._globalPosition),this._viewMatrix.invert(),this._markSyncedWithParent()}else this._globalPosition.copyFrom(t)}createRigCamera(t,e){if(this.cameraRigMode!==q.RIG_MODE_NONE){let i=new a(t,this.position.clone(),this.getScene());return i.isRigCamera=!0,i.rigParent=this,(this.cameraRigMode===q.RIG_MODE_VR||this.cameraRigMode===q.RIG_MODE_WEBVR)&&(this.rotationQuaternion||(this.rotationQuaternion=new Me),i._cameraRigParams={},i.rotationQuaternion=new Me),i.mode=this.mode,i.orthoLeft=this.orthoLeft,i.orthoRight=this.orthoRight,i.orthoTop=this.orthoTop,i.orthoBottom=this.orthoBottom,i}return null}_updateRigCameras(){let t=this._rigCameras[0],e=this._rigCameras[1];switch(this.computeWorldMatrix(),this.cameraRigMode){case q.RIG_MODE_STEREOSCOPIC_ANAGLYPH:case q.RIG_MODE_STEREOSCOPIC_SIDEBYSIDE_PARALLEL:case q.RIG_MODE_STEREOSCOPIC_SIDEBYSIDE_CROSSEYED:case q.RIG_MODE_STEREOSCOPIC_OVERUNDER:case q.RIG_MODE_STEREOSCOPIC_INTERLACED:{let i=this.cameraRigMode===q.RIG_MODE_STEREOSCOPIC_SIDEBYSIDE_CROSSEYED?1:-1,r=this.cameraRigMode===q.RIG_MODE_STEREOSCOPIC_SIDEBYSIDE_CROSSEYED?-1:1;this._getRigCamPositionAndTarget(this._cameraRigParams.stereoHalfAngle*i,t),this._getRigCamPositionAndTarget(this._cameraRigParams.stereoHalfAngle*r,e);break}case q.RIG_MODE_VR:t.rotationQuaternion?(t.rotationQuaternion.copyFrom(this.rotationQuaternion),e.rotationQuaternion.copyFrom(this.rotationQuaternion)):(t.rotation.copyFrom(this.rotation),e.rotation.copyFrom(this.rotation)),t.position.copyFrom(this.position),e.position.copyFrom(this.position);break}super._updateRigCameras()}_getRigCamPositionAndTarget(t,e){this.getTarget().subtractToRef(this.position,a._TargetFocalPoint),a._TargetFocalPoint.normalize().scaleInPlace(this._initialFocalDistance);let i=a._TargetFocalPoint.addInPlace(this.position);P.TranslationToRef(-i.x,-i.y,-i.z,a._TargetTransformMatrix),a._TargetTransformMatrix.multiplyToRef(P.RotationAxis(e.upVector,t),a._RigCamTransformMatrix),P.TranslationToRef(i.x,i.y,i.z,a._TargetTransformMatrix),a._RigCamTransformMatrix.multiplyToRef(a._TargetTransformMatrix,a._RigCamTransformMatrix),x.TransformCoordinatesToRef(this.position,a._RigCamTransformMatrix,e.position),e.setTarget(i)}getClassName(){return"TargetCamera"}};ve._RigCamTransformMatrix=new P;ve._TargetTransformMatrix=new P;ve._TargetFocalPoint=new x;f([Ke()],ve.prototype,"rotation",void 0);f([g()],ve.prototype,"speed",void 0);f([fi("lockedTargetId")],ve.prototype,"lockedTarget",void 0);function Ni(a){let{scene:t}=a,e,i=36.5;return e=new ve("TargetCamera1",new x(0,i,0),t),e.fov=.25,e.minZ=5,e.maxZ=i+1,e.setTarget(x.Zero()),e}var w=class a extends Ve{get range(){return this._range}set range(t){this._range=t,this._inverseSquaredRange=1/(this.range*this.range)}get intensityMode(){return this._intensityMode}set intensityMode(t){this._intensityMode=t,this._computePhotometricScale()}get radius(){return this._radius}set radius(t){this._radius=t,this._computePhotometricScale()}get shadowEnabled(){return this._shadowEnabled}set shadowEnabled(t){this._shadowEnabled!==t&&(this._shadowEnabled=t,this._markMeshesAsLightDirty())}get includedOnlyMeshes(){return this._includedOnlyMeshes}set includedOnlyMeshes(t){this._includedOnlyMeshes=t,this._hookArrayForIncludedOnly(t)}get excludedMeshes(){return this._excludedMeshes}set excludedMeshes(t){this._excludedMeshes=t,this._hookArrayForExcluded(t)}get excludeWithLayerMask(){return this._excludeWithLayerMask}set excludeWithLayerMask(t){this._excludeWithLayerMask=t,this._resyncMeshes()}get includeOnlyWithLayerMask(){return this._includeOnlyWithLayerMask}set includeOnlyWithLayerMask(t){this._includeOnlyWithLayerMask=t,this._resyncMeshes()}get lightmapMode(){return this._lightmapMode}set lightmapMode(t){this._lightmapMode!==t&&(this._lightmapMode=t,this._markMeshesAsLightDirty())}constructor(t,e){super(t,e),this.diffuse=new re(1,1,1),this.specular=new re(1,1,1),this.falloffType=a.FALLOFF_DEFAULT,this.intensity=1,this._range=Number.MAX_VALUE,this._inverseSquaredRange=0,this._photometricScale=1,this._intensityMode=a.INTENSITYMODE_AUTOMATIC,this._radius=1e-5,this.renderPriority=0,this._shadowEnabled=!0,this._excludeWithLayerMask=0,this._includeOnlyWithLayerMask=0,this._lightmapMode=0,this._shadowGenerators=null,this._excludedMeshesIds=new Array,this._includedOnlyMeshesIds=new Array,this._isLight=!0,this.getScene().addLight(this),this._uniformBuffer=new mi(this.getScene().getEngine(),void 0,void 0,t),this._buildUniformLayout(),this.includedOnlyMeshes=new Array,this.excludedMeshes=new Array,this._resyncMeshes()}transferTexturesToEffect(t,e){return this}_bindLight(t,e,i,r,s=!0){var n;let o=t.toString(),d=!1;if(this._uniformBuffer.bindToEffect(i,"Light"+o),this._renderId!==e.getRenderId()||this._lastUseSpecular!==r||!this._uniformBuffer.useUbo){this._renderId=e.getRenderId(),this._lastUseSpecular=r;let l=this.getScaledIntensity();this.transferToEffect(i,o),this.diffuse.scaleToRef(l,Qe.Color3[0]),this._uniformBuffer.updateColor4("vLightDiffuse",Qe.Color3[0],this.range,o),r&&(this.specular.scaleToRef(l,Qe.Color3[1]),this._uniformBuffer.updateColor4("vLightSpecular",Qe.Color3[1],this.radius,o)),d=!0}if(this.transferTexturesToEffect(i,o),e.shadowsEnabled&&this.shadowEnabled&&s){let l=(n=this.getShadowGenerator(e.activeCamera))!==null&&n!==void 0?n:this.getShadowGenerator();l&&(l.bindShadowLight(o,i),d=!0)}d?this._uniformBuffer.update():this._uniformBuffer.bindUniformBuffer()}getClassName(){return"Light"}toString(t){let e="Name: "+this.name;if(e+=", type: "+["Point","Directional","Spot","Hemispheric"][this.getTypeID()],this.animations)for(let i=0;i<this.animations.length;i++)e+=", animation[0]: "+this.animations[i].toString(t);return e}_syncParentEnabledState(){super._syncParentEnabledState(),this.isDisposed()||this._resyncMeshes()}setEnabled(t){super.setEnabled(t),this._resyncMeshes()}getShadowGenerator(t=null){var e;return this._shadowGenerators===null?null:(e=this._shadowGenerators.get(t))!==null&&e!==void 0?e:null}getShadowGenerators(){return this._shadowGenerators}getAbsolutePosition(){return x.Zero()}canAffectMesh(t){return t?!(this.includedOnlyMeshes&&this.includedOnlyMeshes.length>0&&this.includedOnlyMeshes.indexOf(t)===-1||this.excludedMeshes&&this.excludedMeshes.length>0&&this.excludedMeshes.indexOf(t)!==-1||this.includeOnlyWithLayerMask!==0&&!(this.includeOnlyWithLayerMask&t.layerMask)||this.excludeWithLayerMask!==0&&this.excludeWithLayerMask&t.layerMask):!0}dispose(t,e=!1){if(this._shadowGenerators){let i=this._shadowGenerators.values();for(let r=i.next();r.done!==!0;r=i.next())r.value.dispose();this._shadowGenerators=null}if(this.getScene().stopAnimation(this),this._parentContainer){let i=this._parentContainer.lights.indexOf(this);i>-1&&this._parentContainer.lights.splice(i,1),this._parentContainer=null}for(let i of this.getScene().meshes)i._removeLightSource(this,!0);this._uniformBuffer.dispose(),this.getScene().removeLight(this),super.dispose(t,e)}getTypeID(){return 0}getScaledIntensity(){return this._photometricScale*this.intensity}clone(t,e=null){let i=a.GetConstructorFromName(this.getTypeID(),t,this.getScene());if(!i)return null;let r=H.Clone(i,this);return t&&(r.name=t),e&&(r.parent=e),r.setEnabled(this.isEnabled()),this.onClonedObservable.notifyObservers(r),r}serialize(){let t=H.Serialize(this);return t.uniqueId=this.uniqueId,t.type=this.getTypeID(),this.parent&&this.parent._serializeAsParent(t),this.excludedMeshes.length>0&&(t.excludedMeshesIds=[],this.excludedMeshes.forEach(e=>{t.excludedMeshesIds.push(e.id)})),this.includedOnlyMeshes.length>0&&(t.includedOnlyMeshesIds=[],this.includedOnlyMeshes.forEach(e=>{t.includedOnlyMeshesIds.push(e.id)})),H.AppendSerializedAnimations(this,t),t.ranges=this.serializeAnimationRanges(),t.isEnabled=this.isEnabled(),t}static GetConstructorFromName(t,e,i){return Ve.Construct("Light_Type_"+t,e,i)||null}static Parse(t,e){let i=a.GetConstructorFromName(t.type,t.name,e);if(!i)return null;let r=H.Parse(i,t,e);if(t.excludedMeshesIds&&(r._excludedMeshesIds=t.excludedMeshesIds),t.includedOnlyMeshesIds&&(r._includedOnlyMeshesIds=t.includedOnlyMeshesIds),t.parentId!==void 0&&(r._waitingParentId=t.parentId),t.parentInstanceIndex!==void 0&&(r._waitingParentInstanceIndex=t.parentInstanceIndex),t.falloffType!==void 0&&(r.falloffType=t.falloffType),t.lightmapMode!==void 0&&(r.lightmapMode=t.lightmapMode),t.animations){for(let s=0;s<t.animations.length;s++){let n=t.animations[s],o=mt("BABYLON.Animation");o&&r.animations.push(o.Parse(n))}Ve.ParseAnimationRanges(r,t,e)}return t.autoAnimate&&e.beginAnimation(r,t.autoAnimateFrom,t.autoAnimateTo,t.autoAnimateLoop,t.autoAnimateSpeed||1),t.isEnabled!==void 0&&r.setEnabled(t.isEnabled),r}_hookArrayForExcluded(t){let e=t.push;t.push=(...r)=>{let s=e.apply(t,r);for(let n of r)n._resyncLightSource(this);return s};let i=t.splice;t.splice=(r,s)=>{let n=i.apply(t,[r,s]);for(let o of n)o._resyncLightSource(this);return n};for(let r of t)r._resyncLightSource(this)}_hookArrayForIncludedOnly(t){let e=t.push;t.push=(...r)=>{let s=e.apply(t,r);return this._resyncMeshes(),s};let i=t.splice;t.splice=(r,s)=>{let n=i.apply(t,[r,s]);return this._resyncMeshes(),n},this._resyncMeshes()}_resyncMeshes(){for(let t of this.getScene().meshes)t._resyncLightSource(this)}_markMeshesAsLightDirty(){for(let t of this.getScene().meshes)t.lightSources.indexOf(this)!==-1&&t._markSubMeshesAsLightDirty()}_computePhotometricScale(){this._photometricScale=this._getPhotometricScale(),this.getScene().resetCachedMaterial()}_getPhotometricScale(){let t=0,e=this.getTypeID(),i=this.intensityMode;switch(i===a.INTENSITYMODE_AUTOMATIC&&(e===a.LIGHTTYPEID_DIRECTIONALLIGHT?i=a.INTENSITYMODE_ILLUMINANCE:i=a.INTENSITYMODE_LUMINOUSINTENSITY),e){case a.LIGHTTYPEID_POINTLIGHT:case a.LIGHTTYPEID_SPOTLIGHT:switch(i){case a.INTENSITYMODE_LUMINOUSPOWER:t=1/(4*Math.PI);break;case a.INTENSITYMODE_LUMINOUSINTENSITY:t=1;break;case a.INTENSITYMODE_LUMINANCE:t=this.radius*this.radius;break}break;case a.LIGHTTYPEID_DIRECTIONALLIGHT:switch(i){case a.INTENSITYMODE_ILLUMINANCE:t=1;break;case a.INTENSITYMODE_LUMINANCE:{let r=this.radius;r=Math.max(r,.001),t=2*Math.PI*(1-Math.cos(r));break}}break;case a.LIGHTTYPEID_HEMISPHERICLIGHT:t=1;break}return t}_reorderLightsInScene(){let t=this.getScene();this._renderPriority!=0&&(t.requireLightSorting=!0),this.getScene().sortLightsByPriority()}};w.FALLOFF_DEFAULT=j.FALLOFF_DEFAULT;w.FALLOFF_PHYSICAL=j.FALLOFF_PHYSICAL;w.FALLOFF_GLTF=j.FALLOFF_GLTF;w.FALLOFF_STANDARD=j.FALLOFF_STANDARD;w.LIGHTMAP_DEFAULT=j.LIGHTMAP_DEFAULT;w.LIGHTMAP_SPECULAR=j.LIGHTMAP_SPECULAR;w.LIGHTMAP_SHADOWSONLY=j.LIGHTMAP_SHADOWSONLY;w.INTENSITYMODE_AUTOMATIC=j.INTENSITYMODE_AUTOMATIC;w.INTENSITYMODE_LUMINOUSPOWER=j.INTENSITYMODE_LUMINOUSPOWER;w.INTENSITYMODE_LUMINOUSINTENSITY=j.INTENSITYMODE_LUMINOUSINTENSITY;w.INTENSITYMODE_ILLUMINANCE=j.INTENSITYMODE_ILLUMINANCE;w.INTENSITYMODE_LUMINANCE=j.INTENSITYMODE_LUMINANCE;w.LIGHTTYPEID_POINTLIGHT=j.LIGHTTYPEID_POINTLIGHT;w.LIGHTTYPEID_DIRECTIONALLIGHT=j.LIGHTTYPEID_DIRECTIONALLIGHT;w.LIGHTTYPEID_SPOTLIGHT=j.LIGHTTYPEID_SPOTLIGHT;w.LIGHTTYPEID_HEMISPHERICLIGHT=j.LIGHTTYPEID_HEMISPHERICLIGHT;f([Ae()],w.prototype,"diffuse",void 0);f([Ae()],w.prototype,"specular",void 0);f([g()],w.prototype,"falloffType",void 0);f([g()],w.prototype,"intensity",void 0);f([g()],w.prototype,"range",null);f([g()],w.prototype,"intensityMode",null);f([g()],w.prototype,"radius",null);f([g()],w.prototype,"_renderPriority",void 0);f([O("_reorderLightsInScene")],w.prototype,"renderPriority",void 0);f([g("shadowEnabled")],w.prototype,"_shadowEnabled",void 0);f([g("excludeWithLayerMask")],w.prototype,"_excludeWithLayerMask",void 0);f([g("includeOnlyWithLayerMask")],w.prototype,"_includeOnlyWithLayerMask",void 0);f([g("lightmapMode")],w.prototype,"_lightmapMode",void 0);var Fe=class extends w{constructor(){super(...arguments),this._needProjectionMatrixCompute=!0}_setPosition(t){this._position=t}get position(){return this._position}set position(t){this._setPosition(t)}_setDirection(t){this._direction=t}get direction(){return this._direction}set direction(t){this._setDirection(t)}get shadowMinZ(){return this._shadowMinZ}set shadowMinZ(t){this._shadowMinZ=t,this.forceProjectionMatrixCompute()}get shadowMaxZ(){return this._shadowMaxZ}set shadowMaxZ(t){this._shadowMaxZ=t,this.forceProjectionMatrixCompute()}computeTransformedInformation(){return this.parent&&this.parent.getWorldMatrix?(this.transformedPosition||(this.transformedPosition=x.Zero()),x.TransformCoordinatesToRef(this.position,this.parent.getWorldMatrix(),this.transformedPosition),this.direction&&(this.transformedDirection||(this.transformedDirection=x.Zero()),x.TransformNormalToRef(this.direction,this.parent.getWorldMatrix(),this.transformedDirection)),!0):!1}getDepthScale(){return 50}getShadowDirection(t){return this.transformedDirection?this.transformedDirection:this.direction}getAbsolutePosition(){return this.transformedPosition?this.transformedPosition:this.position}setDirectionToTarget(t){return this.direction=x.Normalize(t.subtract(this.position)),this.direction}getRotation(){this.direction.normalize();let t=x.Cross(this.direction,St.Y),e=x.Cross(t,this.direction);return x.RotationFromAxis(t,e,this.direction)}needCube(){return!1}needProjectionMatrixCompute(){return this._needProjectionMatrixCompute}forceProjectionMatrixCompute(){this._needProjectionMatrixCompute=!0}_initCache(){super._initCache(),this._cache.position=x.Zero()}_isSynchronized(){return!!this._cache.position.equals(this.position)}computeWorldMatrix(t){return!t&&this.isSynchronized()?(this._currentRenderId=this.getScene().getRenderId(),this._worldMatrix):(this._updateCache(),this._cache.position.copyFrom(this.position),this._worldMatrix||(this._worldMatrix=P.Identity()),P.TranslationToRef(this.position.x,this.position.y,this.position.z,this._worldMatrix),this.parent&&this.parent.getWorldMatrix&&(this._worldMatrix.multiplyToRef(this.parent.getWorldMatrix(),this._worldMatrix),this._markSyncedWithParent()),this._worldMatrixDeterminantIsDirty=!0,this._worldMatrix)}getDepthMinZ(t){return this.shadowMinZ!==void 0?this.shadowMinZ:t.minZ}getDepthMaxZ(t){return this.shadowMaxZ!==void 0?this.shadowMaxZ:t.maxZ}setShadowProjectionMatrix(t,e,i){return this.customProjectionMatrixBuilder?this.customProjectionMatrixBuilder(e,i,t):this._setDefaultShadowProjectionMatrix(t,e,i),this}_syncParentEnabledState(){super._syncParentEnabledState(),(!this.parent||!this.parent.getWorldMatrix)&&(this.transformedPosition=null,this.transformedDirection=null)}};f([Ke()],Fe.prototype,"position",null);f([Ke()],Fe.prototype,"direction",null);f([g()],Fe.prototype,"shadowMinZ",null);f([g()],Fe.prototype,"shadowMaxZ",null);Ve.AddNodeConstructor("Light_Type_1",(a,t)=>()=>new le(a,x.Zero(),t));var le=class extends Fe{get shadowFrustumSize(){return this._shadowFrustumSize}set shadowFrustumSize(t){this._shadowFrustumSize=t,this.forceProjectionMatrixCompute()}get shadowOrthoScale(){return this._shadowOrthoScale}set shadowOrthoScale(t){this._shadowOrthoScale=t,this.forceProjectionMatrixCompute()}get orthoLeft(){return this._orthoLeft}set orthoLeft(t){this._orthoLeft=t}get orthoRight(){return this._orthoRight}set orthoRight(t){this._orthoRight=t}get orthoTop(){return this._orthoTop}set orthoTop(t){this._orthoTop=t}get orthoBottom(){return this._orthoBottom}set orthoBottom(t){this._orthoBottom=t}constructor(t,e,i){super(t,i),this._shadowFrustumSize=0,this._shadowOrthoScale=.1,this.autoUpdateExtends=!0,this.autoCalcShadowZBounds=!1,this._orthoLeft=Number.MAX_VALUE,this._orthoRight=Number.MIN_VALUE,this._orthoTop=Number.MIN_VALUE,this._orthoBottom=Number.MAX_VALUE,this.position=e.scale(-1),this.direction=e}getClassName(){return"DirectionalLight"}getTypeID(){return w.LIGHTTYPEID_DIRECTIONALLIGHT}_setDefaultShadowProjectionMatrix(t,e,i){this.shadowFrustumSize>0?this._setDefaultFixedFrustumShadowProjectionMatrix(t):this._setDefaultAutoExtendShadowProjectionMatrix(t,e,i)}_setDefaultFixedFrustumShadowProjectionMatrix(t){let e=this.getScene().activeCamera;e&&P.OrthoLHToRef(this.shadowFrustumSize,this.shadowFrustumSize,this.shadowMinZ!==void 0?this.shadowMinZ:e.minZ,this.shadowMaxZ!==void 0?this.shadowMaxZ:e.maxZ,t,this.getScene().getEngine().isNDCHalfZRange)}_setDefaultAutoExtendShadowProjectionMatrix(t,e,i){let r=this.getScene().activeCamera;if(!r)return;if(this.autoUpdateExtends||this._orthoLeft===Number.MAX_VALUE){let h=x.Zero();this._orthoLeft=Number.MAX_VALUE,this._orthoRight=Number.MIN_VALUE,this._orthoTop=Number.MIN_VALUE,this._orthoBottom=Number.MAX_VALUE;let c=Number.MAX_VALUE,u=Number.MIN_VALUE;for(let p=0;p<i.length;p++){let _=i[p];if(!_)continue;let v=_.getBoundingInfo().boundingBox;for(let m=0;m<v.vectorsWorld.length;m++)x.TransformCoordinatesToRef(v.vectorsWorld[m],e,h),h.x<this._orthoLeft&&(this._orthoLeft=h.x),h.y<this._orthoBottom&&(this._orthoBottom=h.y),h.x>this._orthoRight&&(this._orthoRight=h.x),h.y>this._orthoTop&&(this._orthoTop=h.y),this.autoCalcShadowZBounds&&(h.z<c&&(c=h.z),h.z>u&&(u=h.z))}this.autoCalcShadowZBounds&&(this._shadowMinZ=c,this._shadowMaxZ=u)}let s=this._orthoRight-this._orthoLeft,n=this._orthoTop-this._orthoBottom,o=this.shadowMinZ!==void 0?this.shadowMinZ:r.minZ,d=this.shadowMaxZ!==void 0?this.shadowMaxZ:r.maxZ,l=this.getScene().getEngine().useReverseDepthBuffer;P.OrthoOffCenterLHToRef(this._orthoLeft-s*this.shadowOrthoScale,this._orthoRight+s*this.shadowOrthoScale,this._orthoBottom-n*this.shadowOrthoScale,this._orthoTop+n*this.shadowOrthoScale,l?d:o,l?o:d,t,this.getScene().getEngine().isNDCHalfZRange)}_buildUniformLayout(){this._uniformBuffer.addUniform("vLightData",4),this._uniformBuffer.addUniform("vLightDiffuse",4),this._uniformBuffer.addUniform("vLightSpecular",4),this._uniformBuffer.addUniform("shadowsInfo",3),this._uniformBuffer.addUniform("depthValues",2),this._uniformBuffer.create()}transferToEffect(t,e){return this.computeTransformedInformation()?(this._uniformBuffer.updateFloat4("vLightData",this.transformedDirection.x,this.transformedDirection.y,this.transformedDirection.z,1,e),this):(this._uniformBuffer.updateFloat4("vLightData",this.direction.x,this.direction.y,this.direction.z,1,e),this)}transferToNodeMaterialEffect(t,e){return this.computeTransformedInformation()?(t.setFloat3(e,this.transformedDirection.x,this.transformedDirection.y,this.transformedDirection.z),this):(t.setFloat3(e,this.direction.x,this.direction.y,this.direction.z),this)}getDepthMinZ(t){let e=this._scene.getEngine();return!e.useReverseDepthBuffer&&e.isNDCHalfZRange?0:1}getDepthMaxZ(t){let e=this._scene.getEngine();return e.useReverseDepthBuffer&&e.isNDCHalfZRange?0:1}prepareLightSpecificDefines(t,e){t["DIRLIGHT"+e]=!0}};f([g()],le.prototype,"shadowFrustumSize",null);f([g()],le.prototype,"shadowOrthoScale",null);f([g()],le.prototype,"autoUpdateExtends",void 0);f([g()],le.prototype,"autoCalcShadowZBounds",void 0);f([g("orthoLeft")],le.prototype,"_orthoLeft",void 0);f([g("orthoRight")],le.prototype,"_orthoRight",void 0);f([g("orthoTop")],le.prototype,"_orthoTop",void 0);f([g("orthoBottom")],le.prototype,"_orthoBottom",void 0);Ve.AddNodeConstructor("Light_Type_3",(a,t)=>()=>new Ye(a,x.Zero(),t));var Ye=class extends w{constructor(t,e,i){super(t,i),this.groundColor=new re(0,0,0),this.direction=e||x.Up()}_buildUniformLayout(){this._uniformBuffer.addUniform("vLightData",4),this._uniformBuffer.addUniform("vLightDiffuse",4),this._uniformBuffer.addUniform("vLightSpecular",4),this._uniformBuffer.addUniform("vLightGround",3),this._uniformBuffer.addUniform("shadowsInfo",3),this._uniformBuffer.addUniform("depthValues",2),this._uniformBuffer.create()}getClassName(){return"HemisphericLight"}setDirectionToTarget(t){return this.direction=x.Normalize(t.subtract(x.Zero())),this.direction}getShadowGenerator(){return null}transferToEffect(t,e){let i=x.Normalize(this.direction);return this._uniformBuffer.updateFloat4("vLightData",i.x,i.y,i.z,0,e),this._uniformBuffer.updateColor3("vLightGround",this.groundColor.scale(this.intensity),e),this}transferToNodeMaterialEffect(t,e){let i=x.Normalize(this.direction);return t.setFloat3(e,i.x,i.y,i.z),this}computeWorldMatrix(){return this._worldMatrix||(this._worldMatrix=P.Identity()),this._worldMatrix}getTypeID(){return w.LIGHTTYPEID_HEMISPHERICLIGHT}prepareLightSpecificDefines(t,e){t["HEMILIGHT"+e]=!0}};f([Ae()],Ye.prototype,"groundColor",void 0);f([Ke()],Ye.prototype,"direction",void 0);var It=class a{constructor(t,e){this.width=t,this.height=e}toString(){return`{W: ${this.width}, H: ${this.height}}`}getClassName(){return"Size"}getHashCode(){let t=this.width|0;return t=t*397^(this.height|0),t}copyFrom(t){this.width=t.width,this.height=t.height}copyFromFloats(t,e){return this.width=t,this.height=e,this}set(t,e){return this.copyFromFloats(t,e)}multiplyByFloats(t,e){return new a(this.width*t,this.height*e)}clone(){return new a(this.width,this.height)}equals(t){return t?this.width===t.width&&this.height===t.height:!1}get surface(){return this.width*this.height}static Zero(){return new a(0,0)}add(t){return new a(this.width+t.width,this.height+t.height)}subtract(t){return new a(this.width-t.width,this.height-t.height)}static Lerp(t,e,i){let r=t.width+(e.width-t.width)*i,s=t.height+(e.height-t.height)*i;return new a(r,s)}},zt=class a{get wrapU(){return this._wrapU}set wrapU(t){this._wrapU=t}get wrapV(){return this._wrapV}set wrapV(t){this._wrapV=t}get coordinatesMode(){return 0}get isCube(){return this._texture?this._texture.isCube:!1}set isCube(t){this._texture&&(this._texture.isCube=t)}get is3D(){return this._texture?this._texture.is3D:!1}set is3D(t){this._texture&&(this._texture.is3D=t)}get is2DArray(){return this._texture?this._texture.is2DArray:!1}set is2DArray(t){this._texture&&(this._texture.is2DArray=t)}getClassName(){return"ThinTexture"}static _IsRenderTargetWrapper(t){return t?._shareDepth!==void 0}constructor(t){this._wrapU=1,this._wrapV=1,this.wrapR=1,this.anisotropicFilteringLevel=4,this.delayLoadState=0,this._texture=null,this._engine=null,this._cachedSize=It.Zero(),this._cachedBaseSize=It.Zero(),this._initialSamplingMode=2,this._texture=a._IsRenderTargetWrapper(t)?t.texture:t,this._texture&&(this._engine=this._texture.getEngine())}isReady(){return this.delayLoadState===4?(this.delayLoad(),!1):this._texture?this._texture.isReady:!1}delayLoad(){}getInternalTexture(){return this._texture}getSize(){if(this._texture){if(this._texture.width)return this._cachedSize.width=this._texture.width,this._cachedSize.height=this._texture.height,this._cachedSize;if(this._texture._size)return this._cachedSize.width=this._texture._size,this._cachedSize.height=this._texture._size,this._cachedSize}return this._cachedSize}getBaseSize(){return!this.isReady()||!this._texture?(this._cachedBaseSize.width=0,this._cachedBaseSize.height=0,this._cachedBaseSize):this._texture._size?(this._cachedBaseSize.width=this._texture._size,this._cachedBaseSize.height=this._texture._size,this._cachedBaseSize):(this._cachedBaseSize.width=this._texture.baseWidth,this._cachedBaseSize.height=this._texture.baseHeight,this._cachedBaseSize)}get samplingMode(){return this._texture?this._texture.samplingMode:this._initialSamplingMode}updateSamplingMode(t){this._texture&&this._engine&&this._engine.updateTextureSamplingMode(t,this._texture)}releaseInternalTexture(){this._texture&&(this._texture.dispose(),this._texture=null)}dispose(){this._texture&&(this.releaseInternalTexture(),this._engine=null)}},W=(()=>{class a extends zt{set hasAlpha(e){this._hasAlpha!==e&&(this._hasAlpha=e,this._scene&&this._scene.markAllMaterialsAsDirty(1,i=>i.hasTexture(this)))}get hasAlpha(){return this._hasAlpha}set getAlphaFromRGB(e){this._getAlphaFromRGB!==e&&(this._getAlphaFromRGB=e,this._scene&&this._scene.markAllMaterialsAsDirty(1,i=>i.hasTexture(this)))}get getAlphaFromRGB(){return this._getAlphaFromRGB}set coordinatesIndex(e){this._coordinatesIndex!==e&&(this._coordinatesIndex=e,this._scene&&this._scene.markAllMaterialsAsDirty(1,i=>i.hasTexture(this)))}get coordinatesIndex(){return this._coordinatesIndex}set coordinatesMode(e){this._coordinatesMode!==e&&(this._coordinatesMode=e,this._scene&&this._scene.markAllMaterialsAsDirty(1,i=>i.hasTexture(this)))}get coordinatesMode(){return this._coordinatesMode}get wrapU(){return this._wrapU}set wrapU(e){this._wrapU=e}get wrapV(){return this._wrapV}set wrapV(e){this._wrapV=e}get isCube(){return this._texture?this._texture.isCube:this._isCube}set isCube(e){this._texture?this._texture.isCube=e:this._isCube=e}get is3D(){return this._texture?this._texture.is3D:!1}set is3D(e){this._texture&&(this._texture.is3D=e)}get is2DArray(){return this._texture?this._texture.is2DArray:!1}set is2DArray(e){this._texture&&(this._texture.is2DArray=e)}get gammaSpace(){if(this._texture)this._texture._gammaSpace===null&&(this._texture._gammaSpace=this._gammaSpace);else return this._gammaSpace;return this._texture._gammaSpace&&!this._texture._useSRGBBuffer}set gammaSpace(e){if(this._texture){if(this._texture._gammaSpace===e)return;this._texture._gammaSpace=e}else{if(this._gammaSpace===e)return;this._gammaSpace=e}this._markAllSubMeshesAsTexturesDirty()}get isRGBD(){return this._texture!=null&&this._texture._isRGBD}set isRGBD(e){this._texture&&(this._texture._isRGBD=e)}get noMipmap(){return!1}get lodGenerationOffset(){return this._texture?this._texture._lodGenerationOffset:0}set lodGenerationOffset(e){this._texture&&(this._texture._lodGenerationOffset=e)}get lodGenerationScale(){return this._texture?this._texture._lodGenerationScale:0}set lodGenerationScale(e){this._texture&&(this._texture._lodGenerationScale=e)}get linearSpecularLOD(){return this._texture?this._texture._linearSpecularLOD:!1}set linearSpecularLOD(e){this._texture&&(this._texture._linearSpecularLOD=e)}get irradianceTexture(){return this._texture?this._texture._irradianceTexture:null}set irradianceTexture(e){this._texture&&(this._texture._irradianceTexture=e)}get uid(){return this._uid||(this._uid=li()),this._uid}toString(){return this.name}getClassName(){return"BaseTexture"}set onDispose(e){this._onDisposeObserver&&this.onDisposeObservable.remove(this._onDisposeObserver),this._onDisposeObserver=this.onDisposeObservable.add(e)}get isBlocking(){return!0}get loadingError(){return this._loadingError}get errorObject(){return this._errorObject}constructor(e,i=null){super(null),this.metadata=null,this.reservedDataStore=null,this._hasAlpha=!1,this._getAlphaFromRGB=!1,this.level=1,this._coordinatesIndex=0,this.optimizeUVAllocation=!0,this._coordinatesMode=0,this.wrapR=1,this.anisotropicFilteringLevel=a.DEFAULT_ANISOTROPIC_FILTERING_LEVEL,this._isCube=!1,this._gammaSpace=!0,this.invertZ=!1,this.lodLevelInAlpha=!1,this.isRenderTarget=!1,this._prefiltered=!1,this._forceSerialize=!1,this.animations=new Array,this.onDisposeObservable=new k,this._onDisposeObserver=null,this._scene=null,this._uid=null,this._parentContainer=null,this._loadingError=!1,e?a._IsScene(e)?this._scene=e:this._engine=e:this._scene=ft.LastCreatedScene,this._scene&&(this.uniqueId=this._scene.getUniqueId(),this._scene.addTexture(this),this._engine=this._scene.getEngine()),this._texture=i,this._uid=null}getScene(){return this._scene}_getEngine(){return this._engine}checkTransformsAreIdentical(e){return e!==null}getTextureMatrix(){return P.IdentityReadOnly}getReflectionTextureMatrix(){return P.IdentityReadOnly}isReadyOrNotBlocking(){return!this.isBlocking||this.isReady()||this.loadingError}scale(e){}get canRescale(){return!1}_getFromCache(e,i,r,s,n,o){let d=this._getEngine();if(!d)return null;let l=d._getUseSRGBBuffer(!!n,i),h=d.getLoadedTexturesCache();for(let c=0;c<h.length;c++){let u=h[c];if((n===void 0||l===u._useSRGBBuffer)&&(s===void 0||s===u.invertY)&&u.url===e&&u.generateMipMaps===!i&&(!r||r===u.samplingMode)&&(o===void 0||o===u.isCube))return u.incrementReferences(),u}return null}_rebuild(){}clone(){return null}get textureType(){return this._texture&&this._texture.type!==void 0?this._texture.type:0}get textureFormat(){return this._texture&&this._texture.format!==void 0?this._texture.format:5}_markAllSubMeshesAsTexturesDirty(){let e=this.getScene();e&&e.markAllMaterialsAsDirty(1)}readPixels(e=0,i=0,r=null,s=!0,n=!1,o=0,d=0,l=Number.MAX_VALUE,h=Number.MAX_VALUE){if(!this._texture)return null;let c=this._getEngine();if(!c)return null;let u=this.getSize(),p=u.width,_=u.height;i!==0&&(p=p/Math.pow(2,i),_=_/Math.pow(2,i),p=Math.round(p),_=Math.round(_)),l=Math.min(p,l),h=Math.min(_,h);try{return this._texture.isCube?c._readTexturePixels(this._texture,l,h,e,i,r,s,n,o,d):c._readTexturePixels(this._texture,l,h,-1,i,r,s,n,o,d)}catch{return null}}_readPixelsSync(e=0,i=0,r=null,s=!0,n=!1){if(!this._texture)return null;let o=this.getSize(),d=o.width,l=o.height,h=this._getEngine();if(!h)return null;i!=0&&(d=d/Math.pow(2,i),l=l/Math.pow(2,i),d=Math.round(d),l=Math.round(l));try{return this._texture.isCube?h._readTexturePixelsSync(this._texture,d,l,e,i,r,s,n):h._readTexturePixelsSync(this._texture,d,l,-1,i,r,s,n)}catch{return null}}get _lodTextureHigh(){return this._texture?this._texture._lodTextureHigh:null}get _lodTextureMid(){return this._texture?this._texture._lodTextureMid:null}get _lodTextureLow(){return this._texture?this._texture._lodTextureLow:null}dispose(){if(this._scene){this._scene.stopAnimation&&this._scene.stopAnimation(this),this._scene.removePendingData(this);let e=this._scene.textures.indexOf(this);if(e>=0&&this._scene.textures.splice(e,1),this._scene.onTextureRemovedObservable.notifyObservers(this),this._scene=null,this._parentContainer){let i=this._parentContainer.textures.indexOf(this);i>-1&&this._parentContainer.textures.splice(i,1),this._parentContainer=null}}this.onDisposeObservable.notifyObservers(this),this.onDisposeObservable.clear(),this.metadata=null,super.dispose()}serialize(e=!1){if(!this.name&&!e)return null;let i=H.Serialize(this);return H.AppendSerializedAnimations(this,i),i}static WhenAllReady(e,i){let r=e.length;if(r===0){i();return}for(let s=0;s<e.length;s++){let n=e[s];if(n.isReady())--r===0&&i();else{let o=n.onLoadObservable;o?o.addOnce(()=>{--r===0&&i()}):--r===0&&i()}}}static _IsScene(e){return e.getClassName()==="Scene"}}return a.DEFAULT_ANISOTROPIC_FILTERING_LEVEL=4,a})();f([g()],W.prototype,"uniqueId",void 0);f([g()],W.prototype,"name",void 0);f([g()],W.prototype,"metadata",void 0);f([g("hasAlpha")],W.prototype,"_hasAlpha",void 0);f([g("getAlphaFromRGB")],W.prototype,"_getAlphaFromRGB",void 0);f([g()],W.prototype,"level",void 0);f([g("coordinatesIndex")],W.prototype,"_coordinatesIndex",void 0);f([g()],W.prototype,"optimizeUVAllocation",void 0);f([g("coordinatesMode")],W.prototype,"_coordinatesMode",void 0);f([g()],W.prototype,"wrapU",null);f([g()],W.prototype,"wrapV",null);f([g()],W.prototype,"wrapR",void 0);f([g()],W.prototype,"anisotropicFilteringLevel",void 0);f([g()],W.prototype,"isCube",null);f([g()],W.prototype,"is3D",null);f([g()],W.prototype,"is2DArray",null);f([g()],W.prototype,"gammaSpace",null);f([g()],W.prototype,"invertZ",void 0);f([g()],W.prototype,"lodLevelInAlpha",void 0);f([g()],W.prototype,"lodGenerationOffset",null);f([g()],W.prototype,"lodGenerationScale",null);f([g()],W.prototype,"linearSpecularLOD",null);f([ne()],W.prototype,"irradianceTexture",null);f([g()],W.prototype,"isRenderTarget",void 0);function Ci(a,t,e=!1){let i=t.width,r=t.height;if(a instanceof Float32Array){let d=a.byteLength/a.BYTES_PER_ELEMENT,l=new Uint8Array(d);for(;--d>=0;){let h=a[d];h<0?h=0:h>1&&(h=1),l[d]=h*255}a=l}let s=document.createElement("canvas");s.width=i,s.height=r;let n=s.getContext("2d");if(!n)return null;let o=n.createImageData(i,r);if(o.data.set(a),n.putImageData(o,0,0),e){let d=document.createElement("canvas");d.width=i,d.height=r;let l=d.getContext("2d");return l?(l.translate(0,r),l.scale(1,-1),l.drawImage(s,0,0),d.toDataURL("image/png")):null}return s.toDataURL("image/png")}function yi(a,t=0,e=0){let i=a.getInternalTexture();if(!i)return null;let r=a._readPixelsSync(t,e);return r?Ci(r,a.getSize(),i.invertY):null}function Ui(a,t=0,e=0){return ae(this,null,function*(){let i=a.getInternalTexture();if(!i)return null;let r=yield a.readPixels(t,e);return r?Ci(r,a.getSize(),i.invertY):null})}var T=class a extends W{get noMipmap(){return this._noMipmap}get mimeType(){return this._mimeType}set isBlocking(t){this._isBlocking=t}get isBlocking(){return this._isBlocking}get invertY(){return this._invertY}constructor(t,e,i,r,s=a.TRILINEAR_SAMPLINGMODE,n=null,o=null,d=null,l=!1,h,c,u,p,_){var v,m,A,S,C,L,N,R,U;super(e),this.url=null,this.uOffset=0,this.vOffset=0,this.uScale=1,this.vScale=1,this.uAng=0,this.vAng=0,this.wAng=0,this.uRotationCenter=.5,this.vRotationCenter=.5,this.wRotationCenter=.5,this.homogeneousRotationInUVTransform=!1,this.inspectableCustomProperties=null,this._noMipmap=!1,this._invertY=!1,this._rowGenerationMatrix=null,this._cachedTextureMatrix=null,this._projectionModeMatrix=null,this._t0=null,this._t1=null,this._t2=null,this._cachedUOffset=-1,this._cachedVOffset=-1,this._cachedUScale=0,this._cachedVScale=0,this._cachedUAng=-1,this._cachedVAng=-1,this._cachedWAng=-1,this._cachedReflectionProjectionMatrixId=-1,this._cachedURotationCenter=-1,this._cachedVRotationCenter=-1,this._cachedWRotationCenter=-1,this._cachedHomogeneousRotationInUVTransform=!1,this._cachedReflectionTextureMatrix=null,this._cachedReflectionUOffset=-1,this._cachedReflectionVOffset=-1,this._cachedReflectionUScale=0,this._cachedReflectionVScale=0,this._cachedReflectionCoordinatesMode=-1,this._buffer=null,this._deleteBuffer=!1,this._format=null,this._delayedOnLoad=null,this._delayedOnError=null,this.onLoadObservable=new k,this._isBlocking=!0,this.name=t||"",this.url=t;let D,F=!1,he=null;typeof i=="object"&&i!==null?(D=(v=i.noMipmap)!==null&&v!==void 0?v:!1,r=(m=i.invertY)!==null&&m!==void 0?m:!Le.UseOpenGLOrientationForUV,s=(A=i.samplingMode)!==null&&A!==void 0?A:a.TRILINEAR_SAMPLINGMODE,n=(S=i.onLoad)!==null&&S!==void 0?S:null,o=(C=i.onError)!==null&&C!==void 0?C:null,d=(L=i.buffer)!==null&&L!==void 0?L:null,l=(N=i.deleteBuffer)!==null&&N!==void 0?N:!1,h=i.format,c=i.mimeType,u=i.loaderOptions,p=i.creationFlags,F=(R=i.useSRGBBuffer)!==null&&R!==void 0?R:!1,he=(U=i.internalTexture)!==null&&U!==void 0?U:null):D=!!i,this._noMipmap=D,this._invertY=r===void 0?!Le.UseOpenGLOrientationForUV:r,this._initialSamplingMode=s,this._buffer=d,this._deleteBuffer=l,this._mimeType=c,this._loaderOptions=u,this._creationFlags=p,this._useSRGBBuffer=F,this._forcedExtension=_,h&&(this._format=h);let B=this.getScene(),Ie=this._getEngine();if(!Ie)return;Ie.onBeforeTextureInitObservable.notifyObservers(this);let z=()=>{this._texture&&(this._texture._invertVScale&&(this.vScale*=-1,this.vOffset+=1),this._texture._cachedWrapU!==null&&(this.wrapU=this._texture._cachedWrapU,this._texture._cachedWrapU=null),this._texture._cachedWrapV!==null&&(this.wrapV=this._texture._cachedWrapV,this._texture._cachedWrapV=null),this._texture._cachedWrapR!==null&&(this.wrapR=this._texture._cachedWrapR,this._texture._cachedWrapR=null)),this.onLoadObservable.hasObservers()&&this.onLoadObservable.notifyObservers(this),n&&n(),!this.isBlocking&&B&&B.resetCachedMaterial()},ee=(te,K)=>{this._loadingError=!0,this._errorObject={message:te,exception:K},o&&o(te,K),a.OnTextureLoadErrorObservable.notifyObservers(this)};if(!this.url&&!he){this._delayedOnLoad=z,this._delayedOnError=ee;return}if(this._texture=he??this._getFromCache(this.url,D,s,this._invertY,F),this._texture)if(this._texture.isReady)Ot.SetImmediate(()=>z());else{let te=this._texture.onLoadedObservable.add(z);this._texture.onErrorObservable.add(K=>{var Ee;ee(K.message,K.exception),(Ee=this._texture)===null||Ee===void 0||Ee.onLoadedObservable.remove(te)})}else if(!B||!B.useDelayedTextureLoading){try{this._texture=Ie.createTexture(this.url,D,this._invertY,B,s,z,ee,this._buffer,void 0,this._format,this._forcedExtension,c,u,p,F)}catch(te){throw ee("error loading",te),te}l&&(this._buffer=null)}else this.delayLoadState=4,this._delayedOnLoad=z,this._delayedOnError=ee}updateURL(t,e=null,i,r){this.url&&(this.releaseInternalTexture(),this.getScene().markAllMaterialsAsDirty(1)),(!this.name||this.name.startsWith("data:"))&&(this.name=t),this.url=t,this._buffer=e,this._forcedExtension=r,this.delayLoadState=4,i&&(this._delayedOnLoad=i),this.delayLoad()}delayLoad(){if(this.delayLoadState!==4)return;let t=this.getScene();t&&(this.delayLoadState=1,this._texture=this._getFromCache(this.url,this._noMipmap,this.samplingMode,this._invertY,this._useSRGBBuffer),this._texture?this._delayedOnLoad&&(this._texture.isReady?Ot.SetImmediate(this._delayedOnLoad):this._texture.onLoadedObservable.add(this._delayedOnLoad)):(this._texture=t.getEngine().createTexture(this.url,this._noMipmap,this._invertY,t,this.samplingMode,this._delayedOnLoad,this._delayedOnError,this._buffer,null,this._format,this._forcedExtension,this._mimeType,this._loaderOptions,this._creationFlags,this._useSRGBBuffer),this._deleteBuffer&&(this._buffer=null)),this._delayedOnLoad=null,this._delayedOnError=null)}_prepareRowForTextureGeneration(t,e,i,r){t*=this._cachedUScale,e*=this._cachedVScale,t-=this.uRotationCenter*this._cachedUScale,e-=this.vRotationCenter*this._cachedVScale,i-=this.wRotationCenter,x.TransformCoordinatesFromFloatsToRef(t,e,i,this._rowGenerationMatrix,r),r.x+=this.uRotationCenter*this._cachedUScale+this._cachedUOffset,r.y+=this.vRotationCenter*this._cachedVScale+this._cachedVOffset,r.z+=this.wRotationCenter}checkTransformsAreIdentical(t){return t!==null&&this.uOffset===t.uOffset&&this.vOffset===t.vOffset&&this.uScale===t.uScale&&this.vScale===t.vScale&&this.uAng===t.uAng&&this.vAng===t.vAng&&this.wAng===t.wAng}getTextureMatrix(t=1){if(this.uOffset===this._cachedUOffset&&this.vOffset===this._cachedVOffset&&this.uScale*t===this._cachedUScale&&this.vScale===this._cachedVScale&&this.uAng===this._cachedUAng&&this.vAng===this._cachedVAng&&this.wAng===this._cachedWAng&&this.uRotationCenter===this._cachedURotationCenter&&this.vRotationCenter===this._cachedVRotationCenter&&this.wRotationCenter===this._cachedWRotationCenter&&this.homogeneousRotationInUVTransform===this._cachedHomogeneousRotationInUVTransform)return this._cachedTextureMatrix;this._cachedUOffset=this.uOffset,this._cachedVOffset=this.vOffset,this._cachedUScale=this.uScale*t,this._cachedVScale=this.vScale,this._cachedUAng=this.uAng,this._cachedVAng=this.vAng,this._cachedWAng=this.wAng,this._cachedURotationCenter=this.uRotationCenter,this._cachedVRotationCenter=this.vRotationCenter,this._cachedWRotationCenter=this.wRotationCenter,this._cachedHomogeneousRotationInUVTransform=this.homogeneousRotationInUVTransform,(!this._cachedTextureMatrix||!this._rowGenerationMatrix)&&(this._cachedTextureMatrix=P.Zero(),this._rowGenerationMatrix=new P,this._t0=x.Zero(),this._t1=x.Zero(),this._t2=x.Zero()),P.RotationYawPitchRollToRef(this.vAng,this.uAng,this.wAng,this._rowGenerationMatrix),this.homogeneousRotationInUVTransform?(P.TranslationToRef(-this._cachedURotationCenter,-this._cachedVRotationCenter,-this._cachedWRotationCenter,ie.Matrix[0]),P.TranslationToRef(this._cachedURotationCenter,this._cachedVRotationCenter,this._cachedWRotationCenter,ie.Matrix[1]),P.ScalingToRef(this._cachedUScale,this._cachedVScale,0,ie.Matrix[2]),P.TranslationToRef(this._cachedUOffset,this._cachedVOffset,0,ie.Matrix[3]),ie.Matrix[0].multiplyToRef(this._rowGenerationMatrix,this._cachedTextureMatrix),this._cachedTextureMatrix.multiplyToRef(ie.Matrix[1],this._cachedTextureMatrix),this._cachedTextureMatrix.multiplyToRef(ie.Matrix[2],this._cachedTextureMatrix),this._cachedTextureMatrix.multiplyToRef(ie.Matrix[3],this._cachedTextureMatrix),this._cachedTextureMatrix.setRowFromFloats(2,this._cachedTextureMatrix.m[12],this._cachedTextureMatrix.m[13],this._cachedTextureMatrix.m[14],1)):(this._prepareRowForTextureGeneration(0,0,0,this._t0),this._prepareRowForTextureGeneration(1,0,0,this._t1),this._prepareRowForTextureGeneration(0,1,0,this._t2),this._t1.subtractInPlace(this._t0),this._t2.subtractInPlace(this._t0),P.FromValuesToRef(this._t1.x,this._t1.y,this._t1.z,0,this._t2.x,this._t2.y,this._t2.z,0,this._t0.x,this._t0.y,this._t0.z,0,0,0,0,1,this._cachedTextureMatrix));let e=this.getScene();return e?(this.optimizeUVAllocation&&e.markAllMaterialsAsDirty(1,i=>i.hasTexture(this)),this._cachedTextureMatrix):this._cachedTextureMatrix}getReflectionTextureMatrix(){let t=this.getScene();if(!t)return this._cachedReflectionTextureMatrix;if(this.uOffset===this._cachedReflectionUOffset&&this.vOffset===this._cachedReflectionVOffset&&this.uScale===this._cachedReflectionUScale&&this.vScale===this._cachedReflectionVScale&&this.coordinatesMode===this._cachedReflectionCoordinatesMode)if(this.coordinatesMode===a.PROJECTION_MODE){if(this._cachedReflectionProjectionMatrixId===t.getProjectionMatrix().updateFlag)return this._cachedReflectionTextureMatrix}else return this._cachedReflectionTextureMatrix;this._cachedReflectionTextureMatrix||(this._cachedReflectionTextureMatrix=P.Zero()),this._projectionModeMatrix||(this._projectionModeMatrix=P.Zero());let e=this._cachedReflectionCoordinatesMode!==this.coordinatesMode;switch(this._cachedReflectionUOffset=this.uOffset,this._cachedReflectionVOffset=this.vOffset,this._cachedReflectionUScale=this.uScale,this._cachedReflectionVScale=this.vScale,this._cachedReflectionCoordinatesMode=this.coordinatesMode,this.coordinatesMode){case a.PLANAR_MODE:{P.IdentityToRef(this._cachedReflectionTextureMatrix),this._cachedReflectionTextureMatrix[0]=this.uScale,this._cachedReflectionTextureMatrix[5]=this.vScale,this._cachedReflectionTextureMatrix[12]=this.uOffset,this._cachedReflectionTextureMatrix[13]=this.vOffset;break}case a.PROJECTION_MODE:{P.FromValuesToRef(.5,0,0,0,0,-.5,0,0,0,0,0,0,.5,.5,1,1,this._projectionModeMatrix);let i=t.getProjectionMatrix();this._cachedReflectionProjectionMatrixId=i.updateFlag,i.multiplyToRef(this._projectionModeMatrix,this._cachedReflectionTextureMatrix);break}default:P.IdentityToRef(this._cachedReflectionTextureMatrix);break}return e&&t.markAllMaterialsAsDirty(1,i=>i.getActiveTextures().indexOf(this)!==-1),this._cachedReflectionTextureMatrix}clone(){let t={noMipmap:this._noMipmap,invertY:this._invertY,samplingMode:this.samplingMode,onLoad:void 0,onError:void 0,buffer:this._texture?this._texture._buffer:void 0,deleteBuffer:this._deleteBuffer,format:this.textureFormat,mimeType:this.mimeType,loaderOptions:this._loaderOptions,creationFlags:this._creationFlags,useSRGBBuffer:this._useSRGBBuffer};return H.Clone(()=>new a(this._texture?this._texture.url:null,this.getScene(),t),this)}serialize(){var t,e;let i=this.name;a.SerializeBuffers||this.name.startsWith("data:")&&(this.name=""),this.name.startsWith("data:")&&this.url===this.name&&(this.url="");let r=super.serialize(a._SerializeInternalTextureUniqueId);return r?((a.SerializeBuffers||a.ForceSerializeBuffers)&&(typeof this._buffer=="string"&&this._buffer.substr(0,5)==="data:"?(r.base64String=this._buffer,r.name=r.name.replace("data:","")):this.url&&this.url.startsWith("data:")&&this._buffer instanceof Uint8Array?r.base64String="data:image/png;base64,"+ai(this._buffer):(a.ForceSerializeBuffers||this.url&&this.url.startsWith("blob:")||this._forceSerialize)&&(r.base64String=!this._engine||this._engine._features.supportSyncTextureRead?yi(this):Ui(this))),r.invertY=this._invertY,r.samplingMode=this.samplingMode,r._creationFlags=this._creationFlags,r._useSRGBBuffer=this._useSRGBBuffer,a._SerializeInternalTextureUniqueId&&(r.internalTextureUniqueId=(e=(t=this._texture)===null||t===void 0?void 0:t.uniqueId)!==null&&e!==void 0?e:void 0),this.name=i,r):null}getClassName(){return"Texture"}dispose(){super.dispose(),this.onLoadObservable.clear(),this._delayedOnLoad=null,this._delayedOnError=null,this._buffer=null}static Parse(t,e,i){if(t.customType){let o=oi.Instantiate(t.customType).Parse(t,e,i);return t.samplingMode&&o.updateSamplingMode&&o._samplingMode&&o._samplingMode!==t.samplingMode&&o.updateSamplingMode(t.samplingMode),o}if(t.isCube&&!t.isRenderTarget)return a._CubeTextureParser(t,e,i);let r=t.internalTextureUniqueId!==void 0;if(!t.name&&!t.isRenderTarget&&!r)return null;let s;if(r){let o=e.getEngine().getLoadedTexturesCache();for(let d of o)if(d.uniqueId===t.internalTextureUniqueId){s=d;break}}let n=o=>{var d;if(o&&o._texture&&(o._texture._cachedWrapU=null,o._texture._cachedWrapV=null,o._texture._cachedWrapR=null),t.samplingMode){let l=t.samplingMode;o&&o.samplingMode!==l&&o.updateSamplingMode(l)}if(o&&t.animations)for(let l=0;l<t.animations.length;l++){let h=t.animations[l],c=mt("BABYLON.Animation");c&&o.animations.push(c.Parse(h))}r&&!s&&((d=o?._texture)===null||d===void 0||d._setUniqueId(t.internalTextureUniqueId))};return H.Parse(()=>{var o,d,l;let h=!0;if(t.noMipmap&&(h=!1),t.mirrorPlane){let c=a._CreateMirror(t.name,t.renderTargetSize,e,h);return c._waitingRenderList=t.renderList,c.mirrorPlane=_i.FromArray(t.mirrorPlane),n(c),c}else if(t.isRenderTarget){let c=null;if(t.isCube){if(e.reflectionProbes)for(let u=0;u<e.reflectionProbes.length;u++){let p=e.reflectionProbes[u];if(p.name===t.name)return p.cubeTexture}}else c=a._CreateRenderTargetTexture(t.name,t.renderTargetSize,e,h,(o=t._creationFlags)!==null&&o!==void 0?o:0),c._waitingRenderList=t.renderList;return n(c),c}else{let c;if(t.base64String&&!s)c=a.CreateFromBase64String(t.base64String,t.base64String,e,!h,t.invertY,t.samplingMode,()=>{n(c)},(d=t._creationFlags)!==null&&d!==void 0?d:0,(l=t._useSRGBBuffer)!==null&&l!==void 0?l:!1),c.name=t.name;else{let u;t.name&&t.name.indexOf("://")>0?u=t.name:u=i+t.name,t.url&&(t.url.startsWith("data:")||a.UseSerializedUrlIfAny)&&(u=t.url);let p={noMipmap:!h,invertY:t.invertY,samplingMode:t.samplingMode,onLoad:()=>{n(c)},internalTexture:s};c=new a(u,e,p)}return c}},t,e)}static CreateFromBase64String(t,e,i,r,s,n=a.TRILINEAR_SAMPLINGMODE,o=null,d=null,l=5,h){return new a("data:"+e,i,r,s,n,o,d,t,!1,l,void 0,void 0,h)}static LoadFromDataString(t,e,i,r=!1,s,n=!0,o=a.TRILINEAR_SAMPLINGMODE,d=null,l=null,h=5,c){return t.substr(0,5)!=="data:"&&(t="data:"+t),new a(t,i,s,n,o,d,l,e,r,h,void 0,void 0,c)}};T.SerializeBuffers=!0;T.ForceSerializeBuffers=!1;T.OnTextureLoadErrorObservable=new k;T._SerializeInternalTextureUniqueId=!1;T._CubeTextureParser=(a,t,e)=>{throw Re("CubeTexture")};T._CreateMirror=(a,t,e,i)=>{throw Re("MirrorTexture")};T._CreateRenderTargetTexture=(a,t,e,i,r)=>{throw Re("RenderTargetTexture")};T.NEAREST_SAMPLINGMODE=1;T.NEAREST_NEAREST_MIPLINEAR=8;T.BILINEAR_SAMPLINGMODE=2;T.LINEAR_LINEAR_MIPNEAREST=11;T.TRILINEAR_SAMPLINGMODE=3;T.LINEAR_LINEAR_MIPLINEAR=3;T.NEAREST_NEAREST_MIPNEAREST=4;T.NEAREST_LINEAR_MIPNEAREST=5;T.NEAREST_LINEAR_MIPLINEAR=6;T.NEAREST_LINEAR=7;T.NEAREST_NEAREST=1;T.LINEAR_NEAREST_MIPNEAREST=9;T.LINEAR_NEAREST_MIPLINEAR=10;T.LINEAR_LINEAR=2;T.LINEAR_NEAREST=12;T.EXPLICIT_MODE=0;T.SPHERICAL_MODE=1;T.PLANAR_MODE=2;T.CUBIC_MODE=3;T.PROJECTION_MODE=4;T.SKYBOX_MODE=5;T.INVCUBIC_MODE=6;T.EQUIRECTANGULAR_MODE=7;T.FIXED_EQUIRECTANGULAR_MODE=8;T.FIXED_EQUIRECTANGULAR_MIRRORED_MODE=9;T.CLAMP_ADDRESSMODE=0;T.WRAP_ADDRESSMODE=1;T.MIRROR_ADDRESSMODE=2;T.UseSerializedUrlIfAny=!1;f([g()],T.prototype,"url",void 0);f([g()],T.prototype,"uOffset",void 0);f([g()],T.prototype,"vOffset",void 0);f([g()],T.prototype,"uScale",void 0);f([g()],T.prototype,"vScale",void 0);f([g()],T.prototype,"uAng",void 0);f([g()],T.prototype,"vAng",void 0);f([g()],T.prototype,"wAng",void 0);f([g()],T.prototype,"uRotationCenter",void 0);f([g()],T.prototype,"vRotationCenter",void 0);f([g()],T.prototype,"wRotationCenter",void 0);f([g()],T.prototype,"homogeneousRotationInUVTransform",void 0);f([g()],T.prototype,"isBlocking",null);Pe("BABYLON.Texture",T);H._TextureParser=T.Parse;var Wt=class{get depthStencilTexture(){return this._depthStencilTexture}get depthStencilTextureWithStencil(){return this._depthStencilTextureWithStencil}get isCube(){return this._isCube}get isMulti(){return this._isMulti}get is2DArray(){return this.layers>0}get size(){return this.width}get width(){return this._size.width||this._size}get height(){return this._size.height||this._size}get layers(){return this._size.layers||0}get texture(){var t,e;return(e=(t=this._textures)===null||t===void 0?void 0:t[0])!==null&&e!==void 0?e:null}get textures(){return this._textures}get faceIndices(){return this._faceIndices}get layerIndices(){return this._layerIndices}get samples(){return this._samples}setSamples(t,e=!0,i=!1){if(this.samples===t&&!i)return t;let r=this._isMulti?this._engine.updateMultipleRenderTargetTextureSampleCount(this,t,e):this._engine.updateRenderTargetTextureSampleCount(this,t);return this._samples=t,r}constructor(t,e,i,r){this._textures=null,this._faceIndices=null,this._layerIndices=null,this._samples=1,this._attachments=null,this._generateStencilBuffer=!1,this._generateDepthBuffer=!1,this._depthStencilTextureWithStencil=!1,this._isMulti=t,this._isCube=e,this._size=i,this._engine=r,this._depthStencilTexture=null}setTextures(t){Array.isArray(t)?this._textures=t:t?this._textures=[t]:this._textures=null}setTexture(t,e=0,i=!0){this._textures||(this._textures=[]),this._textures[e]&&i&&this._textures[e].dispose(),this._textures[e]=t}setLayerAndFaceIndices(t,e){this._layerIndices=t,this._faceIndices=e}setLayerAndFaceIndex(t=0,e,i){this._layerIndices||(this._layerIndices=[]),this._faceIndices||(this._faceIndices=[]),e!==void 0&&e>=0&&(this._layerIndices[t]=e),i!==void 0&&i>=0&&(this._faceIndices[t]=i)}createDepthStencilTexture(t=0,e=!0,i=!1,r=1,s=14,n){var o;return(o=this._depthStencilTexture)===null||o===void 0||o.dispose(),this._depthStencilTextureWithStencil=i,this._depthStencilTexture=this._engine.createDepthStencilTexture(this._size,{bilinearFiltering:e,comparisonFunction:t,generateStencil:i,isCube:this._isCube,samples:r,depthTextureFormat:s,label:n},this),this._depthStencilTexture}_shareDepth(t){this._depthStencilTexture&&(t._depthStencilTexture&&t._depthStencilTexture.dispose(),t._depthStencilTexture=this._depthStencilTexture,this._depthStencilTexture.incrementReferences())}_swapAndDie(t){this.texture&&this.texture._swapAndDie(t),this._textures=null,this.dispose(!0)}_cloneRenderTargetWrapper(){var t,e,i,r,s,n,o,d;let l=null;if(this._isMulti){let h=this.textures;if(h&&h.length>0){let c=!1,u=h.length,p=h[h.length-1]._source;(p===Ne.Depth||p===Ne.DepthStencil)&&(c=!0,u--);let _=[],v=[],m=[],A=[],S=[],C=[],L=[],N={};for(let D=0;D<u;++D){let F=h[D];_.push(F.samplingMode),v.push(F.type),m.push(F.format),N[F.uniqueId]!==void 0?(A.push(-1),L.push(0)):(N[F.uniqueId]=D,F.is2DArray?(A.push(35866),L.push(F.depth)):F.isCube?(A.push(34067),L.push(0)):F.is3D?(A.push(32879),L.push(F.depth)):(A.push(3553),L.push(0))),this._faceIndices&&S.push((t=this._faceIndices[D])!==null&&t!==void 0?t:0),this._layerIndices&&C.push((e=this._layerIndices[D])!==null&&e!==void 0?e:0)}let R={samplingModes:_,generateMipMaps:h[0].generateMipMaps,generateDepthBuffer:this._generateDepthBuffer,generateStencilBuffer:this._generateStencilBuffer,generateDepthTexture:c,types:v,formats:m,textureCount:u,targetTypes:A,faceIndex:S,layerIndex:C,layerCounts:L},U={width:this.width,height:this.height};l=this._engine.createMultipleRenderTarget(U,R);for(let D=0;D<u;++D){if(A[D]!==-1)continue;let F=N[h[D].uniqueId];l.setTexture(l.textures[F],D)}}}else{let h={};if(h.generateDepthBuffer=this._generateDepthBuffer,h.generateMipMaps=(r=(i=this.texture)===null||i===void 0?void 0:i.generateMipMaps)!==null&&r!==void 0?r:!1,h.generateStencilBuffer=this._generateStencilBuffer,h.samplingMode=(s=this.texture)===null||s===void 0?void 0:s.samplingMode,h.type=(n=this.texture)===null||n===void 0?void 0:n.type,h.format=(o=this.texture)===null||o===void 0?void 0:o.format,this.isCube)l=this._engine.createRenderTargetCubeTexture(this.width,h);else{let c={width:this.width,height:this.height,layers:this.is2DArray?(d=this.texture)===null||d===void 0?void 0:d.depth:void 0};l=this._engine.createRenderTargetTexture(c,h)}l.texture.isReady=!0}return l}_swapRenderTargetWrapper(t){if(this._textures&&t._textures)for(let e=0;e<this._textures.length;++e)this._textures[e]._swapAndDie(t._textures[e],!1),t._textures[e].isReady=!0;this._depthStencilTexture&&t._depthStencilTexture&&(this._depthStencilTexture._swapAndDie(t._depthStencilTexture),t._depthStencilTexture.isReady=!0),this._textures=null,this._depthStencilTexture=null}_rebuild(){let t=this._cloneRenderTargetWrapper();if(t){if(this._depthStencilTexture){let e=this._depthStencilTexture.samplingMode,i=e===2||e===3||e===11;t.createDepthStencilTexture(this._depthStencilTexture._comparisonFunction,i,this._depthStencilTextureWithStencil,this._depthStencilTexture.samples)}this.samples>1&&t.setSamples(this.samples),t._swapRenderTargetWrapper(this),t.dispose()}}releaseTextures(){var t,e;if(this._textures)for(let i=0;(e=i<((t=this._textures)===null||t===void 0?void 0:t.length))!==null&&e!==void 0&&e;++i)this._textures[i].dispose();this._textures=null}dispose(t=!1){var e;t||((e=this._depthStencilTexture)===null||e===void 0||e.dispose(),this._depthStencilTexture=null,this.releaseTextures()),this._engine._releaseRenderTargetWrapper(this)}},kt=class extends Wt{constructor(t,e,i,r,s){super(t,e,i,r),this._framebuffer=null,this._depthStencilBuffer=null,this._MSAAFramebuffer=null,this._colorTextureArray=null,this._depthStencilTextureArray=null,this._context=s}_cloneRenderTargetWrapper(){let t=null;return this._colorTextureArray&&this._depthStencilTextureArray?(t=this._engine.createMultiviewRenderTargetTexture(this.width,this.height),t.texture.isReady=!0):t=super._cloneRenderTargetWrapper(),t}_swapRenderTargetWrapper(t){super._swapRenderTargetWrapper(t),t._framebuffer=this._framebuffer,t._depthStencilBuffer=this._depthStencilBuffer,t._MSAAFramebuffer=this._MSAAFramebuffer,t._colorTextureArray=this._colorTextureArray,t._depthStencilTextureArray=this._depthStencilTextureArray,this._framebuffer=this._depthStencilBuffer=this._MSAAFramebuffer=this._colorTextureArray=this._depthStencilTextureArray=null}_shareDepth(t){super._shareDepth(t);let e=this._context,i=this._depthStencilBuffer,r=t._MSAAFramebuffer||t._framebuffer;t._depthStencilBuffer&&e.deleteRenderbuffer(t._depthStencilBuffer),t._depthStencilBuffer=this._depthStencilBuffer,this._engine._bindUnboundFramebuffer(r),e.framebufferRenderbuffer(e.FRAMEBUFFER,e.DEPTH_ATTACHMENT,e.RENDERBUFFER,i),this._engine._bindUnboundFramebuffer(null)}_bindTextureRenderTarget(t,e=0,i,r=0){var s,n,o,d;if(!t._hardwareTexture)return;let l=this._framebuffer,h=this._engine._currentFramebuffer;if(this._engine._bindUnboundFramebuffer(l),this._engine.webGLVersion>1){let c=this._context,u=c["COLOR_ATTACHMENT"+e];t.is2DArray||t.is3D?(i=(n=i??((s=this.layerIndices)===null||s===void 0?void 0:s[e]))!==null&&n!==void 0?n:0,c.framebufferTextureLayer(c.FRAMEBUFFER,u,t._hardwareTexture.underlyingResource,r,i)):t.isCube?(i=(d=i??((o=this.faceIndices)===null||o===void 0?void 0:o[e]))!==null&&d!==void 0?d:0,c.framebufferTexture2D(c.FRAMEBUFFER,u,c.TEXTURE_CUBE_MAP_POSITIVE_X+i,t._hardwareTexture.underlyingResource,r)):c.framebufferTexture2D(c.FRAMEBUFFER,u,c.TEXTURE_2D,t._hardwareTexture.underlyingResource,r)}else{let c=this._context,u=c["COLOR_ATTACHMENT"+e+"_WEBGL"],p=i!==void 0?c.TEXTURE_CUBE_MAP_POSITIVE_X+i:c.TEXTURE_2D;c.framebufferTexture2D(c.FRAMEBUFFER,u,p,t._hardwareTexture.underlyingResource,r)}this._engine._bindUnboundFramebuffer(h)}setTexture(t,e=0,i=!0){super.setTexture(t,e,i),this._bindTextureRenderTarget(t,e)}setLayerAndFaceIndices(t,e){var i,r;if(super.setLayerAndFaceIndices(t,e),!this.textures||!this.layerIndices||!this.faceIndices)return;let s=(r=(i=this._attachments)===null||i===void 0?void 0:i.length)!==null&&r!==void 0?r:this.textures.length;for(let n=0;n<s;n++){let o=this.textures[n];o&&(o.is2DArray||o.is3D?this._bindTextureRenderTarget(o,n,this.layerIndices[n]):o.isCube?this._bindTextureRenderTarget(o,n,this.faceIndices[n]):this._bindTextureRenderTarget(o,n))}}setLayerAndFaceIndex(t=0,e,i){if(super.setLayerAndFaceIndex(t,e,i),!this.textures||!this.layerIndices||!this.faceIndices)return;let r=this.textures[t];r.is2DArray||r.is3D?this._bindTextureRenderTarget(this.textures[t],t,this.layerIndices[t]):r.isCube&&this._bindTextureRenderTarget(this.textures[t],t,this.faceIndices[t])}dispose(t=!1){let e=this._context;t||(this._colorTextureArray&&(this._context.deleteTexture(this._colorTextureArray),this._colorTextureArray=null),this._depthStencilTextureArray&&(this._context.deleteTexture(this._depthStencilTextureArray),this._depthStencilTextureArray=null)),this._framebuffer&&(e.deleteFramebuffer(this._framebuffer),this._framebuffer=null),this._depthStencilBuffer&&(e.deleteRenderbuffer(this._depthStencilBuffer),this._depthStencilBuffer=null),this._MSAAFramebuffer&&(e.deleteFramebuffer(this._MSAAFramebuffer),this._MSAAFramebuffer=null),super.dispose(t)}};xe.prototype._createHardwareRenderTargetWrapper=function(a,t,e){let i=new kt(a,t,e,this,this._gl);return this._renderTargetWrapperCache.push(i),i};xe.prototype.createRenderTargetTexture=function(a,t){var e,i;let r=this._createHardwareRenderTargetWrapper(!1,!1,a),s=!0,n=!1,o=!1,d,l=1;t!==void 0&&typeof t=="object"&&(s=(e=t.generateDepthBuffer)!==null&&e!==void 0?e:!0,n=!!t.generateStencilBuffer,o=!!t.noColorAttachment,d=t.colorAttachment,l=(i=t.samples)!==null&&i!==void 0?i:1);let h=d||(o?null:this._createInternalTexture(a,t,!0,Ne.RenderTarget)),c=a.width||a,u=a.height||a,p=this._currentFramebuffer,_=this._gl,v=_.createFramebuffer();return this._bindUnboundFramebuffer(v),r._depthStencilBuffer=this._setupFramebufferDepthAttachments(n,s,c,u),h&&!h.is2DArray&&_.framebufferTexture2D(_.FRAMEBUFFER,_.COLOR_ATTACHMENT0,_.TEXTURE_2D,h._hardwareTexture.underlyingResource,0),this._bindUnboundFramebuffer(p),r._framebuffer=v,r._generateDepthBuffer=s,r._generateStencilBuffer=n,r.setTextures(h),this.updateRenderTargetTextureSampleCount(r,l),r};xe.prototype.createDepthStencilTexture=function(a,t,e){if(t.isCube){let i=a.width||a;return this._createDepthStencilCubeTexture(i,t,e)}else return this._createDepthStencilTexture(a,t,e)};xe.prototype._createDepthStencilTexture=function(a,t,e){let i=this._gl,r=a.layers||0,s=r!==0?i.TEXTURE_2D_ARRAY:i.TEXTURE_2D,n=new wt(this,Ne.DepthStencil);if(!this._caps.depthTextureExtension)return je.Error("Depth texture is not supported by your browser or hardware."),n;let o=Te({bilinearFiltering:!1,comparisonFunction:0,generateStencil:!1},t);if(this._bindTextureDirectly(s,n,!0),this._setupDepthStencilTexture(n,a,o.generateStencil,o.comparisonFunction===0?!1:o.bilinearFiltering,o.comparisonFunction,o.samples),o.depthTextureFormat!==void 0){if(o.depthTextureFormat!==15&&o.depthTextureFormat!==16&&o.depthTextureFormat!==17&&o.depthTextureFormat!==13&&o.depthTextureFormat!==14&&o.depthTextureFormat!==18)return je.Error("Depth texture format is not supported."),n;n.format=o.depthTextureFormat}else n.format=o.generateStencil?13:16;let d=n.format===17||n.format===13||n.format===18;e._depthStencilTexture=n,e._depthStencilTextureWithStencil=d;let l=i.UNSIGNED_INT;n.format===15?l=i.UNSIGNED_SHORT:n.format===17||n.format===13?l=i.UNSIGNED_INT_24_8:n.format===14?l=i.FLOAT:n.format===18&&(l=i.FLOAT_32_UNSIGNED_INT_24_8_REV);let h=d?i.DEPTH_STENCIL:i.DEPTH_COMPONENT,c=h;this.webGLVersion>1&&(n.format===15?c=i.DEPTH_COMPONENT16:n.format===16?c=i.DEPTH_COMPONENT24:n.format===17||n.format===13?c=i.DEPTH24_STENCIL8:n.format===14?c=i.DEPTH_COMPONENT32F:n.format===18&&(c=i.DEPTH32F_STENCIL8)),n.is2DArray?i.texImage3D(s,0,c,n.width,n.height,r,0,h,l,null):i.texImage2D(s,0,c,n.width,n.height,0,h,l,null),this._bindTextureDirectly(s,null),this._internalTexturesCache.push(n);let u=e;if(u._depthStencilBuffer){let p=this._currentFramebuffer;this._bindUnboundFramebuffer(u._framebuffer),i.framebufferRenderbuffer(i.FRAMEBUFFER,i.DEPTH_STENCIL_ATTACHMENT,i.RENDERBUFFER,null),i.framebufferRenderbuffer(i.FRAMEBUFFER,i.DEPTH_ATTACHMENT,i.RENDERBUFFER,null),i.framebufferRenderbuffer(i.FRAMEBUFFER,i.STENCIL_ATTACHMENT,i.RENDERBUFFER,null),this._bindUnboundFramebuffer(p),i.deleteRenderbuffer(u._depthStencilBuffer),u._depthStencilBuffer=null}return n};xe.prototype.updateRenderTargetTextureSampleCount=function(a,t){if(this.webGLVersion<2||!a||!a.texture)return 1;if(a.samples===t)return t;let e=this._gl;t=Math.min(t,this.getCaps().maxMSAASamples),a._depthStencilBuffer&&(e.deleteRenderbuffer(a._depthStencilBuffer),a._depthStencilBuffer=null),a._MSAAFramebuffer&&(e.deleteFramebuffer(a._MSAAFramebuffer),a._MSAAFramebuffer=null);let i=a.texture._hardwareTexture;if(i.releaseMSAARenderBuffers(),t>1&&typeof e.renderbufferStorageMultisample=="function"){let r=e.createFramebuffer();if(!r)throw new Error("Unable to create multi sampled framebuffer");a._MSAAFramebuffer=r,this._bindUnboundFramebuffer(a._MSAAFramebuffer);let s=this._createRenderBuffer(a.texture.width,a.texture.height,t,-1,this._getRGBAMultiSampleBufferFormat(a.texture.type),e.COLOR_ATTACHMENT0,!1);if(!s)throw new Error("Unable to create multi sampled framebuffer");i.addMSAARenderBuffer(s)}else this._bindUnboundFramebuffer(a._framebuffer);return a.texture.samples=t,a._samples=t,a._depthStencilBuffer=this._setupFramebufferDepthAttachments(a._generateStencilBuffer,a._generateDepthBuffer,a.texture.width,a.texture.height,t),this._bindUnboundFramebuffer(null),t};xe.prototype.createRenderTargetCubeTexture=function(a,t){let e=this._createHardwareRenderTargetWrapper(!1,!0,a),i=Te({generateMipMaps:!0,generateDepthBuffer:!0,generateStencilBuffer:!1,type:0,samplingMode:3,format:5},t);i.generateStencilBuffer=i.generateDepthBuffer&&i.generateStencilBuffer,(i.type===1&&!this._caps.textureFloatLinearFiltering||i.type===2&&!this._caps.textureHalfFloatLinearFiltering)&&(i.samplingMode=1);let r=this._gl,s=new wt(this,Ne.RenderTarget);this._bindTextureDirectly(r.TEXTURE_CUBE_MAP,s,!0);let n=this._getSamplingParameters(i.samplingMode,i.generateMipMaps);i.type===1&&!this._caps.textureFloat&&(i.type=0,je.Warn("Float textures are not supported. Cube render target forced to TEXTURETYPE_UNESIGNED_BYTE type")),r.texParameteri(r.TEXTURE_CUBE_MAP,r.TEXTURE_MAG_FILTER,n.mag),r.texParameteri(r.TEXTURE_CUBE_MAP,r.TEXTURE_MIN_FILTER,n.min),r.texParameteri(r.TEXTURE_CUBE_MAP,r.TEXTURE_WRAP_S,r.CLAMP_TO_EDGE),r.texParameteri(r.TEXTURE_CUBE_MAP,r.TEXTURE_WRAP_T,r.CLAMP_TO_EDGE);for(let d=0;d<6;d++)r.texImage2D(r.TEXTURE_CUBE_MAP_POSITIVE_X+d,0,this._getRGBABufferInternalSizedFormat(i.type,i.format),a,a,0,this._getInternalFormat(i.format),this._getWebGLTextureType(i.type),null);let o=r.createFramebuffer();return this._bindUnboundFramebuffer(o),e._depthStencilBuffer=this._setupFramebufferDepthAttachments(i.generateStencilBuffer,i.generateDepthBuffer,a,a),i.generateMipMaps&&r.generateMipmap(r.TEXTURE_CUBE_MAP),this._bindTextureDirectly(r.TEXTURE_CUBE_MAP,null),this._bindUnboundFramebuffer(null),e._framebuffer=o,e._generateDepthBuffer=i.generateDepthBuffer,e._generateStencilBuffer=i.generateStencilBuffer,s.width=a,s.height=a,s.isReady=!0,s.isCube=!0,s.samples=1,s.generateMipMaps=i.generateMipMaps,s.samplingMode=i.samplingMode,s.type=i.type,s.format=i.format,this._internalTexturesCache.push(s),e.setTextures(s),e};var Bi="postprocessVertexShader",Vi=`attribute vec2 position;
uniform vec2 scale;
varying vec2 vUV;
const vec2 madd=vec2(0.5,0.5);
#define CUSTOM_VERTEX_DEFINITIONS
void main(void) {
#define CUSTOM_VERTEX_MAIN_BEGIN
vUV=(position*madd+madd)*scale;
gl_Position=vec4(position,0.0,1.0);
#define CUSTOM_VERTEX_MAIN_END
}`;E.ShadersStore[Bi]=Vi;var Ut={positions:[1,1,-1,1,-1,-1,1,-1],indices:[0,1,2,0,2,3]},Gt=class{constructor(t,e=Ut){var i,r;this._fullscreenViewport=new gi(0,0,1,1);let s=(i=e.positions)!==null&&i!==void 0?i:Ut.positions,n=(r=e.indices)!==null&&r!==void 0?r:Ut.indices;this.engine=t,this._vertexBuffers={[y.PositionKind]:new y(t,s,y.PositionKind,!1,!1,2)},this._indexBuffer=t.createIndexBuffer(n),this._onContextRestoredObserver=t.onContextRestoredObservable.add(()=>{this._indexBuffer=t.createIndexBuffer(n);for(let o in this._vertexBuffers)this._vertexBuffers[o]._rebuild()})}setViewport(t=this._fullscreenViewport){this.engine.setViewport(t)}bindBuffers(t){this.engine.bindBuffers(this._vertexBuffers,this._indexBuffer,t)}applyEffectWrapper(t){this.engine.setState(!0),this.engine.depthCullingState.depthTest=!1,this.engine.stencilState.stencilTest=!1,this.engine.enableEffect(t._drawWrapper),this.bindBuffers(t.effect),t.onApplyObservable.notifyObservers({})}restoreStates(){this.engine.depthCullingState.depthTest=!0,this.engine.stencilState.stencilTest=!0}draw(){this.engine.drawElementsType(0,0,6)}_isRenderTargetTexture(t){return t.renderTarget!==void 0}render(t,e=null){if(!t.effect.isReady())return;this.setViewport();let i=e===null?null:this._isRenderTargetTexture(e)?e.renderTarget:e;i&&this.engine.bindFramebuffer(i),this.applyEffectWrapper(t),this.draw(),i&&this.engine.unBindFramebuffer(i),this.restoreStates()}dispose(){let t=this._vertexBuffers[y.PositionKind];t&&(t.dispose(),delete this._vertexBuffers[y.PositionKind]),this._indexBuffer&&this.engine._releaseBuffer(this._indexBuffer),this._onContextRestoredObserver&&(this.engine.onContextRestoredObservable.remove(this._onContextRestoredObserver),this._onContextRestoredObserver=null)}},Ht=class{get effect(){return this._drawWrapper.effect}set effect(t){this._drawWrapper.effect=t}constructor(t){this.onApplyObservable=new k;let e,i=t.uniformNames||[];t.vertexShader?e={fragmentSource:t.fragmentShader,vertexSource:t.vertexShader,spectorName:t.name||"effectWrapper"}:(i.push("scale"),e={fragmentSource:t.fragmentShader,vertex:"postprocess",spectorName:t.name||"effectWrapper"},this.onApplyObservable.add(()=>{this.effect.setFloat2("scale",1,1)}));let r=t.defines?t.defines.join(`
`):"";this._drawWrapper=new pt(t.engine),t.useShaderStore?(e.fragment=e.fragmentSource,e.vertex||(e.vertex=e.vertexSource),delete e.fragmentSource,delete e.vertexSource,this.effect=t.engine.createEffect(e,t.attributeNames||["position"],i,t.samplerNames,r,void 0,t.onCompiled,void 0,void 0,t.shaderLanguage)):(this.effect=new ue(e,t.attributeNames||["position"],i,t.samplerNames,t.engine,r,void 0,t.onCompiled,void 0,void 0,void 0,t.shaderLanguage),this._onContextRestoredObserver=t.engine.onContextRestoredObservable.add(()=>{this.effect._pipelineContext=null,this.effect._wasPreviouslyReady=!1,this.effect._prepareEffect()}))}dispose(){this._onContextRestoredObserver&&(this.effect.getEngine().onContextRestoredObservable.remove(this._onContextRestoredObserver),this._onContextRestoredObserver=null),this.effect.dispose()}},Ii="passPixelShader",Ri=`varying vec2 vUV;
uniform sampler2D textureSampler;
#define CUSTOM_FRAGMENT_DEFINITIONS
void main(void) 
{
gl_FragColor=texture2D(textureSampler,vUV);
}`;E.ShadersStore[Ii]=Ri;var Ti={name:Ii,shader:Ri},Ge=class a{static _CreateDumpRenderer(){if(!a._DumpToolsEngine){let t=document.createElement("canvas"),e=new xe(t,!1,{preserveDrawingBuffer:!0,depth:!1,stencil:!1,alpha:!0,premultipliedAlpha:!1,antialias:!1,failIfMajorPerformanceCaveat:!1});e.getCaps().parallelShaderCompile=void 0;let i=new Gt(e),r=new Ht({engine:e,name:Ti.name,fragmentShader:Ti.shader,samplerNames:["textureSampler"]});a._DumpToolsEngine={canvas:t,engine:e,renderer:i,wrapper:r}}return a._DumpToolsEngine}static DumpFramebuffer(t,e,i,r,s="image/png",n){return ae(this,null,function*(){let o=yield i.readPixels(0,0,t,e),d=new Uint8Array(o.buffer);a.DumpData(t,e,d,r,s,n,!0)})}static DumpDataAsync(t,e,i,r="image/png",s,n=!1,o=!1,d){return new Promise(l=>{a.DumpData(t,e,i,h=>l(h),r,s,n,o,d)})}static DumpData(t,e,i,r,s="image/png",n,o=!1,d=!1,l){let h=a._CreateDumpRenderer();if(h.engine.setSize(t,e,!0),i instanceof Float32Array){let u=new Uint8Array(i.length),p=i.length;for(;p--;){let _=i[p];u[p]=_<0?0:_>1?1:Math.round(_*255)}i=u}let c=h.engine.createRawTexture(i,t,e,5,!1,!o,1);h.renderer.setViewport(),h.renderer.applyEffectWrapper(h.wrapper),h.wrapper.effect._bindTexture("textureSampler",c),h.renderer.draw(),d?ye.ToBlob(h.canvas,u=>{let p=new FileReader;p.onload=_=>{let v=_.target.result;r&&r(v)},p.readAsArrayBuffer(u)},s,l):ye.EncodeScreenshotCanvasData(h.canvas,r,s,n,l),c.dispose()}static Dispose(){a._DumpToolsEngine&&(a._DumpToolsEngine.wrapper.dispose(),a._DumpToolsEngine.renderer.dispose(),a._DumpToolsEngine.engine.dispose()),a._DumpToolsEngine=null}},Xi=()=>{ye.DumpData=Ge.DumpData,ye.DumpDataAsync=Ge.DumpDataAsync,ye.DumpFramebuffer=Ge.DumpFramebuffer};Xi();var He=(()=>{class a extends T{get renderList(){return this._renderList}set renderList(e){this._unObserveRenderList&&(this._unObserveRenderList(),this._unObserveRenderList=null),e&&(this._unObserveRenderList=hi(e,this._renderListHasChanged)),this._renderList=e}get postProcesses(){return this._postProcesses}get _prePassEnabled(){return!!this._prePassRenderTarget&&this._prePassRenderTarget.enabled}set onAfterUnbind(e){this._onAfterUnbindObserver&&this.onAfterUnbindObservable.remove(this._onAfterUnbindObserver),this._onAfterUnbindObserver=this.onAfterUnbindObservable.add(e)}set onBeforeRender(e){this._onBeforeRenderObserver&&this.onBeforeRenderObservable.remove(this._onBeforeRenderObserver),this._onBeforeRenderObserver=this.onBeforeRenderObservable.add(e)}set onAfterRender(e){this._onAfterRenderObserver&&this.onAfterRenderObservable.remove(this._onAfterRenderObserver),this._onAfterRenderObserver=this.onAfterRenderObservable.add(e)}set onClear(e){this._onClearObserver&&this.onClearObservable.remove(this._onClearObserver),this._onClearObserver=this.onClearObservable.add(e)}get renderPassIds(){return this._renderPassIds}get currentRefreshId(){return this._currentRefreshId}setMaterialForRendering(e,i){let r;Array.isArray(e)?r=e:r=[e];for(let s=0;s<r.length;++s)for(let n=0;n<this._renderPassIds.length;++n)r[s].setMaterialForRenderPass(this._renderPassIds[n],i!==void 0?Array.isArray(i)?i[n]:i:void 0)}get isMulti(){var e,i;return(i=(e=this._renderTarget)===null||e===void 0?void 0:e.isMulti)!==null&&i!==void 0?i:!1}get renderTargetOptions(){return this._renderTargetOptions}get renderTarget(){return this._renderTarget}_onRatioRescale(){this._sizeRatio&&this.resize(this._initialSizeParameter)}set boundingBoxSize(e){if(this._boundingBoxSize&&this._boundingBoxSize.equals(e))return;this._boundingBoxSize=e;let i=this.getScene();i&&i.markAllMaterialsAsDirty(1)}get boundingBoxSize(){return this._boundingBoxSize}get depthStencilTexture(){var e,i;return(i=(e=this._renderTarget)===null||e===void 0?void 0:e._depthStencilTexture)!==null&&i!==void 0?i:null}constructor(e,i,r,s=!1,n=!0,o=0,d=!1,l=T.TRILINEAR_SAMPLINGMODE,h=!0,c=!1,u=!1,p=5,_=!1,v,m,A=!1,S=!1){var C,L,N,R,U,D;let F;if(typeof s=="object"){let B=s;s=!!B.generateMipMaps,n=(C=B.doNotChangeAspectRatio)!==null&&C!==void 0?C:!0,o=(L=B.type)!==null&&L!==void 0?L:0,d=!!B.isCube,l=(N=B.samplingMode)!==null&&N!==void 0?N:T.TRILINEAR_SAMPLINGMODE,h=(R=B.generateDepthBuffer)!==null&&R!==void 0?R:!0,c=!!B.generateStencilBuffer,u=!!B.isMulti,p=(U=B.format)!==null&&U!==void 0?U:5,_=!!B.delayAllocation,v=B.samples,m=B.creationFlags,A=!!B.noColorAttachment,S=!!B.useSRGBBuffer,F=B.colorAttachment}if(super(null,r,!s,void 0,l,void 0,void 0,void 0,void 0,p),this._unObserveRenderList=null,this._renderListHasChanged=(B,Ie)=>{var z;let ee=this._renderList?this._renderList.length:0;(Ie===0&&ee>0||ee===0)&&((z=this.getScene())===null||z===void 0||z.meshes.forEach(te=>{te._markSubMeshesAsLightDirty()}))},this.renderParticles=!0,this.renderSprites=!1,this.forceLayerMaskCheck=!1,this.ignoreCameraViewport=!1,this.onBeforeBindObservable=new k,this.onAfterUnbindObservable=new k,this.onBeforeRenderObservable=new k,this.onAfterRenderObservable=new k,this.onClearObservable=new k,this.onResizeObservable=new k,this._cleared=!1,this.skipInitialClear=!1,this._currentRefreshId=-1,this._refreshRate=1,this._samples=1,this._canRescale=!0,this._renderTarget=null,this.boundingBoxPosition=x.Zero(),r=this.getScene(),!r)return;let he=this.getScene().getEngine();this._coordinatesMode=T.PROJECTION_MODE,this.renderList=new Array,this.name=e,this.isRenderTarget=!0,this._initialSizeParameter=i,this._renderPassIds=[],this._isCubeData=d,this._processSizeParameter(i),this.renderPassId=this._renderPassIds[0],this._resizeObserver=he.onResizeObservable.add(()=>{}),this._generateMipMaps=!!s,this._doNotChangeAspectRatio=n,this._renderingManager=new vt(r),this._renderingManager._useSceneAutoClearSetup=!0,!u&&(this._renderTargetOptions={generateMipMaps:s,type:o,format:(D=this._format)!==null&&D!==void 0?D:void 0,samplingMode:this.samplingMode,generateDepthBuffer:h,generateStencilBuffer:c,samples:v,creationFlags:m,noColorAttachment:A,useSRGBBuffer:S,colorAttachment:F,label:this.name},this.samplingMode===T.NEAREST_SAMPLINGMODE&&(this.wrapU=T.CLAMP_ADDRESSMODE,this.wrapV=T.CLAMP_ADDRESSMODE),_||(d?(this._renderTarget=r.getEngine().createRenderTargetCubeTexture(this.getRenderSize(),this._renderTargetOptions),this.coordinatesMode=T.INVCUBIC_MODE,this._textureMatrix=P.Identity()):this._renderTarget=r.getEngine().createRenderTargetTexture(this._size,this._renderTargetOptions),this._texture=this._renderTarget.texture,v!==void 0&&(this.samples=v)))}createDepthStencilTexture(e=0,i=!0,r=!1,s=1,n=14){var o;(o=this._renderTarget)===null||o===void 0||o.createDepthStencilTexture(e,i,r,s,n)}_releaseRenderPassId(){if(this._scene){let e=this._scene.getEngine();for(let i=0;i<this._renderPassIds.length;++i)e.releaseRenderPassId(this._renderPassIds[i])}this._renderPassIds=[]}_createRenderPassId(){this._releaseRenderPassId();let e=this._scene.getEngine(),i=this._isCubeData?6:this.getRenderLayers()||1;for(let r=0;r<i;++r)this._renderPassIds[r]=e.createRenderPassId(`RenderTargetTexture - ${this.name}#${r}`)}_processSizeParameter(e){if(e.ratio){this._sizeRatio=e.ratio;let i=this._getEngine();this._size={width:this._bestReflectionRenderTargetDimension(i.getRenderWidth(),this._sizeRatio),height:this._bestReflectionRenderTargetDimension(i.getRenderHeight(),this._sizeRatio)}}else this._size=e;this._createRenderPassId()}get samples(){var e,i;return(i=(e=this._renderTarget)===null||e===void 0?void 0:e.samples)!==null&&i!==void 0?i:this._samples}set samples(e){this._renderTarget&&(this._samples=this._renderTarget.setSamples(e))}resetRefreshCounter(){this._currentRefreshId=-1}get refreshRate(){return this._refreshRate}set refreshRate(e){this._refreshRate=e,this.resetRefreshCounter()}addPostProcess(e){if(!this._postProcessManager){let i=this.getScene();if(!i)return;this._postProcessManager=new Ft(i),this._postProcesses=new Array}this._postProcesses.push(e),this._postProcesses[0].autoClear=!1}clearPostProcesses(e=!1){if(this._postProcesses){if(e)for(let i of this._postProcesses)i.dispose();this._postProcesses=[]}}removePostProcess(e){if(!this._postProcesses)return;let i=this._postProcesses.indexOf(e);i!==-1&&(this._postProcesses.splice(i,1),this._postProcesses.length>0&&(this._postProcesses[0].autoClear=!1))}_shouldRender(){return this._currentRefreshId===-1?(this._currentRefreshId=1,!0):this.refreshRate===this._currentRefreshId?(this._currentRefreshId=1,!0):(this._currentRefreshId++,!1)}getRenderSize(){return this.getRenderWidth()}getRenderWidth(){return this._size.width?this._size.width:this._size}getRenderHeight(){return this._size.width?this._size.height:this._size}getRenderLayers(){return this._size.layers||0}disableRescaling(){this._canRescale=!1}get canRescale(){return this._canRescale}scale(e){let i=Math.max(1,this.getRenderSize()*e);this.resize(i)}getReflectionTextureMatrix(){return this.isCube?this._textureMatrix:super.getReflectionTextureMatrix()}resize(e){var i;let r=this.isCube;(i=this._renderTarget)===null||i===void 0||i.dispose(),this._renderTarget=null;let s=this.getScene();s&&(this._processSizeParameter(e),r?this._renderTarget=s.getEngine().createRenderTargetCubeTexture(this.getRenderSize(),this._renderTargetOptions):this._renderTarget=s.getEngine().createRenderTargetTexture(this._size,this._renderTargetOptions),this._texture=this._renderTarget.texture,this._renderTargetOptions.samples!==void 0&&(this.samples=this._renderTargetOptions.samples),this.onResizeObservable.hasObservers()&&this.onResizeObservable.notifyObservers(this))}render(e=!1,i=!1){this._render(e,i)}isReadyForRendering(){return this._render(!1,!1,!0)}_render(e=!1,i=!1,r=!1){var s;let n=this.getScene();if(!n)return r;let o=n.getEngine();if(this.useCameraPostProcesses!==void 0&&(e=this.useCameraPostProcesses),this._waitingRenderList){this.renderList=[];for(let u=0;u<this._waitingRenderList.length;u++){let p=this._waitingRenderList[u],_=n.getMeshById(p);_&&this.renderList.push(_)}this._waitingRenderList=void 0}if(this.renderListPredicate){this.renderList?this.renderList.length=0:this.renderList=[];let u=this.getScene();if(!u)return r;let p=u.meshes;for(let _=0;_<p.length;_++){let v=p[_];this.renderListPredicate(v)&&this.renderList.push(v)}}let d=o.currentRenderPassId;this.onBeforeBindObservable.notifyObservers(this);let l=(s=this.activeCamera)!==null&&s!==void 0?s:n.activeCamera,h=n.activeCamera;l&&(l!==n.activeCamera&&(n.setTransformMatrix(l.getViewMatrix(),l.getProjectionMatrix(!0)),n.activeCamera=l),o.setViewport(l.viewport,this.getRenderWidth(),this.getRenderHeight())),this._defaultRenderListPrepared=!1;let c=r;if(r){n.getViewMatrix()||n.updateTransformMatrix();let u=this.is2DArray?this.getRenderLayers():this.isCube?6:1;for(let p=0;p<u&&c;p++){let _=null,v=this.renderList?this.renderList:n.getActiveMeshes().data,m=this.renderList?this.renderList.length:n.getActiveMeshes().length;o.currentRenderPassId=this._renderPassIds[p],this.onBeforeRenderObservable.notifyObservers(p),this.getCustomRenderList&&(_=this.getCustomRenderList(p,v,m)),_||(_=v),this._doNotChangeAspectRatio||n.updateTransformMatrix(!0);for(let A=0;A<_.length&&c;++A){let S=_[A];if(!(!S.isEnabled()||S.isBlocked||!S.isVisible||!S.subMeshes)){if(this.customIsReadyFunction){if(!this.customIsReadyFunction(S,this.refreshRate,r)){c=!1;continue}}else if(!S.isReady(!0)){c=!1;continue}}}this.onAfterRenderObservable.notifyObservers(p),(this.is2DArray||this.isCube)&&(n.incrementRenderId(),n.resetCachedMaterial())}}else if(this.is2DArray&&!this.isMulti)for(let u=0;u<this.getRenderLayers();u++)this._renderToTarget(0,e,i,u,l),n.incrementRenderId(),n.resetCachedMaterial();else if(this.isCube&&!this.isMulti)for(let u=0;u<6;u++)this._renderToTarget(u,e,i,void 0,l),n.incrementRenderId(),n.resetCachedMaterial();else this._renderToTarget(0,e,i,void 0,l);return this.onAfterUnbindObservable.notifyObservers(this),o.currentRenderPassId=d,h&&(n.activeCamera=h,(n.getEngine().scenes.length>1||this.activeCamera&&this.activeCamera!==n.activeCamera)&&n.setTransformMatrix(n.activeCamera.getViewMatrix(),n.activeCamera.getProjectionMatrix(!0)),o.setViewport(n.activeCamera.viewport)),n.resetCachedMaterial(),c}_bestReflectionRenderTargetDimension(e,i){let r=e*i,s=V.NearestPOT(r+128*128/(128+r));return Math.min(V.FloorPOT(e),s)}_prepareRenderingManager(e,i,r,s){let n=this.getScene();if(!n)return;this._renderingManager.reset();let o=n.getRenderId();for(let d=0;d<i;d++){let l=e[d];if(l&&!l.isBlocked){if(this.customIsReadyFunction){if(!this.customIsReadyFunction(l,this.refreshRate,!1)){this.resetRefreshCounter();continue}}else if(!l.isReady(this.refreshRate===0)){this.resetRefreshCounter();continue}if(!l._internalAbstractMeshDataInfo._currentLODIsUpToDate&&n.activeCamera&&(l._internalAbstractMeshDataInfo._currentLOD=n.customLODSelector?n.customLODSelector(l,this.activeCamera||n.activeCamera):l.getLOD(this.activeCamera||n.activeCamera),l._internalAbstractMeshDataInfo._currentLODIsUpToDate=!0),!l._internalAbstractMeshDataInfo._currentLOD)continue;let h=l._internalAbstractMeshDataInfo._currentLOD;h._preActivateForIntermediateRendering(o);let c;if(s&&r?c=(l.layerMask&r.layerMask)===0:c=!1,l.isEnabled()&&l.isVisible&&l.subMeshes&&!c&&(h!==l&&h._activate(o,!0),l._activate(o,!0)&&l.subMeshes.length)){l.isAnInstance?l._internalAbstractMeshDataInfo._actAsRegularMesh&&(h=l):h._internalAbstractMeshDataInfo._onlyForInstancesIntermediate=!1,h._internalAbstractMeshDataInfo._isActiveIntermediate=!0;for(let u=0;u<h.subMeshes.length;u++){let p=h.subMeshes[u];this._renderingManager.dispatch(p,h)}}}}for(let d=0;d<n.particleSystems.length;d++){let l=n.particleSystems[d],h=l.emitter;!l.isStarted()||!h||h.position&&!h.isEnabled()||this._renderingManager.dispatchParticles(l)}}_bindFrameBuffer(e=0,i=0){let r=this.getScene();if(!r)return;let s=r.getEngine();this._renderTarget&&s.bindFramebuffer(this._renderTarget,this.isCube?e:void 0,void 0,void 0,this.ignoreCameraViewport,0,i)}_unbindFrameBuffer(e,i){this._renderTarget&&e.unBindFramebuffer(this._renderTarget,this.isCube,()=>{this.onAfterRenderObservable.notifyObservers(i)})}_prepareFrame(e,i,r,s){this._postProcessManager?this._prePassEnabled||this._postProcessManager._prepareFrame(this._texture,this._postProcesses):(!s||!e.postProcessManager._prepareFrame(this._texture))&&this._bindFrameBuffer(i,r)}_renderToTarget(e,i,r,s=0,n=null){var o,d,l,h,c,u;let p=this.getScene();if(!p)return;let _=p.getEngine();if((o=_._debugPushGroup)===null||o===void 0||o.call(_,`render to face #${e} layer #${s}`,1),this._prepareFrame(p,e,s,i),this.is2DArray?(_.currentRenderPassId=this._renderPassIds[s],this.onBeforeRenderObservable.notifyObservers(s)):(_.currentRenderPassId=this._renderPassIds[e],this.onBeforeRenderObservable.notifyObservers(e)),_.snapshotRendering&&_.snapshotRenderingMode===1)this.onClearObservable.hasObservers()?this.onClearObservable.notifyObservers(_):this.skipInitialClear||_.clear(this.clearColor||p.clearColor,!0,!0,!0);else{let v=null,m=this.renderList?this.renderList:p.getActiveMeshes().data,A=this.renderList?this.renderList.length:p.getActiveMeshes().length;this.getCustomRenderList&&(v=this.getCustomRenderList(this.is2DArray?s:e,m,A)),v?this._prepareRenderingManager(v,v.length,n,this.forceLayerMaskCheck):(this._defaultRenderListPrepared||(this._prepareRenderingManager(m,A,n,!this.renderList||this.forceLayerMaskCheck),this._defaultRenderListPrepared=!0),v=m);for(let C of p._beforeRenderTargetClearStage)C.action(this,e,s);this.onClearObservable.hasObservers()?this.onClearObservable.notifyObservers(_):this.skipInitialClear||_.clear(this.clearColor||p.clearColor,!0,!0,!0),this._doNotChangeAspectRatio||p.updateTransformMatrix(!0);for(let C of p._beforeRenderTargetDrawStage)C.action(this,e,s);this._renderingManager.render(this.customRenderFunction,v,this.renderParticles,this.renderSprites);for(let C of p._afterRenderTargetDrawStage)C.action(this,e,s);let S=(l=(d=this._texture)===null||d===void 0?void 0:d.generateMipMaps)!==null&&l!==void 0?l:!1;this._texture&&(this._texture.generateMipMaps=!1),this._postProcessManager?this._postProcessManager._finalizeFrame(!1,(h=this._renderTarget)!==null&&h!==void 0?h:void 0,e,this._postProcesses,this.ignoreCameraViewport):i&&p.postProcessManager._finalizeFrame(!1,(c=this._renderTarget)!==null&&c!==void 0?c:void 0,e);for(let C of p._afterRenderTargetPostProcessStage)C.action(this,e,s);this._texture&&(this._texture.generateMipMaps=S),this._doNotChangeAspectRatio||p.updateTransformMatrix(!0),r&&Ge.DumpFramebuffer(this.getRenderWidth(),this.getRenderHeight(),_)}this._unbindFrameBuffer(_,e),this._texture&&this.isCube&&e===5&&_.generateMipMapsForCubemap(this._texture),(u=_._debugPopGroup)===null||u===void 0||u.call(_,1)}setRenderingOrder(e,i=null,r=null,s=null){this._renderingManager.setRenderingOrder(e,i,r,s)}setRenderingAutoClearDepthStencil(e,i){this._renderingManager.setRenderingAutoClearDepthStencil(e,i),this._renderingManager._useSceneAutoClearSetup=!1}clone(){let e=this.getSize(),i=new a(this.name,e,this.getScene(),this._renderTargetOptions.generateMipMaps,this._doNotChangeAspectRatio,this._renderTargetOptions.type,this.isCube,this._renderTargetOptions.samplingMode,this._renderTargetOptions.generateDepthBuffer,this._renderTargetOptions.generateStencilBuffer,void 0,this._renderTargetOptions.format,void 0,this._renderTargetOptions.samples);return i.hasAlpha=this.hasAlpha,i.level=this.level,i.coordinatesMode=this.coordinatesMode,this.renderList&&(i.renderList=this.renderList.slice(0)),i}serialize(){if(!this.name)return null;let e=super.serialize();if(e.renderTargetSize=this.getRenderSize(),e.renderList=[],this.renderList)for(let i=0;i<this.renderList.length;i++)e.renderList.push(this.renderList[i].id);return e}disposeFramebufferObjects(){var e;(e=this._renderTarget)===null||e===void 0||e.dispose(!0)}releaseInternalTexture(){var e;(e=this._renderTarget)===null||e===void 0||e.releaseTextures(),this._texture=null}dispose(){var e;this.onResizeObservable.clear(),this.onClearObservable.clear(),this.onAfterRenderObservable.clear(),this.onAfterUnbindObservable.clear(),this.onBeforeBindObservable.clear(),this.onBeforeRenderObservable.clear(),this._postProcessManager&&(this._postProcessManager.dispose(),this._postProcessManager=null),this._prePassRenderTarget&&this._prePassRenderTarget.dispose(),this._releaseRenderPassId(),this.clearPostProcesses(!0),this._resizeObserver&&(this.getScene().getEngine().onResizeObservable.remove(this._resizeObserver),this._resizeObserver=null),this.renderList=null;let i=this.getScene();if(!i)return;let r=i.customRenderTargets.indexOf(this);r>=0&&i.customRenderTargets.splice(r,1);for(let s of i.cameras)r=s.customRenderTargets.indexOf(this),r>=0&&s.customRenderTargets.splice(r,1);(e=this._renderTarget)===null||e===void 0||e.dispose(),this._renderTarget=null,this._texture=null,super.dispose()}_rebuild(){this.refreshRate===a.REFRESHRATE_RENDER_ONCE&&(this.refreshRate=a.REFRESHRATE_RENDER_ONCE),this._postProcessManager&&this._postProcessManager._rebuild()}freeRenderingGroups(){this._renderingManager&&this._renderingManager.freeRenderingGroups()}getViewCount(){return 1}}return a.REFRESHRATE_RENDER_ONCE=0,a.REFRESHRATE_RENDER_ONEVERYFRAME=1,a.REFRESHRATE_RENDER_ONEVERYTWOFRAMES=2,a})();T._CreateRenderTargetTexture=(a,t,e,i,r)=>new He(a,t,e,i);var Y=(()=>{class a{static RegisterShaderCodeProcessing(e,i){if(!i){delete a._CustomShaderCodeProcessing[e??""];return}a._CustomShaderCodeProcessing[e??""]=i}static _GetShaderCodeProcessing(e){var i;return(i=a._CustomShaderCodeProcessing[e])!==null&&i!==void 0?i:a._CustomShaderCodeProcessing[""]}get samples(){return this._samples}set samples(e){this._samples=Math.min(e,this._engine.getCaps().maxMSAASamples),this._textures.forEach(i=>{i.setSamples(this._samples)})}getEffectName(){return this._fragmentUrl}set onActivate(e){this._onActivateObserver&&this.onActivateObservable.remove(this._onActivateObserver),e&&(this._onActivateObserver=this.onActivateObservable.add(e))}set onSizeChanged(e){this._onSizeChangedObserver&&this.onSizeChangedObservable.remove(this._onSizeChangedObserver),this._onSizeChangedObserver=this.onSizeChangedObservable.add(e)}set onApply(e){this._onApplyObserver&&this.onApplyObservable.remove(this._onApplyObserver),this._onApplyObserver=this.onApplyObservable.add(e)}set onBeforeRender(e){this._onBeforeRenderObserver&&this.onBeforeRenderObservable.remove(this._onBeforeRenderObserver),this._onBeforeRenderObserver=this.onBeforeRenderObservable.add(e)}set onAfterRender(e){this._onAfterRenderObserver&&this.onAfterRenderObservable.remove(this._onAfterRenderObserver),this._onAfterRenderObserver=this.onAfterRenderObservable.add(e)}get inputTexture(){return this._textures.data[this._currentRenderTextureInd]}set inputTexture(e){this._forcedOutputTexture=e}restoreDefaultInputTexture(){this._forcedOutputTexture&&(this._forcedOutputTexture=null,this.markTextureDirty())}getCamera(){return this._camera}get texelSize(){return this._shareOutputWithPostProcess?this._shareOutputWithPostProcess.texelSize:(this._forcedOutputTexture&&this._texelSize.copyFromFloats(1/this._forcedOutputTexture.width,1/this._forcedOutputTexture.height),this._texelSize)}constructor(e,i,r,s,n,o,d=1,l,h,c=null,u=0,p="postprocess",_,v=!1,m=5,A=ni.GLSL){this._parentContainer=null,this.width=-1,this.height=-1,this.nodeMaterialSource=null,this._outputTexture=null,this.autoClear=!0,this.forceAutoClearInAlphaMode=!1,this.alphaMode=0,this.animations=new Array,this.enablePixelPerfectMode=!1,this.forceFullscreenViewport=!0,this.scaleMode=1,this.alwaysForcePOT=!1,this._samples=1,this.adaptScaleToCurrentViewport=!1,this._reusable=!1,this._renderId=0,this.externalTextureSamplerBinding=!1,this._textures=new _t(2),this._textureCache=[],this._currentRenderTextureInd=0,this._scaleRatio=new Ue(1,1),this._texelSize=Ue.Zero(),this.onActivateObservable=new k,this.onSizeChangedObservable=new k,this.onApplyObservable=new k,this.onBeforeRenderObservable=new k,this.onAfterRenderObservable=new k,this.name=e,o!=null?(this._camera=o,this._scene=o.getScene(),o.attachPostProcess(this),this._engine=this._scene.getEngine(),this._scene.postProcesses.push(this),this.uniqueId=this._scene.getUniqueId()):l&&(this._engine=l,this._engine.postProcesses.push(this)),this._options=n,this.renderTargetSamplingMode=d||1,this._reusable=h||!1,this._textureType=u,this._textureFormat=m,this._shaderLanguage=A,this._samplers=s||[],this._samplers.push("textureSampler"),this._fragmentUrl=i,this._vertexUrl=p,this._parameters=r||[],this._parameters.push("scale"),this._indexParameters=_,this._drawWrapper=new pt(this._engine),v||this.updateEffect(c)}getClassName(){return"PostProcess"}getEngine(){return this._engine}getEffect(){return this._drawWrapper.effect}shareOutputWith(e){return this._disposeTextures(),this._shareOutputWithPostProcess=e,this}useOwnOutput(){this._textures.length==0&&(this._textures=new _t(2)),this._shareOutputWithPostProcess=null}updateEffect(e=null,i=null,r=null,s,n,o,d,l){var h,c;let u=a._GetShaderCodeProcessing(this.name);if(u!=null&&u.defineCustomBindings){let p=(h=i?.slice())!==null&&h!==void 0?h:[];p.push(...this._parameters);let _=(c=r?.slice())!==null&&c!==void 0?c:[];_.push(...this._samplers),e=u.defineCustomBindings(this.name,e,p,_),i=p,r=_}this._postProcessDefines=e,this._drawWrapper.effect=this._engine.createEffect({vertex:d??this._vertexUrl,fragment:l??this._fragmentUrl},{attributes:["position"],uniformsNames:i||this._parameters,uniformBuffersNames:[],samplers:r||this._samplers,defines:e!==null?e:"",fallbacks:null,onCompiled:n??null,onError:o??null,indexParameters:s||this._indexParameters,processCodeAfterIncludes:u!=null&&u.processCodeAfterIncludes?(p,_)=>u.processCodeAfterIncludes(this.name,p,_):null,processFinalCode:u!=null&&u.processFinalCode?(p,_)=>u.processFinalCode(this.name,p,_):null,shaderLanguage:this._shaderLanguage},this._engine)}isReusable(){return this._reusable}markTextureDirty(){this.width=-1}_createRenderTargetTexture(e,i,r=0){for(let n=0;n<this._textureCache.length;n++)if(this._textureCache[n].texture.width===e.width&&this._textureCache[n].texture.height===e.height&&this._textureCache[n].postProcessChannel===r&&this._textureCache[n].texture._generateDepthBuffer===i.generateDepthBuffer&&this._textureCache[n].texture.samples===i.samples)return this._textureCache[n].texture;let s=this._engine.createRenderTargetTexture(e,i);return this._textureCache.push({texture:s,postProcessChannel:r,lastUsedRenderId:-1}),s}_flushTextureCache(){let e=this._renderId;for(let i=this._textureCache.length-1;i>=0;i--)if(e-this._textureCache[i].lastUsedRenderId>100){let r=!1;for(let s=0;s<this._textures.length;s++)if(this._textures.data[s]===this._textureCache[i].texture){r=!0;break}r||(this._textureCache[i].texture.dispose(),this._textureCache.splice(i,1))}}_resize(e,i,r,s,n){this._textures.length>0&&this._textures.reset(),this.width=e,this.height=i;let o=null;for(let h=0;h<r._postProcesses.length;h++)if(r._postProcesses[h]!==null){o=r._postProcesses[h];break}let d={width:this.width,height:this.height},l={generateMipMaps:s,generateDepthBuffer:n||o===this,generateStencilBuffer:(n||o===this)&&this._engine.isStencilEnable,samplingMode:this.renderTargetSamplingMode,type:this._textureType,format:this._textureFormat,samples:this._samples,label:"PostProcessRTT-"+this.name};this._textures.push(this._createRenderTargetTexture(d,l,0)),this._reusable&&this._textures.push(this._createRenderTargetTexture(d,l,1)),this._texelSize.copyFromFloats(1/this.width,1/this.height),this.onSizeChangedObservable.notifyObservers(this)}activate(e,i=null,r){var s,n;e=e||this._camera;let o=e.getScene(),d=o.getEngine(),l=d.getCaps().maxTextureSize,h=(i?i.width:this._engine.getRenderWidth(!0))*this._options|0,c=(i?i.height:this._engine.getRenderHeight(!0))*this._options|0,u=e.parent;u&&(u.leftCamera==e||u.rightCamera==e)&&(h/=2);let p=this._options.width||h,_=this._options.height||c,v=this.renderTargetSamplingMode!==7&&this.renderTargetSamplingMode!==1&&this.renderTargetSamplingMode!==2;if(!this._shareOutputWithPostProcess&&!this._forcedOutputTexture){if(this.adaptScaleToCurrentViewport){let A=d.currentViewport;A&&(p*=A.width,_*=A.height)}(v||this.alwaysForcePOT)&&(this._options.width||(p=d.needPOTTextures?V.GetExponentOfTwo(p,l,this.scaleMode):p),this._options.height||(_=d.needPOTTextures?V.GetExponentOfTwo(_,l,this.scaleMode):_)),(this.width!==p||this.height!==_)&&this._resize(p,_,e,v,r),this._textures.forEach(A=>{A.samples!==this.samples&&this._engine.updateRenderTargetTextureSampleCount(A,this.samples)}),this._flushTextureCache(),this._renderId++}let m;if(this._shareOutputWithPostProcess)m=this._shareOutputWithPostProcess.inputTexture;else if(this._forcedOutputTexture)m=this._forcedOutputTexture,this.width=this._forcedOutputTexture.width,this.height=this._forcedOutputTexture.height;else{m=this.inputTexture;let A;for(let S=0;S<this._textureCache.length;S++)if(this._textureCache[S].texture===m){A=this._textureCache[S];break}A&&(A.lastUsedRenderId=this._renderId)}return this.enablePixelPerfectMode?(this._scaleRatio.copyFromFloats(h/p,c/_),this._engine.bindFramebuffer(m,0,h,c,this.forceFullscreenViewport)):(this._scaleRatio.copyFromFloats(1,1),this._engine.bindFramebuffer(m,0,void 0,void 0,this.forceFullscreenViewport)),(n=(s=this._engine)._debugInsertMarker)===null||n===void 0||n.call(s,`post process ${this.name} input`),this.onActivateObservable.notifyObservers(e),this.autoClear&&(this.alphaMode===0||this.forceAutoClearInAlphaMode)&&this._engine.clear(this.clearColor?this.clearColor:o.clearColor,o._allowPostProcessClearColor,!0,!0),this._reusable&&(this._currentRenderTextureInd=(this._currentRenderTextureInd+1)%2),m}get isSupported(){return this._drawWrapper.effect.isSupported}get aspectRatio(){return this._shareOutputWithPostProcess?this._shareOutputWithPostProcess.aspectRatio:this._forcedOutputTexture?this._forcedOutputTexture.width/this._forcedOutputTexture.height:this.width/this.height}isReady(){var e,i;return(i=(e=this._drawWrapper.effect)===null||e===void 0?void 0:e.isReady())!==null&&i!==void 0?i:!1}apply(){var e,i,r;if(!(!((e=this._drawWrapper.effect)===null||e===void 0)&&e.isReady()))return null;this._engine.enableEffect(this._drawWrapper),this._engine.setState(!1),this._engine.setDepthBuffer(!1),this._engine.setDepthWrite(!1),this._engine.setAlphaMode(this.alphaMode),this.alphaConstants&&this.getEngine().setAlphaConstants(this.alphaConstants.r,this.alphaConstants.g,this.alphaConstants.b,this.alphaConstants.a);let s;return this._shareOutputWithPostProcess?s=this._shareOutputWithPostProcess.inputTexture:this._forcedOutputTexture?s=this._forcedOutputTexture:s=this.inputTexture,this.externalTextureSamplerBinding||this._drawWrapper.effect._bindTexture("textureSampler",s?.texture),this._drawWrapper.effect.setVector2("scale",this._scaleRatio),this.onApplyObservable.notifyObservers(this._drawWrapper.effect),(r=(i=a._GetShaderCodeProcessing(this.name))===null||i===void 0?void 0:i.bindCustomBindings)===null||r===void 0||r.call(i,this.name,this._drawWrapper.effect),this._drawWrapper.effect}_disposeTextures(){if(this._shareOutputWithPostProcess||this._forcedOutputTexture){this._disposeTextureCache();return}this._disposeTextureCache(),this._textures.dispose()}_disposeTextureCache(){for(let e=this._textureCache.length-1;e>=0;e--)this._textureCache[e].texture.dispose();this._textureCache.length=0}setPrePassRenderer(e){return this._prePassEffectConfiguration?(this._prePassEffectConfiguration=e.addEffectConfiguration(this._prePassEffectConfiguration),this._prePassEffectConfiguration.enabled=!0,!0):!1}dispose(e){e=e||this._camera,this._disposeTextures();let i;if(this._scene&&(i=this._scene.postProcesses.indexOf(this),i!==-1&&this._scene.postProcesses.splice(i,1)),this._parentContainer){let r=this._parentContainer.postProcesses.indexOf(this);r>-1&&this._parentContainer.postProcesses.splice(r,1),this._parentContainer=null}if(i=this._engine.postProcesses.indexOf(this),i!==-1&&this._engine.postProcesses.splice(i,1),!!e){if(e.detachPostProcess(this),i=e._postProcesses.indexOf(this),i===0&&e._postProcesses.length>0){let r=this._camera._getFirstPostProcess();r&&r.markTextureDirty()}this.onActivateObservable.clear(),this.onAfterRenderObservable.clear(),this.onApplyObservable.clear(),this.onBeforeRenderObservable.clear(),this.onSizeChangedObservable.clear()}}serialize(){let e=H.Serialize(this),i=this.getCamera()||this._scene&&this._scene.activeCamera;return e.customType="BABYLON."+this.getClassName(),e.cameraId=i?i.id:null,e.reusable=this._reusable,e.textureType=this._textureType,e.fragmentUrl=this._fragmentUrl,e.parameters=this._parameters,e.samplers=this._samplers,e.options=this._options,e.defines=this._postProcessDefines,e.textureFormat=this._textureFormat,e.vertexUrl=this._vertexUrl,e.indexParameters=this._indexParameters,e}clone(){let e=this.serialize();e._engine=this._engine,e.cameraId=null;let i=a.Parse(e,this._scene,"");return i?(i.onActivateObservable=this.onActivateObservable.clone(),i.onSizeChangedObservable=this.onSizeChangedObservable.clone(),i.onApplyObservable=this.onApplyObservable.clone(),i.onBeforeRenderObservable=this.onBeforeRenderObservable.clone(),i.onAfterRenderObservable=this.onAfterRenderObservable.clone(),i._prePassEffectConfiguration=this._prePassEffectConfiguration,i):null}static Parse(e,i,r){let s=mt(e.customType);if(!s||!s._Parse)return null;let n=i?i.getCameraById(e.cameraId):null;return s._Parse(e,n,i,r)}static _Parse(e,i,r,s){return H.Parse(()=>new a(e.name,e.fragmentUrl,e.parameters,e.samplers,e.options,i,e.renderTargetSamplingMode,e._engine,e.reusable,e.defines,e.textureType,e.vertexUrl,e.indexParameters,!1,e.textureFormat),e,r,s)}}return a._CustomShaderCodeProcessing={},a})();f([g()],Y.prototype,"uniqueId",void 0);f([g()],Y.prototype,"name",void 0);f([g()],Y.prototype,"width",void 0);f([g()],Y.prototype,"height",void 0);f([g()],Y.prototype,"renderTargetSamplingMode",void 0);f([pi()],Y.prototype,"clearColor",void 0);f([g()],Y.prototype,"autoClear",void 0);f([g()],Y.prototype,"forceAutoClearInAlphaMode",void 0);f([g()],Y.prototype,"alphaMode",void 0);f([g()],Y.prototype,"alphaConstants",void 0);f([g()],Y.prototype,"enablePixelPerfectMode",void 0);f([g()],Y.prototype,"forceFullscreenViewport",void 0);f([g()],Y.prototype,"scaleMode",void 0);f([g()],Y.prototype,"alwaysForcePOT",void 0);f([g("samples")],Y.prototype,"_samples",void 0);f([g()],Y.prototype,"adaptScaleToCurrentViewport",void 0);Pe("BABYLON.PostProcess",Y);var zi="kernelBlurVaryingDeclaration",Wi="varying vec2 sampleCoord{X};";E.IncludesShadersStore[zi]=Wi;var ki="packingFunctions",Gi=`vec4 pack(float depth)
{
const vec4 bit_shift=vec4(255.0*255.0*255.0,255.0*255.0,255.0,1.0);
const vec4 bit_mask=vec4(0.0,1.0/255.0,1.0/255.0,1.0/255.0);
vec4 res=fract(depth*bit_shift);
res-=res.xxyz*bit_mask;
return res;
}
float unpack(vec4 color)
{
const vec4 bit_shift=vec4(1.0/(255.0*255.0*255.0),1.0/(255.0*255.0),1.0/255.0,1.0);
return dot(color,bit_shift);
}`;E.IncludesShadersStore[ki]=Gi;var Hi="kernelBlurFragment",Yi=`#ifdef DOF
factor=sampleCoC(sampleCoord{X}); 
computedWeight=KERNEL_WEIGHT{X}*factor;
sumOfWeights+=computedWeight;
#else
computedWeight=KERNEL_WEIGHT{X};
#endif
#ifdef PACKEDFLOAT
blend+=unpack(texture2D(textureSampler,sampleCoord{X}))*computedWeight;
#else
blend+=texture2D(textureSampler,sampleCoord{X})*computedWeight;
#endif
`;E.IncludesShadersStore[Hi]=Yi;var Zi="kernelBlurFragment2",ji=`#ifdef DOF
factor=sampleCoC(sampleCenter+delta*KERNEL_DEP_OFFSET{X});
computedWeight=KERNEL_DEP_WEIGHT{X}*factor;
sumOfWeights+=computedWeight;
#else
computedWeight=KERNEL_DEP_WEIGHT{X};
#endif
#ifdef PACKEDFLOAT
blend+=unpack(texture2D(textureSampler,sampleCenter+delta*KERNEL_DEP_OFFSET{X}))*computedWeight;
#else
blend+=texture2D(textureSampler,sampleCenter+delta*KERNEL_DEP_OFFSET{X})*computedWeight;
#endif
`;E.IncludesShadersStore[Zi]=ji;var Qi="kernelBlurPixelShader",Ki=`uniform sampler2D textureSampler;
uniform vec2 delta;
varying vec2 sampleCenter;
#ifdef DOF
uniform sampler2D circleOfConfusionSampler;
float sampleCoC(in vec2 offset) {
float coc=texture2D(circleOfConfusionSampler,offset).r;
return coc; 
}
#endif
#include<kernelBlurVaryingDeclaration>[0..varyingCount]
#ifdef PACKEDFLOAT
#include<packingFunctions>
#endif
#define CUSTOM_FRAGMENT_DEFINITIONS
void main(void)
{
float computedWeight=0.0;
#ifdef PACKEDFLOAT
float blend=0.;
#else
vec4 blend=vec4(0.);
#endif
#ifdef DOF
float sumOfWeights=CENTER_WEIGHT; 
float factor=0.0;
#ifdef PACKEDFLOAT
blend+=unpack(texture2D(textureSampler,sampleCenter))*CENTER_WEIGHT;
#else
blend+=texture2D(textureSampler,sampleCenter)*CENTER_WEIGHT;
#endif
#endif
#include<kernelBlurFragment>[0..varyingCount]
#include<kernelBlurFragment2>[0..depCount]
#ifdef PACKEDFLOAT
gl_FragColor=pack(blend);
#else
gl_FragColor=blend;
#endif
#ifdef DOF
gl_FragColor/=sumOfWeights;
#endif
}`;E.ShadersStore[Qi]=Ki;var qi="kernelBlurVertex",$i="sampleCoord{X}=sampleCenter+delta*KERNEL_OFFSET{X};";E.IncludesShadersStore[qi]=$i;var Ji="kernelBlurVertexShader",er=`attribute vec2 position;
uniform vec2 delta;
varying vec2 sampleCenter;
#include<kernelBlurVaryingDeclaration>[0..varyingCount]
const vec2 madd=vec2(0.5,0.5);
#define CUSTOM_VERTEX_DEFINITIONS
void main(void) {
#define CUSTOM_VERTEX_MAIN_BEGIN
sampleCenter=(position*madd+madd);
#include<kernelBlurVertex>[0..varyingCount]
gl_Position=vec4(position,0.0,1.0);
#define CUSTOM_VERTEX_MAIN_END
}`;E.ShadersStore[Ji]=er;var Ce=class a extends Y{set kernel(t){this._idealKernel!==t&&(t=Math.max(t,1),this._idealKernel=t,this._kernel=this._nearestBestKernel(t),this._blockCompilation||this._updateParameters())}get kernel(){return this._idealKernel}set packedFloat(t){this._packedFloat!==t&&(this._packedFloat=t,this._blockCompilation||this._updateParameters())}get packedFloat(){return this._packedFloat}getClassName(){return"BlurPostProcess"}constructor(t,e,i,r,s,n=T.BILINEAR_SAMPLINGMODE,o,d,l=0,h="",c=!1,u=5){super(t,"kernelBlur",["delta","direction"],["circleOfConfusionSampler"],r,s,n,o,d,null,l,"kernelBlur",{varyingCount:0,depCount:0},!0,u),this._blockCompilation=c,this._packedFloat=!1,this._staticDefines="",this._staticDefines=h,this.direction=e,this.onApplyObservable.add(p=>{this._outputTexture?p.setFloat2("delta",1/this._outputTexture.width*this.direction.x,1/this._outputTexture.height*this.direction.y):p.setFloat2("delta",1/this.width*this.direction.x,1/this.height*this.direction.y)}),this.kernel=i}updateEffect(t=null,e=null,i=null,r,s,n){this._updateParameters(s,n)}_updateParameters(t,e){let i=this._kernel,r=(i-1)/2,s=[],n=[],o=0;for(let m=0;m<i;m++){let A=m/(i-1),S=this._gaussianWeight(A*2-1);s[m]=m-r,n[m]=S,o+=S}for(let m=0;m<n.length;m++)n[m]/=o;let d=[],l=[],h=[];for(let m=0;m<=r;m+=2){let A=Math.min(m+1,Math.floor(r));if(m===A)h.push({o:s[m],w:n[m]});else{let S=A===r,C=n[m]+n[A]*(S?.5:1),L=s[m]+1/(1+n[m]/n[A]);L===0?(h.push({o:s[m],w:n[m]}),h.push({o:s[m+1],w:n[m+1]})):(h.push({o:L,w:C}),h.push({o:-L,w:C}))}}for(let m=0;m<h.length;m++)l[m]=h[m].o,d[m]=h[m].w;s=l,n=d;let c=this.getEngine().getCaps().maxVaryingVectors,u=Math.max(c,0)-1,p=Math.min(s.length,u),_="";_+=this._staticDefines,this._staticDefines.indexOf("DOF")!=-1&&(_+=`#define CENTER_WEIGHT ${this._glslFloat(n[p-1])}\r
`,p--);for(let m=0;m<p;m++)_+=`#define KERNEL_OFFSET${m} ${this._glslFloat(s[m])}\r
`,_+=`#define KERNEL_WEIGHT${m} ${this._glslFloat(n[m])}\r
`;let v=0;for(let m=u;m<s.length;m++)_+=`#define KERNEL_DEP_OFFSET${v} ${this._glslFloat(s[m])}\r
`,_+=`#define KERNEL_DEP_WEIGHT${v} ${this._glslFloat(n[m])}\r
`,v++;this.packedFloat&&(_+="#define PACKEDFLOAT 1"),this._blockCompilation=!1,super.updateEffect(_,null,null,{varyingCount:p,depCount:v},t,e)}_nearestBestKernel(t){let e=Math.round(t);for(let i of[e,e-1,e+1,e-2,e+2])if(i%2!==0&&Math.floor(i/2)%2===0&&i>0)return Math.max(i,3);return Math.max(e,3)}_gaussianWeight(t){let e=.3333333333333333,i=Math.sqrt(2*Math.PI)*e,r=-(t*t/(2*e*e));return 1/i*Math.exp(r)}_glslFloat(t,e=8){return t.toFixed(e).replace(/0+$/,"")}static _Parse(t,e,i,r){return H.Parse(()=>new a(t.name,t.direction,t.kernel,t.options,e,t.renderTargetSamplingMode,i.getEngine(),t.reusable,t.textureType,void 0,!1),t,i,r)}};f([g("kernel")],Ce.prototype,"_kernel",void 0);f([g("packedFloat")],Ce.prototype,"_packedFloat",void 0);f([ui()],Ce.prototype,"direction",void 0);Pe("BABYLON.BlurPostProcess",Ce);var ut=class{constructor(){this._defines={},this._currentRank=32,this._maxRank=-1,this._mesh=null}unBindMesh(){this._mesh=null}addFallback(t,e){this._defines[t]||(t<this._currentRank&&(this._currentRank=t),t>this._maxRank&&(this._maxRank=t),this._defines[t]=new Array),this._defines[t].push(e)}addCPUSkinningFallback(t,e){this._mesh=e,t<this._currentRank&&(this._currentRank=t),t>this._maxRank&&(this._maxRank=t)}get hasMoreFallbacks(){return this._currentRank<=this._maxRank}reduce(t,e){if(this._mesh&&this._mesh.computeBonesUsingShaders&&this._mesh.numBoneInfluencers>0){this._mesh.computeBonesUsingShaders=!1,t=t.replace("#define NUM_BONE_INFLUENCERS "+this._mesh.numBoneInfluencers,"#define NUM_BONE_INFLUENCERS 0"),e._bonesComputationForcedToCPU=!0;let i=this._mesh.getScene();for(let r=0;r<i.meshes.length;r++){let s=i.meshes[r];if(!s.material){!this._mesh.material&&s.computeBonesUsingShaders&&s.numBoneInfluencers>0&&(s.computeBonesUsingShaders=!1);continue}if(!(!s.computeBonesUsingShaders||s.numBoneInfluencers===0)){if(s.material.getEffect()===e)s.computeBonesUsingShaders=!1;else if(s.subMeshes){for(let n of s.subMeshes)if(n.effect===e){s.computeBonesUsingShaders=!1;break}}}}}else{let i=this._defines[this._currentRank];if(i)for(let r=0;r<i.length;r++)t=t.replace("#define "+i[r],"");this._currentRank++}return t}},tr="bayerDitherFunctions",ir=`float bayerDither2(vec2 _P) {
return mod(2.0*_P.y+_P.x+1.0,4.0);
}
float bayerDither4(vec2 _P) {
vec2 P1=mod(_P,2.0); 
vec2 P2=floor(0.5*mod(_P,4.0)); 
return 4.0*bayerDither2(P1)+bayerDither2(P2);
}
float bayerDither8(vec2 _P) {
vec2 P1=mod(_P,2.0); 
vec2 P2=floor(0.5 *mod(_P,4.0)); 
vec2 P4=floor(0.25*mod(_P,8.0)); 
return 4.0*(4.0*bayerDither2(P1)+bayerDither2(P2))+bayerDither2(P4);
}
`;E.IncludesShadersStore[tr]=ir;var rr="shadowMapFragmentExtraDeclaration",sr=`#if SM_FLOAT==0
#include<packingFunctions>
#endif
#if SM_SOFTTRANSPARENTSHADOW==1
#include<bayerDitherFunctions>
uniform float softTransparentShadowSM;
#endif
varying float vDepthMetricSM;
#if SM_USEDISTANCE==1
uniform vec3 lightDataSM;
varying vec3 vPositionWSM;
#endif
uniform vec3 biasAndScaleSM;
uniform vec2 depthValuesSM;
#if defined(SM_DEPTHCLAMP) && SM_DEPTHCLAMP==1
varying float zSM;
#endif
`;E.IncludesShadersStore[rr]=sr;var ar="clipPlaneFragmentDeclaration",nr=`#ifdef CLIPPLANE
varying float fClipDistance;
#endif
#ifdef CLIPPLANE2
varying float fClipDistance2;
#endif
#ifdef CLIPPLANE3
varying float fClipDistance3;
#endif
#ifdef CLIPPLANE4
varying float fClipDistance4;
#endif
#ifdef CLIPPLANE5
varying float fClipDistance5;
#endif
#ifdef CLIPPLANE6
varying float fClipDistance6;
#endif
`;E.IncludesShadersStore[ar]=nr;var or="clipPlaneFragment",lr=`#if defined(CLIPPLANE) || defined(CLIPPLANE2) || defined(CLIPPLANE3) || defined(CLIPPLANE4) || defined(CLIPPLANE5) || defined(CLIPPLANE6)
if (false) {}
#endif
#ifdef CLIPPLANE
else if (fClipDistance>0.0)
{
discard;
}
#endif
#ifdef CLIPPLANE2
else if (fClipDistance2>0.0)
{
discard;
}
#endif
#ifdef CLIPPLANE3
else if (fClipDistance3>0.0)
{
discard;
}
#endif
#ifdef CLIPPLANE4
else if (fClipDistance4>0.0)
{
discard;
}
#endif
#ifdef CLIPPLANE5
else if (fClipDistance5>0.0)
{
discard;
}
#endif
#ifdef CLIPPLANE6
else if (fClipDistance6>0.0)
{
discard;
}
#endif
`;E.IncludesShadersStore[or]=lr;var hr="shadowMapFragment",dr=`float depthSM=vDepthMetricSM;
#if defined(SM_DEPTHCLAMP) && SM_DEPTHCLAMP==1
#if SM_USEDISTANCE==1
depthSM=(length(vPositionWSM-lightDataSM)+depthValuesSM.x)/depthValuesSM.y+biasAndScaleSM.x;
#else
#ifdef USE_REVERSE_DEPTHBUFFER
depthSM=(-zSM+depthValuesSM.x)/depthValuesSM.y+biasAndScaleSM.x;
#else
depthSM=(zSM+depthValuesSM.x)/depthValuesSM.y+biasAndScaleSM.x;
#endif
#endif
#ifdef USE_REVERSE_DEPTHBUFFER
gl_FragDepth=clamp(1.0-depthSM,0.0,1.0);
#else
gl_FragDepth=clamp(depthSM,0.0,1.0); 
#endif
#elif SM_USEDISTANCE==1
depthSM=(length(vPositionWSM-lightDataSM)+depthValuesSM.x)/depthValuesSM.y+biasAndScaleSM.x;
#endif
#if SM_ESM==1
depthSM=clamp(exp(-min(87.,biasAndScaleSM.z*depthSM)),0.,1.);
#endif
#if SM_FLOAT==1
gl_FragColor=vec4(depthSM,1.0,1.0,1.0);
#else
gl_FragColor=pack(depthSM);
#endif
return;`;E.IncludesShadersStore[hr]=dr;var cr="shadowMapPixelShader",ur=`#include<shadowMapFragmentExtraDeclaration>
#ifdef ALPHATEXTURE
varying vec2 vUV;
uniform sampler2D diffuseSampler;
#endif
#include<clipPlaneFragmentDeclaration>
#define CUSTOM_FRAGMENT_DEFINITIONS
void main(void)
{
#include<clipPlaneFragment>
#ifdef ALPHATEXTURE
float alphaFromAlphaTexture=texture2D(diffuseSampler,vUV).a;
#ifdef ALPHATESTVALUE
if (alphaFromAlphaTexture<ALPHATESTVALUE)
discard;
#endif
#endif
#if SM_SOFTTRANSPARENTSHADOW==1
#ifdef ALPHATEXTURE
if ((bayerDither8(floor(mod(gl_FragCoord.xy,8.0))))/64.0>=softTransparentShadowSM*alphaFromAlphaTexture) discard;
#else
if ((bayerDither8(floor(mod(gl_FragCoord.xy,8.0))))/64.0>=softTransparentShadowSM) discard;
#endif
#endif
#include<shadowMapFragment>
}`;E.ShadersStore[cr]=ur;var fr="bonesDeclaration",pr=`#if NUM_BONE_INFLUENCERS>0
attribute vec4 matricesIndices;
attribute vec4 matricesWeights;
#if NUM_BONE_INFLUENCERS>4
attribute vec4 matricesIndicesExtra;
attribute vec4 matricesWeightsExtra;
#endif
#ifndef BAKED_VERTEX_ANIMATION_TEXTURE
#ifdef BONETEXTURE
uniform sampler2D boneSampler;
uniform float boneTextureWidth;
#else
uniform mat4 mBones[BonesPerMesh];
#ifdef BONES_VELOCITY_ENABLED
uniform mat4 mPreviousBones[BonesPerMesh];
#endif
#endif
#ifdef BONETEXTURE
#define inline
mat4 readMatrixFromRawSampler(sampler2D smp,float index)
{
float offset=index *4.0;
float dx=1.0/boneTextureWidth;
vec4 m0=texture2D(smp,vec2(dx*(offset+0.5),0.));
vec4 m1=texture2D(smp,vec2(dx*(offset+1.5),0.));
vec4 m2=texture2D(smp,vec2(dx*(offset+2.5),0.));
vec4 m3=texture2D(smp,vec2(dx*(offset+3.5),0.));
return mat4(m0,m1,m2,m3);
}
#endif
#endif
#endif
`;E.IncludesShadersStore[fr]=pr;var mr="bakedVertexAnimationDeclaration",_r=`#ifdef BAKED_VERTEX_ANIMATION_TEXTURE
uniform float bakedVertexAnimationTime;
uniform vec2 bakedVertexAnimationTextureSizeInverted;
uniform vec4 bakedVertexAnimationSettings;
uniform sampler2D bakedVertexAnimationTexture;
#ifdef INSTANCES
attribute vec4 bakedVertexAnimationSettingsInstanced;
#endif
#define inline
mat4 readMatrixFromRawSamplerVAT(sampler2D smp,float index,float frame)
{
float offset=index*4.0;
float frameUV=(frame+0.5)*bakedVertexAnimationTextureSizeInverted.y;
float dx=bakedVertexAnimationTextureSizeInverted.x;
vec4 m0=texture2D(smp,vec2(dx*(offset+0.5),frameUV));
vec4 m1=texture2D(smp,vec2(dx*(offset+1.5),frameUV));
vec4 m2=texture2D(smp,vec2(dx*(offset+2.5),frameUV));
vec4 m3=texture2D(smp,vec2(dx*(offset+3.5),frameUV));
return mat4(m0,m1,m2,m3);
}
#endif
`;E.IncludesShadersStore[mr]=_r;var gr="morphTargetsVertexGlobalDeclaration",vr=`#ifdef MORPHTARGETS
uniform float morphTargetInfluences[NUM_MORPH_INFLUENCERS];
#ifdef MORPHTARGETS_TEXTURE 
precision mediump sampler2DArray; 
uniform float morphTargetTextureIndices[NUM_MORPH_INFLUENCERS];
uniform vec3 morphTargetTextureInfo;
uniform sampler2DArray morphTargets;
vec3 readVector3FromRawSampler(int targetIndex,float vertexIndex)
{ 
float y=floor(vertexIndex/morphTargetTextureInfo.y);
float x=vertexIndex-y*morphTargetTextureInfo.y;
vec3 textureUV=vec3((x+0.5)/morphTargetTextureInfo.y,(y+0.5)/morphTargetTextureInfo.z,morphTargetTextureIndices[targetIndex]);
return texture(morphTargets,textureUV).xyz;
}
#endif
#endif
`;E.IncludesShadersStore[gr]=vr;var Sr="morphTargetsVertexDeclaration",Er=`#ifdef MORPHTARGETS
#ifndef MORPHTARGETS_TEXTURE
attribute vec3 position{X};
#ifdef MORPHTARGETS_NORMAL
attribute vec3 normal{X};
#endif
#ifdef MORPHTARGETS_TANGENT
attribute vec3 tangent{X};
#endif
#ifdef MORPHTARGETS_UV
attribute vec2 uv_{X};
#endif
#endif
#endif
`;E.IncludesShadersStore[Sr]=Er;var Tr="helperFunctions",xr=`const float PI=3.1415926535897932384626433832795;
const float HALF_MIN=5.96046448e-08; 
const float LinearEncodePowerApprox=2.2;
const float GammaEncodePowerApprox=1.0/LinearEncodePowerApprox;
const vec3 LuminanceEncodeApprox=vec3(0.2126,0.7152,0.0722);
const float Epsilon=0.0000001;
#define saturate(x) clamp(x,0.0,1.0)
#define absEps(x) abs(x)+Epsilon
#define maxEps(x) max(x,Epsilon)
#define saturateEps(x) clamp(x,Epsilon,1.0)
mat3 transposeMat3(mat3 inMatrix) {
vec3 i0=inMatrix[0];
vec3 i1=inMatrix[1];
vec3 i2=inMatrix[2];
mat3 outMatrix=mat3(
vec3(i0.x,i1.x,i2.x),
vec3(i0.y,i1.y,i2.y),
vec3(i0.z,i1.z,i2.z)
);
return outMatrix;
}
mat3 inverseMat3(mat3 inMatrix) {
float a00=inMatrix[0][0],a01=inMatrix[0][1],a02=inMatrix[0][2];
float a10=inMatrix[1][0],a11=inMatrix[1][1],a12=inMatrix[1][2];
float a20=inMatrix[2][0],a21=inMatrix[2][1],a22=inMatrix[2][2];
float b01=a22*a11-a12*a21;
float b11=-a22*a10+a12*a20;
float b21=a21*a10-a11*a20;
float det=a00*b01+a01*b11+a02*b21;
return mat3(b01,(-a22*a01+a02*a21),(a12*a01-a02*a11),
b11,(a22*a00-a02*a20),(-a12*a00+a02*a10),
b21,(-a21*a00+a01*a20),(a11*a00-a01*a10))/det;
}
#if USE_EXACT_SRGB_CONVERSIONS
vec3 toLinearSpaceExact(vec3 color)
{
vec3 nearZeroSection=0.0773993808*color;
vec3 remainingSection=pow(0.947867299*(color+vec3(0.055)),vec3(2.4));
#if defined(WEBGL2) || defined(WEBGPU) || defined(NATIVE)
return mix(remainingSection,nearZeroSection,lessThanEqual(color,vec3(0.04045)));
#else
return
vec3(
color.r<=0.04045 ? nearZeroSection.r : remainingSection.r,
color.g<=0.04045 ? nearZeroSection.g : remainingSection.g,
color.b<=0.04045 ? nearZeroSection.b : remainingSection.b);
#endif
}
vec3 toGammaSpaceExact(vec3 color)
{
vec3 nearZeroSection=12.92*color;
vec3 remainingSection=1.055*pow(color,vec3(0.41666))-vec3(0.055);
#if defined(WEBGL2) || defined(WEBGPU) || defined(NATIVE)
return mix(remainingSection,nearZeroSection,lessThanEqual(color,vec3(0.0031308)));
#else
return
vec3(
color.r<=0.0031308 ? nearZeroSection.r : remainingSection.r,
color.g<=0.0031308 ? nearZeroSection.g : remainingSection.g,
color.b<=0.0031308 ? nearZeroSection.b : remainingSection.b);
#endif
}
#endif
float toLinearSpace(float color)
{
#if USE_EXACT_SRGB_CONVERSIONS
float nearZeroSection=0.0773993808*color;
float remainingSection=pow(0.947867299*(color+0.055),2.4);
return color<=0.04045 ? nearZeroSection : remainingSection;
#else
return pow(color,LinearEncodePowerApprox);
#endif
}
vec3 toLinearSpace(vec3 color)
{
#if USE_EXACT_SRGB_CONVERSIONS
return toLinearSpaceExact(color);
#else
return pow(color,vec3(LinearEncodePowerApprox));
#endif
}
vec4 toLinearSpace(vec4 color)
{
#if USE_EXACT_SRGB_CONVERSIONS
return vec4(toLinearSpaceExact(color.rgb),color.a);
#else
return vec4(pow(color.rgb,vec3(LinearEncodePowerApprox)),color.a);
#endif
}
float toGammaSpace(float color)
{
#if USE_EXACT_SRGB_CONVERSIONS
float nearZeroSection=12.92*color;
float remainingSection=1.055*pow(color,0.41666)-0.055;
return color<=0.0031308 ? nearZeroSection : remainingSection;
#else
return pow(color,GammaEncodePowerApprox);
#endif
}
vec3 toGammaSpace(vec3 color)
{
#if USE_EXACT_SRGB_CONVERSIONS
return toGammaSpaceExact(color);
#else
return pow(color,vec3(GammaEncodePowerApprox));
#endif
}
vec4 toGammaSpace(vec4 color)
{
#if USE_EXACT_SRGB_CONVERSIONS
return vec4(toGammaSpaceExact(color.rgb),color.a);
#else
return vec4(pow(color.rgb,vec3(GammaEncodePowerApprox)),color.a);
#endif
}
float square(float value)
{
return value*value;
}
vec3 square(vec3 value)
{
return value*value;
}
float pow5(float value) {
float sq=value*value;
return sq*sq*value;
}
float getLuminance(vec3 color)
{
return clamp(dot(color,LuminanceEncodeApprox),0.,1.);
}
float getRand(vec2 seed) {
return fract(sin(dot(seed.xy ,vec2(12.9898,78.233)))*43758.5453);
}
float dither(vec2 seed,float varianceAmount) {
float rand=getRand(seed);
float normVariance=varianceAmount/255.0;
float dither=mix(-normVariance,normVariance,rand);
return dither;
}
const float rgbdMaxRange=255.0;
vec4 toRGBD(vec3 color) {
float maxRGB=maxEps(max(color.r,max(color.g,color.b)));
float D =max(rgbdMaxRange/maxRGB,1.);
D =clamp(floor(D)/255.0,0.,1.);
vec3 rgb=color.rgb*D;
rgb=toGammaSpace(rgb);
return vec4(clamp(rgb,0.,1.),D); 
}
vec3 fromRGBD(vec4 rgbd) {
rgbd.rgb=toLinearSpace(rgbd.rgb);
return rgbd.rgb/rgbd.a;
}
vec3 parallaxCorrectNormal( vec3 vertexPos,vec3 origVec,vec3 cubeSize,vec3 cubePos ) {
vec3 invOrigVec=vec3(1.0,1.0,1.0)/origVec;
vec3 halfSize=cubeSize*0.5;
vec3 intersecAtMaxPlane=(cubePos+halfSize-vertexPos)*invOrigVec;
vec3 intersecAtMinPlane=(cubePos-halfSize-vertexPos)*invOrigVec;
vec3 largestIntersec=max(intersecAtMaxPlane,intersecAtMinPlane);
float distance=min(min(largestIntersec.x,largestIntersec.y),largestIntersec.z);
vec3 intersectPositionWS=vertexPos+origVec*distance;
return intersectPositionWS-cubePos;
}
`;E.IncludesShadersStore[Tr]=xr;var Mr="sceneVertexDeclaration",Ar=`uniform mat4 viewProjection;
#ifdef MULTIVIEW
uniform mat4 viewProjectionR;
#endif
uniform mat4 view;
uniform mat4 projection;
uniform vec4 vEyePosition;
`;E.IncludesShadersStore[Mr]=Ar;var Cr="meshVertexDeclaration",Ir=`uniform mat4 world;
uniform float visibility;
`;E.IncludesShadersStore[Cr]=Ir;var Rr="shadowMapVertexDeclaration",Pr=`#include<sceneVertexDeclaration>
#include<meshVertexDeclaration>
`;E.IncludesShadersStore[Rr]=Pr;var br="sceneUboDeclaration",Dr=`layout(std140,column_major) uniform;
uniform Scene {
mat4 viewProjection;
#ifdef MULTIVIEW
mat4 viewProjectionR;
#endif 
mat4 view;
mat4 projection;
vec4 vEyePosition;
};
`;E.IncludesShadersStore[br]=Dr;var Lr="meshUboDeclaration",wr=`#ifdef WEBGL2
uniform mat4 world;
uniform float visibility;
#else
layout(std140,column_major) uniform;
uniform Mesh
{
mat4 world;
float visibility;
};
#endif
#define WORLD_UBO
`;E.IncludesShadersStore[Lr]=wr;var Or="shadowMapUboDeclaration",Fr=`layout(std140,column_major) uniform;
#include<sceneUboDeclaration>
#include<meshUboDeclaration>
`;E.IncludesShadersStore[Or]=Fr;var Nr="shadowMapVertexExtraDeclaration",yr=`#if SM_NORMALBIAS==1
uniform vec3 lightDataSM;
#endif
uniform vec3 biasAndScaleSM;
uniform vec2 depthValuesSM;
varying float vDepthMetricSM;
#if SM_USEDISTANCE==1
varying vec3 vPositionWSM;
#endif
#if defined(SM_DEPTHCLAMP) && SM_DEPTHCLAMP==1
varying float zSM;
#endif
`;E.IncludesShadersStore[Nr]=yr;var Ur="clipPlaneVertexDeclaration",Br=`#ifdef CLIPPLANE
uniform vec4 vClipPlane;
varying float fClipDistance;
#endif
#ifdef CLIPPLANE2
uniform vec4 vClipPlane2;
varying float fClipDistance2;
#endif
#ifdef CLIPPLANE3
uniform vec4 vClipPlane3;
varying float fClipDistance3;
#endif
#ifdef CLIPPLANE4
uniform vec4 vClipPlane4;
varying float fClipDistance4;
#endif
#ifdef CLIPPLANE5
uniform vec4 vClipPlane5;
varying float fClipDistance5;
#endif
#ifdef CLIPPLANE6
uniform vec4 vClipPlane6;
varying float fClipDistance6;
#endif
`;E.IncludesShadersStore[Ur]=Br;var Vr="morphTargetsVertexGlobal",Xr=`#ifdef MORPHTARGETS
#ifdef MORPHTARGETS_TEXTURE
float vertexID;
#endif
#endif
`;E.IncludesShadersStore[Vr]=Xr;var zr="morphTargetsVertex",Wr=`#ifdef MORPHTARGETS
#ifdef MORPHTARGETS_TEXTURE 
vertexID=float(gl_VertexID)*morphTargetTextureInfo.x;
positionUpdated+=(readVector3FromRawSampler({X},vertexID)-position)*morphTargetInfluences[{X}];
vertexID+=1.0;
#ifdef MORPHTARGETS_NORMAL
normalUpdated+=(readVector3FromRawSampler({X},vertexID) -normal)*morphTargetInfluences[{X}];
vertexID+=1.0;
#endif
#ifdef MORPHTARGETS_UV
uvUpdated+=(readVector3FromRawSampler({X},vertexID).xy-uv)*morphTargetInfluences[{X}];
vertexID+=1.0;
#endif
#ifdef MORPHTARGETS_TANGENT
tangentUpdated.xyz+=(readVector3FromRawSampler({X},vertexID) -tangent.xyz)*morphTargetInfluences[{X}];
#endif
#else
positionUpdated+=(position{X}-position)*morphTargetInfluences[{X}];
#ifdef MORPHTARGETS_NORMAL
normalUpdated+=(normal{X}-normal)*morphTargetInfluences[{X}];
#endif
#ifdef MORPHTARGETS_TANGENT
tangentUpdated.xyz+=(tangent{X}-tangent.xyz)*morphTargetInfluences[{X}];
#endif
#ifdef MORPHTARGETS_UV
uvUpdated+=(uv_{X}-uv)*morphTargetInfluences[{X}];
#endif
#endif
#endif
`;E.IncludesShadersStore[zr]=Wr;var kr="instancesVertex",Gr=`#ifdef INSTANCES
mat4 finalWorld=mat4(world0,world1,world2,world3);
#if defined(PREPASS_VELOCITY) || defined(VELOCITY)
mat4 finalPreviousWorld=mat4(previousWorld0,previousWorld1,previousWorld2,previousWorld3);
#endif
#ifdef THIN_INSTANCES
finalWorld=world*finalWorld;
#if defined(PREPASS_VELOCITY) || defined(VELOCITY)
finalPreviousWorld=previousWorld*finalPreviousWorld;
#endif
#endif
#else
mat4 finalWorld=world;
#if defined(PREPASS_VELOCITY) || defined(VELOCITY)
mat4 finalPreviousWorld=previousWorld;
#endif
#endif
`;E.IncludesShadersStore[kr]=Gr;var Hr="bonesVertex",Yr=`#ifndef BAKED_VERTEX_ANIMATION_TEXTURE
#if NUM_BONE_INFLUENCERS>0
mat4 influence;
#ifdef BONETEXTURE
influence=readMatrixFromRawSampler(boneSampler,matricesIndices[0])*matricesWeights[0];
#if NUM_BONE_INFLUENCERS>1
influence+=readMatrixFromRawSampler(boneSampler,matricesIndices[1])*matricesWeights[1];
#endif
#if NUM_BONE_INFLUENCERS>2
influence+=readMatrixFromRawSampler(boneSampler,matricesIndices[2])*matricesWeights[2];
#endif
#if NUM_BONE_INFLUENCERS>3
influence+=readMatrixFromRawSampler(boneSampler,matricesIndices[3])*matricesWeights[3];
#endif
#if NUM_BONE_INFLUENCERS>4
influence+=readMatrixFromRawSampler(boneSampler,matricesIndicesExtra[0])*matricesWeightsExtra[0];
#endif
#if NUM_BONE_INFLUENCERS>5
influence+=readMatrixFromRawSampler(boneSampler,matricesIndicesExtra[1])*matricesWeightsExtra[1];
#endif
#if NUM_BONE_INFLUENCERS>6
influence+=readMatrixFromRawSampler(boneSampler,matricesIndicesExtra[2])*matricesWeightsExtra[2];
#endif
#if NUM_BONE_INFLUENCERS>7
influence+=readMatrixFromRawSampler(boneSampler,matricesIndicesExtra[3])*matricesWeightsExtra[3];
#endif
#else
influence=mBones[int(matricesIndices[0])]*matricesWeights[0];
#if NUM_BONE_INFLUENCERS>1
influence+=mBones[int(matricesIndices[1])]*matricesWeights[1];
#endif
#if NUM_BONE_INFLUENCERS>2
influence+=mBones[int(matricesIndices[2])]*matricesWeights[2];
#endif
#if NUM_BONE_INFLUENCERS>3
influence+=mBones[int(matricesIndices[3])]*matricesWeights[3];
#endif
#if NUM_BONE_INFLUENCERS>4
influence+=mBones[int(matricesIndicesExtra[0])]*matricesWeightsExtra[0];
#endif
#if NUM_BONE_INFLUENCERS>5
influence+=mBones[int(matricesIndicesExtra[1])]*matricesWeightsExtra[1];
#endif
#if NUM_BONE_INFLUENCERS>6
influence+=mBones[int(matricesIndicesExtra[2])]*matricesWeightsExtra[2];
#endif
#if NUM_BONE_INFLUENCERS>7
influence+=mBones[int(matricesIndicesExtra[3])]*matricesWeightsExtra[3];
#endif
#endif
finalWorld=finalWorld*influence;
#endif
#endif
`;E.IncludesShadersStore[Hr]=Yr;var Zr="bakedVertexAnimation",jr=`#ifdef BAKED_VERTEX_ANIMATION_TEXTURE
{
#ifdef INSTANCES
#define BVASNAME bakedVertexAnimationSettingsInstanced
#else
#define BVASNAME bakedVertexAnimationSettings
#endif
float VATStartFrame=BVASNAME.x;
float VATEndFrame=BVASNAME.y;
float VATOffsetFrame=BVASNAME.z;
float VATSpeed=BVASNAME.w;
float totalFrames=VATEndFrame-VATStartFrame+1.0;
float time=bakedVertexAnimationTime*VATSpeed/totalFrames;
float frameCorrection=time<1.0 ? 0.0 : 1.0;
float numOfFrames=totalFrames-frameCorrection;
float VATFrameNum=fract(time)*numOfFrames;
VATFrameNum=mod(VATFrameNum+VATOffsetFrame,numOfFrames);
VATFrameNum=floor(VATFrameNum);
VATFrameNum+=VATStartFrame+frameCorrection;
mat4 VATInfluence;
VATInfluence=readMatrixFromRawSamplerVAT(bakedVertexAnimationTexture,matricesIndices[0],VATFrameNum)*matricesWeights[0];
#if NUM_BONE_INFLUENCERS>1
VATInfluence+=readMatrixFromRawSamplerVAT(bakedVertexAnimationTexture,matricesIndices[1],VATFrameNum)*matricesWeights[1];
#endif
#if NUM_BONE_INFLUENCERS>2
VATInfluence+=readMatrixFromRawSamplerVAT(bakedVertexAnimationTexture,matricesIndices[2],VATFrameNum)*matricesWeights[2];
#endif
#if NUM_BONE_INFLUENCERS>3
VATInfluence+=readMatrixFromRawSamplerVAT(bakedVertexAnimationTexture,matricesIndices[3],VATFrameNum)*matricesWeights[3];
#endif
#if NUM_BONE_INFLUENCERS>4
VATInfluence+=readMatrixFromRawSamplerVAT(bakedVertexAnimationTexture,matricesIndicesExtra[0],VATFrameNum)*matricesWeightsExtra[0];
#endif
#if NUM_BONE_INFLUENCERS>5
VATInfluence+=readMatrixFromRawSamplerVAT(bakedVertexAnimationTexture,matricesIndicesExtra[1],VATFrameNum)*matricesWeightsExtra[1];
#endif
#if NUM_BONE_INFLUENCERS>6
VATInfluence+=readMatrixFromRawSamplerVAT(bakedVertexAnimationTexture,matricesIndicesExtra[2],VATFrameNum)*matricesWeightsExtra[2];
#endif
#if NUM_BONE_INFLUENCERS>7
VATInfluence+=readMatrixFromRawSamplerVAT(bakedVertexAnimationTexture,matricesIndicesExtra[3],VATFrameNum)*matricesWeightsExtra[3];
#endif
finalWorld=finalWorld*VATInfluence;
}
#endif
`;E.IncludesShadersStore[Zr]=jr;var Qr="shadowMapVertexNormalBias",Kr=`#if SM_NORMALBIAS==1
#if SM_DIRECTIONINLIGHTDATA==1
vec3 worldLightDirSM=normalize(-lightDataSM.xyz);
#else
vec3 directionToLightSM=lightDataSM.xyz-worldPos.xyz;
vec3 worldLightDirSM=normalize(directionToLightSM);
#endif
float ndlSM=dot(vNormalW,worldLightDirSM);
float sinNLSM=sqrt(1.0-ndlSM*ndlSM);
float normalBiasSM=biasAndScaleSM.y*sinNLSM;
worldPos.xyz-=vNormalW*normalBiasSM;
#endif
`;E.IncludesShadersStore[Qr]=Kr;var qr="shadowMapVertexMetric",$r=`#if SM_USEDISTANCE==1
vPositionWSM=worldPos.xyz;
#endif
#if SM_DEPTHTEXTURE==1
#ifdef IS_NDC_HALF_ZRANGE
#define BIASFACTOR 0.5
#else
#define BIASFACTOR 1.0
#endif
#ifdef USE_REVERSE_DEPTHBUFFER
gl_Position.z-=biasAndScaleSM.x*gl_Position.w*BIASFACTOR;
#else
gl_Position.z+=biasAndScaleSM.x*gl_Position.w*BIASFACTOR;
#endif
#endif
#if defined(SM_DEPTHCLAMP) && SM_DEPTHCLAMP==1
zSM=gl_Position.z;
gl_Position.z=0.0;
#elif SM_USEDISTANCE==0
#ifdef USE_REVERSE_DEPTHBUFFER
vDepthMetricSM=(-gl_Position.z+depthValuesSM.x)/depthValuesSM.y+biasAndScaleSM.x;
#else
vDepthMetricSM=(gl_Position.z+depthValuesSM.x)/depthValuesSM.y+biasAndScaleSM.x;
#endif
#endif
`;E.IncludesShadersStore[qr]=$r;var Jr="clipPlaneVertex",es=`#ifdef CLIPPLANE
fClipDistance=dot(worldPos,vClipPlane);
#endif
#ifdef CLIPPLANE2
fClipDistance2=dot(worldPos,vClipPlane2);
#endif
#ifdef CLIPPLANE3
fClipDistance3=dot(worldPos,vClipPlane3);
#endif
#ifdef CLIPPLANE4
fClipDistance4=dot(worldPos,vClipPlane4);
#endif
#ifdef CLIPPLANE5
fClipDistance5=dot(worldPos,vClipPlane5);
#endif
#ifdef CLIPPLANE6
fClipDistance6=dot(worldPos,vClipPlane6);
#endif
`;E.IncludesShadersStore[Jr]=es;var ts="shadowMapVertexShader",is=`attribute vec3 position;
#ifdef NORMAL
attribute vec3 normal;
#endif
#include<bonesDeclaration>
#include<bakedVertexAnimationDeclaration>
#include<morphTargetsVertexGlobalDeclaration>
#include<morphTargetsVertexDeclaration>[0..maxSimultaneousMorphTargets]
#ifdef INSTANCES
attribute vec4 world0;
attribute vec4 world1;
attribute vec4 world2;
attribute vec4 world3;
#endif
#include<helperFunctions>
#include<__decl__shadowMapVertex>
#ifdef ALPHATEXTURE
varying vec2 vUV;
uniform mat4 diffuseMatrix;
#ifdef UV1
attribute vec2 uv;
#endif
#ifdef UV2
attribute vec2 uv2;
#endif
#endif
#include<shadowMapVertexExtraDeclaration>
#include<clipPlaneVertexDeclaration>
#define CUSTOM_VERTEX_DEFINITIONS
void main(void)
{
vec3 positionUpdated=position;
#ifdef UV1
vec2 uvUpdated=uv;
#endif
#ifdef NORMAL
vec3 normalUpdated=normal;
#endif
#include<morphTargetsVertexGlobal>
#include<morphTargetsVertex>[0..maxSimultaneousMorphTargets]
#include<instancesVertex>
#include<bonesVertex>
#include<bakedVertexAnimation>
vec4 worldPos=finalWorld*vec4(positionUpdated,1.0);
#ifdef NORMAL
mat3 normWorldSM=mat3(finalWorld);
#if defined(INSTANCES) && defined(THIN_INSTANCES)
vec3 vNormalW=normalUpdated/vec3(dot(normWorldSM[0],normWorldSM[0]),dot(normWorldSM[1],normWorldSM[1]),dot(normWorldSM[2],normWorldSM[2]));
vNormalW=normalize(normWorldSM*vNormalW);
#else
#ifdef NONUNIFORMSCALING
normWorldSM=transposeMat3(inverseMat3(normWorldSM));
#endif
vec3 vNormalW=normalize(normWorldSM*normalUpdated);
#endif
#endif
#include<shadowMapVertexNormalBias>
gl_Position=viewProjection*worldPos;
#include<shadowMapVertexMetric>
#ifdef ALPHATEXTURE
#ifdef UV1
vUV=vec2(diffuseMatrix*vec4(uvUpdated,1.0,0.0));
#endif
#ifdef UV2
vUV=vec2(diffuseMatrix*vec4(uv2,1.0,0.0));
#endif
#endif
#include<clipPlaneVertex>
}`;E.ShadersStore[ts]=is;var rs="depthBoxBlurPixelShader",ss=`varying vec2 vUV;
uniform sampler2D textureSampler;
uniform vec2 screenSize;
#define CUSTOM_FRAGMENT_DEFINITIONS
void main(void)
{
vec4 colorDepth=vec4(0.0);
for (int x=-OFFSET; x<=OFFSET; x++)
for (int y=-OFFSET; y<=OFFSET; y++)
colorDepth+=texture2D(textureSampler,vUV+vec2(x,y)/screenSize);
gl_FragColor=(colorDepth/float((OFFSET*2+1)*(OFFSET*2+1)));
}`;E.ShadersStore[rs]=ss;var as="shadowMapFragmentSoftTransparentShadow",ns=`#if SM_SOFTTRANSPARENTSHADOW==1
if ((bayerDither8(floor(mod(gl_FragCoord.xy,8.0))))/64.0>=softTransparentShadowSM*alpha) discard;
#endif
`;E.IncludesShadersStore[as]=ns;var J=(()=>{class a{get bias(){return this._bias}set bias(e){this._bias=e}get normalBias(){return this._normalBias}set normalBias(e){this._normalBias=e}get blurBoxOffset(){return this._blurBoxOffset}set blurBoxOffset(e){this._blurBoxOffset!==e&&(this._blurBoxOffset=e,this._disposeBlurPostProcesses())}get blurScale(){return this._blurScale}set blurScale(e){this._blurScale!==e&&(this._blurScale=e,this._disposeBlurPostProcesses())}get blurKernel(){return this._blurKernel}set blurKernel(e){this._blurKernel!==e&&(this._blurKernel=e,this._disposeBlurPostProcesses())}get useKernelBlur(){return this._useKernelBlur}set useKernelBlur(e){this._useKernelBlur!==e&&(this._useKernelBlur=e,this._disposeBlurPostProcesses())}get depthScale(){return this._depthScale!==void 0?this._depthScale:this._light.getDepthScale()}set depthScale(e){this._depthScale=e}_validateFilter(e){return e}get filter(){return this._filter}set filter(e){if(e=this._validateFilter(e),this._light.needCube()){if(e===a.FILTER_BLUREXPONENTIALSHADOWMAP){this.useExponentialShadowMap=!0;return}else if(e===a.FILTER_BLURCLOSEEXPONENTIALSHADOWMAP){this.useCloseExponentialShadowMap=!0;return}else if(e===a.FILTER_PCF||e===a.FILTER_PCSS){this.usePoissonSampling=!0;return}}if((e===a.FILTER_PCF||e===a.FILTER_PCSS)&&!this._scene.getEngine()._features.supportShadowSamplers){this.usePoissonSampling=!0;return}this._filter!==e&&(this._filter=e,this._disposeBlurPostProcesses(),this._applyFilterValues(),this._light._markMeshesAsLightDirty())}get usePoissonSampling(){return this.filter===a.FILTER_POISSONSAMPLING}set usePoissonSampling(e){let i=this._validateFilter(a.FILTER_POISSONSAMPLING);!e&&this.filter!==a.FILTER_POISSONSAMPLING||(this.filter=e?i:a.FILTER_NONE)}get useExponentialShadowMap(){return this.filter===a.FILTER_EXPONENTIALSHADOWMAP}set useExponentialShadowMap(e){let i=this._validateFilter(a.FILTER_EXPONENTIALSHADOWMAP);!e&&this.filter!==a.FILTER_EXPONENTIALSHADOWMAP||(this.filter=e?i:a.FILTER_NONE)}get useBlurExponentialShadowMap(){return this.filter===a.FILTER_BLUREXPONENTIALSHADOWMAP}set useBlurExponentialShadowMap(e){let i=this._validateFilter(a.FILTER_BLUREXPONENTIALSHADOWMAP);!e&&this.filter!==a.FILTER_BLUREXPONENTIALSHADOWMAP||(this.filter=e?i:a.FILTER_NONE)}get useCloseExponentialShadowMap(){return this.filter===a.FILTER_CLOSEEXPONENTIALSHADOWMAP}set useCloseExponentialShadowMap(e){let i=this._validateFilter(a.FILTER_CLOSEEXPONENTIALSHADOWMAP);!e&&this.filter!==a.FILTER_CLOSEEXPONENTIALSHADOWMAP||(this.filter=e?i:a.FILTER_NONE)}get useBlurCloseExponentialShadowMap(){return this.filter===a.FILTER_BLURCLOSEEXPONENTIALSHADOWMAP}set useBlurCloseExponentialShadowMap(e){let i=this._validateFilter(a.FILTER_BLURCLOSEEXPONENTIALSHADOWMAP);!e&&this.filter!==a.FILTER_BLURCLOSEEXPONENTIALSHADOWMAP||(this.filter=e?i:a.FILTER_NONE)}get usePercentageCloserFiltering(){return this.filter===a.FILTER_PCF}set usePercentageCloserFiltering(e){let i=this._validateFilter(a.FILTER_PCF);!e&&this.filter!==a.FILTER_PCF||(this.filter=e?i:a.FILTER_NONE)}get filteringQuality(){return this._filteringQuality}set filteringQuality(e){this._filteringQuality!==e&&(this._filteringQuality=e,this._disposeBlurPostProcesses(),this._applyFilterValues(),this._light._markMeshesAsLightDirty())}get useContactHardeningShadow(){return this.filter===a.FILTER_PCSS}set useContactHardeningShadow(e){let i=this._validateFilter(a.FILTER_PCSS);!e&&this.filter!==a.FILTER_PCSS||(this.filter=e?i:a.FILTER_NONE)}get contactHardeningLightSizeUVRatio(){return this._contactHardeningLightSizeUVRatio}set contactHardeningLightSizeUVRatio(e){this._contactHardeningLightSizeUVRatio=e}get darkness(){return this._darkness}set darkness(e){this.setDarkness(e)}getDarkness(){return this._darkness}setDarkness(e){return e>=1?this._darkness=1:e<=0?this._darkness=0:this._darkness=e,this}get transparencyShadow(){return this._transparencyShadow}set transparencyShadow(e){this.setTransparencyShadow(e)}setTransparencyShadow(e){return this._transparencyShadow=e,this}getShadowMap(){return this._shadowMap}getShadowMapForRendering(){return this._shadowMap2?this._shadowMap2:this._shadowMap}getClassName(){return a.CLASSNAME}addShadowCaster(e,i=!0){if(!this._shadowMap)return this;if(this._shadowMap.renderList||(this._shadowMap.renderList=[]),this._shadowMap.renderList.indexOf(e)===-1&&this._shadowMap.renderList.push(e),i)for(let r of e.getChildMeshes())this._shadowMap.renderList.indexOf(r)===-1&&this._shadowMap.renderList.push(r);return this}removeShadowCaster(e,i=!0){if(!this._shadowMap||!this._shadowMap.renderList)return this;let r=this._shadowMap.renderList.indexOf(e);if(r!==-1&&this._shadowMap.renderList.splice(r,1),i)for(let s of e.getChildren())this.removeShadowCaster(s);return this}getLight(){return this._light}_getCamera(){var e;return(e=this._camera)!==null&&e!==void 0?e:this._scene.activeCamera}get mapSize(){return this._mapSize}set mapSize(e){this._mapSize=e,this._light._markMeshesAsLightDirty(),this.recreateShadowMap()}constructor(e,i,r,s){this.onBeforeShadowMapRenderObservable=new k,this.onAfterShadowMapRenderObservable=new k,this.onBeforeShadowMapRenderMeshObservable=new k,this.onAfterShadowMapRenderMeshObservable=new k,this._bias=5e-5,this._normalBias=0,this._blurBoxOffset=1,this._blurScale=2,this._blurKernel=1,this._useKernelBlur=!1,this._filter=a.FILTER_NONE,this._filteringQuality=a.QUALITY_HIGH,this._contactHardeningLightSizeUVRatio=.1,this._darkness=0,this._transparencyShadow=!1,this.enableSoftTransparentShadow=!1,this.useOpacityTextureForTransparentShadow=!1,this.frustumEdgeFalloff=0,this.forceBackFacesOnly=!1,this._lightDirection=x.Zero(),this._viewMatrix=P.Zero(),this._projectionMatrix=P.Zero(),this._transformMatrix=P.Zero(),this._cachedPosition=new x(Number.MAX_VALUE,Number.MAX_VALUE,Number.MAX_VALUE),this._cachedDirection=new x(Number.MAX_VALUE,Number.MAX_VALUE,Number.MAX_VALUE),this._currentFaceIndex=0,this._currentFaceIndexCache=0,this._defaultTextureMatrix=P.Identity(),this._mapSize=e,this._light=i,this._scene=i.getScene(),this._camera=s??null;let n=i._shadowGenerators;n||(n=i._shadowGenerators=new Map),n.set(this._camera,this),this.id=i.id,this._useUBO=this._scene.getEngine().supportsUniformBuffers,this._useUBO&&(this._sceneUBOs=[],this._sceneUBOs.push(this._scene.createSceneUniformBuffer(`Scene for Shadow Generator (light "${this._light.name}")`))),a._SceneComponentInitialization(this._scene);let o=this._scene.getEngine().getCaps();r?o.textureFloatRender&&o.textureFloatLinearFiltering?this._textureType=1:o.textureHalfFloatRender&&o.textureHalfFloatLinearFiltering?this._textureType=2:this._textureType=0:o.textureHalfFloatRender&&o.textureHalfFloatLinearFiltering?this._textureType=2:o.textureFloatRender&&o.textureFloatLinearFiltering?this._textureType=1:this._textureType=0,this._initializeGenerator(),this._applyFilterValues()}_initializeGenerator(){this._light._markMeshesAsLightDirty(),this._initializeShadowMap()}_createTargetRenderTexture(){let e=this._scene.getEngine();e._features.supportDepthStencilTexture?(this._shadowMap=new He(this._light.name+"_shadowMap",this._mapSize,this._scene,!1,!0,this._textureType,this._light.needCube(),void 0,!1,!1),this._shadowMap.createDepthStencilTexture(e.useReverseDepthBuffer?516:513,!0)):this._shadowMap=new He(this._light.name+"_shadowMap",this._mapSize,this._scene,!1,!0,this._textureType,this._light.needCube())}_initializeShadowMap(){if(this._createTargetRenderTexture(),this._shadowMap===null)return;this._shadowMap.wrapU=T.CLAMP_ADDRESSMODE,this._shadowMap.wrapV=T.CLAMP_ADDRESSMODE,this._shadowMap.anisotropicFilteringLevel=1,this._shadowMap.updateSamplingMode(T.BILINEAR_SAMPLINGMODE),this._shadowMap.renderParticles=!1,this._shadowMap.ignoreCameraViewport=!0,this._storedUniqueId&&(this._shadowMap.uniqueId=this._storedUniqueId),this._shadowMap.customRenderFunction=this._renderForShadowMap.bind(this),this._shadowMap.customIsReadyFunction=()=>!0;let e=this._scene.getEngine();this._shadowMap.onBeforeBindObservable.add(()=>{var s;this._currentSceneUBO=this._scene.getSceneUniformBuffer(),(s=e._debugPushGroup)===null||s===void 0||s.call(e,`shadow map generation for pass id ${e.currentRenderPassId}`,1)}),this._shadowMap.onBeforeRenderObservable.add(s=>{this._sceneUBOs&&this._scene.setSceneUniformBuffer(this._sceneUBOs[0]),this._currentFaceIndex=s,this._filter===a.FILTER_PCF&&e.setColorWrite(!1),this.getTransformMatrix(),this._scene.setTransformMatrix(this._viewMatrix,this._projectionMatrix),this._useUBO&&(this._scene.getSceneUniformBuffer().unbindEffect(),this._scene.finalizeSceneUbo())}),this._shadowMap.onAfterUnbindObservable.add(()=>{var s,n;if(this._sceneUBOs&&this._scene.setSceneUniformBuffer(this._currentSceneUBO),this._scene.updateTransformMatrix(),this._filter===a.FILTER_PCF&&e.setColorWrite(!0),!this.useBlurExponentialShadowMap&&!this.useBlurCloseExponentialShadowMap){(s=e._debugPopGroup)===null||s===void 0||s.call(e,1);return}let o=this.getShadowMapForRendering();o&&(this._scene.postProcessManager.directRender(this._blurPostProcesses,o.renderTarget,!0),e.unBindFramebuffer(o.renderTarget,!0),(n=e._debugPopGroup)===null||n===void 0||n.call(e,1))});let i=new De(0,0,0,0),r=new De(1,1,1,1);this._shadowMap.onClearObservable.add(s=>{this._filter===a.FILTER_PCF?s.clear(r,!1,!0,!1):this.useExponentialShadowMap||this.useBlurExponentialShadowMap?s.clear(i,!0,!0,!1):s.clear(r,!0,!0,!1)}),this._shadowMap.onResizeObservable.add(s=>{this._storedUniqueId=this._shadowMap.uniqueId,this._mapSize=s.getRenderSize(),this._light._markMeshesAsLightDirty(),this.recreateShadowMap()});for(let s=vt.MIN_RENDERINGGROUPS;s<vt.MAX_RENDERINGGROUPS;s++)this._shadowMap.setRenderingAutoClearDepthStencil(s,!1)}_initializeBlurRTTAndPostProcesses(){let e=this._scene.getEngine(),i=this._mapSize/this.blurScale;(!this.useKernelBlur||this.blurScale!==1)&&(this._shadowMap2=new He(this._light.name+"_shadowMap2",i,this._scene,!1,!0,this._textureType,void 0,void 0,!1),this._shadowMap2.wrapU=T.CLAMP_ADDRESSMODE,this._shadowMap2.wrapV=T.CLAMP_ADDRESSMODE,this._shadowMap2.updateSamplingMode(T.BILINEAR_SAMPLINGMODE)),this.useKernelBlur?(this._kernelBlurXPostprocess=new Ce(this._light.name+"KernelBlurX",new Ue(1,0),this.blurKernel,1,null,T.BILINEAR_SAMPLINGMODE,e,!1,this._textureType),this._kernelBlurXPostprocess.width=i,this._kernelBlurXPostprocess.height=i,this._kernelBlurXPostprocess.externalTextureSamplerBinding=!0,this._kernelBlurXPostprocess.onApplyObservable.add(r=>{r.setTexture("textureSampler",this._shadowMap)}),this._kernelBlurYPostprocess=new Ce(this._light.name+"KernelBlurY",new Ue(0,1),this.blurKernel,1,null,T.BILINEAR_SAMPLINGMODE,e,!1,this._textureType),this._kernelBlurXPostprocess.autoClear=!1,this._kernelBlurYPostprocess.autoClear=!1,this._textureType===0&&(this._kernelBlurXPostprocess.packedFloat=!0,this._kernelBlurYPostprocess.packedFloat=!0),this._blurPostProcesses=[this._kernelBlurXPostprocess,this._kernelBlurYPostprocess]):(this._boxBlurPostprocess=new Y(this._light.name+"DepthBoxBlur","depthBoxBlur",["screenSize","boxOffset"],[],1,null,T.BILINEAR_SAMPLINGMODE,e,!1,"#define OFFSET "+this._blurBoxOffset,this._textureType),this._boxBlurPostprocess.externalTextureSamplerBinding=!0,this._boxBlurPostprocess.onApplyObservable.add(r=>{r.setFloat2("screenSize",i,i),r.setTexture("textureSampler",this._shadowMap)}),this._boxBlurPostprocess.autoClear=!1,this._blurPostProcesses=[this._boxBlurPostprocess])}_renderForShadowMap(e,i,r,s){let n;if(s.length)for(n=0;n<s.length;n++)this._renderSubMeshForShadowMap(s.data[n]);for(n=0;n<e.length;n++)this._renderSubMeshForShadowMap(e.data[n]);for(n=0;n<i.length;n++)this._renderSubMeshForShadowMap(i.data[n]);if(this._transparencyShadow)for(n=0;n<r.length;n++)this._renderSubMeshForShadowMap(r.data[n],!0);else for(n=0;n<r.length;n++)r.data[n].getEffectiveMesh()._internalAbstractMeshDataInfo._isActiveIntermediate=!1}_bindCustomEffectForRenderSubMeshForShadowMap(e,i,r){i.setMatrix("viewProjection",this.getTransformMatrix())}_renderSubMeshForShadowMap(e,i=!1){var r,s;let n=e.getRenderingMesh(),o=e.getEffectiveMesh(),d=this._scene,l=d.getEngine(),h=e.getMaterial();if(o._internalAbstractMeshDataInfo._isActiveIntermediate=!1,!h||e.verticesCount===0||e._renderId===d.getRenderId())return;let c=o._getWorldMatrixDeterminant()<0,u=(r=n.overrideMaterialSideOrientation)!==null&&r!==void 0?r:h.sideOrientation;c&&(u=u===0?1:0);let p=u===0;l.setState(h.backFaceCulling,void 0,void 0,p,h.cullBackFaces);let _=n._getInstancesRenderList(e._id,!!e.getReplacementMesh());if(_.mustReturn)return;let v=l.getCaps().instancedArrays&&(_.visibleInstances[e._id]!==null&&_.visibleInstances[e._id]!==void 0||n.hasThinInstances);if(!(this.customAllowRendering&&!this.customAllowRendering(e)))if(this.isReady(e,v,i)){e._renderId=d.getRenderId();let m=h.shadowDepthWrapper,A=(s=m?.getEffect(e,this,l.currentRenderPassId))!==null&&s!==void 0?s:e._getDrawWrapper(),S=pt.GetEffect(A);l.enableEffect(A),v||n._bind(e,S,h.fillMode),this.getTransformMatrix(),S.setFloat3("biasAndScaleSM",this.bias,this.normalBias,this.depthScale),this.getLight().getTypeID()===w.LIGHTTYPEID_DIRECTIONALLIGHT?S.setVector3("lightDataSM",this._cachedDirection):S.setVector3("lightDataSM",this._cachedPosition);let C=this._getCamera();if(C&&S.setFloat2("depthValuesSM",this.getLight().getDepthMinZ(C),this.getLight().getDepthMinZ(C)+this.getLight().getDepthMaxZ(C)),i&&this.enableSoftTransparentShadow&&S.setFloat("softTransparentShadowSM",o.visibility*h.alpha),m)e._setMainDrawWrapperOverride(A),m.standalone?m.baseMaterial.bindForSubMesh(o.getWorldMatrix(),n,e):h.bindForSubMesh(o.getWorldMatrix(),n,e),e._setMainDrawWrapperOverride(null);else{if(this._opacityTexture&&(S.setTexture("diffuseSampler",this._opacityTexture),S.setMatrix("diffuseMatrix",this._opacityTexture.getTextureMatrix()||this._defaultTextureMatrix)),n.useBones&&n.computeBonesUsingShaders&&n.skeleton){let N=n.skeleton;if(N.isUsingTextureForMatrices){let R=N.getTransformMatrixTexture(n);if(!R)return;S.setTexture("boneSampler",R),S.setFloat("boneTextureWidth",4*(N.bones.length+1))}else S.setMatrices("mBones",N.getTransformMatrices(n))}b.BindMorphTargetParameters(n,S),n.morphTargetManager&&n.morphTargetManager.isUsingTextureForTargets&&n.morphTargetManager._bind(S),et(S,h,d)}!this._useUBO&&!m&&this._bindCustomEffectForRenderSubMeshForShadowMap(e,S,o),b.BindSceneUniformBuffer(S,this._scene.getSceneUniformBuffer()),this._scene.getSceneUniformBuffer().bindUniformBuffer();let L=o.getWorldMatrix();v&&(o.getMeshUniformBuffer().bindToEffect(S,"Mesh"),o.transferToEffect(L)),this.forceBackFacesOnly&&l.setState(!0,0,!1,!0,h.cullBackFaces),this.onBeforeShadowMapRenderMeshObservable.notifyObservers(n),this.onBeforeShadowMapRenderObservable.notifyObservers(S),n._processRendering(o,e,S,h.fillMode,_,v,(N,R)=>{o!==n&&!N?(n.getMeshUniformBuffer().bindToEffect(S,"Mesh"),n.transferToEffect(R)):(o.getMeshUniformBuffer().bindToEffect(S,"Mesh"),o.transferToEffect(N?R:L))}),this.forceBackFacesOnly&&l.setState(!0,0,!1,!1,h.cullBackFaces),this.onAfterShadowMapRenderObservable.notifyObservers(S),this.onAfterShadowMapRenderMeshObservable.notifyObservers(n)}else this._shadowMap&&this._shadowMap.resetRefreshCounter()}_applyFilterValues(){this._shadowMap&&(this.filter===a.FILTER_NONE||this.filter===a.FILTER_PCSS?this._shadowMap.updateSamplingMode(T.NEAREST_SAMPLINGMODE):this._shadowMap.updateSamplingMode(T.BILINEAR_SAMPLINGMODE))}forceCompilation(e,i){let r=Te({useInstances:!1},i),s=this.getShadowMap();if(!s){e&&e(this);return}let n=s.renderList;if(!n){e&&e(this);return}let o=new Array;for(let h of n)o.push(...h.subMeshes);if(o.length===0){e&&e(this);return}let d=0,l=()=>{var h,c;if(!(!this._scene||!this._scene.getEngine())){for(;this.isReady(o[d],r.useInstances,(c=(h=o[d].getMaterial())===null||h===void 0?void 0:h.needAlphaBlendingForMesh(o[d].getMesh()))!==null&&c!==void 0?c:!1);)if(d++,d>=o.length){e&&e(this);return}setTimeout(l,16)}};l()}forceCompilationAsync(e){return new Promise(i=>{this.forceCompilation(()=>{i()},e)})}_isReadyCustomDefines(e,i,r){}_prepareShadowDefines(e,i,r,s){r.push("#define SM_LIGHTTYPE_"+this._light.getClassName().toUpperCase()),r.push("#define SM_FLOAT "+(this._textureType!==0?"1":"0")),r.push("#define SM_ESM "+(this.useExponentialShadowMap||this.useBlurExponentialShadowMap?"1":"0")),r.push("#define SM_DEPTHTEXTURE "+(this.usePercentageCloserFiltering||this.useContactHardeningShadow?"1":"0"));let n=e.getMesh();return r.push("#define SM_NORMALBIAS "+(this.normalBias&&n.isVerticesDataPresent(y.NormalKind)?"1":"0")),r.push("#define SM_DIRECTIONINLIGHTDATA "+(this.getLight().getTypeID()===w.LIGHTTYPEID_DIRECTIONALLIGHT?"1":"0")),r.push("#define SM_USEDISTANCE "+(this._light.needCube()?"1":"0")),r.push("#define SM_SOFTTRANSPARENTSHADOW "+(this.enableSoftTransparentShadow&&s?"1":"0")),this._isReadyCustomDefines(r,e,i),r}isReady(e,i,r){var s;let n=e.getMaterial(),o=n?.shadowDepthWrapper;if(this._opacityTexture=null,!n)return!1;let d=[];if(this._prepareShadowDefines(e,i,d,r),o){if(!o.isReadyForSubMesh(e,d,this,i,this._scene.getEngine().currentRenderPassId))return!1}else{let l=e._getDrawWrapper(void 0,!0),h=l.effect,c=l.defines,u=[y.PositionKind],p=e.getMesh();this.normalBias&&p.isVerticesDataPresent(y.NormalKind)&&(u.push(y.NormalKind),d.push("#define NORMAL"),p.nonUniformScaling&&d.push("#define NONUNIFORMSCALING"));let _=n.needAlphaTesting();if((_||n.needAlphaBlending())&&(this.useOpacityTextureForTransparentShadow?this._opacityTexture=n.opacityTexture:this._opacityTexture=n.getAlphaTestTexture(),this._opacityTexture)){if(!this._opacityTexture.isReady())return!1;let C=(s=n.alphaCutOff)!==null&&s!==void 0?s:a.DEFAULT_ALPHA_CUTOFF;d.push("#define ALPHATEXTURE"),_&&d.push(`#define ALPHATESTVALUE ${C}${C%1===0?".":""}`),p.isVerticesDataPresent(y.UVKind)&&(u.push(y.UVKind),d.push("#define UV1")),p.isVerticesDataPresent(y.UV2Kind)&&this._opacityTexture.coordinatesIndex===1&&(u.push(y.UV2Kind),d.push("#define UV2"))}let v=new ut;if(p.useBones&&p.computeBonesUsingShaders&&p.skeleton){u.push(y.MatricesIndicesKind),u.push(y.MatricesWeightsKind),p.numBoneInfluencers>4&&(u.push(y.MatricesIndicesExtraKind),u.push(y.MatricesWeightsExtraKind));let C=p.skeleton;d.push("#define NUM_BONE_INFLUENCERS "+p.numBoneInfluencers),p.numBoneInfluencers>0&&v.addCPUSkinningFallback(0,p),C.isUsingTextureForMatrices?d.push("#define BONETEXTURE"):d.push("#define BonesPerMesh "+(C.bones.length+1))}else d.push("#define NUM_BONE_INFLUENCERS 0");let m=p.morphTargetManager,A=0;if(m&&m.numInfluencers>0&&(d.push("#define MORPHTARGETS"),A=m.numInfluencers,d.push("#define NUM_MORPH_INFLUENCERS "+A),m.isUsingTextureForTargets&&d.push("#define MORPHTARGETS_TEXTURE"),b.PrepareAttributesForMorphTargetsInfluencers(u,p,A)),Nt(n,this._scene,d),i&&(d.push("#define INSTANCES"),b.PushAttributesForInstances(u),e.getRenderingMesh().hasThinInstances&&d.push("#define THIN_INSTANCES")),this.customShaderOptions&&this.customShaderOptions.defines)for(let C of this.customShaderOptions.defines)d.indexOf(C)===-1&&d.push(C);let S=d.join(`
`);if(c!==S){c=S;let C="shadowMap",L=["world","mBones","viewProjection","diffuseMatrix","lightDataSM","depthValuesSM","biasAndScaleSM","morphTargetInfluences","boneTextureWidth","softTransparentShadowSM","morphTargetTextureInfo","morphTargetTextureIndices"],N=["diffuseSampler","boneSampler","morphTargets"],R=["Scene","Mesh"];if(Je(L),this.customShaderOptions){if(C=this.customShaderOptions.shaderName,this.customShaderOptions.attributes)for(let D of this.customShaderOptions.attributes)u.indexOf(D)===-1&&u.push(D);if(this.customShaderOptions.uniforms)for(let D of this.customShaderOptions.uniforms)L.indexOf(D)===-1&&L.push(D);if(this.customShaderOptions.samplers)for(let D of this.customShaderOptions.samplers)N.indexOf(D)===-1&&N.push(D)}let U=this._scene.getEngine();h=U.createEffect(C,{attributes:u,uniformsNames:L,uniformBuffersNames:R,samplers:N,defines:S,fallbacks:v,onCompiled:null,onError:null,indexParameters:{maxSimultaneousMorphTargets:A}},U),l.setEffect(h,c)}if(!h.isReady())return!1}return(this.useBlurExponentialShadowMap||this.useBlurCloseExponentialShadowMap)&&(!this._blurPostProcesses||!this._blurPostProcesses.length)&&this._initializeBlurRTTAndPostProcesses(),!(this._kernelBlurXPostprocess&&!this._kernelBlurXPostprocess.isReady()||this._kernelBlurYPostprocess&&!this._kernelBlurYPostprocess.isReady()||this._boxBlurPostprocess&&!this._boxBlurPostprocess.isReady())}prepareDefines(e,i){let r=this._scene,s=this._light;!r.shadowsEnabled||!s.shadowEnabled||(e["SHADOW"+i]=!0,this.useContactHardeningShadow?(e["SHADOWPCSS"+i]=!0,this._filteringQuality===a.QUALITY_LOW?e["SHADOWLOWQUALITY"+i]=!0:this._filteringQuality===a.QUALITY_MEDIUM&&(e["SHADOWMEDIUMQUALITY"+i]=!0)):this.usePercentageCloserFiltering?(e["SHADOWPCF"+i]=!0,this._filteringQuality===a.QUALITY_LOW?e["SHADOWLOWQUALITY"+i]=!0:this._filteringQuality===a.QUALITY_MEDIUM&&(e["SHADOWMEDIUMQUALITY"+i]=!0)):this.usePoissonSampling?e["SHADOWPOISSON"+i]=!0:this.useExponentialShadowMap||this.useBlurExponentialShadowMap?e["SHADOWESM"+i]=!0:(this.useCloseExponentialShadowMap||this.useBlurCloseExponentialShadowMap)&&(e["SHADOWCLOSEESM"+i]=!0),s.needCube()&&(e["SHADOWCUBE"+i]=!0))}bindShadowLight(e,i){let r=this._light;if(!this._scene.shadowsEnabled||!r.shadowEnabled)return;let s=this._getCamera();if(!s)return;let n=this.getShadowMap();n&&(r.needCube()||i.setMatrix("lightMatrix"+e,this.getTransformMatrix()),this._filter===a.FILTER_PCF?(i.setDepthStencilTexture("shadowSampler"+e,this.getShadowMapForRendering()),r._uniformBuffer.updateFloat4("shadowsInfo",this.getDarkness(),n.getSize().width,1/n.getSize().width,this.frustumEdgeFalloff,e)):this._filter===a.FILTER_PCSS?(i.setDepthStencilTexture("shadowSampler"+e,this.getShadowMapForRendering()),i.setTexture("depthSampler"+e,this.getShadowMapForRendering()),r._uniformBuffer.updateFloat4("shadowsInfo",this.getDarkness(),1/n.getSize().width,this._contactHardeningLightSizeUVRatio*n.getSize().width,this.frustumEdgeFalloff,e)):(i.setTexture("shadowSampler"+e,this.getShadowMapForRendering()),r._uniformBuffer.updateFloat4("shadowsInfo",this.getDarkness(),this.blurScale/n.getSize().width,this.depthScale,this.frustumEdgeFalloff,e)),r._uniformBuffer.updateFloat2("depthValues",this.getLight().getDepthMinZ(s),this.getLight().getDepthMinZ(s)+this.getLight().getDepthMaxZ(s),e))}getTransformMatrix(){let e=this._scene;if(this._currentRenderId===e.getRenderId()&&this._currentFaceIndexCache===this._currentFaceIndex)return this._transformMatrix;this._currentRenderId=e.getRenderId(),this._currentFaceIndexCache=this._currentFaceIndex;let i=this._light.position;if(this._light.computeTransformedInformation()&&(i=this._light.transformedPosition),x.NormalizeToRef(this._light.getShadowDirection(this._currentFaceIndex),this._lightDirection),Math.abs(x.Dot(this._lightDirection,x.Up()))===1&&(this._lightDirection.z=1e-13),this._light.needProjectionMatrixCompute()||!this._cachedPosition||!this._cachedDirection||!i.equals(this._cachedPosition)||!this._lightDirection.equals(this._cachedDirection)){this._cachedPosition.copyFrom(i),this._cachedDirection.copyFrom(this._lightDirection),P.LookAtLHToRef(i,i.add(this._lightDirection),x.Up(),this._viewMatrix);let r=this.getShadowMap();if(r){let s=r.renderList;s&&this._light.setShadowProjectionMatrix(this._projectionMatrix,this._viewMatrix,s)}this._viewMatrix.multiplyToRef(this._projectionMatrix,this._transformMatrix)}return this._transformMatrix}recreateShadowMap(){let e=this._shadowMap;if(!e)return;let i=e.renderList;if(this._disposeRTTandPostProcesses(),this._initializeGenerator(),this.filter=this._filter,this._applyFilterValues(),i){this._shadowMap.renderList||(this._shadowMap.renderList=[]);for(let r of i)this._shadowMap.renderList.push(r)}else this._shadowMap.renderList=null}_disposeBlurPostProcesses(){this._shadowMap2&&(this._shadowMap2.dispose(),this._shadowMap2=null),this._boxBlurPostprocess&&(this._boxBlurPostprocess.dispose(),this._boxBlurPostprocess=null),this._kernelBlurXPostprocess&&(this._kernelBlurXPostprocess.dispose(),this._kernelBlurXPostprocess=null),this._kernelBlurYPostprocess&&(this._kernelBlurYPostprocess.dispose(),this._kernelBlurYPostprocess=null),this._blurPostProcesses=[]}_disposeRTTandPostProcesses(){this._shadowMap&&(this._shadowMap.dispose(),this._shadowMap=null),this._disposeBlurPostProcesses()}_disposeSceneUBOs(){if(this._sceneUBOs){for(let e of this._sceneUBOs)e.dispose();this._sceneUBOs=[]}}dispose(){if(this._disposeRTTandPostProcesses(),this._disposeSceneUBOs(),this._light){if(this._light._shadowGenerators){let e=this._light._shadowGenerators.entries();for(let i=e.next();i.done!==!0;i=e.next()){let[r,s]=i.value;s===this&&this._light._shadowGenerators.delete(r)}this._light._shadowGenerators.size===0&&(this._light._shadowGenerators=null)}this._light._markMeshesAsLightDirty()}this.onBeforeShadowMapRenderMeshObservable.clear(),this.onBeforeShadowMapRenderObservable.clear(),this.onAfterShadowMapRenderMeshObservable.clear(),this.onAfterShadowMapRenderObservable.clear()}serialize(){var e;let i={},r=this.getShadowMap();if(!r)return i;if(i.className=this.getClassName(),i.lightId=this._light.id,i.cameraId=(e=this._camera)===null||e===void 0?void 0:e.id,i.id=this.id,i.mapSize=r.getRenderSize(),i.forceBackFacesOnly=this.forceBackFacesOnly,i.darkness=this.getDarkness(),i.transparencyShadow=this._transparencyShadow,i.frustumEdgeFalloff=this.frustumEdgeFalloff,i.bias=this.bias,i.normalBias=this.normalBias,i.usePercentageCloserFiltering=this.usePercentageCloserFiltering,i.useContactHardeningShadow=this.useContactHardeningShadow,i.contactHardeningLightSizeUVRatio=this.contactHardeningLightSizeUVRatio,i.filteringQuality=this.filteringQuality,i.useExponentialShadowMap=this.useExponentialShadowMap,i.useBlurExponentialShadowMap=this.useBlurExponentialShadowMap,i.useCloseExponentialShadowMap=this.useBlurExponentialShadowMap,i.useBlurCloseExponentialShadowMap=this.useBlurExponentialShadowMap,i.usePoissonSampling=this.usePoissonSampling,i.depthScale=this.depthScale,i.blurBoxOffset=this.blurBoxOffset,i.blurKernel=this.blurKernel,i.blurScale=this.blurScale,i.useKernelBlur=this.useKernelBlur,i.renderList=[],r.renderList)for(let s=0;s<r.renderList.length;s++){let n=r.renderList[s];i.renderList.push(n.id)}return i}static Parse(e,i,r){let s=i.getLightById(e.lightId),n=e.cameraId!==void 0?i.getCameraById(e.cameraId):null,o=r?r(e.mapSize,s,n):new a(e.mapSize,s,void 0,n),d=o.getShadowMap();for(let l=0;l<e.renderList.length;l++)i.getMeshesById(e.renderList[l]).forEach(function(h){d&&(d.renderList||(d.renderList=[]),d.renderList.push(h))});return e.id!==void 0&&(o.id=e.id),o.forceBackFacesOnly=!!e.forceBackFacesOnly,e.darkness!==void 0&&o.setDarkness(e.darkness),e.transparencyShadow&&o.setTransparencyShadow(!0),e.frustumEdgeFalloff!==void 0&&(o.frustumEdgeFalloff=e.frustumEdgeFalloff),e.bias!==void 0&&(o.bias=e.bias),e.normalBias!==void 0&&(o.normalBias=e.normalBias),e.usePercentageCloserFiltering?o.usePercentageCloserFiltering=!0:e.useContactHardeningShadow?o.useContactHardeningShadow=!0:e.usePoissonSampling?o.usePoissonSampling=!0:e.useExponentialShadowMap?o.useExponentialShadowMap=!0:e.useBlurExponentialShadowMap?o.useBlurExponentialShadowMap=!0:e.useCloseExponentialShadowMap?o.useCloseExponentialShadowMap=!0:e.useBlurCloseExponentialShadowMap?o.useBlurCloseExponentialShadowMap=!0:e.useVarianceShadowMap?o.useExponentialShadowMap=!0:e.useBlurVarianceShadowMap&&(o.useBlurExponentialShadowMap=!0),e.contactHardeningLightSizeUVRatio!==void 0&&(o.contactHardeningLightSizeUVRatio=e.contactHardeningLightSizeUVRatio),e.filteringQuality!==void 0&&(o.filteringQuality=e.filteringQuality),e.depthScale&&(o.depthScale=e.depthScale),e.blurScale&&(o.blurScale=e.blurScale),e.blurBoxOffset&&(o.blurBoxOffset=e.blurBoxOffset),e.useKernelBlur&&(o.useKernelBlur=e.useKernelBlur),e.blurKernel&&(o.blurKernel=e.blurKernel),o}}return a.CLASSNAME="ShadowGenerator",a.FILTER_NONE=0,a.FILTER_EXPONENTIALSHADOWMAP=1,a.FILTER_POISSONSAMPLING=2,a.FILTER_BLUREXPONENTIALSHADOWMAP=3,a.FILTER_CLOSEEXPONENTIALSHADOWMAP=4,a.FILTER_BLURCLOSEEXPONENTIALSHADOWMAP=5,a.FILTER_PCF=6,a.FILTER_PCSS=7,a.QUALITY_HIGH=0,a.QUALITY_MEDIUM=1,a.QUALITY_LOW=2,a.DEFAULT_ALPHA_CUTOFF=.5,a._SceneComponentInitialization=t=>{throw Re("ShadowGeneratorSceneComponent")},a})(),os="depthPixelShader",ls=`#ifdef ALPHATEST
varying vec2 vUV;
uniform sampler2D diffuseSampler;
#endif
#include<clipPlaneFragmentDeclaration>
varying float vDepthMetric;
#ifdef PACKED
#include<packingFunctions>
#endif
#ifdef STORE_CAMERASPACE_Z
varying vec4 vViewPos;
#endif
#define CUSTOM_FRAGMENT_DEFINITIONS
void main(void)
{
#include<clipPlaneFragment>
#ifdef ALPHATEST
if (texture2D(diffuseSampler,vUV).a<0.4)
discard;
#endif
#ifdef STORE_CAMERASPACE_Z
#ifdef PACKED
gl_FragColor=pack(vViewPos.z);
#else
gl_FragColor=vec4(vViewPos.z,0.0,0.0,1.0);
#endif
#else
#ifdef NONLINEARDEPTH
#ifdef PACKED
gl_FragColor=pack(gl_FragCoord.z);
#else
gl_FragColor=vec4(gl_FragCoord.z,0.0,0.0,0.0);
#endif
#else
#ifdef PACKED
gl_FragColor=pack(vDepthMetric);
#else
gl_FragColor=vec4(vDepthMetric,0.0,0.0,1.0);
#endif
#endif
#endif
}`;E.ShadersStore[os]=ls;var hs="instancesDeclaration",ds=`#ifdef INSTANCES
attribute vec4 world0;
attribute vec4 world1;
attribute vec4 world2;
attribute vec4 world3;
#ifdef INSTANCESCOLOR
attribute vec4 instanceColor;
#endif
#if defined(THIN_INSTANCES) && !defined(WORLD_UBO)
uniform mat4 world;
#endif
#if defined(VELOCITY) || defined(PREPASS_VELOCITY)
attribute vec4 previousWorld0;
attribute vec4 previousWorld1;
attribute vec4 previousWorld2;
attribute vec4 previousWorld3;
#ifdef THIN_INSTANCES
uniform mat4 previousWorld;
#endif
#endif
#else
#if !defined(WORLD_UBO)
uniform mat4 world;
#endif
#if defined(VELOCITY) || defined(PREPASS_VELOCITY)
uniform mat4 previousWorld;
#endif
#endif
`;E.IncludesShadersStore[hs]=ds;var cs="depthVertexShader",us=`attribute vec3 position;
#include<bonesDeclaration>
#include<bakedVertexAnimationDeclaration>
#include<morphTargetsVertexGlobalDeclaration>
#include<morphTargetsVertexDeclaration>[0..maxSimultaneousMorphTargets]
#include<clipPlaneVertexDeclaration>
#include<instancesDeclaration>
uniform mat4 viewProjection;
uniform vec2 depthValues;
#if defined(ALPHATEST) || defined(NEED_UV)
varying vec2 vUV;
uniform mat4 diffuseMatrix;
#ifdef UV1
attribute vec2 uv;
#endif
#ifdef UV2
attribute vec2 uv2;
#endif
#endif
#ifdef STORE_CAMERASPACE_Z
uniform mat4 view;
varying vec4 vViewPos;
#endif
varying float vDepthMetric;
#define CUSTOM_VERTEX_DEFINITIONS
void main(void)
{
vec3 positionUpdated=position;
#ifdef UV1
vec2 uvUpdated=uv;
#endif
#include<morphTargetsVertexGlobal>
#include<morphTargetsVertex>[0..maxSimultaneousMorphTargets]
#include<instancesVertex>
#include<bonesVertex>
#include<bakedVertexAnimation>
vec4 worldPos=finalWorld*vec4(positionUpdated,1.0);
#include<clipPlaneVertex>
gl_Position=viewProjection*worldPos;
#ifdef STORE_CAMERASPACE_Z
vViewPos=view*worldPos;
#else
#ifdef USE_REVERSE_DEPTHBUFFER
vDepthMetric=((-gl_Position.z+depthValues.x)/(depthValues.y));
#else
vDepthMetric=((gl_Position.z+depthValues.x)/(depthValues.y));
#endif
#endif
#if defined(ALPHATEST) || defined(BASIC_RENDER)
#ifdef UV1
vUV=vec2(diffuseMatrix*vec4(uvUpdated,1.0,0.0));
#endif
#ifdef UV2
vUV=vec2(diffuseMatrix*vec4(uv2,1.0,0.0));
#endif
#endif
}
`;E.ShadersStore[cs]=us;var fs=(()=>{class a{setMaterialForRendering(e,i){this._depthMap.setMaterialForRendering(e,i)}constructor(e,i=1,r=null,s=!1,n=T.TRILINEAR_SAMPLINGMODE,o=!1,d){this.enabled=!0,this.forceDepthWriteTransparentMeshes=!1,this.useOnlyInActiveCamera=!1,this.reverseCulling=!1,this._scene=e,this._storeNonLinearDepth=s,this._storeCameraSpaceZ=o,this.isPacked=i===0,this.isPacked?this.clearColor=new De(1,1,1,1):this.clearColor=new De(o?1e8:1,0,0,1),a._SceneComponentInitialization(this._scene);let l=e.getEngine();this._camera=r,n!==T.NEAREST_SAMPLINGMODE&&(i===1&&!l._caps.textureFloatLinearFiltering&&(n=T.NEAREST_SAMPLINGMODE),i===2&&!l._caps.textureHalfFloatLinearFiltering&&(n=T.NEAREST_SAMPLINGMODE));let h=this.isPacked||!l._features.supportExtendedTextureFormats?5:6;this._depthMap=new He(d??"DepthRenderer",{width:l.getRenderWidth(),height:l.getRenderHeight()},this._scene,!1,!0,i,!1,n,void 0,void 0,void 0,h),this._depthMap.wrapU=T.CLAMP_ADDRESSMODE,this._depthMap.wrapV=T.CLAMP_ADDRESSMODE,this._depthMap.refreshRate=1,this._depthMap.renderParticles=!1,this._depthMap.renderList=null,this._depthMap.activeCamera=this._camera,this._depthMap.ignoreCameraViewport=!0,this._depthMap.useCameraPostProcesses=!1,this._depthMap.onClearObservable.add(u=>{u.clear(this.clearColor,!0,!0,!0)}),this._depthMap.onBeforeBindObservable.add(()=>{var u;(u=l._debugPushGroup)===null||u===void 0||u.call(l,"depth renderer",1)}),this._depthMap.onAfterUnbindObservable.add(()=>{var u;(u=l._debugPopGroup)===null||u===void 0||u.call(l,1)}),this._depthMap.customIsReadyFunction=(u,p,_)=>{if((_||p===0)&&u.subMeshes)for(let v=0;v<u.subMeshes.length;++v){let m=u.subMeshes[v],A=m.getRenderingMesh(),S=A._getInstancesRenderList(m._id,!!m.getReplacementMesh()),C=l.getCaps().instancedArrays&&(S.visibleInstances[m._id]!==null&&S.visibleInstances[m._id]!==void 0||A.hasThinInstances);if(!this.isReady(m,C))return!1}return!0};let c=u=>{var p,_;let v=u.getRenderingMesh(),m=u.getEffectiveMesh(),A=this._scene,S=A.getEngine(),C=u.getMaterial();if(m._internalAbstractMeshDataInfo._isActiveIntermediate=!1,!C||m.infiniteDistance||C.disableDepthWrite||u.verticesCount===0||u._renderId===A.getRenderId())return;let L=m._getWorldMatrixDeterminant()<0,N=(p=v.overrideMaterialSideOrientation)!==null&&p!==void 0?p:C.sideOrientation;L&&(N=N===0?1:0);let R=N===0;S.setState(C.backFaceCulling,0,!1,R,this.reverseCulling?!C.cullBackFaces:C.cullBackFaces);let U=v._getInstancesRenderList(u._id,!!u.getReplacementMesh());if(U.mustReturn)return;let D=S.getCaps().instancedArrays&&(U.visibleInstances[u._id]!==null&&U.visibleInstances[u._id]!==void 0||v.hasThinInstances),F=this._camera||A.activeCamera;if(this.isReady(u,D)&&F){u._renderId=A.getRenderId();let he=(_=m._internalAbstractMeshDataInfo._materialForRenderPass)===null||_===void 0?void 0:_[S.currentRenderPassId],B=u._getDrawWrapper();!B&&he&&(B=he._getDrawWrapper());let Ie=F.mode===q.ORTHOGRAPHIC_CAMERA;if(!B)return;let z=B.effect;S.enableEffect(B),D||v._bind(u,z,C.fillMode),he?he.bindForSubMesh(m.getWorldMatrix(),m,u):(z.setMatrix("viewProjection",A.getTransformMatrix()),z.setMatrix("world",m.getWorldMatrix()),this._storeCameraSpaceZ&&z.setMatrix("view",A.getViewMatrix()));let ee,te;if(Ie?(ee=!S.useReverseDepthBuffer&&S.isNDCHalfZRange?0:1,te=S.useReverseDepthBuffer&&S.isNDCHalfZRange?0:1):(ee=S.useReverseDepthBuffer&&S.isNDCHalfZRange?F.minZ:S.isNDCHalfZRange?0:F.minZ,te=S.useReverseDepthBuffer&&S.isNDCHalfZRange?0:F.maxZ),z.setFloat2("depthValues",ee,ee+te),!he){if(C.needAlphaTesting()){let K=C.getAlphaTestTexture();K&&(z.setTexture("diffuseSampler",K),z.setMatrix("diffuseMatrix",K.getTextureMatrix()))}if(v.useBones&&v.computeBonesUsingShaders&&v.skeleton){let K=v.skeleton;if(K.isUsingTextureForMatrices){let Ee=K.getTransformMatrixTexture(v);if(!Ee)return;z.setTexture("boneSampler",Ee),z.setFloat("boneTextureWidth",4*(K.bones.length+1))}else z.setMatrices("mBones",K.getTransformMatrices(v))}et(z,C,A),b.BindMorphTargetParameters(v,z),v.morphTargetManager&&v.morphTargetManager.isUsingTextureForTargets&&v.morphTargetManager._bind(z)}v._processRendering(m,u,z,C.fillMode,U,D,(K,Ee)=>z.setMatrix("world",Ee))}};this._depthMap.customRenderFunction=(u,p,_,v)=>{let m;if(v.length)for(m=0;m<v.length;m++)c(v.data[m]);for(m=0;m<u.length;m++)c(u.data[m]);for(m=0;m<p.length;m++)c(p.data[m]);if(this.forceDepthWriteTransparentMeshes)for(m=0;m<_.length;m++)c(_.data[m]);else for(m=0;m<_.length;m++)_.data[m].getEffectiveMesh()._internalAbstractMeshDataInfo._isActiveIntermediate=!1}}isReady(e,i){var r;let s=this._scene.getEngine(),n=e.getMesh(),o=n.getScene(),d=(r=n._internalAbstractMeshDataInfo._materialForRenderPass)===null||r===void 0?void 0:r[s.currentRenderPassId];if(d)return d.isReadyForSubMesh(n,e,i);let l=e.getMaterial();if(!l||l.disableDepthWrite)return!1;let h=[],c=[y.PositionKind];if(l&&l.needAlphaTesting()&&l.getAlphaTestTexture()&&(h.push("#define ALPHATEST"),n.isVerticesDataPresent(y.UVKind)&&(c.push(y.UVKind),h.push("#define UV1")),n.isVerticesDataPresent(y.UV2Kind)&&(c.push(y.UV2Kind),h.push("#define UV2"))),n.useBones&&n.computeBonesUsingShaders){c.push(y.MatricesIndicesKind),c.push(y.MatricesWeightsKind),n.numBoneInfluencers>4&&(c.push(y.MatricesIndicesExtraKind),c.push(y.MatricesWeightsExtraKind)),h.push("#define NUM_BONE_INFLUENCERS "+n.numBoneInfluencers),h.push("#define BonesPerMesh "+(n.skeleton?n.skeleton.bones.length+1:0));let A=e.getRenderingMesh().skeleton;A!=null&&A.isUsingTextureForMatrices&&h.push("#define BONETEXTURE")}else h.push("#define NUM_BONE_INFLUENCERS 0");let u=n.morphTargetManager,p=0;u&&u.numInfluencers>0&&(p=u.numInfluencers,h.push("#define MORPHTARGETS"),h.push("#define NUM_MORPH_INFLUENCERS "+p),u.isUsingTextureForTargets&&h.push("#define MORPHTARGETS_TEXTURE"),b.PrepareAttributesForMorphTargetsInfluencers(c,n,p)),i&&(h.push("#define INSTANCES"),b.PushAttributesForInstances(c),e.getRenderingMesh().hasThinInstances&&h.push("#define THIN_INSTANCES")),this._storeNonLinearDepth&&h.push("#define NONLINEARDEPTH"),this._storeCameraSpaceZ&&h.push("#define STORE_CAMERASPACE_Z"),this.isPacked&&h.push("#define PACKED"),Nt(l,o,h);let _=e._getDrawWrapper(void 0,!0),v=_.defines,m=h.join(`
`);if(v!==m){let A=["world","mBones","boneTextureWidth","viewProjection","view","diffuseMatrix","depthValues","morphTargetInfluences","morphTargetTextureInfo","morphTargetTextureIndices"];Je(A),_.setEffect(s.createEffect("depth",c,A,["diffuseSampler","morphTargets","boneSampler"],m,void 0,void 0,void 0,{maxSimultaneousMorphTargets:p}),m)}return _.effect.isReady()}getDepthMap(){return this._depthMap}dispose(){let e=[];for(let i in this._scene._depthRenderer)this._scene._depthRenderer[i]===this&&e.push(i);if(e.length>0){this._depthMap.dispose();for(let i of e)delete this._scene._depthRenderer[i]}}}return a._SceneComponentInitialization=t=>{throw Re("DepthRendererSceneComponent")},a})(),ps="minmaxReduxPixelShader",ms=`varying vec2 vUV;
uniform sampler2D textureSampler;
#if defined(INITIAL)
uniform sampler2D sourceTexture;
uniform vec2 texSize;
void main(void)
{
ivec2 coord=ivec2(vUV*(texSize-1.0));
float f1=texelFetch(sourceTexture,coord,0).r;
float f2=texelFetch(sourceTexture,coord+ivec2(1,0),0).r;
float f3=texelFetch(sourceTexture,coord+ivec2(1,1),0).r;
float f4=texelFetch(sourceTexture,coord+ivec2(0,1),0).r;
float minz=min(min(min(f1,f2),f3),f4);
#ifdef DEPTH_REDUX
float maxz=max(max(max(sign(1.0-f1)*f1,sign(1.0-f2)*f2),sign(1.0-f3)*f3),sign(1.0-f4)*f4);
#else
float maxz=max(max(max(f1,f2),f3),f4);
#endif
glFragColor=vec4(minz,maxz,0.,0.);
}
#elif defined(MAIN)
uniform vec2 texSize;
void main(void)
{
ivec2 coord=ivec2(vUV*(texSize-1.0));
vec2 f1=texelFetch(textureSampler,coord,0).rg;
vec2 f2=texelFetch(textureSampler,coord+ivec2(1,0),0).rg;
vec2 f3=texelFetch(textureSampler,coord+ivec2(1,1),0).rg;
vec2 f4=texelFetch(textureSampler,coord+ivec2(0,1),0).rg;
float minz=min(min(min(f1.x,f2.x),f3.x),f4.x);
float maxz=max(max(max(f1.y,f2.y),f3.y),f4.y);
glFragColor=vec4(minz,maxz,0.,0.);
}
#elif defined(ONEBEFORELAST)
uniform ivec2 texSize;
void main(void)
{
ivec2 coord=ivec2(vUV*vec2(texSize-1));
vec2 f1=texelFetch(textureSampler,coord % texSize,0).rg;
vec2 f2=texelFetch(textureSampler,(coord+ivec2(1,0)) % texSize,0).rg;
vec2 f3=texelFetch(textureSampler,(coord+ivec2(1,1)) % texSize,0).rg;
vec2 f4=texelFetch(textureSampler,(coord+ivec2(0,1)) % texSize,0).rg;
float minz=min(f1.x,f2.x);
float maxz=max(f1.y,f2.y);
glFragColor=vec4(minz,maxz,0.,0.);
}
#elif defined(LAST)
void main(void)
{
glFragColor=vec4(0.);
if (true) { 
discard;
}
}
#endif
`;E.ShadersStore[ps]=ms;var Yt=class{constructor(t){this.onAfterReductionPerformed=new k,this._forceFullscreenViewport=!0,this._activated=!1,this._camera=t,this._postProcessManager=new Ft(t.getScene()),this._onContextRestoredObserver=t.getEngine().onContextRestoredObservable.add(()=>{this._postProcessManager._rebuild()})}get sourceTexture(){return this._sourceTexture}setSourceTexture(t,e,i=2,r=!0){if(t===this._sourceTexture)return;this.dispose(!1),this._sourceTexture=t,this._reductionSteps=[],this._forceFullscreenViewport=r;let s=this._camera.getScene(),n=new Y("Initial reduction phase","minmaxRedux",["texSize"],["sourceTexture"],1,null,1,s.getEngine(),!1,"#define INITIAL"+(e?`
#define DEPTH_REDUX`:""),i,void 0,void 0,void 0,7);n.autoClear=!1,n.forceFullscreenViewport=r;let o=this._sourceTexture.getRenderWidth(),d=this._sourceTexture.getRenderHeight();n.onApply=((h,c)=>u=>{u.setTexture("sourceTexture",this._sourceTexture),u.setFloat2("texSize",h,c)})(o,d),this._reductionSteps.push(n);let l=1;for(;o>1||d>1;){o=Math.max(Math.round(o/2),1),d=Math.max(Math.round(d/2),1);let h=new Y("Reduction phase "+l,"minmaxRedux",["texSize"],null,{width:o,height:d},null,1,s.getEngine(),!1,"#define "+(o==1&&d==1?"LAST":o==1||d==1?"ONEBEFORELAST":"MAIN"),i,void 0,void 0,void 0,7);if(h.autoClear=!1,h.forceFullscreenViewport=r,h.onApply=((c,u)=>p=>{c==1||u==1?p.setInt2("texSize",c,u):p.setFloat2("texSize",c,u)})(o,d),this._reductionSteps.push(h),l++,o==1&&d==1){let c=(u,p,_)=>{let v=new Float32Array(4*u*p),m={min:0,max:0};return()=>{s.getEngine()._readTexturePixels(_.inputTexture.texture,u,p,-1,0,v,!1),m.min=v[0],m.max=v[1],this.onAfterReductionPerformed.notifyObservers(m)}};h.onAfterRenderObservable.add(c(o,d,h))}}}get refreshRate(){return this._sourceTexture?this._sourceTexture.refreshRate:-1}set refreshRate(t){this._sourceTexture&&(this._sourceTexture.refreshRate=t)}get activated(){return this._activated}activate(){this._onAfterUnbindObserver||!this._sourceTexture||(this._onAfterUnbindObserver=this._sourceTexture.onAfterUnbindObservable.add(()=>{var t,e;let i=this._camera.getScene().getEngine();(t=i._debugPushGroup)===null||t===void 0||t.call(i,"min max reduction",1),this._reductionSteps[0].activate(this._camera),this._postProcessManager.directRender(this._reductionSteps,this._reductionSteps[0].inputTexture,this._forceFullscreenViewport),i.unBindFramebuffer(this._reductionSteps[0].inputTexture,!1),(e=i._debugPopGroup)===null||e===void 0||e.call(i,1)}),this._activated=!0)}deactivate(){!this._onAfterUnbindObserver||!this._sourceTexture||(this._sourceTexture.onAfterUnbindObservable.remove(this._onAfterUnbindObserver),this._onAfterUnbindObserver=null,this._activated=!1)}dispose(t=!0){if(t&&(this.onAfterReductionPerformed.clear(),this._onContextRestoredObserver&&(this._camera.getEngine().onContextRestoredObservable.remove(this._onContextRestoredObserver),this._onContextRestoredObserver=null)),this.deactivate(),this._reductionSteps){for(let e=0;e<this._reductionSteps.length;++e)this._reductionSteps[e].dispose();this._reductionSteps=null}this._postProcessManager&&t&&this._postProcessManager.dispose(),this._sourceTexture=null}},Zt=class extends Yt{get depthRenderer(){return this._depthRenderer}constructor(t){super(t)}setDepthRenderer(t=null,e=2,i=!0){let r=this._camera.getScene();this._depthRenderer&&(delete r._depthRenderer[this._depthRendererId],this._depthRenderer.dispose(),this._depthRenderer=null),t===null&&(r._depthRenderer||(r._depthRenderer={}),t=this._depthRenderer=new fs(r,e,this._camera,!1,1),t.enabled=!1,this._depthRendererId="minmax"+this._camera.id,r._depthRenderer[this._depthRendererId]=t),super.setSourceTexture(t.getDepthMap(),!0,e,i)}setSourceTexture(t,e,i=2,r=!0){super.setSourceTexture(t,e,i,r)}activate(){this._depthRenderer&&(this._depthRenderer.enabled=!0),super.activate()}deactivate(){super.deactivate(),this._depthRenderer&&(this._depthRenderer.enabled=!1)}dispose(t=!0){if(super.dispose(t),this._depthRenderer&&t){let e=this._depthRenderer.getDepthMap().getScene();e&&delete e._depthRenderer[this._depthRendererId],this._depthRenderer.dispose(),this._depthRenderer=null}}},xi=x.Up(),_s=x.Zero(),G=new x,We=new x,Et=new P,_e=class a extends J{_validateFilter(t){return t===J.FILTER_NONE||t===J.FILTER_PCF||t===J.FILTER_PCSS?t:(console.error('Unsupported filter "'+t+'"!'),J.FILTER_NONE)}get numCascades(){return this._numCascades}set numCascades(t){t=Math.min(Math.max(t,a.MIN_CASCADES_COUNT),a.MAX_CASCADES_COUNT),t!==this._numCascades&&(this._numCascades=t,this.recreateShadowMap(),this._recreateSceneUBOs())}get freezeShadowCastersBoundingInfo(){return this._freezeShadowCastersBoundingInfo}set freezeShadowCastersBoundingInfo(t){this._freezeShadowCastersBoundingInfoObservable&&t&&(this._scene.onBeforeRenderObservable.remove(this._freezeShadowCastersBoundingInfoObservable),this._freezeShadowCastersBoundingInfoObservable=null),!this._freezeShadowCastersBoundingInfoObservable&&!t&&(this._freezeShadowCastersBoundingInfoObservable=this._scene.onBeforeRenderObservable.add(this._computeShadowCastersBoundingInfo.bind(this))),this._freezeShadowCastersBoundingInfo=t,t&&this._computeShadowCastersBoundingInfo()}_computeShadowCastersBoundingInfo(){if(this._scbiMin.copyFromFloats(Number.MAX_VALUE,Number.MAX_VALUE,Number.MAX_VALUE),this._scbiMax.copyFromFloats(Number.MIN_VALUE,Number.MIN_VALUE,Number.MIN_VALUE),this._shadowMap&&this._shadowMap.renderList){let t=this._shadowMap.renderList;for(let i=0;i<t.length;i++){let r=t[i];if(!r)continue;let s=r.getBoundingInfo(),n=s.boundingBox;this._scbiMin.minimizeInPlace(n.minimumWorld),this._scbiMax.maximizeInPlace(n.maximumWorld)}let e=this._scene.meshes;for(let i=0;i<e.length;i++){let r=e[i];if(!r||!r.isVisible||!r.isEnabled||!r.receiveShadows)continue;let s=r.getBoundingInfo(),n=s.boundingBox;this._scbiMin.minimizeInPlace(n.minimumWorld),this._scbiMax.maximizeInPlace(n.maximumWorld)}}this._shadowCastersBoundingInfo.reConstruct(this._scbiMin,this._scbiMax)}get shadowCastersBoundingInfo(){return this._shadowCastersBoundingInfo}set shadowCastersBoundingInfo(t){this._shadowCastersBoundingInfo=t}setMinMaxDistance(t,e){this._minDistance===t&&this._maxDistance===e||(t>e&&(t=0,e=1),t<0&&(t=0),e>1&&(e=1),this._minDistance=t,this._maxDistance=e,this._breaksAreDirty=!0)}get minDistance(){return this._minDistance}get maxDistance(){return this._maxDistance}getClassName(){return a.CLASSNAME}getCascadeMinExtents(t){return t>=0&&t<this._numCascades?this._cascadeMinExtents[t]:null}getCascadeMaxExtents(t){return t>=0&&t<this._numCascades?this._cascadeMaxExtents[t]:null}get shadowMaxZ(){return this._getCamera()?this._shadowMaxZ:0}set shadowMaxZ(t){let e=this._getCamera();if(!e){this._shadowMaxZ=t;return}this._shadowMaxZ===t||t<e.minZ||t>e.maxZ||(this._shadowMaxZ=t,this._light._markMeshesAsLightDirty(),this._breaksAreDirty=!0)}get debug(){return this._debug}set debug(t){this._debug=t,this._light._markMeshesAsLightDirty()}get depthClamp(){return this._depthClamp}set depthClamp(t){this._depthClamp=t}get cascadeBlendPercentage(){return this._cascadeBlendPercentage}set cascadeBlendPercentage(t){this._cascadeBlendPercentage=t,this._light._markMeshesAsLightDirty()}get lambda(){return this._lambda}set lambda(t){let e=Math.min(Math.max(t,0),1);this._lambda!=e&&(this._lambda=e,this._breaksAreDirty=!0)}getCascadeViewMatrix(t){return t>=0&&t<this._numCascades?this._viewMatrices[t]:null}getCascadeProjectionMatrix(t){return t>=0&&t<this._numCascades?this._projectionMatrices[t]:null}getCascadeTransformMatrix(t){return t>=0&&t<this._numCascades?this._transformMatrices[t]:null}setDepthRenderer(t){this._depthRenderer=t,this._depthReducer&&this._depthReducer.setDepthRenderer(this._depthRenderer)}get autoCalcDepthBounds(){return this._autoCalcDepthBounds}set autoCalcDepthBounds(t){let e=this._getCamera();if(e){if(this._autoCalcDepthBounds=t,!t){this._depthReducer&&this._depthReducer.deactivate(),this.setMinMaxDistance(0,1);return}this._depthReducer||(this._depthReducer=new Zt(e),this._depthReducer.onAfterReductionPerformed.add(i=>{let r=i.min,s=i.max;r>=s&&(r=0,s=1),(r!=this._minDistance||s!=this._maxDistance)&&this.setMinMaxDistance(r,s)}),this._depthReducer.setDepthRenderer(this._depthRenderer)),this._depthReducer.activate()}}get autoCalcDepthBoundsRefreshRate(){var t,e,i;return(i=(e=(t=this._depthReducer)===null||t===void 0?void 0:t.depthRenderer)===null||e===void 0?void 0:e.getDepthMap().refreshRate)!==null&&i!==void 0?i:-1}set autoCalcDepthBoundsRefreshRate(t){var e;!((e=this._depthReducer)===null||e===void 0)&&e.depthRenderer&&(this._depthReducer.depthRenderer.getDepthMap().refreshRate=t)}splitFrustum(){this._breaksAreDirty=!0}_splitFrustum(){let t=this._getCamera();if(!t)return;let e=t.minZ,i=t.maxZ,r=i-e,s=this._minDistance,n=this._shadowMaxZ<i&&this._shadowMaxZ>=e?Math.min((this._shadowMaxZ-e)/(i-e),this._maxDistance):this._maxDistance,o=e+s*r,d=e+n*r,l=d-o,h=d/o;for(let c=0;c<this._cascades.length;++c){let u=(c+1)/this._numCascades,p=o*h**u,_=o+l*u,v=this._lambda*(p-_)+_;this._cascades[c].prevBreakDistance=c===0?s:this._cascades[c-1].breakDistance,this._cascades[c].breakDistance=(v-e)/r,this._viewSpaceFrustumsZ[c]=v,this._frustumLengths[c]=(this._cascades[c].breakDistance-this._cascades[c].prevBreakDistance)*r}this._breaksAreDirty=!1}_computeMatrices(){let t=this._scene;if(!this._getCamera())return;x.NormalizeToRef(this._light.getShadowDirection(0),this._lightDirection),Math.abs(x.Dot(this._lightDirection,x.Up()))===1&&(this._lightDirection.z=1e-13),this._cachedDirection.copyFrom(this._lightDirection);let e=t.getEngine().useReverseDepthBuffer;for(let i=0;i<this._numCascades;++i){this._computeFrustumInWorldSpace(i),this._computeCascadeFrustum(i),this._cascadeMaxExtents[i].subtractToRef(this._cascadeMinExtents[i],G),this._frustumCenter[i].addToRef(this._lightDirection.scale(this._cascadeMinExtents[i].z),this._shadowCameraPos[i]),P.LookAtLHToRef(this._shadowCameraPos[i],this._frustumCenter[i],xi,this._viewMatrices[i]);let r=0,s=G.z,n=this._shadowCastersBoundingInfo;n.update(this._viewMatrices[i]),s=Math.min(s,n.boundingBox.maximumWorld.z),!this._depthClamp||this.filter===J.FILTER_PCSS?r=Math.min(r,n.boundingBox.minimumWorld.z):r=Math.max(r,n.boundingBox.minimumWorld.z),P.OrthoOffCenterLHToRef(this._cascadeMinExtents[i].x,this._cascadeMaxExtents[i].x,this._cascadeMinExtents[i].y,this._cascadeMaxExtents[i].y,e?s:r,e?r:s,this._projectionMatrices[i],t.getEngine().isNDCHalfZRange),this._cascadeMinExtents[i].z=r,this._cascadeMaxExtents[i].z=s,this._viewMatrices[i].multiplyToRef(this._projectionMatrices[i],this._transformMatrices[i]),x.TransformCoordinatesToRef(_s,this._transformMatrices[i],G),G.scaleInPlace(this._mapSize/2),We.copyFromFloats(Math.round(G.x),Math.round(G.y),Math.round(G.z)),We.subtractInPlace(G).scaleInPlace(2/this._mapSize),P.TranslationToRef(We.x,We.y,0,Et),this._projectionMatrices[i].multiplyToRef(Et,this._projectionMatrices[i]),this._viewMatrices[i].multiplyToRef(this._projectionMatrices[i],this._transformMatrices[i]),this._transformMatrices[i].copyToArray(this._transformMatricesAsArray,i*16)}}_computeFrustumInWorldSpace(t){let e=this._getCamera();if(!e)return;let i=this._cascades[t].prevBreakDistance,r=this._cascades[t].breakDistance,s=this._scene.getEngine().isNDCHalfZRange;e.getViewMatrix();let n=P.Invert(e.getTransformationMatrix()),o=this._scene.getEngine().useReverseDepthBuffer?4:0;for(let d=0;d<a._FrustumCornersNDCSpace.length;++d)G.copyFrom(a._FrustumCornersNDCSpace[(d+o)%a._FrustumCornersNDCSpace.length]),s&&G.z===-1&&(G.z=0),x.TransformCoordinatesToRef(G,n,this._frustumCornersWorldSpace[t][d]);for(let d=0;d<a._FrustumCornersNDCSpace.length/2;++d)G.copyFrom(this._frustumCornersWorldSpace[t][d+4]).subtractInPlace(this._frustumCornersWorldSpace[t][d]),We.copyFrom(G).scaleInPlace(i),G.scaleInPlace(r),G.addInPlace(this._frustumCornersWorldSpace[t][d]),this._frustumCornersWorldSpace[t][d+4].copyFrom(G),this._frustumCornersWorldSpace[t][d].addInPlace(We)}_computeCascadeFrustum(t){if(this._cascadeMinExtents[t].copyFromFloats(Number.MAX_VALUE,Number.MAX_VALUE,Number.MAX_VALUE),this._cascadeMaxExtents[t].copyFromFloats(Number.MIN_VALUE,Number.MIN_VALUE,Number.MIN_VALUE),this._frustumCenter[t].copyFromFloats(0,0,0),!!this._getCamera()){for(let e=0;e<this._frustumCornersWorldSpace[t].length;++e)this._frustumCenter[t].addInPlace(this._frustumCornersWorldSpace[t][e]);if(this._frustumCenter[t].scaleInPlace(1/this._frustumCornersWorldSpace[t].length),this.stabilizeCascades){let e=0;for(let i=0;i<this._frustumCornersWorldSpace[t].length;++i){let r=this._frustumCornersWorldSpace[t][i].subtractToRef(this._frustumCenter[t],G).length();e=Math.max(e,r)}e=Math.ceil(e*16)/16,this._cascadeMaxExtents[t].copyFromFloats(e,e,e),this._cascadeMinExtents[t].copyFromFloats(-e,-e,-e)}else{let e=this._frustumCenter[t];this._frustumCenter[t].addToRef(this._lightDirection,G),P.LookAtLHToRef(e,G,xi,Et);for(let i=0;i<this._frustumCornersWorldSpace[t].length;++i)x.TransformCoordinatesToRef(this._frustumCornersWorldSpace[t][i],Et,G),this._cascadeMinExtents[t].minimizeInPlace(G),this._cascadeMaxExtents[t].maximizeInPlace(G)}}}_recreateSceneUBOs(){if(this._disposeSceneUBOs(),this._sceneUBOs)for(let t=0;t<this._numCascades;++t)this._sceneUBOs.push(this._scene.createSceneUniformBuffer(`Scene for CSM Shadow Generator (light "${this._light.name}" cascade #${t})`))}static get IsSupported(){let t=ft.LastCreatedEngine;return t?t._features.supportCSM:!1}constructor(t,e,i,r){if(!a.IsSupported){je.Error("CascadedShadowMap is not supported by the current engine.");return}super(t,e,i,r),this.usePercentageCloserFiltering=!0}_initializeGenerator(){var t,e,i,r,s,n,o,d,l,h,c,u,p,_,v,m,A,S,C,L;this.penumbraDarkness=(t=this.penumbraDarkness)!==null&&t!==void 0?t:1,this._numCascades=(e=this._numCascades)!==null&&e!==void 0?e:a.DEFAULT_CASCADES_COUNT,this.stabilizeCascades=(i=this.stabilizeCascades)!==null&&i!==void 0?i:!1,this._freezeShadowCastersBoundingInfoObservable=(r=this._freezeShadowCastersBoundingInfoObservable)!==null&&r!==void 0?r:null,this.freezeShadowCastersBoundingInfo=(s=this.freezeShadowCastersBoundingInfo)!==null&&s!==void 0?s:!1,this._scbiMin=(n=this._scbiMin)!==null&&n!==void 0?n:new x(0,0,0),this._scbiMax=(o=this._scbiMax)!==null&&o!==void 0?o:new x(0,0,0),this._shadowCastersBoundingInfo=(d=this._shadowCastersBoundingInfo)!==null&&d!==void 0?d:new vi(new x(0,0,0),new x(0,0,0)),this._breaksAreDirty=(l=this._breaksAreDirty)!==null&&l!==void 0?l:!0,this._minDistance=(h=this._minDistance)!==null&&h!==void 0?h:0,this._maxDistance=(c=this._maxDistance)!==null&&c!==void 0?c:1,this._currentLayer=(u=this._currentLayer)!==null&&u!==void 0?u:0,this._shadowMaxZ=(v=(p=this._shadowMaxZ)!==null&&p!==void 0?p:(_=this._getCamera())===null||_===void 0?void 0:_.maxZ)!==null&&v!==void 0?v:1e4,this._debug=(m=this._debug)!==null&&m!==void 0?m:!1,this._depthClamp=(A=this._depthClamp)!==null&&A!==void 0?A:!0,this._cascadeBlendPercentage=(S=this._cascadeBlendPercentage)!==null&&S!==void 0?S:.1,this._lambda=(C=this._lambda)!==null&&C!==void 0?C:.5,this._autoCalcDepthBounds=(L=this._autoCalcDepthBounds)!==null&&L!==void 0?L:!1,this._recreateSceneUBOs(),super._initializeGenerator()}_createTargetRenderTexture(){let t=this._scene.getEngine(),e={width:this._mapSize,height:this._mapSize,layers:this.numCascades};this._shadowMap=new He(this._light.name+"_CSMShadowMap",e,this._scene,!1,!0,this._textureType,!1,void 0,!1,!1,void 0),this._shadowMap.createDepthStencilTexture(t.useReverseDepthBuffer?516:513,!0)}_initializeShadowMap(){if(super._initializeShadowMap(),this._shadowMap===null)return;this._transformMatricesAsArray=new Float32Array(this._numCascades*16),this._viewSpaceFrustumsZ=new Array(this._numCascades),this._frustumLengths=new Array(this._numCascades),this._lightSizeUVCorrection=new Array(this._numCascades*2),this._depthCorrection=new Array(this._numCascades),this._cascades=[],this._viewMatrices=[],this._projectionMatrices=[],this._transformMatrices=[],this._cascadeMinExtents=[],this._cascadeMaxExtents=[],this._frustumCenter=[],this._shadowCameraPos=[],this._frustumCornersWorldSpace=[];for(let e=0;e<this._numCascades;++e){this._cascades[e]={prevBreakDistance:0,breakDistance:0},this._viewMatrices[e]=P.Zero(),this._projectionMatrices[e]=P.Zero(),this._transformMatrices[e]=P.Zero(),this._cascadeMinExtents[e]=new x,this._cascadeMaxExtents[e]=new x,this._frustumCenter[e]=new x,this._shadowCameraPos[e]=new x,this._frustumCornersWorldSpace[e]=new Array(a._FrustumCornersNDCSpace.length);for(let i=0;i<a._FrustumCornersNDCSpace.length;++i)this._frustumCornersWorldSpace[e][i]=new x}let t=this._scene.getEngine();this._shadowMap.onBeforeBindObservable.clear(),this._shadowMap.onBeforeRenderObservable.clear(),this._shadowMap.onBeforeRenderObservable.add(e=>{this._sceneUBOs&&this._scene.setSceneUniformBuffer(this._sceneUBOs[e]),this._currentLayer=e,this._filter===J.FILTER_PCF&&t.setColorWrite(!1),this._scene.setTransformMatrix(this.getCascadeViewMatrix(e),this.getCascadeProjectionMatrix(e)),this._useUBO&&(this._scene.getSceneUniformBuffer().unbindEffect(),this._scene.finalizeSceneUbo())}),this._shadowMap.onBeforeBindObservable.add(()=>{var e;this._currentSceneUBO=this._scene.getSceneUniformBuffer(),(e=t._debugPushGroup)===null||e===void 0||e.call(t,`cascaded shadow map generation for pass id ${t.currentRenderPassId}`,1),this._breaksAreDirty&&this._splitFrustum(),this._computeMatrices()}),this._splitFrustum()}_bindCustomEffectForRenderSubMeshForShadowMap(t,e){e.setMatrix("viewProjection",this.getCascadeTransformMatrix(this._currentLayer))}_isReadyCustomDefines(t){t.push("#define SM_DEPTHCLAMP "+(this._depthClamp&&this._filter!==J.FILTER_PCSS?"1":"0"))}prepareDefines(t,e){super.prepareDefines(t,e);let i=this._scene,r=this._light;if(!i.shadowsEnabled||!r.shadowEnabled)return;t["SHADOWCSM"+e]=!0,t["SHADOWCSMDEBUG"+e]=this.debug,t["SHADOWCSMNUM_CASCADES"+e]=this.numCascades,t["SHADOWCSM_RIGHTHANDED"+e]=i.useRightHandedSystem;let s=this._getCamera();s&&this._shadowMaxZ<s.maxZ&&(t["SHADOWCSMUSESHADOWMAXZ"+e]=!0),this.cascadeBlendPercentage===0&&(t["SHADOWCSMNOBLEND"+e]=!0)}bindShadowLight(t,e){let i=this._light;if(!this._scene.shadowsEnabled||!i.shadowEnabled)return;let r=this._getCamera();if(!r)return;let s=this.getShadowMap();if(!s)return;let n=s.getSize().width;if(e.setMatrices("lightMatrix"+t,this._transformMatricesAsArray),e.setArray("viewFrustumZ"+t,this._viewSpaceFrustumsZ),e.setFloat("cascadeBlendFactor"+t,this.cascadeBlendPercentage===0?1e4:1/this.cascadeBlendPercentage),e.setArray("frustumLengths"+t,this._frustumLengths),this._filter===J.FILTER_PCF)e.setDepthStencilTexture("shadowSampler"+t,s),i._uniformBuffer.updateFloat4("shadowsInfo",this.getDarkness(),n,1/n,this.frustumEdgeFalloff,t);else if(this._filter===J.FILTER_PCSS){for(let o=0;o<this._numCascades;++o)this._lightSizeUVCorrection[o*2+0]=o===0?1:(this._cascadeMaxExtents[0].x-this._cascadeMinExtents[0].x)/(this._cascadeMaxExtents[o].x-this._cascadeMinExtents[o].x),this._lightSizeUVCorrection[o*2+1]=o===0?1:(this._cascadeMaxExtents[0].y-this._cascadeMinExtents[0].y)/(this._cascadeMaxExtents[o].y-this._cascadeMinExtents[o].y),this._depthCorrection[o]=o===0?1:(this._cascadeMaxExtents[o].z-this._cascadeMinExtents[o].z)/(this._cascadeMaxExtents[0].z-this._cascadeMinExtents[0].z);e.setDepthStencilTexture("shadowSampler"+t,s),e.setTexture("depthSampler"+t,s),e.setArray2("lightSizeUVCorrection"+t,this._lightSizeUVCorrection),e.setArray("depthCorrection"+t,this._depthCorrection),e.setFloat("penumbraDarkness"+t,this.penumbraDarkness),i._uniformBuffer.updateFloat4("shadowsInfo",this.getDarkness(),1/n,this._contactHardeningLightSizeUVRatio*n,this.frustumEdgeFalloff,t)}else e.setTexture("shadowSampler"+t,s),i._uniformBuffer.updateFloat4("shadowsInfo",this.getDarkness(),n,1/n,this.frustumEdgeFalloff,t);i._uniformBuffer.updateFloat2("depthValues",this.getLight().getDepthMinZ(r),this.getLight().getDepthMinZ(r)+this.getLight().getDepthMaxZ(r),t)}getTransformMatrix(){return this.getCascadeTransformMatrix(0)}dispose(){super.dispose(),this._freezeShadowCastersBoundingInfoObservable&&(this._scene.onBeforeRenderObservable.remove(this._freezeShadowCastersBoundingInfoObservable),this._freezeShadowCastersBoundingInfoObservable=null),this._depthReducer&&(this._depthReducer.dispose(),this._depthReducer=null)}serialize(){let t=super.serialize(),e=this.getShadowMap();if(!e)return t;if(t.numCascades=this._numCascades,t.debug=this._debug,t.stabilizeCascades=this.stabilizeCascades,t.lambda=this._lambda,t.cascadeBlendPercentage=this.cascadeBlendPercentage,t.depthClamp=this._depthClamp,t.autoCalcDepthBounds=this.autoCalcDepthBounds,t.shadowMaxZ=this._shadowMaxZ,t.penumbraDarkness=this.penumbraDarkness,t.freezeShadowCastersBoundingInfo=this._freezeShadowCastersBoundingInfo,t.minDistance=this.minDistance,t.maxDistance=this.maxDistance,t.renderList=[],e.renderList)for(let i=0;i<e.renderList.length;i++){let r=e.renderList[i];t.renderList.push(r.id)}return t}static Parse(t,e){let i=J.Parse(t,e,(r,s,n)=>new a(r,s,void 0,n));return t.numCascades!==void 0&&(i.numCascades=t.numCascades),t.debug!==void 0&&(i.debug=t.debug),t.stabilizeCascades!==void 0&&(i.stabilizeCascades=t.stabilizeCascades),t.lambda!==void 0&&(i.lambda=t.lambda),t.cascadeBlendPercentage!==void 0&&(i.cascadeBlendPercentage=t.cascadeBlendPercentage),t.depthClamp!==void 0&&(i.depthClamp=t.depthClamp),t.autoCalcDepthBounds!==void 0&&(i.autoCalcDepthBounds=t.autoCalcDepthBounds),t.shadowMaxZ!==void 0&&(i.shadowMaxZ=t.shadowMaxZ),t.penumbraDarkness!==void 0&&(i.penumbraDarkness=t.penumbraDarkness),t.freezeShadowCastersBoundingInfo!==void 0&&(i.freezeShadowCastersBoundingInfo=t.freezeShadowCastersBoundingInfo),t.minDistance!==void 0&&t.maxDistance!==void 0&&i.setMinMaxDistance(t.minDistance,t.maxDistance),i}};_e._FrustumCornersNDCSpace=[new x(-1,1,-1),new x(1,1,-1),new x(1,-1,-1),new x(-1,-1,-1),new x(-1,1,1),new x(1,1,1),new x(1,-1,1),new x(-1,-1,1)];_e.CLASSNAME="CascadedShadowGenerator";_e.DEFAULT_CASCADES_COUNT=4;_e.MIN_CASCADES_COUNT=2;_e.MAX_CASCADES_COUNT=4;_e._SceneComponentInitialization=a=>{throw Re("ShadowGeneratorSceneComponent")};ci.AddParser(qe.NAME_SHADOWGENERATOR,(a,t)=>{if(a.shadowGenerators!==void 0&&a.shadowGenerators!==null)for(let e=0,i=a.shadowGenerators.length;e<i;e++){let r=a.shadowGenerators[e];r.className===_e.CLASSNAME?_e.Parse(r,t):J.Parse(r,t)}});var jt=class{constructor(t){this.name=qe.NAME_SHADOWGENERATOR,this.scene=t}register(){this.scene._gatherRenderTargetsStage.registerStep(qe.STEP_GATHERRENDERTARGETS_SHADOWGENERATOR,this,this._gatherRenderTargets)}rebuild(){}serialize(t){t.shadowGenerators=[];let e=this.scene.lights;for(let i of e){let r=i.getShadowGenerators();if(r){let s=r.values();for(let n=s.next();n.done!==!0;n=s.next()){let o=n.value;t.shadowGenerators.push(o.serialize())}}}}addFromContainer(t){}removeFromContainer(t,e){}dispose(){}_gatherRenderTargets(t){let e=this.scene;if(this.scene.shadowsEnabled)for(let i=0;i<e.lights.length;i++){let r=e.lights[i],s=r.getShadowGenerators();if(r.isEnabled()&&r.shadowEnabled&&s){let n=s.values();for(let o=n.next();o.done!==!0;o=n.next()){let d=o.value.getShadowMap();e.textures.indexOf(d)!==-1&&t.push(d)}}}}};J._SceneComponentInitialization=a=>{let t=a._getComponent(qe.NAME_SHADOWGENERATOR);t||(t=new jt(a),a._addComponent(t))};var gs={enableShadows:!0};function Mi(a=gs){let{enableShadows:t,shadowTransparency:e,intensity:i,scene:r}=a,s=new le("DirectionalLight",new x(-.3,-1,.4),r);s.position=new x(-50,65,-50),s.intensity=.65*i;let n=new Ye("HemisphericLight",new x(1,1,0),r);return n.intensity=.4*i,t&&(s.shadowMinZ=1,s.shadowMaxZ=70,s.shadowGenerator=new J(2048,s),s.shadowGenerator.useCloseExponentialShadowMap=!0,s.shadowGenerator.darkness=e),{directional:s,hemispheric:n}}function Pi(a){let t=[0,1,2,0,2,3,4,5,6,4,6,7,8,9,10,8,10,11,12,13,14,12,14,15,16,17,18,16,18,19,20,21,22,20,22,23],e=[0,0,1,0,0,1,0,0,1,0,0,1,0,0,-1,0,0,-1,0,0,-1,0,0,-1,1,0,0,1,0,0,1,0,0,1,0,0,-1,0,0,-1,0,0,-1,0,0,-1,0,0,0,1,0,0,1,0,0,1,0,0,1,0,0,-1,0,0,-1,0,0,-1,0,0,-1,0],i=[],r=[],s=a.width||a.size||1,n=a.height||a.size||1,o=a.depth||a.size||1,d=a.wrap||!1,l=a.topBaseAt===void 0?1:a.topBaseAt,h=a.bottomBaseAt===void 0?0:a.bottomBaseAt;l=(l+4)%4,h=(h+4)%4;let c=[2,0,3,1],u=[2,0,1,3],p=c[l],_=u[h],v=[1,-1,1,-1,-1,1,-1,1,1,1,1,1,1,1,-1,-1,1,-1,-1,-1,-1,1,-1,-1,1,1,-1,1,-1,-1,1,-1,1,1,1,1,-1,1,1,-1,-1,1,-1,-1,-1,-1,1,-1,-1,1,1,-1,1,-1,1,1,-1,1,1,1,1,-1,1,1,-1,-1,-1,-1,-1,-1,-1,1];if(d){t=[2,3,0,2,0,1,4,5,6,4,6,7,9,10,11,9,11,8,12,14,15,12,13,14],v=[-1,1,1,1,1,1,1,-1,1,-1,-1,1,1,1,-1,-1,1,-1,-1,-1,-1,1,-1,-1,1,1,1,1,1,-1,1,-1,-1,1,-1,1,-1,1,-1,-1,1,1,-1,-1,1,-1,-1,-1];let R=[[1,1,1],[-1,1,1],[-1,1,-1],[1,1,-1]],U=[[-1,-1,1],[1,-1,1],[1,-1,-1],[-1,-1,-1]],D=[17,18,19,16],F=[22,23,20,21];for(;p>0;)R.unshift(R.pop()),D.unshift(D.pop()),p--;for(;_>0;)U.unshift(U.pop()),F.unshift(F.pop()),_--;R=R.flat(),U=U.flat(),v=v.concat(R).concat(U),t.push(D[0],D[2],D[3],D[0],D[1],D[2]),t.push(F[0],F[2],F[3],F[0],F[1],F[2])}let m=[s/2,n/2,o/2];r=v.reduce((R,U,D)=>R.concat(U*m[D%3]),[]);let A=a.sideOrientation===0?0:a.sideOrientation||Xe.DEFAULTSIDE,S=a.faceUV||new Array(6),C=a.faceColors,L=[];for(let R=0;R<6;R++)S[R]===void 0&&(S[R]=new di(0,0,1,1)),C&&C[R]===void 0&&(C[R]=new De(1,1,1,1));for(let R=0;R<6;R++)if(i.push(S[R].z,Le.UseOpenGLOrientationForUV?1-S[R].w:S[R].w),i.push(S[R].x,Le.UseOpenGLOrientationForUV?1-S[R].w:S[R].w),i.push(S[R].x,Le.UseOpenGLOrientationForUV?1-S[R].y:S[R].y),i.push(S[R].z,Le.UseOpenGLOrientationForUV?1-S[R].y:S[R].y),C)for(let U=0;U<4;U++)L.push(C[R].r,C[R].g,C[R].b,C[R].a);Xe._ComputeSides(A,r,t,e,i,a.frontUVs,a.backUVs);let N=new Xe;if(N.indices=t,N.positions=r,N.normals=e,N.uvs=i,C){let R=A===Xe.DOUBLESIDE?L.concat(L):L;N.colors=R}return N}function ke(a,t={},e=null){let i=new ze(a,e);return t.sideOrientation=ze._GetDefaultSideOrientation(t.sideOrientation),i._originalBuilderSideOrientation=t.sideOrientation,Pi(t).applyToMesh(i,t.updatable),i}Xe.CreateBox=Pi;ze.CreateBox=(a,t,e=null,i,r)=>ke(a,{size:t,sideOrientation:r,updatable:i},e);var Rt=class{constructor(){this.previousWorldMatrices={},this.previousBones={}}static AddUniforms(t){t.push("previousWorld","previousViewProjection","mPreviousBones")}static AddSamplers(t){}bindForSubMesh(t,e,i,r,s){if(e.prePassRenderer&&e.prePassRenderer.enabled&&e.prePassRenderer.currentRTisSceneRT&&e.prePassRenderer.getIndex(2)!==-1){this.previousWorldMatrices[i.uniqueId]||(this.previousWorldMatrices[i.uniqueId]=r.clone()),this.previousViewProjection||(this.previousViewProjection=e.getTransformMatrix().clone(),this.currentViewProjection=e.getTransformMatrix().clone());let n=e.getEngine();this.currentViewProjection.updateFlag!==e.getTransformMatrix().updateFlag?(this._lastUpdateFrameId=n.frameId,this.previousViewProjection.copyFrom(this.currentViewProjection),this.currentViewProjection.copyFrom(e.getTransformMatrix())):this._lastUpdateFrameId!==n.frameId&&(this._lastUpdateFrameId=n.frameId,this.previousViewProjection.copyFrom(this.currentViewProjection)),t.setMatrix("previousWorld",this.previousWorldMatrices[i.uniqueId]),t.setMatrix("previousViewProjection",this.previousViewProjection),this.previousWorldMatrices[i.uniqueId]=r.clone()}}},Pt=class extends tt{constructor(t,e,i=!0){super(t,e),this._normalMatrix=new P,this._storeEffectOnSubMeshes=i}getEffect(){return this._storeEffectOnSubMeshes?this._activeEffect:super.getEffect()}isReady(t,e){return t?!this._storeEffectOnSubMeshes||!t.subMeshes||t.subMeshes.length===0?!0:this.isReadyForSubMesh(t,t.subMeshes[0],e):!1}_isReadyForSubMesh(t){let e=t.materialDefines;return!!(!this.checkReadyOnEveryCall&&t.effect&&e&&e._renderId===this.getScene().getRenderId())}bindOnlyWorldMatrix(t){this._activeEffect.setMatrix("world",t)}bindOnlyNormalMatrix(t){this._activeEffect.setMatrix("normalMatrix",t)}bind(t,e){e&&this.bindForSubMesh(t,e,e.subMeshes[0])}_afterBind(t,e=null){super._afterBind(t,e),this.getScene()._cachedEffect=e,e&&(e._forceRebindOnNextCall=!1)}_mustRebind(t,e,i=1){return t.isCachedMaterialInvalid(this,e,i)}dispose(t,e,i){this._activeEffect=void 0,super.dispose(t,e,i)}},X=(()=>{class a{static get DiffuseTextureEnabled(){return this._DiffuseTextureEnabled}static set DiffuseTextureEnabled(e){this._DiffuseTextureEnabled!==e&&(this._DiffuseTextureEnabled=e,V.MarkAllMaterialsAsDirty(1))}static get DetailTextureEnabled(){return this._DetailTextureEnabled}static set DetailTextureEnabled(e){this._DetailTextureEnabled!==e&&(this._DetailTextureEnabled=e,V.MarkAllMaterialsAsDirty(1))}static get DecalMapEnabled(){return this._DecalMapEnabled}static set DecalMapEnabled(e){this._DecalMapEnabled!==e&&(this._DecalMapEnabled=e,V.MarkAllMaterialsAsDirty(1))}static get AmbientTextureEnabled(){return this._AmbientTextureEnabled}static set AmbientTextureEnabled(e){this._AmbientTextureEnabled!==e&&(this._AmbientTextureEnabled=e,V.MarkAllMaterialsAsDirty(1))}static get OpacityTextureEnabled(){return this._OpacityTextureEnabled}static set OpacityTextureEnabled(e){this._OpacityTextureEnabled!==e&&(this._OpacityTextureEnabled=e,V.MarkAllMaterialsAsDirty(1))}static get ReflectionTextureEnabled(){return this._ReflectionTextureEnabled}static set ReflectionTextureEnabled(e){this._ReflectionTextureEnabled!==e&&(this._ReflectionTextureEnabled=e,V.MarkAllMaterialsAsDirty(1))}static get EmissiveTextureEnabled(){return this._EmissiveTextureEnabled}static set EmissiveTextureEnabled(e){this._EmissiveTextureEnabled!==e&&(this._EmissiveTextureEnabled=e,V.MarkAllMaterialsAsDirty(1))}static get SpecularTextureEnabled(){return this._SpecularTextureEnabled}static set SpecularTextureEnabled(e){this._SpecularTextureEnabled!==e&&(this._SpecularTextureEnabled=e,V.MarkAllMaterialsAsDirty(1))}static get BumpTextureEnabled(){return this._BumpTextureEnabled}static set BumpTextureEnabled(e){this._BumpTextureEnabled!==e&&(this._BumpTextureEnabled=e,V.MarkAllMaterialsAsDirty(1))}static get LightmapTextureEnabled(){return this._LightmapTextureEnabled}static set LightmapTextureEnabled(e){this._LightmapTextureEnabled!==e&&(this._LightmapTextureEnabled=e,V.MarkAllMaterialsAsDirty(1))}static get RefractionTextureEnabled(){return this._RefractionTextureEnabled}static set RefractionTextureEnabled(e){this._RefractionTextureEnabled!==e&&(this._RefractionTextureEnabled=e,V.MarkAllMaterialsAsDirty(1))}static get ColorGradingTextureEnabled(){return this._ColorGradingTextureEnabled}static set ColorGradingTextureEnabled(e){this._ColorGradingTextureEnabled!==e&&(this._ColorGradingTextureEnabled=e,V.MarkAllMaterialsAsDirty(1))}static get FresnelEnabled(){return this._FresnelEnabled}static set FresnelEnabled(e){this._FresnelEnabled!==e&&(this._FresnelEnabled=e,V.MarkAllMaterialsAsDirty(4))}static get ClearCoatTextureEnabled(){return this._ClearCoatTextureEnabled}static set ClearCoatTextureEnabled(e){this._ClearCoatTextureEnabled!==e&&(this._ClearCoatTextureEnabled=e,V.MarkAllMaterialsAsDirty(1))}static get ClearCoatBumpTextureEnabled(){return this._ClearCoatBumpTextureEnabled}static set ClearCoatBumpTextureEnabled(e){this._ClearCoatBumpTextureEnabled!==e&&(this._ClearCoatBumpTextureEnabled=e,V.MarkAllMaterialsAsDirty(1))}static get ClearCoatTintTextureEnabled(){return this._ClearCoatTintTextureEnabled}static set ClearCoatTintTextureEnabled(e){this._ClearCoatTintTextureEnabled!==e&&(this._ClearCoatTintTextureEnabled=e,V.MarkAllMaterialsAsDirty(1))}static get SheenTextureEnabled(){return this._SheenTextureEnabled}static set SheenTextureEnabled(e){this._SheenTextureEnabled!==e&&(this._SheenTextureEnabled=e,V.MarkAllMaterialsAsDirty(1))}static get AnisotropicTextureEnabled(){return this._AnisotropicTextureEnabled}static set AnisotropicTextureEnabled(e){this._AnisotropicTextureEnabled!==e&&(this._AnisotropicTextureEnabled=e,V.MarkAllMaterialsAsDirty(1))}static get ThicknessTextureEnabled(){return this._ThicknessTextureEnabled}static set ThicknessTextureEnabled(e){this._ThicknessTextureEnabled!==e&&(this._ThicknessTextureEnabled=e,V.MarkAllMaterialsAsDirty(1))}static get RefractionIntensityTextureEnabled(){return this._ThicknessTextureEnabled}static set RefractionIntensityTextureEnabled(e){this._RefractionIntensityTextureEnabled!==e&&(this._RefractionIntensityTextureEnabled=e,V.MarkAllMaterialsAsDirty(1))}static get TranslucencyIntensityTextureEnabled(){return this._ThicknessTextureEnabled}static set TranslucencyIntensityTextureEnabled(e){this._TranslucencyIntensityTextureEnabled!==e&&(this._TranslucencyIntensityTextureEnabled=e,V.MarkAllMaterialsAsDirty(1))}static get IridescenceTextureEnabled(){return this._IridescenceTextureEnabled}static set IridescenceTextureEnabled(e){this._IridescenceTextureEnabled!==e&&(this._IridescenceTextureEnabled=e,V.MarkAllMaterialsAsDirty(1))}}return a._DiffuseTextureEnabled=!0,a._DetailTextureEnabled=!0,a._DecalMapEnabled=!0,a._AmbientTextureEnabled=!0,a._OpacityTextureEnabled=!0,a._ReflectionTextureEnabled=!0,a._EmissiveTextureEnabled=!0,a._SpecularTextureEnabled=!0,a._BumpTextureEnabled=!0,a._LightmapTextureEnabled=!0,a._RefractionTextureEnabled=!0,a._ColorGradingTextureEnabled=!0,a._FresnelEnabled=!0,a._ClearCoatTextureEnabled=!0,a._ClearCoatBumpTextureEnabled=!0,a._ClearCoatTintTextureEnabled=!0,a._SheenTextureEnabled=!0,a._AnisotropicTextureEnabled=!0,a._ThicknessTextureEnabled=!0,a._RefractionIntensityTextureEnabled=!0,a._TranslucencyIntensityTextureEnabled=!0,a._IridescenceTextureEnabled=!0,a})(),vs="decalFragmentDeclaration",Ss=`#ifdef DECAL
uniform vec4 vDecalInfos;
#endif
`;E.IncludesShadersStore[vs]=Ss;var Es="defaultFragmentDeclaration",Ts=`uniform vec4 vEyePosition;
uniform vec4 vDiffuseColor;
#ifdef SPECULARTERM
uniform vec4 vSpecularColor;
#endif
uniform vec3 vEmissiveColor;
uniform vec3 vAmbientColor;
uniform float visibility;
#ifdef DIFFUSE
uniform vec2 vDiffuseInfos;
#endif
#ifdef AMBIENT
uniform vec2 vAmbientInfos;
#endif
#ifdef OPACITY 
uniform vec2 vOpacityInfos;
#endif
#ifdef EMISSIVE
uniform vec2 vEmissiveInfos;
#endif
#ifdef LIGHTMAP
uniform vec2 vLightmapInfos;
#endif
#ifdef BUMP
uniform vec3 vBumpInfos;
uniform vec2 vTangentSpaceParams;
#endif
#ifdef ALPHATEST
uniform float alphaCutOff;
#endif
#if defined(REFLECTIONMAP_SPHERICAL) || defined(REFLECTIONMAP_PROJECTION) || defined(REFRACTION) || defined(PREPASS)
uniform mat4 view;
#endif
#ifdef REFRACTION
uniform vec4 vRefractionInfos;
#ifndef REFRACTIONMAP_3D
uniform mat4 refractionMatrix;
#endif
#ifdef REFRACTIONFRESNEL
uniform vec4 refractionLeftColor;
uniform vec4 refractionRightColor;
#endif
#if defined(USE_LOCAL_REFRACTIONMAP_CUBIC) && defined(REFRACTIONMAP_3D)
uniform vec3 vRefractionPosition;
uniform vec3 vRefractionSize; 
#endif
#endif
#if defined(SPECULAR) && defined(SPECULARTERM)
uniform vec2 vSpecularInfos;
#endif
#ifdef DIFFUSEFRESNEL
uniform vec4 diffuseLeftColor;
uniform vec4 diffuseRightColor;
#endif
#ifdef OPACITYFRESNEL
uniform vec4 opacityParts;
#endif
#ifdef EMISSIVEFRESNEL
uniform vec4 emissiveLeftColor;
uniform vec4 emissiveRightColor;
#endif
#ifdef REFLECTION
uniform vec2 vReflectionInfos;
#if defined(REFLECTIONMAP_PLANAR) || defined(REFLECTIONMAP_CUBIC) || defined(REFLECTIONMAP_PROJECTION) || defined(REFLECTIONMAP_EQUIRECTANGULAR) || defined(REFLECTIONMAP_SPHERICAL) || defined(REFLECTIONMAP_SKYBOX)
uniform mat4 reflectionMatrix;
#endif
#ifndef REFLECTIONMAP_SKYBOX
#if defined(USE_LOCAL_REFLECTIONMAP_CUBIC) && defined(REFLECTIONMAP_CUBIC)
uniform vec3 vReflectionPosition;
uniform vec3 vReflectionSize; 
#endif
#endif
#ifdef REFLECTIONFRESNEL
uniform vec4 reflectionLeftColor;
uniform vec4 reflectionRightColor;
#endif
#endif
#ifdef DETAIL
uniform vec4 vDetailInfos;
#endif
#include<decalFragmentDeclaration>
#define ADDITIONAL_FRAGMENT_DECLARATION
`;E.IncludesShadersStore[Es]=Ts;var xs="defaultUboDeclaration",Ms=`layout(std140,column_major) uniform;
uniform Material
{
vec4 diffuseLeftColor;
vec4 diffuseRightColor;
vec4 opacityParts;
vec4 reflectionLeftColor;
vec4 reflectionRightColor;
vec4 refractionLeftColor;
vec4 refractionRightColor;
vec4 emissiveLeftColor;
vec4 emissiveRightColor;
vec2 vDiffuseInfos;
vec2 vAmbientInfos;
vec2 vOpacityInfos;
vec2 vReflectionInfos;
vec3 vReflectionPosition;
vec3 vReflectionSize;
vec2 vEmissiveInfos;
vec2 vLightmapInfos;
vec2 vSpecularInfos;
vec3 vBumpInfos;
mat4 diffuseMatrix;
mat4 ambientMatrix;
mat4 opacityMatrix;
mat4 reflectionMatrix;
mat4 emissiveMatrix;
mat4 lightmapMatrix;
mat4 specularMatrix;
mat4 bumpMatrix;
vec2 vTangentSpaceParams;
float pointSize;
float alphaCutOff;
mat4 refractionMatrix;
vec4 vRefractionInfos;
vec3 vRefractionPosition;
vec3 vRefractionSize;
vec4 vSpecularColor;
vec3 vEmissiveColor;
vec4 vDiffuseColor;
vec3 vAmbientColor;
#define ADDITIONAL_UBO_DECLARATION
};
#include<sceneUboDeclaration>
#include<meshUboDeclaration>
`;E.IncludesShadersStore[xs]=Ms;var As="prePassDeclaration",Cs=`#ifdef PREPASS
#extension GL_EXT_draw_buffers : require
layout(location=0) out highp vec4 glFragData[{X}];highp vec4 gl_FragColor;
#ifdef PREPASS_DEPTH
varying highp vec3 vViewPos;
#endif
#ifdef PREPASS_VELOCITY
varying highp vec4 vCurrentPosition;varying highp vec4 vPreviousPosition;
#endif
#endif
`;E.IncludesShadersStore[As]=Cs;var Is="oitDeclaration",Rs=`#ifdef ORDER_INDEPENDENT_TRANSPARENCY
#extension GL_EXT_draw_buffers : require
layout(location=0) out vec2 depth; 
layout(location=1) out vec4 frontColor;
layout(location=2) out vec4 backColor;
#define MAX_DEPTH 99999.0
highp vec4 gl_FragColor;
uniform sampler2D oitDepthSampler;
uniform sampler2D oitFrontColorSampler;
#endif
`;E.IncludesShadersStore[Is]=Rs;var Ps="mainUVVaryingDeclaration",bs=`#ifdef MAINUV{X}
varying vec2 vMainUV{X};
#endif
`;E.IncludesShadersStore[Ps]=bs;var Ds="lightFragmentDeclaration",Ls=`#ifdef LIGHT{X}
uniform vec4 vLightData{X};
uniform vec4 vLightDiffuse{X};
#ifdef SPECULARTERM
uniform vec4 vLightSpecular{X};
#else
vec4 vLightSpecular{X}=vec4(0.);
#endif
#ifdef SHADOW{X}
#ifdef SHADOWCSM{X}
uniform mat4 lightMatrix{X}[SHADOWCSMNUM_CASCADES{X}];
uniform float viewFrustumZ{X}[SHADOWCSMNUM_CASCADES{X}];
uniform float frustumLengths{X}[SHADOWCSMNUM_CASCADES{X}];
uniform float cascadeBlendFactor{X};
varying vec4 vPositionFromLight{X}[SHADOWCSMNUM_CASCADES{X}];
varying float vDepthMetric{X}[SHADOWCSMNUM_CASCADES{X}];
varying vec4 vPositionFromCamera{X};
#if defined(SHADOWPCSS{X})
uniform highp sampler2DArrayShadow shadowSampler{X};
uniform highp sampler2DArray depthSampler{X};
uniform vec2 lightSizeUVCorrection{X}[SHADOWCSMNUM_CASCADES{X}];
uniform float depthCorrection{X}[SHADOWCSMNUM_CASCADES{X}];
uniform float penumbraDarkness{X};
#elif defined(SHADOWPCF{X})
uniform highp sampler2DArrayShadow shadowSampler{X};
#else
uniform highp sampler2DArray shadowSampler{X};
#endif
#ifdef SHADOWCSMDEBUG{X}
const vec3 vCascadeColorsMultiplier{X}[8]=vec3[8]
(
vec3 ( 1.5,0.0,0.0 ),
vec3 ( 0.0,1.5,0.0 ),
vec3 ( 0.0,0.0,5.5 ),
vec3 ( 1.5,0.0,5.5 ),
vec3 ( 1.5,1.5,0.0 ),
vec3 ( 1.0,1.0,1.0 ),
vec3 ( 0.0,1.0,5.5 ),
vec3 ( 0.5,3.5,0.75 )
);
vec3 shadowDebug{X};
#endif
#ifdef SHADOWCSMUSESHADOWMAXZ{X}
int index{X}=-1;
#else
int index{X}=SHADOWCSMNUM_CASCADES{X}-1;
#endif
float diff{X}=0.;
#elif defined(SHADOWCUBE{X})
uniform samplerCube shadowSampler{X};
#else
varying vec4 vPositionFromLight{X};
varying float vDepthMetric{X};
#if defined(SHADOWPCSS{X})
uniform highp sampler2DShadow shadowSampler{X};
uniform highp sampler2D depthSampler{X};
#elif defined(SHADOWPCF{X})
uniform highp sampler2DShadow shadowSampler{X};
#else
uniform sampler2D shadowSampler{X};
#endif
uniform mat4 lightMatrix{X};
#endif
uniform vec4 shadowsInfo{X};
uniform vec2 depthValues{X};
#endif
#ifdef SPOTLIGHT{X}
uniform vec4 vLightDirection{X};
uniform vec4 vLightFalloff{X};
#elif defined(POINTLIGHT{X})
uniform vec4 vLightFalloff{X};
#elif defined(HEMILIGHT{X})
uniform vec3 vLightGround{X};
#endif
#ifdef PROJECTEDLIGHTTEXTURE{X}
uniform mat4 textureProjectionMatrix{X};
uniform sampler2D projectionLightSampler{X};
#endif
#endif
`;E.IncludesShadersStore[Ds]=Ls;var ws="lightUboDeclaration",Os=`#ifdef LIGHT{X}
uniform Light{X}
{
vec4 vLightData;
vec4 vLightDiffuse;
vec4 vLightSpecular;
#ifdef SPOTLIGHT{X}
vec4 vLightDirection;
vec4 vLightFalloff;
#elif defined(POINTLIGHT{X})
vec4 vLightFalloff;
#elif defined(HEMILIGHT{X})
vec3 vLightGround;
#endif
vec4 shadowsInfo;
vec2 depthValues;
} light{X};
#ifdef PROJECTEDLIGHTTEXTURE{X}
uniform mat4 textureProjectionMatrix{X};
uniform sampler2D projectionLightSampler{X};
#endif
#ifdef SHADOW{X}
#ifdef SHADOWCSM{X}
uniform mat4 lightMatrix{X}[SHADOWCSMNUM_CASCADES{X}];
uniform float viewFrustumZ{X}[SHADOWCSMNUM_CASCADES{X}];
uniform float frustumLengths{X}[SHADOWCSMNUM_CASCADES{X}];
uniform float cascadeBlendFactor{X};
varying vec4 vPositionFromLight{X}[SHADOWCSMNUM_CASCADES{X}];
varying float vDepthMetric{X}[SHADOWCSMNUM_CASCADES{X}];
varying vec4 vPositionFromCamera{X};
#if defined(SHADOWPCSS{X})
uniform highp sampler2DArrayShadow shadowSampler{X};
uniform highp sampler2DArray depthSampler{X};
uniform vec2 lightSizeUVCorrection{X}[SHADOWCSMNUM_CASCADES{X}];
uniform float depthCorrection{X}[SHADOWCSMNUM_CASCADES{X}];
uniform float penumbraDarkness{X};
#elif defined(SHADOWPCF{X})
uniform highp sampler2DArrayShadow shadowSampler{X};
#else
uniform highp sampler2DArray shadowSampler{X};
#endif
#ifdef SHADOWCSMDEBUG{X}
const vec3 vCascadeColorsMultiplier{X}[8]=vec3[8]
(
vec3 ( 1.5,0.0,0.0 ),
vec3 ( 0.0,1.5,0.0 ),
vec3 ( 0.0,0.0,5.5 ),
vec3 ( 1.5,0.0,5.5 ),
vec3 ( 1.5,1.5,0.0 ),
vec3 ( 1.0,1.0,1.0 ),
vec3 ( 0.0,1.0,5.5 ),
vec3 ( 0.5,3.5,0.75 )
);
vec3 shadowDebug{X};
#endif
#ifdef SHADOWCSMUSESHADOWMAXZ{X}
int index{X}=-1;
#else
int index{X}=SHADOWCSMNUM_CASCADES{X}-1;
#endif
float diff{X}=0.;
#elif defined(SHADOWCUBE{X})
uniform samplerCube shadowSampler{X}; 
#else
varying vec4 vPositionFromLight{X};
varying float vDepthMetric{X};
#if defined(SHADOWPCSS{X})
uniform highp sampler2DShadow shadowSampler{X};
uniform highp sampler2D depthSampler{X};
#elif defined(SHADOWPCF{X})
uniform highp sampler2DShadow shadowSampler{X};
#else
uniform sampler2D shadowSampler{X};
#endif
uniform mat4 lightMatrix{X};
#endif
#endif
#endif
`;E.IncludesShadersStore[ws]=Os;var Fs="lightsFragmentFunctions",Ns=`struct lightingInfo
{
vec3 diffuse;
#ifdef SPECULARTERM
vec3 specular;
#endif
#ifdef NDOTL
float ndl;
#endif
};
lightingInfo computeLighting(vec3 viewDirectionW,vec3 vNormal,vec4 lightData,vec3 diffuseColor,vec3 specularColor,float range,float glossiness) {
lightingInfo result;
vec3 lightVectorW;
float attenuation=1.0;
if (lightData.w==0.)
{
vec3 direction=lightData.xyz-vPositionW;
attenuation=max(0.,1.0-length(direction)/range);
lightVectorW=normalize(direction);
}
else
{
lightVectorW=normalize(-lightData.xyz);
}
float ndl=max(0.,dot(vNormal,lightVectorW));
#ifdef NDOTL
result.ndl=ndl;
#endif
result.diffuse=ndl*diffuseColor*attenuation;
#ifdef SPECULARTERM
vec3 angleW=normalize(viewDirectionW+lightVectorW);
float specComp=max(0.,dot(vNormal,angleW));
specComp=pow(specComp,max(1.,glossiness));
result.specular=specComp*specularColor*attenuation;
#endif
return result;
}
lightingInfo computeSpotLighting(vec3 viewDirectionW,vec3 vNormal,vec4 lightData,vec4 lightDirection,vec3 diffuseColor,vec3 specularColor,float range,float glossiness) {
lightingInfo result;
vec3 direction=lightData.xyz-vPositionW;
vec3 lightVectorW=normalize(direction);
float attenuation=max(0.,1.0-length(direction)/range);
float cosAngle=max(0.,dot(lightDirection.xyz,-lightVectorW));
if (cosAngle>=lightDirection.w)
{
cosAngle=max(0.,pow(cosAngle,lightData.w));
attenuation*=cosAngle;
float ndl=max(0.,dot(vNormal,lightVectorW));
#ifdef NDOTL
result.ndl=ndl;
#endif
result.diffuse=ndl*diffuseColor*attenuation;
#ifdef SPECULARTERM
vec3 angleW=normalize(viewDirectionW+lightVectorW);
float specComp=max(0.,dot(vNormal,angleW));
specComp=pow(specComp,max(1.,glossiness));
result.specular=specComp*specularColor*attenuation;
#endif
return result;
}
result.diffuse=vec3(0.);
#ifdef SPECULARTERM
result.specular=vec3(0.);
#endif
#ifdef NDOTL
result.ndl=0.;
#endif
return result;
}
lightingInfo computeHemisphericLighting(vec3 viewDirectionW,vec3 vNormal,vec4 lightData,vec3 diffuseColor,vec3 specularColor,vec3 groundColor,float glossiness) {
lightingInfo result;
float ndl=dot(vNormal,lightData.xyz)*0.5+0.5;
#ifdef NDOTL
result.ndl=ndl;
#endif
result.diffuse=mix(groundColor,diffuseColor,ndl);
#ifdef SPECULARTERM
vec3 angleW=normalize(viewDirectionW+lightData.xyz);
float specComp=max(0.,dot(vNormal,angleW));
specComp=pow(specComp,max(1.,glossiness));
result.specular=specComp*specularColor;
#endif
return result;
}
#define inline
vec3 computeProjectionTextureDiffuseLighting(sampler2D projectionLightSampler,mat4 textureProjectionMatrix){
vec4 strq=textureProjectionMatrix*vec4(vPositionW,1.0);
strq/=strq.w;
vec3 textureColor=texture2D(projectionLightSampler,strq.xy).rgb;
return textureColor;
}`;E.IncludesShadersStore[Fs]=Ns;var ys="shadowsFragmentFunctions",Us=`#ifdef SHADOWS
#if defined(WEBGL2) || defined(WEBGPU) || defined(NATIVE)
#define TEXTUREFUNC(s,c,l) texture2DLodEXT(s,c,l)
#else
#define TEXTUREFUNC(s,c,b) texture2D(s,c,b)
#endif
#ifndef SHADOWFLOAT
float unpack(vec4 color)
{
const vec4 bit_shift=vec4(1.0/(255.0*255.0*255.0),1.0/(255.0*255.0),1.0/255.0,1.0);
return dot(color,bit_shift);
}
#endif
float computeFallOff(float value,vec2 clipSpace,float frustumEdgeFalloff)
{
float mask=smoothstep(1.0-frustumEdgeFalloff,1.00000012,clamp(dot(clipSpace,clipSpace),0.,1.));
return mix(value,1.0,mask);
}
#define inline
float computeShadowCube(vec3 lightPosition,samplerCube shadowSampler,float darkness,vec2 depthValues)
{
vec3 directionToLight=vPositionW-lightPosition;
float depth=length(directionToLight);
depth=(depth+depthValues.x)/(depthValues.y);
depth=clamp(depth,0.,1.0);
directionToLight=normalize(directionToLight);
directionToLight.y=-directionToLight.y;
#ifndef SHADOWFLOAT
float shadow=unpack(textureCube(shadowSampler,directionToLight));
#else
float shadow=textureCube(shadowSampler,directionToLight).x;
#endif
return depth>shadow ? darkness : 1.0;
}
#define inline
float computeShadowWithPoissonSamplingCube(vec3 lightPosition,samplerCube shadowSampler,float mapSize,float darkness,vec2 depthValues)
{
vec3 directionToLight=vPositionW-lightPosition;
float depth=length(directionToLight);
depth=(depth+depthValues.x)/(depthValues.y);
depth=clamp(depth,0.,1.0);
directionToLight=normalize(directionToLight);
directionToLight.y=-directionToLight.y;
float visibility=1.;
vec3 poissonDisk[4];
poissonDisk[0]=vec3(-1.0,1.0,-1.0);
poissonDisk[1]=vec3(1.0,-1.0,-1.0);
poissonDisk[2]=vec3(-1.0,-1.0,-1.0);
poissonDisk[3]=vec3(1.0,-1.0,1.0);
#ifndef SHADOWFLOAT
if (unpack(textureCube(shadowSampler,directionToLight+poissonDisk[0]*mapSize))<depth) visibility-=0.25;
if (unpack(textureCube(shadowSampler,directionToLight+poissonDisk[1]*mapSize))<depth) visibility-=0.25;
if (unpack(textureCube(shadowSampler,directionToLight+poissonDisk[2]*mapSize))<depth) visibility-=0.25;
if (unpack(textureCube(shadowSampler,directionToLight+poissonDisk[3]*mapSize))<depth) visibility-=0.25;
#else
if (textureCube(shadowSampler,directionToLight+poissonDisk[0]*mapSize).x<depth) visibility-=0.25;
if (textureCube(shadowSampler,directionToLight+poissonDisk[1]*mapSize).x<depth) visibility-=0.25;
if (textureCube(shadowSampler,directionToLight+poissonDisk[2]*mapSize).x<depth) visibility-=0.25;
if (textureCube(shadowSampler,directionToLight+poissonDisk[3]*mapSize).x<depth) visibility-=0.25;
#endif
return min(1.0,visibility+darkness);
}
#define inline
float computeShadowWithESMCube(vec3 lightPosition,samplerCube shadowSampler,float darkness,float depthScale,vec2 depthValues)
{
vec3 directionToLight=vPositionW-lightPosition;
float depth=length(directionToLight);
depth=(depth+depthValues.x)/(depthValues.y);
float shadowPixelDepth=clamp(depth,0.,1.0);
directionToLight=normalize(directionToLight);
directionToLight.y=-directionToLight.y;
#ifndef SHADOWFLOAT
float shadowMapSample=unpack(textureCube(shadowSampler,directionToLight));
#else
float shadowMapSample=textureCube(shadowSampler,directionToLight).x;
#endif
float esm=1.0-clamp(exp(min(87.,depthScale*shadowPixelDepth))*shadowMapSample,0.,1.-darkness); 
return esm;
}
#define inline
float computeShadowWithCloseESMCube(vec3 lightPosition,samplerCube shadowSampler,float darkness,float depthScale,vec2 depthValues)
{
vec3 directionToLight=vPositionW-lightPosition;
float depth=length(directionToLight);
depth=(depth+depthValues.x)/(depthValues.y);
float shadowPixelDepth=clamp(depth,0.,1.0);
directionToLight=normalize(directionToLight);
directionToLight.y=-directionToLight.y;
#ifndef SHADOWFLOAT
float shadowMapSample=unpack(textureCube(shadowSampler,directionToLight));
#else
float shadowMapSample=textureCube(shadowSampler,directionToLight).x;
#endif
float esm=clamp(exp(min(87.,-depthScale*(shadowPixelDepth-shadowMapSample))),darkness,1.);
return esm;
}
#if defined(WEBGL2) || defined(WEBGPU) || defined(NATIVE)
#define inline
float computeShadowCSM(float layer,vec4 vPositionFromLight,float depthMetric,highp sampler2DArray shadowSampler,float darkness,float frustumEdgeFalloff)
{
vec3 clipSpace=vPositionFromLight.xyz/vPositionFromLight.w;
vec2 uv=0.5*clipSpace.xy+vec2(0.5);
vec3 uvLayer=vec3(uv.x,uv.y,layer);
float shadowPixelDepth=clamp(depthMetric,0.,1.0);
#ifndef SHADOWFLOAT
float shadow=unpack(texture2D(shadowSampler,uvLayer));
#else
float shadow=texture2D(shadowSampler,uvLayer).x;
#endif
return shadowPixelDepth>shadow ? computeFallOff(darkness,clipSpace.xy,frustumEdgeFalloff) : 1.;
}
#endif
#define inline
float computeShadow(vec4 vPositionFromLight,float depthMetric,sampler2D shadowSampler,float darkness,float frustumEdgeFalloff)
{
vec3 clipSpace=vPositionFromLight.xyz/vPositionFromLight.w;
vec2 uv=0.5*clipSpace.xy+vec2(0.5);
if (uv.x<0. || uv.x>1.0 || uv.y<0. || uv.y>1.0)
{
return 1.0;
}
else
{
float shadowPixelDepth=clamp(depthMetric,0.,1.0);
#ifndef SHADOWFLOAT
float shadow=unpack(TEXTUREFUNC(shadowSampler,uv,0.));
#else
float shadow=TEXTUREFUNC(shadowSampler,uv,0.).x;
#endif
return shadowPixelDepth>shadow ? computeFallOff(darkness,clipSpace.xy,frustumEdgeFalloff) : 1.;
}
}
#define inline
float computeShadowWithPoissonSampling(vec4 vPositionFromLight,float depthMetric,sampler2D shadowSampler,float mapSize,float darkness,float frustumEdgeFalloff)
{
vec3 clipSpace=vPositionFromLight.xyz/vPositionFromLight.w;
vec2 uv=0.5*clipSpace.xy+vec2(0.5);
if (uv.x<0. || uv.x>1.0 || uv.y<0. || uv.y>1.0)
{
return 1.0;
}
else
{
float shadowPixelDepth=clamp(depthMetric,0.,1.0);
float visibility=1.;
vec2 poissonDisk[4];
poissonDisk[0]=vec2(-0.94201624,-0.39906216);
poissonDisk[1]=vec2(0.94558609,-0.76890725);
poissonDisk[2]=vec2(-0.094184101,-0.92938870);
poissonDisk[3]=vec2(0.34495938,0.29387760);
#ifndef SHADOWFLOAT
if (unpack(TEXTUREFUNC(shadowSampler,uv+poissonDisk[0]*mapSize,0.))<shadowPixelDepth) visibility-=0.25;
if (unpack(TEXTUREFUNC(shadowSampler,uv+poissonDisk[1]*mapSize,0.))<shadowPixelDepth) visibility-=0.25;
if (unpack(TEXTUREFUNC(shadowSampler,uv+poissonDisk[2]*mapSize,0.))<shadowPixelDepth) visibility-=0.25;
if (unpack(TEXTUREFUNC(shadowSampler,uv+poissonDisk[3]*mapSize,0.))<shadowPixelDepth) visibility-=0.25;
#else
if (TEXTUREFUNC(shadowSampler,uv+poissonDisk[0]*mapSize,0.).x<shadowPixelDepth) visibility-=0.25;
if (TEXTUREFUNC(shadowSampler,uv+poissonDisk[1]*mapSize,0.).x<shadowPixelDepth) visibility-=0.25;
if (TEXTUREFUNC(shadowSampler,uv+poissonDisk[2]*mapSize,0.).x<shadowPixelDepth) visibility-=0.25;
if (TEXTUREFUNC(shadowSampler,uv+poissonDisk[3]*mapSize,0.).x<shadowPixelDepth) visibility-=0.25;
#endif
return computeFallOff(min(1.0,visibility+darkness),clipSpace.xy,frustumEdgeFalloff);
}
}
#define inline
float computeShadowWithESM(vec4 vPositionFromLight,float depthMetric,sampler2D shadowSampler,float darkness,float depthScale,float frustumEdgeFalloff)
{
vec3 clipSpace=vPositionFromLight.xyz/vPositionFromLight.w;
vec2 uv=0.5*clipSpace.xy+vec2(0.5);
if (uv.x<0. || uv.x>1.0 || uv.y<0. || uv.y>1.0)
{
return 1.0;
}
else
{
float shadowPixelDepth=clamp(depthMetric,0.,1.0);
#ifndef SHADOWFLOAT
float shadowMapSample=unpack(TEXTUREFUNC(shadowSampler,uv,0.));
#else
float shadowMapSample=TEXTUREFUNC(shadowSampler,uv,0.).x;
#endif
float esm=1.0-clamp(exp(min(87.,depthScale*shadowPixelDepth))*shadowMapSample,0.,1.-darkness);
return computeFallOff(esm,clipSpace.xy,frustumEdgeFalloff);
}
}
#define inline
float computeShadowWithCloseESM(vec4 vPositionFromLight,float depthMetric,sampler2D shadowSampler,float darkness,float depthScale,float frustumEdgeFalloff)
{
vec3 clipSpace=vPositionFromLight.xyz/vPositionFromLight.w;
vec2 uv=0.5*clipSpace.xy+vec2(0.5);
if (uv.x<0. || uv.x>1.0 || uv.y<0. || uv.y>1.0)
{
return 1.0;
}
else
{
float shadowPixelDepth=clamp(depthMetric,0.,1.0); 
#ifndef SHADOWFLOAT
float shadowMapSample=unpack(TEXTUREFUNC(shadowSampler,uv,0.));
#else
float shadowMapSample=TEXTUREFUNC(shadowSampler,uv,0.).x;
#endif
float esm=clamp(exp(min(87.,-depthScale*(shadowPixelDepth-shadowMapSample))),darkness,1.);
return computeFallOff(esm,clipSpace.xy,frustumEdgeFalloff);
}
}
#ifdef IS_NDC_HALF_ZRANGE
#define ZINCLIP clipSpace.z
#else
#define ZINCLIP uvDepth.z
#endif
#if defined(WEBGL2) || defined(WEBGPU) || defined(NATIVE)
#define GREATEST_LESS_THAN_ONE 0.99999994
#define inline
float computeShadowWithCSMPCF1(float layer,vec4 vPositionFromLight,float depthMetric,highp sampler2DArrayShadow shadowSampler,float darkness,float frustumEdgeFalloff)
{
vec3 clipSpace=vPositionFromLight.xyz/vPositionFromLight.w;
vec3 uvDepth=vec3(0.5*clipSpace.xyz+vec3(0.5));
uvDepth.z=clamp(ZINCLIP,0.,GREATEST_LESS_THAN_ONE);
vec4 uvDepthLayer=vec4(uvDepth.x,uvDepth.y,layer,uvDepth.z);
float shadow=texture2D(shadowSampler,uvDepthLayer);
shadow=mix(darkness,1.,shadow);
return computeFallOff(shadow,clipSpace.xy,frustumEdgeFalloff);
}
#define inline
float computeShadowWithCSMPCF3(float layer,vec4 vPositionFromLight,float depthMetric,highp sampler2DArrayShadow shadowSampler,vec2 shadowMapSizeAndInverse,float darkness,float frustumEdgeFalloff)
{
vec3 clipSpace=vPositionFromLight.xyz/vPositionFromLight.w;
vec3 uvDepth=vec3(0.5*clipSpace.xyz+vec3(0.5));
uvDepth.z=clamp(ZINCLIP,0.,GREATEST_LESS_THAN_ONE);
vec2 uv=uvDepth.xy*shadowMapSizeAndInverse.x; 
uv+=0.5; 
vec2 st=fract(uv); 
vec2 base_uv=floor(uv)-0.5; 
base_uv*=shadowMapSizeAndInverse.y; 
vec2 uvw0=3.-2.*st;
vec2 uvw1=1.+2.*st;
vec2 u=vec2((2.-st.x)/uvw0.x-1.,st.x/uvw1.x+1.)*shadowMapSizeAndInverse.y;
vec2 v=vec2((2.-st.y)/uvw0.y-1.,st.y/uvw1.y+1.)*shadowMapSizeAndInverse.y;
float shadow=0.;
shadow+=uvw0.x*uvw0.y*texture2D(shadowSampler,vec4(base_uv.xy+vec2(u[0],v[0]),layer,uvDepth.z));
shadow+=uvw1.x*uvw0.y*texture2D(shadowSampler,vec4(base_uv.xy+vec2(u[1],v[0]),layer,uvDepth.z));
shadow+=uvw0.x*uvw1.y*texture2D(shadowSampler,vec4(base_uv.xy+vec2(u[0],v[1]),layer,uvDepth.z));
shadow+=uvw1.x*uvw1.y*texture2D(shadowSampler,vec4(base_uv.xy+vec2(u[1],v[1]),layer,uvDepth.z));
shadow=shadow/16.;
shadow=mix(darkness,1.,shadow);
return computeFallOff(shadow,clipSpace.xy,frustumEdgeFalloff);
}
#define inline
float computeShadowWithCSMPCF5(float layer,vec4 vPositionFromLight,float depthMetric,highp sampler2DArrayShadow shadowSampler,vec2 shadowMapSizeAndInverse,float darkness,float frustumEdgeFalloff)
{
vec3 clipSpace=vPositionFromLight.xyz/vPositionFromLight.w;
vec3 uvDepth=vec3(0.5*clipSpace.xyz+vec3(0.5));
uvDepth.z=clamp(ZINCLIP,0.,GREATEST_LESS_THAN_ONE);
vec2 uv=uvDepth.xy*shadowMapSizeAndInverse.x; 
uv+=0.5; 
vec2 st=fract(uv); 
vec2 base_uv=floor(uv)-0.5; 
base_uv*=shadowMapSizeAndInverse.y; 
vec2 uvw0=4.-3.*st;
vec2 uvw1=vec2(7.);
vec2 uvw2=1.+3.*st;
vec3 u=vec3((3.-2.*st.x)/uvw0.x-2.,(3.+st.x)/uvw1.x,st.x/uvw2.x+2.)*shadowMapSizeAndInverse.y;
vec3 v=vec3((3.-2.*st.y)/uvw0.y-2.,(3.+st.y)/uvw1.y,st.y/uvw2.y+2.)*shadowMapSizeAndInverse.y;
float shadow=0.;
shadow+=uvw0.x*uvw0.y*texture2D(shadowSampler,vec4(base_uv.xy+vec2(u[0],v[0]),layer,uvDepth.z));
shadow+=uvw1.x*uvw0.y*texture2D(shadowSampler,vec4(base_uv.xy+vec2(u[1],v[0]),layer,uvDepth.z));
shadow+=uvw2.x*uvw0.y*texture2D(shadowSampler,vec4(base_uv.xy+vec2(u[2],v[0]),layer,uvDepth.z));
shadow+=uvw0.x*uvw1.y*texture2D(shadowSampler,vec4(base_uv.xy+vec2(u[0],v[1]),layer,uvDepth.z));
shadow+=uvw1.x*uvw1.y*texture2D(shadowSampler,vec4(base_uv.xy+vec2(u[1],v[1]),layer,uvDepth.z));
shadow+=uvw2.x*uvw1.y*texture2D(shadowSampler,vec4(base_uv.xy+vec2(u[2],v[1]),layer,uvDepth.z));
shadow+=uvw0.x*uvw2.y*texture2D(shadowSampler,vec4(base_uv.xy+vec2(u[0],v[2]),layer,uvDepth.z));
shadow+=uvw1.x*uvw2.y*texture2D(shadowSampler,vec4(base_uv.xy+vec2(u[1],v[2]),layer,uvDepth.z));
shadow+=uvw2.x*uvw2.y*texture2D(shadowSampler,vec4(base_uv.xy+vec2(u[2],v[2]),layer,uvDepth.z));
shadow=shadow/144.;
shadow=mix(darkness,1.,shadow);
return computeFallOff(shadow,clipSpace.xy,frustumEdgeFalloff);
}
#define inline
float computeShadowWithPCF1(vec4 vPositionFromLight,float depthMetric,highp sampler2DShadow shadowSampler,float darkness,float frustumEdgeFalloff)
{
if (depthMetric>1.0 || depthMetric<0.0) {
return 1.0;
}
else
{
vec3 clipSpace=vPositionFromLight.xyz/vPositionFromLight.w;
vec3 uvDepth=vec3(0.5*clipSpace.xyz+vec3(0.5));
uvDepth.z=ZINCLIP;
float shadow=TEXTUREFUNC(shadowSampler,uvDepth,0.);
shadow=mix(darkness,1.,shadow);
return computeFallOff(shadow,clipSpace.xy,frustumEdgeFalloff);
}
}
#define inline
float computeShadowWithPCF3(vec4 vPositionFromLight,float depthMetric,highp sampler2DShadow shadowSampler,vec2 shadowMapSizeAndInverse,float darkness,float frustumEdgeFalloff)
{
if (depthMetric>1.0 || depthMetric<0.0) {
return 1.0;
}
else
{
vec3 clipSpace=vPositionFromLight.xyz/vPositionFromLight.w;
vec3 uvDepth=vec3(0.5*clipSpace.xyz+vec3(0.5));
uvDepth.z=ZINCLIP;
vec2 uv=uvDepth.xy*shadowMapSizeAndInverse.x; 
uv+=0.5; 
vec2 st=fract(uv); 
vec2 base_uv=floor(uv)-0.5; 
base_uv*=shadowMapSizeAndInverse.y; 
vec2 uvw0=3.-2.*st;
vec2 uvw1=1.+2.*st;
vec2 u=vec2((2.-st.x)/uvw0.x-1.,st.x/uvw1.x+1.)*shadowMapSizeAndInverse.y;
vec2 v=vec2((2.-st.y)/uvw0.y-1.,st.y/uvw1.y+1.)*shadowMapSizeAndInverse.y;
float shadow=0.;
shadow+=uvw0.x*uvw0.y*TEXTUREFUNC(shadowSampler,vec3(base_uv.xy+vec2(u[0],v[0]),uvDepth.z),0.);
shadow+=uvw1.x*uvw0.y*TEXTUREFUNC(shadowSampler,vec3(base_uv.xy+vec2(u[1],v[0]),uvDepth.z),0.);
shadow+=uvw0.x*uvw1.y*TEXTUREFUNC(shadowSampler,vec3(base_uv.xy+vec2(u[0],v[1]),uvDepth.z),0.);
shadow+=uvw1.x*uvw1.y*TEXTUREFUNC(shadowSampler,vec3(base_uv.xy+vec2(u[1],v[1]),uvDepth.z),0.);
shadow=shadow/16.;
shadow=mix(darkness,1.,shadow);
return computeFallOff(shadow,clipSpace.xy,frustumEdgeFalloff);
}
}
#define inline
float computeShadowWithPCF5(vec4 vPositionFromLight,float depthMetric,highp sampler2DShadow shadowSampler,vec2 shadowMapSizeAndInverse,float darkness,float frustumEdgeFalloff)
{
if (depthMetric>1.0 || depthMetric<0.0) {
return 1.0;
}
else
{
vec3 clipSpace=vPositionFromLight.xyz/vPositionFromLight.w;
vec3 uvDepth=vec3(0.5*clipSpace.xyz+vec3(0.5));
uvDepth.z=ZINCLIP;
vec2 uv=uvDepth.xy*shadowMapSizeAndInverse.x; 
uv+=0.5; 
vec2 st=fract(uv); 
vec2 base_uv=floor(uv)-0.5; 
base_uv*=shadowMapSizeAndInverse.y; 
vec2 uvw0=4.-3.*st;
vec2 uvw1=vec2(7.);
vec2 uvw2=1.+3.*st;
vec3 u=vec3((3.-2.*st.x)/uvw0.x-2.,(3.+st.x)/uvw1.x,st.x/uvw2.x+2.)*shadowMapSizeAndInverse.y;
vec3 v=vec3((3.-2.*st.y)/uvw0.y-2.,(3.+st.y)/uvw1.y,st.y/uvw2.y+2.)*shadowMapSizeAndInverse.y;
float shadow=0.;
shadow+=uvw0.x*uvw0.y*TEXTUREFUNC(shadowSampler,vec3(base_uv.xy+vec2(u[0],v[0]),uvDepth.z),0.);
shadow+=uvw1.x*uvw0.y*TEXTUREFUNC(shadowSampler,vec3(base_uv.xy+vec2(u[1],v[0]),uvDepth.z),0.);
shadow+=uvw2.x*uvw0.y*TEXTUREFUNC(shadowSampler,vec3(base_uv.xy+vec2(u[2],v[0]),uvDepth.z),0.);
shadow+=uvw0.x*uvw1.y*TEXTUREFUNC(shadowSampler,vec3(base_uv.xy+vec2(u[0],v[1]),uvDepth.z),0.);
shadow+=uvw1.x*uvw1.y*TEXTUREFUNC(shadowSampler,vec3(base_uv.xy+vec2(u[1],v[1]),uvDepth.z),0.);
shadow+=uvw2.x*uvw1.y*TEXTUREFUNC(shadowSampler,vec3(base_uv.xy+vec2(u[2],v[1]),uvDepth.z),0.);
shadow+=uvw0.x*uvw2.y*TEXTUREFUNC(shadowSampler,vec3(base_uv.xy+vec2(u[0],v[2]),uvDepth.z),0.);
shadow+=uvw1.x*uvw2.y*TEXTUREFUNC(shadowSampler,vec3(base_uv.xy+vec2(u[1],v[2]),uvDepth.z),0.);
shadow+=uvw2.x*uvw2.y*TEXTUREFUNC(shadowSampler,vec3(base_uv.xy+vec2(u[2],v[2]),uvDepth.z),0.);
shadow=shadow/144.;
shadow=mix(darkness,1.,shadow);
return computeFallOff(shadow,clipSpace.xy,frustumEdgeFalloff);
}
}
const vec3 PoissonSamplers32[64]=vec3[64](
vec3(0.06407013,0.05409927,0.),
vec3(0.7366577,0.5789394,0.),
vec3(-0.6270542,-0.5320278,0.),
vec3(-0.4096107,0.8411095,0.),
vec3(0.6849564,-0.4990818,0.),
vec3(-0.874181,-0.04579735,0.),
vec3(0.9989998,0.0009880066,0.),
vec3(-0.004920578,-0.9151649,0.),
vec3(0.1805763,0.9747483,0.),
vec3(-0.2138451,0.2635818,0.),
vec3(0.109845,0.3884785,0.),
vec3(0.06876755,-0.3581074,0.),
vec3(0.374073,-0.7661266,0.),
vec3(0.3079132,-0.1216763,0.),
vec3(-0.3794335,-0.8271583,0.),
vec3(-0.203878,-0.07715034,0.),
vec3(0.5912697,0.1469799,0.),
vec3(-0.88069,0.3031784,0.),
vec3(0.5040108,0.8283722,0.),
vec3(-0.5844124,0.5494877,0.),
vec3(0.6017799,-0.1726654,0.),
vec3(-0.5554981,0.1559997,0.),
vec3(-0.3016369,-0.3900928,0.),
vec3(-0.5550632,-0.1723762,0.),
vec3(0.925029,0.2995041,0.),
vec3(-0.2473137,0.5538505,0.),
vec3(0.9183037,-0.2862392,0.),
vec3(0.2469421,0.6718712,0.),
vec3(0.3916397,-0.4328209,0.),
vec3(-0.03576927,-0.6220032,0.),
vec3(-0.04661255,0.7995201,0.),
vec3(0.4402924,0.3640312,0.),
vec3(0.,0.,0.),
vec3(0.,0.,0.),
vec3(0.,0.,0.),
vec3(0.,0.,0.),
vec3(0.,0.,0.),
vec3(0.,0.,0.),
vec3(0.,0.,0.),
vec3(0.,0.,0.),
vec3(0.,0.,0.),
vec3(0.,0.,0.),
vec3(0.,0.,0.),
vec3(0.,0.,0.),
vec3(0.,0.,0.),
vec3(0.,0.,0.),
vec3(0.,0.,0.),
vec3(0.,0.,0.),
vec3(0.,0.,0.),
vec3(0.,0.,0.),
vec3(0.,0.,0.),
vec3(0.,0.,0.),
vec3(0.,0.,0.),
vec3(0.,0.,0.),
vec3(0.,0.,0.),
vec3(0.,0.,0.),
vec3(0.,0.,0.),
vec3(0.,0.,0.),
vec3(0.,0.,0.),
vec3(0.,0.,0.),
vec3(0.,0.,0.),
vec3(0.,0.,0.),
vec3(0.,0.,0.),
vec3(0.,0.,0.)
);
const vec3 PoissonSamplers64[64]=vec3[64](
vec3(-0.613392,0.617481,0.),
vec3(0.170019,-0.040254,0.),
vec3(-0.299417,0.791925,0.),
vec3(0.645680,0.493210,0.),
vec3(-0.651784,0.717887,0.),
vec3(0.421003,0.027070,0.),
vec3(-0.817194,-0.271096,0.),
vec3(-0.705374,-0.668203,0.),
vec3(0.977050,-0.108615,0.),
vec3(0.063326,0.142369,0.),
vec3(0.203528,0.214331,0.),
vec3(-0.667531,0.326090,0.),
vec3(-0.098422,-0.295755,0.),
vec3(-0.885922,0.215369,0.),
vec3(0.566637,0.605213,0.),
vec3(0.039766,-0.396100,0.),
vec3(0.751946,0.453352,0.),
vec3(0.078707,-0.715323,0.),
vec3(-0.075838,-0.529344,0.),
vec3(0.724479,-0.580798,0.),
vec3(0.222999,-0.215125,0.),
vec3(-0.467574,-0.405438,0.),
vec3(-0.248268,-0.814753,0.),
vec3(0.354411,-0.887570,0.),
vec3(0.175817,0.382366,0.),
vec3(0.487472,-0.063082,0.),
vec3(-0.084078,0.898312,0.),
vec3(0.488876,-0.783441,0.),
vec3(0.470016,0.217933,0.),
vec3(-0.696890,-0.549791,0.),
vec3(-0.149693,0.605762,0.),
vec3(0.034211,0.979980,0.),
vec3(0.503098,-0.308878,0.),
vec3(-0.016205,-0.872921,0.),
vec3(0.385784,-0.393902,0.),
vec3(-0.146886,-0.859249,0.),
vec3(0.643361,0.164098,0.),
vec3(0.634388,-0.049471,0.),
vec3(-0.688894,0.007843,0.),
vec3(0.464034,-0.188818,0.),
vec3(-0.440840,0.137486,0.),
vec3(0.364483,0.511704,0.),
vec3(0.034028,0.325968,0.),
vec3(0.099094,-0.308023,0.),
vec3(0.693960,-0.366253,0.),
vec3(0.678884,-0.204688,0.),
vec3(0.001801,0.780328,0.),
vec3(0.145177,-0.898984,0.),
vec3(0.062655,-0.611866,0.),
vec3(0.315226,-0.604297,0.),
vec3(-0.780145,0.486251,0.),
vec3(-0.371868,0.882138,0.),
vec3(0.200476,0.494430,0.),
vec3(-0.494552,-0.711051,0.),
vec3(0.612476,0.705252,0.),
vec3(-0.578845,-0.768792,0.),
vec3(-0.772454,-0.090976,0.),
vec3(0.504440,0.372295,0.),
vec3(0.155736,0.065157,0.),
vec3(0.391522,0.849605,0.),
vec3(-0.620106,-0.328104,0.),
vec3(0.789239,-0.419965,0.),
vec3(-0.545396,0.538133,0.),
vec3(-0.178564,-0.596057,0.)
);
#define inline
float computeShadowWithCSMPCSS(float layer,vec4 vPositionFromLight,float depthMetric,highp sampler2DArray depthSampler,highp sampler2DArrayShadow shadowSampler,float shadowMapSizeInverse,float lightSizeUV,float darkness,float frustumEdgeFalloff,int searchTapCount,int pcfTapCount,vec3[64] poissonSamplers,vec2 lightSizeUVCorrection,float depthCorrection,float penumbraDarkness)
{
vec3 clipSpace=vPositionFromLight.xyz/vPositionFromLight.w;
vec3 uvDepth=vec3(0.5*clipSpace.xyz+vec3(0.5));
uvDepth.z=clamp(ZINCLIP,0.,GREATEST_LESS_THAN_ONE);
vec4 uvDepthLayer=vec4(uvDepth.x,uvDepth.y,layer,uvDepth.z);
float blockerDepth=0.0;
float sumBlockerDepth=0.0;
float numBlocker=0.0;
for (int i=0; i<searchTapCount; i ++) {
blockerDepth=texture2D(depthSampler,vec3(uvDepth.xy+(lightSizeUV*lightSizeUVCorrection*shadowMapSizeInverse*PoissonSamplers32[i].xy),layer)).r;
if (blockerDepth<depthMetric) {
sumBlockerDepth+=blockerDepth;
numBlocker++;
}
}
float avgBlockerDepth=sumBlockerDepth/numBlocker;
float AAOffset=shadowMapSizeInverse*10.;
float penumbraRatio=((depthMetric-avgBlockerDepth)*depthCorrection+AAOffset);
vec4 filterRadius=vec4(penumbraRatio*lightSizeUV*lightSizeUVCorrection*shadowMapSizeInverse,0.,0.);
float random=getRand(vPositionFromLight.xy);
float rotationAngle=random*3.1415926;
vec2 rotationVector=vec2(cos(rotationAngle),sin(rotationAngle));
float shadow=0.;
for (int i=0; i<pcfTapCount; i++) {
vec4 offset=vec4(poissonSamplers[i],0.);
offset=vec4(offset.x*rotationVector.x-offset.y*rotationVector.y,offset.y*rotationVector.x+offset.x*rotationVector.y,0.,0.);
shadow+=texture2D(shadowSampler,uvDepthLayer+offset*filterRadius);
}
shadow/=float(pcfTapCount);
shadow=mix(shadow,1.,min((depthMetric-avgBlockerDepth)*depthCorrection*penumbraDarkness,1.));
shadow=mix(darkness,1.,shadow);
if (numBlocker<1.0) {
return 1.0;
}
else
{
return computeFallOff(shadow,clipSpace.xy,frustumEdgeFalloff);
}
}
#define inline
float computeShadowWithPCSS(vec4 vPositionFromLight,float depthMetric,sampler2D depthSampler,highp sampler2DShadow shadowSampler,float shadowMapSizeInverse,float lightSizeUV,float darkness,float frustumEdgeFalloff,int searchTapCount,int pcfTapCount,vec3[64] poissonSamplers)
{
if (depthMetric>1.0 || depthMetric<0.0) {
return 1.0;
}
else
{
vec3 clipSpace=vPositionFromLight.xyz/vPositionFromLight.w;
vec3 uvDepth=vec3(0.5*clipSpace.xyz+vec3(0.5));
uvDepth.z=ZINCLIP;
float blockerDepth=0.0;
float sumBlockerDepth=0.0;
float numBlocker=0.0;
for (int i=0; i<searchTapCount; i ++) {
blockerDepth=TEXTUREFUNC(depthSampler,uvDepth.xy+(lightSizeUV*shadowMapSizeInverse*PoissonSamplers32[i].xy),0.).r;
if (blockerDepth<depthMetric) {
sumBlockerDepth+=blockerDepth;
numBlocker++;
}
}
if (numBlocker<1.0) {
return 1.0;
}
else
{
float avgBlockerDepth=sumBlockerDepth/numBlocker;
float AAOffset=shadowMapSizeInverse*10.;
float penumbraRatio=((depthMetric-avgBlockerDepth)+AAOffset);
float filterRadius=penumbraRatio*lightSizeUV*shadowMapSizeInverse;
float random=getRand(vPositionFromLight.xy);
float rotationAngle=random*3.1415926;
vec2 rotationVector=vec2(cos(rotationAngle),sin(rotationAngle));
float shadow=0.;
for (int i=0; i<pcfTapCount; i++) {
vec3 offset=poissonSamplers[i];
offset=vec3(offset.x*rotationVector.x-offset.y*rotationVector.y,offset.y*rotationVector.x+offset.x*rotationVector.y,0.);
shadow+=TEXTUREFUNC(shadowSampler,uvDepth+offset*filterRadius,0.);
}
shadow/=float(pcfTapCount);
shadow=mix(shadow,1.,depthMetric-avgBlockerDepth);
shadow=mix(darkness,1.,shadow);
return computeFallOff(shadow,clipSpace.xy,frustumEdgeFalloff);
}
}
}
#define inline
float computeShadowWithPCSS16(vec4 vPositionFromLight,float depthMetric,sampler2D depthSampler,highp sampler2DShadow shadowSampler,float shadowMapSizeInverse,float lightSizeUV,float darkness,float frustumEdgeFalloff)
{
return computeShadowWithPCSS(vPositionFromLight,depthMetric,depthSampler,shadowSampler,shadowMapSizeInverse,lightSizeUV,darkness,frustumEdgeFalloff,16,16,PoissonSamplers32);
}
#define inline
float computeShadowWithPCSS32(vec4 vPositionFromLight,float depthMetric,sampler2D depthSampler,highp sampler2DShadow shadowSampler,float shadowMapSizeInverse,float lightSizeUV,float darkness,float frustumEdgeFalloff)
{
return computeShadowWithPCSS(vPositionFromLight,depthMetric,depthSampler,shadowSampler,shadowMapSizeInverse,lightSizeUV,darkness,frustumEdgeFalloff,16,32,PoissonSamplers32);
}
#define inline
float computeShadowWithPCSS64(vec4 vPositionFromLight,float depthMetric,sampler2D depthSampler,highp sampler2DShadow shadowSampler,float shadowMapSizeInverse,float lightSizeUV,float darkness,float frustumEdgeFalloff)
{
return computeShadowWithPCSS(vPositionFromLight,depthMetric,depthSampler,shadowSampler,shadowMapSizeInverse,lightSizeUV,darkness,frustumEdgeFalloff,32,64,PoissonSamplers64);
}
#define inline
float computeShadowWithCSMPCSS16(float layer,vec4 vPositionFromLight,float depthMetric,highp sampler2DArray depthSampler,highp sampler2DArrayShadow shadowSampler,float shadowMapSizeInverse,float lightSizeUV,float darkness,float frustumEdgeFalloff,vec2 lightSizeUVCorrection,float depthCorrection,float penumbraDarkness)
{
return computeShadowWithCSMPCSS(layer,vPositionFromLight,depthMetric,depthSampler,shadowSampler,shadowMapSizeInverse,lightSizeUV,darkness,frustumEdgeFalloff,16,16,PoissonSamplers32,lightSizeUVCorrection,depthCorrection,penumbraDarkness);
}
#define inline
float computeShadowWithCSMPCSS32(float layer,vec4 vPositionFromLight,float depthMetric,highp sampler2DArray depthSampler,highp sampler2DArrayShadow shadowSampler,float shadowMapSizeInverse,float lightSizeUV,float darkness,float frustumEdgeFalloff,vec2 lightSizeUVCorrection,float depthCorrection,float penumbraDarkness)
{
return computeShadowWithCSMPCSS(layer,vPositionFromLight,depthMetric,depthSampler,shadowSampler,shadowMapSizeInverse,lightSizeUV,darkness,frustumEdgeFalloff,16,32,PoissonSamplers32,lightSizeUVCorrection,depthCorrection,penumbraDarkness);
}
#define inline
float computeShadowWithCSMPCSS64(float layer,vec4 vPositionFromLight,float depthMetric,highp sampler2DArray depthSampler,highp sampler2DArrayShadow shadowSampler,float shadowMapSizeInverse,float lightSizeUV,float darkness,float frustumEdgeFalloff,vec2 lightSizeUVCorrection,float depthCorrection,float penumbraDarkness)
{
return computeShadowWithCSMPCSS(layer,vPositionFromLight,depthMetric,depthSampler,shadowSampler,shadowMapSizeInverse,lightSizeUV,darkness,frustumEdgeFalloff,32,64,PoissonSamplers64,lightSizeUVCorrection,depthCorrection,penumbraDarkness);
}
#endif
#endif
`;E.IncludesShadersStore[ys]=Us;var Bs="samplerFragmentDeclaration",Vs=`#ifdef _DEFINENAME_
#if _DEFINENAME_DIRECTUV==1
#define v_VARYINGNAME_UV vMainUV1
#elif _DEFINENAME_DIRECTUV==2
#define v_VARYINGNAME_UV vMainUV2
#elif _DEFINENAME_DIRECTUV==3
#define v_VARYINGNAME_UV vMainUV3
#elif _DEFINENAME_DIRECTUV==4
#define v_VARYINGNAME_UV vMainUV4
#elif _DEFINENAME_DIRECTUV==5
#define v_VARYINGNAME_UV vMainUV5
#elif _DEFINENAME_DIRECTUV==6
#define v_VARYINGNAME_UV vMainUV6
#else
varying vec2 v_VARYINGNAME_UV;
#endif
uniform sampler2D _SAMPLERNAME_Sampler;
#endif
`;E.IncludesShadersStore[Bs]=Vs;var Xs="fresnelFunction",zs=`#ifdef FRESNEL
float computeFresnelTerm(vec3 viewDirection,vec3 worldNormal,float bias,float power)
{
float fresnelTerm=pow(bias+abs(dot(viewDirection,worldNormal)),power);
return clamp(fresnelTerm,0.,1.);
}
#endif
`;E.IncludesShadersStore[Xs]=zs;var Ws="reflectionFunction",ks=`vec3 computeFixedEquirectangularCoords(vec4 worldPos,vec3 worldNormal,vec3 direction)
{
float lon=atan(direction.z,direction.x);
float lat=acos(direction.y);
vec2 sphereCoords=vec2(lon,lat)*RECIPROCAL_PI2*2.0;
float s=sphereCoords.x*0.5+0.5;
float t=sphereCoords.y;
return vec3(s,t,0); 
}
vec3 computeMirroredFixedEquirectangularCoords(vec4 worldPos,vec3 worldNormal,vec3 direction)
{
float lon=atan(direction.z,direction.x);
float lat=acos(direction.y);
vec2 sphereCoords=vec2(lon,lat)*RECIPROCAL_PI2*2.0;
float s=sphereCoords.x*0.5+0.5;
float t=sphereCoords.y;
return vec3(1.0-s,t,0); 
}
vec3 computeEquirectangularCoords(vec4 worldPos,vec3 worldNormal,vec3 eyePosition,mat4 reflectionMatrix)
{
vec3 cameraToVertex=normalize(worldPos.xyz-eyePosition);
vec3 r=normalize(reflect(cameraToVertex,worldNormal));
r=vec3(reflectionMatrix*vec4(r,0));
float lon=atan(r.z,r.x);
float lat=acos(r.y);
vec2 sphereCoords=vec2(lon,lat)*RECIPROCAL_PI2*2.0;
float s=sphereCoords.x*0.5+0.5;
float t=sphereCoords.y;
return vec3(s,t,0);
}
vec3 computeSphericalCoords(vec4 worldPos,vec3 worldNormal,mat4 view,mat4 reflectionMatrix)
{
vec3 viewDir=normalize(vec3(view*worldPos));
vec3 viewNormal=normalize(vec3(view*vec4(worldNormal,0.0)));
vec3 r=reflect(viewDir,viewNormal);
r=vec3(reflectionMatrix*vec4(r,0));
r.z=r.z-1.0;
float m=2.0*length(r);
return vec3(r.x/m+0.5,1.0-r.y/m-0.5,0);
}
vec3 computePlanarCoords(vec4 worldPos,vec3 worldNormal,vec3 eyePosition,mat4 reflectionMatrix)
{
vec3 viewDir=worldPos.xyz-eyePosition;
vec3 coords=normalize(reflect(viewDir,worldNormal));
return vec3(reflectionMatrix*vec4(coords,1));
}
vec3 computeCubicCoords(vec4 worldPos,vec3 worldNormal,vec3 eyePosition,mat4 reflectionMatrix)
{
vec3 viewDir=normalize(worldPos.xyz-eyePosition);
vec3 coords=reflect(viewDir,worldNormal);
coords=vec3(reflectionMatrix*vec4(coords,0));
#ifdef INVERTCUBICMAP
coords.y*=-1.0;
#endif
return coords;
}
vec3 computeCubicLocalCoords(vec4 worldPos,vec3 worldNormal,vec3 eyePosition,mat4 reflectionMatrix,vec3 reflectionSize,vec3 reflectionPosition)
{
vec3 viewDir=normalize(worldPos.xyz-eyePosition);
vec3 coords=reflect(viewDir,worldNormal);
coords=parallaxCorrectNormal(worldPos.xyz,coords,reflectionSize,reflectionPosition);
coords=vec3(reflectionMatrix*vec4(coords,0));
#ifdef INVERTCUBICMAP
coords.y*=-1.0;
#endif
return coords;
}
vec3 computeProjectionCoords(vec4 worldPos,mat4 view,mat4 reflectionMatrix)
{
return vec3(reflectionMatrix*(view*worldPos));
}
vec3 computeSkyBoxCoords(vec3 positionW,mat4 reflectionMatrix)
{
return vec3(reflectionMatrix*vec4(positionW,1.));
}
#ifdef REFLECTION
vec3 computeReflectionCoords(vec4 worldPos,vec3 worldNormal)
{
#ifdef REFLECTIONMAP_MIRROREDEQUIRECTANGULAR_FIXED
vec3 direction=normalize(vDirectionW);
return computeMirroredFixedEquirectangularCoords(worldPos,worldNormal,direction);
#endif
#ifdef REFLECTIONMAP_EQUIRECTANGULAR_FIXED
vec3 direction=normalize(vDirectionW);
return computeFixedEquirectangularCoords(worldPos,worldNormal,direction);
#endif
#ifdef REFLECTIONMAP_EQUIRECTANGULAR
return computeEquirectangularCoords(worldPos,worldNormal,vEyePosition.xyz,reflectionMatrix);
#endif
#ifdef REFLECTIONMAP_SPHERICAL
return computeSphericalCoords(worldPos,worldNormal,view,reflectionMatrix);
#endif
#ifdef REFLECTIONMAP_PLANAR
return computePlanarCoords(worldPos,worldNormal,vEyePosition.xyz,reflectionMatrix);
#endif
#ifdef REFLECTIONMAP_CUBIC
#ifdef USE_LOCAL_REFLECTIONMAP_CUBIC
return computeCubicLocalCoords(worldPos,worldNormal,vEyePosition.xyz,reflectionMatrix,vReflectionSize,vReflectionPosition);
#else
return computeCubicCoords(worldPos,worldNormal,vEyePosition.xyz,reflectionMatrix);
#endif
#endif
#ifdef REFLECTIONMAP_PROJECTION
return computeProjectionCoords(worldPos,view,reflectionMatrix);
#endif
#ifdef REFLECTIONMAP_SKYBOX
return computeSkyBoxCoords(vPositionUVW,reflectionMatrix);
#endif
#ifdef REFLECTIONMAP_EXPLICIT
return vec3(0,0,0);
#endif
}
#endif
`;E.IncludesShadersStore[Ws]=ks;var Gs="imageProcessingDeclaration",Hs=`#ifdef EXPOSURE
uniform float exposureLinear;
#endif
#ifdef CONTRAST
uniform float contrast;
#endif
#if defined(VIGNETTE) || defined(DITHER)
uniform vec2 vInverseScreenSize;
#endif
#ifdef VIGNETTE
uniform vec4 vignetteSettings1;
uniform vec4 vignetteSettings2;
#endif
#ifdef COLORCURVES
uniform vec4 vCameraColorCurveNegative;
uniform vec4 vCameraColorCurveNeutral;
uniform vec4 vCameraColorCurvePositive;
#endif
#ifdef COLORGRADING
#ifdef COLORGRADING3D
uniform highp sampler3D txColorTransform;
#else
uniform sampler2D txColorTransform;
#endif
uniform vec4 colorTransformSettings;
#endif
#ifdef DITHER
uniform float ditherIntensity;
#endif
`;E.IncludesShadersStore[Gs]=Hs;var Ys="imageProcessingFunctions",Zs=`#if defined(COLORGRADING) && !defined(COLORGRADING3D)
/** 
* Polyfill for SAMPLE_TEXTURE_3D,which is unsupported in WebGL.
* sampler3dSetting.x=textureOffset (0.5/textureSize).
* sampler3dSetting.y=textureSize.
*/
#define inline
vec3 sampleTexture3D(sampler2D colorTransform,vec3 color,vec2 sampler3dSetting)
{
float sliceSize=2.0*sampler3dSetting.x; 
#ifdef SAMPLER3DGREENDEPTH
float sliceContinuous=(color.g-sampler3dSetting.x)*sampler3dSetting.y;
#else
float sliceContinuous=(color.b-sampler3dSetting.x)*sampler3dSetting.y;
#endif
float sliceInteger=floor(sliceContinuous);
float sliceFraction=sliceContinuous-sliceInteger;
#ifdef SAMPLER3DGREENDEPTH
vec2 sliceUV=color.rb;
#else
vec2 sliceUV=color.rg;
#endif
sliceUV.x*=sliceSize;
sliceUV.x+=sliceInteger*sliceSize;
sliceUV=saturate(sliceUV);
vec4 slice0Color=texture2D(colorTransform,sliceUV);
sliceUV.x+=sliceSize;
sliceUV=saturate(sliceUV);
vec4 slice1Color=texture2D(colorTransform,sliceUV);
vec3 result=mix(slice0Color.rgb,slice1Color.rgb,sliceFraction);
#ifdef SAMPLER3DBGRMAP
color.rgb=result.rgb;
#else
color.rgb=result.bgr;
#endif
return color;
}
#endif
#ifdef TONEMAPPING_ACES
const mat3 ACESInputMat=mat3(
vec3(0.59719,0.07600,0.02840),
vec3(0.35458,0.90834,0.13383),
vec3(0.04823,0.01566,0.83777)
);
const mat3 ACESOutputMat=mat3(
vec3( 1.60475,-0.10208,-0.00327),
vec3(-0.53108, 1.10813,-0.07276),
vec3(-0.07367,-0.00605, 1.07602)
);
vec3 RRTAndODTFit(vec3 v)
{
vec3 a=v*(v+0.0245786)-0.000090537;
vec3 b=v*(0.983729*v+0.4329510)+0.238081;
return a/b;
}
vec3 ACESFitted(vec3 color)
{
color=ACESInputMat*color;
color=RRTAndODTFit(color);
color=ACESOutputMat*color;
color=saturate(color);
return color;
}
#endif
#define CUSTOM_IMAGEPROCESSINGFUNCTIONS_DEFINITIONS
vec4 applyImageProcessing(vec4 result) {
#define CUSTOM_IMAGEPROCESSINGFUNCTIONS_UPDATERESULT_ATSTART
#ifdef EXPOSURE
result.rgb*=exposureLinear;
#endif
#ifdef VIGNETTE
vec2 viewportXY=gl_FragCoord.xy*vInverseScreenSize;
viewportXY=viewportXY*2.0-1.0;
vec3 vignetteXY1=vec3(viewportXY*vignetteSettings1.xy+vignetteSettings1.zw,1.0);
float vignetteTerm=dot(vignetteXY1,vignetteXY1);
float vignette=pow(vignetteTerm,vignetteSettings2.w);
vec3 vignetteColor=vignetteSettings2.rgb;
#ifdef VIGNETTEBLENDMODEMULTIPLY
vec3 vignetteColorMultiplier=mix(vignetteColor,vec3(1,1,1),vignette);
result.rgb*=vignetteColorMultiplier;
#endif
#ifdef VIGNETTEBLENDMODEOPAQUE
result.rgb=mix(vignetteColor,result.rgb,vignette);
#endif
#endif
#ifdef TONEMAPPING
#ifdef TONEMAPPING_ACES
result.rgb=ACESFitted(result.rgb);
#else
const float tonemappingCalibration=1.590579;
result.rgb=1.0-exp2(-tonemappingCalibration*result.rgb);
#endif
#endif
result.rgb=toGammaSpace(result.rgb);
result.rgb=saturate(result.rgb);
#ifdef CONTRAST
vec3 resultHighContrast=result.rgb*result.rgb*(3.0-2.0*result.rgb);
if (contrast<1.0) {
result.rgb=mix(vec3(0.5,0.5,0.5),result.rgb,contrast);
} else {
result.rgb=mix(result.rgb,resultHighContrast,contrast-1.0);
}
#endif
#ifdef COLORGRADING
vec3 colorTransformInput=result.rgb*colorTransformSettings.xxx+colorTransformSettings.yyy;
#ifdef COLORGRADING3D
vec3 colorTransformOutput=texture(txColorTransform,colorTransformInput).rgb;
#else
vec3 colorTransformOutput=sampleTexture3D(txColorTransform,colorTransformInput,colorTransformSettings.yz).rgb;
#endif
result.rgb=mix(result.rgb,colorTransformOutput,colorTransformSettings.www);
#endif
#ifdef COLORCURVES
float luma=getLuminance(result.rgb);
vec2 curveMix=clamp(vec2(luma*3.0-1.5,luma*-3.0+1.5),vec2(0.0),vec2(1.0));
vec4 colorCurve=vCameraColorCurveNeutral+curveMix.x*vCameraColorCurvePositive-curveMix.y*vCameraColorCurveNegative;
result.rgb*=colorCurve.rgb;
result.rgb=mix(vec3(luma),result.rgb,colorCurve.a);
#endif
#ifdef DITHER
float rand=getRand(gl_FragCoord.xy*vInverseScreenSize);
float dither=mix(-ditherIntensity,ditherIntensity,rand);
result.rgb=saturate(result.rgb+vec3(dither));
#endif
#define CUSTOM_IMAGEPROCESSINGFUNCTIONS_UPDATERESULT_ATEND
return result;
}`;E.IncludesShadersStore[Ys]=Zs;var js="bumpFragmentMainFunctions",Qs=`#if defined(BUMP) || defined(CLEARCOAT_BUMP) || defined(ANISOTROPIC) || defined(DETAIL)
#if defined(TANGENT) && defined(NORMAL) 
varying mat3 vTBN;
#endif
#ifdef OBJECTSPACE_NORMALMAP
uniform mat4 normalMatrix;
#if defined(WEBGL2) || defined(WEBGPU)
mat4 toNormalMatrix(mat4 wMatrix)
{
mat4 ret=inverse(wMatrix);
ret=transpose(ret);
ret[0][3]=0.;
ret[1][3]=0.;
ret[2][3]=0.;
ret[3]=vec4(0.,0.,0.,1.);
return ret;
}
#else
mat4 toNormalMatrix(mat4 m)
{
float
a00=m[0][0],a01=m[0][1],a02=m[0][2],a03=m[0][3],
a10=m[1][0],a11=m[1][1],a12=m[1][2],a13=m[1][3],
a20=m[2][0],a21=m[2][1],a22=m[2][2],a23=m[2][3],
a30=m[3][0],a31=m[3][1],a32=m[3][2],a33=m[3][3],
b00=a00*a11-a01*a10,
b01=a00*a12-a02*a10,
b02=a00*a13-a03*a10,
b03=a01*a12-a02*a11,
b04=a01*a13-a03*a11,
b05=a02*a13-a03*a12,
b06=a20*a31-a21*a30,
b07=a20*a32-a22*a30,
b08=a20*a33-a23*a30,
b09=a21*a32-a22*a31,
b10=a21*a33-a23*a31,
b11=a22*a33-a23*a32,
det=b00*b11-b01*b10+b02*b09+b03*b08-b04*b07+b05*b06;
mat4 mi=mat4(
a11*b11-a12*b10+a13*b09,
a02*b10-a01*b11-a03*b09,
a31*b05-a32*b04+a33*b03,
a22*b04-a21*b05-a23*b03,
a12*b08-a10*b11-a13*b07,
a00*b11-a02*b08+a03*b07,
a32*b02-a30*b05-a33*b01,
a20*b05-a22*b02+a23*b01,
a10*b10-a11*b08+a13*b06,
a01*b08-a00*b10-a03*b06,
a30*b04-a31*b02+a33*b00,
a21*b02-a20*b04-a23*b00,
a11*b07-a10*b09-a12*b06,
a00*b09-a01*b07+a02*b06,
a31*b01-a30*b03-a32*b00,
a20*b03-a21*b01+a22*b00)/det;
return mat4(mi[0][0],mi[1][0],mi[2][0],mi[3][0],
mi[0][1],mi[1][1],mi[2][1],mi[3][1],
mi[0][2],mi[1][2],mi[2][2],mi[3][2],
mi[0][3],mi[1][3],mi[2][3],mi[3][3]);
}
#endif
#endif
vec3 perturbNormalBase(mat3 cotangentFrame,vec3 normal,float scale)
{
#ifdef NORMALXYSCALE
normal=normalize(normal*vec3(scale,scale,1.0));
#endif
return normalize(cotangentFrame*normal);
}
vec3 perturbNormal(mat3 cotangentFrame,vec3 textureSample,float scale)
{
return perturbNormalBase(cotangentFrame,textureSample*2.0-1.0,scale);
}
mat3 cotangent_frame(vec3 normal,vec3 p,vec2 uv,vec2 tangentSpaceParams)
{
vec3 dp1=dFdx(p);
vec3 dp2=dFdy(p);
vec2 duv1=dFdx(uv);
vec2 duv2=dFdy(uv);
vec3 dp2perp=cross(dp2,normal);
vec3 dp1perp=cross(normal,dp1);
vec3 tangent=dp2perp*duv1.x+dp1perp*duv2.x;
vec3 bitangent=dp2perp*duv1.y+dp1perp*duv2.y;
tangent*=tangentSpaceParams.x;
bitangent*=tangentSpaceParams.y;
float det=max(dot(tangent,tangent),dot(bitangent,bitangent));
float invmax=det==0.0 ? 0.0 : inversesqrt(det);
return mat3(tangent*invmax,bitangent*invmax,normal);
}
#endif
`;E.IncludesShadersStore[js]=Qs;var Ks="bumpFragmentFunctions",qs=`#if defined(BUMP)
#include<samplerFragmentDeclaration>(_DEFINENAME_,BUMP,_VARYINGNAME_,Bump,_SAMPLERNAME_,bump)
#endif
#if defined(DETAIL)
#include<samplerFragmentDeclaration>(_DEFINENAME_,DETAIL,_VARYINGNAME_,Detail,_SAMPLERNAME_,detail)
#endif
#if defined(BUMP) && defined(PARALLAX)
const float minSamples=4.;
const float maxSamples=15.;
const int iMaxSamples=15;
vec2 parallaxOcclusion(vec3 vViewDirCoT,vec3 vNormalCoT,vec2 texCoord,float parallaxScale) {
float parallaxLimit=length(vViewDirCoT.xy)/vViewDirCoT.z;
parallaxLimit*=parallaxScale;
vec2 vOffsetDir=normalize(vViewDirCoT.xy);
vec2 vMaxOffset=vOffsetDir*parallaxLimit;
float numSamples=maxSamples+(dot(vViewDirCoT,vNormalCoT)*(minSamples-maxSamples));
float stepSize=1.0/numSamples;
float currRayHeight=1.0;
vec2 vCurrOffset=vec2(0,0);
vec2 vLastOffset=vec2(0,0);
float lastSampledHeight=1.0;
float currSampledHeight=1.0;
bool keepWorking=true;
for (int i=0; i<iMaxSamples; i++)
{
currSampledHeight=texture2D(bumpSampler,texCoord+vCurrOffset).w;
if (!keepWorking)
{
}
else if (currSampledHeight>currRayHeight)
{
float delta1=currSampledHeight-currRayHeight;
float delta2=(currRayHeight+stepSize)-lastSampledHeight;
float ratio=delta1/(delta1+delta2);
vCurrOffset=(ratio)* vLastOffset+(1.0-ratio)*vCurrOffset;
keepWorking=false;
}
else
{
currRayHeight-=stepSize;
vLastOffset=vCurrOffset;
vCurrOffset+=stepSize*vMaxOffset;
lastSampledHeight=currSampledHeight;
}
}
return vCurrOffset;
}
vec2 parallaxOffset(vec3 viewDir,float heightScale)
{
float height=texture2D(bumpSampler,vBumpUV).w;
vec2 texCoordOffset=heightScale*viewDir.xy*height;
return -texCoordOffset;
}
#endif
`;E.IncludesShadersStore[Ks]=qs;var $s="logDepthDeclaration",Js=`#ifdef LOGARITHMICDEPTH
uniform float logarithmicDepthConstant;
varying float vFragmentDepth;
#endif
`;E.IncludesShadersStore[$s]=Js;var ea="fogFragmentDeclaration",ta=`#ifdef FOG
#define FOGMODE_NONE 0.
#define FOGMODE_EXP 1.
#define FOGMODE_EXP2 2.
#define FOGMODE_LINEAR 3.
#define E 2.71828
uniform vec4 vFogInfos;
uniform vec3 vFogColor;
varying vec3 vFogDistance;
float CalcFogFactor()
{
float fogCoeff=1.0;
float fogStart=vFogInfos.y;
float fogEnd=vFogInfos.z;
float fogDensity=vFogInfos.w;
float fogDistance=length(vFogDistance);
if (FOGMODE_LINEAR==vFogInfos.x)
{
fogCoeff=(fogEnd-fogDistance)/(fogEnd-fogStart);
}
else if (FOGMODE_EXP==vFogInfos.x)
{
fogCoeff=1.0/pow(E,fogDistance*fogDensity);
}
else if (FOGMODE_EXP2==vFogInfos.x)
{
fogCoeff=1.0/pow(E,fogDistance*fogDistance*fogDensity*fogDensity);
}
return clamp(fogCoeff,0.0,1.0);
}
#endif
`;E.IncludesShadersStore[ea]=ta;var ia="bumpFragment",ra=`vec2 uvOffset=vec2(0.0,0.0);
#if defined(BUMP) || defined(PARALLAX) || defined(DETAIL)
#ifdef NORMALXYSCALE
float normalScale=1.0;
#elif defined(BUMP)
float normalScale=vBumpInfos.y;
#else
float normalScale=1.0;
#endif
#if defined(TANGENT) && defined(NORMAL)
mat3 TBN=vTBN;
#elif defined(BUMP)
vec2 TBNUV=gl_FrontFacing ? vBumpUV : -vBumpUV;
mat3 TBN=cotangent_frame(normalW*normalScale,vPositionW,TBNUV,vTangentSpaceParams);
#else
vec2 TBNUV=gl_FrontFacing ? vDetailUV : -vDetailUV;
mat3 TBN=cotangent_frame(normalW*normalScale,vPositionW,TBNUV,vec2(1.,1.));
#endif
#elif defined(ANISOTROPIC)
#if defined(TANGENT) && defined(NORMAL)
mat3 TBN=vTBN;
#else
vec2 TBNUV=gl_FrontFacing ? vMainUV1 : -vMainUV1;
mat3 TBN=cotangent_frame(normalW,vPositionW,TBNUV,vec2(1.,1.));
#endif
#endif
#ifdef PARALLAX
mat3 invTBN=transposeMat3(TBN);
#ifdef PARALLAXOCCLUSION
uvOffset=parallaxOcclusion(invTBN*-viewDirectionW,invTBN*normalW,vBumpUV,vBumpInfos.z);
#else
uvOffset=parallaxOffset(invTBN*viewDirectionW,vBumpInfos.z);
#endif
#endif
#ifdef DETAIL
vec4 detailColor=texture2D(detailSampler,vDetailUV+uvOffset);
vec2 detailNormalRG=detailColor.wy*2.0-1.0;
float detailNormalB=sqrt(1.-saturate(dot(detailNormalRG,detailNormalRG)));
vec3 detailNormal=vec3(detailNormalRG,detailNormalB);
#endif
#ifdef BUMP
#ifdef OBJECTSPACE_NORMALMAP
#define CUSTOM_FRAGMENT_BUMP_FRAGMENT
normalW=normalize(texture2D(bumpSampler,vBumpUV).xyz *2.0-1.0);
normalW=normalize(mat3(normalMatrix)*normalW);
#elif !defined(DETAIL)
normalW=perturbNormal(TBN,texture2D(bumpSampler,vBumpUV+uvOffset).xyz,vBumpInfos.y);
#else
vec3 bumpNormal=texture2D(bumpSampler,vBumpUV+uvOffset).xyz*2.0-1.0;
#if DETAIL_NORMALBLENDMETHOD==0 
detailNormal.xy*=vDetailInfos.z;
vec3 blendedNormal=normalize(vec3(bumpNormal.xy+detailNormal.xy,bumpNormal.z*detailNormal.z));
#elif DETAIL_NORMALBLENDMETHOD==1 
detailNormal.xy*=vDetailInfos.z;
bumpNormal+=vec3(0.0,0.0,1.0);
detailNormal*=vec3(-1.0,-1.0,1.0);
vec3 blendedNormal=bumpNormal*dot(bumpNormal,detailNormal)/bumpNormal.z-detailNormal;
#endif
normalW=perturbNormalBase(TBN,blendedNormal,vBumpInfos.y);
#endif
#elif defined(DETAIL)
detailNormal.xy*=vDetailInfos.z;
normalW=perturbNormalBase(TBN,detailNormal,vDetailInfos.z);
#endif
`;E.IncludesShadersStore[ia]=ra;var sa="decalFragment",aa=`#ifdef DECAL
#ifdef GAMMADECAL
decalColor.rgb=toLinearSpace(decalColor.rgb);
#endif
#ifdef DECAL_SMOOTHALPHA
decalColor.a*=decalColor.a;
#endif
surfaceAlbedo.rgb=mix(surfaceAlbedo.rgb,decalColor.rgb,decalColor.a);
#endif
`;E.IncludesShadersStore[sa]=aa;var na="depthPrePass",oa=`#ifdef DEPTHPREPASS
gl_FragColor=vec4(0.,0.,0.,1.0);
return;
#endif
`;E.IncludesShadersStore[na]=oa;var la="lightFragment",ha=`#ifdef LIGHT{X}
#if defined(SHADOWONLY) || defined(LIGHTMAP) && defined(LIGHTMAPEXCLUDED{X}) && defined(LIGHTMAPNOSPECULAR{X})
#else
#ifdef PBR
#ifdef SPOTLIGHT{X}
preInfo=computePointAndSpotPreLightingInfo(light{X}.vLightData,viewDirectionW,normalW);
#elif defined(POINTLIGHT{X})
preInfo=computePointAndSpotPreLightingInfo(light{X}.vLightData,viewDirectionW,normalW);
#elif defined(HEMILIGHT{X})
preInfo=computeHemisphericPreLightingInfo(light{X}.vLightData,viewDirectionW,normalW);
#elif defined(DIRLIGHT{X})
preInfo=computeDirectionalPreLightingInfo(light{X}.vLightData,viewDirectionW,normalW);
#endif
preInfo.NdotV=NdotV;
#ifdef SPOTLIGHT{X}
#ifdef LIGHT_FALLOFF_GLTF{X}
preInfo.attenuation=computeDistanceLightFalloff_GLTF(preInfo.lightDistanceSquared,light{X}.vLightFalloff.y);
preInfo.attenuation*=computeDirectionalLightFalloff_GLTF(light{X}.vLightDirection.xyz,preInfo.L,light{X}.vLightFalloff.z,light{X}.vLightFalloff.w);
#elif defined(LIGHT_FALLOFF_PHYSICAL{X})
preInfo.attenuation=computeDistanceLightFalloff_Physical(preInfo.lightDistanceSquared);
preInfo.attenuation*=computeDirectionalLightFalloff_Physical(light{X}.vLightDirection.xyz,preInfo.L,light{X}.vLightDirection.w);
#elif defined(LIGHT_FALLOFF_STANDARD{X})
preInfo.attenuation=computeDistanceLightFalloff_Standard(preInfo.lightOffset,light{X}.vLightFalloff.x);
preInfo.attenuation*=computeDirectionalLightFalloff_Standard(light{X}.vLightDirection.xyz,preInfo.L,light{X}.vLightDirection.w,light{X}.vLightData.w);
#else
preInfo.attenuation=computeDistanceLightFalloff(preInfo.lightOffset,preInfo.lightDistanceSquared,light{X}.vLightFalloff.x,light{X}.vLightFalloff.y);
preInfo.attenuation*=computeDirectionalLightFalloff(light{X}.vLightDirection.xyz,preInfo.L,light{X}.vLightDirection.w,light{X}.vLightData.w,light{X}.vLightFalloff.z,light{X}.vLightFalloff.w);
#endif
#elif defined(POINTLIGHT{X})
#ifdef LIGHT_FALLOFF_GLTF{X}
preInfo.attenuation=computeDistanceLightFalloff_GLTF(preInfo.lightDistanceSquared,light{X}.vLightFalloff.y);
#elif defined(LIGHT_FALLOFF_PHYSICAL{X})
preInfo.attenuation=computeDistanceLightFalloff_Physical(preInfo.lightDistanceSquared);
#elif defined(LIGHT_FALLOFF_STANDARD{X})
preInfo.attenuation=computeDistanceLightFalloff_Standard(preInfo.lightOffset,light{X}.vLightFalloff.x);
#else
preInfo.attenuation=computeDistanceLightFalloff(preInfo.lightOffset,preInfo.lightDistanceSquared,light{X}.vLightFalloff.x,light{X}.vLightFalloff.y);
#endif
#else
preInfo.attenuation=1.0;
#endif
#ifdef HEMILIGHT{X}
preInfo.roughness=roughness;
#else
preInfo.roughness=adjustRoughnessFromLightProperties(roughness,light{X}.vLightSpecular.a,preInfo.lightDistance);
#endif
#ifdef IRIDESCENCE
preInfo.iridescenceIntensity=iridescenceIntensity;
#endif
#ifdef HEMILIGHT{X}
info.diffuse=computeHemisphericDiffuseLighting(preInfo,light{X}.vLightDiffuse.rgb,light{X}.vLightGround);
#elif defined(SS_TRANSLUCENCY)
info.diffuse=computeDiffuseAndTransmittedLighting(preInfo,light{X}.vLightDiffuse.rgb,subSurfaceOut.transmittance);
#else
info.diffuse=computeDiffuseLighting(preInfo,light{X}.vLightDiffuse.rgb);
#endif
#ifdef SPECULARTERM
#ifdef ANISOTROPIC
info.specular=computeAnisotropicSpecularLighting(preInfo,viewDirectionW,normalW,anisotropicOut.anisotropicTangent,anisotropicOut.anisotropicBitangent,anisotropicOut.anisotropy,clearcoatOut.specularEnvironmentR0,specularEnvironmentR90,AARoughnessFactors.x,light{X}.vLightDiffuse.rgb);
#else
info.specular=computeSpecularLighting(preInfo,normalW,clearcoatOut.specularEnvironmentR0,specularEnvironmentR90,AARoughnessFactors.x,light{X}.vLightDiffuse.rgb);
#endif
#endif
#ifdef SHEEN
#ifdef SHEEN_LINKWITHALBEDO
preInfo.roughness=sheenOut.sheenIntensity;
#else
#ifdef HEMILIGHT{X}
preInfo.roughness=sheenOut.sheenRoughness;
#else
preInfo.roughness=adjustRoughnessFromLightProperties(sheenOut.sheenRoughness,light{X}.vLightSpecular.a,preInfo.lightDistance);
#endif
#endif
info.sheen=computeSheenLighting(preInfo,normalW,sheenOut.sheenColor,specularEnvironmentR90,AARoughnessFactors.x,light{X}.vLightDiffuse.rgb);
#endif
#ifdef CLEARCOAT
#ifdef HEMILIGHT{X}
preInfo.roughness=clearcoatOut.clearCoatRoughness;
#else
preInfo.roughness=adjustRoughnessFromLightProperties(clearcoatOut.clearCoatRoughness,light{X}.vLightSpecular.a,preInfo.lightDistance);
#endif
info.clearCoat=computeClearCoatLighting(preInfo,clearcoatOut.clearCoatNormalW,clearcoatOut.clearCoatAARoughnessFactors.x,clearcoatOut.clearCoatIntensity,light{X}.vLightDiffuse.rgb);
#ifdef CLEARCOAT_TINT
absorption=computeClearCoatLightingAbsorption(clearcoatOut.clearCoatNdotVRefract,preInfo.L,clearcoatOut.clearCoatNormalW,clearcoatOut.clearCoatColor,clearcoatOut.clearCoatThickness,clearcoatOut.clearCoatIntensity);
info.diffuse*=absorption;
#ifdef SPECULARTERM
info.specular*=absorption;
#endif
#endif
info.diffuse*=info.clearCoat.w;
#ifdef SPECULARTERM
info.specular*=info.clearCoat.w;
#endif
#ifdef SHEEN
info.sheen*=info.clearCoat.w;
#endif
#endif
#else
#ifdef SPOTLIGHT{X}
info=computeSpotLighting(viewDirectionW,normalW,light{X}.vLightData,light{X}.vLightDirection,light{X}.vLightDiffuse.rgb,light{X}.vLightSpecular.rgb,light{X}.vLightDiffuse.a,glossiness);
#elif defined(HEMILIGHT{X})
info=computeHemisphericLighting(viewDirectionW,normalW,light{X}.vLightData,light{X}.vLightDiffuse.rgb,light{X}.vLightSpecular.rgb,light{X}.vLightGround,glossiness);
#elif defined(POINTLIGHT{X}) || defined(DIRLIGHT{X})
info=computeLighting(viewDirectionW,normalW,light{X}.vLightData,light{X}.vLightDiffuse.rgb,light{X}.vLightSpecular.rgb,light{X}.vLightDiffuse.a,glossiness);
#endif
#endif
#ifdef PROJECTEDLIGHTTEXTURE{X}
info.diffuse*=computeProjectionTextureDiffuseLighting(projectionLightSampler{X},textureProjectionMatrix{X});
#endif
#endif
#ifdef SHADOW{X}
#ifdef SHADOWCSM{X}
for (int i=0; i<SHADOWCSMNUM_CASCADES{X}; i++) 
{
#ifdef SHADOWCSM_RIGHTHANDED{X}
diff{X}=viewFrustumZ{X}[i]+vPositionFromCamera{X}.z;
#else
diff{X}=viewFrustumZ{X}[i]-vPositionFromCamera{X}.z;
#endif
if (diff{X}>=0.) {
index{X}=i;
break;
}
}
#ifdef SHADOWCSMUSESHADOWMAXZ{X}
if (index{X}>=0)
#endif
{
#if defined(SHADOWPCF{X})
#if defined(SHADOWLOWQUALITY{X})
shadow=computeShadowWithCSMPCF1(float(index{X}),vPositionFromLight{X}[index{X}],vDepthMetric{X}[index{X}],shadowSampler{X},light{X}.shadowsInfo.x,light{X}.shadowsInfo.w);
#elif defined(SHADOWMEDIUMQUALITY{X})
shadow=computeShadowWithCSMPCF3(float(index{X}),vPositionFromLight{X}[index{X}],vDepthMetric{X}[index{X}],shadowSampler{X},light{X}.shadowsInfo.yz,light{X}.shadowsInfo.x,light{X}.shadowsInfo.w);
#else
shadow=computeShadowWithCSMPCF5(float(index{X}),vPositionFromLight{X}[index{X}],vDepthMetric{X}[index{X}],shadowSampler{X},light{X}.shadowsInfo.yz,light{X}.shadowsInfo.x,light{X}.shadowsInfo.w);
#endif
#elif defined(SHADOWPCSS{X})
#if defined(SHADOWLOWQUALITY{X})
shadow=computeShadowWithCSMPCSS16(float(index{X}),vPositionFromLight{X}[index{X}],vDepthMetric{X}[index{X}],depthSampler{X},shadowSampler{X},light{X}.shadowsInfo.y,light{X}.shadowsInfo.z,light{X}.shadowsInfo.x,light{X}.shadowsInfo.w,lightSizeUVCorrection{X}[index{X}],depthCorrection{X}[index{X}],penumbraDarkness{X});
#elif defined(SHADOWMEDIUMQUALITY{X})
shadow=computeShadowWithCSMPCSS32(float(index{X}),vPositionFromLight{X}[index{X}],vDepthMetric{X}[index{X}],depthSampler{X},shadowSampler{X},light{X}.shadowsInfo.y,light{X}.shadowsInfo.z,light{X}.shadowsInfo.x,light{X}.shadowsInfo.w,lightSizeUVCorrection{X}[index{X}],depthCorrection{X}[index{X}],penumbraDarkness{X});
#else
shadow=computeShadowWithCSMPCSS64(float(index{X}),vPositionFromLight{X}[index{X}],vDepthMetric{X}[index{X}],depthSampler{X},shadowSampler{X},light{X}.shadowsInfo.y,light{X}.shadowsInfo.z,light{X}.shadowsInfo.x,light{X}.shadowsInfo.w,lightSizeUVCorrection{X}[index{X}],depthCorrection{X}[index{X}],penumbraDarkness{X});
#endif
#else
shadow=computeShadowCSM(float(index{X}),vPositionFromLight{X}[index{X}],vDepthMetric{X}[index{X}],shadowSampler{X},light{X}.shadowsInfo.x,light{X}.shadowsInfo.w);
#endif
#ifdef SHADOWCSMDEBUG{X}
shadowDebug{X}=vec3(shadow)*vCascadeColorsMultiplier{X}[index{X}];
#endif
#ifndef SHADOWCSMNOBLEND{X}
float frustumLength=frustumLengths{X}[index{X}];
float diffRatio=clamp(diff{X}/frustumLength,0.,1.)*cascadeBlendFactor{X};
if (index{X}<(SHADOWCSMNUM_CASCADES{X}-1) && diffRatio<1.)
{
index{X}+=1;
float nextShadow=0.;
#if defined(SHADOWPCF{X})
#if defined(SHADOWLOWQUALITY{X})
nextShadow=computeShadowWithCSMPCF1(float(index{X}),vPositionFromLight{X}[index{X}],vDepthMetric{X}[index{X}],shadowSampler{X},light{X}.shadowsInfo.x,light{X}.shadowsInfo.w);
#elif defined(SHADOWMEDIUMQUALITY{X})
nextShadow=computeShadowWithCSMPCF3(float(index{X}),vPositionFromLight{X}[index{X}],vDepthMetric{X}[index{X}],shadowSampler{X},light{X}.shadowsInfo.yz,light{X}.shadowsInfo.x,light{X}.shadowsInfo.w);
#else
nextShadow=computeShadowWithCSMPCF5(float(index{X}),vPositionFromLight{X}[index{X}],vDepthMetric{X}[index{X}],shadowSampler{X},light{X}.shadowsInfo.yz,light{X}.shadowsInfo.x,light{X}.shadowsInfo.w);
#endif
#elif defined(SHADOWPCSS{X})
#if defined(SHADOWLOWQUALITY{X})
nextShadow=computeShadowWithCSMPCSS16(float(index{X}),vPositionFromLight{X}[index{X}],vDepthMetric{X}[index{X}],depthSampler{X},shadowSampler{X},light{X}.shadowsInfo.y,light{X}.shadowsInfo.z,light{X}.shadowsInfo.x,light{X}.shadowsInfo.w,lightSizeUVCorrection{X}[index{X}],depthCorrection{X}[index{X}],penumbraDarkness{X});
#elif defined(SHADOWMEDIUMQUALITY{X})
nextShadow=computeShadowWithCSMPCSS32(float(index{X}),vPositionFromLight{X}[index{X}],vDepthMetric{X}[index{X}],depthSampler{X},shadowSampler{X},light{X}.shadowsInfo.y,light{X}.shadowsInfo.z,light{X}.shadowsInfo.x,light{X}.shadowsInfo.w,lightSizeUVCorrection{X}[index{X}],depthCorrection{X}[index{X}],penumbraDarkness{X});
#else
nextShadow=computeShadowWithCSMPCSS64(float(index{X}),vPositionFromLight{X}[index{X}],vDepthMetric{X}[index{X}],depthSampler{X},shadowSampler{X},light{X}.shadowsInfo.y,light{X}.shadowsInfo.z,light{X}.shadowsInfo.x,light{X}.shadowsInfo.w,lightSizeUVCorrection{X}[index{X}],depthCorrection{X}[index{X}],penumbraDarkness{X});
#endif
#else
nextShadow=computeShadowCSM(float(index{X}),vPositionFromLight{X}[index{X}],vDepthMetric{X}[index{X}],shadowSampler{X},light{X}.shadowsInfo.x,light{X}.shadowsInfo.w);
#endif
shadow=mix(nextShadow,shadow,diffRatio);
#ifdef SHADOWCSMDEBUG{X}
shadowDebug{X}=mix(vec3(nextShadow)*vCascadeColorsMultiplier{X}[index{X}],shadowDebug{X},diffRatio);
#endif
}
#endif
}
#elif defined(SHADOWCLOSEESM{X})
#if defined(SHADOWCUBE{X})
shadow=computeShadowWithCloseESMCube(light{X}.vLightData.xyz,shadowSampler{X},light{X}.shadowsInfo.x,light{X}.shadowsInfo.z,light{X}.depthValues);
#else
shadow=computeShadowWithCloseESM(vPositionFromLight{X},vDepthMetric{X},shadowSampler{X},light{X}.shadowsInfo.x,light{X}.shadowsInfo.z,light{X}.shadowsInfo.w);
#endif
#elif defined(SHADOWESM{X})
#if defined(SHADOWCUBE{X})
shadow=computeShadowWithESMCube(light{X}.vLightData.xyz,shadowSampler{X},light{X}.shadowsInfo.x,light{X}.shadowsInfo.z,light{X}.depthValues);
#else
shadow=computeShadowWithESM(vPositionFromLight{X},vDepthMetric{X},shadowSampler{X},light{X}.shadowsInfo.x,light{X}.shadowsInfo.z,light{X}.shadowsInfo.w);
#endif
#elif defined(SHADOWPOISSON{X})
#if defined(SHADOWCUBE{X})
shadow=computeShadowWithPoissonSamplingCube(light{X}.vLightData.xyz,shadowSampler{X},light{X}.shadowsInfo.y,light{X}.shadowsInfo.x,light{X}.depthValues);
#else
shadow=computeShadowWithPoissonSampling(vPositionFromLight{X},vDepthMetric{X},shadowSampler{X},light{X}.shadowsInfo.y,light{X}.shadowsInfo.x,light{X}.shadowsInfo.w);
#endif
#elif defined(SHADOWPCF{X})
#if defined(SHADOWLOWQUALITY{X})
shadow=computeShadowWithPCF1(vPositionFromLight{X},vDepthMetric{X},shadowSampler{X},light{X}.shadowsInfo.x,light{X}.shadowsInfo.w);
#elif defined(SHADOWMEDIUMQUALITY{X})
shadow=computeShadowWithPCF3(vPositionFromLight{X},vDepthMetric{X},shadowSampler{X},light{X}.shadowsInfo.yz,light{X}.shadowsInfo.x,light{X}.shadowsInfo.w);
#else
shadow=computeShadowWithPCF5(vPositionFromLight{X},vDepthMetric{X},shadowSampler{X},light{X}.shadowsInfo.yz,light{X}.shadowsInfo.x,light{X}.shadowsInfo.w);
#endif
#elif defined(SHADOWPCSS{X})
#if defined(SHADOWLOWQUALITY{X})
shadow=computeShadowWithPCSS16(vPositionFromLight{X},vDepthMetric{X},depthSampler{X},shadowSampler{X},light{X}.shadowsInfo.y,light{X}.shadowsInfo.z,light{X}.shadowsInfo.x,light{X}.shadowsInfo.w);
#elif defined(SHADOWMEDIUMQUALITY{X})
shadow=computeShadowWithPCSS32(vPositionFromLight{X},vDepthMetric{X},depthSampler{X},shadowSampler{X},light{X}.shadowsInfo.y,light{X}.shadowsInfo.z,light{X}.shadowsInfo.x,light{X}.shadowsInfo.w);
#else
shadow=computeShadowWithPCSS64(vPositionFromLight{X},vDepthMetric{X},depthSampler{X},shadowSampler{X},light{X}.shadowsInfo.y,light{X}.shadowsInfo.z,light{X}.shadowsInfo.x,light{X}.shadowsInfo.w);
#endif
#else
#if defined(SHADOWCUBE{X})
shadow=computeShadowCube(light{X}.vLightData.xyz,shadowSampler{X},light{X}.shadowsInfo.x,light{X}.depthValues);
#else
shadow=computeShadow(vPositionFromLight{X},vDepthMetric{X},shadowSampler{X},light{X}.shadowsInfo.x,light{X}.shadowsInfo.w);
#endif
#endif
#ifdef SHADOWONLY
#ifndef SHADOWINUSE
#define SHADOWINUSE
#endif
globalShadow+=shadow;
shadowLightCount+=1.0;
#endif
#else
shadow=1.;
#endif
#ifndef SHADOWONLY
#ifdef CUSTOMUSERLIGHTING
diffuseBase+=computeCustomDiffuseLighting(info,diffuseBase,shadow);
#ifdef SPECULARTERM
specularBase+=computeCustomSpecularLighting(info,specularBase,shadow);
#endif
#elif defined(LIGHTMAP) && defined(LIGHTMAPEXCLUDED{X})
diffuseBase+=lightmapColor.rgb*shadow;
#ifdef SPECULARTERM
#ifndef LIGHTMAPNOSPECULAR{X}
specularBase+=info.specular*shadow*lightmapColor.rgb;
#endif
#endif
#ifdef CLEARCOAT
#ifndef LIGHTMAPNOSPECULAR{X}
clearCoatBase+=info.clearCoat.rgb*shadow*lightmapColor.rgb;
#endif
#endif
#ifdef SHEEN
#ifndef LIGHTMAPNOSPECULAR{X}
sheenBase+=info.sheen.rgb*shadow;
#endif
#endif
#else
#ifdef SHADOWCSMDEBUG{X}
diffuseBase+=info.diffuse*shadowDebug{X};
#else 
diffuseBase+=info.diffuse*shadow;
#endif
#ifdef SPECULARTERM
specularBase+=info.specular*shadow;
#endif
#ifdef CLEARCOAT
clearCoatBase+=info.clearCoat.rgb*shadow;
#endif
#ifdef SHEEN
sheenBase+=info.sheen.rgb*shadow;
#endif
#endif
#endif
#endif
`;E.IncludesShadersStore[la]=ha;var da="logDepthFragment",ca=`#ifdef LOGARITHMICDEPTH
gl_FragDepthEXT=log2(vFragmentDepth)*logarithmicDepthConstant*0.5;
#endif
`;E.IncludesShadersStore[da]=ca;var ua="fogFragment",fa=`#ifdef FOG
float fog=CalcFogFactor();
#ifdef PBR
fog=toLinearSpace(fog);
#endif
color.rgb=mix(vFogColor,color.rgb,fog);
#endif
`;E.IncludesShadersStore[ua]=fa;var pa="oitFragment",ma=`#ifdef ORDER_INDEPENDENT_TRANSPARENCY
float fragDepth=gl_FragCoord.z; 
#ifdef ORDER_INDEPENDENT_TRANSPARENCY_16BITS
uint halfFloat=packHalf2x16(vec2(fragDepth));
vec2 full=unpackHalf2x16(halfFloat);
fragDepth=full.x;
#endif
ivec2 fragCoord=ivec2(gl_FragCoord.xy);
vec2 lastDepth=texelFetch(oitDepthSampler,fragCoord,0).rg;
vec4 lastFrontColor=texelFetch(oitFrontColorSampler,fragCoord,0);
depth.rg=vec2(-MAX_DEPTH);
frontColor=lastFrontColor;
backColor=vec4(0.0);
#ifdef USE_REVERSE_DEPTHBUFFER
float furthestDepth=-lastDepth.x;
float nearestDepth=lastDepth.y;
#else
float nearestDepth=-lastDepth.x;
float furthestDepth=lastDepth.y;
#endif
float alphaMultiplier=1.0-lastFrontColor.a;
#ifdef USE_REVERSE_DEPTHBUFFER
if (fragDepth>nearestDepth || fragDepth<furthestDepth) {
#else
if (fragDepth<nearestDepth || fragDepth>furthestDepth) {
#endif
return;
}
#ifdef USE_REVERSE_DEPTHBUFFER
if (fragDepth<nearestDepth && fragDepth>furthestDepth) {
#else
if (fragDepth>nearestDepth && fragDepth<furthestDepth) {
#endif
depth.rg=vec2(-fragDepth,fragDepth);
return;
}
#endif
`;E.IncludesShadersStore[pa]=ma;var _a="defaultPixelShader",ga=`#include<__decl__defaultFragment>
#if defined(BUMP) || !defined(NORMAL)
#extension GL_OES_standard_derivatives : enable
#endif
#include<prePassDeclaration>[SCENE_MRT_COUNT]
#include<oitDeclaration>
#define CUSTOM_FRAGMENT_BEGIN
#ifdef LOGARITHMICDEPTH
#extension GL_EXT_frag_depth : enable
#endif
#define RECIPROCAL_PI2 0.15915494
varying vec3 vPositionW;
#ifdef NORMAL
varying vec3 vNormalW;
#endif
#if defined(VERTEXCOLOR) || defined(INSTANCESCOLOR) && defined(INSTANCES)
varying vec4 vColor;
#endif
#include<mainUVVaryingDeclaration>[1..7]
#include<helperFunctions>
#include<__decl__lightFragment>[0..maxSimultaneousLights]
#include<lightsFragmentFunctions>
#include<shadowsFragmentFunctions>
#include<samplerFragmentDeclaration>(_DEFINENAME_,DIFFUSE,_VARYINGNAME_,Diffuse,_SAMPLERNAME_,diffuse)
#include<samplerFragmentDeclaration>(_DEFINENAME_,AMBIENT,_VARYINGNAME_,Ambient,_SAMPLERNAME_,ambient)
#include<samplerFragmentDeclaration>(_DEFINENAME_,OPACITY,_VARYINGNAME_,Opacity,_SAMPLERNAME_,opacity)
#include<samplerFragmentDeclaration>(_DEFINENAME_,EMISSIVE,_VARYINGNAME_,Emissive,_SAMPLERNAME_,emissive)
#include<samplerFragmentDeclaration>(_DEFINENAME_,LIGHTMAP,_VARYINGNAME_,Lightmap,_SAMPLERNAME_,lightmap)
#include<samplerFragmentDeclaration>(_DEFINENAME_,DECAL,_VARYINGNAME_,Decal,_SAMPLERNAME_,decal)
#ifdef REFRACTION
#ifdef REFRACTIONMAP_3D
uniform samplerCube refractionCubeSampler;
#else
uniform sampler2D refraction2DSampler;
#endif
#endif
#if defined(SPECULARTERM)
#include<samplerFragmentDeclaration>(_DEFINENAME_,SPECULAR,_VARYINGNAME_,Specular,_SAMPLERNAME_,specular)
#endif
#include<fresnelFunction>
#ifdef REFLECTION
#ifdef REFLECTIONMAP_3D
uniform samplerCube reflectionCubeSampler;
#else
uniform sampler2D reflection2DSampler;
#endif
#ifdef REFLECTIONMAP_SKYBOX
varying vec3 vPositionUVW;
#else
#if defined(REFLECTIONMAP_EQUIRECTANGULAR_FIXED) || defined(REFLECTIONMAP_MIRROREDEQUIRECTANGULAR_FIXED)
varying vec3 vDirectionW;
#endif
#endif
#include<reflectionFunction>
#endif
#include<imageProcessingDeclaration>
#include<imageProcessingFunctions>
#include<bumpFragmentMainFunctions>
#include<bumpFragmentFunctions>
#include<clipPlaneFragmentDeclaration>
#include<logDepthDeclaration>
#include<fogFragmentDeclaration>
#define CUSTOM_FRAGMENT_DEFINITIONS
void main(void) {
#define CUSTOM_FRAGMENT_MAIN_BEGIN
#include<clipPlaneFragment>
vec3 viewDirectionW=normalize(vEyePosition.xyz-vPositionW);
vec4 baseColor=vec4(1.,1.,1.,1.);
vec3 diffuseColor=vDiffuseColor.rgb;
float alpha=vDiffuseColor.a;
#ifdef NORMAL
vec3 normalW=normalize(vNormalW);
#else
vec3 normalW=normalize(-cross(dFdx(vPositionW),dFdy(vPositionW)));
#endif
#include<bumpFragment>
#ifdef TWOSIDEDLIGHTING
normalW=gl_FrontFacing ? normalW : -normalW;
#endif
#ifdef DIFFUSE
baseColor=texture2D(diffuseSampler,vDiffuseUV+uvOffset);
#if defined(ALPHATEST) && !defined(ALPHATEST_AFTERALLALPHACOMPUTATIONS)
if (baseColor.a<alphaCutOff)
discard;
#endif
#ifdef ALPHAFROMDIFFUSE
alpha*=baseColor.a;
#endif
#define CUSTOM_FRAGMENT_UPDATE_ALPHA
baseColor.rgb*=vDiffuseInfos.y;
#endif
#ifdef DECAL
vec4 decalColor=texture2D(decalSampler,vDecalUV+uvOffset);
#include<decalFragment>(surfaceAlbedo,baseColor,GAMMADECAL,_GAMMADECAL_NOTUSED_)
#endif
#include<depthPrePass>
#if defined(VERTEXCOLOR) || defined(INSTANCESCOLOR) && defined(INSTANCES)
baseColor.rgb*=vColor.rgb;
#endif
#ifdef DETAIL
baseColor.rgb=baseColor.rgb*2.0*mix(0.5,detailColor.r,vDetailInfos.y);
#endif
#define CUSTOM_FRAGMENT_UPDATE_DIFFUSE
vec3 baseAmbientColor=vec3(1.,1.,1.);
#ifdef AMBIENT
baseAmbientColor=texture2D(ambientSampler,vAmbientUV+uvOffset).rgb*vAmbientInfos.y;
#endif
#define CUSTOM_FRAGMENT_BEFORE_LIGHTS
#ifdef SPECULARTERM
float glossiness=vSpecularColor.a;
vec3 specularColor=vSpecularColor.rgb;
#ifdef SPECULAR
vec4 specularMapColor=texture2D(specularSampler,vSpecularUV+uvOffset);
specularColor=specularMapColor.rgb;
#ifdef GLOSSINESS
glossiness=glossiness*specularMapColor.a;
#endif
#endif
#else
float glossiness=0.;
#endif
vec3 diffuseBase=vec3(0.,0.,0.);
lightingInfo info;
#ifdef SPECULARTERM
vec3 specularBase=vec3(0.,0.,0.);
#endif
float shadow=1.;
#ifdef LIGHTMAP
vec4 lightmapColor=texture2D(lightmapSampler,vLightmapUV+uvOffset);
#ifdef RGBDLIGHTMAP
lightmapColor.rgb=fromRGBD(lightmapColor);
#endif
lightmapColor.rgb*=vLightmapInfos.y;
#endif
#include<lightFragment>[0..maxSimultaneousLights]
vec4 refractionColor=vec4(0.,0.,0.,1.);
#ifdef REFRACTION
vec3 refractionVector=normalize(refract(-viewDirectionW,normalW,vRefractionInfos.y));
#ifdef REFRACTIONMAP_3D
#ifdef USE_LOCAL_REFRACTIONMAP_CUBIC
refractionVector=parallaxCorrectNormal(vPositionW,refractionVector,vRefractionSize,vRefractionPosition);
#endif
refractionVector.y=refractionVector.y*vRefractionInfos.w;
vec4 refractionLookup=textureCube(refractionCubeSampler,refractionVector);
if (dot(refractionVector,viewDirectionW)<1.0) {
refractionColor=refractionLookup;
}
#else
vec3 vRefractionUVW=vec3(refractionMatrix*(view*vec4(vPositionW+refractionVector*vRefractionInfos.z,1.0)));
vec2 refractionCoords=vRefractionUVW.xy/vRefractionUVW.z;
refractionCoords.y=1.0-refractionCoords.y;
refractionColor=texture2D(refraction2DSampler,refractionCoords);
#endif
#ifdef RGBDREFRACTION
refractionColor.rgb=fromRGBD(refractionColor);
#endif
#ifdef IS_REFRACTION_LINEAR
refractionColor.rgb=toGammaSpace(refractionColor.rgb);
#endif
refractionColor.rgb*=vRefractionInfos.x;
#endif
vec4 reflectionColor=vec4(0.,0.,0.,1.);
#ifdef REFLECTION
vec3 vReflectionUVW=computeReflectionCoords(vec4(vPositionW,1.0),normalW);
#ifdef REFLECTIONMAP_OPPOSITEZ
vReflectionUVW.z*=-1.0;
#endif
#ifdef REFLECTIONMAP_3D
#ifdef ROUGHNESS
float bias=vReflectionInfos.y;
#ifdef SPECULARTERM
#ifdef SPECULAR
#ifdef GLOSSINESS
bias*=(1.0-specularMapColor.a);
#endif
#endif
#endif
reflectionColor=textureCube(reflectionCubeSampler,vReflectionUVW,bias);
#else
reflectionColor=textureCube(reflectionCubeSampler,vReflectionUVW);
#endif
#else
vec2 coords=vReflectionUVW.xy;
#ifdef REFLECTIONMAP_PROJECTION
coords/=vReflectionUVW.z;
#endif
coords.y=1.0-coords.y;
reflectionColor=texture2D(reflection2DSampler,coords);
#endif
#ifdef RGBDREFLECTION
reflectionColor.rgb=fromRGBD(reflectionColor);
#endif
#ifdef IS_REFLECTION_LINEAR
reflectionColor.rgb=toGammaSpace(reflectionColor.rgb);
#endif
reflectionColor.rgb*=vReflectionInfos.x;
#ifdef REFLECTIONFRESNEL
float reflectionFresnelTerm=computeFresnelTerm(viewDirectionW,normalW,reflectionRightColor.a,reflectionLeftColor.a);
#ifdef REFLECTIONFRESNELFROMSPECULAR
#ifdef SPECULARTERM
reflectionColor.rgb*=specularColor.rgb*(1.0-reflectionFresnelTerm)+reflectionFresnelTerm*reflectionRightColor.rgb;
#else
reflectionColor.rgb*=reflectionLeftColor.rgb*(1.0-reflectionFresnelTerm)+reflectionFresnelTerm*reflectionRightColor.rgb;
#endif
#else
reflectionColor.rgb*=reflectionLeftColor.rgb*(1.0-reflectionFresnelTerm)+reflectionFresnelTerm*reflectionRightColor.rgb;
#endif
#endif
#endif
#ifdef REFRACTIONFRESNEL
float refractionFresnelTerm=computeFresnelTerm(viewDirectionW,normalW,refractionRightColor.a,refractionLeftColor.a);
refractionColor.rgb*=refractionLeftColor.rgb*(1.0-refractionFresnelTerm)+refractionFresnelTerm*refractionRightColor.rgb;
#endif
#ifdef OPACITY
vec4 opacityMap=texture2D(opacitySampler,vOpacityUV+uvOffset);
#ifdef OPACITYRGB
opacityMap.rgb=opacityMap.rgb*vec3(0.3,0.59,0.11);
alpha*=(opacityMap.x+opacityMap.y+opacityMap.z)* vOpacityInfos.y;
#else
alpha*=opacityMap.a*vOpacityInfos.y;
#endif
#endif
#if defined(VERTEXALPHA) || defined(INSTANCESCOLOR) && defined(INSTANCES)
alpha*=vColor.a;
#endif
#ifdef OPACITYFRESNEL
float opacityFresnelTerm=computeFresnelTerm(viewDirectionW,normalW,opacityParts.z,opacityParts.w);
alpha+=opacityParts.x*(1.0-opacityFresnelTerm)+opacityFresnelTerm*opacityParts.y;
#endif
#ifdef ALPHATEST
#ifdef ALPHATEST_AFTERALLALPHACOMPUTATIONS
if (alpha<alphaCutOff)
discard;
#endif
#ifndef ALPHABLEND
alpha=1.0;
#endif
#endif
vec3 emissiveColor=vEmissiveColor;
#ifdef EMISSIVE
emissiveColor+=texture2D(emissiveSampler,vEmissiveUV+uvOffset).rgb*vEmissiveInfos.y;
#endif
#ifdef EMISSIVEFRESNEL
float emissiveFresnelTerm=computeFresnelTerm(viewDirectionW,normalW,emissiveRightColor.a,emissiveLeftColor.a);
emissiveColor*=emissiveLeftColor.rgb*(1.0-emissiveFresnelTerm)+emissiveFresnelTerm*emissiveRightColor.rgb;
#endif
#ifdef DIFFUSEFRESNEL
float diffuseFresnelTerm=computeFresnelTerm(viewDirectionW,normalW,diffuseRightColor.a,diffuseLeftColor.a);
diffuseBase*=diffuseLeftColor.rgb*(1.0-diffuseFresnelTerm)+diffuseFresnelTerm*diffuseRightColor.rgb;
#endif
#ifdef EMISSIVEASILLUMINATION
vec3 finalDiffuse=clamp(diffuseBase*diffuseColor+vAmbientColor,0.0,1.0)*baseColor.rgb;
#else
#ifdef LINKEMISSIVEWITHDIFFUSE
vec3 finalDiffuse=clamp((diffuseBase+emissiveColor)*diffuseColor+vAmbientColor,0.0,1.0)*baseColor.rgb;
#else
vec3 finalDiffuse=clamp(diffuseBase*diffuseColor+emissiveColor+vAmbientColor,0.0,1.0)*baseColor.rgb;
#endif
#endif
#ifdef SPECULARTERM
vec3 finalSpecular=specularBase*specularColor;
#ifdef SPECULAROVERALPHA
alpha=clamp(alpha+dot(finalSpecular,vec3(0.3,0.59,0.11)),0.,1.);
#endif
#else
vec3 finalSpecular=vec3(0.0);
#endif
#ifdef REFLECTIONOVERALPHA
alpha=clamp(alpha+dot(reflectionColor.rgb,vec3(0.3,0.59,0.11)),0.,1.);
#endif
#ifdef EMISSIVEASILLUMINATION
vec4 color=vec4(clamp(finalDiffuse*baseAmbientColor+finalSpecular+reflectionColor.rgb+emissiveColor+refractionColor.rgb,0.0,1.0),alpha);
#else
vec4 color=vec4(finalDiffuse*baseAmbientColor+finalSpecular+reflectionColor.rgb+refractionColor.rgb,alpha);
#endif
#ifdef LIGHTMAP
#ifndef LIGHTMAPEXCLUDED
#ifdef USELIGHTMAPASSHADOWMAP
color.rgb*=lightmapColor.rgb;
#else
color.rgb+=lightmapColor.rgb;
#endif
#endif
#endif
#define CUSTOM_FRAGMENT_BEFORE_FOG
color.rgb=max(color.rgb,0.);
#include<logDepthFragment>
#include<fogFragment>
#ifdef IMAGEPROCESSINGPOSTPROCESS
color.rgb=toLinearSpace(color.rgb);
#else
#ifdef IMAGEPROCESSING
color.rgb=toLinearSpace(color.rgb);
color=applyImageProcessing(color);
#endif
#endif
color.a*=visibility;
#ifdef PREMULTIPLYALPHA
color.rgb*=color.a;
#endif
#define CUSTOM_FRAGMENT_BEFORE_FRAGCOLOR
#ifdef PREPASS
float writeGeometryInfo=color.a>0.4 ? 1.0 : 0.0;
gl_FragData[0]=color; 
#ifdef PREPASS_POSITION
gl_FragData[PREPASS_POSITION_INDEX]=vec4(vPositionW,writeGeometryInfo);
#endif
#ifdef PREPASS_VELOCITY
vec2 a=(vCurrentPosition.xy/vCurrentPosition.w)*0.5+0.5;
vec2 b=(vPreviousPosition.xy/vPreviousPosition.w)*0.5+0.5;
vec2 velocity=abs(a-b);
velocity=vec2(pow(velocity.x,1.0/3.0),pow(velocity.y,1.0/3.0))*sign(a-b)*0.5+0.5;
gl_FragData[PREPASS_VELOCITY_INDEX]=vec4(velocity,0.0,writeGeometryInfo);
#endif
#ifdef PREPASS_IRRADIANCE
gl_FragData[PREPASS_IRRADIANCE_INDEX]=vec4(0.0,0.0,0.0,writeGeometryInfo); 
#endif
#ifdef PREPASS_DEPTH
gl_FragData[PREPASS_DEPTH_INDEX]=vec4(vViewPos.z,0.0,0.0,writeGeometryInfo); 
#endif
#ifdef PREPASS_NORMAL
gl_FragData[PREPASS_NORMAL_INDEX]=vec4(normalize((view*vec4(normalW,0.0)).rgb),writeGeometryInfo); 
#endif
#ifdef PREPASS_ALBEDO_SQRT
gl_FragData[PREPASS_ALBEDO_SQRT_INDEX]=vec4(0.0,0.0,0.0,writeGeometryInfo); 
#endif
#ifdef PREPASS_REFLECTIVITY
#if defined(SPECULARTERM)
#if defined(SPECULAR)
gl_FragData[PREPASS_REFLECTIVITY_INDEX]=vec4(toLinearSpace(specularMapColor))*writeGeometryInfo; 
#else
gl_FragData[PREPASS_REFLECTIVITY_INDEX]=vec4(toLinearSpace(specularColor),1.0)*writeGeometryInfo;
#endif
#else
gl_FragData[PREPASS_REFLECTIVITY_INDEX]=vec4(0.0,0.0,0.0,1.0)*writeGeometryInfo;
#endif
#endif
#endif
#if !defined(PREPASS) || defined(WEBGL2)
gl_FragColor=color;
#endif
#include<oitFragment>
#if ORDER_INDEPENDENT_TRANSPARENCY
if (fragDepth==nearestDepth) {
frontColor.rgb+=color.rgb*color.a*alphaMultiplier;
frontColor.a=1.0-alphaMultiplier*(1.0-color.a);
} else {
backColor+=color;
}
#endif
#define CUSTOM_FRAGMENT_MAIN_END
}
`;E.ShadersStore[_a]=ga;var va="decalVertexDeclaration",Sa=`#ifdef DECAL
uniform vec4 vDecalInfos;
uniform mat4 decalMatrix;
#endif
`;E.IncludesShadersStore[va]=Sa;var Ea="defaultVertexDeclaration",Ta=`uniform mat4 viewProjection;
uniform mat4 view;
#ifdef DIFFUSE
uniform mat4 diffuseMatrix;
uniform vec2 vDiffuseInfos;
#endif
#ifdef AMBIENT
uniform mat4 ambientMatrix;
uniform vec2 vAmbientInfos;
#endif
#ifdef OPACITY
uniform mat4 opacityMatrix;
uniform vec2 vOpacityInfos;
#endif
#ifdef EMISSIVE
uniform vec2 vEmissiveInfos;
uniform mat4 emissiveMatrix;
#endif
#ifdef LIGHTMAP
uniform vec2 vLightmapInfos;
uniform mat4 lightmapMatrix;
#endif
#if defined(SPECULAR) && defined(SPECULARTERM)
uniform vec2 vSpecularInfos;
uniform mat4 specularMatrix;
#endif
#ifdef BUMP
uniform vec3 vBumpInfos;
uniform mat4 bumpMatrix;
#endif
#ifdef REFLECTION
uniform mat4 reflectionMatrix;
#endif
#ifdef POINTSIZE
uniform float pointSize;
#endif
#ifdef DETAIL
uniform vec4 vDetailInfos;
uniform mat4 detailMatrix;
#endif
#include<decalVertexDeclaration>
#define ADDITIONAL_VERTEX_DECLARATION
`;E.IncludesShadersStore[Ea]=Ta;var xa="uvAttributeDeclaration",Ma=`#ifdef UV{X}
attribute vec2 uv{X};
#endif
`;E.IncludesShadersStore[xa]=Ma;var Aa="prePassVertexDeclaration",Ca=`#ifdef PREPASS
#ifdef PREPASS_DEPTH
varying vec3 vViewPos;
#endif
#ifdef PREPASS_VELOCITY
uniform mat4 previousViewProjection;
varying vec4 vCurrentPosition;
varying vec4 vPreviousPosition;
#endif
#endif
`;E.IncludesShadersStore[Aa]=Ca;var Ia="samplerVertexDeclaration",Ra=`#if defined(_DEFINENAME_) && _DEFINENAME_DIRECTUV==0
varying vec2 v_VARYINGNAME_UV;
#endif
`;E.IncludesShadersStore[Ia]=Ra;var Pa="bumpVertexDeclaration",ba=`#if defined(BUMP) || defined(PARALLAX) || defined(CLEARCOAT_BUMP) || defined(ANISOTROPIC)
#if defined(TANGENT) && defined(NORMAL) 
varying mat3 vTBN;
#endif
#endif
`;E.IncludesShadersStore[Pa]=ba;var Da="fogVertexDeclaration",La=`#ifdef FOG
varying vec3 vFogDistance;
#endif
`;E.IncludesShadersStore[Da]=La;var wa="lightVxFragmentDeclaration",Oa=`#ifdef LIGHT{X}
uniform vec4 vLightData{X};
uniform vec4 vLightDiffuse{X};
#ifdef SPECULARTERM
uniform vec4 vLightSpecular{X};
#else
vec4 vLightSpecular{X}=vec4(0.);
#endif
#ifdef SHADOW{X}
#ifdef SHADOWCSM{X}
uniform mat4 lightMatrix{X}[SHADOWCSMNUM_CASCADES{X}];
varying vec4 vPositionFromLight{X}[SHADOWCSMNUM_CASCADES{X}];
varying float vDepthMetric{X}[SHADOWCSMNUM_CASCADES{X}];
varying vec4 vPositionFromCamera{X};
#elif defined(SHADOWCUBE{X})
#else
varying vec4 vPositionFromLight{X};
varying float vDepthMetric{X};
uniform mat4 lightMatrix{X};
#endif
uniform vec4 shadowsInfo{X};
uniform vec2 depthValues{X};
#endif
#ifdef SPOTLIGHT{X}
uniform vec4 vLightDirection{X};
uniform vec4 vLightFalloff{X};
#elif defined(POINTLIGHT{X})
uniform vec4 vLightFalloff{X};
#elif defined(HEMILIGHT{X})
uniform vec3 vLightGround{X};
#endif
#endif
`;E.IncludesShadersStore[wa]=Oa;var Fa="lightVxUboDeclaration",Na=`#ifdef LIGHT{X}
uniform Light{X}
{
vec4 vLightData;
vec4 vLightDiffuse;
vec4 vLightSpecular;
#ifdef SPOTLIGHT{X}
vec4 vLightDirection;
vec4 vLightFalloff;
#elif defined(POINTLIGHT{X})
vec4 vLightFalloff;
#elif defined(HEMILIGHT{X})
vec3 vLightGround;
#endif
vec4 shadowsInfo;
vec2 depthValues;
} light{X};
#ifdef SHADOW{X}
#ifdef SHADOWCSM{X}
uniform mat4 lightMatrix{X}[SHADOWCSMNUM_CASCADES{X}];
varying vec4 vPositionFromLight{X}[SHADOWCSMNUM_CASCADES{X}];
varying float vDepthMetric{X}[SHADOWCSMNUM_CASCADES{X}];
varying vec4 vPositionFromCamera{X};
#elif defined(SHADOWCUBE{X})
#else
varying vec4 vPositionFromLight{X};
varying float vDepthMetric{X};
uniform mat4 lightMatrix{X};
#endif
#endif
#endif
`;E.IncludesShadersStore[Fa]=Na;var ya="prePassVertex",Ua=`#ifdef PREPASS_DEPTH
vViewPos=(view*worldPos).rgb;
#endif
#if defined(PREPASS_VELOCITY) && defined(BONES_VELOCITY_ENABLED)
vCurrentPosition=viewProjection*worldPos;
#if NUM_BONE_INFLUENCERS>0
mat4 previousInfluence;
previousInfluence=mPreviousBones[int(matricesIndices[0])]*matricesWeights[0];
#if NUM_BONE_INFLUENCERS>1
previousInfluence+=mPreviousBones[int(matricesIndices[1])]*matricesWeights[1];
#endif 
#if NUM_BONE_INFLUENCERS>2
previousInfluence+=mPreviousBones[int(matricesIndices[2])]*matricesWeights[2];
#endif 
#if NUM_BONE_INFLUENCERS>3
previousInfluence+=mPreviousBones[int(matricesIndices[3])]*matricesWeights[3];
#endif
#if NUM_BONE_INFLUENCERS>4
previousInfluence+=mPreviousBones[int(matricesIndicesExtra[0])]*matricesWeightsExtra[0];
#endif 
#if NUM_BONE_INFLUENCERS>5
previousInfluence+=mPreviousBones[int(matricesIndicesExtra[1])]*matricesWeightsExtra[1];
#endif 
#if NUM_BONE_INFLUENCERS>6
previousInfluence+=mPreviousBones[int(matricesIndicesExtra[2])]*matricesWeightsExtra[2];
#endif 
#if NUM_BONE_INFLUENCERS>7
previousInfluence+=mPreviousBones[int(matricesIndicesExtra[3])]*matricesWeightsExtra[3];
#endif
vPreviousPosition=previousViewProjection*finalPreviousWorld*previousInfluence*vec4(positionUpdated,1.0);
#else
vPreviousPosition=previousViewProjection*finalPreviousWorld*vec4(positionUpdated,1.0);
#endif
#endif
`;E.IncludesShadersStore[ya]=Ua;var Ba="uvVariableDeclaration",Va=`#if !defined(UV{X}) && defined(MAINUV{X})
vec2 uv{X}=vec2(0.,0.);
#endif
#ifdef MAINUV{X}
vMainUV{X}=uv{X};
#endif
`;E.IncludesShadersStore[Ba]=Va;var Xa="samplerVertexImplementation",za=`#if defined(_DEFINENAME_) && _DEFINENAME_DIRECTUV==0
if (v_INFONAME_==0.)
{
v_VARYINGNAME_UV=vec2(_MATRIXNAME_Matrix*vec4(uvUpdated,1.0,0.0));
}
#ifdef UV2
else if (v_INFONAME_==1.)
{
v_VARYINGNAME_UV=vec2(_MATRIXNAME_Matrix*vec4(uv2,1.0,0.0));
}
#endif
#ifdef UV3
else if (v_INFONAME_==2.)
{
v_VARYINGNAME_UV=vec2(_MATRIXNAME_Matrix*vec4(uv3,1.0,0.0));
}
#endif
#ifdef UV4
else if (v_INFONAME_==3.)
{
v_VARYINGNAME_UV=vec2(_MATRIXNAME_Matrix*vec4(uv4,1.0,0.0));
}
#endif
#ifdef UV5
else if (v_INFONAME_==4.)
{
v_VARYINGNAME_UV=vec2(_MATRIXNAME_Matrix*vec4(uv5,1.0,0.0));
}
#endif
#ifdef UV6
else if (v_INFONAME_==5.)
{
v_VARYINGNAME_UV=vec2(_MATRIXNAME_Matrix*vec4(uv6,1.0,0.0));
}
#endif
#endif
`;E.IncludesShadersStore[Xa]=za;var Wa="bumpVertex",ka=`#if defined(BUMP) || defined(PARALLAX) || defined(CLEARCOAT_BUMP) || defined(ANISOTROPIC)
#if defined(TANGENT) && defined(NORMAL)
vec3 tbnNormal=normalize(normalUpdated);
vec3 tbnTangent=normalize(tangentUpdated.xyz);
vec3 tbnBitangent=cross(tbnNormal,tbnTangent)*tangentUpdated.w;
vTBN=mat3(finalWorld)*mat3(tbnTangent,tbnBitangent,tbnNormal);
#endif
#endif
`;E.IncludesShadersStore[Wa]=ka;var Ga="fogVertex",Ha=`#ifdef FOG
vFogDistance=(view*worldPos).xyz;
#endif
`;E.IncludesShadersStore[Ga]=Ha;var Ya="shadowsVertex",Za=`#ifdef SHADOWS
#if defined(SHADOWCSM{X})
vPositionFromCamera{X}=view*worldPos;
for (int i=0; i<SHADOWCSMNUM_CASCADES{X}; i++) {
vPositionFromLight{X}[i]=lightMatrix{X}[i]*worldPos;
#ifdef USE_REVERSE_DEPTHBUFFER
vDepthMetric{X}[i]=(-vPositionFromLight{X}[i].z+light{X}.depthValues.x)/light{X}.depthValues.y;
#else
vDepthMetric{X}[i]=(vPositionFromLight{X}[i].z+light{X}.depthValues.x)/light{X}.depthValues.y;
#endif
}
#elif defined(SHADOW{X}) && !defined(SHADOWCUBE{X})
vPositionFromLight{X}=lightMatrix{X}*worldPos;
#ifdef USE_REVERSE_DEPTHBUFFER
vDepthMetric{X}=(-vPositionFromLight{X}.z+light{X}.depthValues.x)/light{X}.depthValues.y;
#else
vDepthMetric{X}=(vPositionFromLight{X}.z+light{X}.depthValues.x)/light{X}.depthValues.y;
#endif
#endif
#endif
`;E.IncludesShadersStore[Ya]=Za;var ja="vertexColorMixing",Qa=`#if defined(VERTEXCOLOR) || defined(INSTANCESCOLOR) && defined(INSTANCES)
vColor=vec4(1.0);
#ifdef VERTEXCOLOR
#ifdef VERTEXALPHA
vColor*=color;
#else
vColor.rgb*=color.rgb;
#endif
#endif
#ifdef INSTANCESCOLOR
vColor*=instanceColor;
#endif
#endif
`;E.IncludesShadersStore[ja]=Qa;var Ka="pointCloudVertex",qa=`#if defined(POINTSIZE) && !defined(WEBGPU)
gl_PointSize=pointSize;
#endif
`;E.IncludesShadersStore[Ka]=qa;var $a="logDepthVertex",Ja=`#ifdef LOGARITHMICDEPTH
vFragmentDepth=1.0+gl_Position.w;
gl_Position.z=log2(max(0.000001,vFragmentDepth))*logarithmicDepthConstant;
#endif
`;E.IncludesShadersStore[$a]=Ja;var en="defaultVertexShader",tn=`#include<__decl__defaultVertex>
#define CUSTOM_VERTEX_BEGIN
attribute vec3 position;
#ifdef NORMAL
attribute vec3 normal;
#endif
#ifdef TANGENT
attribute vec4 tangent;
#endif
#ifdef UV1
attribute vec2 uv;
#endif
#include<uvAttributeDeclaration>[2..7]
#ifdef VERTEXCOLOR
attribute vec4 color;
#endif
#include<helperFunctions>
#include<bonesDeclaration>
#include<bakedVertexAnimationDeclaration>
#include<instancesDeclaration>
#include<prePassVertexDeclaration>
#include<mainUVVaryingDeclaration>[1..7]
#include<samplerVertexDeclaration>(_DEFINENAME_,DIFFUSE,_VARYINGNAME_,Diffuse)
#include<samplerVertexDeclaration>(_DEFINENAME_,DETAIL,_VARYINGNAME_,Detail)
#include<samplerVertexDeclaration>(_DEFINENAME_,AMBIENT,_VARYINGNAME_,Ambient)
#include<samplerVertexDeclaration>(_DEFINENAME_,OPACITY,_VARYINGNAME_,Opacity)
#include<samplerVertexDeclaration>(_DEFINENAME_,EMISSIVE,_VARYINGNAME_,Emissive)
#include<samplerVertexDeclaration>(_DEFINENAME_,LIGHTMAP,_VARYINGNAME_,Lightmap)
#if defined(SPECULARTERM)
#include<samplerVertexDeclaration>(_DEFINENAME_,SPECULAR,_VARYINGNAME_,Specular)
#endif
#include<samplerVertexDeclaration>(_DEFINENAME_,BUMP,_VARYINGNAME_,Bump)
#include<samplerVertexDeclaration>(_DEFINENAME_,DECAL,_VARYINGNAME_,Decal)
varying vec3 vPositionW;
#ifdef NORMAL
varying vec3 vNormalW;
#endif
#if defined(VERTEXCOLOR) || defined(INSTANCESCOLOR) && defined(INSTANCES)
varying vec4 vColor;
#endif
#include<bumpVertexDeclaration>
#include<clipPlaneVertexDeclaration>
#include<fogVertexDeclaration>
#include<__decl__lightVxFragment>[0..maxSimultaneousLights]
#include<morphTargetsVertexGlobalDeclaration>
#include<morphTargetsVertexDeclaration>[0..maxSimultaneousMorphTargets]
#ifdef REFLECTIONMAP_SKYBOX
varying vec3 vPositionUVW;
#endif
#if defined(REFLECTIONMAP_EQUIRECTANGULAR_FIXED) || defined(REFLECTIONMAP_MIRROREDEQUIRECTANGULAR_FIXED)
varying vec3 vDirectionW;
#endif
#include<logDepthDeclaration>
#define CUSTOM_VERTEX_DEFINITIONS
void main(void) {
#define CUSTOM_VERTEX_MAIN_BEGIN
vec3 positionUpdated=position;
#ifdef NORMAL
vec3 normalUpdated=normal;
#endif
#ifdef TANGENT
vec4 tangentUpdated=tangent;
#endif
#ifdef UV1
vec2 uvUpdated=uv;
#endif
#include<morphTargetsVertexGlobal>
#include<morphTargetsVertex>[0..maxSimultaneousMorphTargets]
#ifdef REFLECTIONMAP_SKYBOX
vPositionUVW=positionUpdated;
#endif
#define CUSTOM_VERTEX_UPDATE_POSITION
#define CUSTOM_VERTEX_UPDATE_NORMAL
#include<instancesVertex>
#if defined(PREPASS) && defined(PREPASS_VELOCITY) && !defined(BONES_VELOCITY_ENABLED)
vCurrentPosition=viewProjection*finalWorld*vec4(positionUpdated,1.0);
vPreviousPosition=previousViewProjection*finalPreviousWorld*vec4(positionUpdated,1.0);
#endif
#include<bonesVertex>
#include<bakedVertexAnimation>
vec4 worldPos=finalWorld*vec4(positionUpdated,1.0);
#ifdef NORMAL
mat3 normalWorld=mat3(finalWorld);
#if defined(INSTANCES) && defined(THIN_INSTANCES)
vNormalW=normalUpdated/vec3(dot(normalWorld[0],normalWorld[0]),dot(normalWorld[1],normalWorld[1]),dot(normalWorld[2],normalWorld[2]));
vNormalW=normalize(normalWorld*vNormalW);
#else
#ifdef NONUNIFORMSCALING
normalWorld=transposeMat3(inverseMat3(normalWorld));
#endif
vNormalW=normalize(normalWorld*normalUpdated);
#endif
#endif
#define CUSTOM_VERTEX_UPDATE_WORLDPOS
#ifdef MULTIVIEW
if (gl_ViewID_OVR==0u) {
gl_Position=viewProjection*worldPos;
} else {
gl_Position=viewProjectionR*worldPos;
}
#else
gl_Position=viewProjection*worldPos;
#endif
vPositionW=vec3(worldPos);
#include<prePassVertex>
#if defined(REFLECTIONMAP_EQUIRECTANGULAR_FIXED) || defined(REFLECTIONMAP_MIRROREDEQUIRECTANGULAR_FIXED)
vDirectionW=normalize(vec3(finalWorld*vec4(positionUpdated,0.0)));
#endif
#ifndef UV1
vec2 uvUpdated=vec2(0.,0.);
#endif
#ifdef MAINUV1
vMainUV1=uvUpdated;
#endif
#include<uvVariableDeclaration>[2..7]
#include<samplerVertexImplementation>(_DEFINENAME_,DIFFUSE,_VARYINGNAME_,Diffuse,_MATRIXNAME_,diffuse,_INFONAME_,DiffuseInfos.x)
#include<samplerVertexImplementation>(_DEFINENAME_,DETAIL,_VARYINGNAME_,Detail,_MATRIXNAME_,detail,_INFONAME_,DetailInfos.x)
#include<samplerVertexImplementation>(_DEFINENAME_,AMBIENT,_VARYINGNAME_,Ambient,_MATRIXNAME_,ambient,_INFONAME_,AmbientInfos.x)
#include<samplerVertexImplementation>(_DEFINENAME_,OPACITY,_VARYINGNAME_,Opacity,_MATRIXNAME_,opacity,_INFONAME_,OpacityInfos.x)
#include<samplerVertexImplementation>(_DEFINENAME_,EMISSIVE,_VARYINGNAME_,Emissive,_MATRIXNAME_,emissive,_INFONAME_,EmissiveInfos.x)
#include<samplerVertexImplementation>(_DEFINENAME_,LIGHTMAP,_VARYINGNAME_,Lightmap,_MATRIXNAME_,lightmap,_INFONAME_,LightmapInfos.x)
#if defined(SPECULARTERM)
#include<samplerVertexImplementation>(_DEFINENAME_,SPECULAR,_VARYINGNAME_,Specular,_MATRIXNAME_,specular,_INFONAME_,SpecularInfos.x)
#endif
#include<samplerVertexImplementation>(_DEFINENAME_,BUMP,_VARYINGNAME_,Bump,_MATRIXNAME_,bump,_INFONAME_,BumpInfos.x)
#include<samplerVertexImplementation>(_DEFINENAME_,DECAL,_VARYINGNAME_,Decal,_MATRIXNAME_,decal,_INFONAME_,DecalInfos.x)
#include<bumpVertex>
#include<clipPlaneVertex>
#include<fogVertex>
#include<shadowsVertex>[0..maxSimultaneousLights]
#include<vertexColorMixing>
#include<pointCloudVertex>
#include<logDepthVertex>
#define CUSTOM_VERTEX_MAIN_END
}
`;E.ShadersStore[en]=tn;var rn=new RegExp("^([gimus]+)!"),sn=(()=>{class a{constructor(e){this._plugins=[],this._activePlugins=[],this._activePluginsForExtraEvents=[],this._material=e,this._scene=e.getScene(),this._engine=this._scene.getEngine()}_addPlugin(e){for(let s=0;s<this._plugins.length;++s)if(this._plugins[s].name===e.name)throw`Plugin "${e.name}" already added to the material "${this._material.name}"!`;if(this._material._uniformBufferLayoutBuilt)throw`The plugin "${e.name}" can't be added to the material "${this._material.name}" because this material has already been used for rendering! Please add plugins to materials before any rendering with this material occurs.`;let i=e.getClassName();a._MaterialPluginClassToMainDefine[i]||(a._MaterialPluginClassToMainDefine[i]="MATERIALPLUGIN_"+ ++a._MaterialPluginCounter),this._material._callbackPluginEventGeneric=this._handlePluginEvent.bind(this),this._plugins.push(e),this._plugins.sort((s,n)=>s.priority-n.priority),this._codeInjectionPoints={};let r={};r[a._MaterialPluginClassToMainDefine[i]]={type:"boolean",default:!0};for(let s of this._plugins)s.collectDefines(r),this._collectPointNames("vertex",s.getCustomCode("vertex")),this._collectPointNames("fragment",s.getCustomCode("fragment"));this._defineNamesFromPlugins=r}_activatePlugin(e){this._activePlugins.indexOf(e)===-1&&(this._activePlugins.push(e),this._activePlugins.sort((i,r)=>i.priority-r.priority),this._material._callbackPluginEventIsReadyForSubMesh=this._handlePluginEventIsReadyForSubMesh.bind(this),this._material._callbackPluginEventPrepareDefinesBeforeAttributes=this._handlePluginEventPrepareDefinesBeforeAttributes.bind(this),this._material._callbackPluginEventPrepareDefines=this._handlePluginEventPrepareDefines.bind(this),this._material._callbackPluginEventBindForSubMesh=this._handlePluginEventBindForSubMesh.bind(this),e.registerForExtraEvents&&(this._activePluginsForExtraEvents.push(e),this._activePluginsForExtraEvents.sort((i,r)=>i.priority-r.priority),this._material._callbackPluginEventHasRenderTargetTextures=this._handlePluginEventHasRenderTargetTextures.bind(this),this._material._callbackPluginEventFillRenderTargetTextures=this._handlePluginEventFillRenderTargetTextures.bind(this),this._material._callbackPluginEventHardBindForSubMesh=this._handlePluginEventHardBindForSubMesh.bind(this)))}getPlugin(e){for(let i=0;i<this._plugins.length;++i)if(this._plugins[i].name===e)return this._plugins[i];return null}_handlePluginEventIsReadyForSubMesh(e){let i=!0;for(let r of this._activePlugins)i=i&&r.isReadyForSubMesh(e.defines,this._scene,this._engine,e.subMesh);e.isReadyForSubMesh=i}_handlePluginEventPrepareDefinesBeforeAttributes(e){for(let i of this._activePlugins)i.prepareDefinesBeforeAttributes(e.defines,this._scene,e.mesh)}_handlePluginEventPrepareDefines(e){for(let i of this._activePlugins)i.prepareDefines(e.defines,this._scene,e.mesh)}_handlePluginEventHardBindForSubMesh(e){for(let i of this._activePluginsForExtraEvents)i.hardBindForSubMesh(this._material._uniformBuffer,this._scene,this._engine,e.subMesh)}_handlePluginEventBindForSubMesh(e){for(let i of this._activePlugins)i.bindForSubMesh(this._material._uniformBuffer,this._scene,this._engine,e.subMesh)}_handlePluginEventHasRenderTargetTextures(e){let i=!1;for(let r of this._activePluginsForExtraEvents)if(i=r.hasRenderTargetTextures(),i)break;e.hasRenderTargetTextures=i}_handlePluginEventFillRenderTargetTextures(e){for(let i of this._activePluginsForExtraEvents)i.fillRenderTargetTextures(e.renderTargets)}_handlePluginEvent(e,i){var r;switch(e){case fe.GetActiveTextures:{let s=i;for(let n of this._activePlugins)n.getActiveTextures(s.activeTextures);break}case fe.GetAnimatables:{let s=i;for(let n of this._activePlugins)n.getAnimatables(s.animatables);break}case fe.HasTexture:{let s=i,n=!1;for(let o of this._activePlugins)if(n=o.hasTexture(s.texture),n)break;s.hasTexture=n;break}case fe.Disposed:{let s=i;for(let n of this._plugins)n.dispose(s.forceDisposeTextures);break}case fe.GetDefineNames:{let s=i;s.defineNames=this._defineNamesFromPlugins;break}case fe.PrepareEffect:{let s=i;for(let n of this._activePlugins)s.fallbackRank=n.addFallbacks(s.defines,s.fallbacks,s.fallbackRank),n.getAttributes(s.attributes,this._scene,s.mesh);this._uniformList.length>0&&s.uniforms.push(...this._uniformList),this._samplerList.length>0&&s.samplers.push(...this._samplerList),this._uboList.length>0&&s.uniformBuffersNames.push(...this._uboList),s.customCode=this._injectCustomCode(s.customCode);break}case fe.PrepareUniformBuffer:{let s=i;this._uboDeclaration="",this._vertexDeclaration="",this._fragmentDeclaration="",this._uniformList=[],this._samplerList=[],this._uboList=[];for(let n of this._plugins){let o=n.getUniforms();if(o){if(o.ubo)for(let d of o.ubo){if(d.size&&d.type){let l=(r=d.arraySize)!==null&&r!==void 0?r:0;s.ubo.addUniform(d.name,d.size,l),this._uboDeclaration+=`${d.type} ${d.name}${l>0?`[${l}]`:""};\r
`}this._uniformList.push(d.name)}o.vertex&&(this._vertexDeclaration+=o.vertex+`\r
`),o.fragment&&(this._fragmentDeclaration+=o.fragment+`\r
`)}n.getSamplers(this._samplerList),n.getUniformBuffersNames(this._uboList)}break}}}_collectPointNames(e,i){if(i)for(let r in i)this._codeInjectionPoints[e]||(this._codeInjectionPoints[e]={}),this._codeInjectionPoints[e][r]=!0}_injectCustomCode(e){return(i,r)=>{var s;e&&(r=e(i,r)),this._uboDeclaration&&(r=r.replace("#define ADDITIONAL_UBO_DECLARATION",this._uboDeclaration)),this._vertexDeclaration&&(r=r.replace("#define ADDITIONAL_VERTEX_DECLARATION",this._vertexDeclaration)),this._fragmentDeclaration&&(r=r.replace("#define ADDITIONAL_FRAGMENT_DECLARATION",this._fragmentDeclaration));let n=(s=this._codeInjectionPoints)===null||s===void 0?void 0:s[i];if(!n)return r;for(let o in n){let d="";for(let l of this._activePlugins){let h=l.getCustomCode(i);h!=null&&h[o]&&(d+=h[o]+`\r
`)}if(d.length>0)if(o.charAt(0)==="!"){o=o.substring(1);let l="g";if(o.charAt(0)==="!")l="",o=o.substring(1);else{let p=rn.exec(o);p&&p.length>=2&&(l=p[1],o=o.substring(l.length+1))}l.indexOf("g")<0&&(l+="g");let h=r,c=new RegExp(o,l),u=c.exec(h);for(;u!==null;){let p=d;for(let _=0;_<u.length;++_)p=p.replace("$"+_,u[_]);r=r.replace(u[0],p),u=c.exec(h)}}else{let l="#define "+o;r=r.replace(l,`\r
`+d+`\r
`+l)}}return r}}}return a._MaterialPluginClassToMainDefine={},a._MaterialPluginCounter=0,a})(),Ze=class{_enable(t){t&&this._pluginManager._activatePlugin(this)}constructor(t,e,i,r,s=!0,n=!1){this.priority=500,this.registerForExtraEvents=!1,this._material=t,this.name=e,this.priority=i,t.pluginManager||(t.pluginManager=new sn(t),t.onDisposeObservable.add(()=>{t.pluginManager=void 0})),this._pluginDefineNames=r,this._pluginManager=t.pluginManager,s&&this._pluginManager._addPlugin(this),n&&this._enable(!0),this.markAllDefinesAsDirty=t._dirtyCallbacks[63]}getClassName(){return"MaterialPluginBase"}isReadyForSubMesh(t,e,i,r){return!0}hardBindForSubMesh(t,e,i,r){}bindForSubMesh(t,e,i,r){}dispose(t){}getCustomCode(t){return null}collectDefines(t){if(this._pluginDefineNames)for(let e of Object.keys(this._pluginDefineNames)){if(e[0]==="_")continue;let i=typeof this._pluginDefineNames[e];t[e]={type:i==="number"?"number":i==="string"?"string":i==="boolean"?"boolean":"object",default:this._pluginDefineNames[e]}}}prepareDefinesBeforeAttributes(t,e,i){}prepareDefines(t,e,i){}hasTexture(t){return!1}hasRenderTargetTextures(){return!1}fillRenderTargetTextures(t){}getActiveTextures(t){}getAnimatables(t){}addFallbacks(t,e,i){return i}getSamplers(t){}getAttributes(t,e,i){}getUniformBuffersNames(t){}getUniforms(){return{}}copyTo(t){H.Clone(()=>t,this)}serialize(){return H.Serialize(this)}parse(t,e,i){H.Parse(()=>this,t,e,i)}};f([g()],Ze.prototype,"name",void 0);f([g()],Ze.prototype,"priority",void 0);f([g()],Ze.prototype,"registerForExtraEvents",void 0);var Qt=class extends dt{constructor(){super(...arguments),this.DETAIL=!1,this.DETAILDIRECTUV=0,this.DETAIL_NORMALBLENDMETHOD=0}},Se=class extends Ze{_markAllSubMeshesAsTexturesDirty(){this._enable(this._isEnabled),this._internalMarkAllSubMeshesAsTexturesDirty()}constructor(t,e=!0){super(t,"DetailMap",140,new Qt,e),this._texture=null,this.diffuseBlendLevel=1,this.roughnessBlendLevel=1,this.bumpLevel=1,this._normalBlendMethod=tt.MATERIAL_NORMALBLENDMETHOD_WHITEOUT,this._isEnabled=!1,this.isEnabled=!1,this._internalMarkAllSubMeshesAsTexturesDirty=t._dirtyCallbacks[1]}isReadyForSubMesh(t,e,i){return this._isEnabled?!(t._areTexturesDirty&&e.texturesEnabled&&i.getCaps().standardDerivatives&&this._texture&&X.DetailTextureEnabled&&!this._texture.isReady()):!0}prepareDefines(t,e){if(this._isEnabled){t.DETAIL_NORMALBLENDMETHOD=this._normalBlendMethod;let i=e.getEngine();t._areTexturesDirty&&(i.getCaps().standardDerivatives&&this._texture&&X.DetailTextureEnabled&&this._isEnabled?(b.PrepareDefinesForMergedUV(this._texture,t,"DETAIL"),t.DETAIL_NORMALBLENDMETHOD=this._normalBlendMethod):t.DETAIL=!1)}else t.DETAIL=!1}bindForSubMesh(t,e){if(!this._isEnabled)return;let i=this._material.isFrozen;(!t.useUbo||!i||!t.isSync)&&this._texture&&X.DetailTextureEnabled&&(t.updateFloat4("vDetailInfos",this._texture.coordinatesIndex,this.diffuseBlendLevel,this.bumpLevel,this.roughnessBlendLevel),b.BindTextureMatrix(this._texture,t,"detail")),e.texturesEnabled&&this._texture&&X.DetailTextureEnabled&&t.setTexture("detailSampler",this._texture)}hasTexture(t){return this._texture===t}getActiveTextures(t){this._texture&&t.push(this._texture)}getAnimatables(t){this._texture&&this._texture.animations&&this._texture.animations.length>0&&t.push(this._texture)}dispose(t){var e;t&&((e=this._texture)===null||e===void 0||e.dispose())}getClassName(){return"DetailMapConfiguration"}getSamplers(t){t.push("detailSampler")}getUniforms(){return{ubo:[{name:"vDetailInfos",size:4,type:"vec4"},{name:"detailMatrix",size:16,type:"mat4"}]}}};f([ne("detailTexture"),O("_markAllSubMeshesAsTexturesDirty")],Se.prototype,"texture",void 0);f([g()],Se.prototype,"diffuseBlendLevel",void 0);f([g()],Se.prototype,"roughnessBlendLevel",void 0);f([g()],Se.prototype,"bumpLevel",void 0);f([g(),O("_markAllSubMeshesAsTexturesDirty")],Se.prototype,"normalBlendMethod",void 0);f([g(),O("_markAllSubMeshesAsTexturesDirty")],Se.prototype,"isEnabled",void 0);var Bt={effect:null,subMesh:null},Kt=class extends dt{constructor(t){super(t),this.MAINUV1=!1,this.MAINUV2=!1,this.MAINUV3=!1,this.MAINUV4=!1,this.MAINUV5=!1,this.MAINUV6=!1,this.DIFFUSE=!1,this.DIFFUSEDIRECTUV=0,this.BAKED_VERTEX_ANIMATION_TEXTURE=!1,this.AMBIENT=!1,this.AMBIENTDIRECTUV=0,this.OPACITY=!1,this.OPACITYDIRECTUV=0,this.OPACITYRGB=!1,this.REFLECTION=!1,this.EMISSIVE=!1,this.EMISSIVEDIRECTUV=0,this.SPECULAR=!1,this.SPECULARDIRECTUV=0,this.BUMP=!1,this.BUMPDIRECTUV=0,this.PARALLAX=!1,this.PARALLAXOCCLUSION=!1,this.SPECULAROVERALPHA=!1,this.CLIPPLANE=!1,this.CLIPPLANE2=!1,this.CLIPPLANE3=!1,this.CLIPPLANE4=!1,this.CLIPPLANE5=!1,this.CLIPPLANE6=!1,this.ALPHATEST=!1,this.DEPTHPREPASS=!1,this.ALPHAFROMDIFFUSE=!1,this.POINTSIZE=!1,this.FOG=!1,this.SPECULARTERM=!1,this.DIFFUSEFRESNEL=!1,this.OPACITYFRESNEL=!1,this.REFLECTIONFRESNEL=!1,this.REFRACTIONFRESNEL=!1,this.EMISSIVEFRESNEL=!1,this.FRESNEL=!1,this.NORMAL=!1,this.TANGENT=!1,this.UV1=!1,this.UV2=!1,this.UV3=!1,this.UV4=!1,this.UV5=!1,this.UV6=!1,this.VERTEXCOLOR=!1,this.VERTEXALPHA=!1,this.NUM_BONE_INFLUENCERS=0,this.BonesPerMesh=0,this.BONETEXTURE=!1,this.BONES_VELOCITY_ENABLED=!1,this.INSTANCES=!1,this.THIN_INSTANCES=!1,this.INSTANCESCOLOR=!1,this.GLOSSINESS=!1,this.ROUGHNESS=!1,this.EMISSIVEASILLUMINATION=!1,this.LINKEMISSIVEWITHDIFFUSE=!1,this.REFLECTIONFRESNELFROMSPECULAR=!1,this.LIGHTMAP=!1,this.LIGHTMAPDIRECTUV=0,this.OBJECTSPACE_NORMALMAP=!1,this.USELIGHTMAPASSHADOWMAP=!1,this.REFLECTIONMAP_3D=!1,this.REFLECTIONMAP_SPHERICAL=!1,this.REFLECTIONMAP_PLANAR=!1,this.REFLECTIONMAP_CUBIC=!1,this.USE_LOCAL_REFLECTIONMAP_CUBIC=!1,this.USE_LOCAL_REFRACTIONMAP_CUBIC=!1,this.REFLECTIONMAP_PROJECTION=!1,this.REFLECTIONMAP_SKYBOX=!1,this.REFLECTIONMAP_EXPLICIT=!1,this.REFLECTIONMAP_EQUIRECTANGULAR=!1,this.REFLECTIONMAP_EQUIRECTANGULAR_FIXED=!1,this.REFLECTIONMAP_MIRROREDEQUIRECTANGULAR_FIXED=!1,this.REFLECTIONMAP_OPPOSITEZ=!1,this.INVERTCUBICMAP=!1,this.LOGARITHMICDEPTH=!1,this.REFRACTION=!1,this.REFRACTIONMAP_3D=!1,this.REFLECTIONOVERALPHA=!1,this.TWOSIDEDLIGHTING=!1,this.SHADOWFLOAT=!1,this.MORPHTARGETS=!1,this.MORPHTARGETS_NORMAL=!1,this.MORPHTARGETS_TANGENT=!1,this.MORPHTARGETS_UV=!1,this.NUM_MORPH_INFLUENCERS=0,this.MORPHTARGETS_TEXTURE=!1,this.NONUNIFORMSCALING=!1,this.PREMULTIPLYALPHA=!1,this.ALPHATEST_AFTERALLALPHACOMPUTATIONS=!1,this.ALPHABLEND=!0,this.PREPASS=!1,this.PREPASS_IRRADIANCE=!1,this.PREPASS_IRRADIANCE_INDEX=-1,this.PREPASS_ALBEDO_SQRT=!1,this.PREPASS_ALBEDO_SQRT_INDEX=-1,this.PREPASS_DEPTH=!1,this.PREPASS_DEPTH_INDEX=-1,this.PREPASS_NORMAL=!1,this.PREPASS_NORMAL_INDEX=-1,this.PREPASS_POSITION=!1,this.PREPASS_POSITION_INDEX=-1,this.PREPASS_VELOCITY=!1,this.PREPASS_VELOCITY_INDEX=-1,this.PREPASS_REFLECTIVITY=!1,this.PREPASS_REFLECTIVITY_INDEX=-1,this.SCENE_MRT_COUNT=0,this.RGBDLIGHTMAP=!1,this.RGBDREFLECTION=!1,this.RGBDREFRACTION=!1,this.IMAGEPROCESSING=!1,this.VIGNETTE=!1,this.VIGNETTEBLENDMODEMULTIPLY=!1,this.VIGNETTEBLENDMODEOPAQUE=!1,this.TONEMAPPING=!1,this.TONEMAPPING_ACES=!1,this.CONTRAST=!1,this.COLORCURVES=!1,this.COLORGRADING=!1,this.COLORGRADING3D=!1,this.SAMPLER3DGREENDEPTH=!1,this.SAMPLER3DBGRMAP=!1,this.DITHER=!1,this.IMAGEPROCESSINGPOSTPROCESS=!1,this.SKIPFINALCOLORCLAMP=!1,this.MULTIVIEW=!1,this.ORDER_INDEPENDENT_TRANSPARENCY=!1,this.ORDER_INDEPENDENT_TRANSPARENCY_16BITS=!1,this.CAMERA_ORTHOGRAPHIC=!1,this.CAMERA_PERSPECTIVE=!1,this.IS_REFLECTION_LINEAR=!1,this.IS_REFRACTION_LINEAR=!1,this.EXPOSURE=!1,this.rebuild()}setReflectionMode(t){let e=["REFLECTIONMAP_CUBIC","REFLECTIONMAP_EXPLICIT","REFLECTIONMAP_PLANAR","REFLECTIONMAP_PROJECTION","REFLECTIONMAP_PROJECTION","REFLECTIONMAP_SKYBOX","REFLECTIONMAP_SPHERICAL","REFLECTIONMAP_EQUIRECTANGULAR","REFLECTIONMAP_EQUIRECTANGULAR_FIXED","REFLECTIONMAP_MIRROREDEQUIRECTANGULAR_FIXED"];for(let i of e)this[i]=i===t}},M=class a extends Pt{get imageProcessingConfiguration(){return this._imageProcessingConfiguration}set imageProcessingConfiguration(t){this._attachImageProcessingConfiguration(t),this._markAllSubMeshesAsTexturesDirty()}_attachImageProcessingConfiguration(t){t!==this._imageProcessingConfiguration&&(this._imageProcessingConfiguration&&this._imageProcessingObserver&&this._imageProcessingConfiguration.onUpdateParameters.remove(this._imageProcessingObserver),t?this._imageProcessingConfiguration=t:this._imageProcessingConfiguration=this.getScene().imageProcessingConfiguration,this._imageProcessingConfiguration&&(this._imageProcessingObserver=this._imageProcessingConfiguration.onUpdateParameters.add(()=>{this._markAllSubMeshesAsImageProcessingDirty()})))}get isPrePassCapable(){return!this.disableDepthWrite}get cameraColorCurvesEnabled(){return this.imageProcessingConfiguration.colorCurvesEnabled}set cameraColorCurvesEnabled(t){this.imageProcessingConfiguration.colorCurvesEnabled=t}get cameraColorGradingEnabled(){return this.imageProcessingConfiguration.colorGradingEnabled}set cameraColorGradingEnabled(t){this.imageProcessingConfiguration.colorGradingEnabled=t}get cameraToneMappingEnabled(){return this._imageProcessingConfiguration.toneMappingEnabled}set cameraToneMappingEnabled(t){this._imageProcessingConfiguration.toneMappingEnabled=t}get cameraExposure(){return this._imageProcessingConfiguration.exposure}set cameraExposure(t){this._imageProcessingConfiguration.exposure=t}get cameraContrast(){return this._imageProcessingConfiguration.contrast}set cameraContrast(t){this._imageProcessingConfiguration.contrast=t}get cameraColorGradingTexture(){return this._imageProcessingConfiguration.colorGradingTexture}set cameraColorGradingTexture(t){this._imageProcessingConfiguration.colorGradingTexture=t}get cameraColorCurves(){return this._imageProcessingConfiguration.colorCurves}set cameraColorCurves(t){this._imageProcessingConfiguration.colorCurves=t}get canRenderToMRT(){return!0}constructor(t,e){super(t,e),this._diffuseTexture=null,this._ambientTexture=null,this._opacityTexture=null,this._reflectionTexture=null,this._emissiveTexture=null,this._specularTexture=null,this._bumpTexture=null,this._lightmapTexture=null,this._refractionTexture=null,this.ambientColor=new re(0,0,0),this.diffuseColor=new re(1,1,1),this.specularColor=new re(1,1,1),this.emissiveColor=new re(0,0,0),this.specularPower=64,this._useAlphaFromDiffuseTexture=!1,this._useEmissiveAsIllumination=!1,this._linkEmissiveWithDiffuse=!1,this._useSpecularOverAlpha=!1,this._useReflectionOverAlpha=!1,this._disableLighting=!1,this._useObjectSpaceNormalMap=!1,this._useParallax=!1,this._useParallaxOcclusion=!1,this.parallaxScaleBias=.05,this._roughness=0,this.indexOfRefraction=.98,this.invertRefractionY=!0,this.alphaCutOff=.4,this._useLightmapAsShadowmap=!1,this._useReflectionFresnelFromSpecular=!1,this._useGlossinessFromSpecularMapAlpha=!1,this._maxSimultaneousLights=4,this._invertNormalMapX=!1,this._invertNormalMapY=!1,this._twoSidedLighting=!1,this._renderTargets=new _t(16),this._worldViewProjectionMatrix=P.Zero(),this._globalAmbientColor=new re(0,0,0),this._cacheHasRenderTargetTextures=!1,this.detailMap=new Se(this),this._attachImageProcessingConfiguration(null),this.prePassConfiguration=new Rt,this.getRenderTargetTextures=()=>(this._renderTargets.reset(),a.ReflectionTextureEnabled&&this._reflectionTexture&&this._reflectionTexture.isRenderTarget&&this._renderTargets.push(this._reflectionTexture),a.RefractionTextureEnabled&&this._refractionTexture&&this._refractionTexture.isRenderTarget&&this._renderTargets.push(this._refractionTexture),this._eventInfo.renderTargets=this._renderTargets,this._callbackPluginEventFillRenderTargetTextures(this._eventInfo),this._renderTargets)}get hasRenderTargetTextures(){return a.ReflectionTextureEnabled&&this._reflectionTexture&&this._reflectionTexture.isRenderTarget||a.RefractionTextureEnabled&&this._refractionTexture&&this._refractionTexture.isRenderTarget?!0:this._cacheHasRenderTargetTextures}getClassName(){return"StandardMaterial"}get useLogarithmicDepth(){return this._useLogarithmicDepth}set useLogarithmicDepth(t){this._useLogarithmicDepth=t&&this.getScene().getEngine().getCaps().fragmentDepthSupported,this._markAllSubMeshesAsMiscDirty()}needAlphaBlending(){return this._disableAlphaBlending?!1:this.alpha<1||this._opacityTexture!=null||this._shouldUseAlphaFromDiffuseTexture()||this._opacityFresnelParameters&&this._opacityFresnelParameters.isEnabled}needAlphaTesting(){return this._forceAlphaTest?!0:this._hasAlphaChannel()&&(this._transparencyMode==null||this._transparencyMode===tt.MATERIAL_ALPHATEST)}_shouldUseAlphaFromDiffuseTexture(){return this._diffuseTexture!=null&&this._diffuseTexture.hasAlpha&&this._useAlphaFromDiffuseTexture&&this._transparencyMode!==tt.MATERIAL_OPAQUE}_hasAlphaChannel(){return this._diffuseTexture!=null&&this._diffuseTexture.hasAlpha||this._opacityTexture!=null}getAlphaTestTexture(){return this._diffuseTexture}isReadyForSubMesh(t,e,i=!1){if(this._uniformBufferLayoutBuilt||this.buildUniformLayout(),e.effect&&this.isFrozen&&e.effect._wasPreviouslyReady&&e.effect._wasPreviouslyUsingInstances===i)return!0;e.materialDefines||(this._callbackPluginEventGeneric(fe.GetDefineNames,this._eventInfo),e.materialDefines=new Kt(this._eventInfo.defineNames));let r=this.getScene(),s=e.materialDefines;if(this._isReadyForSubMesh(e))return!0;let n=r.getEngine();s._needNormals=b.PrepareDefinesForLights(r,t,s,!0,this._maxSimultaneousLights,this._disableLighting),b.PrepareDefinesForMultiview(r,s);let o=this.needAlphaBlendingForMesh(t)&&this.getScene().useOrderIndependentTransparency;if(b.PrepareDefinesForPrePass(r,s,this.canRenderToMRT&&!o),b.PrepareDefinesForOIT(r,s,o),s._areTexturesDirty){this._eventInfo.hasRenderTargetTextures=!1,this._callbackPluginEventHasRenderTargetTextures(this._eventInfo),this._cacheHasRenderTargetTextures=this._eventInfo.hasRenderTargetTextures,s._needUVs=!1;for(let l=1;l<=6;++l)s["MAINUV"+l]=!1;if(r.texturesEnabled){if(s.DIFFUSEDIRECTUV=0,s.BUMPDIRECTUV=0,s.AMBIENTDIRECTUV=0,s.OPACITYDIRECTUV=0,s.EMISSIVEDIRECTUV=0,s.SPECULARDIRECTUV=0,s.LIGHTMAPDIRECTUV=0,this._diffuseTexture&&a.DiffuseTextureEnabled)if(this._diffuseTexture.isReadyOrNotBlocking())b.PrepareDefinesForMergedUV(this._diffuseTexture,s,"DIFFUSE");else return!1;else s.DIFFUSE=!1;if(this._ambientTexture&&a.AmbientTextureEnabled)if(this._ambientTexture.isReadyOrNotBlocking())b.PrepareDefinesForMergedUV(this._ambientTexture,s,"AMBIENT");else return!1;else s.AMBIENT=!1;if(this._opacityTexture&&a.OpacityTextureEnabled)if(this._opacityTexture.isReadyOrNotBlocking())b.PrepareDefinesForMergedUV(this._opacityTexture,s,"OPACITY"),s.OPACITYRGB=this._opacityTexture.getAlphaFromRGB;else return!1;else s.OPACITY=!1;if(this._reflectionTexture&&a.ReflectionTextureEnabled)if(this._reflectionTexture.isReadyOrNotBlocking()){switch(s._needNormals=!0,s.REFLECTION=!0,s.ROUGHNESS=this._roughness>0,s.REFLECTIONOVERALPHA=this._useReflectionOverAlpha,s.INVERTCUBICMAP=this._reflectionTexture.coordinatesMode===T.INVCUBIC_MODE,s.REFLECTIONMAP_3D=this._reflectionTexture.isCube,s.REFLECTIONMAP_OPPOSITEZ=s.REFLECTIONMAP_3D&&this.getScene().useRightHandedSystem?!this._reflectionTexture.invertZ:this._reflectionTexture.invertZ,s.RGBDREFLECTION=this._reflectionTexture.isRGBD,this._reflectionTexture.coordinatesMode){case T.EXPLICIT_MODE:s.setReflectionMode("REFLECTIONMAP_EXPLICIT");break;case T.PLANAR_MODE:s.setReflectionMode("REFLECTIONMAP_PLANAR");break;case T.PROJECTION_MODE:s.setReflectionMode("REFLECTIONMAP_PROJECTION");break;case T.SKYBOX_MODE:s.setReflectionMode("REFLECTIONMAP_SKYBOX");break;case T.SPHERICAL_MODE:s.setReflectionMode("REFLECTIONMAP_SPHERICAL");break;case T.EQUIRECTANGULAR_MODE:s.setReflectionMode("REFLECTIONMAP_EQUIRECTANGULAR");break;case T.FIXED_EQUIRECTANGULAR_MODE:s.setReflectionMode("REFLECTIONMAP_EQUIRECTANGULAR_FIXED");break;case T.FIXED_EQUIRECTANGULAR_MIRRORED_MODE:s.setReflectionMode("REFLECTIONMAP_MIRROREDEQUIRECTANGULAR_FIXED");break;case T.CUBIC_MODE:case T.INVCUBIC_MODE:default:s.setReflectionMode("REFLECTIONMAP_CUBIC");break}s.USE_LOCAL_REFLECTIONMAP_CUBIC=!!this._reflectionTexture.boundingBoxSize}else return!1;else s.REFLECTION=!1,s.REFLECTIONMAP_OPPOSITEZ=!1;if(this._emissiveTexture&&a.EmissiveTextureEnabled)if(this._emissiveTexture.isReadyOrNotBlocking())b.PrepareDefinesForMergedUV(this._emissiveTexture,s,"EMISSIVE");else return!1;else s.EMISSIVE=!1;if(this._lightmapTexture&&a.LightmapTextureEnabled)if(this._lightmapTexture.isReadyOrNotBlocking())b.PrepareDefinesForMergedUV(this._lightmapTexture,s,"LIGHTMAP"),s.USELIGHTMAPASSHADOWMAP=this._useLightmapAsShadowmap,s.RGBDLIGHTMAP=this._lightmapTexture.isRGBD;else return!1;else s.LIGHTMAP=!1;if(this._specularTexture&&a.SpecularTextureEnabled)if(this._specularTexture.isReadyOrNotBlocking())b.PrepareDefinesForMergedUV(this._specularTexture,s,"SPECULAR"),s.GLOSSINESS=this._useGlossinessFromSpecularMapAlpha;else return!1;else s.SPECULAR=!1;if(r.getEngine().getCaps().standardDerivatives&&this._bumpTexture&&a.BumpTextureEnabled){if(this._bumpTexture.isReady())b.PrepareDefinesForMergedUV(this._bumpTexture,s,"BUMP"),s.PARALLAX=this._useParallax,s.PARALLAXOCCLUSION=this._useParallaxOcclusion;else return!1;s.OBJECTSPACE_NORMALMAP=this._useObjectSpaceNormalMap}else s.BUMP=!1,s.PARALLAX=!1,s.PARALLAXOCCLUSION=!1;if(this._refractionTexture&&a.RefractionTextureEnabled)if(this._refractionTexture.isReadyOrNotBlocking())s._needUVs=!0,s.REFRACTION=!0,s.REFRACTIONMAP_3D=this._refractionTexture.isCube,s.RGBDREFRACTION=this._refractionTexture.isRGBD,s.USE_LOCAL_REFRACTIONMAP_CUBIC=!!this._refractionTexture.boundingBoxSize;else return!1;else s.REFRACTION=!1;s.TWOSIDEDLIGHTING=!this._backFaceCulling&&this._twoSidedLighting}else s.DIFFUSE=!1,s.AMBIENT=!1,s.OPACITY=!1,s.REFLECTION=!1,s.EMISSIVE=!1,s.LIGHTMAP=!1,s.BUMP=!1,s.REFRACTION=!1;s.ALPHAFROMDIFFUSE=this._shouldUseAlphaFromDiffuseTexture(),s.EMISSIVEASILLUMINATION=this._useEmissiveAsIllumination,s.LINKEMISSIVEWITHDIFFUSE=this._linkEmissiveWithDiffuse,s.SPECULAROVERALPHA=this._useSpecularOverAlpha,s.PREMULTIPLYALPHA=this.alphaMode===7||this.alphaMode===8,s.ALPHATEST_AFTERALLALPHACOMPUTATIONS=this.transparencyMode!==null,s.ALPHABLEND=this.transparencyMode===null||this.needAlphaBlendingForMesh(t)}if(this._eventInfo.isReadyForSubMesh=!0,this._eventInfo.defines=s,this._eventInfo.subMesh=e,this._callbackPluginEventIsReadyForSubMesh(this._eventInfo),!this._eventInfo.isReadyForSubMesh)return!1;if(s._areImageProcessingDirty&&this._imageProcessingConfiguration){if(!this._imageProcessingConfiguration.isReady())return!1;this._imageProcessingConfiguration.prepareDefines(s),s.IS_REFLECTION_LINEAR=this.reflectionTexture!=null&&!this.reflectionTexture.gammaSpace,s.IS_REFRACTION_LINEAR=this.refractionTexture!=null&&!this.refractionTexture.gammaSpace}s._areFresnelDirty&&(a.FresnelEnabled?(this._diffuseFresnelParameters||this._opacityFresnelParameters||this._emissiveFresnelParameters||this._refractionFresnelParameters||this._reflectionFresnelParameters)&&(s.DIFFUSEFRESNEL=this._diffuseFresnelParameters&&this._diffuseFresnelParameters.isEnabled,s.OPACITYFRESNEL=this._opacityFresnelParameters&&this._opacityFresnelParameters.isEnabled,s.REFLECTIONFRESNEL=this._reflectionFresnelParameters&&this._reflectionFresnelParameters.isEnabled,s.REFLECTIONFRESNELFROMSPECULAR=this._useReflectionFresnelFromSpecular,s.REFRACTIONFRESNEL=this._refractionFresnelParameters&&this._refractionFresnelParameters.isEnabled,s.EMISSIVEFRESNEL=this._emissiveFresnelParameters&&this._emissiveFresnelParameters.isEnabled,s._needNormals=!0,s.FRESNEL=!0):s.FRESNEL=!1),b.PrepareDefinesForMisc(t,r,this._useLogarithmicDepth,this.pointsCloud,this.fogEnabled,this._shouldTurnAlphaTestOn(t)||this._forceAlphaTest,s),b.PrepareDefinesForFrameBoundValues(r,n,this,s,i,null,e.getRenderingMesh().hasThinInstances),this._eventInfo.defines=s,this._eventInfo.mesh=t,this._callbackPluginEventPrepareDefinesBeforeAttributes(this._eventInfo),b.PrepareDefinesForAttributes(t,s,!0,!0,!0),this._callbackPluginEventPrepareDefines(this._eventInfo);let d=!1;if(s.isDirty){let l=s._areLightsDisposed;s.markAsProcessed();let h=new ut;s.REFLECTION&&h.addFallback(0,"REFLECTION"),s.SPECULAR&&h.addFallback(0,"SPECULAR"),s.BUMP&&h.addFallback(0,"BUMP"),s.PARALLAX&&h.addFallback(1,"PARALLAX"),s.PARALLAXOCCLUSION&&h.addFallback(0,"PARALLAXOCCLUSION"),s.SPECULAROVERALPHA&&h.addFallback(0,"SPECULAROVERALPHA"),s.FOG&&h.addFallback(1,"FOG"),s.POINTSIZE&&h.addFallback(0,"POINTSIZE"),s.LOGARITHMICDEPTH&&h.addFallback(0,"LOGARITHMICDEPTH"),b.HandleFallbacksForShadows(s,h,this._maxSimultaneousLights),s.SPECULARTERM&&h.addFallback(0,"SPECULARTERM"),s.DIFFUSEFRESNEL&&h.addFallback(1,"DIFFUSEFRESNEL"),s.OPACITYFRESNEL&&h.addFallback(2,"OPACITYFRESNEL"),s.REFLECTIONFRESNEL&&h.addFallback(3,"REFLECTIONFRESNEL"),s.EMISSIVEFRESNEL&&h.addFallback(4,"EMISSIVEFRESNEL"),s.FRESNEL&&h.addFallback(4,"FRESNEL"),s.MULTIVIEW&&h.addFallback(0,"MULTIVIEW");let c=[y.PositionKind];s.NORMAL&&c.push(y.NormalKind),s.TANGENT&&c.push(y.TangentKind);for(let L=1;L<=6;++L)s["UV"+L]&&c.push(`uv${L===1?"":L}`);s.VERTEXCOLOR&&c.push(y.ColorKind),b.PrepareAttributesForBones(c,t,s,h),b.PrepareAttributesForInstances(c,s),b.PrepareAttributesForMorphTargets(c,t,s),b.PrepareAttributesForBakedVertexAnimation(c,t,s);let u="default",p=["world","view","viewProjection","vEyePosition","vLightsType","vAmbientColor","vDiffuseColor","vSpecularColor","vEmissiveColor","visibility","vFogInfos","vFogColor","pointSize","vDiffuseInfos","vAmbientInfos","vOpacityInfos","vReflectionInfos","vEmissiveInfos","vSpecularInfos","vBumpInfos","vLightmapInfos","vRefractionInfos","mBones","diffuseMatrix","ambientMatrix","opacityMatrix","reflectionMatrix","emissiveMatrix","specularMatrix","bumpMatrix","normalMatrix","lightmapMatrix","refractionMatrix","diffuseLeftColor","diffuseRightColor","opacityParts","reflectionLeftColor","reflectionRightColor","emissiveLeftColor","emissiveRightColor","refractionLeftColor","refractionRightColor","vReflectionPosition","vReflectionSize","vRefractionPosition","vRefractionSize","logarithmicDepthConstant","vTangentSpaceParams","alphaCutOff","boneTextureWidth","morphTargetTextureInfo","morphTargetTextureIndices"],_=["diffuseSampler","ambientSampler","opacitySampler","reflectionCubeSampler","reflection2DSampler","emissiveSampler","specularSampler","bumpSampler","lightmapSampler","refractionCubeSampler","refraction2DSampler","boneSampler","morphTargets","oitDepthSampler","oitFrontColorSampler"],v=["Material","Scene","Mesh"];this._eventInfo.fallbacks=h,this._eventInfo.fallbackRank=0,this._eventInfo.defines=s,this._eventInfo.uniforms=p,this._eventInfo.attributes=c,this._eventInfo.samplers=_,this._eventInfo.uniformBuffersNames=v,this._eventInfo.customCode=void 0,this._eventInfo.mesh=t,this._callbackPluginEventGeneric(fe.PrepareEffect,this._eventInfo),Rt.AddUniforms(p),gt&&(gt.PrepareUniforms(p,s),gt.PrepareSamplers(_,s)),b.PrepareUniformsAndSamplersList({uniformsNames:p,uniformBuffersNames:v,samplers:_,defines:s,maxSimultaneousLights:this._maxSimultaneousLights}),Je(p);let m={};this.customShaderNameResolve&&(u=this.customShaderNameResolve(u,p,v,_,s,c,m));let A=s.toString(),S=e.effect,C=r.getEngine().createEffect(u,{attributes:c,uniformsNames:p,uniformBuffersNames:v,samplers:_,defines:A,fallbacks:h,onCompiled:this.onCompiled,onError:this.onError,indexParameters:{maxSimultaneousLights:this._maxSimultaneousLights,maxSimultaneousMorphTargets:s.NUM_MORPH_INFLUENCERS},processFinalCode:m.processFinalCode,processCodeAfterIncludes:this._eventInfo.customCode,multiTarget:s.PREPASS},n);if(this._eventInfo.customCode=void 0,C)if(this._onEffectCreatedObservable&&(Bt.effect=C,Bt.subMesh=e,this._onEffectCreatedObservable.notifyObservers(Bt)),this.allowShaderHotSwapping&&S&&!C.isReady()){if(C=S,s.markAsUnprocessed(),d=this.isFrozen,l)return s._areLightsDisposed=!0,!1}else r.resetCachedMaterial(),e.setEffect(C,s,this._materialContext)}return!e.effect||!e.effect.isReady()?!1:(s._renderId=r.getRenderId(),e.effect._wasPreviouslyReady=!d,e.effect._wasPreviouslyUsingInstances=i,this._checkScenePerformancePriority(),!0)}buildUniformLayout(){let t=this._uniformBuffer;t.addUniform("diffuseLeftColor",4),t.addUniform("diffuseRightColor",4),t.addUniform("opacityParts",4),t.addUniform("reflectionLeftColor",4),t.addUniform("reflectionRightColor",4),t.addUniform("refractionLeftColor",4),t.addUniform("refractionRightColor",4),t.addUniform("emissiveLeftColor",4),t.addUniform("emissiveRightColor",4),t.addUniform("vDiffuseInfos",2),t.addUniform("vAmbientInfos",2),t.addUniform("vOpacityInfos",2),t.addUniform("vReflectionInfos",2),t.addUniform("vReflectionPosition",3),t.addUniform("vReflectionSize",3),t.addUniform("vEmissiveInfos",2),t.addUniform("vLightmapInfos",2),t.addUniform("vSpecularInfos",2),t.addUniform("vBumpInfos",3),t.addUniform("diffuseMatrix",16),t.addUniform("ambientMatrix",16),t.addUniform("opacityMatrix",16),t.addUniform("reflectionMatrix",16),t.addUniform("emissiveMatrix",16),t.addUniform("lightmapMatrix",16),t.addUniform("specularMatrix",16),t.addUniform("bumpMatrix",16),t.addUniform("vTangentSpaceParams",2),t.addUniform("pointSize",1),t.addUniform("alphaCutOff",1),t.addUniform("refractionMatrix",16),t.addUniform("vRefractionInfos",4),t.addUniform("vRefractionPosition",3),t.addUniform("vRefractionSize",3),t.addUniform("vSpecularColor",4),t.addUniform("vEmissiveColor",3),t.addUniform("vDiffuseColor",4),t.addUniform("vAmbientColor",3),super.buildUniformLayout()}bindForSubMesh(t,e,i){var r;let s=this.getScene(),n=i.materialDefines;if(!n)return;let o=i.effect;if(!o)return;this._activeEffect=o,e.getMeshUniformBuffer().bindToEffect(o,"Mesh"),e.transferToEffect(t),this._uniformBuffer.bindToEffect(o,"Material"),this.prePassConfiguration.bindForSubMesh(this._activeEffect,s,e,t,this.isFrozen),this._eventInfo.subMesh=i,this._callbackPluginEventHardBindForSubMesh(this._eventInfo),n.OBJECTSPACE_NORMALMAP&&(t.toNormalMatrix(this._normalMatrix),this.bindOnlyNormalMatrix(this._normalMatrix));let d=o._forceRebindOnNextCall||this._mustRebind(s,o,e.visibility);b.BindBonesParameters(e,o);let l=this._uniformBuffer;if(d){if(this.bindViewProjection(o),!l.useUbo||!this.isFrozen||!l.isSync||o._forceRebindOnNextCall){if(a.FresnelEnabled&&n.FRESNEL&&(this.diffuseFresnelParameters&&this.diffuseFresnelParameters.isEnabled&&(l.updateColor4("diffuseLeftColor",this.diffuseFresnelParameters.leftColor,this.diffuseFresnelParameters.power),l.updateColor4("diffuseRightColor",this.diffuseFresnelParameters.rightColor,this.diffuseFresnelParameters.bias)),this.opacityFresnelParameters&&this.opacityFresnelParameters.isEnabled&&l.updateColor4("opacityParts",new re(this.opacityFresnelParameters.leftColor.toLuminance(),this.opacityFresnelParameters.rightColor.toLuminance(),this.opacityFresnelParameters.bias),this.opacityFresnelParameters.power),this.reflectionFresnelParameters&&this.reflectionFresnelParameters.isEnabled&&(l.updateColor4("reflectionLeftColor",this.reflectionFresnelParameters.leftColor,this.reflectionFresnelParameters.power),l.updateColor4("reflectionRightColor",this.reflectionFresnelParameters.rightColor,this.reflectionFresnelParameters.bias)),this.refractionFresnelParameters&&this.refractionFresnelParameters.isEnabled&&(l.updateColor4("refractionLeftColor",this.refractionFresnelParameters.leftColor,this.refractionFresnelParameters.power),l.updateColor4("refractionRightColor",this.refractionFresnelParameters.rightColor,this.refractionFresnelParameters.bias)),this.emissiveFresnelParameters&&this.emissiveFresnelParameters.isEnabled&&(l.updateColor4("emissiveLeftColor",this.emissiveFresnelParameters.leftColor,this.emissiveFresnelParameters.power),l.updateColor4("emissiveRightColor",this.emissiveFresnelParameters.rightColor,this.emissiveFresnelParameters.bias))),s.texturesEnabled){if(this._diffuseTexture&&a.DiffuseTextureEnabled&&(l.updateFloat2("vDiffuseInfos",this._diffuseTexture.coordinatesIndex,this._diffuseTexture.level),b.BindTextureMatrix(this._diffuseTexture,l,"diffuse")),this._ambientTexture&&a.AmbientTextureEnabled&&(l.updateFloat2("vAmbientInfos",this._ambientTexture.coordinatesIndex,this._ambientTexture.level),b.BindTextureMatrix(this._ambientTexture,l,"ambient")),this._opacityTexture&&a.OpacityTextureEnabled&&(l.updateFloat2("vOpacityInfos",this._opacityTexture.coordinatesIndex,this._opacityTexture.level),b.BindTextureMatrix(this._opacityTexture,l,"opacity")),this._hasAlphaChannel()&&l.updateFloat("alphaCutOff",this.alphaCutOff),this._reflectionTexture&&a.ReflectionTextureEnabled&&(l.updateFloat2("vReflectionInfos",this._reflectionTexture.level,this.roughness),l.updateMatrix("reflectionMatrix",this._reflectionTexture.getReflectionTextureMatrix()),this._reflectionTexture.boundingBoxSize)){let h=this._reflectionTexture;l.updateVector3("vReflectionPosition",h.boundingBoxPosition),l.updateVector3("vReflectionSize",h.boundingBoxSize)}if(this._emissiveTexture&&a.EmissiveTextureEnabled&&(l.updateFloat2("vEmissiveInfos",this._emissiveTexture.coordinatesIndex,this._emissiveTexture.level),b.BindTextureMatrix(this._emissiveTexture,l,"emissive")),this._lightmapTexture&&a.LightmapTextureEnabled&&(l.updateFloat2("vLightmapInfos",this._lightmapTexture.coordinatesIndex,this._lightmapTexture.level),b.BindTextureMatrix(this._lightmapTexture,l,"lightmap")),this._specularTexture&&a.SpecularTextureEnabled&&(l.updateFloat2("vSpecularInfos",this._specularTexture.coordinatesIndex,this._specularTexture.level),b.BindTextureMatrix(this._specularTexture,l,"specular")),this._bumpTexture&&s.getEngine().getCaps().standardDerivatives&&a.BumpTextureEnabled&&(l.updateFloat3("vBumpInfos",this._bumpTexture.coordinatesIndex,1/this._bumpTexture.level,this.parallaxScaleBias),b.BindTextureMatrix(this._bumpTexture,l,"bump"),s._mirroredCameraPosition?l.updateFloat2("vTangentSpaceParams",this._invertNormalMapX?1:-1,this._invertNormalMapY?1:-1):l.updateFloat2("vTangentSpaceParams",this._invertNormalMapX?-1:1,this._invertNormalMapY?-1:1)),this._refractionTexture&&a.RefractionTextureEnabled){let h=1;if(this._refractionTexture.isCube||(l.updateMatrix("refractionMatrix",this._refractionTexture.getReflectionTextureMatrix()),this._refractionTexture.depth&&(h=this._refractionTexture.depth)),l.updateFloat4("vRefractionInfos",this._refractionTexture.level,this.indexOfRefraction,h,this.invertRefractionY?-1:1),this._refractionTexture.boundingBoxSize){let c=this._refractionTexture;l.updateVector3("vRefractionPosition",c.boundingBoxPosition),l.updateVector3("vRefractionSize",c.boundingBoxSize)}}}this.pointsCloud&&l.updateFloat("pointSize",this.pointSize),n.SPECULARTERM&&l.updateColor4("vSpecularColor",this.specularColor,this.specularPower),l.updateColor3("vEmissiveColor",a.EmissiveTextureEnabled?this.emissiveColor:re.BlackReadOnly),l.updateColor4("vDiffuseColor",this.diffuseColor,this.alpha),s.ambientColor.multiplyToRef(this.ambientColor,this._globalAmbientColor),l.updateColor3("vAmbientColor",this._globalAmbientColor)}s.texturesEnabled&&(this._diffuseTexture&&a.DiffuseTextureEnabled&&o.setTexture("diffuseSampler",this._diffuseTexture),this._ambientTexture&&a.AmbientTextureEnabled&&o.setTexture("ambientSampler",this._ambientTexture),this._opacityTexture&&a.OpacityTextureEnabled&&o.setTexture("opacitySampler",this._opacityTexture),this._reflectionTexture&&a.ReflectionTextureEnabled&&(this._reflectionTexture.isCube?o.setTexture("reflectionCubeSampler",this._reflectionTexture):o.setTexture("reflection2DSampler",this._reflectionTexture)),this._emissiveTexture&&a.EmissiveTextureEnabled&&o.setTexture("emissiveSampler",this._emissiveTexture),this._lightmapTexture&&a.LightmapTextureEnabled&&o.setTexture("lightmapSampler",this._lightmapTexture),this._specularTexture&&a.SpecularTextureEnabled&&o.setTexture("specularSampler",this._specularTexture),this._bumpTexture&&s.getEngine().getCaps().standardDerivatives&&a.BumpTextureEnabled&&o.setTexture("bumpSampler",this._bumpTexture),this._refractionTexture&&a.RefractionTextureEnabled&&(this._refractionTexture.isCube?o.setTexture("refractionCubeSampler",this._refractionTexture):o.setTexture("refraction2DSampler",this._refractionTexture))),this.getScene().useOrderIndependentTransparency&&this.needAlphaBlendingForMesh(e)&&this.getScene().depthPeelingRenderer.bind(o),this._eventInfo.subMesh=i,this._callbackPluginEventBindForSubMesh(this._eventInfo),et(o,this,s),this.bindEyePosition(o)}else s.getEngine()._features.needToAlwaysBindUniformBuffers&&(this._needToBindSceneUbo=!0);(d||!this.isFrozen)&&(s.lightsEnabled&&!this._disableLighting&&b.BindLights(s,e,o,n,this._maxSimultaneousLights),(s.fogEnabled&&e.applyFog&&s.fogMode!==$e.FOGMODE_NONE||this._reflectionTexture||this._refractionTexture||e.receiveShadows||n.PREPASS)&&this.bindView(o),b.BindFogParameters(s,e,o),n.NUM_MORPH_INFLUENCERS&&b.BindMorphTargetParameters(e,o),n.BAKED_VERTEX_ANIMATION_TEXTURE&&((r=e.bakedVertexAnimationManager)===null||r===void 0||r.bind(o,n.INSTANCES)),this.useLogarithmicDepth&&b.BindLogDepth(n,o,s),this._imageProcessingConfiguration&&!this._imageProcessingConfiguration.applyByPostProcess&&this._imageProcessingConfiguration.bind(this._activeEffect)),this._afterBind(e,this._activeEffect),l.update()}getAnimatables(){let t=super.getAnimatables();return this._diffuseTexture&&this._diffuseTexture.animations&&this._diffuseTexture.animations.length>0&&t.push(this._diffuseTexture),this._ambientTexture&&this._ambientTexture.animations&&this._ambientTexture.animations.length>0&&t.push(this._ambientTexture),this._opacityTexture&&this._opacityTexture.animations&&this._opacityTexture.animations.length>0&&t.push(this._opacityTexture),this._reflectionTexture&&this._reflectionTexture.animations&&this._reflectionTexture.animations.length>0&&t.push(this._reflectionTexture),this._emissiveTexture&&this._emissiveTexture.animations&&this._emissiveTexture.animations.length>0&&t.push(this._emissiveTexture),this._specularTexture&&this._specularTexture.animations&&this._specularTexture.animations.length>0&&t.push(this._specularTexture),this._bumpTexture&&this._bumpTexture.animations&&this._bumpTexture.animations.length>0&&t.push(this._bumpTexture),this._lightmapTexture&&this._lightmapTexture.animations&&this._lightmapTexture.animations.length>0&&t.push(this._lightmapTexture),this._refractionTexture&&this._refractionTexture.animations&&this._refractionTexture.animations.length>0&&t.push(this._refractionTexture),t}getActiveTextures(){let t=super.getActiveTextures();return this._diffuseTexture&&t.push(this._diffuseTexture),this._ambientTexture&&t.push(this._ambientTexture),this._opacityTexture&&t.push(this._opacityTexture),this._reflectionTexture&&t.push(this._reflectionTexture),this._emissiveTexture&&t.push(this._emissiveTexture),this._specularTexture&&t.push(this._specularTexture),this._bumpTexture&&t.push(this._bumpTexture),this._lightmapTexture&&t.push(this._lightmapTexture),this._refractionTexture&&t.push(this._refractionTexture),t}hasTexture(t){return!!(super.hasTexture(t)||this._diffuseTexture===t||this._ambientTexture===t||this._opacityTexture===t||this._reflectionTexture===t||this._emissiveTexture===t||this._specularTexture===t||this._bumpTexture===t||this._lightmapTexture===t||this._refractionTexture===t)}dispose(t,e){var i,r,s,n,o,d,l,h,c;e&&((i=this._diffuseTexture)===null||i===void 0||i.dispose(),(r=this._ambientTexture)===null||r===void 0||r.dispose(),(s=this._opacityTexture)===null||s===void 0||s.dispose(),(n=this._reflectionTexture)===null||n===void 0||n.dispose(),(o=this._emissiveTexture)===null||o===void 0||o.dispose(),(d=this._specularTexture)===null||d===void 0||d.dispose(),(l=this._bumpTexture)===null||l===void 0||l.dispose(),(h=this._lightmapTexture)===null||h===void 0||h.dispose(),(c=this._refractionTexture)===null||c===void 0||c.dispose()),this._imageProcessingConfiguration&&this._imageProcessingObserver&&this._imageProcessingConfiguration.onUpdateParameters.remove(this._imageProcessingObserver),super.dispose(t,e)}clone(t){let e=H.Clone(()=>new a(t,this.getScene()),this);return e.name=t,e.id=t,this.stencil.copyTo(e.stencil),e}static Parse(t,e,i){let r=H.Parse(()=>new a(t.name,e),t,e,i);return t.stencil&&r.stencil.parse(t.stencil,e,i),r}static get DiffuseTextureEnabled(){return X.DiffuseTextureEnabled}static set DiffuseTextureEnabled(t){X.DiffuseTextureEnabled=t}static get DetailTextureEnabled(){return X.DetailTextureEnabled}static set DetailTextureEnabled(t){X.DetailTextureEnabled=t}static get AmbientTextureEnabled(){return X.AmbientTextureEnabled}static set AmbientTextureEnabled(t){X.AmbientTextureEnabled=t}static get OpacityTextureEnabled(){return X.OpacityTextureEnabled}static set OpacityTextureEnabled(t){X.OpacityTextureEnabled=t}static get ReflectionTextureEnabled(){return X.ReflectionTextureEnabled}static set ReflectionTextureEnabled(t){X.ReflectionTextureEnabled=t}static get EmissiveTextureEnabled(){return X.EmissiveTextureEnabled}static set EmissiveTextureEnabled(t){X.EmissiveTextureEnabled=t}static get SpecularTextureEnabled(){return X.SpecularTextureEnabled}static set SpecularTextureEnabled(t){X.SpecularTextureEnabled=t}static get BumpTextureEnabled(){return X.BumpTextureEnabled}static set BumpTextureEnabled(t){X.BumpTextureEnabled=t}static get LightmapTextureEnabled(){return X.LightmapTextureEnabled}static set LightmapTextureEnabled(t){X.LightmapTextureEnabled=t}static get RefractionTextureEnabled(){return X.RefractionTextureEnabled}static set RefractionTextureEnabled(t){X.RefractionTextureEnabled=t}static get ColorGradingTextureEnabled(){return X.ColorGradingTextureEnabled}static set ColorGradingTextureEnabled(t){X.ColorGradingTextureEnabled=t}static get FresnelEnabled(){return X.FresnelEnabled}static set FresnelEnabled(t){X.FresnelEnabled=t}};f([ne("diffuseTexture")],M.prototype,"_diffuseTexture",void 0);f([O("_markAllSubMeshesAsTexturesAndMiscDirty")],M.prototype,"diffuseTexture",void 0);f([ne("ambientTexture")],M.prototype,"_ambientTexture",void 0);f([O("_markAllSubMeshesAsTexturesDirty")],M.prototype,"ambientTexture",void 0);f([ne("opacityTexture")],M.prototype,"_opacityTexture",void 0);f([O("_markAllSubMeshesAsTexturesAndMiscDirty")],M.prototype,"opacityTexture",void 0);f([ne("reflectionTexture")],M.prototype,"_reflectionTexture",void 0);f([O("_markAllSubMeshesAsTexturesDirty")],M.prototype,"reflectionTexture",void 0);f([ne("emissiveTexture")],M.prototype,"_emissiveTexture",void 0);f([O("_markAllSubMeshesAsTexturesDirty")],M.prototype,"emissiveTexture",void 0);f([ne("specularTexture")],M.prototype,"_specularTexture",void 0);f([O("_markAllSubMeshesAsTexturesDirty")],M.prototype,"specularTexture",void 0);f([ne("bumpTexture")],M.prototype,"_bumpTexture",void 0);f([O("_markAllSubMeshesAsTexturesDirty")],M.prototype,"bumpTexture",void 0);f([ne("lightmapTexture")],M.prototype,"_lightmapTexture",void 0);f([O("_markAllSubMeshesAsTexturesDirty")],M.prototype,"lightmapTexture",void 0);f([ne("refractionTexture")],M.prototype,"_refractionTexture",void 0);f([O("_markAllSubMeshesAsTexturesDirty")],M.prototype,"refractionTexture",void 0);f([Ae("ambient")],M.prototype,"ambientColor",void 0);f([Ae("diffuse")],M.prototype,"diffuseColor",void 0);f([Ae("specular")],M.prototype,"specularColor",void 0);f([Ae("emissive")],M.prototype,"emissiveColor",void 0);f([g()],M.prototype,"specularPower",void 0);f([g("useAlphaFromDiffuseTexture")],M.prototype,"_useAlphaFromDiffuseTexture",void 0);f([O("_markAllSubMeshesAsTexturesAndMiscDirty")],M.prototype,"useAlphaFromDiffuseTexture",void 0);f([g("useEmissiveAsIllumination")],M.prototype,"_useEmissiveAsIllumination",void 0);f([O("_markAllSubMeshesAsTexturesDirty")],M.prototype,"useEmissiveAsIllumination",void 0);f([g("linkEmissiveWithDiffuse")],M.prototype,"_linkEmissiveWithDiffuse",void 0);f([O("_markAllSubMeshesAsTexturesDirty")],M.prototype,"linkEmissiveWithDiffuse",void 0);f([g("useSpecularOverAlpha")],M.prototype,"_useSpecularOverAlpha",void 0);f([O("_markAllSubMeshesAsTexturesDirty")],M.prototype,"useSpecularOverAlpha",void 0);f([g("useReflectionOverAlpha")],M.prototype,"_useReflectionOverAlpha",void 0);f([O("_markAllSubMeshesAsTexturesDirty")],M.prototype,"useReflectionOverAlpha",void 0);f([g("disableLighting")],M.prototype,"_disableLighting",void 0);f([O("_markAllSubMeshesAsLightsDirty")],M.prototype,"disableLighting",void 0);f([g("useObjectSpaceNormalMap")],M.prototype,"_useObjectSpaceNormalMap",void 0);f([O("_markAllSubMeshesAsTexturesDirty")],M.prototype,"useObjectSpaceNormalMap",void 0);f([g("useParallax")],M.prototype,"_useParallax",void 0);f([O("_markAllSubMeshesAsTexturesDirty")],M.prototype,"useParallax",void 0);f([g("useParallaxOcclusion")],M.prototype,"_useParallaxOcclusion",void 0);f([O("_markAllSubMeshesAsTexturesDirty")],M.prototype,"useParallaxOcclusion",void 0);f([g()],M.prototype,"parallaxScaleBias",void 0);f([g("roughness")],M.prototype,"_roughness",void 0);f([O("_markAllSubMeshesAsTexturesDirty")],M.prototype,"roughness",void 0);f([g()],M.prototype,"indexOfRefraction",void 0);f([g()],M.prototype,"invertRefractionY",void 0);f([g()],M.prototype,"alphaCutOff",void 0);f([g("useLightmapAsShadowmap")],M.prototype,"_useLightmapAsShadowmap",void 0);f([O("_markAllSubMeshesAsTexturesDirty")],M.prototype,"useLightmapAsShadowmap",void 0);f([Be("diffuseFresnelParameters")],M.prototype,"_diffuseFresnelParameters",void 0);f([O("_markAllSubMeshesAsFresnelDirty")],M.prototype,"diffuseFresnelParameters",void 0);f([Be("opacityFresnelParameters")],M.prototype,"_opacityFresnelParameters",void 0);f([O("_markAllSubMeshesAsFresnelAndMiscDirty")],M.prototype,"opacityFresnelParameters",void 0);f([Be("reflectionFresnelParameters")],M.prototype,"_reflectionFresnelParameters",void 0);f([O("_markAllSubMeshesAsFresnelDirty")],M.prototype,"reflectionFresnelParameters",void 0);f([Be("refractionFresnelParameters")],M.prototype,"_refractionFresnelParameters",void 0);f([O("_markAllSubMeshesAsFresnelDirty")],M.prototype,"refractionFresnelParameters",void 0);f([Be("emissiveFresnelParameters")],M.prototype,"_emissiveFresnelParameters",void 0);f([O("_markAllSubMeshesAsFresnelDirty")],M.prototype,"emissiveFresnelParameters",void 0);f([g("useReflectionFresnelFromSpecular")],M.prototype,"_useReflectionFresnelFromSpecular",void 0);f([O("_markAllSubMeshesAsFresnelDirty")],M.prototype,"useReflectionFresnelFromSpecular",void 0);f([g("useGlossinessFromSpecularMapAlpha")],M.prototype,"_useGlossinessFromSpecularMapAlpha",void 0);f([O("_markAllSubMeshesAsTexturesDirty")],M.prototype,"useGlossinessFromSpecularMapAlpha",void 0);f([g("maxSimultaneousLights")],M.prototype,"_maxSimultaneousLights",void 0);f([O("_markAllSubMeshesAsLightsDirty")],M.prototype,"maxSimultaneousLights",void 0);f([g("invertNormalMapX")],M.prototype,"_invertNormalMapX",void 0);f([O("_markAllSubMeshesAsTexturesDirty")],M.prototype,"invertNormalMapX",void 0);f([g("invertNormalMapY")],M.prototype,"_invertNormalMapY",void 0);f([O("_markAllSubMeshesAsTexturesDirty")],M.prototype,"invertNormalMapY",void 0);f([g("twoSidedLighting")],M.prototype,"_twoSidedLighting",void 0);f([O("_markAllSubMeshesAsTexturesDirty")],M.prototype,"twoSidedLighting",void 0);f([g()],M.prototype,"useLogarithmicDepth",null);Pe("BABYLON.StandardMaterial",M);$e.DefaultMaterialFactory=a=>new M("default material",a);var an="imageProcessingCompatibility",nn=`#ifdef IMAGEPROCESSINGPOSTPROCESS
gl_FragColor.rgb=pow(gl_FragColor.rgb,vec3(2.2));
#endif
`;E.IncludesShadersStore[an]=nn;var on="shadowOnlyPixelShader",ln=`precision highp float;
uniform vec4 vEyePosition;
uniform float alpha;
uniform vec3 shadowColor;
varying vec3 vPositionW;
#ifdef NORMAL
varying vec3 vNormalW;
#endif
#include<helperFunctions>
#include<__decl__lightFragment>[0..maxSimultaneousLights]
#include<lightsFragmentFunctions>
#include<shadowsFragmentFunctions>
#include<clipPlaneFragmentDeclaration>
#include<fogFragmentDeclaration>
#define CUSTOM_FRAGMENT_DEFINITIONS
void main(void) {
#define CUSTOM_FRAGMENT_MAIN_BEGIN
#include<clipPlaneFragment>
vec3 viewDirectionW=normalize(vEyePosition.xyz-vPositionW);
#ifdef NORMAL
vec3 normalW=normalize(vNormalW);
#else
vec3 normalW=vec3(1.0,1.0,1.0);
#endif
vec3 diffuseBase=vec3(0.,0.,0.);
lightingInfo info;
float shadow=1.;
float glossiness=0.;
#include<lightFragment>[0..1]
vec4 color=vec4(shadowColor,(1.0-clamp(shadow,0.,1.))*alpha);
#include<fogFragment>
gl_FragColor=color;
#include<imageProcessingCompatibility>
#define CUSTOM_FRAGMENT_MAIN_END
}`;E.ShadersStore[on]=ln;var hn="shadowOnlyVertexShader",dn=`precision highp float;
attribute vec3 position;
#ifdef NORMAL
attribute vec3 normal;
#endif
#include<bonesDeclaration>
#include<bakedVertexAnimationDeclaration>
#include<instancesDeclaration>
uniform mat4 view;
uniform mat4 viewProjection;
#ifdef POINTSIZE
uniform float pointSize;
#endif
varying vec3 vPositionW;
#ifdef NORMAL
varying vec3 vNormalW;
#endif
#ifdef VERTEXCOLOR
varying vec4 vColor;
#endif
#include<clipPlaneVertexDeclaration>
#include<fogVertexDeclaration>
#include<__decl__lightFragment>[0..maxSimultaneousLights]
#define CUSTOM_VERTEX_DEFINITIONS
void main(void) {
#define CUSTOM_VERTEX_MAIN_BEGIN
#include<instancesVertex>
#include<bonesVertex>
#include<bakedVertexAnimation>
vec4 worldPos=finalWorld*vec4(position,1.0);
gl_Position=viewProjection*worldPos;
vPositionW=vec3(worldPos);
#ifdef NORMAL
vNormalW=normalize(vec3(finalWorld*vec4(normal,0.0)));
#endif
#include<clipPlaneVertex>
#include<fogVertex>
#include<shadowsVertex>[0..maxSimultaneousLights]
#if defined(POINTSIZE) && !defined(WEBGPU)
gl_PointSize=pointSize;
#endif
#define CUSTOM_VERTEX_MAIN_END
}
`;E.ShadersStore[hn]=dn;var qt=class extends dt{constructor(){super(),this.CLIPPLANE=!1,this.CLIPPLANE2=!1,this.CLIPPLANE3=!1,this.CLIPPLANE4=!1,this.CLIPPLANE5=!1,this.CLIPPLANE6=!1,this.POINTSIZE=!1,this.FOG=!1,this.NORMAL=!1,this.NUM_BONE_INFLUENCERS=0,this.BonesPerMesh=0,this.INSTANCES=!1,this.IMAGEPROCESSINGPOSTPROCESS=!1,this.SKIPFINALCOLORCLAMP=!1,this.rebuild()}},bt=class a extends Pt{constructor(t,e){super(t,e),this._needAlphaBlending=!0,this.shadowColor=re.Black()}needAlphaBlending(){return this._needAlphaBlending}needAlphaTesting(){return!1}getAlphaTestTexture(){return null}get activeLight(){return this._activeLight}set activeLight(t){this._activeLight=t}_getFirstShadowLightForMesh(t){for(let e of t.lightSources)if(e.shadowEnabled)return e;return null}isReadyForSubMesh(t,e,i){var r;if(this.isFrozen&&e.effect&&e.effect._wasPreviouslyReady&&e.effect._wasPreviouslyUsingInstances===i)return!0;e.materialDefines||(e.materialDefines=new qt);let s=e.materialDefines,n=this.getScene();if(this._isReadyForSubMesh(e))return!0;let o=n.getEngine();if(this._activeLight){for(let l of t.lightSources)if(l.shadowEnabled){if(this._activeLight===l)break;let h=t.lightSources.indexOf(this._activeLight);h!==-1&&(t.lightSources.splice(h,1),t.lightSources.splice(0,0,this._activeLight));break}}b.PrepareDefinesForFrameBoundValues(n,o,this,s,!!i),b.PrepareDefinesForMisc(t,n,!1,this.pointsCloud,this.fogEnabled,this._shouldTurnAlphaTestOn(t),s),s._needNormals=b.PrepareDefinesForLights(n,t,s,!1,1);let d=(r=this._getFirstShadowLightForMesh(t))===null||r===void 0?void 0:r.getShadowGenerator();if(this._needAlphaBlending=!0,d&&d.getClassName&&d.getClassName()==="CascadedShadowGenerator"){let l=d;this._needAlphaBlending=!l.autoCalcDepthBounds}if(b.PrepareDefinesForAttributes(t,s,!1,!0),s.isDirty){s.markAsProcessed(),n.resetCachedMaterial();let l=new ut;s.FOG&&l.addFallback(1,"FOG"),b.HandleFallbacksForShadows(s,l,1),s.NUM_BONE_INFLUENCERS>0&&l.addCPUSkinningFallback(0,t),s.IMAGEPROCESSINGPOSTPROCESS=n.imageProcessingConfiguration.applyByPostProcess;let h=[y.PositionKind];s.NORMAL&&h.push(y.NormalKind),b.PrepareAttributesForBones(h,t,s,l),b.PrepareAttributesForInstances(h,s);let c="shadowOnly",u=s.toString(),p=["world","view","viewProjection","vEyePosition","vLightsType","vFogInfos","vFogColor","pointSize","alpha","shadowColor","mBones"],_=new Array,v=new Array;Je(p),b.PrepareUniformsAndSamplersList({uniformsNames:p,uniformBuffersNames:v,samplers:_,defines:s,maxSimultaneousLights:1}),e.setEffect(n.getEngine().createEffect(c,{attributes:h,uniformsNames:p,uniformBuffersNames:v,samplers:_,defines:u,fallbacks:l,onCompiled:this.onCompiled,onError:this.onError,indexParameters:{maxSimultaneousLights:1}},o),s,this._materialContext)}return!e.effect||!e.effect.isReady()?!1:(s._renderId=n.getRenderId(),e.effect._wasPreviouslyReady=!0,e.effect._wasPreviouslyUsingInstances=!!i,!0)}bindForSubMesh(t,e,i){let r=this.getScene(),s=i.materialDefines;if(!s)return;let n=i.effect;if(n){if(this._activeEffect=n,this.bindOnlyWorldMatrix(t),this._activeEffect.setMatrix("viewProjection",r.getTransformMatrix()),b.BindBonesParameters(e,this._activeEffect),this._mustRebind(r,n)&&(et(n,this,r),this.pointsCloud&&this._activeEffect.setFloat("pointSize",this.pointSize),this._activeEffect.setFloat("alpha",this.alpha),this._activeEffect.setColor3("shadowColor",this.shadowColor),r.bindEyePosition(n)),r.lightsEnabled){b.BindLights(r,e,this._activeEffect,s,1);let o=this._getFirstShadowLightForMesh(e);o&&(o._renderId=-1)}(r.fogEnabled&&e.applyFog&&r.fogMode!==$e.FOGMODE_NONE||s.SHADOWCSM0)&&this._activeEffect.setMatrix("view",r.getViewMatrix()),b.BindFogParameters(r,e,this._activeEffect),this._afterBind(e,this._activeEffect)}}clone(t){return H.Clone(()=>new a(t,this.getScene()),this)}serialize(){let t=super.serialize();return t.customType="BABYLON.ShadowOnlyMaterial",t}getClassName(){return"ShadowOnlyMaterial"}static Parse(t,e,i){return H.Parse(()=>new a(t.name,e),t,e,i)}};Pe("BABYLON.ShadowOnlyMaterial",bt);var cn={aspect:300/150,enableDebugging:!1,enableShadows:!0},$t=class{constructor(t){Oe(this,"size",9.5),this.config=Te(Te({},cn),t),this.create()}create(t){this.destroy(),Object.assign(this.config,t);let{aspect:e,enableDebugging:i,enableShadows:r}=this.config,s=30;this.box=new Si("diceBox");let n=new bt("shadowOnly",this.config.scene);n.alpha=r?1:0,i&&(n=new M("diceBox_material"),n.alpha=.7,n.diffuseColor=new re(1,1,0));let o=ke("ground",{width:this.size*2,height:1,depth:this.size*2},this.config.scene);if(o.scaling=new x(e,1,1),o.material=n,o.receiveShadows=!0,o.setParent(this.box),i){let d=ke("wallTop",{width:this.size,height:s,depth:1},this.config.scene);d.position.y=s/2,d.position.z=this.size/-2,d.scaling=new x(e,1,1),d.material=n,d.setParent(this.box);let l=ke("wallRight",{width:1,height:s,depth:this.size},this.config.scene);l.position.x=this.size*e/2,l.position.y=s/2,l.material=n,l.setParent(this.box);let h=ke("wallBottom",{width:this.size,height:s,depth:1},this.config.scene);h.position.y=s/2,h.position.z=this.size/2,h.scaling=new x(e,1,1),h.material=n,h.setParent(this.box);let c=ke("wallLeft",{width:1,height:s,depth:this.size},this.config.scene);c.position.x=this.size*e/-2,c.position.y=s/2,c.material=n,c.setParent(this.box)}}destroy(){this.box&&this.box.dispose()}},Jt=class{constructor(){}},Dt=(()=>{class a extends M{AttachAfterBind(e,i){if(this._newUniformInstances)for(let r in this._newUniformInstances){let s=r.toString().split("-");s[0]=="vec2"?i.setVector2(s[1],this._newUniformInstances[r]):s[0]=="vec3"?i.setVector3(s[1],this._newUniformInstances[r]):s[0]=="vec4"?i.setVector4(s[1],this._newUniformInstances[r]):s[0]=="mat4"?i.setMatrix(s[1],this._newUniformInstances[r]):s[0]=="float"&&i.setFloat(s[1],this._newUniformInstances[r])}if(this._newSamplerInstances)for(let r in this._newSamplerInstances){let s=r.toString().split("-");s[0]=="sampler2D"&&this._newSamplerInstances[r].isReady&&this._newSamplerInstances[r].isReady()&&i.setTexture(s[1],this._newSamplerInstances[r])}}ReviewUniform(e,i){if(e=="uniform"&&this._newUniforms)for(let r=0;r<this._newUniforms.length;r++)this._customUniform[r].indexOf("sampler")==-1&&i.push(this._newUniforms[r].replace(/\[\d*\]/g,""));if(e=="sampler"&&this._newUniforms)for(let r=0;r<this._newUniforms.length;r++)this._customUniform[r].indexOf("sampler")!=-1&&i.push(this._newUniforms[r].replace(/\[\d*\]/g,""));return i}Builder(e,i,r,s,n,o){if(o&&this._customAttributes&&this._customAttributes.length>0&&o.push(...this._customAttributes),this.ReviewUniform("uniform",i),this.ReviewUniform("sampler",s),this._isCreatedShader)return this._createdShaderName;this._isCreatedShader=!1,a.ShaderIndexer++;let d="custom_"+a.ShaderIndexer,l=this._afterBind.bind(this);return this._afterBind=(h,c)=>{if(c){this.AttachAfterBind(h,c);try{l(h,c)}catch{}}},ue.ShadersStore[d+"VertexShader"]=this.VertexShader.replace("#define CUSTOM_VERTEX_BEGIN",this.CustomParts.Vertex_Begin?this.CustomParts.Vertex_Begin:"").replace("#define CUSTOM_VERTEX_DEFINITIONS",(this._customUniform?this._customUniform.join(`
`):"")+(this.CustomParts.Vertex_Definitions?this.CustomParts.Vertex_Definitions:"")).replace("#define CUSTOM_VERTEX_MAIN_BEGIN",this.CustomParts.Vertex_MainBegin?this.CustomParts.Vertex_MainBegin:"").replace("#define CUSTOM_VERTEX_UPDATE_POSITION",this.CustomParts.Vertex_Before_PositionUpdated?this.CustomParts.Vertex_Before_PositionUpdated:"").replace("#define CUSTOM_VERTEX_UPDATE_NORMAL",this.CustomParts.Vertex_Before_NormalUpdated?this.CustomParts.Vertex_Before_NormalUpdated:"").replace("#define CUSTOM_VERTEX_MAIN_END",this.CustomParts.Vertex_MainEnd?this.CustomParts.Vertex_MainEnd:""),this.CustomParts.Vertex_After_WorldPosComputed&&(ue.ShadersStore[d+"VertexShader"]=ue.ShadersStore[d+"VertexShader"].replace("#define CUSTOM_VERTEX_UPDATE_WORLDPOS",this.CustomParts.Vertex_After_WorldPosComputed)),ue.ShadersStore[d+"PixelShader"]=this.FragmentShader.replace("#define CUSTOM_FRAGMENT_BEGIN",this.CustomParts.Fragment_Begin?this.CustomParts.Fragment_Begin:"").replace("#define CUSTOM_FRAGMENT_MAIN_BEGIN",this.CustomParts.Fragment_MainBegin?this.CustomParts.Fragment_MainBegin:"").replace("#define CUSTOM_FRAGMENT_DEFINITIONS",(this._customUniform?this._customUniform.join(`
`):"")+(this.CustomParts.Fragment_Definitions?this.CustomParts.Fragment_Definitions:"")).replace("#define CUSTOM_FRAGMENT_UPDATE_DIFFUSE",this.CustomParts.Fragment_Custom_Diffuse?this.CustomParts.Fragment_Custom_Diffuse:"").replace("#define CUSTOM_FRAGMENT_UPDATE_ALPHA",this.CustomParts.Fragment_Custom_Alpha?this.CustomParts.Fragment_Custom_Alpha:"").replace("#define CUSTOM_FRAGMENT_BEFORE_LIGHTS",this.CustomParts.Fragment_Before_Lights?this.CustomParts.Fragment_Before_Lights:"").replace("#define CUSTOM_FRAGMENT_BEFORE_FRAGCOLOR",this.CustomParts.Fragment_Before_FragColor?this.CustomParts.Fragment_Before_FragColor:"").replace("#define CUSTOM_FRAGMENT_MAIN_END",this.CustomParts.Fragment_MainEnd?this.CustomParts.Fragment_MainEnd:""),this.CustomParts.Fragment_Before_Fog&&(ue.ShadersStore[d+"PixelShader"]=ue.ShadersStore[d+"PixelShader"].replace("#define CUSTOM_FRAGMENT_BEFORE_FOG",this.CustomParts.Fragment_Before_Fog)),this._isCreatedShader=!0,this._createdShaderName=d,d}constructor(e,i){super(e,i),this.CustomParts=new Jt,this.customShaderNameResolve=this.Builder,this.FragmentShader=ue.ShadersStore.defaultPixelShader,this.VertexShader=ue.ShadersStore.defaultVertexShader}AddUniform(e,i,r){return this._customUniform||(this._customUniform=new Array,this._newUniforms=new Array,this._newSamplerInstances={},this._newUniformInstances={}),r&&(i.indexOf("sampler")!=-1?this._newSamplerInstances[i+"-"+e]=r:this._newUniformInstances[i+"-"+e]=r),this._customUniform.push("uniform "+i+" "+e+";"),this._newUniforms.push(e),this}AddAttribute(e){return this._customAttributes||(this._customAttributes=[]),this._customAttributes.push(e),this}Fragment_Begin(e){return this.CustomParts.Fragment_Begin=e,this}Fragment_Definitions(e){return this.CustomParts.Fragment_Definitions=e,this}Fragment_MainBegin(e){return this.CustomParts.Fragment_MainBegin=e,this}Fragment_MainEnd(e){return this.CustomParts.Fragment_MainEnd=e,this}Fragment_Custom_Diffuse(e){return this.CustomParts.Fragment_Custom_Diffuse=e.replace("result","diffuseColor"),this}Fragment_Custom_Alpha(e){return this.CustomParts.Fragment_Custom_Alpha=e.replace("result","alpha"),this}Fragment_Before_Lights(e){return this.CustomParts.Fragment_Before_Lights=e,this}Fragment_Before_Fog(e){return this.CustomParts.Fragment_Before_Fog=e,this}Fragment_Before_FragColor(e){return this.CustomParts.Fragment_Before_FragColor=e.replace("result","color"),this}Vertex_Begin(e){return this.CustomParts.Vertex_Begin=e,this}Vertex_Definitions(e){return this.CustomParts.Vertex_Definitions=e,this}Vertex_MainBegin(e){return this.CustomParts.Vertex_MainBegin=e,this}Vertex_Before_PositionUpdated(e){return this.CustomParts.Vertex_Before_PositionUpdated=e.replace("result","positionUpdated"),this}Vertex_Before_NormalUpdated(e){return this.CustomParts.Vertex_Before_NormalUpdated=e.replace("result","normalUpdated"),this}Vertex_After_WorldPosComputed(e){return this.CustomParts.Vertex_After_WorldPosComputed=e,this}Vertex_MainEnd(e){return this.CustomParts.Vertex_MainEnd=e,this}}return a.ShaderIndexer=1,a})();Pe("BABYLON.CustomMaterial",Dt);Dt.prototype.clone=function(a){let t=this,e=H.Clone(()=>new Dt(a,this.getScene()),this);return e.name=a,e.id=a,e.CustomParts.Fragment_Begin=t.CustomParts.Fragment_Begin,e.CustomParts.Fragment_Definitions=t.CustomParts.Fragment_Definitions,e.CustomParts.Fragment_MainBegin=t.CustomParts.Fragment_MainBegin,e.CustomParts.Fragment_Custom_Diffuse=t.CustomParts.Fragment_Custom_Diffuse,e.CustomParts.Fragment_Before_Lights=t.CustomParts.Fragment_Before_Lights,e.CustomParts.Fragment_Before_Fog=t.CustomParts.Fragment_Before_Fog,e.CustomParts.Fragment_Custom_Alpha=t.CustomParts.Fragment_Custom_Alpha,e.CustomParts.Fragment_Before_FragColor=t.CustomParts.Fragment_Before_FragColor,e.CustomParts.Vertex_Begin=t.CustomParts.Vertex_Begin,e.CustomParts.Vertex_Definitions=t.CustomParts.Vertex_Definitions,e.CustomParts.Vertex_MainBegin=t.CustomParts.Vertex_MainBegin,e.CustomParts.Vertex_Before_PositionUpdated=t.CustomParts.Vertex_Before_PositionUpdated,e.CustomParts.Vertex_Before_NormalUpdated=t.CustomParts.Vertex_Before_NormalUpdated,e.CustomParts.Vertex_After_WorldPosComputed=t.CustomParts.Vertex_After_WorldPosComputed,e.CustomParts.Vertex_MainEnd=t.CustomParts.Vertex_MainEnd,e};var ei=class{constructor(t){Oe(this,"loadedThemes",{}),Oe(this,"themeData",{}),this.scene=t.scene}loadStandardMaterial(t){return ae(this,null,function*(){let{theme:e,material:i}=t,r=new M(e,this.scene);i.diffuseTexture&&(r.diffuseTexture=yield this.getTexture("diffuse",t)),i.bumpTexture&&(r.bumpTexture=yield this.getTexture("bump",t)),i.specularTexture&&(r.specularTexture=yield this.getTexture("specular",t)),r.allowShaderHotSwapping=!1})}loadColorMaterial(t){return ae(this,null,function*(){let{theme:e,material:i}=t,r=new Dt(e+"_light",this.scene),s=Ei(t);i.diffuseTexture&&i.diffuseTexture.light&&(s.material.diffuseTexture=t.material.diffuseTexture.light,r.diffuseTexture=yield this.getTexture("diffuse",s)),i.bumpTexture&&(r.bumpTexture=yield this.getTexture("bump",t)),i.specularTexture&&(r.specularTexture=yield this.getTexture("specular",t)),r.allowShaderHotSwapping=!1,r.Vertex_Definitions(`
      attribute vec3 customColor;
      varying vec3 vColor;
    `).Vertex_MainEnd(`
      vColor = customColor;
    `).Fragment_Definitions(`
      varying vec3 vColor;
    `).Fragment_Custom_Diffuse(`
      baseColor.rgb = mix(vColor.rgb, baseColor.rgb, baseColor.a);
    `),r.AddAttribute("customColor");let n=r.clone(e+"_dark");i.diffuseTexture&&i.diffuseTexture.dark&&(s.material.diffuseTexture=t.material.diffuseTexture.dark,n.diffuseTexture=yield this.getTexture("diffuse",s)),n.AddAttribute("customColor")})}getTexture(t,e){return ae(this,null,function*(){let{basePath:i,material:r,theme:s}=e,n,o=t+"Level",d=t+"Texture";try{switch(t){case"diffuse":n=yield this.importTextureAsync(`${i}/${r[d]}`,s),r[o]&&(n.level=r[o]);break;case"bump":n=yield this.importTextureAsync(`${i}/${r[d]}`,s),r[o]&&(n.level=r[o]);break;case"specular":n=yield this.importTextureAsync(`${i}/${r[d]}`,s),r.specularPower&&(n.specularPower=r.specularPower);break;default:throw new Error(`Texture type: ${t} is not supported`)}}catch(l){console.error(l)}return n})}importTextureAsync(t,e){return ae(this,null,function*(){return new Promise((i,r)=>{let s=t.match(/^(.*\/)(.*)$/),n=new T(t,this.scene,void 0,!0,void 0,()=>i(n),()=>r(`Unable to load texture '${s[2]}' for theme: '${e}'. Check that your assetPath is configured correctly and that the files exist at path: '${s[1]}'`))}).catch(i=>console.error(i))})}load(t){return ae(this,null,function*(){let{material:e}=t;e.type==="color"?yield this.loadColorMaterial(t):e.type==="standard"?yield this.loadStandardMaterial(t):console.error(`Material type: ${e.type} not supported`)})}},Z,rt,ge,st,pe,de,Q,ti,me,Tt,xt,oe,Mt,ii,bi,Ai=class{constructor(t){$(this,ii),Oe(this,"config"),Oe(this,"initialized",!1),$(this,Z,{}),$(this,rt,0),$(this,ge,0),$(this,st,[]),$(this,pe,void 0),$(this,de,void 0),$(this,Q,void 0),$(this,ti,void 0),$(this,me,void 0),$(this,Tt,void 0),$(this,xt,void 0),$(this,oe,void 0),$(this,Mt,{}),Oe(this,"noop",()=>{}),Oe(this,"diceBufferView",new Float32Array(8e3)),this.onInitComplete=t.onInitComplete||this.noop,this.onThemeLoaded=t.onThemeLoaded||this.noop,this.onRollResult=t.onRollResult||this.noop,this.onRollComplete=t.onRollComplete||this.noop,this.onDieRemoved=t.onDieRemoved||this.noop,this.initialized=this.initScene(t)}initScene(t){return ae(this,null,function*(){se(this,pe,t.canvas),I(this,pe).width=t.width,I(this,pe).height=t.height,this.config=t.options,se(this,de,Oi(I(this,pe))),se(this,Q,Fi({engine:I(this,de)})),se(this,ti,Ni({engine:I(this,de),scene:I(this,Q)})),se(this,me,Mi({enableShadows:this.config.enableShadows,shadowTransparency:this.config.shadowTransparency,intensity:this.config.lightIntensity,scene:I(this,Q)})),se(this,Tt,new $t({enableShadows:this.config.enableShadows,aspect:I(this,pe).width/I(this,pe).height,lights:I(this,me),scene:I(this,Q)})),se(this,xt,new ei({scene:I(this,Q)})),this.onInitComplete()})}connect(t){se(this,oe,t),I(this,oe).postMessage({action:"initBuffer",diceBuffer:this.diceBufferView.buffer},[this.diceBufferView.buffer]),I(this,oe).onmessage=e=>{switch(e.data.action){case"updates":this.updatesFromPhysics(e.data.diceBuffer);break;default:console.error("action from physicsWorker not found in offscreen worker");break}}}updateConfig(t){let e=this.config;this.config=t,e.enableShadows!==this.config.enableShadows&&(Object.values(I(this,me)).forEach(i=>i.dispose()),se(this,me,Mi({enableShadows:this.config.enableShadows,shadowTransparency:this.config.shadowTransparency,intensity:this.config.lightIntensity,scene:I(this,Q)}))),e.scale!==this.config.scale&&Object.values(I(this,Z)).forEach(({mesh:i})=>{var r;if(i){let{x:s=1,y:n=1,z:o=1}=(r=i?.metadata)==null?void 0:r.baseScale;i.scaling=new x(this.config.scale*s,this.config.scale*n,this.config.scale*o)}}),e.shadowTransparency!==this.config.shadowTransparency&&(I(this,me).directional.shadowGenerator.darkness=this.config.shadowTransparency),e.lightIntensity!==this.config.lightIntensity&&(I(this,me).directional.intensity=.65*this.config.lightIntensity,I(this,me).hemispheric.intensity=.4*this.config.lightIntensity)}render(t){I(this,de).runRenderLoop(this.renderLoop.bind(this)),I(this,oe).postMessage({action:"resumeSimulation",newStartPoint:t})}renderLoop(){I(this,ge)&&I(this,ge)===Object.keys(I(this,Z)).length?(I(this,de).stopRenderLoop(),I(this,oe).postMessage({action:"stopSimulation"}),this.onRollComplete()):I(this,Q).render()}loadTheme(t){return ae(this,null,function*(){let{theme:e,basePath:i,material:r,meshFilePath:s,meshName:n}=t;if(yield I(this,xt).load({theme:e,basePath:i,material:r}),!Object.keys(I(this,Mt)).includes(n)){I(this,Mt)[n]=s;let o=yield we.loadModels({meshFilePath:s,meshName:n},I(this,Q));if(!o)throw new Error("No colliders returned from the 3D mesh file. Low poly colliders are expected to be in the same file as the high poly dice and the mesh name contains the word 'collider'");I(this,oe).postMessage({action:"loadModels",options:{colliders:o,meshName:n}})}this.onThemeLoaded({id:e})})}clear(){!Object.keys(I(this,Z)).length&&!I(this,ge)||(this.diceBufferView.byteLength&&this.diceBufferView.fill(0),I(this,st).forEach(t=>clearTimeout(t)),I(this,de).stopRenderLoop(),Object.values(I(this,Z)).forEach(t=>{t.mesh&&t.mesh.dispose()}),se(this,Z,{}),se(this,rt,0),se(this,ge,0),I(this,Q).render())}add(t){we.loadDie(t,I(this,Q)).then(e=>{I(this,st).push(setTimeout(()=>{wi(this,ii,bi).call(this,e)},it(this,rt)._++*this.config.delay))})}addNonDie(t){I(this,de).activeRenderLoops.length===0&&this.render(!1);let n=t,{id:e,value:i}=n,r=si(n,["id","value"]),s={id:e,value:i,config:r};I(this,Z)[e]=s,setTimeout(()=>{I(this,st).push(setTimeout(()=>{this.handleAsleep(s)},it(this,rt)._++*this.config.delay))},10)}remove(t){let e=I(this,Z)[t.id];e.hasOwnProperty("d10Instance")&&(I(this,Z)[e.d10Instance.id].mesh&&(I(this,Z)[e.d10Instance.id].mesh.dispose(),I(this,oe).postMessage({action:"removeDie",id:e.d10Instance.id})),delete I(this,Z)[e.d10Instance.id],it(this,ge)._--),I(this,Z)[t.id].mesh&&I(this,Z)[t.id].mesh.dispose(),delete I(this,Z)[t.id],it(this,ge)._--,I(this,Q).render(),this.onDieRemoved(t.rollId)}updatesFromPhysics(t){this.diceBufferView=new Float32Array(t);let e=1;for(let i=0,r=this.diceBufferView[0];i<r;i++){if(!Object.keys(I(this,Z)).length)continue;let s=I(this,Z)[`${this.diceBufferView[e]}`];if(!s){console.log("Error: die not available in scene to animate");break}if(this.diceBufferView[e+1]===-1)this.handleAsleep(s);else{let n=this.diceBufferView[e+1],o=this.diceBufferView[e+2],d=this.diceBufferView[e+3],l=this.diceBufferView[e+4],h=this.diceBufferView[e+5],c=this.diceBufferView[e+6],u=this.diceBufferView[e+7];s.mesh.position.set(n,o,d),s.mesh.rotationQuaternion.set(l,h,c,u)}e=e+8}requestAnimationFrame(()=>{I(this,oe).postMessage({action:"stepSimulation",diceBuffer:this.diceBufferView.buffer},[this.diceBufferView.buffer])})}handleAsleep(t){return ae(this,null,function*(){var e,i;if(t.asleep=!0,yield we.getRollResult(t,I(this,Q)),t.d10Instance||t.dieParent){if((e=t?.d10Instance)!=null&&e.asleep||(i=t?.dieParent)!=null&&i.asleep){let r=t.config.sides===100?t:t.dieParent,s=t.config.sides===10?t:t.d10Instance;r.rawValue&&(r.value=r.rawValue),r.rawValue=r.value,r.value=r.value+s.value,this.onRollResult({rollId:r.config.rollId,value:r.value})}}else t.config.sides===10&&t.value===0&&(t.value=10),this.onRollResult({rollId:t.config.rollId,value:t.value});it(this,ge)._++})}resize(t){let e=I(this,pe).width=t.width,i=I(this,pe).height=t.height;I(this,Tt).create({aspect:e/i}),I(this,de).resize()}};Z=new WeakMap,rt=new WeakMap,ge=new WeakMap,st=new WeakMap,pe=new WeakMap,de=new WeakMap,Q=new WeakMap,ti=new WeakMap,me=new WeakMap,Tt=new WeakMap,xt=new WeakMap,oe=new WeakMap,Mt=new WeakMap,ii=new WeakSet,bi=function(a){return ae(this,null,function*(){I(this,de).activeRenderLoops.length===0&&this.render(a.newStartPoint);let t=Lt(Te({},a),{assetPath:this.config.assetPath,enableShadows:this.config.enableShadows,scale:this.config.scale,lights:I(this,me)}),e=new we(t,I(this,Q));return I(this,Z)[e.id]=e,I(this,oe).postMessage({action:"addDie",options:{sides:a.sides,scale:this.config.scale,id:e.id,newStartPoint:a.newStartPoint,theme:a.theme,meshName:a.meshName}}),a.sides===100&&a.data!=="single"&&(e.d10Instance=yield we.loadDie(Lt(Te({},t),{dieType:"d10",sides:10,id:e.id+1e4}),I(this,Q)).then(i=>{let r=new we(i,I(this,Q));return r.dieParent=e,r}),I(this,Z)[`${e.d10Instance.id}`]=e.d10Instance,I(this,oe).postMessage({action:"addDie",options:{sides:10,scale:this.config.scale,id:e.d10Instance.id,theme:a.theme,meshName:a.meshName}})),e})};export{Ai as default};
