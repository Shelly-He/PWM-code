import { Component, OnInit } from '@angular/core';
import { Main } from '../../providers/Main';
import { Router } from '@angular/router';

@Component({
  selector: 'app-edit-party',
  templateUrl: './edit-party.page.html',
  styleUrls: ['./edit-party.page.scss'],
})
export class EditPartyPage implements OnInit {

  navigation;
  name = null;
  description = null;
  locationName = null;
  locationAddress = null;
  date = null;
  time = null;
  decor = null;
  newDecor = null;
  menu = null;
  newMenu = null;

  constructor(private main:Main, private router: Router) {
	/*this.navigation = this.router.events.subscribe((e: any) => {
     // If it is a NavigationEnd event re-initalise the component
     if (e instanceof NavigationEnd) {
       this.getVaribales();
     }
   });*/
  	
  	this.setVariables();
  }

  ngOnInit() {
  	this.setVariables();
  }

  setVariables() {
  	this.name = this.main.getPartyName();
  	this.description = this.main.getPartyDescription();
  	this.locationName = this.main.getPartyLocationName();
  	this.locationAddress = this.main.getPartyLocationAddress();
  	this.date = this.main.getPartyDate();
  	this.time = this.main.getPartyTime();
  	this.decor = this.main.getPartyDecor();
  	this.menu = this.main.getPartyMenu();
  }

  done() {
  	  if (this.name != this.main.getPartyName()) {
  	  	this.main.setPartyName(this.name);
  	  }	
  	  if (this.description != this.main.getPartyDescription()) {
  	  	this.main.setPartyDescription(this.description);
  	  }
	  if (this.locationName != this.main.getPartyLocationName()) {
  	  	this.main.setPartyLocationName(this.locationName);
  	  }
  	  if (this.locationAddress != this.main.getPartyLocationAddress()) {
  	  	this.main.setPartyLocationAddress(this.locationAddress);
  	  }
  	  if (this.date != this.main.getPartyDate()) {
  	  	this.main.setPartyDate(this.date);
  	  }
  	  if (this.time != this.main.getPartyTime()) {
  	  	this.main.setPartyTime(this.time);
  	  }
  	  if (this.newMenu != null) {
  	  	this.main.addPartyMenu(this.newMenu);
  	  }
  	  if (this.newDecor != null) {
  	  	this.main.addPartyDecor(this.newDecor);
  	  }

  	  this.router.navigate(['party']);  
  }

}
