import { Component, OnInit } from '@angular/core';
import { AngularFireAuth } from 'angularfire2/auth';
import { DataStoreService } from './services/data-store.service';
import { StoryService } from './services/story.service';


@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent implements OnInit {

  constructor(private dataStoreService: DataStoreService,
              private storyService: StoryService,
              private afAuth: AngularFireAuth) {

  }
  ngOnInit() {
    this.dataStoreService.changeIsLoading(true);    
    this.afAuth.authState.subscribe(user => {
      if(user === null) {    
        this.dataStoreService.changeUserState(null, false);
        return this.dataStoreService.changeIsLoading(false);   
      };
      this.dataStoreService.changeUserState(user.uid, true);
      this.storyService.getMyProfile(user.uid);
    });
  }
}
