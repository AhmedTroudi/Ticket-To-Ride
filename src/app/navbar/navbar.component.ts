import { Component, OnInit } from '@angular/core';
declare const M;
@Component({
  selector: 'app-navbar',
  templateUrl: './navbar.component.html',
  styleUrls: ['./navbar.component.css']
})
export class NavbarComponent implements OnInit {

  constructor() {
  }

  ngOnInit() {
    const sideNav = document.querySelector('.sidenav');
    M.Sidenav.init(sideNav, {});
  }
}


