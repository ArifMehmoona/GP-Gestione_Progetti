import { Component } from '@angular/core';
import { Router } from '@angular/router';
import { Best_sellers } from 'models/model';


@Component({
  selector: 'app-best-sellers',
  templateUrl: './best-sellers.component.html',
  styleUrls: ['./best-sellers.component.css']
})
export class Best_SellersComponent {
  best_sellers: Best_sellers[];

  constructor(private router:Router){
    this.best_sellers=this.router.getCurrentNavigation().extras.state as Best_sellers[];
  }
}

