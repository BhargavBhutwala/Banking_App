package com.learning.demo.service;

import com.learning.demo.entities.BankAccount;
import com.learning.demo.repo.BankRepo;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Service;

import java.util.Optional;

@Service
public class BankService {

    @Autowired
    private BankRepo bankRepo;

    public BankService(BankRepo bankRepo) {
        this.bankRepo = bankRepo;
    }

    public void deposit(String accountNumber, double amount){

        Optional<BankAccount> bankAccount = bankRepo.findByAccountNumber(accountNumber);

        bankAccount.get().setBalance(bankAccount.get().getBalance() + amount);

        bankRepo.save(bankAccount.get());
    }

    public void withdraw(String accountNumber, double amount){

        Optional<BankAccount> bankAccount = bankRepo.findByAccountNumber(accountNumber);

        if (bankAccount.get().getBalance() < amount){

            throw new IllegalArgumentException("Insufficient funds");
        }

        bankAccount.get().setBalance(bankAccount.get().getBalance() - amount);

        bankRepo.save(bankAccount.get());
    }
}
