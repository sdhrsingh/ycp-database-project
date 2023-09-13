package com.finalproject.aitycpdatabasemanagementsystem.services;

import org.springframework.http.ResponseEntity;
import org.springframework.stereotype.Service;

import com.finalproject.aitycpdatabasemanagementsystem.entities.Admin;


public interface AdminService {
	public ResponseEntity<Object> adminLogin(Admin admin);
}
