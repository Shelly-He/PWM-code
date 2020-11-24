import { Component, OnInit } from '@angular/core';
import { Main } from '../../providers/Main';
import {Router} from '@angular/router';

@Component({
  selector: 'app-getting-started',
  templateUrl: './getting-started.page.html',
  styleUrls: ['./getting-started.page.scss'],
})
export class GettingStartedPage implements OnInit {

	gettingStarted;
	constructor(private main:Main, private router: Router) { 
  		this.gettingStarted = this.main.getMysteryGettingStarted();
  	}

  ngOnInit() {
  }

  prevPage() {
    this.router.navigate(['my-role']);
  }

  nextPage() {
    this.router.navigate(['overview']);
  }
}
