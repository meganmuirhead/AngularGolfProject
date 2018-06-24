import {Component, OnInit} from '@angular/core';
import {ActivatedRoute} from '@angular/router';
import {CourseService} from '../course.service';


@Component({
  selector: 'app-score-card',
  templateUrl: './score-card.component.html',
  styleUrls: ['./score-card.component.less']
})
export class ScoreCardComponent implements OnInit {

  courseInfo: any;
  teeSelected: string;
  playerInfo: {1: string};



  parArray: string[] = [];
  handicapArray: Array<string> = [];
  yardageArray: Array<string> = [];

  parvalue = [
    {value: 'pro', viewValue: 'Pro'},
    {value: 'champion', viewValue: 'Champion'},
    {value: 'men', viewValue: 'Male'},
    {value: 'women', viewValue: 'Female'},

  ];

  constructor(private route: ActivatedRoute, private courseService: CourseService) {
  }

  ngOnInit() {
    this.teeSelected = 'women';
    this.courseInfo = this.route.params.subscribe(
      params => {
        console.log(params);
        this.courseService.getCourseInfo(params['id']).subscribe(
          response => {
            console.log(response);
            this.courseInfo = response;
            this.parseData();
          }
        );
      }
    );

  }
  teeLevel(){
    console.log(this.teeSelected);
    this.parseData();
  }

  private parseData(): void {
    this.parArray = [];
    this.handicapArray = [];
    this.yardageArray = [];
    for(let i = 0; i < this.courseInfo.holes.length; i++) {
      let hole = this.courseInfo.holes[i];
      let tee = hole.teeBoxes.filter(e => e.teeType === this.teeSelected)[0];
      this.parArray[i] = tee.par;
      this.handicapArray[i] = tee.hcp;
      this.yardageArray[i] = tee.yards;
    }
    console.log(this.handicapArray[9]);
    console.log(this.yardageArray[9]);
  }
  scoreUpdate(event, playerNumber) {


  }
}
