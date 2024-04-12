import { Component } from '@angular/core';
import { Router } from '@angular/router';
import { Cart } from 'models/model';


@Component({
  selector: 'app-cart',
  templateUrl: './cart.component.html',
  styleUrls: ['./cart.component.css']
})
export class CartComponent {
  cart: Cart[];

  constructor(private router:Router){
    this.cart=this.router.getCurrentNavigation().extras.state as Cart[];
  }
}
