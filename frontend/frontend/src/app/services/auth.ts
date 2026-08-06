import { Injectable } from '@angular/core';

interface User {

  username: string;
  password: string;

}

@Injectable({
  providedIn: 'root'
})
export class AuthService {

  private loggedIn = false;

  private users: User[] = [

    {
      username: 'admin',
      password: 'admin123'
    }

  ];

  constructor() {}

  // Register new user
  register(username: string, password: string): boolean {

    const existingUser = this.users.find(

      user => user.username === username

    );

    if (existingUser) {

      return false;

    }

    this.users.push({

      username,
      password

    });

    return true;

  }

  // Login
  login(username: string, password: string): boolean {

    const user = this.users.find(

      u =>
        u.username === username &&
        u.password === password

    );

    if (user) {

      this.loggedIn = true;

      return true;

    }

    return false;

  }

  logout(): void {

    this.loggedIn = false;

  }

  isAuthenticated(): boolean {

    return this.loggedIn;

  }

}