import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { AboutComponent } from './about/about.component';
import { DescentComponent } from './descent/descent.component';
import { HomePageComponent } from './home-page/home-page.component';
import { PricingComponent } from './pricing/pricing.component';

const routes: Routes = [
  { 
    path: '', 
    component: HomePageComponent,
    data: {
      metaDescription: 'We can’t find the page you’re looking for, but have some other pages to explore',
      title: 'Page not found | My Say | Say Insurance ®',
      animation: 'home' //can be used to specify routing animation state/transition
    } 
  },
  {
    path: 'pricing',
    component: PricingComponent,
  },
  {
    path: 'about',
    component: AboutComponent,
  },
  { 
    path: 'randomize', 
    data: { animation: 'isRight' }, //can be used to specify routing animation state/transition
    loadChildren: () => import('./randomize/randomize.module').then(m => m.RandomizeModule) 
  },
  { 
    path: 'holas', 
    data: { animation: 'isRight' }, //can be used to specify routing animation state/transition
    loadChildren: () => import('./holas/holas.module').then(m => m.HolasModule) 
  },
  { 
    path: 'kemet', 
    data: { animation: 'isRight' }, //can be used to specify routing animation state/transition
    loadChildren: () => import('./kemet/kemet.module').then(m => m.KemetModule) 
  },
  { 
    path: 'uprising', 
    data: { animation: 'isRight' }, //can be used to specify routing animation state/transition
    loadChildren: () => import('./uprising/uprising.module').then(m => m.UprisingModule) 
  },
  { 
    path: 'descent', 
    component: DescentComponent
  },
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
