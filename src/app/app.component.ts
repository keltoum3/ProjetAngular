import { Component } from '@angular/core';
import { Trajet } from './models/Trajet';
import { TrajetService } from './trajet.service';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  constructor( public trajetService : TrajetService){
    setTimeout(() => {
      this.trajetService.trajets.push(new Trajet("fa1f5f40-be3b-11eb-91ec-7f5875ecfb48", "Lille", "Dijon",  "21 Janvier 2023"));
    }, 3000);
  }
}
