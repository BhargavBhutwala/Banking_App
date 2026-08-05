import { Component } from '@angular/core';
import {
  FormBuilder,
  FormGroup,
  FormArray,
  Validators,
  ReactiveFormsModule
} from '@angular/forms';

@Component({
  selector: 'app-login-form',
  standalone: true,
  imports: [ReactiveFormsModule],
  templateUrl: './login-form.html',
  styleUrl: './login-form.css'
})
export class LoginFormComponent {

  loginForm: FormGroup;

  constructor(private fb: FormBuilder) {

    this.loginForm = this.fb.group({

      username: ['', Validators.required],

      password: ['', [
        Validators.required,
        Validators.minLength(6)
      ]],

      fromAccount: ['', Validators.required],

      toAccount: ['', Validators.required],

      amount: [0, [
        Validators.required,
        Validators.min(100)
      ]],

      beneficiaries: this.fb.array([])

    });

  }

  get beneficiaries(): FormArray {
    return this.loginForm.get('beneficiaries') as FormArray;
  }

  addBeneficiary(): void {

    const beneficiary = this.fb.group({

      name: ['', Validators.required],

      accountNo: ['', Validators.required],

      amount: [100, [
        Validators.required,
        Validators.min(100)
      ]]

    });

    this.beneficiaries.push(beneficiary);
  }

  removeBeneficiary(index: number): void {
    this.beneficiaries.removeAt(index);
  }

  submit(): void {

    if (this.loginForm.invalid) {
      this.loginForm.markAllAsTouched();
      return;
    }

    console.log(this.loginForm.value);
  }
}