import { Component, OnInit } from '@angular/core';
import { Main } from '../../providers/Main';
import { Router } from '@angular/router';
import { NavigationEnd } from '@angular/router';

@Component({
  selector: 'app-act2',
  templateUrl: './act2.page.html',
  styleUrls: ['./act2.page.scss'],
})
export class Act2Page implements OnInit {

  name = null;
  title = null;
  act2Info = null;
  act2Obj = null;

  unlocked2 = false;

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

  getVariables() {
    this.name = "Rose den Waldern";
    //this.name = this.main.getUserCharacter();
  	this.title = this.main.getCharTitle(this.name);
  	this.act2Info = this.main.getCharAct2Info(this.name);
  	this.act2Obj = this.main.getCharAct2Objectives(this.name);

  	var act = this.main.getPartyCurrAct();
  	if (act == 2 || act > 2) {
  		this.unlocked2 = true
  	}

  }

}
