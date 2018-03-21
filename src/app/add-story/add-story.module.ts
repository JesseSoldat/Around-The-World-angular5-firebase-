import { NgModule } from '@angular/core';
import { SharedModule } from '../shared/shared.module';
import { AddStoryRoutingModule } from './add-story-routing.module';
import { AddStoryComponent } from './add-story/add-story.component';

@NgModule({
  imports: [
    SharedModule,
    AddStoryRoutingModule,
   
  ],
  declarations: [AddStoryComponent]
})
export class AddStoryModule { }
