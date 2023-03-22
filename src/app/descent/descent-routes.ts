import { Route } from "@angular/router";
import { DescentHomeComponent } from "./descent-home/descent-home.component";
import { DescentPartyBuilderResultsComponent } from "./descent-party-builder-results/descent-party-builder-results.component";
import { DescentPartyBuilderComponent } from "./descent-party-builder/descent-party-builder.component";

export const DESCENT_ROUTES: Route[] = [
  {path: '', component: DescentHomeComponent},
  {path: 'build-party', component: DescentPartyBuilderComponent},
  {path: 'party-results', component: DescentPartyBuilderResultsComponent},
];