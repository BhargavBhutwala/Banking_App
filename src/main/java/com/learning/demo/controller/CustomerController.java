package com.learning.demo.controller;

import com.learning.demo.entities.Customer;
import com.learning.demo.repo.CustomerRepo;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.web.bind.annotation.*;

import java.util.List;

@RestController
@RequestMapping("/api/v1/customer")
public class CustomerController {

    @Autowired
    private CustomerRepo customerRepo;

    @GetMapping
    public List<Customer> getCustomers() {
        return customerRepo.findAll();
    }

    @PostMapping
    public void addCustomer(@RequestBody Customer customer) {
        customerRepo.save(customer);
    }

    @GetMapping("/{id}")
    public Customer getCustomer(@PathVariable Integer id) {
        return customerRepo.findById(id).orElseThrow();
    }

    @DeleteMapping("/{id}")
    public void deleteCustomer(@PathVariable Integer id) {
        customerRepo.deleteById(id);
    }

    @PutMapping("/{id}")
    public Customer updateCustomer(@PathVariable Integer id, @RequestBody Customer newCustomer) {

        Customer customer = customerRepo.findById(id).orElseThrow();

        customer.setName(newCustomer.getName());
        customer.setEmail(newCustomer.getEmail());
        customer.setPhone(newCustomer.getPhone());
        customer.setPassword(newCustomer.getPassword());
        customer.setAccount_type(newCustomer.getAccount_type());

        return customerRepo.save(customer);
    }
}
