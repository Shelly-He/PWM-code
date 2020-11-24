import { Component, OnInit } from '@angular/core';
import { Main } from '../../providers/Main';
import { Router } from '@angular/router';
import { NavigationEnd } from '@angular/router';
import { db } from '../../providers/Fb';

@Component({
  selector: 'app-act1',
  templateUrl: './act1.page.html',
  styleUrls: ['./act1.page.scss'],
})
export class Act1Page implements OnInit {
	character;
	name = null;
	title = null;
	whoYouAre = null;
	gettingIntoCharacter = null;
	objectives = null;
	gossip = null;

	unlocked = false;

	navigationSubscription;

  constructor(private main: Main, private router: Router) {
  	this.getVariables();
	/*this.navigationSubscription = this.router.events.subscribe((e: any) => {
     	if (e instanceof NavigationEnd) {
       		this.getVariables();
     	}
   	});*/
  }

  ngOnInit() {
  }

  async getVariables() {
    await db.ref("party/" + this.main.currParty.partyID + "/guests/" + this.main.currAccount.userID).once("value", snapshot => {
        this.name = snapshot.val().character;
    });

    if(this.name == null){
      this.name = "Francis Fisk";
    }


    //this.name = this.main.getUserCharacter();
  	this.title = this.main.getCharTitle(this.name);
  	this.whoYouAre = this.main.getCharWhoYouAre(this.name);
  	this.gettingIntoCharacter = this.main.getCharGettingIntoCharacter(this.name);
  	this.objectives = this.main.getCharObjectives(this.name);
  	this.gossip = this.main.getCharGossip(this.name);

  	//Get this from main!
  	var act = this.main.getPartyCurrAct();
  	if (act == 1 || act > 1) {
  		this.unlocked = true;
  	}
  	//this.unlocked = "1";

  }

}
