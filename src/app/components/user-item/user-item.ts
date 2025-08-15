import { Component, input } from '@angular/core';
import { User } from '../../models/user.type';

@Component({
  selector: 'app-user-item',
  imports: [],
  templateUrl: './user-item.html',
  styleUrl: './user-item.css'
})
export class UserItem {
  user = input.required<User>()
}
