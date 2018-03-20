import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { AuthService } from '../../services/auth.service';

@Component({
  selector: 'app-header',
  templateUrl: './header.component.html',
  styleUrls: ['./header.component.css']
})
export class HeaderComponent implements OnInit {

  constructor(private router: Router,
              private authService: AuthService) { }

  ngOnInit() {
  }

  onNavigate(e, route) {
    e.preventDefault();
    this.router.navigate([route]);
  }

  onLogout(e) {
    e.preventDefault();
    this.authService.logout();
  }

}
