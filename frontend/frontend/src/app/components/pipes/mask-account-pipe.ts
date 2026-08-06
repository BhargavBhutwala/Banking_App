import { Pipe, PipeTransform } from '@angular/core';

@Pipe({
  name: 'maskAccount',
  standalone: true
})
export class MaskAccountPipe implements PipeTransform {
  
  transform(accountNo: string): string {

    if (!accountNo) {
      return '';
    }

    // If account number is too short
    if (accountNo.length <= 4) {
      return accountNo;
    }

    const lastFour = accountNo.slice(-4);

    return 'X'.repeat(accountNo.length - 4) + lastFour;
  }
}
