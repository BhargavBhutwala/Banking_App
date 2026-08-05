import { Component } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { FundTransferService } from '../../services/fund-transfer';

@Component({
  selector: 'app-fund-transfer',
  imports: [FormsModule],
  templateUrl: './fund-transfer.html',
  styleUrl: './fund-transfer.css',
  standalone: true
})
export class FundTransfer {

  fromAccount: string = '';
  toAccount: string = '';
  amount: number = 0;

  message: string = '';

  constructor(private transferFunds:FundTransferService){}

  transfer(): void {

    this.message = this.transferFunds.transferFunds(
      this.fromAccount,
      this.toAccount,
      this.amount
    );
  }
}
