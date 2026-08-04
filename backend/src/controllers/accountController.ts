import {getAccounts as getAllAccounts, deposit, withdraw} from "../services/accountService.js";
import type { Request, Response } from "express";

export function getAccounts(req: Request, res: Response): void{

const accounts = getAllAccounts();
res.json(accounts);
}

export function depositMoney(req: Request, res: Response): void{

    try {
        
        const {accountNo, amount} = req.body;

        const account = deposit(accountNo, amount);

        res.json(account);

    } catch (error) {
        
        res.status(400).json({
            message: (error as Error).message
        });
    }
}

export function withdrawMoney(
    req: Request,
    res: Response
): void {

    try {

        const { accountNo, amount } = req.body;

        const account = withdraw(accountNo, amount);

        res.json(account);

    } catch (error) {

        res.status(400).json({
            message: (error as Error).message
        });
    }
}


