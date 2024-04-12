import { Component, OnInit } from '@angular/core';
import {HttpClient} from '@angular/common/http'; //HTTP CLIENT

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})

export class AppComponent implements OnInit{
  [x: string]: any;
  best_sellers: [];
  cart: [];
  cd: [];
  search_cd: [];
  search_vinyl: [];
  vinyl: [];

  constructor(private http: HttpClient) {}
  ngOnInit(): void {
    this.http.get('https://3000-arifmehmoon-gpgestionep-vb5bq47kwpc.ws-eu110.gitpod.io/api').subscribe(data => {
      this.best_sellers = data['Best_sellers'];
      this.cart = data['Cart'];
      this.cd = data['Cd'];
      this.search_cd = data['Search_cd'];
      this.search_vinyl = data['Search_vinyl'];
      this.vinyl = data['Vinyl'];

    });
  }
}