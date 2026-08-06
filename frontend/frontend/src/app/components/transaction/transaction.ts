import { Component,OnInit } from '@angular/core';

import { CurrencyPipe } from '@angular/common';

import { Router } from '@angular/router';

import { BankingService,Transfer } from '../../services/banking';

import { MaskAccountPipe } from '../pipes/mask-account-pipe';

import { AuthService } from '../../services/auth';
import { SharedModule } from '../../shared/shared-module';

@Component({

selector:'app-transaction',

standalone:true,

imports:[SharedModule],

templateUrl:'./transaction.html',

styleUrl:'./transaction.css'

})

export class TransactionComponent implements OnInit{

transfers:Transfer[]=[];

constructor(

private banking:BankingService,

private auth:AuthService,

private router:Router

){}

ngOnInit(){

this.loadTransfers();

}

loadTransfers(){

this.banking.getTransfers()

.subscribe(data=>{

this.transfers=data;

});

}

deleteTransfer(id:number){

this.banking.deleteTransfer(id)

.subscribe(()=>{

this.loadTransfers();

});

}

updateTransfer(id:number){

const amount=Number(prompt("Enter Amount"));

if(amount<=0){

return;

}

this.banking.updateTransfer(id,amount)

.subscribe(()=>{

this.loadTransfers();

});

}

logout(){

this.auth.logout();

this.router.navigate(['/login']);

}

goDashboard(){

this.router.navigate(['/dashboard']);

}

}