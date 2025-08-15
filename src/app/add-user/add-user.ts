import { Component } from '@angular/core';
import { UserService } from '../services/user-service';
import { FormsModule } from '@angular/forms';

@Component({
  selector: 'app-add-user',
  imports: [ FormsModule ],
  templateUrl: './add-user.html',
  styleUrl: './add-user.css'
})
export class AddUser {
  constructor(private userService: UserService) {}

  onSubmit(form: any) {
    if (form.invalid) return;

    const newUser = form.value;
    ['name', 'email', 'contactNumber']
    .forEach(field => newUser[field] = Number(newUser[field]));

    this.userService.addUser(newUser).subscribe({
      next: () => {
        alert('User added');
        form.resetForm();
      },
      error: err => console.error(err)
    });
  }
}
