import { Injectable } from '@angular/core';
import { Router } from '@angular/router';
import { AngularFireAuth } from 'angularfire2/auth';
import { AngularFireDatabase, AngularFireObject } from 'angularfire2/database';
import { createAlertMessage } from '../shared/utils';
import { DataStoreService } from '../services/data-store.service';

@Injectable()
export class AuthService {

  constructor(private afAuth: AngularFireAuth,
              private afDb: AngularFireDatabase,
              private router: Router,
              private dataStoreService: DataStoreService) { }

  registerWithEmail =  async (username: string, email: string, password: string) => {
    try {
      const user = await this.afAuth.auth.createUserWithEmailAndPassword(email, password);
      this.createUserProfile(user, username);
    } 
    catch (err) {
      console.log(err); 
    }
  }

  createUserProfile = async (user, username) => {
    const {uid, email} = user;
    const ref = `atw/users/${uid}/profile`;
    try {
      await this.afDb.object(ref).set({email, username});
      this.router.navigate(['/dashboard']);
    } 
    catch (err) {
      const errMessage = createAlertMessage(err.message, 'danger');  
      this.dataStoreService.changeAlertMessage(errMessage); 
    }

  }

  loginWithEmail = async (email: string, password: string) => {
    try {
      await this.afAuth.auth.signInWithEmailAndPassword(email, password);
      this.router.navigate(['/dashboard']);      
    } 
    catch (err) {
      const errMessage = createAlertMessage(err.message, 'danger');  
      this.dataStoreService.changeAlertMessage(errMessage);       
    }
  }

  logout = async () => {
    try {
      await this.afAuth.auth.signOut();
      this.router.navigate(['/']);
    } 
    catch (err) {
      const errMessage = createAlertMessage(err.message, 'danger');  
      this.dataStoreService.changeAlertMessage(errMessage);         
    }
  }

}
