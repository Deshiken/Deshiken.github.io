import { Route } from "@angular/router";
import { TanaresDraftResultsComponent } from "./tanares-draft/tanares-draft-results/tanares-draft-results.component";
import { TanaresDraftStartComponent } from "./tanares-draft/tanares-draft-start/tanares-draft-start.component";
import { TanaresHomeComponent } from "./tanares-home/tanares-home.component";

export const TANARES_ROUTES: Route[] = [
  {path: '', component: TanaresHomeComponent},
  {path: 'draft-start', component: TanaresDraftStartComponent},
  {path: 'draft-results', component: TanaresDraftResultsComponent},
];