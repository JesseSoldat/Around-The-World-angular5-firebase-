import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { AddStoryComponent } from './add-story/add-story.component';


const routes: Routes = [
  { path: '', component: AddStoryComponent }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class AddStoryRoutingModule { }
