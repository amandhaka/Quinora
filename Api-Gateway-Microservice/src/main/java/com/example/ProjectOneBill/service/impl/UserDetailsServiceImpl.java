package com.example.ProjectOneBill.service.impl;

import com.example.ProjectOneBill.entity.ApplicationUser;
import com.example.ProjectOneBill.repository.ApplicationUserRepository;
//import com.example.ProjectOneBill.service.UserDetailsService;
import org.springframework.security.core.userdetails.User;
import org.springframework.security.core.userdetails.UserDetails;
import org.springframework.security.core.userdetails.UsernameNotFoundException;
import org.springframework.stereotype.Service;

import static java.util.Collections.emptyList;

@Service

public class UserDetailsServiceImpl implements org.springframework.security.core.userdetails.UserDetailsService {

    private ApplicationUserRepository applicationUserRepository;

    public UserDetailsServiceImpl(ApplicationUserRepository applicationUserRepository) {
        this.applicationUserRepository = applicationUserRepository;
    }




    @Override
    public UserDetails loadUserByUsername(String username) throws UsernameNotFoundException {
        System.out.println(username);
        ApplicationUser applicationUser = applicationUserRepository.findByUsername(username);
        System.out.println(applicationUser.getUsername());
        if (applicationUser == null) {
            throw new UsernameNotFoundException(username);
        }
        return new User(applicationUser.getUsername(), applicationUser.getPassword(), emptyList());
    }
}
