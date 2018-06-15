import { Component, OnInit } from '@angular/core';
import {ActivatedRoute} from '@angular/router';


@Component({
  selector: 'app-score-card',
  templateUrl: './score-card.component.html',
  styleUrls: ['./score-card.component.less']
})
export class ScoreCardComponent implements OnInit {
  constructor(private route: ActivatedRoute) { }

  ngOnInit() {
    this.route.params.subscribe(
      params => {
        console.log(params)
      }
    )
  }

}
