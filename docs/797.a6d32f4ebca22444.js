"use strict";(self.webpackChunkboard_game_helper=self.webpackChunkboard_game_helper||[]).push([[797],{7797:(k,f,l)=>{l.r(f),l.d(f,{TANARES_ROUTES:()=>y});var m=l(6895),h=l(4466),e=l(5062);let p=(()=>{class n{constructor(){this.chosenTanaresHeroes=[],this.chosenTanaresRelics=[],this.chosenTanaresHeroicActions=[]}}return n.\u0275fac=function(r){return new(r||n)},n.\u0275prov=e.Yz7({token:n,factory:n.\u0275fac,providedIn:"root"}),n})();var u=l(8592);function T(n,s){if(1&n&&(e.TgZ(0,"p")(1,"b"),e._uU(2,"Name: "),e.qZA(),e._uU(3),e.TgZ(4,"b"),e._uU(5,"Class: "),e.qZA(),e._uU(6),e.qZA()),2&n){const r=s.$implicit;e.xp6(3),e.hij(" ",r.name," "),e.xp6(3),e.hij(" ",r.class," ")}}function v(n,s){if(1&n&&(e.TgZ(0,"p")(1,"b"),e._uU(2,"Name: "),e.qZA(),e._uU(3),e.TgZ(4,"b"),e._uU(5,"Level: "),e.qZA(),e._uU(6),e.qZA()),2&n){const r=s.$implicit;e.xp6(3),e.hij(" ",r.name," "),e.xp6(3),e.hij(" ",r.level," ")}}function A(n,s){if(1&n&&(e.ynx(0),e.TgZ(1,"h2"),e._uU(2,"Relics to Draft"),e.qZA(),e.YNc(3,v,7,2,"p",2),e.BQk()),2&n){const r=e.oxw();e.xp6(3),e.Q6J("ngForOf",r.tanaresDraftService.chosenTanaresRelics)}}function _(n,s){if(1&n&&(e.TgZ(0,"p"),e._uU(1),e.qZA()),2&n){const r=s.$implicit;e.xp6(1),e.Oqu(r)}}function b(n,s){if(1&n&&(e.ynx(0),e.TgZ(1,"h2"),e._uU(2,"Heroic Actions to Draft"),e.qZA(),e.YNc(3,_,2,1,"p",2),e.BQk()),2&n){const r=e.oxw();e.xp6(3),e.Q6J("ngForOf",r.tanaresDraftService.chosenTanaresHeroicActions)}}let C=(()=>{class n{constructor(r){this.tanaresDraftService=r}}return n.\u0275fac=function(r){return new(r||n)(e.Y36(p))},n.\u0275cmp=e.Xpm({type:n,selectors:[["app-tanares-draft-results"]],standalone:!0,features:[e.jDz],decls:7,vars:4,consts:[[1,"container"],[3,"title"],[4,"ngFor","ngForOf"],[4,"ngIf"]],template:function(r,t){1&r&&(e.TgZ(0,"div",0),e._UZ(1,"app-heading-with-back",1),e.TgZ(2,"h2"),e._uU(3,"Heroes to Draft"),e.qZA(),e.YNc(4,T,7,2,"p",2),e.YNc(5,A,4,1,"ng-container",3),e.YNc(6,b,4,1,"ng-container",3),e.qZA()),2&r&&(e.xp6(1),e.Q6J("title","Arena the Contest/Tanares Adventures Draft Results"),e.xp6(3),e.Q6J("ngForOf",t.tanaresDraftService.chosenTanaresHeroes),e.xp6(1),e.Q6J("ngIf",t.tanaresDraftService.chosenTanaresRelics.length>0),e.xp6(1),e.Q6J("ngIf",t.tanaresDraftService.chosenTanaresHeroicActions.length>0))},dependencies:[m.ez,m.sg,m.O5,h.m,u.i]}),n})();var c=l(4719),a=(()=>{return(n=a||(a={})).Bruiser="Bruiser",n.Shooter="Shooter",n.Brute="Brute",n.Tactician="Tactician",n.Healer="Healser",n.Controller="Controller",n.Tank="Tank",n.Commander="Commander",a;var n})();const H=new Map([[a.Brute,[{name:"Baolmu, Augur\u2019s Madwalker",class:a.Brute},{name:"Count Blake, the Vampire",class:a.Brute},{name:"Gaknak, Red Dragonblade",class:a.Brute},{name:"Herodotus, the Fallen Titan",class:a.Brute},{name:"Katar, The Barbarian",class:a.Brute},{name:"Morlogh, the Minotaur",class:a.Brute},{name:"Sedrik, the Werewolf",class:a.Brute}]],[a.Bruiser,[{name:"Anariel, the Swordmage",class:a.Bruiser},{name:"Ascaran, the Archangel",class:a.Bruiser},{name:"Kor\u2019dal, the Juggernaut",class:a.Bruiser},{name:"Lordwrath, the Shadowknight",class:a.Bruiser},{name:"Ohris, the Monk",class:a.Bruiser},{name:"Renkyr, the Dragon Avenger",class:a.Bruiser},{name:"Vanarus, the Demon",class:a.Bruiser}]],[a.Shooter,[{name:"Avelum, the Wizard",class:a.Shooter},{name:"Jessa, Shepherd Redeemer",class:a.Shooter},{name:"Juliet, the Ice Sorcerer",class:a.Shooter},{name:"Kelanyah, the Researcher",class:a.Shooter},{name:"Niary, the Hunter",class:a.Shooter},{name:"Vilani, Air Elementalist",class:a.Shooter},{name:"Zanac, the Fire Sorcerer",class:a.Shooter}]],[a.Tactician,[{name:"Garion, the Rogue",class:a.Tactician},{name:"Harun, the Doppelg\xe4nger",class:a.Tactician},{name:"Liana, the Pirate",class:a.Tactician},{name:"Magenta, the Witch Hunter",class:a.Tactician},{name:"Myr, the Assassin",class:a.Tactician},{name:"Ravel, Arachne\u2019s Madwalker",class:a.Tactician},{name:"Rokaru, the Samurai",class:a.Tactician}]],[a.Commander,[{name:"Emperor, the Supreme",class:a.Commander},{name:"Khloet, the Summoner",class:a.Commander},{name:"Lana, the Valkyrie",class:a.Commander},{name:"Oguemir, the Beast Master",class:a.Commander},{name:"Orthus, the Warlock",class:a.Commander},{name:"Scara, the Weaver of Sorrow",class:a.Commander}]],[a.Healer,[{name:"Azriel, Water Elementalist",class:a.Healer},{name:"Cheiron, Tycoon Redeemer",class:a.Healer},{name:"Jade, the Bard",class:a.Healer},{name:"Nyx, Succubus of Greed",class:a.Healer},{name:"Taram, the Cleric",class:a.Healer},{name:"Thalia, the Druid",class:a.Healer},{name:"Uster, the Necromancer",class:a.Healer}]],[a.Controller,[{name:"Catharina, the Witch",class:a.Controller},{name:"Elarine, the Telepath",class:a.Controller},{name:"Gazini, the Ancient Vampire",class:a.Controller},{name:"Lizz, the Medusa",class:a.Controller},{name:"Nero, the Pyromancer",class:a.Controller},{name:"Tsuyoko, the Ninja",class:a.Controller},{name:"Vaeraunt, the Mastermind",class:a.Controller},{name:"Yemi, the Succubus of Envy",class:a.Controller},{name:"Zafara, the Fallen Angel",class:a.Controller},{name:"Zund, the Illusionist",class:a.Controller}]],[a.Tank,[{name:"Grigory, the Guardian",class:a.Tank},{name:"Jorana, the Amazon",class:a.Tank},{name:"M\u2019Bollo, the Warpriest",class:a.Tank},{name:"Nakral, the Death Knight",class:a.Tank},{name:"Rurik, the Warrior",class:a.Tank},{name:"Sedura, Blue Dragonblade",class:a.Tank},{name:"Sir Erick, the Paladin",class:a.Tank}]]]),Z={level1:[{name:"Ice Sword",level:1},{name:"Crown of Power",level:1},{name:"Amulet of Will",level:1},{name:"Gloves of Accuracy",level:1},{name:"Mask of the Chameleon",level:1},{name:"Dragon Talisman",level:1}],level2:[{name:"Sun Orb",level:2},{name:"Belt of Shadows",level:2},{name:"Dragon Armor",level:2},{name:"Arcane Cloak",level:2},{name:"Lava Axe",level:2}],level3:[{name:"Ring of Invulnerability",level:3},{name:"Dragon Shield",level:3},{name:"Boots of Slickness",level:3},{name:"Spectral Weapon",level:3}]},S=["Heroic Magic","Heroic Magic","Heroic Seism","Heroic Seism","Heroic Inspiration","Heroic Inspiration","Heroic Ambush","Heroic Ambush","Heroic Revival","Heroic Revival","Heroic Defense","Heroic Defense","Heroic Absorption","Heroic Absorption"];var D=l(2532),d=l(7762);function R(n,s){if(1&n){const r=e.EpF();e.ynx(0),e.TgZ(1,"label",12),e._uU(2,"Number of randomly selected heroic actions to draft from:"),e.qZA(),e.TgZ(3,"select",13),e.NdJ("ngModelChange",function(o){e.CHM(r);const i=e.oxw();return e.KtG(i.numberOfHeroicActions=o)}),e.TgZ(4,"option",5),e._uU(5,"Four"),e.qZA(),e.TgZ(6,"option",4),e._uU(7,"Five"),e.qZA(),e.TgZ(8,"option",4),e._uU(9,"Six"),e.qZA(),e.TgZ(10,"option",4),e._uU(11,"Seven"),e.qZA(),e.TgZ(12,"option",4),e._uU(13,"Eight"),e.qZA()(),e.BQk()}if(2&n){const r=e.oxw();e.xp6(3),e.Q6J("ngModel",r.numberOfHeroicActions),e.xp6(1),e.Q6J("ngValue",4),e.xp6(2),e.Q6J("ngValue",5),e.xp6(2),e.Q6J("ngValue",6),e.xp6(2),e.Q6J("ngValue",7),e.xp6(2),e.Q6J("ngValue",8)}}const g=function(){return{standalone:!0}},y=[{path:"",component:(()=>{class n{constructor(r){this.router=r}}return n.\u0275fac=function(r){return new(r||n)(e.Y36(d.F0))},n.\u0275cmp=e.Xpm({type:n,selectors:[["app-tanares-home"]],standalone:!0,features:[e.jDz],decls:12,vars:1,consts:[[1,"container"],[3,"title"],[1,"d-flex","align-items-center","justify-content-between","nav-help"],[1,"btn","btn-primary","btn-lg","my-3",3,"click"],["data-bs-toggle","collapse","data-bs-target","#draftCollapse","aria-expanded","false","aria-controls","draftCollapse",1,"bi","m-3","bi-question-circle-fill",2,"font-size","2.4rem"],["id","draftCollapse",1,"collapse"],[1,"card","card-body"],["target","_blank","href","https://www.dropbox.com/scl/fo/s11zk1zyzz07sb7axj0h8/AO9CQAwQVuXcxIfwz69LM_Q?e=5&preview=Tanares+Rulebook+PvP.pdf&rlkey=jqlhsc3h7zmakjeimffk6kcu6"]],template:function(r,t){1&r&&(e.TgZ(0,"div",0),e._UZ(1,"app-heading-with-back",1),e.TgZ(2,"div",2)(3,"button",3),e.NdJ("click",function(){return t.router.navigate(["tanares/draft-start"])}),e._uU(4," PvP Draft "),e.qZA(),e._UZ(5,"i",4),e.qZA(),e.TgZ(6,"div",5)(7,"div",6),e._uU(8," This tool will help you randomly select a group of heroes to draft from and will facilitate a draft between two teams. "),e.qZA()(),e.TgZ(9,"div",2)(10,"a",7),e._uU(11,"PvP Rules"),e.qZA()()()),2&r&&(e.xp6(1),e.Q6J("title","Arena the Contest/Tanares Adventures"))},dependencies:[h.m,u.i]}),n})()},{path:"draft-start",component:(()=>{class n{constructor(r,t,o){this.utils=r,this.tanaresDraftService=t,this.router=o,this.numberOfHeroesPerTeam=4,this.numberOfHeroesOfEachClass=1,this.numberOfHeroicActions=4,this.draftRelics=!0,this.draftHeroicActions=!0,this.availableTanaresHeroes=new Map(H),this.availableTanaresRelics=JSON.parse(JSON.stringify(Z)),this.availableTanaresHeroicActions=[...S],this.tanaresDraftService.chosenTanaresHeroes=new Array,this.tanaresDraftService.chosenTanaresRelics=new Array,this.tanaresDraftService.chosenTanaresHeroicActions=new Array}next(){console.log("available heroes:",this.availableTanaresHeroes),console.log("available relics:",this.availableTanaresRelics),console.log("available heroic actions:",this.availableTanaresHeroicActions),this.getRandomHeroes(),this.draftRelics&&this.getRandomRelics(),this.draftHeroicActions&&this.getRandomHeroicActions(),this.router.navigate(["/tanares/draft-results"])}getRandomHeroes(){for(let r=0;r<this.numberOfHeroesOfEachClass;r++)for(const[t,o]of this.availableTanaresHeroes){let i=this.utils.getRandomEntryFromArray(o);this.tanaresDraftService.chosenTanaresHeroes.push(i),this.utils.deleteFromArray(o,i)}console.log("chosen tanares heroes: ",this.tanaresDraftService.chosenTanaresHeroes)}getRandomRelics(){for(let r=0;r<2;r++){let t=this.utils.getRandomEntryFromArray(this.availableTanaresRelics.level1);this.tanaresDraftService.chosenTanaresRelics.push(t),this.utils.deleteFromArray(this.availableTanaresRelics.level1,t),t=this.utils.getRandomEntryFromArray(this.availableTanaresRelics.level2),this.tanaresDraftService.chosenTanaresRelics.push(t),this.utils.deleteFromArray(this.availableTanaresRelics.level2,t),t=this.utils.getRandomEntryFromArray(this.availableTanaresRelics.level3),this.tanaresDraftService.chosenTanaresRelics.push(t),this.utils.deleteFromArray(this.availableTanaresRelics.level3,t)}console.log("ending choses tanares relics: ",this.tanaresDraftService.chosenTanaresRelics)}getRandomHeroicActions(){for(let r=0;r<this.numberOfHeroicActions;r++){let t=this.utils.getRandomEntryFromArray(this.availableTanaresHeroicActions);this.tanaresDraftService.chosenTanaresHeroicActions.push(t),this.utils.deleteFromArray(this.availableTanaresHeroicActions,t)}console.log("ending choses tanares heroic actions: ",this.tanaresDraftService.chosenTanaresHeroicActions)}}return n.\u0275fac=function(r){return new(r||n)(e.Y36(D.R),e.Y36(p),e.Y36(d.F0))},n.\u0275cmp=e.Xpm({type:n,selectors:[["app-tanares-draft-start"]],standalone:!0,features:[e.jDz],decls:32,vars:16,consts:[[1,"container"],[3,"title"],["for","numberOfHeroes",1,"h6"],["id","numberOfHeroes","aria-label","Number of characters per team",1,"form-select","mb-3",2,"max-width","400px",3,"ngModel","ngModelChange"],[3,"ngValue"],["selected","",3,"ngValue"],[1,"form-check"],["type","checkbox","id","undeadCheckbox","checked","",1,"form-check-input",3,"ngModel","ngModelOptions","ngModelChange"],["for","undeadCheckbox",1,"form-check-label"],[4,"ngIf"],[1,"btn","btn-primary","my-3",3,"click"],[1,"bi","bi-arrow-right"],["for","numberOfHeroicActions",1,"h6"],["id","numberOfHeroicActions","aria-label","Number of characters per team",1,"form-select","mb-3",2,"max-width","400px",3,"ngModel","ngModelChange"]],template:function(r,t){1&r&&(e.TgZ(0,"div",0),e._UZ(1,"app-heading-with-back",1),e.TgZ(2,"label",2),e._uU(3,"Number of heroes per team:"),e.qZA(),e.TgZ(4,"select",3),e.NdJ("ngModelChange",function(i){return t.numberOfHeroesPerTeam=i}),e.TgZ(5,"option",4),e._uU(6,"Three"),e.qZA(),e.TgZ(7,"option",5),e._uU(8,"Four"),e.qZA(),e.TgZ(9,"option",4),e._uU(10,"Five"),e.qZA()(),e.TgZ(11,"label",2),e._uU(12,"Number of random heroes of each class to choose from:"),e.qZA(),e.TgZ(13,"select",3),e.NdJ("ngModelChange",function(i){return t.numberOfHeroesOfEachClass=i}),e.TgZ(14,"option",5),e._uU(15,"One"),e.qZA(),e.TgZ(16,"option",4),e._uU(17,"Two"),e.qZA(),e.TgZ(18,"option",4),e._uU(19,"Three"),e.qZA()(),e.TgZ(20,"div",6)(21,"input",7),e.NdJ("ngModelChange",function(i){return t.draftHeroicActions=i}),e.qZA(),e.TgZ(22,"label",8),e._uU(23," Draft Heroic Actions? "),e.qZA()(),e.YNc(24,R,14,6,"ng-container",9),e.TgZ(25,"div",6)(26,"input",7),e.NdJ("ngModelChange",function(i){return t.draftRelics=i}),e.qZA(),e.TgZ(27,"label",8),e._uU(28," Draft PvP Artifacts? "),e.qZA()(),e.TgZ(29,"button",10),e.NdJ("click",function(){return t.next()}),e._uU(30," Next "),e._UZ(31,"i",11),e.qZA()()),2&r&&(e.xp6(1),e.Q6J("title","Arena the Contest/Tanares Adventures Draft Start"),e.xp6(3),e.Q6J("ngModel",t.numberOfHeroesPerTeam),e.xp6(1),e.Q6J("ngValue",3),e.xp6(2),e.Q6J("ngValue",4),e.xp6(2),e.Q6J("ngValue",5),e.xp6(4),e.Q6J("ngModel",t.numberOfHeroesOfEachClass),e.xp6(1),e.Q6J("ngValue",1),e.xp6(2),e.Q6J("ngValue",2),e.xp6(2),e.Q6J("ngValue",3),e.xp6(3),e.Q6J("ngModel",t.draftHeroicActions)("ngModelOptions",e.DdM(14,g)),e.xp6(3),e.Q6J("ngIf",t.draftHeroicActions),e.xp6(2),e.Q6J("ngModel",t.draftRelics)("ngModelOptions",e.DdM(15,g)))},dependencies:[m.ez,m.O5,h.m,u.i,c.u5,c.YN,c.Kr,c.Wl,c.EJ,c.JJ,c.On]}),n})()},{path:"draft-results",component:C}]}}]);