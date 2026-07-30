package com.learning.demo.controller;

import org.springframework.stereotype.Controller;
import org.springframework.ui.Model;
import org.springframework.web.bind.annotation.GetMapping;
import org.springframework.web.bind.annotation.RequestMapping;
import org.springframework.web.bind.annotation.RestController;

import java.util.List;

@Controller
@RequestMapping("/api/userApi")
public class MyController {

    private List<String> users = List.of("user1", "user2", "user3");

    @GetMapping
    public List<String> getUsers() {
        return users;
    }

    @GetMapping("/test")
    public String hello(Model model) {

        model.addAttribute("name","Bharggav");
        model.addAttribute("company","IBM");

        return "index";
    }
}
