import { Component } from '@angular/core';
import { Router } from '@angular/router';
import { Vinyl } from 'models/model';

@Component({
  selector: 'app-vinyl',
  templateUrl: './vinyl.component.html',
  styleUrls: ['./vinyl.component.css']
})
export class VinylComponent {
  vinyl: Vinyl[];

  constructor(private router:Router){
    this.vinyl=this.router.getCurrentNavigation().extras.state as Vinyl[];
  }
}
