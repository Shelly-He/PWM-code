import { Component, OnInit } from '@angular/core';
import { Main } from '../../providers/Main';
import {Router} from '@angular/router';

@Component({
  selector: 'app-preparations',
  templateUrl: './preparations.page.html',
  styleUrls: ['./preparations.page.scss'],
})
export class PreparationsPage implements OnInit {
	preparations = [];
	props = null;
	menu = null;
	scene = null;
	audio = null;
	candles = null;
	paperwork = null;

  constructor(private main:Main, private router: Router) { 
  	this.preparations = this.main.getMysteryPreparations();
  	this.props = this.preparations[0];
  	this.menu = this.preparations[1];
  	this.scene = this.preparations[2];
  	this.audio = this.preparations[3];
  	this.candles = this.preparations[4];
  	this.paperwork = this.preparations[5];

  }

  ngOnInit() {
  }

  nextPage() {
  	this.router.navigate(['party']);
  }

}
