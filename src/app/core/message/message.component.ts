import { Component, OnInit } from '@angular/core';
import { Observable } from 'rxjs/Observable';
import { DataStoreService } from '../../services/data-store.service'
import { AlertMessage } from '../../models/message-alert';



@Component({
  selector: 'app-message',
  templateUrl: './message.component.html',
  styleUrls: ['./message.component.css']
})
export class MessageComponent implements OnInit {
  alertMessage$: Observable<AlertMessage>;

  constructor(private dataStoreService: DataStoreService) { }

  ngOnInit() {
    this.alertMessage$ = this.dataStoreService.alertMessage$
  }

}
