
import {Component, OnInit} from '@angular/core';
import {ActivatedRoute} from '@angular/router';
import {CourseService} from '../course.service';
import {UserDataModel} from '../user-data.model';
import { Observable } from 'rxjs';
import {AngularFirestore, AngularFirestoreCollection} from 'angularfire2/firestore'
import { map} from 'rxjs/operators';


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
  private playerCollection:AngularFirestoreCollection<Player>;

  players: Observable<any>;

  constructor(private route: ActivatedRoute, private courseService: CourseService, afd: AngularFirestore) {
    this.userData = new UserDataModel();
    this.playerCollection = afd.collection<Player>('PlayersName');
    // this.playerCollection = db.collection<Player>('PlayersName').valueChanges();


    this.players = this.playerCollection.snapshotChanges().pipe(
      map(actions => actions.map(a => {
        const data = a.payload.doc.data() as Player;
        const id = a.payload.doc.id;
        return { id, ...data };
      }))
    );

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
  // onSave(){
  //   this.playerCollection.doc(this.player.name).set(this.player);
  // }
}
