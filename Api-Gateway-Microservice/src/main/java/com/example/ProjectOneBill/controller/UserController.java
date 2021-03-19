package com.example.ProjectOneBill.controller;

import com.example.ProjectOneBill.dto.UserRequestDTO;
//import com.example.ProjectOneBill.dto.UserResponseDTO;
import com.example.ProjectOneBill.entity.ApplicationUser;
import com.example.ProjectOneBill.service.UserService;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.security.crypto.bcrypt.BCryptPasswordEncoder;
import org.springframework.stereotype.Controller;
import org.springframework.web.bind.annotation.PostMapping;
import org.springframework.web.bind.annotation.RequestMapping;
import org.springframework.web.bind.annotation.RestController;
import org.springframework.web.bind.annotation.*;

import static com.sun.jersey.core.header.reader.HttpHeaderReader.Event.Control;


@RestController

@RequestMapping("/users")
public class UserController {
    @Autowired
    private UserService userService;

    //POST
    @PostMapping("/sign-up")
    public String register (@RequestBody UserRequestDTO user){
        System.out.println("On this");
        return userService.signUp(user);

    }

    @GetMapping ("/")
    public String mock(){
        return "Hello authorized user!";
    }









}
