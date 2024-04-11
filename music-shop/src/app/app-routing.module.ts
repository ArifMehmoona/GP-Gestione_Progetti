import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { CdComponent } from './cd/cd.component';
import { VinylComponent } from './vinyl/vinyl.component';
import { SearchCdComponent } from './search-cd/search-cd.component';
import { SearchVinylComponent } from './search-vinyl/search-vinyl.component';
import { BestSellersComponent } from './best-sellers/best-sellers.component';

const routes: Routes = [
  { path: 'cd', component: CdComponent, children: [
    { path: 'search', component: SearchCdComponent },
    { path: 'best-sellers', component: BestSellersComponent }
  ]},
  { path: 'vinyl', component: VinylComponent, children: [
    { path: 'search', component: SearchVinylComponent },
    { path: 'best-sellers', component: BestSellersComponent }
  ]}
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
