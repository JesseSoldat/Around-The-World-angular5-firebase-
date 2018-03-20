import { Component, OnInit, Input } from '@angular/core';
import { AuthService } from '../../services/auth.service';

@Component({
  selector: 'app-auth-form',
  templateUrl: './auth-form.component.html',
  styleUrls: ['./auth-form.component.css']
})
export class AuthFormComponent implements OnInit {
  @Input() formType: string;

  constructor(private authService: AuthService) { }

  ngOnInit() {
  }

  onSubmit(form) {
    const { username, email, password } = form.value;
    
    if(this.formType === 'Register') {
      return this.authService.registerWithEmail(username, email, password);
    }
    if(this.formType === 'Login') {
      return this.authService.loginWithEmail(email, password);
    }
  }
}
