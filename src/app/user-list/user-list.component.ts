import {Component, OnInit} from '@angular/core';
import {UserService} from '../services/user.service';

import {TokenStorageService} from '../auth/token-storage.service';
import {Router} from '@angular/router';
import {HttpClient} from '@angular/common/http';
import {User} from '../user.model';


@Component({
  selector: 'app-user-list',
  templateUrl: './user-list.component.html',
  styleUrls: ['./user-list.component.css']
})

export class UserListComponent implements OnInit {

  users: Array<User>;
  private userDashUrl = 'http://localhost:8080/users';

  constructor( private userService: UserService, private token: TokenStorageService,
               private router: Router, private http: HttpClient) {}
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

  deleteUser(user: User): void {
    this.userService.removeUser(user)
      .subscribe( data => {
        this.users = this.users.filter(u => u !== user);
      });
  }
}