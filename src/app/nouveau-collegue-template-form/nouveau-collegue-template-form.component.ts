import { Component, OnInit } from '@angular/core';
import { HttpClient, HttpHeaders } from '@angular/common/http';
import { Personne } from '../models';
import { DataService } from '../services/data.service';


@Component({
  selector: 'app-nouveau-collegue-template-form',
  templateUrl: './nouveau-collegue-template-form.component.html',
  styleUrls: ['./nouveau-collegue-template-form.component.css']
})
export class NouveauCollegueTemplateFormComponent implements OnInit {
  unePersonne: Personne = {
    matricule: '',
    pseudo: '',
    url: ''
  }

  constructor(private _srv: DataService) { }

  ngOnInit() {
  }
  ajouter() {
    console.log(this.unePersonne)
    let personne = this._srv.ajoutCollegue(this.unePersonne).subscribe();
  }
}
