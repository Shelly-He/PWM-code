import { Component, OnInit } from '@angular/core';
import { AngularFireAuth} from '@angular/fire/auth';
import { auth } from 'firebase/app';
import { Router } from '@angular/router';
import { MenuController } from '@ionic/angular';
import { NavigationEnd } from '@angular/router';
import { Main } from '../../providers/Main';

@Component({
  selector: 'app-logout-page',
  templateUrl: './logout-page.page.html',
  styleUrls: ['./logout-page.page.scss'],
})
export class LogoutPagePage implements OnInit {
  navigationSubscription;
  email =  null;
  name = null;

  constructor(private router: Router, public afAuth: AngularFireAuth, private menu: MenuController, private main: Main) {
    this.navigationSubscription = this.router.events.subscribe((e: any) => {
      if (e instanceof NavigationEnd) {
          this.getVariables();
      }
    });
  }

  ngOnInit() {
  }

  getVariables() {
    this.name = this.main.getAccountName();
    this.email = this.main.getAccountEmail();
  }

  update() {
    if (this.name != this.main.getAccountName()) {
        this.main.setAccountName(this.name);
    }
    if (this.email != this.main.getAccountEmail()) {
        this.main.setAccountEmail(this.email);
    }
  }

  async logout() {
    this.afAuth.auth.signOut();
    this.router.navigate(['login-page']);
  }

  switchGames() {
    this.menu.enable(false);
      this.router.navigate(['choose-game']);
  }
}
