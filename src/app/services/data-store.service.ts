import { Injectable } from '@angular/core';
import { BehaviorSubject } from 'rxjs/BehaviorSubject';
import { Observable } from 'rxjs/Observable';
import { AlertMessage } from '../models/message-alert';

@Injectable()
export class DataStoreService {

  //ALERT MESSAGES--------------------------------
  private alertMessage = new BehaviorSubject(null);
  public readonly alertMessage$: Observable<AlertMessage> = this.alertMessage.asObservable();

  changeAlertMessage(msg: AlertMessage) {
    this.alertMessage.next(msg)
  }


  constructor() { }

}
