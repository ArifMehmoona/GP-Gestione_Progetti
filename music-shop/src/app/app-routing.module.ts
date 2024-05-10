import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { CdComponent } from './cd/cd.component';
import { VinylComponent } from './vinyl/vinyl.component';
import { SearchComponent } from './search/search.component';
import { BestSellersComponent } from './best-sellers/best-sellers.component';

const routes: Routes = [
  { path: 'cd', component: CdComponent, children: [
    { path: 'search', component: SearchComponent },
    { path: 'best-sellers', component: BestSellersComponent }
  ]},
  { path: 'vinyl', component: VinylComponent, children: [
    { path: 'search', component: SearchComponent },
    { path: 'best-sellers', component: BestSellersComponent }
  ]}
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
