import { Component, OnInit } from '@angular/core';
import { Main } from '../../providers/Main';
import { Router } from '@angular/router';
import { MenuController, Events } from '@ionic/angular';
import { db } from '../../providers/Fb';
import { NavigationEnd } from '@angular/router';

@Component({
  selector: 'app-choose-game',
  templateUrl: './choose-game.page.html',
  styleUrls: ['./choose-game.page.scss'],
})
export class ChooseGamePage implements OnInit {




  navigationSubscription;


	list;
	existingList = [];
  constructor(public events: Events,private main: Main, private router: Router, private menu: MenuController) {
    this.navigationSubscription = this.router.events.subscribe((e: any) => {
     	if (e instanceof NavigationEnd) {
       		this.existingList = this.main.getAccountParties();
     	}
   	});


  }

  ngOnInit() {
    this.existingList = this.main.getAccountParties();
  }

  async chooseGame(i) {

  	//set the current game
  	this.menu.enable(true);
    await this.main.selectParty(this.main.currAccount.partyIDs[i]);

    await db.ref("accounts/" + this.main.currAccount.userID + "/parties/" + this.main.currParty.partyID).once("value", snapshot => {
    
      if(snapshot.val().isHost){
        this.events.publish("check host", true);
      }
      else{
        this.events.publish("check host", false);
      }
    });
    this.router.navigate(['home']);

  }

  addOrCreateGame(){
    this.router.navigate(['ca-game'])
  }

  // checkHost(partyhost, user){
  //   if(partyhost == user){
  //     return true;
  //   }
  //   else{
  //     return false;
  //   }
  // }

}
