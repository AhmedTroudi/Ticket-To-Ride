import { Component, OnInit } from '@angular/core';
import {Router} from '@angular/router';
import {TokenStorageService} from '../auth/token-storage.service';
import {Trip} from '../models/trip';
import {User} from '../models/user';
import {UserService} from '../services/user.service';

@Component({
  selector: 'app-user',
  templateUrl: './user.component.html',
  styleUrls: ['./user.component.css']
})
export class UserComponent implements OnInit {
  users: Array<User>;
  constructor(private userService: UserService, private router: Router, private token: TokenStorageService) { }

  ngOnInit() {
    this.userService.getAll().subscribe(data => {
      this.users = data;
    });
  }
  logout() {
    this.token.signOut();
    this.router.navigate(['/']);
  }
  home() {
    this.router.navigate(['/']);
  }

}
