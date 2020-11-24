import { Component, OnInit } from '@angular/core';
import {Main} from '../../providers/Main';

import{AngularFirestore, AngularFirestoreCollection, AngularFirestoreDocument} from '@angular/fire/firestore';
import { Observable } from 'rxjs';
import { map } from 'rxjs/operators';
import {Router} from '@angular/router';

@Component({
  selector: 'app-home',
  templateUrl: 'home.page.html',
  styleUrls: ['home.page.scss'],
})
export class HomePage implements OnInit {

  items: Observable<any[]>;
  homeMaterial;

  constructor(
    private main: Main,
    private router: Router,
    private db: AngularFirestore
  ){
    this.items = db.collection('users').valueChanges();
    this.homeMaterial = "You have been invited to the anniversary bash of Mr. Francis Fisk, a noted businessman. The guest list includes a number of Fisk’s high-society friends, family members, and business associates. Everyone is expecting an evening dinner, drinks, dancing and gossip—they aren’t expecting a black out and a grisly murder in the darkness.<br><br>" +
                            "Please note: The majority of the contents of this app are intended for the eyes of the Host/Hostess only! The success of your party hinges on a strong element of intrigue and mystery, so be certain not to share this information with other players. The material that should be provided to your guests is clearly described in this app. Under no circumstances should you allow any of your players view this planning information! <br><br>" +
                            "Murder in Manhattan <br>by Chandler Kennedy, Ken Blumreich, Kyle Maresh <br>Design and Art by Chandler Kennedy, Josh Cairney and Ken Blumreich <br>Layout by Ken Blumreich <br>Edited by Melissa Buchanan" +
                            "Ken Blumreich and Playing with Murder Press 2012 <br>A personal, revocable, nontransferable, and non-exclusive license to make limited personal use of this material is granted to you subject to the terms and conditions described in the Playing with Murder User Agreement, the text of which can be found at http://www.playingwithmurder.com/user-agreement-i-6.html <br><br>" +
                            "Last Revision: 2/6/16";
  }

  doSomething(){
    this.router.navigate(['start-game']);
  }

  ngOnInit() {

  }

}
