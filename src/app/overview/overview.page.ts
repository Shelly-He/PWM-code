import { Component, OnInit } from '@angular/core';
import { Main } from '../../providers/Main';
import {Router} from '@angular/router';

@Component({
  selector: 'app-overview',
  templateUrl: './overview.page.html',
  styleUrls: ['./overview.page.scss'],
})
export class OverviewPage implements OnInit {
	overview;
  
  constructor(private main:Main, private router: Router) { 
  	//this.overview = "Hello";
  	this.overview = this.main.getMysteryOverview();
  }

  ngOnInit() {
  }

  nextPage(){
	this.router.navigate(['char-detail']);
  }

}
