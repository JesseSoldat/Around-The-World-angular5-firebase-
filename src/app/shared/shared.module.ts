import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { environment } from '../../environments/environment';

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    ReactiveFormsModule
  
  ],
  declarations: [
  
  ],
  exports: [
    CommonModule,
    FormsModule,
    ReactiveFormsModule
  ]

})
export class SharedModule { }
