import { Component, OnInit } from '@angular/core';
import { Main } from '../../providers/Main';
import { Router } from '@angular/router';
import { NavigationEnd } from '@angular/router';

@Component({
  selector: 'app-clues',
  templateUrl: './clues.page.html',
  styleUrls: ['./clues.page.scss'],
})
export class CluesPage implements OnInit {

	c1Found = false;
	c2Found = false;
	c3Found = false;
	c4Found = false;
  unlocked = false;
  unlockedClues;
  hostClue;
navigationSubscription;
  constructor(private main: Main, private router: Router) {
	this.navigationSubscription = this.router.events.subscribe((e: any) => {
     	if (e instanceof NavigationEnd) {
       		this.getVariables();
     	}
   	});
  }

  ngOnInit() {
    this.getVariables();
  }

  getVariables() {
    // this.main.currParty.populateClues();
    this.unlockedClues = this.main.currParty.clueInfo;
    console.log(this.unlockedClues);
    this.hostClue = this.main.currParty.allClues;
    if (this.main.currParty.currentAct == 2) {
      this.unlocked = true;
    }
  }

}
