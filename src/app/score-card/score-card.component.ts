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

  parvalue = [
    {value: 'pro', viewValue: 'Pro'},
    {value: 'champion', viewValue: 'Champion'},
    {value: 'male', viewValue: 'Male'},
    {value: 'female', viewValue: 'Female'},

  ];

  constructor(private route: ActivatedRoute, private courseService: CourseService) {
  }

  ngOnInit() {
    this.courseInfo = this.route.params.subscribe(
      params => {
        console.log(params);
        this.courseService.getCourseInfo(params['id']).subscribe(
          response => {
            console.log(response);
          }
        );
      }
    );
  }

}
