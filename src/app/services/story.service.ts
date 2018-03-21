import { Injectable } from '@angular/core';
import { Http, Response } from '@angular/http';
import { AngularFireDatabase, AngularFireList, AngularFireObject } from 'angularfire2/database';
import { DataStoreService } from './data-store.service';

@Injectable()
export class StoryService {

  constructor(private dataStoreService: DataStoreService,
              private afDb: AngularFireDatabase) {}

  //CALLED ONCE FROM APP COMPONENT IF USER IS LOGGED IN
  //CALLED FROM LOGIN AND REGISTER (createUserProfile) METHODS 
  getMyProfile(uid: string) {
    const ref = `atw/users/${uid}/profile`;
    const user = this.afDb.object(ref);
    user.snapshotChanges().subscribe(profile => {
      // console.log(profile.key);
      // console.log(profile.payload.val());
      this.dataStoreService.changeMyProfile(profile.payload.val());
      this.dataStoreService.changeIsLoading(false);                  
    });
    
    

    
  }



}
