import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { CdComponent } from './cd/cd.component';
import { VinylComponent } from './vinyl/vinyl.component';
import { Best_SellersComponent } from './best-sellers/best-sellers.component';
import { CartComponent } from './cart/cart.component';
import { HomepageComponent } from './homepage/homepage.component';

const routes: Routes = [
  { path: '', redirectTo: '/homepage', pathMatch: 'full'},
  { path: 'cd', component: CdComponent}, 
  { path: 'best-sellers', component: Best_SellersComponent },
  { path: 'cart', component: CartComponent },
  { path: 'vinyl', component: VinylComponent},
  { path: 'homepage', component: HomepageComponent }
  
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
