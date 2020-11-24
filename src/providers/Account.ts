import { Injectable } from '@angular/core';
//import { Party } from './Party';
//import { Account } from './Account';
//import { User } from './User'
import { db } from './Fb';

@Injectable()
export class Account {
    userID = null; //primary key
    email = null;
    password = null;
    name = null;
    parties=[]; //names of the parties
    partyIDs = [];
    accountRef = null;
    constructor(userID) {

        this.userID = userID;
        // this.password = password;

        // this.parties = [];
        this.accountRef = db.ref("accounts/" + this.userID);

        this.populateParties();
    }

    async populateParties() {
        //TODO: search database for users with the same email and add the names to the party list
        //Add the pIDs to the PID list
        // this.parties = [];
        // this.partyIDs = [];
        var partyIDref = db.ref("accounts/"+ this.userID +"/parties");
        var partyRef = db.ref("party/");

        // for solid party names, query twice
        await partyIDref.orderByKey().once("value", snapshot => {
          this.parties .length = 0;
          this.partyIDs.length = 0;
          snapshot.forEach(data => {
            this.partyIDs.push(data.key);
            partyRef.orderByKey().equalTo(data.key).once("child_added", snapshot => {
                this.parties.push(snapshot.val().name);
            });

          });
        });

        this.accountRef.once("value",snapshot => {
          this.email = snapshot.val().email;
          this.name = snapshot.val().name;
        });

        //for liquid party names

        // db.ref("accounts/"+ this.userID +"/parties").on("value", snapshot => {
        //   snapshot.forEach(data => {
        //     this.parties.push(data.val().name);
        //   });
        // });


    }
    // getUID(){
    //     return this.userID;
    // }
    // setUID(uid){
    //   this.userID = uid;
    // }
    getEmail() {

        return this.email;
    }

    setEmail(email) {
        //TODO: Update email in database
        this.accountRef.update({email:email});
        this.email = email;
    }

    getPassword() {
        return this.password;
    }

    setPassword(password) {
        //TODO: update password in database
        this.password = password;
    }

    getName() {
        return this.name;
    }

    setName(name) {
        //TODO: update name in database
        this.accountRef.update({name:name});
        this.name = name;
    }

    getParties() {
        return this.parties;
    }

    getPartyIDs() {
        return this.partyIDs;
    }

    addParty(partyID) {
        // assume this is for the guest
        var exist = false;
        db.ref("party/").orderByKey().equalTo(partyID).once("child_added", snapshot => {
            exist = true;
        });

        if(exist){
          this.accountRef.once("value", snapshot => {
              if(snapshot.hasChild("parties")){
                var dup = false;
                this.accountRef.child("parties").orderByKey().equalTo(partyID).once("child_added", snapshot => {
                    dup = true;
                });
                if(dup){
                  //alert for duplication
                }
              }
              else{
                this.accountRef.child("parties").child(partyID).set({isHost: false});
              }
          });

          this.partyIDs.push(partyID);

          db.ref("party/").orderByKey().equalTo(partyID).once("child_added", snapshot => {
              this.parties.push(snapshot.val().name);
          });

        }

        else{
          //alert for non existing party or ask user to create a new one
          console.log("Didnt work")
        }

    }

}
