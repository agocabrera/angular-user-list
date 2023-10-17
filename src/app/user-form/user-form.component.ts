import { Component, EventEmitter, Output } from '@angular/core';
import { FormGroup, FormBuilder, Validators } from '@angular/forms';

@Component({
  selector: 'app-user-form',
  templateUrl: './user-form.component.html',
  styleUrls: ['./user-form.component.css'],
})
export class UserFormComponent {
  userFormGroup: FormGroup;

  constructor(private formBuilder: FormBuilder) {
    this.userFormGroup = this.formBuilder.group({
      firstName: [
        '',
        [
          Validators.required,
          Validators.minLength(1),
          Validators.maxLength(50),
        ],
      ],
      lastName: [
        '',
        [
          Validators.required,
          Validators.minLength(1),
          Validators.maxLength(50),
        ],
      ],
      email: ['', [Validators.required, Validators.email]],
    });
  }

  handleSubmit() {
    if (this.userFormGroup.valid) {
      const formData = this.userFormGroup.value;
      this.addUser(formData);
      this.userFormGroup.reset();
    }
  }

  @Output() newUserEvent = new EventEmitter();

  addUser(user: any) {
    this.newUserEvent.emit(user);
  }
}
