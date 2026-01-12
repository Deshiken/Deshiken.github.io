import { Route } from "@angular/router";
import { UprisingTacticsHomeComponent } from "./uprising-tactics-home/uprising-tactics-home.component";
import { MapBuilderOptionsComponent } from "../uprising/map-builder-options/map-builder-options.component";
import { SpellCardsComponent } from "../uprising/spell-cards/spell-cards.component";

export const UPRISING_TACTICS_ROUTES: Route[] = [
    { path: '', component: UprisingTacticsHomeComponent },
    // { path: 'map-builder-options', component: MapBuilderOptionsComponent },
    {  
      path: 'map-builder-options', 
      loadChildren: () => import('../uprising/uprising.module').then(m => m.UprisingModule)
    },

    { 
      path: 'spell-cards',
      loadChildren: () => import('../uprising/uprising.module').then(m => m.UprisingModule)
     },
]