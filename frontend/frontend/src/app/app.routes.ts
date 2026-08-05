import { Routes } from '@angular/router';
import { TransactionComponent } from './components/transaction/transaction';
import { FundTransfer } from './components/fund-transfer/fund-transfer';
import { LoginFormComponent } from './components/login-form/login-form';

export const routes: Routes = [
    {
        path: 'transactions',
        component: TransactionComponent
    },
    {
    path: 'fund-transfer',
    component: FundTransfer
    },
    {
        path: 'login',
        component: LoginFormComponent
    }
];
