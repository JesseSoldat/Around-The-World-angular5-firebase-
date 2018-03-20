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
              private dataStoreService: DataStoreService) { 

    afAuth.authState.subscribe(user => {
      if(user === null) {     
        return this.dataStoreService.changeUserState(null, false);
      };
      this.dataStoreService.changeUserState(user.uid, true);
    });
  }

  registerWithEmail =  async (username: string, email: string, password: string) => {
    this.dataStoreService.changeIsLoading(true);
    try {
      const user = await this.afAuth.auth.createUserWithEmailAndPassword(email, password);
      this.createUserProfile(user, username);
    } 
    catch (err) {
      const errMessage = createAlertMessage(err.message, 'danger');  
      this.dataStoreService.changeAlertMessage(errMessage);  
      this.dataStoreService.changeIsLoading(false);               
    }
  }

  createUserProfile = async (user, username) => {
    const {uid, email} = user;
    const ref = `atw/users/${uid}/profile`;
    try {
      await this.afDb.object(ref).set({email, username});
      this.dataStoreService.changeIsLoading(false);         
      this.router.navigate(['/dashboard']);   
    } 
    catch (err) {
      const errMessage = createAlertMessage(err.message, 'danger');  
      this.dataStoreService.changeAlertMessage(errMessage); 
      this.dataStoreService.changeIsLoading(false);               
    }

  }

  loginWithEmail = async (email: string, password: string) => {
    this.dataStoreService.changeIsLoading(true);       
    try {
      await this.afAuth.auth.signInWithEmailAndPassword(email, password);
      this.dataStoreService.changeIsLoading(false);                   
      this.router.navigate(['/dashboard']);  
    } 
    catch (err) {
      const errMessage = createAlertMessage(err.message, 'danger'); 
      this.dataStoreService.changeAlertMessage(errMessage);
      this.dataStoreService.changeIsLoading(false);                             
    }
  }

  logout = async () => {
    this.dataStoreService.changeIsLoading(true);             
    try {
      await this.afAuth.auth.signOut();
      this.dataStoreService.changeIsLoading(false);                    
      this.router.navigate(['/']);
    } 
    catch (err) {
      const errMessage = createAlertMessage(err.message, 'danger');  
      this.dataStoreService.changeAlertMessage(errMessage);
      this.dataStoreService.changeIsLoading(false);                        
    }
  }

}
