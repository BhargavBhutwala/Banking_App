import { Component } from '@angular/core';
import { Router } from '@angular/router';
import { AuthService } from '../../services/auth';

@Component({
  selector: 'app-dashboard',
  standalone: true,
  templateUrl: './dashboard.html',
  styleUrl: './dashboard.css'
})
export class Dashboard {

  constructor(
    private router: Router,
    private auth: AuthService
  ) {}

  goTransactions() {
    this.router.navigate(['/transactions']);
  }

  goTransfer() {
    this.router.navigate(['/fund-transfer']);
  }

  logout() {
    this.auth.logout();
    this.router.navigate(['/login']);
  }

}