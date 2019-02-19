import { Component, OnInit, Input, Output } from '@angular/core';
import { Collegue, Vote } from '../models';
import { DataService } from '../services/data.service';

@Component({
  selector: 'app-accueil',
  templateUrl: './accueil.component.html',
  styleUrls: ['./accueil.component.css']
})
export class AccueilComponent implements OnInit {

  listeColleguesAccueil: Collegue[]


  constructor(private _dataServ: DataService) {
    this._dataServ.lister().subscribe(
      valeur => this.listeColleguesAccueil = valeur)
  }

  ngOnInit() {
  }
  refresh(): void {
    window.location.reload();
  }


}
