import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { HomePageComponent } from './home-page/home-page.component';



const routes: Routes = [
  { 
    path: '', 
    component: HomePageComponent,
    data: {
      metaDescription: 'We can’t find the page you’re looking for, but have some other pages to explore',
      title: 'Page not found | My Say | Say Insurance ®'
    } 
  },
  { 
    path: 'holas', 
    loadChildren: () => import('./holas/holas.module').then(m => m.HolasModule) 
  }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
