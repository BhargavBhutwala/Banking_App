import { Component, signal } from '@angular/core';
import { RouterOutlet } from '@angular/router';
import { Dashboard } from './components/dashboard/dashboard';
import { TransactionComponent } from './components/transaction/transaction';

@Component({
  selector: 'app-root',
  imports: [RouterOutlet, Dashboard, TransactionComponent],
  templateUrl: './app.html',
  styleUrl: './app.css'
})
export class App {
  protected readonly title = signal('Bharggav');
}
