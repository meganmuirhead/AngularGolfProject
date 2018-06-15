import { Component, OnInit } from '@angular/core';
import {CourseService} from '../course.service';
import {Course} from '../course';
import {Observable} from 'rxjs';


@Component({
  selector: 'app-home-page',
  templateUrl: './home-page.component.html',
  styleUrls: ['./home-page.component.less']
})
export class HomePageComponent implements OnInit {

  courseObservable: Observable<Course[]>;

  constructor(private courseService: CourseService) {
    this.courseObservable = this.courseService.getCoursesInfo();
  }

  ngOnInit() {


  }

}
