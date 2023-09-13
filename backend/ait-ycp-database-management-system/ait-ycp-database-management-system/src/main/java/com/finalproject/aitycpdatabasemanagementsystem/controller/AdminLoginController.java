package com.finalproject.aitycpdatabasemanagementsystem.controller;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.http.HttpStatus;
import org.springframework.http.ResponseEntity;
import org.springframework.web.bind.annotation.CrossOrigin;
import org.springframework.web.bind.annotation.PostMapping;
import org.springframework.web.bind.annotation.RequestBody;
import org.springframework.web.bind.annotation.RestController;

import com.finalproject.aitycpdatabasemanagementsystem.entities.Admin;
import com.finalproject.aitycpdatabasemanagementsystem.services.AdminService;

@CrossOrigin(origins="*", allowedHeaders = "*")
@RestController
public class AdminLoginController {
	@Autowired(required = false)
	private AdminService adminService;
	
//	@PostMapping("/courses")
//	public Course addCourse(@RequestBody Course course) {
//		return this.courseService.addCourse(course);
//	}
	
	@PostMapping("/admin-login")
	public ResponseEntity<Object> adminLogin(@RequestBody Admin admin) {
		try {
			return this.adminService.adminLogin(admin);
		}catch(Exception e) {
			return new ResponseEntity<>(HttpStatus.INTERNAL_SERVER_ERROR);
		}
	}
}
