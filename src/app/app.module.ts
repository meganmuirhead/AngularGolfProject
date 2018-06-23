import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppComponent } from './app.component';
import {AppRoutingModule} from './app-routing.module';
import { ScoreCardComponent } from './score-card/score-card.component';
import { HomePageComponent } from './home-page/home-page.component';
import {MatButtonModule} from '@angular/material/button';
import {MatSelectModule} from '@angular/material/select';
import {BrowserAnimationsModule} from '@angular/platform-browser/animations';
import {MaterialModule} from './material.module';
import {MatDividerModule} from '@angular/material/divider';
import {MatFormFieldModule, MatListModule, MatMenuModule, MatTableModule} from '@angular/material';
import {AngularFireModule} from 'angularfire2';
import {environment} from '../environments/environment';
import {AngularFirestoreModule} from 'angularfire2/firestore';
import { PlayersComponent } from './players/players.component';
import {CourseService} from './course.service';
import { HttpClientModule} from '@angular/common/http';
import {FormsModule} from '@angular/forms';
import { NamePipe } from './name.pipe';
import {MatInputModule} from '@angular/material/input';




@NgModule({
  declarations: [
    AppComponent,
    ScoreCardComponent,
    HomePageComponent,
    PlayersComponent,
    NamePipe
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    MatButtonModule,
    MaterialModule,
    MatSelectModule,
    BrowserAnimationsModule,
    MatDividerModule,
    MatListModule,
    MatSelectModule,
    AngularFireModule.initializeApp(environment.firebase),
    AngularFirestoreModule,
    MatTableModule,
    HttpClientModule,
    MatMenuModule,
    MatFormFieldModule,
    FormsModule,
    MatInputModule
  ],
  providers: [CourseService],
  bootstrap: [AppComponent]
})
export class AppModule { }
