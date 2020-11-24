import { Component, OnInit } from '@angular/core';
import { Main } from '../../providers/Main';
import { Router } from '@angular/router';
import{AngularFirestore, AngularFirestoreCollection, AngularFirestoreDocument} from '@angular/fire/firestore';
import { Observable } from 'rxjs';
import { map } from 'rxjs/operators';
import { NavigationEnd } from '@angular/router';

@Component({
  selector: 'app-guest-list',
  templateUrl: './guest-list.page.html',
  styleUrls: ['./guest-list.page.scss'],
})
export class GuestListPage implements OnInit {
  characters;
  names;

  existingList = [];
  navigationSubscription;

  constructor(private main: Main, private router: Router) {
    this.navigationSubscription = this.router.events.subscribe((e: any) => {
     	if (e instanceof NavigationEnd) {
       		this.existingList = this.main.currParty.guestNames;
     	}
   	});





   }


  ngOnInit() {

  }

  goToAdd(){
    this.router.navigate(['/add-guest']);
  }

  goDetailPage(char: any) {
    this.router.navigate(['/char-detail', char.description]);
    /*var selected = event.target.value;
    let param = {
      name: selected.name,
      desc: selected.description
    };
    let page = 'char-detail';
    nav.push(page,param);*/
  }

}
