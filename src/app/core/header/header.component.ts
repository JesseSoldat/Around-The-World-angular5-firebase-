import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { Observable } from 'rxjs/Observable';
import { AuthService } from '../../services/auth.service';
import { DataStoreService } from '../../services/data-store.service';

@Component({
  selector: 'app-header',
  templateUrl: './header.component.html',
  styleUrls: ['./header.component.css']
})
export class HeaderComponent implements OnInit {
  isLoggedIn$: Observable<boolean>;

  constructor(private router: Router,
              private authService: AuthService,
              private dataStoreService: DataStoreService) { }

  ngOnInit() {
    this.isLoggedIn$ = this.dataStoreService.isLoggedIn$;
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
