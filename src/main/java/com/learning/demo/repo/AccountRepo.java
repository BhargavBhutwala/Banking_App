package com.learning.demo.repo;

import com.learning.demo.entities.BankAccount;
import org.springframework.data.jpa.repository.JpaRepository;
import org.springframework.stereotype.Repository;

@Repository
public interface AccountRepo extends JpaRepository<BankAccount, String> {
}
