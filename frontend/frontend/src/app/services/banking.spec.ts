import { describe, it, expect, beforeEach } from 'vitest';
import { BankingService } from './banking';

describe('BankingService', () => {

  let service: BankingService;

  beforeEach(() => {
    service = new BankingService();
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });

  it('should return all transfers', () => {

    service.getTransfers().subscribe(data => {

      expect(data.length).toBe(2);
      expect(data[0].fromAccount).toBe('ACC101');

    });

  });

  it('should add a transfer', () => {

    service.transferFunds({

      fromAccount: 'ACC200',
      toAccount: 'ACC300',
      amount: 1000

    }).subscribe(result => {

      expect(result.id).toBe(3);
      expect(result.amount).toBe(1000);

    });

    service.getTransfers().subscribe(data => {

      expect(data.length).toBe(3);

    });

  });

  it('should delete transfer', () => {

    service.deleteTransfer(1).subscribe(result => {

      expect(result).toBe(true);

    });

    service.getTransfers().subscribe(data => {

      expect(data.length).toBe(1);

    });

  });

  it('should update transfer', () => {

    service.updateTransfer(2, 9000).subscribe(result => {

      expect(result?.amount).toBe(9000);

    });

  });

});