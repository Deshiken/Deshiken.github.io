"use strict";(self.webpackChunkboard_game_helper=self.webpackChunkboard_game_helper||[]).push([[610],{610:(P,u,o)=>{o.r(u),o.d(u,{UprisingModule:()=>U});var s=o(6895),p=o(977),e=o(6738),c=o(8592);const d=function(n){return{"rotate-clockwise":n}};let _=(()=>{class n{constructor(){this.showTwoPlayerMaps=!1,this.showThreePlayerMaps=!1,this.showFourPlayerMaps=!1}ngOnInit(){}}return n.\u0275fac=function(a){return new(a||n)},n.\u0275cmp=e.Xpm({type:n,selectors:[["app-maps-and-play-instructions"]],decls:36,vars:10,consts:[[1,"container"],[3,"title"],["data-bs-toggle","collapse","data-bs-target","#twoPlayerMapsColapse",1,"d-flex","align-items-center",3,"click"],[1,"mb-0","fs-5",2,"width","auto"],[1,"bi","ms-3","bi-chevron-down","med-icon","rotate-transition",3,"ngClass"],["id","twoPlayerMapsColapse",1,"collapse"],[1,"d-flex","flex-column"],["href","../../../assets/uprising_maps/2Player_Standard_v2.jpg","target","_blank"],["href","../../../assets/uprising_maps/2Player_CaptureTheFlag_v2.jpg","target","_blank"],["data-bs-toggle","collapse","data-bs-target","#threePlayerMapsColapse",1,"d-flex","align-items-center",3,"click"],["id","threePlayerMapsColapse",1,"collapse"],["href","../../../assets/uprising_maps/3Player_FortressDefense_v3.jpg","target","_blank"],["data-bs-toggle","collapse","data-bs-target","#fourPlayerMapsColapse",1,"d-flex","align-items-center",3,"click"],["id","fourPlayerMapsColapse",1,"collapse"],["href","../../../assets/uprising_maps/4Player_StandardGameBoard_v4.jpg","target","_blank"],["href","../../../assets/uprising_maps/4Player_CaptureTheFlag4Player_v1.jpg","target","_blank"],["href","../../../assets/uprising_maps/4Player_CaptureTheFlagTeams_v1.jpg","target","_blank"],["href","../../../assets/uprising_maps/4Player_FourCorners_v1.jpg","target","_blank"],["href","../../../assets/uprising_maps/4Player_KingOfTheHill_v2.jpg","target","_blank"]],template:function(a,r){1&a&&(e.TgZ(0,"div",0),e._UZ(1,"app-heading-with-back",1),e.TgZ(2,"div",2),e.NdJ("click",function(){return r.showTwoPlayerMaps=!r.showTwoPlayerMaps}),e.TgZ(3,"legend",3),e._uU(4,"Two Player Maps:"),e.qZA(),e._UZ(5,"i",4),e.qZA(),e.TgZ(6,"div",5)(7,"div",6)(8,"a",7),e._uU(9,"2 Player Standard"),e.qZA(),e.TgZ(10,"a",8),e._uU(11,"2 Player Capture The Flag"),e.qZA()()(),e.TgZ(12,"div",9),e.NdJ("click",function(){return r.showThreePlayerMaps=!r.showThreePlayerMaps}),e.TgZ(13,"legend",3),e._uU(14,"Three Player Maps:"),e.qZA(),e._UZ(15,"i",4),e.qZA(),e.TgZ(16,"div",10)(17,"div",6)(18,"a",11),e._uU(19,"Fortress Defense"),e.qZA()()(),e.TgZ(20,"div",12),e.NdJ("click",function(){return r.showFourPlayerMaps=!r.showFourPlayerMaps}),e.TgZ(21,"legend",3),e._uU(22,"Four Player Maps:"),e.qZA(),e._UZ(23,"i",4),e.qZA(),e.TgZ(24,"div",13)(25,"div",6)(26,"a",14),e._uU(27,"Standard 4 Player Map"),e.qZA(),e.TgZ(28,"a",15),e._uU(29,"Capture the Flag Free-for-All"),e.qZA(),e.TgZ(30,"a",16),e._uU(31,"Capture the Flag - Teams"),e.qZA(),e.TgZ(32,"a",17),e._uU(33,"Four Corners"),e.qZA(),e.TgZ(34,"a",18),e._uU(35,"King of the Hill"),e.qZA()()()()),2&a&&(e.xp6(1),e.Q6J("title","Maps and Play Instructions"),e.xp6(4),e.Q6J("ngClass",e.VKq(4,d,r.showTwoPlayerMaps)),e.xp6(10),e.Q6J("ngClass",e.VKq(6,d,r.showThreePlayerMaps)),e.xp6(8),e.Q6J("ngClass",e.VKq(8,d,r.showFourPlayerMaps)))},dependencies:[s.mk,c.i]}),n})();var m=o(6592),g=o(2986),f=o(2594),h=o(2532),l=o(4719);function T(n,t){if(1&n&&(e.TgZ(0,"li"),e._uU(1),e.qZA()),2&n){const a=t.$implicit;e.Q6J("@simpleFadeAnimation","in"),e.xp6(1),e.hij(" ",a," ")}}function y(n,t){if(1&n&&(e.ynx(0),e.TgZ(1,"p",5),e._uU(2,"Randomly Selected Mercenaries:"),e.qZA(),e.TgZ(3,"ul"),e.YNc(4,T,2,2,"li",12),e.qZA(),e.BQk()),2&n){const a=e.oxw();e.xp6(4),e.Q6J("ngForOf",a.generatedMercenaries)}}let Z=(()=>{class n{constructor(a){this.randomService=a,this.numberOfPlayers=4,this.useMercPack1=!0,this.useMercPack2=!1,this.packOneMercenaries=["Druid","Barbarian","Burrowing Wurm","Thief","Guardian","Cannon Tower","Balista","Harpy","Archmage","Merfolk","Air Ship","Necromancer","Wind Elemental"],this.packTwoMercenaries=["tes1","tes2","tes3","tes4","tes5","tes6"],this.generatedMercenaries=new Array}ngOnInit(){}generateMercenaries(){this.generatedMercenaries=new Array;let a=this.buildAvailableMercenaries();(0,m.H)(0,300).pipe((0,g.q)(this.numberOfPlayers)).subscribe(()=>{let i=this.randomService.getRandomEntryFromArray(a);console.log("adding ",i),this.generatedMercenaries.push(i),this.randomService.deleteFromArray(a,i)})}buildAvailableMercenaries(){let a=new Array;return this.useMercPack1&&(a=a.concat(...this.packOneMercenaries)),this.useMercPack2&&(a=a.concat(...this.packTwoMercenaries)),a}}return n.\u0275fac=function(a){return new(a||n)(e.Y36(h.R))},n.\u0275cmp=e.Xpm({type:n,selectors:[["app-mercenary-picker"]],decls:26,vars:9,consts:[[1,"container"],[3,"title"],["for","playerNumberSelect",1,"h6"],["id","playerNumberSelect","aria-label","Select number of Players",1,"form-select","mb-3",2,"max-width","400px",3,"ngModel","ngModelChange"],[3,"ngValue"],[1,"mb-0","mt-4","h6"],[1,"form-check"],["type","checkbox","id","humansCheckbox","checked","",1,"form-check-input",3,"checked","change"],["for","flexCheckChecked",1,"form-check-label"],["type","checkbox","id","mercPack2Checkbox",1,"form-check-input",3,"checked","change"],[1,"btn","btn-primary","mt-4",3,"click"],[4,"ngIf"],[4,"ngFor","ngForOf"]],template:function(a,r){1&a&&(e.TgZ(0,"div",0),e._UZ(1,"app-heading-with-back",1),e.TgZ(2,"label",2),e._uU(3,"Number of Players:"),e.qZA(),e.TgZ(4,"select",3),e.NdJ("ngModelChange",function(v){return r.numberOfPlayers=v}),e.TgZ(5,"option",4),e._uU(6,"One"),e.qZA(),e.TgZ(7,"option",4),e._uU(8,"Two"),e.qZA(),e.TgZ(9,"option",4),e._uU(10,"Three"),e.qZA(),e.TgZ(11,"option",4),e._uU(12,"Four"),e.qZA()(),e.TgZ(13,"p",5),e._uU(14,"Mercenaries to Include:"),e.qZA(),e.TgZ(15,"div",6)(16,"input",7),e.NdJ("change",function(){return r.useMercPack1=!r.useMercPack1}),e.qZA(),e.TgZ(17,"label",8),e._uU(18," Mercenary Pack 1 "),e.qZA()(),e.TgZ(19,"div",6)(20,"input",9),e.NdJ("change",function(){return r.useMercPack2=!r.useMercPack2}),e.qZA(),e.TgZ(21,"label",8),e._uU(22," Mercenary Pack 2 "),e.qZA()(),e.TgZ(23,"button",10),e.NdJ("click",function(){return r.generateMercenaries()}),e._uU(24,"Generate Mercenaries"),e.qZA(),e.YNc(25,y,5,1,"ng-container",11),e.qZA()),2&a&&(e.xp6(1),e.Q6J("title","Uprising Mercenary Picker"),e.xp6(3),e.Q6J("ngModel",r.numberOfPlayers),e.xp6(1),e.Q6J("ngValue",1),e.xp6(2),e.Q6J("ngValue",2),e.xp6(2),e.Q6J("ngValue",3),e.xp6(2),e.Q6J("ngValue",4),e.xp6(5),e.Q6J("checked",r.useMercPack1),e.xp6(4),e.Q6J("checked",r.useMercPack2),e.xp6(5),e.Q6J("ngIf",r.generatedMercenaries.length>0))},dependencies:[s.sg,s.O5,l.YN,l.Kr,l.EJ,l.JJ,l.On,c.i],data:{animation:[f.V]}}),n})();function k(n,t){if(1&n&&(e.TgZ(0,"li"),e._uU(1),e.qZA()),2&n){const a=t.$implicit;e.Q6J("@simpleFadeAnimation","in"),e.xp6(1),e.hij(" ",a," ")}}function b(n,t){if(1&n&&(e.ynx(0),e.TgZ(1,"p",2),e._uU(2,"Randomly Selected Map Tiles:"),e.qZA(),e.TgZ(3,"ul"),e.YNc(4,k,2,2,"li",8),e.qZA(),e.BQk()),2&n){const a=e.oxw();e.xp6(4),e.Q6J("ngForOf",a.generatedTiles)}}const A=[{path:"",component:(()=>{class n{constructor(a){this.router=a}ngOnInit(){}}return n.\u0275fac=function(a){return new(a||n)(e.Y36(p.F0))},n.\u0275cmp=e.Xpm({type:n,selectors:[["app-uprising-home"]],decls:30,vars:1,consts:[[1,"container"],[3,"title"],[1,"d-flex","align-items-center"],[1,"btn","btn-primary","btn-lg","my-3",3,"click"],["data-bs-toggle","collapse","data-bs-target","#draftCollapse","aria-expanded","false","aria-controls","draftCollapse",1,"bi","m-3","bi-question-circle-fill",2,"font-size","2.4rem"],["id","draftCollapse",1,"collapse"],[1,"card","card-body"],["data-bs-toggle","collapse","data-bs-target","#mercenariesCollapse","aria-expanded","false","aria-controls","draftCollapse",1,"bi","m-3","bi-question-circle-fill",2,"font-size","2.4rem"],["id","mercenariesCollapse",1,"collapse"],["data-bs-toggle","collapse","data-bs-target","#tileRandomizerCollapse","aria-expanded","false","aria-controls","tileRandomizerCollapse",1,"bi","m-3","bi-question-circle-fill",2,"font-size","2.4rem"],["id","tileRandomizerCollapse",1,"collapse"],["data-bs-toggle","collapse","data-bs-target","#unitReferenceCards","aria-expanded","false","aria-controls","unitReferenceCards",1,"bi","m-3","bi-question-circle-fill",2,"font-size","2.4rem"],["id","unitReferenceCards",1,"collapse"]],template:function(a,r){1&a&&(e.TgZ(0,"div",0),e._UZ(1,"app-heading-with-back",1),e.TgZ(2,"div",2)(3,"button",3),e.NdJ("click",function(){return r.router.navigate(["uprising/maps"])}),e._uU(4," Game Modes and Setup Instructions "),e.qZA(),e._UZ(5,"i",4),e.qZA(),e.TgZ(6,"div",5)(7,"div",6),e._uU(8," This tool has links to a variety of maps and play options for quick reference. "),e.qZA()(),e.TgZ(9,"div",2)(10,"button",3),e.NdJ("click",function(){return r.router.navigate(["uprising/mercenary-picker"])}),e._uU(11," Pick Random Mercenaries "),e.qZA(),e._UZ(12,"i",7),e.qZA(),e.TgZ(13,"div",8)(14,"div",6),e._uU(15," This tool will allow you to randomly select a group of mercenaries dependening on your player count. "),e.qZA()(),e.TgZ(16,"div",2)(17,"button",3),e.NdJ("click",function(){return r.router.navigate(["uprising/tile-randomizer"])}),e._uU(18," Map Tile Randomizer "),e.qZA(),e._UZ(19,"i",9),e.qZA(),e.TgZ(20,"div",10)(21,"div",6),e._uU(22," Shuffling large map tiles can be difficult. Use this tool to quickly randomize the order of the map tiles. "),e.qZA()(),e.TgZ(23,"div",2)(24,"button",3),e.NdJ("click",function(){return r.router.navigate(["uprising/unit-reference-cards"])}),e._uU(25," Unit Reference Cards "),e.qZA(),e._UZ(26,"i",11),e.qZA(),e.TgZ(27,"div",12)(28,"div",6),e._uU(29," Access to current and past versions of the unit reference card. "),e.qZA()()()),2&a&&(e.xp6(1),e.Q6J("title","Uprising Tools"))},dependencies:[c.i]}),n})()},{path:"mercenary-picker",component:Z},{path:"maps",component:_},{path:"tile-randomizer",component:(()=>{class n{constructor(a){this.randomService=a,this.useExpansionTiles=!1,this.generatedTiles=new Array,this.standardTiles=new Array("A1","A2","A3","A4","A5","A6","A7","A8","A9","A10","A11","A12"),this.expansionTiles=new Array("E1","E2","E3","E4")}ngOnInit(){}generateMapTiles(){this.generatedTiles=new Array;let a=new Array(...this.standardTiles);this.useExpansionTiles&&(a=a.concat(...this.expansionTiles)),(0,m.H)(0,200).pipe((0,g.q)(12)).subscribe(()=>{let i=this.randomService.getRandomEntryFromArray(a);console.log("adding ",i),this.generatedTiles.push(i),this.randomService.deleteFromArray(a,i)})}}return n.\u0275fac=function(a){return new(a||n)(e.Y36(h.R))},n.\u0275cmp=e.Xpm({type:n,selectors:[["app-tile-randomizer"]],decls:15,vars:3,consts:[[1,"container"],[3,"title"],[1,"mb-0","mt-4","h6"],[1,"form-check"],["type","checkbox","id","humansCheckbox",1,"form-check-input",3,"checked","change"],["for","flexCheckChecked",1,"form-check-label"],[1,"btn","btn-primary","mt-4",3,"click"],[4,"ngIf"],[4,"ngFor","ngForOf"]],template:function(a,r){1&a&&(e.TgZ(0,"div",0),e._UZ(1,"app-heading-with-back",1),e.TgZ(2,"h2"),e._uU(3,"How to use:"),e.qZA(),e.TgZ(4,"p"),e._uU(5,"After generating the random order of Map tiles to use by clicking 'Generate Map Tiles' below, we recomend you build the map for your selected game mode from top to bottom and from left to right in the order of the map tiles displayed. "),e.qZA(),e.TgZ(6,"p",2),e._uU(7,"Map Tiles to Include:"),e.qZA(),e.TgZ(8,"div",3)(9,"input",4),e.NdJ("change",function(){return r.useExpansionTiles=!r.useExpansionTiles}),e.qZA(),e.TgZ(10,"label",5),e._uU(11," Use Expansion Tiles (E1, E2, E3, E4) "),e.qZA()(),e.TgZ(12,"button",6),e.NdJ("click",function(){return r.generateMapTiles()}),e._uU(13,"Generate Map Tiles"),e.qZA(),e.YNc(14,b,5,1,"ng-container",7),e.qZA()),2&a&&(e.xp6(1),e.Q6J("title","Map Tile Randomizer"),e.xp6(8),e.Q6J("checked",r.useExpansionTiles),e.xp6(5),e.Q6J("ngIf",r.generatedTiles.length>0))},dependencies:[s.sg,s.O5,c.i],data:{animation:[f.V]}}),n})()},{path:"unit-reference-cards",component:(()=>{class n{constructor(){}ngOnInit(){}}return n.\u0275fac=function(a){return new(a||n)},n.\u0275cmp=e.Xpm({type:n,selectors:[["app-unit-reference-cards"]],decls:7,vars:1,consts:[[1,"container"],[3,"title"],[1,"d-flex","flex-column"],["href","../../../assets/unit_reference_cards/Unit Reference Card v3.jpg","target","_blank"],["href","../../../assets/unit_reference_cards/Unit Reference Card v4.jpg","target","_blank"]],template:function(a,r){1&a&&(e.TgZ(0,"div",0),e._UZ(1,"app-heading-with-back",1),e.TgZ(2,"div",2)(3,"a",3),e._uU(4,"Version 3"),e.qZA(),e.TgZ(5,"a",4),e._uU(6,"Version 4 - Latest"),e.qZA()()()),2&a&&(e.xp6(1),e.Q6J("title","Unit Reference Cards"))},dependencies:[c.i]}),n})()}];let M=(()=>{class n{}return n.\u0275fac=function(a){return new(a||n)},n.\u0275mod=e.oAB({type:n}),n.\u0275inj=e.cJS({imports:[p.Bz.forChild(A),p.Bz]}),n})();var C=o(4466);let U=(()=>{class n{}return n.\u0275fac=function(a){return new(a||n)},n.\u0275mod=e.oAB({type:n}),n.\u0275inj=e.cJS({imports:[s.ez,M,l.u5,C.m]}),n})()}}]);