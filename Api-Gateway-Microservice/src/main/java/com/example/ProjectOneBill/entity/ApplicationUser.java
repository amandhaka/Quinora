package com.example.ProjectOneBill.entity;

import lombok.Data;
import org.hibernate.annotations.GenericGenerator;

import javax.persistence.*;

@Data
@Entity
@Table(uniqueConstraints={@UniqueConstraint(columnNames = {"username"})})
public class ApplicationUser {
    @Id
    @GenericGenerator(name = "user_id_seq", strategy = "increment")
    @GeneratedValue(generator = "user_id_seq", strategy = GenerationType.AUTO)
    private Long id;
    private String username;
    private String password;
    private String email;



}
