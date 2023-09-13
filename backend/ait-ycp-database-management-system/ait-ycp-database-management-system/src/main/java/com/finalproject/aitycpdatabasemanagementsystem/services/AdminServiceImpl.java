package com.finalproject.aitycpdatabasemanagementsystem.services;

import java.util.Optional;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.http.HttpStatus;
import org.springframework.http.ResponseEntity;
import org.springframework.stereotype.Service;

import com.finalproject.aitycpdatabasemanagementsystem.dao.AdminDao;
import com.finalproject.aitycpdatabasemanagementsystem.dto.AdminResponse;
import com.finalproject.aitycpdatabasemanagementsystem.entities.Admin;

@Service
public class AdminServiceImpl implements AdminService {
	@Autowired(required = false)
	private AdminDao adminDao;
	
//	@Autowired(required = false)
//	public AdminResponse adminResponse;

	@Override
	public ResponseEntity<Object> adminLogin(Admin admin) {
		System.out.println("Before");
		String id = admin.getId();
		String password = admin.getPassword();
		Admin admin2 = adminDao.findById(id).orElse(null);
		System.out.println("After");
		if(admin2 == null) {
			return ResponseEntity.status(HttpStatus.NOT_FOUND).body("Id Not Registered");
		}
		boolean isPasswordCorrect = password.equals(admin2.getPassword());
		if(!isPasswordCorrect) {
			return ResponseEntity.status(HttpStatus.UNAUTHORIZED).body("Incorrect Password");
		}
		AdminResponse adminResponse = new AdminResponse();
		adminResponse.setId(id);
		System.out.println(adminResponse);
        return ResponseEntity.ok(adminResponse);

	}

}
