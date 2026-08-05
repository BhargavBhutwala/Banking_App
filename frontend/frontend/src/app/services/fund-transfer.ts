import { Injectable, Service } from '@angular/core';

@Injectable({
    providedIn: 'root'
})
export class FundTransferService {

    transferFunds(
    fromAccount: string,
    toAccount: string,
    amount: number
  ): string {

    if (!fromAccount || !toAccount) {
      return 'Please enter both account numbers.';
    }

    if (fromAccount === toAccount) {
      return 'Sender and receiver accounts cannot be the same.';
    }

    if (amount <= 0) {
      return 'Transfer amount must be greater than 0.';
    }

    return `₹${amount} transferred successfully from ${fromAccount} to ${toAccount}.`;
  }
}
