
import {Component, OnInit} from '@angular/core';
import {ActivatedRoute} from '@angular/router';
import { CourseService } from '../course.service';
import {UserDataModel} from '../user-data.model';
import { Observable } from 'rxjs';
import {AngularFirestore, AngularFirestoreCollection} from 'angularfire2/firestore'
import { map} from 'rxjs/operators';
import {UsePipeDecoratorRule} from 'codelyzer';


export interface Player {
  name: string;

}

export interface PlayerId extends Player {
  id: string;
}


@Component({
  selector: 'app-score-card',
  templateUrl: './score-card.component.html',
  styleUrls: ['./score-card.component.less']
})
export class ScoreCardComponent implements OnInit {
  player: any;
  courseInfo: any;
  teeSelected: string;
  playerInfo: {1: string};
  userData: UserDataModel;



  parArray: string[] = [];
  handicapArray: Array<string> = [];
  yardageArray: Array<string> = [];



  parvalue = [
    {value: 'pro', viewValue: 'Pro'},
    {value: 'champion', viewValue: 'Champion'},
    {value: 'men', viewValue: 'Male'},
    {value: 'women', viewValue: 'Female'},

  ];
  private playerCollection:AngularFirestoreCollection<UserDataModel>;

  constructor(private route: ActivatedRoute, private courseService: CourseService, afd: AngularFirestore) {
    this.userData = new UserDataModel();
    this.playerCollection = afd.collection<any>('PlayersName');
    // this.playerCollection = db.collection<Player>('PlayersName').valueChanges();


    this.playerCollection.snapshotChanges()
      .subscribe(d => {
        console.log('d', d);
        this.userData = d[0].payload.doc.data();
      })
    ;

  }



  saveScore() {
    let json = JSON.stringify(this.userData);
    this.playerCollection.doc('hi').set(JSON.parse(json));
  }
  ngOnInit() {
    this.teeSelected = 'women';
    this.courseInfo = this.route.params.subscribe(
      params => {

        this.courseService.getCourseInfo(params['id']).subscribe(
          response => {
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

  }

  scoreUpdate(event, playerNumber, holeNumber) {
    let input = +event.target.value;
    this.userData['player' + playerNumber].scores['hole' + holeNumber] = input;
  }

  grandTotal(playerNumber: number): number {
    let total = 0;
    for (let i = 1; i <= 18; i++) {
      total += this.userData['player' + playerNumber].scores['hole' + i];
    }
    return total;
  }

  inTotal(playerNumber: number): number {
    let total = 0;
    for (let i = 1; i <= 9; i++) {
      total += this.userData['player' + playerNumber].scores['hole' + i];
    }
    return total;
  }

  outTotal(playerNumber: number): number {
    let total = 0;
    for (let i = 10; i <= 18; i++) {
      total += this.userData['player' + playerNumber].scores['hole' + i];
    }
    return total;
  }


}
