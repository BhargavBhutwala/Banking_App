import { Component } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { Router } from '@angular/router';

import { BankingService } from '../../services/banking';
import { SharedModule } from '../../shared/shared-module';

@Component({

selector:'app-fund-transfer',

standalone:true,

imports:[FormsModule, SharedModule],

templateUrl:'./fund-transfer.html',

styleUrl:'./fund-transfer.css'

})

export class FundTransfer{

constructor(

private banking:BankingService,

private router:Router

){}

fromAccount='';

toAccount='';

amount=0;

message='';

transfer(){

if(

!this.fromAccount ||

!this.toAccount ||

this.amount<=0

){

alert("Enter valid details");

return;

}

this.banking.transferFunds({

fromAccount:this.fromAccount,

toAccount:this.toAccount,

amount:this.amount

}).subscribe(()=>{

this.message="Transfer Successful";

this.fromAccount='';

this.toAccount='';

this.amount=0;

});

}

viewTransactions(){

this.router.navigate(['/transactions']);

}

goDashboard(){

this.router.navigate(['/dashboard']);

}

}