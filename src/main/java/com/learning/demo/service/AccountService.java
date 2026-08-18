package com.learning.demo.service;

import com.learning.demo.entities.BankAccount;
import com.learning.demo.repo.AccountRepo;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.cache.annotation.CacheEvict;
import org.springframework.cache.annotation.CachePut;
import org.springframework.cache.annotation.Cacheable;
import org.springframework.stereotype.Service;

@Service
public class AccountService {

    @Autowired
    private AccountRepo accountRepo;

    @Cacheable(value = "account", key = "#accountNumber")
    public BankAccount getAccountDetails(String accountNumber) {
        return accountRepo.findById(accountNumber).orElse(null);
    }

    @CachePut(value = "account", key = "#bankAccount.accountNumber")
    public BankAccount updateAccountDetails(BankAccount bankAccount) {
        return accountRepo.save(bankAccount);
    }

    @CachePut(value = "account", key = "#bankAccount.accountNumber")
    public BankAccount createAccount(BankAccount bankAccount) {

        System.out.println("Creating account in DATABASE...");

        return accountRepo.save(bankAccount);
    }

    @CacheEvict(value = "account", key = "#accountNumber")
    public void deleteAccount(String accountNumber) {

        System.out.println("Deleting account from DATABASE...");

        accountRepo.deleteById(accountNumber);
    }

    @CacheEvict(value = "account", allEntries = true)
    public void clearAccountCache() {

        System.out.println("Account cache cleared.");
    }
}
