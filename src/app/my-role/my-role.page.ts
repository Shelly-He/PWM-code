import { Component, OnInit } from '@angular/core';
import { Main } from '../../providers/Main';
import {Router} from '@angular/router';

@Component({
  selector: 'app-my-role',
  templateUrl: './my-role.page.html',
  styleUrls: ['./my-role.page.scss'],
})
export class MyRolePage implements OnInit {
	myRole = null;	

	constructor(private main:Main, private router: Router) { 
  		//this.myRole = "Hello";
  		this.myRole = this.main.getMysteryWhatIsMyRole();
  	}

  ngOnInit() {
  }

  prevPage() {
    this.router.navigate(['introduction']);
  }

  nextPage() {
    this.router.navigate(['getting-started']);
  }

}
