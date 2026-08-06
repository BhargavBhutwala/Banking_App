import { Component } from '@angular/core';
import {
  FormBuilder,
  FormGroup,
  Validators,
  ReactiveFormsModule
} from '@angular/forms';
import { Router, RouterLink } from '@angular/router';
import { AuthService } from '../../services/auth';

@Component({
  selector: 'app-register',
  standalone: true,
  imports: [
    ReactiveFormsModule,
    RouterLink
  ],
  templateUrl: './register.html',
  styleUrl: './register.css'
})
export class RegisterComponent {

  registerForm: FormGroup;

  constructor(
    private fb: FormBuilder,
    private auth: AuthService,
    private router: Router
  ) {

    this.registerForm = this.fb.group({

      username: [
        '',
        Validators.required
      ],

      password: [
        '',
        [
          Validators.required,
          Validators.minLength(6)
        ]
      ]

    });

  }

  register(): void {

    if (this.registerForm.invalid) {

      this.registerForm.markAllAsTouched();

      return;

    }

    const success = this.auth.register(

      this.registerForm.value.username!,

      this.registerForm.value.password!

    );

    if (success) {

      alert("Registration Successful");

      this.router.navigate(['/login']);

    }

    else {

      alert("Username already exists");

    }

  }

}