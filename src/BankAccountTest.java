import org.junit.jupiter.api.Test;

import static org.junit.jupiter.api.Assertions.assertEquals;
import static org.junit.jupiter.api.Assertions.assertThrows;

public class BankAccountTest {

    BankAccount bankAccount = new BankAccount("12345", 100);

    @Test
    void withdrawTest(){
        bankAccount.withdraw(10);
        assertEquals(90, bankAccount.getBalance());
    }

    @Test
    void negativeWithdrawTest(){

        Exception e = assertThrows(IllegalArgumentException.class, () -> {
            bankAccount.withdraw(60);
        });

        assertEquals("Not enough balance", e.getMessage());
    }

    @Test
    void depositTest(){
        bankAccount.deposit(10);
        assertEquals(110, bankAccount.getBalance());
    }

    @Test
    void depositNegativeTest(){

        Exception e = assertThrows(IllegalArgumentException.class, () -> {
            bankAccount.deposit(-10);
        });

        assertEquals("Amount cannot be negative", e.getMessage());
    }
}
