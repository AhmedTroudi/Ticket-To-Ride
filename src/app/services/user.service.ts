import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class UserService {

  private userDashUrl = 'http://localhost:8080/users';

  constructor(private http: HttpClient) { }

  getAll(): Observable<any> {
    return this.http.get('//localhost:8080/users');
  }

  getUser(user) {
    console.log(this.userDashUrl + user.id);
    return this.http.get(this.userDashUrl + user.id);
  }

  public removeUser(user) {
    return this.http.delete(this.userDashUrl + '/delete' + user.id);
  }

}
