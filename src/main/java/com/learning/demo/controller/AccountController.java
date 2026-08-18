package com.learning.demo.controller;

import com.learning.demo.entities.BankAccount;
import com.learning.demo.service.AccountService;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.http.ResponseEntity;
import org.springframework.web.bind.annotation.*;

@RestController
@RequestMapping("/accounts")
public class AccountController {

    @Autowired
    private AccountService accountService;

    // --------------------------------------------------
    // GET ACCOUNT
    // GET /accounts/ACC101
    // --------------------------------------------------

    @GetMapping("/{accountNumber}")
    public ResponseEntity<BankAccount> getAccount(
            @PathVariable String accountNumber) {

        BankAccount account =
                accountService.getAccountDetails(accountNumber);

        if (account == null) {
            return ResponseEntity.notFound().build();
        }

        return ResponseEntity.ok(account);
    }


    // --------------------------------------------------
    // CREATE ACCOUNT
    // POST /accounts
    // --------------------------------------------------

    @PostMapping
    public ResponseEntity<BankAccount> createAccount(
            @RequestBody BankAccount bankAccount) {

        BankAccount savedAccount =
                accountService.createAccount(bankAccount);

        return ResponseEntity.ok(savedAccount);
    }


    // --------------------------------------------------
    // UPDATE ACCOUNT
    // PUT /accounts
    // --------------------------------------------------

    @PutMapping
    public ResponseEntity<BankAccount> updateAccount(
            @RequestBody BankAccount bankAccount) {

        BankAccount updatedAccount =
                accountService.updateAccountDetails(bankAccount);

        return ResponseEntity.ok(updatedAccount);
    }


    // --------------------------------------------------
    // DELETE ACCOUNT
    // DELETE /accounts/ACC101
    // --------------------------------------------------

    @DeleteMapping("/{accountNumber}")
    public ResponseEntity<String> deleteAccount(
            @PathVariable String accountNumber) {

        accountService.deleteAccount(accountNumber);

        return ResponseEntity.ok(
                "Account " + accountNumber + " deleted successfully"
        );
    }


    // --------------------------------------------------
    // CLEAR CACHE
    // DELETE /accounts/cache
    // --------------------------------------------------

    @DeleteMapping("/cache")
    public ResponseEntity<String> clearCache() {

        accountService.clearAccountCache();

        return ResponseEntity.ok(
                "Account cache cleared successfully"
        );
    }
}