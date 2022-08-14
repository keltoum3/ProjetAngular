import { Injectable } from '@angular/core';
import { Trajet } from './models/Trajet';

@Injectable({
  providedIn: 'root'
})
export class TrajetService {

  trajets: Trajet[] = [
    new Trajet("fa1f5f40-be3b-11eb-91ec-7f5875ecfb46", "Lyon", "Paris",  "1er Juin 2022"),
    new Trajet("fa1f5f40-be3b-11eb-91ec-7f5875ecfb47", "Nice", "Monaco",  "3 Septembre 2022")];

  constructor() { }
}
