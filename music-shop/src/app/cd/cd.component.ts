import { Component } from '@angular/core';
import { Cd } from 'models/model';
import { Router } from '@angular/router';


@Component({
  selector: 'app-cd',
  templateUrl: './cd.component.html',
  styleUrls: ['./cd.component.css']
})
export class CdComponent {
  cd: Cd[];

  constructor(private router:Router){
    this.cd=this.router.getCurrentNavigation().extras.state as Cd[];
  }
}

