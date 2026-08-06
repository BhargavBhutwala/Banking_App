import { Component, OnInit } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { BankingService } from '../../services/banking';
import { CurrencyPipe } from '@angular/common';
import { MaskAccountPipe } from '../pipes/mask-account-pipe';

@Component({
  selector: 'app-fund-transfer',
  standalone: true,
  imports: [FormsModule, CurrencyPipe, MaskAccountPipe],
  templateUrl: './fund-transfer.html',
  styleUrl: './fund-transfer.css'
})
export class FundTransfer implements OnInit {

  fromAccount = "";
  toAccount = "";
  amount = 0;

  message = "";

  transfers: any[] = [];

  constructor(private bankingService: BankingService) {}

  ngOnInit(): void {

    this.loadTransfers();

  }

  loadTransfers(): void {

    this.bankingService.getTransfers()
      .subscribe(data => {

        this.transfers = data;

      });

  }

  transfer(): void {

    const request = {

      fromAccount: this.fromAccount,
      toAccount: this.toAccount,
      amount: this.amount

    };

    this.bankingService.transferFunds(request)
      .subscribe(res => {

        this.message = "Fund transferred successfully.";

        this.loadTransfers();

        this.fromAccount = "";
        this.toAccount = "";
        this.amount = 0;

      });

  }

  deleteTransfer(id: number): void {

    this.bankingService.deleteTransfer(id)
      .subscribe(() => {

        this.message = "Transfer deleted.";

        this.loadTransfers();

      });

  }

  updateAmount(id: number): void {

    const amount = Number(prompt("Enter new amount"));

    if (amount <= 0) {
      return;
    }

    this.bankingService.updateTransfer(id, amount)
      .subscribe(() => {

        this.message = "Transfer updated.";

        this.loadTransfers();

      });

  }

}