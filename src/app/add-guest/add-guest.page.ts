import { Component, OnInit } from '@angular/core';

import { Main } from '../../providers/Main';
import { Router } from '@angular/router';
import { MenuController } from '@ionic/angular';
import { db } from '../../providers/Fb';

@Component({
  selector: 'app-add-guest',
  templateUrl: './add-guest.page.html',
  styleUrls: ['./add-guest.page.scss'],
})
export class AddGuestPage implements OnInit {

  guestNameAdd;
  guestNameRem;

  constructor(private main: Main, private router: Router, private menu: MenuController) { }

  ngOnInit() {
  }

  addGuest(){
  const {guestNameAdd} = this
   //A guest to the party even if they arnt real
   db.ref("party/" + this.main.currParty.partyID).child('guests').orderByChild('name').equalTo(guestNameAdd).once('value', snapshot => {
     if(!snapshot.exists()){
       db.ref("party/" + this.main.currParty.partyID + "/guests").push({
         name: guestNameAdd
       })
       window.alert(guestNameAdd + " added.")
     }else{
       window.alert("User with that name already exists.");
     }
   });
   this.main.currParty.populatePartyInfo();
  }

  removeGuest(){
    const {guestNameRem} = this

    //remove party from guest if they are real
    for(var i = 0; i < this.main.currParty.guestIDs.length; i++){
      if(guestNameRem === this.main.currParty.guestNames[i]){
        db.ref("accounts/" + this.main.currParty.guestIDs[i] + "/parties/" + this.main.currParty.partyID).remove();
        db.ref("party/"+this.main.currParty.partyID+"/guests/" + this.main.currParty.guestIDs[i] ).remove();
        window.alert(guestNameRem + " removed.")
        return;
      }
    }
    //Remove from party
    try{
      var reff = db.ref("party/" + this.main.currParty.partyID).child('guests').orderByChild('name').equalTo(guestNameRem).once()
      reff.remove();
      this.main.currParty.populatePartyInfo();
      window.alert(guestNameRem + " removed.")
    }catch(err){
      window.alert("User not found.")
    }
  }
}
