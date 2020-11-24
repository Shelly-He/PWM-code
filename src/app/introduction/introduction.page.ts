import { Component, OnInit } from '@angular/core';
import { Main } from '../../providers/Main';
import {Router} from '@angular/router';

@Component({
  selector: 'app-introduction',
  templateUrl: './introduction.page.html',
  styleUrls: ['./introduction.page.scss'],
})
export class IntroductionPage implements OnInit {

  welcome;
  constructor(private main:Main, private router: Router) {
  	//this.welcome = "Hello";
  	this.welcome = this.main.getMysteryWelcome();
  }

  ngOnInit() {
  }

  nextPage() {
    this.router.navigate(['my-role']);
  }

}
