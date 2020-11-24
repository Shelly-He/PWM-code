import { Component, OnInit } from '@angular/core';
import { Main } from '../../providers/Main';
import { Router } from '@angular/router';
import { NavigationEnd } from '@angular/router';

@Component({
  selector: 'app-party',
  templateUrl: './party.page.html',
  styleUrls: ['./party.page.scss'],
})
export class PartyPage implements OnInit{
  name;
  description;
  locationName = null;
  locationAddress = null;
  date = null;
  time = null;
  decor = [];
  menu = [];

  navigationSubscription;

  constructor(private main:Main, private router: Router) {
  	this.navigationSubscription = this.router.events.subscribe((e: any) => {
     	if (e instanceof NavigationEnd) {
       		this.getVariables();
     	}
   	});
  	//this.getVariables();
  	//this.decor = ["Party city has New York Skyline banners", "Get nametag for guests"];
  	//this.menu = [];
  }

  ngOnInit() {
  	//this.getVariables();
  }

  getVariables() {
  	this.name = this.main.getPartyName();
  	this.description = this.main.getPartyDescription();
  	this.locationName = this.main.getPartyLocationName();
  	this.locationAddress = this.main.getPartyLocationAddress();
  	this.date = this.main.getPartyDate();
  	this.time = this.main.getPartyTime();
  	this.decor = this.main.getPartyDecor();
  	this.menu = this.main.getPartyMenu();
  }

  edit() {
    this.router.navigate(['edit-party']);
  }

}
