import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { MapItComponent } from './map-it/map-it.component';

const routes: Routes = [
  { path: '', component: MapItComponent }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class MapItRoutingModule { }
