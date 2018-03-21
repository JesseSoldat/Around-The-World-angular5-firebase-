import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { CoreModule } from './core/core.module';
import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';

// import { AgmCoreModule } from '@agm/core';
// import { GOOGLE_MAP_KEY } from './config/config';
// import { MapItComponent } from './map-it/map-it/map-it.component';

@NgModule({
  declarations: [
    AppComponent,
    // MapItComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    CoreModule,
    // AgmCoreModule.forRoot({
    //   apiKey: GOOGLE_MAP_KEY
    // })
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
