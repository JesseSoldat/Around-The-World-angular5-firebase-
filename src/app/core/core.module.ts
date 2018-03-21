import { NgModule } from '@angular/core';
import { HttpModule } from '@angular/http';
import { AngularFireModule } from 'angularfire2';
import { AngularFireAuthModule } from 'angularfire2/auth';
import { AngularFireDatabaseModule } from 'angularfire2/database';
import { FIREBASE_CONFIG_DEV } from '../config/config';
import { AgmCoreModule } from '@agm/core';
import { GOOGLE_MAP_KEY } from '../config/config';

import { SharedModule } from '../shared/shared.module';

import { AuthService } from '../services/auth.service';
import { DataStoreService } from '../services/data-store.service';
import { StoryService } from '../services/story.service';

import { WelcomeComponent } from './welcome/welcome.component';
import { HeaderComponent } from './header/header.component';
import { MessageComponent } from './message/message.component';
import { SpinnerComponent } from './spinner/spinner.component';
import { GoogleMapComponent } from './google-map/google-map.component';
import { MapItComponent } from '../map-it/map-it/map-it.component';
import { AddStoryComponent } from '../add-story/add-story/add-story.component';

@NgModule({
  imports: [
    SharedModule,
    HttpModule,
    AngularFireModule.initializeApp(FIREBASE_CONFIG_DEV),
    AngularFireDatabaseModule,
    AngularFireAuthModule,
    AgmCoreModule.forRoot({
      apiKey: GOOGLE_MAP_KEY
    })
  ],
  declarations: [
    WelcomeComponent, 
    HeaderComponent, 
    MessageComponent, 
    SpinnerComponent, 
    MapItComponent,
    AddStoryComponent,
    GoogleMapComponent
  ],
  providers: [
    AuthService,
    DataStoreService,
    StoryService
  ],
  exports: [
    HttpModule,
    HeaderComponent,
    MessageComponent,
    SpinnerComponent
  ]
})
export class CoreModule { }
