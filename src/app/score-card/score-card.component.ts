import { Component, OnInit } from '@angular/core';


@Component({
  selector: 'app-score-card',
  templateUrl: './score-card.component.html',
  styleUrls: ['./score-card.component.less']
})
export class ScoreCardComponent implements OnInit {
  lvls = [
    {value: 'pro-0', viewValue: 'Pro'},
    {value: 'champ-1', viewValue: 'Champion'},
    {value: 'men-2', viewValue: 'Men'},
    {value: 'women-3', viewValue: 'Women'}
  ];
  pars = [
    {value: 'hole1', viewValue: 'Hole 1'},
    {value: 'hole2', viewValue: 'Hole 2'},
    {value: 'hole3', viewValue: 'Hole 3'},
    {value: 'hole4', viewValue: 'Hole 4'},
    {value: 'hole5', viewValue: 'Hole 5'},
    {value: 'hole6', viewValue: 'Hole 6'},
    {value: 'hole7', viewValue: 'Hole 7'},
    {value: 'hole8', viewValue: 'Hole 8'},
    {value: 'hole9', viewValue: 'Hole 9'},
  ];
  constructor() { }

  ngOnInit() {
  }

}
