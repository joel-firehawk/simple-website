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

  onSubmit(form: any, fileInput: HTMLInputElement) {
    if (form.invalid) return;

    const formData = new FormData();
    formData.append('name', form.value.name);
    formData.append('email', form.value.email);
    formData.append('contactNumber', form.value.contactNumber);

    const file = fileInput.files?.[0];
    if (file) {
      formData.append('imageURL', file); 
    }

    this.userService.addUser(formData).subscribe({
      next: () => {
        alert('User added');
        form.resetForm();
        fileInput.value = ''; // reset file input
      },
      error: err => console.error(err)
    });
  }
}
