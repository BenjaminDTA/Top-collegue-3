import { Component, OnInit } from '@angular/core';
import { HttpClient, HttpHeaders } from '@angular/common/http';
import { Personne } from '../models';


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

  constructor(private _http: HttpClient) { }

  ngOnInit() {
  }
  ajouter() {
    console.log(this.unePersonne);
  }
}
