import { Component } from '@angular/core';
import { Trajet } from './models/Trajet';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {

  trajets: Trajet[] = [
    new Trajet("fa1f5f40-be3b-11eb-91ec-7f5875ecfb46", "Lyon", "Paris",  "1er Juin 2022"),
    new Trajet("fa1f5f40-be3b-11eb-91ec-7f5875ecfb47", "Nice", "Monaco",  "3 Septembre 2022")];

  constructor(){
    setTimeout(() => {
      this.trajets.push(new Trajet("fa1f5f40-be3b-11eb-91ec-7f5875ecfb48", "Lille", "Dijon",  "21 Janvier 2023"));
    }, 3000);
  }
}
