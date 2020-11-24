import { Component, OnInit } from '@angular/core';
import { Main } from '../providers/Main';
import { Platform , Events} from '@ionic/angular';
import { SplashScreen } from '@ionic-native/splash-screen/ngx';
import { StatusBar } from '@ionic-native/status-bar/ngx';

import { NavigationEnd } from '@angular/router';
import { Router } from '@angular/router';

//import firebase from 'firebase';
//import * as firebase from 'firebase/app';
//import 'firebase/auth';
//import 'firebase/firestore';

@Component({
  selector: 'app-root',
  templateUrl: 'app.component.html'
})

export class AppComponent {
  isHost;

  public hostPages = [
    {
      title: 'Home',
      url: '/home',
      icon: 'home'
    },
    {
      title: 'Instructions',
      url: '/start-game',
      icon: 'book'
    },
    /*{
      title: 'Overview',
      url: '/overview',
      icon: 'clipboard'
    },
    {
      title: 'Preparations',
      url: '/preparations',
      icon: 'checkbox-outline'
    },*/
    {
      title: 'Characters',
      url: '/char-detail',
      icon: 'body'
    },
    {
      title: 'Party Info',
      url: '/party',
      icon: 'calendar'
    },
    {
      title: 'Guest List',
      url: '/guest-list',
      icon: 'people'
    },
    {
      title: 'Game Play',
      url: '/game-play',
      icon: 'play-circle'
    },
    {
      title: 'Act 1',
      url: '/act1',
      icon: 'wine'
    },
    {
      title: 'Act 2',
      url: '/act2',
      icon: 'search'
    },
    {
      title: 'Clues',
      url: '/clues',
      icon: 'finger-print'
    },
    {
      title: 'Voting',
      url: '/voting',
      icon: 'thumbs-up'
    },
    {
      title: 'Account Info',
      url: '/logout-page',
      icon: 'cog'
    }
  ];
  appPages = this.hostPages;
  public guestPages = [
    {
      title: 'Home',
      url: '/home',
      icon: 'home'
    },
    {
      title: 'Instructions',
      url: '/start-game',
      icon: 'book'
    },
    /*{
      title: 'Overview',
      url: '/overview',
      icon: 'clipboard'
    },
    {
      title: 'Preparations',
      url: '/preparations',
      icon: 'checkbox-outline'
    },*/
    {
      title: 'Characters',
      url: '/char-detail',
      icon: 'body'
    },
    {
      title: 'Act 1',
      url: '/act1',
      icon: 'wine'
    },
    {
      title: 'Act 2',
      url: '/act2',
      icon: 'search'
    },
    {
      title: 'Clues',
      url: '/clues',
      icon: 'finger-print'
    },
    // {
    //   title: 'Voting',
    //   url: '/voting',
    //   icon: 'thumbs-up'
    // },
    {
      title: 'Account Info',
      url: '/logout-page',
      icon: 'cog'
    }
  ];

  navigationSubscription;

  constructor(
    private platform: Platform,
    private splashScreen: SplashScreen,
    private statusBar: StatusBar,
    private main: Main,
    private router: Router,
    private events: Events,
  ) {
    this.events.subscribe("check host", (isHost) => {
      if(!isHost){
        this.appPages = this.guestPages;
      }
      else{
        this.appPages = this.hostPages;
      }

    });

    this.initializeApp();
  }

  ngOnInit() {
  }

  // chooseMenuPage(){
  //   this.isHost = this.main.checkHost();
  //
  //   console.log(this.main.currUid);
  //   console.log(this.main.currParty.host);
  //
  //   if(!this.isHost){
  //     this.appPages = this.guestPages;
  //   }
  // }

  initializeApp() {
    this.platform.ready().then(() => {
      this.statusBar.styleDefault();
      this.splashScreen.hide();
    });

  }


}
