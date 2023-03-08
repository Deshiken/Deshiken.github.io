import { Route } from "@angular/router";
import { DescentHomeComponent } from "./descent-home/descent-home.component";
import { DescentPartyBuilderComponent } from "./descent-party-builder/descent-party-builder.component";

export const DESCENT_ROUTES: Route[] = [
  {path: '', component: DescentHomeComponent},
  {path: 'build-party', component: DescentPartyBuilderComponent},
];