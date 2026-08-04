let accounts = [
    {
        id: 101,
        name: "Bharggav",
        age: 25,
        accountNo: "ACC101",
        balance: 5000
    },
    {
        id: 102,
        name: "Rama",
        age: 30,
        accountNo: "ACC102",
        balance: 10000
    },
    {
        id: 103,
        name: "Sita",
        age: 28,
        accountNo: "ACC103",
        balance: 7500
    }
];
// Get all accounts
export function getAccounts() {
    return accounts;
}
// Find account by account number
function findAccount(accountNo) {
    return accounts.find(account => account.accountNo === accountNo);
}
// Deposit money
export function deposit(accountNo, amount) {
    const account = findAccount(accountNo);
    if (!account) {
        throw new Error("Account not found");
    }
    if (amount <= 0) {
        throw new Error("Deposit amount must be greater than 0");
    }
    account.balance = (account.balance ?? 0) + amount;
    return account;
}
// Withdraw money
export function withdraw(accountNo, amount) {
    const account = findAccount(accountNo);
    if (!account) {
        throw new Error("Account not found");
    }
    if (amount <= 0) {
        throw new Error("Withdrawal amount must be greater than 0");
    }
    if ((account.balance ?? 0) < amount) {
        throw new Error("Insufficient balance");
    }
    account.balance = (account.balance ?? 0) - amount;
    return account;
}
