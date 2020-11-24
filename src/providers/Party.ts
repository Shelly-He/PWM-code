import { Injectable } from '@angular/core';
import { Clue } from './Clue';
import { db } from './Fb';

@Injectable()
export class Party {

    partyID: string = ""; //primary key
    date: string = "";
    description: string = "";
    // for poping up the guest list
    guestIDs= [];
    guestNames= [];
    isArchived: boolean;
    locationAddress: string = "";
    locationName: string = "";
    mystery: string = ""; //name of Mystery, foreign key
    name = null; //made by the user--what is displayed on selection screen
    time: string = "";


    decor = [];
    menu = [];
    partyVotes = [];

    // for unlocked clues in the party
    clues = [];
    // for all clues in the mystery that can be unlocked by the host
    allClues = [];

    invitedGuests = []; //from db
    confirmedGuests = []; //from db
    currentAct = null;
    characterList = []; //only the characters in the game!
    currPartyRef = null;
    //partyVotes = null;
    clueInfo = [];
    host = null;

    constructor(partyID) {
        this.partyID = partyID;
        this.currPartyRef = db.ref('party/' +  this.partyID);



        // Database.database.ref("title").on('value', snapshot => {
        //   this.mystery = snapshot.val();s
        // });

        this.populatePartyInfo();
        //this.populateGuests();
        this.populateClues();
        this.loadAct();
        // console.log(this.date);
    }

    async populatePartyInfo() {
      this.guestIDs = [];
      this.guestNames = [];
      await this.currPartyRef.once('value', snapshot => {
        this.host = snapshot.val().host;
        this.date = snapshot.val().date;
        this.description = snapshot.val().description;


      db.ref('party/' +  this.partyID + "/guests").orderByKey().once("value", snapshot => {
        this.guestIDs.length = 0;
        this.guestNames.length = 0;
          snapshot.forEach(data => {
            this.guestIDs.push(data.key);
            db.ref('party/' +  this.partyID + "/guests").orderByKey().equalTo(data.key).once("child_added", snapshot => {
                this.guestNames.push(snapshot.val().name);
            });

          });
        });

        this.isArchived = snapshot.val().isArchived;
        this.locationAddress = snapshot.val().locationAddress;
        this.locationName = snapshot.val().locationName;
        this.mystery = snapshot.val().mystery;
        this.name = snapshot.val().name;
        this.time = snapshot.val().time;

      });

      await db.ref("clues").orderByKey().once('value', snapshot =>{
        this.allClues.length = 0;
        snapshot.forEach(data => {
          this.allClues.push(data.key);
        });

      });


      // decor = [];
      // menu = [];
      // partyVotes = [];
    }

    async populateClues(){
      await this.currPartyRef.child("clues").orderByValue().equalTo("unlocked").once("value", snapshot => {
        if (snapshot.exists()) {
          this.clues.length = 0;
            snapshot.forEach(clue => {
              this.clues.push(clue.key);
              console.log(clue.key);
            });
        }
      });
      this.createClueObjects();
    }

    //unlock the clue by clue name and refresh on the page?
    async unlockClue(clue){
      await this.currPartyRef.child("clues").update({[clue]: "unlocked"});
      this.populateClues();
    }

    async loadAct(){
      await this.currPartyRef.child("act").once('value', snapshot =>{
        this.currentAct = snapshot.val();
      });
    }

    async updateAct(){
      await this.currPartyRef.update({act: this.currentAct});
    }

    createClueObjects(){
      this.clueInfo.length = 0;
      for (var i = 0; i < this.clues.length; i++) {
          this.clueInfo.push(new Clue(this.clues[i]));
      }
    }



    populateGuests() {
        //TODO: use guest table to populate invited guests
            // var docRef = this.db.collection('partylist').doc('ABCD');
            // // assign as Promise object, need to be unwrapped???
            //
            // docRef.ref.get().then((snapshot) => {
            //     if (snapshot.exists) {
            //       snapshot.get("users").forEach(snapshot => {
            //         this.confirmedGuests.push = snapshot;
            //       })
            //
            //     } else {
            //         // doc.data() will be undefined in this case
            //         console.log("No such document!");
            //     }
            // }).catch(function(error) {
            //     console.log("Error getting document:", error);
            // });


        // this.invitedGuests.push();
        //
        // //TODO: if RSVP set to yes, add to confirmed guests
        // this.confirmedGuests.push();

        for(var i = 0; i < this.confirmedGuests.length; i++){
            //this.guestCharList[i] = this.confirmedGuests[i];
            //this.partyVotes[i] = this.confirmedGuests[i];

            //TODO:

            this.partyVotes[i][0] = 0;
            this.partyVotes[i][1] = 0;
            this.partyVotes[i][2] = 0;
        }

    }
    getGuests(){
      // return this.guests;
    }

    getPartyID() {
        return this.partyID;
    }

