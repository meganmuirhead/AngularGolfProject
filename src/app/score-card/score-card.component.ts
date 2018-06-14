import { Component, OnInit } from '@angular/core';


@Component({
  selector: 'app-score-card',
  templateUrl: './score-card.component.html',
  styleUrls: ['./score-card.component.less']
})
export class ScoreCardComponent implements OnInit {
  currentList = [];
  constructor() { }

  ngOnInit() {
  }

}
