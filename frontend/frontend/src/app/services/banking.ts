import { Injectable } from '@angular/core';
import { Observable, of } from 'rxjs';

export interface Transfer {

  id: number;
  fromAccount: string;
  toAccount: string;
  amount: number;

}

@Injectable({
  providedIn: 'root'
})
export class BankingService {

  private transfers: Transfer[] = [

    {
      id: 1,
      fromAccount: "ACC101",
      toAccount: "ACC102",
      amount: 5000
    },
    {
      id: 2,
      fromAccount: "ACC103",
      toAccount: "ACC104",
      amount: 2000
    }

  ];

  private nextId = 3;

  constructor() { }

  // GET
  getTransfers(): Observable<Transfer[]> {

    return of(this.transfers);

  }

  // POST
  transferFunds(data: Omit<Transfer, 'id'>): Observable<Transfer> {

    const transfer: Transfer = {

      id: this.nextId++,
      ...data

    };

    this.transfers.push(transfer);

    return of(transfer);

  }

  // DELETE
  deleteTransfer(id: number): Observable<boolean> {

    this.transfers = this.transfers.filter(t => t.id !== id);

    return of(true);

  }

  // PATCH
  updateTransfer(id: number, amount: number): Observable<Transfer | undefined> {

    const transfer = this.transfers.find(t => t.id === id);

    if (transfer) {

      transfer.amount = amount;

    }

    return of(transfer);

  }

}