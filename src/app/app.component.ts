import { Component } from '@angular/core';
import {AngularFirestore} from 'angularfire2/firestore';
import {AngularFireDatabase} from 'angularfire2/database';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.less']
})

export class AppComponent {
  playerName: any[];

  constructor(db: AngularFireDatabase) {

  }
}
