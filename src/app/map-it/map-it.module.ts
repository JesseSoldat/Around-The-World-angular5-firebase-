import { NgModule } from '@angular/core';
import { SharedModule } from '../shared/shared.module';
import { MapItRoutingModule } from './map-it-routing.module';
import { MapItComponent } from './map-it/map-it.component';

@NgModule({
  imports: [
    SharedModule,
    MapItRoutingModule,
  ],
  declarations: [
    MapItComponent
  ]
})
export class MapItModule { }
