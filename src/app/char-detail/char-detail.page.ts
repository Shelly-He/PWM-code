import { ActivatedRoute } from '@angular/router';
import { Component, OnInit } from '@angular/core';
import { Main } from '../../providers/Main';
import {Router} from '@angular/router';


@Component({
  selector: 'app-char-detail',
  templateUrl: './char-detail.page.html',
  styleUrls: ['./char-detail.page.scss'],
})
export class CharDetailPage implements OnInit {

  charList = [];
  //titleList = [];
  //desc = null;
  //sub: any;
  constructor(private main: Main, private router: Router /*private route: ActivatedRoute*/) { 
  	//TODO: can't call this here otherwise it creates 25 new objects each time the page is clicked on
  	//this.main.createCharacterObjects();
  	this.charList = this.main.getListCharNames();
  }

  ngOnInit() {
  	
    //this.desc = this.route.snapshot.paramMap.get('desc');
  }

  nextPage(){
  	 this.router.navigate(['party']);
  }

}
