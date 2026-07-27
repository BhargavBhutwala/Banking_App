package org.bank;

import org.springframework.stereotype.Service;

@Service
public class CreditCardPayment implements PaymentService{
    @Override
    public void makePayment(double amount) {
        System.out.println("Credit card payment for your credit card number: " + amount);
    }
}
