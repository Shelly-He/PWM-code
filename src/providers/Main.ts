import { Injectable } from '@angular/core';
import { Account } from './Account';
import { User } from './User';
import { Party } from './Party';
import { Mystery } from './Mystery';
import { Character } from './Character';
import { Clue } from './Clue';
import { db } from './Fb';
import { AngularFireAuth} from '@angular/fire/auth';
import { auth } from 'firebase/app';

@Injectable()
export class Main {
    currUid;
    currAccount;
    currUser;
    currParty;
    currMystery;
    //But many characters and clues, how to deal with those--lists
    currCharacters;
    currClues;
    sectionIndex;
    chapterIndex;
    pageIndex;
    sections;
    chapters;
    pages;
    testName;
    votingQuestions;
    votes;

    constructor(public afAuth: AngularFireAuth) {
        // this.currAccount = new Account(this.);
        this.currUser = null;
        this.currCharacters = [];


        // this.currMystery = null;
        // to initialize one mystery just for testing
        this.currMystery = new Mystery("Murder in Manhattan");
        this.createCharacterObjects();
        this.currClues = [];
        this.votingQuestions = [];
        this.votingQuestions[0] = "Who do you believe was responsible for the murder?";
        this.votingQuestions[1] = "Who do you feel did the best job acting in character this evening?";
        this.votingQuestions[2] = "Who do you feel had the best costume this evening?";
        //TODO: load data for json file? into database or something?
    }


    createAccount(userID) {
        //TODO: check if email already exists using the database

        //TODO: if doesn't exist, add it to the database

        //set a reference account to curr
        this.currAccount = new Account(userID);
    }

    login(userID) {

        //TODO: check the database for an account with that email and password

        //TODO: if exists, get name also
        //set a reference account to curr
        this.currAccount = new Account(userID);

    }

    logout() {
        //TODO: is this the proper way to do this? Will this cause memory leaks?
        this.currAccount = null;
        this.currUser = null;
        this.currParty = null;
        this.currMystery = null;
        this.currCharacters = [];
        this.currClues = [];
    }

    selectParty(pID) {


        this.currParty = new Party(pID);

        //Automatically select the user based on the Account and Party

//IDK WHAT THIS DOES BUT IM COMMENTING IT OUT FOR NOW!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!
        //this.selectUser(pID);

        //Set the mystery, characters, and clues
        this.currMystery = new Mystery(null)
        this.addPartyDecor("Get a banner of the New York Skyline to hang on the wall");
        this.createCharacterObjects();
        this.createClueObjects();
    }

    getAvailableMysteries() {
        //TODO: query to get the available murder mystery parties to display when creating a new party
        //I think we will only have the Muder in Manhattan, but we want to do this "correctly"
        return ["Murder in Manhattan", "Some other game"];
    }

    createParty(mystery, name) { //NOTE THAT MYSTERY HERE IS THE NAME OF THE MYSTERY (PRIMARY KEY FOR MYSTERY)
        //generate a pID
        // we wanna save it to the database
        var pID = "1234";

        //TODO: create a new party entry in the database
        this.currParty = new Party(pID);

        //TODO: create new User in the database using the Account and Party in the database

        //TODO: For Murder in Manhattan, the host is automatically a certain character so how to deal with that?
        this.currUser = new User(this.getAccountEmail(), pID, true);

        if (mystery == "Murder in Manhattan") {
            this.currUser.setCharacter("Taylor Walker");
        }

        this.currMystery = new Mystery(mystery);

        this.createCharacterObjects();
        this.createClueObjects();
    }

    selectUser(pID) {
        var email = this.getAccountEmail();

        //TODO: use email and pID to get the User and the user params from database
        var pID = null;
        var isHost = false;

        this.currUser = new User(email, pID, isHost);
    }

    createCharacterObjects() {
        var charList = this.getMysteryCharacters();


        for (var i = 0; i < charList.length; i++) {
            var newChar = new Character(charList[i]);
            this.currCharacters.push(newChar);
        }
    }

    createClueObjects() {
        //TODO: query the database for all the clues for the current Mystery
        var name;
        var newClue;
        newClue = new Clue(name);
        this.currClues.push(newClue);
    }


    /**
    Methods to access the current Account
    **/
    // getAccountUID(){
    //   return this.currAccount.getUID();
    // }
    //
    // setAccountUID(uid){
    //     this.currAccount.setUID(uid);
    // }


    getAccountEmail(){
        return this.currAccount.getEmail();
    }

    setAccountEmail(email) {
        this.currAccount.setEmail(email);
    }

    //TODO: how to deal with a changed password
    /*getAccountPassword() {
        return this.currAccount.getPassword();
    }

    setAccountPassword(password) {
        this.currAccount.setPassword(password);
    }*/

    getAccountName() {
        return this.currAccount.getName();
    }

    setAccountName(name) {
        this.currAccount.setName(name);
    }

    getAccountParties() {
        return this.currAccount.getParties();
    }

    getAccountPIDs() {
        return this.currAccount.getPartyIDs();
    }

    addAccountParty(party) {
        this.currAccount.addParty(party);
    }


    /**
    Methods to access the current User
    **/
    getUserEmail() {
        return this.currUser.getEmail();
    }

    getUserPartyID() {
        return this.currUser.getPartyID();
    }

    getUserIsHost() {
        return this.currUser.getIsHost();
    }

    getUserCharacter() {
        return this.currUser.getCharacter();
    }

    setUserCharacter(character) {
        this.currUser.setCharacter(character);
    }


