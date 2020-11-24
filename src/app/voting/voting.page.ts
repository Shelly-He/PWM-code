import { Component, OnInit } from '@angular/core';
import { Main } from '../../providers/Main';
import { Router } from '@angular/router';

@Component({
  selector: 'app-voting',
  templateUrl: './voting.page.html',
  styleUrls: ['./voting.page.scss'],
})
export class VotingPage implements OnInit {

  questions;
  characters;
  votes;
  char;
  vote;
  totalVotes;
  talliedVotes;

  constructor(private main:Main, private router:Router) {
    this.vote = {
      name : '',
      votes : [

      ]
    }
    this.votes = [];
    this.totalVotes = [];
  }

  ngOnInit() {
    this.questions = this.main.getVotingQuestions();
    this.characters = this.main.getMysteryCharacters();
    for(var j = 0; j < this.questions.length; j++) {
      this.votes[j] = '';
    }
  }

  submitVote() {
    var votesValid = true;
    if(this.vote.votes == null) {
      votesValid = false;
    } else if (this.votes.length < this.questions.length) {
      votesValid = false;
    } else {
      for(var i = 0; i < this.votes.length; i++) {
        if(this.votes[i] == "") {
          votesValid = false;
        }
      }
    }
    if(this.vote.name == '' || this.vote.votes == [] || !votesValid) {
      alert("Data not entered correctly.");
    } else {
      this.vote.votes = this.votes;

      console.log(this.vote.name);

      for(var k = 0; k < this.vote.votes.length; k++) {
        console.log(this.votes[k]);
      }

      var nameIndex = -1;
      for(var i = 0; i < this.totalVotes.length; i++) {
        if(this.totalVotes[i].name == this.vote.name) {
          nameIndex = i;
        }
      }
      if(nameIndex == -1) {
        this.totalVotes[this.totalVotes.length] = this.vote;
        alert("Vote submitted for " + this.vote.name + ".");
      } else {
        this.totalVotes[nameIndex] = this.vote;
        alert("Vote updated for " + this.vote.name + ".");
      }

      this.vote = {
        name : '',
        votes : [

        ]
      }
      this.votes = [];
    }
  }

  tallyVotes() {
    this.main.votes = this.totalVotes;
    this.router.navigate(['/voting-results']);
  }

  trackByIdx(index: number, obj: any): any {
    return index;
  }

}
