"use strict";(self.webpackChunkboard_game_helper=self.webpackChunkboard_game_helper||[]).push([[592],{2594:(m,c,o)=>{o.d(c,{V:()=>a});var t=o(7340);const a=(0,t.X$)("simpleFadeAnimation",[(0,t.SB)("in",(0,t.oB)({opacity:1})),(0,t.eR)(":enter",[(0,t.oB)({opacity:0}),(0,t.jt)(400)]),(0,t.eR)(":leave",(0,t.jt)(400,(0,t.oB)({opacity:0})))])},8592:(m,c,o)=>{o.d(c,{i:()=>s});var t=o(5062),a=o(6895);let s=(()=>{class i{constructor(n){this.location=n,this.title=""}ngOnInit(){}}return i.\u0275fac=function(n){return new(n||i)(t.Y36(a.Ye))},i.\u0275cmp=t.Xpm({type:i,selectors:[["app-heading-with-back"]],inputs:{title:"title"},decls:4,vars:1,consts:[[1,"d-flex","justify-items-center","align-items-center","my-3"],[1,"bi","me-3","bi-arrow-left-circle",2,"font-size","2.4rem",3,"click"]],template:function(n,r){1&n&&(t.TgZ(0,"div",0)(1,"i",1),t.NdJ("click",function(){return r.location.back()}),t.qZA(),t.TgZ(2,"h1"),t._uU(3),t.qZA()()),2&n&&(t.xp6(3),t.Oqu(r.title))}}),i})()},257:(m,c,o)=>{o.d(c,{q:()=>e});var t=o(6895),a=o(5062),s=o(1443);const i=["savedOptionsToast"];let e=(()=>{class n{constructor(l){this.toastService=l,this.message="Your item has been saved",this.marginTop=0}ngOnInit(){console.log("marginTop: ",this.marginTop),this.toastService.toastSubject.subscribe(()=>{console.log("subscription notified"),this.showToast()})}showToast(){this.savedOptionsToast.nativeElement.classList.add("show","fade-in"),window.setTimeout(()=>{this.savedOptionsToast.nativeElement.classList.remove("fade-in"),this.savedOptionsToast.nativeElement.classList.add("fade-out")},3e3),window.setTimeout(()=>{this.savedOptionsToast.nativeElement.classList.remove("show")},5e3)}}return n.\u0275fac=function(l){return new(l||n)(a.Y36(s.k))},n.\u0275cmp=a.Xpm({type:n,selectors:[["app-toast"]],viewQuery:function(l,_){if(1&l&&a.Gf(i,5),2&l){let d;a.iGM(d=a.CRH())&&(_.savedOptionsToast=d.first)}},inputs:{message:"message",marginTop:"marginTop"},standalone:!0,features:[a.jDz],decls:6,vars:3,consts:[["data-bs-animation","true","data-bs-autohide","true","data-bs-delay","3000","role","alert","aria-live","assertive","aria-atomic","true",1,"toast","fade","align-items-center","fixed-top"],["savedOptionsToast",""],[1,"d-flex"],[1,"toast-body"],["type","button","data-bs-dismiss","toast","aria-label","Close",1,"btn-close","me-2","m-auto"]],template:function(l,_){1&l&&(a.TgZ(0,"div",0,1)(2,"div",2)(3,"div",3),a._uU(4),a.qZA(),a._UZ(5,"button",4),a.qZA()()),2&l&&(a.Udp("margin-top",_.marginTop,"px"),a.xp6(4),a.hij(" ",_.message," "))},dependencies:[t.ez]}),n})()},1234:(m,c,o)=>{o.d(c,{Q:()=>a});var t=o(5062);let a=(()=>{class s{constructor(e){this.el=e,this.animateTime=200,this.initialTick=10}ngOnInit(){this.el.nativeElement.style.overflow="auto",this.el.nativeElement.style.transition=`height ${this.animateTime}ms ease 0s`}ngOnChanges(e){setTimeout(()=>{const n=this.el.nativeElement.style.height;this.el.nativeElement.style.height="auto";const r=this.el.nativeElement.scrollHeight+"px";this.el.nativeElement.style.height=n,setTimeout(()=>{this.el.nativeElement.style.height=r},50)},500)}}return s.\u0275fac=function(e){return new(e||s)(t.Y36(t.SBq))},s.\u0275dir=t.lG2({type:s,selectors:[["","appDynamicGrow",""]],inputs:{lockHeight:"lockHeight",animateTime:"animateTime"},features:[t.TTD]}),s})()},2532:(m,c,o)=>{o.d(c,{R:()=>a});var t=o(5062);let a=(()=>{class s{constructor(){}getRandomEntryFromMap(e){const n=Array.from(e);return n[Math.floor(Math.random()*n.length)]}getRandomEntryFromArray(e){return e[Math.floor(Math.random()*e.length)]}deleteFromArray(e,n){const r=e.indexOf(n);r>-1&&e.splice(r,1)}mergeRecursive(e,n){for(var r in n)try{e[r]=n[r].constructor==Object?this.mergeRecursive(e[r],n[r]):n[r]}catch{e[r]=n[r]}return e}}return s.\u0275fac=function(e){return new(e||s)},s.\u0275prov=t.Yz7({token:s,factory:s.\u0275fac,providedIn:"root"}),s})()},1443:(m,c,o)=>{o.d(c,{k:()=>s});var t=o(5529),a=o(5062);let s=(()=>{class i{constructor(){this.toastSubject=new t.xQ}}return i.\u0275fac=function(n){return new(n||i)},i.\u0275prov=a.Yz7({token:i,factory:i.\u0275fac,providedIn:"root"}),i})()},4466:(m,c,o)=>{o.d(c,{m:()=>s});var t=o(6895),a=o(5062);let s=(()=>{class i{}return i.\u0275fac=function(n){return new(n||i)},i.\u0275mod=a.oAB({type:i}),i.\u0275inj=a.cJS({imports:[t.ez]}),i})()}}]);