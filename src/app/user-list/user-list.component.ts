import {Component, OnInit} from '@angular/core';
import {UserService} from '../services/user.service';

import {TokenStorageService} from '../auth/token-storage.service';
import {Router} from '@angular/router';
import {User} from '../models/user';
import {TripService} from '../trip.service';
import {Trip} from '../models/trip';


@Component({
  selector: 'app-user-list',
  templateUrl: './user-list.component.html',
  styleUrls: ['./user-list.component.css']
})

export class UserListComponent implements OnInit {

  users: Array<User>;
  trips: Array<Trip>;

  constructor( private userService: UserService, private token: TokenStorageService,
               private router: Router, private tripService: TripService) {}
  ngOnInit() {
    this.userService.getAll().subscribe(data => {
      this.users = data;
    });
    this.tripService.getAll().subscribe(data => {
      this.trips = data;
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
        this.users = data;
      });
    document.location.reload();
  }

  deleteTrip(trip: Trip): void {
    this.tripService.removeTrip(trip)
      .subscribe( data => {
        this.trips = data;
      });
    document.location.reload();
  }
}
