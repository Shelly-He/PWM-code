angular.module('firebaseConfig', ['firebase'])

.run(function(){

  // Initialize Firebase
  var config = {
    apiKey: "AIzaSyBludlzNuVszOn6PkhM5ieC_8LCC1ZwiUw",
    authDomain: "team-2-e2761.firebaseapp.com",
    databaseURL: "https://team-2-e2761.firebaseio.com",
    storageBucket: "team-2-e2761.appspot.com",
    projectId: "team-2-e2761",
    /*
    var config = {
    apiKey: "AIzaSyBludlzNuVszOn6PkhM5ieC_8LCC1ZwiUw",
    authDomain: "team-2-e2761.firebaseapp.com",
    databaseURL: "https://team-2-e2761.firebaseio.com",
    projectId: "team-2-e2761",
    storageBucket: "team-2-e2761.appspot.com",
    messagingSenderId: "916106452912"
  };
  firebase.initializeApp(config);
    */
  };
  firebase.initializeApp(config);
})


.service("Welcome", ["$firebaseArray", function($firebaseArray){
    var titleref = firebase.database().ref().child("title");
    var welcomeref = firebase.database().ref().child("welcomeHTML");
    var title = "Murder in Manhattan";
    var text = "Welcome to the Murder Party!"
    
    var info = {
        'title': title,
        'text': text
    }
    
    var welcome = {
        'welcome': info
    }
    
    return welcome;
}]);

