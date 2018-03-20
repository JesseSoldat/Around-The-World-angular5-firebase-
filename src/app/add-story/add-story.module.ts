import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { AddStoryRoutingModule } from './add-story-routing.module';
import { AddStoryComponent } from './add-story/add-story.component';

@NgModule({
  imports: [
    CommonModule,
    AddStoryRoutingModule
  ],
  declarations: [AddStoryComponent]
})
export class AddStoryModule { }
