import { Injectable } from '@angular/core';
import { db } from './Fb';

@Injectable()
export class User {

    email = null; //foreign key to Account
    partyID = null; //foreign key to Party
    isHost = null;
    character = null; //character name

    constructor(email, partyID, isHost) {
        this.email = email;
        this.partyID = partyID;
        this.isHost = isHost;

        this.populateUserInfo();
    }

    populateUserInfo() {
        //TODO: Query the database to get the rest of the user information- character, votes, atc
    }

    getEmail() {
        return this.email;
    }

    setEmail(email) {
        //TODO: update in database
        this.email = email;
    }

    getPartyID() {
        return this.partyID;
    }

    getIsHost() {
        return this.isHost;
    }

    getCharacter() {
        return this.character;
    }

    setCharacter(character) {
        //Host has a set character
        if (!this.isHost) {
            //TODO: update the character assignment in the databse

            this.character = character;
        }
    }

   


}
