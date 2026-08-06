import { Routes } from '@angular/router';

import { LoginFormComponent } from './components/login-form/login-form';
import { Dashboard } from './components/dashboard/dashboard';
import { FundTransfer } from './components/fund-transfer/fund-transfer';
import { TransactionComponent } from './components/transaction/transaction';

import { authGuard } from './guards/auth-guard';
import { RegisterComponent } from './components/register/register';

export const routes:Routes=[

    {
        path: 'login',
        component: LoginFormComponent
    },
    {
        path: 'register',
        component: RegisterComponent
    },
    {
        path: '',
        redirectTo: 'login',
        pathMatch: 'full'
    },

    {
        path:'dashboard',
        component:Dashboard,
        canActivate:[authGuard]
    },

    {
        path:'fund-transfer',
        component:FundTransfer,
        canActivate:[authGuard]
    },

    {
        path:'transactions',
        component:TransactionComponent,
        canActivate:[authGuard]
    }

];