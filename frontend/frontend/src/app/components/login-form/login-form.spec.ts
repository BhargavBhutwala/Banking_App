import { ComponentFixture, TestBed } from '@angular/core/testing';
import { describe, it, expect, beforeEach, vi } from 'vitest';

import { LoginFormComponent } from './login-form';
import { AuthService } from '../../services/auth';
import { Router } from '@angular/router';

describe('LoginFormComponent', () => {

  let component: LoginFormComponent;

  let fixture: ComponentFixture<LoginFormComponent>;

  let authSpy: {

    login: ReturnType<typeof vi.fn>;

  };

  let routerSpy: {

    navigate: ReturnType<typeof vi.fn>;

  };

  beforeEach(async () => {

    authSpy = {

      login: vi.fn()

    };

    routerSpy = {

      navigate: vi.fn()

    };

    await TestBed.configureTestingModule({

      imports: [

        LoginFormComponent

      ],

      providers: [

        {

          provide: AuthService,

          useValue: authSpy

        },

        {

          provide: Router,

          useValue: routerSpy

        }

      ]

    }).compileComponents();

    fixture = TestBed.createComponent(LoginFormComponent);

    component = fixture.componentInstance;

    fixture.detectChanges();

  });

  it('should create', () => {

    expect(component).toBeTruthy();

  });

  it('form should be invalid initially', () => {

    expect(component.loginForm.valid).toBe(false);

  });

  it('username is required', () => {

    const username = component.loginForm.controls['username'];

    username.setValue('');

    expect(username.valid).toBe(false);

  });

  it('password should have minimum length 6', () => {

    const password = component.loginForm.controls['password'];

    password.setValue('123');

    expect(password.valid).toBe(false);

  });

  it('should login successfully', () => {

    authSpy.login.mockReturnValue(true);

    component.loginForm.setValue({

      username: 'admin',

      password: 'admin123'

    });

    const alertSpy = vi
      .spyOn(window, 'alert')
      .mockImplementation(() => {});

    component.login();

    expect(authSpy.login)

      .toHaveBeenCalledWith(

        'admin',

        'admin123'

      );

    expect(routerSpy.navigate)

      .toHaveBeenCalledWith(

        ['/dashboard']

      );

    expect(alertSpy)

      .toHaveBeenCalledWith(

        'Login Successful'

      );

  });

  it('should show invalid credentials alert', () => {

    authSpy.login.mockReturnValue(false);

    component.loginForm.setValue({

      username: 'abc',

      password: 'abcdef'

    });

    const alertSpy = vi
      .spyOn(window, 'alert')
      .mockImplementation(() => {});

    component.login();

    expect(authSpy.login)

      .toHaveBeenCalledWith(

        'abc',

        'abcdef'

      );

    expect(alertSpy)

      .toHaveBeenCalledWith(

        'Invalid Username or Password'

      );

    expect(routerSpy.navigate)

      .not.toHaveBeenCalled();

  });

});