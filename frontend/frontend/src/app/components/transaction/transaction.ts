import { Component } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { MaskAccountPipe } from '../pipes/mask-account-pipe';

interface Transaction{

  accountNo: string;
  type: string;
  amount: number;
  description: string;
  date: string;
}

@Component({
  selector: 'app-transaction',
  imports: [FormsModule, MaskAccountPipe],
  templateUrl: './transaction.html',
  styleUrl: './transaction.css',
  standalone: true
})
export class TransactionComponent {

  transaction: Transaction = {

    accountNo: '',
    type: 'Deposit',
    amount: 0,
    description: '',
    date: ''
  };

  transactions: Transaction[] = [];

  addTransaction(): void {

    if (
      !this.transaction.accountNo ||
      !this.transaction.amount ||
      !this.transaction.description
    ) {
      alert('Please enter all required details');
      return;
    }

    const newTransaction: Transaction = {
      ...this.transaction,
      date: new Date().toLocaleString()
    };

    this.transactions.push(newTransaction);

    // Clear form
    this.transaction = {
      accountNo: '',
      type: 'Deposit',
      amount: 0,
      description: '',
      date: ''
    };
  }

  deleteTransaction(index: number): void {
    this.transactions.splice(index, 1);
  }
}
