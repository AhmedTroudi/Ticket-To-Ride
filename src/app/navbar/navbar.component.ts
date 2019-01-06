import { Component, OnInit } from '@angular/core';
import {TokenStorageService} from '../auth/token-storage.service';

declare const M;

@Component({
  selector: 'app-navbar',
  templateUrl: './navbar.component.html',
  styleUrls: ['./navbar.component.css']
})
export class NavbarComponent implements OnInit {

  isLoggedIn = false;
  roles: string[] = [];
  constructor(private tokenStorage: TokenStorageService ) {
  }

  ngOnInit() {
    const sideNav = document.querySelector('.sidenav');
    M.Sidenav.init(sideNav, {});
    if (this.tokenStorage.getToken()) {
      this.isLoggedIn = true;
      this.roles = this.tokenStorage.getAuthorities();
    }
  }
}


