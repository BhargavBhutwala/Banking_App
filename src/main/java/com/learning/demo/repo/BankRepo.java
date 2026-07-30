package com.learning.demo.repo;

import com.learning.demo.entities.BankAccount;
import org.springframework.data.jpa.repository.JpaRepository;
import org.springframework.stereotype.Repository;

import java.util.Optional;

@Repository
public interface BankRepo extends JpaRepository<BankAccount, String> {

    Optional<BankAccount> findByAccountNumber(String accountNumber);
}
