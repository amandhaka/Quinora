package com.example.ProjectOneBill.service.impl;

import com.example.ProjectOneBill.dto.UserRequestDTO;
//import com.example.ProjectOneBill.dto.UserResponseDTO;
import com.example.ProjectOneBill.entity.ApplicationUser;
import com.example.ProjectOneBill.repository.ApplicationUserRepository;
import com.example.ProjectOneBill.service.UserService;
import org.springframework.beans.BeanUtils;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.security.crypto.bcrypt.BCryptPasswordEncoder;
import org.springframework.stereotype.Service;


@Service
public class UserServiceImpl implements UserService {
    @Autowired
    private ApplicationUserRepository applicationUserRepository;

    public String signUp(UserRequestDTO user){
        if (applicationUserRepository.findByUsername(user.getUsername()) == null) {


            System.out.println(user);
            ApplicationUser userTosave = new ApplicationUser();
            BeanUtils.copyProperties(user, userTosave);
            userTosave.setPassword(new BCryptPasswordEncoder().encode(user.getPassword()));

            applicationUserRepository.save(userTosave);
            System.out.println(userTosave);
            return ("User saved");
        }

        return ("User already exists!");


    }

}
