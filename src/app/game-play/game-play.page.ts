import { Component, OnInit } from '@angular/core';
import { Main } from '../../providers/Main';
import { Router } from '@angular/router';
import { NavigationEnd } from '@angular/router';

@Component({
  selector: 'app-game-play',
  templateUrl: './game-play.page.html',
  styleUrls: ['./game-play.page.scss'],
})
export class GamePlayPage implements OnInit {

  allClues;
	navigationSubscription;

  constructor(private main: Main, private router: Router) {
	this.navigationSubscription = this.router.events.subscribe((e: any) => {
     	if (e instanceof NavigationEnd) {
       		//this.getVariables();
          this.allClues = this.main.currParty.allClues;
     	}
   	});
  }

  ngOnInit() {
  }

  unlock1() {
  	this.main.updatePartyCurrAct(1);
  }

  unlock2() {
  	this.main.updatePartyCurrAct(2);
  }

  unlockClue(name) {
    this.main.currParty.unlockClue(name);
  }

  // unlockC2() {
  // 	this.main.updatePartyFoundClues("Fisk's Phone");
  // }
  //
  // unlockC3() {
	// this.main.updatePartyFoundClues("A Bloody Knife");
  // }
  //
  // unlockC4() {
	// this.main.updatePartyFoundClues("Fisk's Dead Body");
  // }

  unlockV() {
  	 this.main.updatePartyCurrAct(3);
  }

}
