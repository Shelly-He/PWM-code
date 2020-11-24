import { Component, OnInit } from '@angular/core';
import { Main } from '../../providers/Main';
import { Router } from '@angular/router';
import { NavigationEnd } from '@angular/router';
//import firebase from 'firebase';
import { environment } from 'src/environments/environment';
import * as firebase from 'firebase/app';
import 'firebase/firestore';
import 'firebase/database';

// import * as firebase from 'firebase/app';
// import { FirebaseService } from './firebase.service';
// import { AngularFireAuth } from '@angular/fire/auth';
//
// import { AngularFireModule } from 'angularfire2';
// import { environment } from '../environments/environment';
// import { AngularFirestoreModule } from 'angularfire2/firestore';


@Component({
  selector: 'app-start-game',
  templateUrl: './start-game.page.html',
  styleUrls: ['./start-game.page.scss'],
})

export class StartGamePage implements OnInit {

  sections;
  navigationSubscription;

    //For Plan, Party, Recap
    public icons = [
      {
        icon: 'bookmarks'
      },
      {
        icon: 'pizza'
      },
      {
        icon: 'journal'
      }
    ];

  constructor(private main:Main, private router:Router){
      this.navigationSubscription = this.router.events.subscribe((e: any) => {
      if (e instanceof NavigationEnd) {
        this.databaseLoad();
      }
    });
    //this.databaseLoad();
  }

  databaseLoad() {
    this.sections = this.main.getMysteryDescription();
  }

  goChapterList(i) {
    this.main.sections = this.sections;
    this.main.sectionIndex = i;
    this.router.navigate(['/chapter-list', i]);
  }

    ngOnInit() {}

    /*next() {
        this.router.navigate(['char-detail']);
    }*/

    
}
