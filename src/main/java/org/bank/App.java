package org.bank;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.context.ApplicationContext;
import org.springframework.context.support.ClassPathXmlApplicationContext;

/**
 * Hello world!
 *
 */
public class App 
{
    public static void main( String[] args )
    {

//        // Load Spring configuration from applicationContext.xml
//        ApplicationContext context = new ClassPathXmlApplicationContext("applicationContext.xml");
//
//
//        // Get FundTransferService bean
//        FundTransferService service = context.getBean(FundTransferService.class);
//
//
//        // Perform a demo transfer
//        service.transferFunds("ACC123", "ACC456", 5000.0);

        PaymentService paymentService = new CreditCardPayment();

        OrderService orderService =  new OrderService(paymentService);

        orderService.placeOrder(500);

    }
}