    /**
    Methods to access the current Party
    **/
    getPartyID() {
        return this.currParty.getPartyID();
    }

    getPartyIsArchived() {
        return this.currParty.getIsArchived();
    }

    archiveParty() {
        this.currParty.archiveParty();
    }

    getPartyMystery() {
        return this.currParty.getMystery();
    }

    getPartyName() {
        return this.currParty.getName();
    }

    setPartyName(name) {
        this.currParty.setName(name);
    }

    getPartyDescription() {
        return this.currParty.getDescription();
    }

    setPartyDescription(description) {
        this.currParty.setDescription(description);
    }

    getPartyLocationName() {
        return this.currParty.getLocationName();
    }

    setPartyLocationName(locationName) {
        this.currParty.setLocationName(locationName);
    }

    getPartyLocationAddress() {
        return this.currParty.getLocationAddress();
    }

    setPartyLocationAddress(locationAddress) {
        this.currParty.setLocationAddress(locationAddress);
    }

    getPartyDate() {
        return this.currParty.getPDate();
    }

    setPartyDate(date) {
        this.currParty.setPDate(date)
    }

    getPartyTime() {
        return this.currParty.getPTime();
    }

    setPartyTime(time) {
        this.currParty.setPTime(time);
    }

    getPartyDecor() {
        return this.currParty.getDecor();
    }

    addPartyDecor(decor) {
        this.currParty.addDecor(decor);
    }

    getPartyMenu() {
        return this.currParty.getMenu();
    }

    addPartyMenu(menu) {
        this.currParty.addMenu(menu);
    }

    getPartyCurrAct() {
        return this.currParty.getCurrAct();
    }

    updatePartyCurrAct(act) {
        this.currParty.updateCurrAct(act);
    }

    getPartyFoundClues() {
        return this.currParty.getFoundClues();
    }

    updatePartyFoundClues(clue) {
        this.currParty.addFoundClues(clue);
    }

    getInvitedPartyGuests() {
        return this.currParty.getInvitedGuests();
    }

    invitePartyGuest(guest) {
        this.currParty.inviteGuest(guest);
    }

    getConfirmedPartyGuests() {
        return this.currParty.getConfirmedGuests();
    }

    addPartyRSVP(guest, RSVP) {
        this.currParty.addRSVP(guest, RSVP);
    }

    getPartyGuestCharacter(guest) {
        return this.currParty.getGuestCharacter(guest);
    }

    setPartyGuestCharacter(guest, character) {
        this.currParty.setGuestCharacter(guest, character);
    }

    addPartyVotes(murder, bestDressed, bestActor) {
        this.currParty.addVotes(murder, bestDressed, bestActor);
    }

    tallyPartyVotes() {
        return this.currParty.tallyVotes();
    }


    /**
    Methods to access the current Mystery
    **/
    getMysteryName() {
        //var name = "Murder in Manhattan!!!";
        //return name;
        //return "Murder in Manhattan";
        return this.currMystery.getName();
    }

    getMysteryCharacters() {
        return this.currMystery.getCharacters();
    }

    getMysteryClues() {
        return this.currMystery.getClues();
    }

    getMysteryWelcome() {
        return this.currMystery.getWelcome();
    }

    getMysteryWhatIsMyRole() {
        return this.currMystery.getWhatIsMyRole();
    }

    getMysteryGettingStarted() {
        return this.currMystery.getGettingStarted();
    }

    getMysteryOverview() {
        return this.currMystery.getOverview();
    }

    getMysteryPreparations() {
        return this.currMystery.getPreparations();
    }



    getMysteryDescription() {
        return this.currMystery.getDescription();
    }

    getMysteryActDescriptions() {
        return this.currMystery.getActDescriptions();
    }

    getMysteryNumActs() {
        return this.currMystery.getNumActs();
    }

    setName(name){
      this.testName = name;
    }

    getName(){
      return this.testName;
    }

    /**
    Methods to access the current Characters
    **/
    findCharIdx(character) {
        for(var i = 0; i < this.currCharacters.length; i++) {
            if (character == this.currCharacters[i].getName()) {
                return i;
            }
        }
        return null;
    }

    getListCharNames() {

        return this.currCharacters;
    }

    getCharTitle(character) {
        var idx = this.findCharIdx(character);
        return this.currCharacters[idx].getTitle();
    }

    getCharWhoYouAre(character) {
        var idx = this.findCharIdx(character);
        return this.currCharacters[idx].getWhoYouAre();
    }

    getCharGettingIntoCharacter(character) {
        var idx = this.findCharIdx(character);
        return this.currCharacters[idx].getGettingIntoCharacter();
    }

    getCharObjectives(character) {
        var idx = this.findCharIdx(character);
        return this.currCharacters[idx].getObjectives();
    }

    getCharGossip(character) {
        var idx = this.findCharIdx(character);
        return this.currCharacters[idx].getGossip();
    }

    getCharAct2Info(character) {
        var idx = this.findCharIdx(character);
        return this.currCharacters[idx].getAct2Info();
    }

    getCharAct2Objectives(character) {
        var idx = this.findCharIdx(character);
        return this.currCharacters[idx].getAct2Objectives();
    }

    /**
    Methods to access the current Clues
    **/
    findClueIdx(clue) {
        for(var i = 0; i < this.currClues.length; i++) {
            if (clue == this.currClues[i].getName()) {
                return i;
            }
        }
        return null;
    }

    getClueName(clue) {
        var idx = this.findClueIdx(clue);
        return this.currClues[idx].getName();
    }

    getVotingQuestions() {
        return this.votingQuestions;
    }
}
