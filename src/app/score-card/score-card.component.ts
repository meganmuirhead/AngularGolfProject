import { Component, OnInit } from '@angular/core';
import {MatSelectModule} from '@angular/material/select';

@Component({
  selector: 'app-score-card',
  templateUrl: './score-card.component.html',
  styleUrls: ['./score-card.component.less']
})
export class ScoreCardComponent implements OnInit {
  lvls = [
    {value: 'pro', viewValue: 'Pro'},
    {value: 'champ', viewValue: 'Champion'},
    {value: 'men', viewValue: 'Men'},
    {value: 'women', viewValue: 'Women'}
  ];
  constructor() { }

  ngOnInit() {
  }

}
