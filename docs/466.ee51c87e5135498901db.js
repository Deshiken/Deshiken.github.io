"use strict";(self.webpackChunkboard_game_helper=self.webpackChunkboard_game_helper||[]).push([[466],{1466:(I,h,a)=>{a.r(h),a.d(h,{UprisingModule:()=>N});var u=a(8583),d=a(5281),f=a(7574),y=a(5319);class b extends y.w{constructor(t,n){super()}schedule(t,n=0){return this}}let p=(()=>{class r{constructor(n,i=r.now){this.SchedulerAction=n,this.now=i}schedule(n,i=0,s){return new this.SchedulerAction(this,n).schedule(s,i)}}return r.now=()=>Date.now(),r})();class c extends p{constructor(t,n=p.now){super(t,()=>c.delegate&&c.delegate!==this?c.delegate.now():n()),this.actions=[],this.active=!1,this.scheduled=void 0}schedule(t,n=0,i){return c.delegate&&c.delegate!==this?c.delegate.schedule(t,n,i):super.schedule(t,n,i)}flush(t){const{actions:n}=this;if(this.active)return void n.push(t);let i;this.active=!0;do{if(i=t.execute(t.state,t.delay))break}while(t=n.shift());if(this.active=!1,i){for(;t=n.shift();)t.unsubscribe();throw i}}}const k=new c(class extends b{constructor(t,n){super(t,n),this.scheduler=t,this.work=n,this.pending=!1}schedule(t,n=0){if(this.closed)return this;this.state=t;const i=this.id,s=this.scheduler;return null!=i&&(this.id=this.recycleAsyncId(s,i,n)),this.pending=!0,this.delay=n,this.id=this.id||this.requestAsyncId(s,this.id,n),this}requestAsyncId(t,n,i=0){return setInterval(t.flush.bind(t,this),i)}recycleAsyncId(t,n,i=0){if(null!==i&&this.delay===i&&!1===this.pending)return n;clearInterval(n)}execute(t,n){if(this.closed)return new Error("executing a cancelled action");this.pending=!1;const i=this._execute(t,n);if(i)return i;!1===this.pending&&null!=this.id&&(this.id=this.recycleAsyncId(this.scheduler,this.id,null))}_execute(t,n){let s,i=!1;try{this.work(t)}catch(o){i=!0,s=!!o&&o||new Error(o)}if(i)return this.unsubscribe(),s}_unsubscribe(){const t=this.id,n=this.scheduler,i=n.actions,s=i.indexOf(this);this.work=null,this.state=null,this.pending=!1,this.scheduler=null,-1!==s&&i.splice(s,1),null!=t&&(this.id=this.recycleAsyncId(n,t,null)),this.delay=null}});var Z=a(9796);function m(r){return!(0,Z.k)(r)&&r-parseFloat(r)+1>=0}var g=a(4869);function T(r){const{index:t,period:n,subscriber:i}=r;if(i.next(t),!i.closed){if(-1===n)return i.complete();r.index=t+1,this.schedule(r,n)}}var v=a(5257),w=a(2594),e=a(639),C=a(2532),U=a(8592),l=a(665);function P(r,t){if(1&r&&(e.TgZ(0,"li"),e._uU(1),e.qZA()),2&r){const n=t.$implicit;e.Q6J("@simpleFadeAnimation","in"),e.xp6(1),e.hij(" ",n," ")}}function x(r,t){if(1&r&&(e.ynx(0),e.TgZ(1,"p",5),e._uU(2,"Randomly Selected Mercenaries:"),e.qZA(),e.TgZ(3,"ul"),e.YNc(4,P,2,2,"li",12),e.qZA(),e.BQk()),2&r){const n=e.oxw();e.xp6(4),e.Q6J("ngForOf",n.generatedMercenaries)}}const J=[{path:"",component:(()=>{class r{constructor(n){this.router=n}ngOnInit(){}}return r.\u0275fac=function(n){return new(n||r)(e.Y36(d.F0))},r.\u0275cmp=e.Xpm({type:r,selectors:[["app-uprising-home"]],decls:17,vars:0,consts:[[1,"container"],[1,"mt-3","text-center"],[1,"d-flex","align-items-center"],[1,"btn","btn-primary","btn-lg","my-3",3,"click"],["data-bs-toggle","collapse","data-bs-target","#mercenariesCollapse","aria-expanded","false","aria-controls","draftCollapse",1,"bi","m-3","bi-question-circle-fill",2,"font-size","2.4rem"],["id","mercenariesCollapse",1,"collapse"],[1,"card","card-body"],["data-bs-toggle","collapse","data-bs-target","#draftCollapse","aria-expanded","false","aria-controls","draftCollapse",1,"bi","m-3","bi-question-circle-fill",2,"font-size","2.4rem"],["id","draftCollapse",1,"collapse"]],template:function(n,i){1&n&&(e.TgZ(0,"div",0),e.TgZ(1,"h1",1),e._uU(2,"Uprising Tools"),e.qZA(),e.TgZ(3,"div",2),e.TgZ(4,"button",3),e.NdJ("click",function(){return i.router.navigate(["uprising/mercenary-picker"])}),e._uU(5," Pick Random Mercenaries "),e.qZA(),e._UZ(6,"i",4),e.qZA(),e.TgZ(7,"div",5),e.TgZ(8,"div",6),e._uU(9," This tool will allow you to set which Factions and Mercenaries and the number of players you would like to play with. Then a random Faction and Mercenary will be added to a list and players will be able to draft which Faction and Mercenaries they will use. "),e.qZA(),e.qZA(),e.TgZ(10,"div",2),e.TgZ(11,"button",3),e.NdJ("click",function(){return i.router.navigate(["uprising/mercenary-picker"])}),e._uU(12," Game Modes and Setup Instructions "),e.qZA(),e._UZ(13,"i",7),e.qZA(),e.TgZ(14,"div",8),e.TgZ(15,"div",6),e._uU(16," This tool will allow you to set which Factions and Mercenaries and the number of players you would like to play with. Then a random Faction and Mercenary will be added to a list and players will be able to draft which Faction and Mercenaries they will use. "),e.qZA(),e.qZA(),e.qZA())},styles:[""]}),r})()},{path:"mercenary-picker",component:(()=>{class r{constructor(n){this.randomService=n,this.numberOfPlayers=4,this.useMercPack1=!0,this.useMercPack2=!1,this.packOneMercenaries=["Druid","Barbarian","Burrowing Wurm","Thief","Guardian","Cannon Tower","Balista","Harpy","Archmage","Merfolk","Air Ship","Necromancer","Wind Elemental"],this.packTwoMercenaries=["tes1","tes2","tes3","tes4","tes5","tes6"],this.generatedMercenaries=new Array}ngOnInit(){}generateMercenaries(){this.generatedMercenaries=new Array;let n=this.buildAvailableMercenaries();(function(r=0,t,n){let i=-1;return m(t)?i=Number(t)<1?1:Number(t):(0,g.K)(t)&&(n=t),(0,g.K)(n)||(n=k),new f.y(s=>{const o=m(r)?r:+r-n.now();return n.schedule(T,o,{index:0,period:i,subscriber:s})})})(0,300).pipe((0,v.q)(this.numberOfPlayers)).subscribe(()=>{let s=this.randomService.getRandomEntryFromArray(n);console.log("adding ",s),this.generatedMercenaries.push(s),this.randomService.deleteFromArray(n,s)})}buildAvailableMercenaries(){let n=new Array;return this.useMercPack1&&(n=n.concat(...this.packOneMercenaries)),this.useMercPack2&&(n=n.concat(...this.packTwoMercenaries)),n}}return r.\u0275fac=function(n){return new(n||r)(e.Y36(C.R))},r.\u0275cmp=e.Xpm({type:r,selectors:[["app-mercenary-picker"]],decls:26,vars:9,consts:[[1,"container"],[3,"title"],["for","playerNumberSelect",1,"h6"],["id","playerNumberSelect","aria-label","Select number of Players",1,"form-select","mb-3",2,"max-width","400px",3,"ngModel","ngModelChange"],[3,"ngValue"],[1,"mb-0","mt-4","h6"],[1,"form-check"],["type","checkbox","id","humansCheckbox","checked","",1,"form-check-input",3,"checked","change"],["for","flexCheckChecked",1,"form-check-label"],["type","checkbox","id","mercPack2Checkbox",1,"form-check-input",3,"checked","change"],[1,"btn","btn-primary","mt-4",3,"click"],[4,"ngIf"],[4,"ngFor","ngForOf"]],template:function(n,i){1&n&&(e.TgZ(0,"div",0),e._UZ(1,"app-heading-with-back",1),e.TgZ(2,"label",2),e._uU(3,"Number of Players:"),e.qZA(),e.TgZ(4,"select",3),e.NdJ("ngModelChange",function(o){return i.numberOfPlayers=o}),e.TgZ(5,"option",4),e._uU(6,"One"),e.qZA(),e.TgZ(7,"option",4),e._uU(8,"Two"),e.qZA(),e.TgZ(9,"option",4),e._uU(10,"Three"),e.qZA(),e.TgZ(11,"option",4),e._uU(12,"Four"),e.qZA(),e.qZA(),e.TgZ(13,"p",5),e._uU(14,"Mercenaries to Include:"),e.qZA(),e.TgZ(15,"div",6),e.TgZ(16,"input",7),e.NdJ("change",function(){return i.useMercPack1=!i.useMercPack1}),e.qZA(),e.TgZ(17,"label",8),e._uU(18," Mercenary Pack 1 "),e.qZA(),e.qZA(),e.TgZ(19,"div",6),e.TgZ(20,"input",9),e.NdJ("change",function(){return i.useMercPack2=!i.useMercPack2}),e.qZA(),e.TgZ(21,"label",8),e._uU(22," Mercenary Pack 2 "),e.qZA(),e.qZA(),e.TgZ(23,"button",10),e.NdJ("click",function(){return i.generateMercenaries()}),e._uU(24,"Generate Mercenaries"),e.qZA(),e.YNc(25,x,5,1,"ng-container",11),e.qZA()),2&n&&(e.xp6(1),e.Q6J("title","Uprising Mercenary Picker"),e.xp6(3),e.Q6J("ngModel",i.numberOfPlayers),e.xp6(1),e.Q6J("ngValue",1),e.xp6(2),e.Q6J("ngValue",2),e.xp6(2),e.Q6J("ngValue",3),e.xp6(2),e.Q6J("ngValue",4),e.xp6(5),e.Q6J("checked",i.useMercPack1),e.xp6(4),e.Q6J("checked",i.useMercPack2),e.xp6(5),e.Q6J("ngIf",i.generatedMercenaries.length>0))},directives:[U.i,l.EJ,l.JJ,l.On,l.YN,l.Kr,u.O5,u.sg],styles:[""],data:{animation:[w.V]}}),r})()}];let q=(()=>{class r{}return r.\u0275fac=function(n){return new(n||r)},r.\u0275mod=e.oAB({type:r}),r.\u0275inj=e.cJS({imports:[[d.Bz.forChild(J)],d.Bz]}),r})();var F=a(4466);let N=(()=>{class r{}return r.\u0275fac=function(n){return new(n||r)},r.\u0275mod=e.oAB({type:r}),r.\u0275inj=e.cJS({imports:[[u.ez,q,l.u5,F.m]]}),r})()}}]);