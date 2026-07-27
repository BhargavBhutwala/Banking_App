package org.bank;

import org.springframework.stereotype.Service;

@Service
public class SMSNotificationService implements NotificationService {

    @Override
    public void notifyCustomer(String message) {
        System.out.println("SMS sent: " + message);
    }

}
