import { Injectable } from '@angular/core';
import { db } from './Fb';

@Injectable()
export class Character {

    charRef =  null;
    name = null;
    title = null;
    hostDescription = null;
    whoYouAre = null;
    gettingIntoCharacter = null;
    objectives = null;
    gossip = null;
    act2Info = null;
    act2Objectives = null;

    constructor(name) {
        this.name = name;
        this.charRef = db.ref("characters/" + this.name);

        this.populateCharacterInfo();
    }

    //Basic getters-- No setter
    getName() {
        return this.name;
    }

    getTitle() {
        return this.title;
    }

    getHostDescription() {
        return this.hostDescription;
    }

    getWhoYouAre() {
        return this.whoYouAre
    }

    getGettingIntoCharacter() {
        return this.gettingIntoCharacter;
    }

    getObjectives() {
        return this.objectives;
    }

    getGossip() {
        return this.gossip;
    }

    getAct2Info() {
        return this.act2Info;
    }

    getAct2Objectives() {
        return this.act2Objectives;
    }


    populateCharacterInfo() {
        this.charRef.once("value",snapshot => {
          this.title = snapshot.val().title;
          this.hostDescription = snapshot.val().hostDescription;
          this.whoYouAre = snapshot.val().whoYouAre;
          this.gettingIntoCharacter = snapshot.val().gettingIntoCharacter;
          this.objectives = snapshot.val().objectives;
          this.gossip = snapshot.val().gossip;
          this.act2Info = snapshot.val().act2Info;
          this.act2Objectives = snapshot.val().act2Objectives;
        });
    }
}
