import { Injectable } from '@angular/core';
import firebase from 'firebase';
import { environment } from 'src/environments/environment';

import {AngularFireModule} from '@angular/fire';
import {AngularFireAuthModule} from '@angular/fire/auth';
import {AngularFirestoreModule} from '@angular/fire/firestore';
import {AngularFireDatabaseModule} from '@angular/fire/database';

import{AngularFirestore, AngularFirestoreCollection, AngularFirestoreDocument} from '@angular/fire/firestore';

import { Observable } from 'rxjs';
import { map } from 'rxjs/operators';
// import * as firebase from 'firebase/app';
// import 'firebase/firestore';
// import 'firebase/database';

// want a cloud database initialized later
// import{AngularFirestore, AngularFirestoreCollection, AngularFirestoreDocument} from '@angular/fire/firestore';



const Fb = firebase.initializeApp(environment.firebase);

export const AFB = AngularFireModule.initializeApp(environment.firebase);
// Export the database for components to use.
export const db = Fb.database();
