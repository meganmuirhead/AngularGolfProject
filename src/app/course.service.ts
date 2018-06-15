import {Injectable} from '@angular/core';
import {Observable} from 'rxjs';
import {Course} from './course';
import {HttpClient} from '@angular/common/http';
import { map } from 'rxjs/operators';

@Injectable({
  providedIn: 'root'
})
export class CourseService {

  constructor(private http: HttpClient) {

  }

  getCourseInfo(courseID): Observable<any>{
    return this.http.get('https://uxcobra.com/golfapi/course' + courseID + '.txt');
  }

  getCoursesInfo(): Observable<Course[]> {
    return this.http.get('https://uxcobra.com/golfapi/courses.txt')
      .pipe(
        map(
          (response: any) => {
            return response.courses;
          }
        )
      );
  };
}
