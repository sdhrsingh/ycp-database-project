package com.finalproject.aitycpdatabasemanagementsystem.dao;

import java.util.Optional;

import org.springframework.data.jpa.repository.JpaRepository;

import com.finalproject.aitycpdatabasemanagementsystem.entities.Admin;

public interface AdminDao extends JpaRepository<Admin, String> {

}
