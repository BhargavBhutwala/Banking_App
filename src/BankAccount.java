public class BankAccount {

    private String accountNo;
    private double balance = 0.0;
    private final double minBalance = 50;

    public BankAccount(String accountNo, double balance) {
        this.accountNo = accountNo;
        this.balance = balance;
    }

    public String getAccountNo() {
        return accountNo;
    }

    public void setAccountNo(String accountNo) {
        this.accountNo = accountNo;
    }

    public double getBalance() {
        return balance;
    }

    public void setBalance(double balance) {
        this.balance = balance;
    }

    public double getMinBalance() {
        return minBalance;
    }

    public void deposit(double amount) {

        if (amount < 0) {
            throw new IllegalArgumentException("Amount cannot be negative");
        }
        this.balance += amount;
    }

    public void withdraw(double amount) {

        if (amount < 0) {
            throw new IllegalArgumentException("Amount cannot be negative");
        }

        if (balance -  amount < minBalance){
            throw new IllegalArgumentException("Not enough balance");
        }

        this.balance -= amount;
    }
}
