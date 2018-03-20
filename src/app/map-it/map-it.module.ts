import { NgModule } from '@angular/core';
import { SharedModule } from '../shared/shared.module';
import { AgmCoreModule } from '@agm/core';
import { GOOGLE_MAP_KEY } from '../config/config';
import { MapItRoutingModule } from './map-it-routing.module';
import { MapItComponent } from './map-it/map-it.component';

@NgModule({
  imports: [
    SharedModule,
    MapItRoutingModule,
    AgmCoreModule.forRoot({
      apiKey: GOOGLE_MAP_KEY
    })
  ],
  declarations: [MapItComponent]
})
export class MapItModule { }
