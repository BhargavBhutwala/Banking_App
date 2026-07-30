package com.learning.demo.controller;

import org.springframework.web.bind.annotation.GetMapping;
import org.springframework.web.bind.annotation.RequestMapping;
import org.springframework.web.bind.annotation.RestController;

import java.util.List;

@RestController
@RequestMapping("/api/userApi")
public class MyController {

    private List<String> users = List.of("user1", "user2", "user3");

    @GetMapping
    public List<String> getUsers() {
        return users;
    }

    @GetMapping("/test")
    public String hello() {
        return "hello";
    }
}
