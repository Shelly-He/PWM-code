import { Injectable } from '@angular/core';
import { db } from './Fb';

@Injectable()
export class Clue {

    name = null; //primary key
    description = null;
    bonusMaterial = [];

    constructor(name) {
        this.name = name;
        if(name != null){
          this.populateClueInfo();
        }
    }

    //Basic getters-- No setter
    getName() {
        return this.name;
    }

    getDescription() {
        return this.description;
    }

    getHasBounusMaterial() {
        if (this.bonusMaterial != null) {
            return true;
        }
        return false;
    }

    getBonusMaterial() {
        return ;
    }

    //populateClueInfo(){}
    async populateClueInfo(){
        await db.ref("clues").orderByKey().equalTo(this.name).once("child_added", snapshot => {
              this.description = snapshot.val().description;
              if( snapshot.child("bonus").exists()){
                snapshot.child("bonus").forEach(data => {
                  this.bonusMaterial.push(data.toJSON());
                  // save into 2D array or directly a json file?
                });
              }
        });



    }

}
