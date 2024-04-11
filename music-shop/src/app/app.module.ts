import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { CdComponent } from './cd/cd.component';
import { VinylComponent } from './vinyl/vinyl.component';
import { SearchCdComponent } from './search-cd/search-cd.component';
import { SearchVinylComponent } from './search-vinyl/search-vinyl.component';
import { BestSellersComponent } from './best-sellers/best-sellers.component';
import { CartComponent } from './cart/cart.component';

@NgModule({
  declarations: [
    AppComponent,
    CdComponent,
    VinylComponent,
    SearchCdComponent,
    SearchVinylComponent,
    BestSellersComponent,
    CartComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
