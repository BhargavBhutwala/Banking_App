package com.learning.demo;

import com.learning.demo.entities.BankAccount;
import com.learning.demo.repo.BankRepo;
import com.learning.demo.service.BankService;
import org.junit.jupiter.api.Test;
import org.mockito.Mockito;

import java.util.Optional;

import static org.junit.jupiter.api.Assertions.assertEquals;
import static org.junit.jupiter.api.Assertions.assertThrows;
import static org.mockito.Mockito.*;

public class BankServiceTest {

    @Test
    void testDeposit() {
        // Arrange
        BankRepo mockRepo = Mockito.mock(BankRepo.class);
        BankAccount account = new BankAccount("123", 500.0);
        when(mockRepo.findByAccountNumber("123")).thenReturn(Optional.of(account));
        BankService service = new BankService(mockRepo);
        // Act
        service.deposit("123", 200.0);
        // Assert
        assertEquals(700.0, account.getBalance());
        verify(mockRepo).save(account); // verify save was called
    }


    @Test
    void testWithdrawSuccess() {
        BankRepo mockRepo = Mockito.mock(BankRepo.class);
        BankAccount account = new BankAccount("123", 500.0);


        when(mockRepo.findByAccountNumber("123")).thenReturn(Optional.of(account));


        BankService service = new BankService(mockRepo);
        service.withdraw("123", 200.0);


        assertEquals(300.0, account.getBalance());
        verify(mockRepo).save(account);
    }


    @Test
    void testWithdrawInsufficientFunds() {
        BankRepo mockRepo = Mockito.mock(BankRepo.class);
        BankAccount account = new BankAccount("123", 100.0);


        when(mockRepo.findByAccountNumber("123")).thenReturn(Optional.of(account));


        BankService service = new BankService(mockRepo);


        Exception ex = assertThrows(IllegalArgumentException.class,
                () -> service.withdraw("123", 200.0));


        assertEquals("Insufficient funds", ex.getMessage());
        verify(mockRepo, never()).save(account); // save should NOT be called
    }

}
