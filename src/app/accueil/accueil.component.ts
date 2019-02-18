import { Component, OnInit, Input, Output } from '@angular/core';
import { Collegue } from '../models';
import { DataService } from '../services/data.service';

@Component({
  selector: 'app-accueil',
  templateUrl: './accueil.component.html',
  styleUrls: ['./accueil.component.css']
})
export class AccueilComponent implements OnInit {

  listeColleguesAccueil: Collegue[] = this._dataServ.lister();


  constructor(private _dataServ: DataService) { }

  ngOnInit() {
  }
  refresh(): void {
    window.location.reload();
  }


}
