import { Component, inject, OnInit, signal } from '@angular/core';
import { UserService } from '../services/user-service';
import { User } from '../models/user.type';
import { catchError } from 'rxjs';
import { UserItem } from "../components/user-item/user-item";

@Component({
  selector: 'app-users',
  imports: [UserItem],
  templateUrl: './users.html',
  styleUrl: './users.css'
})
export class Users implements OnInit {
  userService = inject(UserService);
  userItems = signal<Array<User>>([]);

  ngOnInit(): void {
    this.userService.getUsersFromApi()
    .pipe(
      catchError((err) => {
        console.log(err);
        throw err;
      })
    )
    .subscribe((response: any) => {
      this.userItems.set(response.data);
    });
  }
}
