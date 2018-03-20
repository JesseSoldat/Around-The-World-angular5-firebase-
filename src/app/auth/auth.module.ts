import { NgModule } from '@angular/core';
import { SharedModule } from '../shared/shared.module';

import { AuthRoutingModule } from './auth-routing.module';
import { LoginComponent } from './login/login.component';
import { RegisterComponent } from './register/register.component';
import { AuthFormComponent } from './auth-form/auth-form.component';

@NgModule({
  imports: [
    SharedModule,
    AuthRoutingModule
  ],
  declarations: [
    LoginComponent, 
    RegisterComponent, 
    AuthFormComponent
  ]
})
export class AuthModule { }
