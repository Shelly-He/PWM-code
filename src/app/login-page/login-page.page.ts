import { Component, OnInit } from '@angular/core';

import { AngularFireAuth} from '@angular/fire/auth';
import { auth } from 'firebase/app';

import {Router} from '@angular/router';
import { MenuController } from '@ionic/angular';

import {User} from '../../providers/User'
import {Main} from '../../providers/Main';
import {HomePage} from '../home/home.page';
import { db } from '../../providers/Fb';


@Component({
  selector: 'app-login-page',
  templateUrl: './login-page.page.html',
  styleUrls: ['./login-page.page.scss'],
})
export class LoginPagePage implements OnInit {

  username: string = ""
  password: string = ""
  name = "";
  newEmail = "";
  newPassword = "";
  uid: string = ""
  pid: string = ""
  constructor(
    private router: Router,
    private menu: MenuController,
    public afAuth: AngularFireAuth,
    private main: Main
  ) {
    this.menu.enable(false);
  }

  ngOnInit() {
  }



  async login() {
    const {username, password } = this
    try{
      const res = await this.afAuth.auth.signInWithEmailAndPassword(username , password);
      this.uid = await this.afAuth.auth.currentUser.uid;
      this.main.currUid = await String(this.afAuth.auth.currentUser.uid);
      await this.main.login(this.main.currUid);

      //this.menu.enable(true);
      this.router.navigate(['choose-game']);

    } catch(err) {
      window.alert(err);
    }
  }

  async createAccount() {
    const {name, newEmail, newPassword} = this
    try{
      const res = await this.afAuth.auth.createUserWithEmailAndPassword(newEmail, newPassword);
      this.uid = this.afAuth.auth.currentUser.uid;
      console.log(this.uid)
      db.ref('accounts/' + this.uid).set({
        name: name,
        email: newEmail,
        parties: []
      });
      this.main.currUid = this.afAuth.auth.currentUser.uid;
      console.log(this.main.currUid);
      this.router.navigate(['choose-game']);
    }catch(err){
      window.alert(err);
    }
  }



}
