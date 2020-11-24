angular.module('app.routes', [])

.config(function($stateProvider, $urlRouterProvider) {

  // Ionic uses AngularUI Router which uses the concept of states
  // Learn more here: https://github.com/angular-ui/ui-router
  // Set up the various states which the app can be in.
  // Each state's controller can be found in controllers.js
  $stateProvider
    

      .state('menu.guestList', {
    url: '/page1',
    views: {
      'side-menu21': {
        templateUrl: 'templates/guestList.html',
        controller: 'guestListCtrl'
      }
    }
  })

  .state('menu.startTheGame', {
    url: '/page2',
    views: {
      'side-menu21': {
        templateUrl: 'templates/startTheGame.html',
        controller: 'startTheGameCtrl'
      }
    }
  })

  .state('menu.act2', {
    url: '/page3',
    views: {
      'side-menu21': {
        templateUrl: 'templates/act2.html',
        controller: 'act2Ctrl'
      }
    }
  })

  .state('menu', {
    url: '/side-menu21',
    templateUrl: 'templates/menu.html',
    controller: 'menuCtrl'
  })

  .state('menu.login', {
    url: '/page4',
    views: {
      'side-menu21': {
        templateUrl: 'templates/login.html',
        controller: 'loginCtrl'
      }
    }
  })

  .state('menu.signup', {
    url: '/page5',
    views: {
      'side-menu21': {
        templateUrl: 'templates/signup.html',
        controller: 'signupCtrl'
      }
    }
  })

  .state('menu.voting', {
    url: '/page6',
    views: {
      'side-menu21': {
        templateUrl: 'templates/voting.html',
        controller: 'votingCtrl'
      }
    }
  })

  .state('menu.guestInfo', {
    url: '/page7',
	params: {
		desc: "",
		icon: "",
		name: "",
		char: ""		
},
    views: {
      'side-menu21': {
        templateUrl: 'templates/guestInfo.html',
        controller: 'guestInfoCtrl'
      }
    }
  })

  .state('menu.welcome', {
    url: '/page9',
    views: {
      'side-menu21': {
        templateUrl: 'templates/welcome.html',
        controller: 'welcomeCtrl'
      }
    }
  })

  .state('menu.timeToVote', {
    url: '/page10',
    views: {
      'side-menu21': {
        templateUrl: 'templates/timeToVote.html',
        controller: 'timeToVoteCtrl'
      }
    }
  })

$urlRouterProvider.otherwise('/side-menu21/page4')


});