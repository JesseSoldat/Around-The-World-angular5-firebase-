import { Injectable } from '@angular/core';
import { BehaviorSubject } from 'rxjs/BehaviorSubject';
import { Observable } from 'rxjs/Observable';
import { AlertMessage } from '../models/message-alert';
import { MyProfile } from '../models/my-profile';

@Injectable()
export class DataStoreService {

  //UID----------------------------------------
  private uid = new BehaviorSubject(undefined);
  public readonly uid$: Observable<string> = this.uid.asObservable();
  private isLoggedIn = new BehaviorSubject(undefined);
  public readonly isLoggedIn$: Observable<boolean> = this.isLoggedIn.asObservable();

  changeUserState(uid, isLoggedIn) {
    this.uid.next(uid);
    this.isLoggedIn.next(isLoggedIn);
  }

  //MY PROFILE----------------------------------
  private profile = new BehaviorSubject(undefined);
  public readonly profile$: Observable<MyProfile> = this.profile.asObservable();

  changeMyProfile(profile) {
    this.profile.next(profile);
  }

  //ALERT MESSAGES--------------------------------
  private alertMessage = new BehaviorSubject(null);
  public readonly alertMessage$: Observable<AlertMessage> = this.alertMessage.asObservable();

  changeAlertMessage(msg: AlertMessage) {
    this.alertMessage.next(msg)
  }


  //SHOW SPINNER--------------------------------
  private isLoading = new BehaviorSubject(false);
  public readonly isLoading$: Observable<boolean> = this.isLoading.asObservable();

  changeIsLoading(state: boolean) {
    this.isLoading.next(state);
  }


  constructor() { }

}
