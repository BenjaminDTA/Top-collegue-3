import { Component, OnInit, Input, Output } from '@angular/core';
import { Collegue } from '../models';

@Component({
  selector: 'app-accueil',
  templateUrl: './accueil.component.html',
  styleUrls: ['./accueil.component.css']
})
export class AccueilComponent implements OnInit {

  @Input() listeColleguesAccueil: Collegue[]


  constructor() { }

  ngOnInit() {
  }

}
