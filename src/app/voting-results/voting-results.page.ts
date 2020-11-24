import { Component, OnInit } from '@angular/core';
import { Main } from '../../providers/Main';

@Component({
  selector: 'app-voting-results',
  templateUrl: './voting-results.page.html',
  styleUrls: ['./voting-results.page.scss'],
})
export class VotingResultsPage implements OnInit {

  votes;
  voteNames = [];
  voteNums = [];
  results = [];
  voteBool = true;
  questions;

  constructor(private main:Main) { }

  ngOnInit() {
    this.votes = this.main.votes;
    this.questions = this.main.getVotingQuestions();
    this.numberVotes();
  }

  numberVotes() {
    console.log(this.votes);
    for(var i = 0; i < this.votes.length; i++) {
      for(var j = 0; j < this.votes[i].votes.length; j++) {
        this.voteNames[j] = [];
        this.voteNums[j] = [];
      }
    }

    for(var i = 0; i < this.votes.length; i++) {
      for(var j = 0; j < this.votes[i].votes.length; j++) {
        for(var k = 0; k < this.voteNames.length; k++) {
          if(this.votes[i].votes[j] == this.voteNames[j][k]) {
            this.voteNums[j][k]++;
            this.voteBool = false
            break;
          }
        }
        if(this.voteBool) {
          this.voteNames[j][this.voteNames[j].length] = this.votes[i].votes[j];
          this.voteNums[j][this.voteNums[j].length] = 1;
        } else {
          this.voteBool = true;
        }
      }
    }



    for(var i = 0; i < this.voteNames.length; i++) {
      var vnum = 0;
      this.results[i] = [];
      for(var j = 0; j < this.voteNames[i].length; j++) {
        if(this.voteNums[i][j] == vnum) {
          this.results[i][this.results[i].length] = this.voteNames[i][j];
          console.log(this.results[i])
        } else if(this.voteNums[i][j] > vnum) {
          this.results[i] = [];
          this.results[i][this.results[i].length] = this.voteNames[i][j];
          vnum = this.voteNums[i][j];
        }
      }
    }

    console.log(this.voteNames.length);
    console.log(this.voteNames);
    console.log(this.voteNums);
    console.log(this.results);
  }

}
