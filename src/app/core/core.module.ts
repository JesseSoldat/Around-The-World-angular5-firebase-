import { NgModule } from '@angular/core';
import { AngularFireModule } from 'angularfire2';
import { AngularFireAuthModule } from 'angularfire2/auth';
import { AngularFireDatabaseModule } from 'angularfire2/database';
import { FIREBASE_CONFIG_DEV } from '../config/config';

// import { AgmCoreModule } from '@agm/core';
// import { GOOGLE_MAP_KEY } from '../config/config';


import { SharedModule } from '../shared/shared.module';

import { AuthService } from '../services/auth.service';
import { DataStoreService } from '../services/data-store.service';

import { WelcomeComponent } from './welcome/welcome.component';
import { HeaderComponent } from './header/header.component';
import { MessageComponent } from './message/message.component';
import { SpinnerComponent } from './spinner/spinner.component';

@NgModule({
  imports: [
    SharedModule,
    AngularFireModule.initializeApp(FIREBASE_CONFIG_DEV),
    AngularFireDatabaseModule,
    AngularFireAuthModule,
    // AgmCoreModule.forRoot({
    //   apiKey: GOOGLE_MAP_KEY
    // })
  
  ],
  declarations: [
    WelcomeComponent, 
    HeaderComponent, 
    MessageComponent, SpinnerComponent
  ],
  providers: [
    AuthService,
    DataStoreService
  ],
  exports: [
    HeaderComponent,
    MessageComponent,
    SpinnerComponent
  ]
})
export class CoreModule { }
