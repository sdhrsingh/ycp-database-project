package com.finalproject.aitycpdatabasemanagementsystem.controller;

import java.util.Optional;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.http.HttpStatus;
import org.springframework.http.ResponseEntity;
import org.springframework.web.bind.annotation.CrossOrigin;
import org.springframework.web.bind.annotation.DeleteMapping;
import org.springframework.web.bind.annotation.GetMapping;
import org.springframework.web.bind.annotation.PathVariable;
import org.springframework.web.bind.annotation.PostMapping;
import org.springframework.web.bind.annotation.PutMapping;
import org.springframework.web.bind.annotation.RequestBody;
import org.springframework.web.bind.annotation.RestController;

import com.finalproject.aitycpdatabasemanagementsystem.dto.StudentLoginRequest;
import com.finalproject.aitycpdatabasemanagementsystem.entities.Admin;
import com.finalproject.aitycpdatabasemanagementsystem.entities.Student;
import com.finalproject.aitycpdatabasemanagementsystem.services.StudentService;

@CrossOrigin(origins="*", allowedHeaders = "*")
@RestController
public class StudentController {
	@Autowired(required=false)
	private StudentService studentService;
	
	@GetMapping("/student/{prn}")
	public ResponseEntity<Object> getStudent(@PathVariable String prn){
		return this.studentService.getStudent(Long.parseLong(prn));
	}
	
	@PostMapping("/student")
	public ResponseEntity<Object> registerStudent(@RequestBody Student student) {
		return this.studentService.registerStudent(student);
	}
	
	@PutMapping("/student")
	public Student editStudent(@RequestBody Student student) {
		return this.studentService.editStudent(student);
	}
	
	@DeleteMapping("/student/{prn}")
	public ResponseEntity<HttpStatus> deleteStudent(@PathVariable String prn){
		try {
			this.studentService.deleteStudent(Long.parseLong(prn));
			return new ResponseEntity<>(HttpStatus.OK);
		}catch(Exception e) {
			return new ResponseEntity<>(HttpStatus.INTERNAL_SERVER_ERROR);
		}
	}
	
//	@PostMapping("/admin-login")
//	public ResponseEntity<Object> adminLogin(@RequestBody Admin admin) {
//		try {
//			return this.adminService.adminLogin(admin);
//		}catch(Exception e) {
//			return new ResponseEntity<>(HttpStatus.INTERNAL_SERVER_ERROR);
//		}
//	}
	
	@PostMapping("/student-login")
	public ResponseEntity<Object> studentLogin(@RequestBody StudentLoginRequest studentLoginRequest){
		try {
			return this.studentService.studentLogin(studentLoginRequest);
		}catch(Exception e) {
			return new ResponseEntity<>(HttpStatus.INTERNAL_SERVER_ERROR);
		}
	}
}
