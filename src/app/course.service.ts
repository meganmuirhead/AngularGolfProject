import {Injectable} from '@angular/core';
import {Observable} from 'rxjs';
import {Course} from './course';
import {HttpClient} from '@angular/common/http';

@Injectable({
  providedIn: 'root'
})
export class CourseService {

  constructor(private http: HttpClient) {

  }

  getCourseInfo(): Observable<Course> {
    return null;

  };
}
