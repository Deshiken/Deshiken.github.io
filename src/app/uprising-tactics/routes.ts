import { Route } from "@angular/router";
import { UprisingTacticsHomeComponent } from "./uprising-tactics-home/uprising-tactics-home.component";
import { MapBuilderOptionsComponent } from "../uprising/map-builder-options/map-builder-options.component";
import { SpellCardsComponent } from "../uprising/spell-cards/spell-cards.component";
import { NeutralAbilitiesViewComponent } from "./neutral-abilities-view/neutral-abilities-view.component";
import { NeutralAbilitiesPrintSheetComponent } from "./neutral-abilities-print-sheet/neutral-abilities-print-sheet.component";

export const UPRISING_TACTICS_ROUTES: Route[] = [
    { 
      path: '', component: UprisingTacticsHomeComponent 
    },
    { 
      path: 'neutral-abilities', component: NeutralAbilitiesViewComponent
    },
    { 
      path: 'neutral-abilities-print-sheet', component: NeutralAbilitiesPrintSheetComponent
    },
    {  
      path: 'map-builder-options', 
      loadChildren: () => import('../uprising/uprising.module').then(m => m.UprisingModule)
    },
    { 
      path: 'spell-cards',
      loadChildren: () => import('../uprising/uprising.module').then(m => m.UprisingModule)
    },
]