import { getAccounts as getAllAccounts, deposit, withdraw } from "../services/accountService.js";
export function getAccounts(req, res) {
    const accounts = getAllAccounts();
    res.json(accounts);
}
export function depositMoney(req, res) {
    try {
        const { accountNo, amount } = req.body;
        const account = deposit(accountNo, amount);
        res.json(account);
    }
    catch (error) {
        res.status(400).json({
            message: error.message
        });
    }
}
export function withdrawMoney(req, res) {
    try {
        const { accountNo, amount } = req.body;
        const account = withdraw(accountNo, amount);
        res.json(account);
    }
    catch (error) {
        res.status(400).json({
            message: error.message
        });
    }
}