    getIsArchived() {
        return this.isArchived;
    }

    archiveParty() {
        //TODO: update database with bool update
        this.currPartyRef.update({ isArchived:true});
        this.isArchived = true;

    }

    getMystery() {
        return this.mystery;
    }

    getName() {
        return this.name;
    }

    setName(name) {
        this.currPartyRef.update({ name: name});
        this.name = name;
    }

    getDescription() {
        return this.description;
    }

    setDescription(description) {
        //TODO: update description in database
        this.currPartyRef.update({ description:description});
        this.description = description;
    }

    getLocationName() {
        return this.locationName;
    }

    setLocationName(locationName) {
        this.currPartyRef.update({ locationName: locationName});
        this.locationName = locationName;
    }

    getLocationAddress() {
        return this.locationAddress;
    }

    setLocationAddress(locationAddress) {

        this.currPartyRef.update({ locationAddress: locationAddress});
        this.locationAddress = locationAddress;
    }

    getPDate() {
        return this.date;
    }

    setPDate(date) {

        this.currPartyRef.update({ date: date});
        this.date = date;
    }

    getPTime() {
        return this.time;
    }

    setPTime(time) {

        this.currPartyRef.update({ time: time});
        this.time = time;
    }

    getDecor() {
        return this.decor;
    }

    addDecor(decor) {
        //TODO: update in databse

        this.decor.push(decor);
    }

    getMenu() {
        return this.menu;
    }

    addMenu(menu) {
        //TODO: update in databse

        this.menu.push(menu);
    }

    getCurrAct() {
        return this.currentAct;
    }

    updateCurrAct(act) {
        //this.currentAct = "1";
        var nextAct = this.currentAct + 1;
        if (nextAct == act) {
            //Then it's the next step
            this.currentAct = act;
            this.updateAct();
        }

    }

    getFoundClues() {
        return this.clues;
    }

    addFoundClues(clue) {
        this.clues.push(clue);
    }




    getInvitedGuests() {
        return this.invitedGuests;
    }

    inviteGuest(user) {
        //TODO: update params to invite guest

        this.invitedGuests.push(user);
    }

    //Probs not needed
    /*removeGuest(user) {
        //TODO: remove from invited list or current list or both?
        for(var i = 0; i < invitedGuests.length; i++) {
            if(invitedGuests[i] == user) {
                //TODO: remove guest-- pop? remove? idk
            }
        }
    }*/

    getConfirmedGuests() {
        return this.confirmedGuests;
    }

    //addConfirmedGuest(guest, RVSP=null, character=null) {
        //TODO: update the database with guest info

        //this.populateGuests();
    //}

    addRSVP(guest, RSVP) {
        //TODO: update the database with info
        this.confirmedGuests.push(guest);

        this.populateGuests();
    }

    getGuestCharacter(guest) {
        //TODO: I think this is done?
        for(var i = 0; i < this.confirmedGuests.length; i++){
            if (this.confirmedGuests[i] == guest) {
                return this.characterList[i];
            }
        }
    }

    setGuestCharacter(guest, character) {
        //var found = false
        for(var i = 0; i < this.confirmedGuests.length; i++){
            if (this.confirmedGuests[i] == guest) {
                //found = true;
                this.characterList[i] =  character;
                //TODO: update character in the db!
            }
        }
        /*if (found) {
            //TODO: update the character in the database
        }*/
    }

    addVotes(murderer, bestDressed, bestActor) {
        for(var i = 0; i < this.characterList.length; i++){
            if (this.characterList[i] == murderer) {
                this.partyVotes[i][0] = this.partyVotes[i][0] + 1;
            }
            if (this.characterList[i] == bestDressed) {
                this.partyVotes[i][1] = this.partyVotes[i][1] + 1;
            }
            if (this.characterList[i] == bestActor) {
                this.partyVotes[i][2] = this.partyVotes[i][2] + 1;
            }
        }
    }

    /*getPartyVotes() {
        this.tallyVotes();
        return this.partyVotes;
    }*/

    tallyVotes() {
        //TODO: how to deal with a tie
        var murderer =  null;
        var murderVotes = 0;
        var bestDressed = null;
        var bdVotes = null;
        var bestActor =  null;
        var baVotes = null;

        for(var i = 0; i < this.characterList.length; i++){
            if (this.partyVotes[i][0] > murderVotes) {
                murderer = this.characterList[i];
                murderVotes = this.partyVotes[i][0];
            }
            if (this.partyVotes[i][1] > bdVotes) {
                bestDressed = this.characterList[i];
                bdVotes = this.partyVotes[i][1];
            }
            if (this.partyVotes[i][2] > baVotes) {
                bestActor = this.characterList[i];
                baVotes = this.partyVotes[i][2];
            }
        }

        var winners = [];
        winners[0] = murderer;
        winners[1] = bestDressed;
        winners[2] = bestActor;

        return winners;

    }

}   