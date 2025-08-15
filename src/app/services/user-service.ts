import { HttpClient } from '@angular/common/http';
import { inject, Injectable } from '@angular/core';
import { User } from '../models/user.type';

@Injectable({
  providedIn: 'root'
})
export class UserService {
  http = inject(HttpClient);

  getUsersFromApi() {
    const url = `http://localhost:8080/users/get`;
    return this.http.get<{ data: Array<User> }>(url);
  }
}
