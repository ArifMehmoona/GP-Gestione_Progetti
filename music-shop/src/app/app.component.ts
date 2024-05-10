import { HttpClient } from '@angular/common/http';
import { Component, OnInit } from '@angular/core';
import { Best_sellers, Cart, Cd, Vinyl, Search } from './models/model';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent implements OnInit{
  [x: string]: any;
  best_sellers: Best_sellers[];
  cart: Cart[];
  cd: Cd[];
  vinyl: Vinyl [];
  search: Search[];
  
  
  constructor(private http: HttpClient) {}
  ngOnInit(): void {
 
    this.http.get('https://4200-arifmehmoon-gpgestionep-5ebdaefkj3n.ws-eu111.gitpod.io/api').subscribe(data => {
      this.best_sellers = data['Best_sellers'];
      this.cart = data['Cart'];
      this.cd = data['Cd'];
      this.vinyl = data['Vinyl'];
      this.search= data ['Search'];
      
  });
  }
}
