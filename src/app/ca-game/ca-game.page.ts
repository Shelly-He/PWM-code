import { Component, OnInit } from '@angular/core';
import { Main } from '../../providers/Main';
import { Router } from '@angular/router';
import { MenuController } from '@ionic/angular';
import { db } from '../../providers/Fb';


@Component({
  selector: 'app-ca-game',
  templateUrl: './ca-game.page.html',
  styleUrls: ['./ca-game.page.scss'],
})
export class CaGamePage {

  gameName: string = ""
  gameNameAdd: string = ""



  constructor(private main: Main, private router: Router, private menu: MenuController) {


  }

  addGame(){
     const {gameNameAdd} = this
    //Adds party to Guest's account
    db.ref("party/" + gameNameAdd).once('value', snapshot => {
      if(snapshot.exists()){
        db.ref("accounts/" + this.main.currUid + "/parties/" + gameNameAdd).once('value', snapshot => {
          if (!snapshot.exists()){
            db.ref('accounts/' + this.main.currUid + '/parties/' + gameNameAdd).set({
              isHost: false,
            });
            db.ref('party/' + gameNameAdd + '/guests/' + this.main.currUid).update({
              name: this.main.getAccountName(),
            });
            window.alert("Game added.");
            this.main.currAccount.populateParties();
            this.router.navigate(['choose-game']);
          }else{
            window.alert("Game already added.");
          }
        });
      }else{
        window.alert("Game does not exist.");
      }
    });
  }

  createGame(){
    const {gameName} = this;
    //Creates party and adds to host
    var pushRef = db.ref('party/').push({
      isArchived: false,
      mystery: "Murder in Manhattan",
      name: gameName,
      host: this.main.currUid,
    });
    db.ref('accounts/' + this.main.currUid+ '/parties/' + pushRef.key).set({
      isHost: true,
    });
    db.ref('party/' + pushRef.key + '/guests/' + this.main.currUid).update({
      name: this.main.getAccountName(),
    });
    window.alert("Game created.");
    this.main.currAccount.populateParties();
    this.router.navigate(['choose-game']);
  }

}
