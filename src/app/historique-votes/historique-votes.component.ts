import { Component, OnInit, Input } from '@angular/core';
import { Vote } from '../models';
import { DataService } from '../services/data.service';

@Component({
  selector: 'app-historique-votes',
  templateUrl: './historique-votes.component.html',
  styleUrls: ['./historique-votes.component.css']
})
export class HistoriqueVotesComponent implements OnInit {
  listeVotes: Vote[] = []

  constructor(private _srv: DataService) { }

  ngOnInit() {
    this._srv.listerVotes().subscribe(value => this.listeVotes.push(value))
  }
  supprimerVote(nb: number) {
    if (nb === 0) {
      this.listeVotes.splice(0, 1)
    } else {
      this.listeVotes.splice(nb, 1)
    }
  }
}
