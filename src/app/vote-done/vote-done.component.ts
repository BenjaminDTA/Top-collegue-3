import { Component, OnInit } from '@angular/core';
import { DataService } from '../services/data.service';

@Component({
  selector: 'app-vote-done',
  templateUrl: './vote-done.component.html',
  styleUrls: ['./vote-done.component.css']
})
export class VoteDoneComponent implements OnInit {
  msg = ""
  cpt: number
  constructor(private _serv: DataService) {
    this._serv.listerVotes().subscribe(value => {
      this.cpt += 1;
      this.message()
    })
    this.cpt = +sessionStorage.getItem('nombre')
  }

  ngOnInit() {
    this.message()
  }
  message() {
    this.msg = "Le nombre de vote effectué est de : " + this.cpt;
    sessionStorage.setItem("nombre", String(this.cpt));
  }
}
