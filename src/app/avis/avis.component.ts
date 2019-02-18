import { Component, OnInit, Output, EventEmitter, Input } from '@angular/core';
import { Avis } from '../models';

@Component({
  selector: 'app-avis',
  templateUrl: './avis.component.html',
  styleUrls: ['./avis.component.css']
})
export class AvisComponent implements OnInit {

  @Output() change: EventEmitter<Avis> = new EventEmitter<Avis>();
  @Input() btn: boolean;
  @Input() btn2: boolean;

  constructor() {
  }

  ngOnInit() {

  }

  CLickJAime() {
    this.change.emit(Avis.AIMER)
  }

  CLickJAimePas() {
    this.change.emit(Avis.DETESTER)

  }

}
