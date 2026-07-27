package org.bank;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Service;

@Service
public class OrderService {

    private PaymentService paymentService;

    @Autowired
    public  OrderService(PaymentService paymentService) {
        this.paymentService = paymentService;
    }

    public void placeOrder(double amount) {
        System.out.println("Placing order...");
        paymentService.makePayment(amount);
    }
}
