import {Component, Input, OnInit} from '@angular/core';
import { Trajet } from "../models/Trajet";

@Component({
  selector: 'app-trajet',
  templateUrl: './trajet.component.html',
  styleUrls: ['./trajet.component.css']
})
export class TrajetComponent implements OnInit {

  @Input() trajet!: Trajet;

  constructor() { }

  ngOnInit(): void {
  }

}
