import { Injectable } from '@angular/core';
import { db } from './Fb';


@Injectable()
export class Mystery {
    name = null; //primary key
    characters = [];
    description = null;
    clues = [];
    /*homeMaterial = null;
    welcome = null;
    whatIsMyRole = null;
    gettingStarted = null;
    overview = null;
    preparations = [];

    introMaterial = null;

    //actDescriptions = ["Act 1 Description", "Act 2 Description"];
    numActs = null;*/

    //TODO: add more information for set-up/ planning

    constructor(name) {
      this.name = name;
        this.populateMysteryInfo();
        //this.populateCharacters();
        //this.populateClues();
    }

    

	

    getCharacters() {
      /*db.ref("character/1").on('value', snapshot => {
        this.characters  =  snapshot.val();
      });*/
        return this.characters;
    }

    getClues() {
        return this.clues;
    }

    /*getHomeMaterial() {
        return this.homeMaterial;
    }

    getWelcome() {
        return this.welcome;
    }

    getWhatIsMyRole() {
        return this.whatIsMyRole;
    }

    getGettingStarted() {
        return this.gettingStarted;
    }

    getOverview() {
        return this.overview;
    }

    getPreparations() {
        return this.preparations;
    }*/





    getDescription() {
        // db.ref("creditHTML").on('value', snapshot => {
        //   this.description  = snapshot.val();
        // });
        return this.description;
    }

    /*getActDescriptions() {
        return this.actDescriptions;
    }*/

    /*getNumActs() {
        return this.numActs;
    }*/

    //populateMysteryInfo() {}
    populateMysteryInfo() {
        this.characters = ["Francis Fisk", "Richard den Waldern", "Chester Fisk", "Jonathon Fisk", "Zachary Wellington", "Sam Lily", "David Kreig", "Grayson Kreig", "Jesse Corrington", "Isaac Corrington", "Alexei Siranov", "Irene den Waldern", "Rose den Waldern", "Jo Chase", "Candice Wellington", "Ashley LeBois", "Helen LeBois", "Gwen Kreig", "Francine Thorne", "Mercy Neist", "Davana Gudriov", "Taylor Walker", "Jamie Lavigne", "Sydney O'Connor", "Callaway Lee"];
        this.clues = ["Fisk's Safe", "Fisk’s Phone", "Bloody Knife", "Fisk’s Dead Body"];
        db.ref("sectionList").on('value', snapshot => {
          this.description  = snapshot.val();
        });
        //this.actDescriptions = ["Act 1 Description", "Act 2 Description"];

    }


}
