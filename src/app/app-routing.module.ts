import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { DescentComponent } from './descent/descent.component';
import { HomePageComponent } from './home-page/home-page.component';

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
    path: 'holas', 
    data: { animation: 'isRight' }, //can be used to specify routing animation state/transition
    loadChildren: () => import('./holas/holas.module').then(m => m.HolasModule) 
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
