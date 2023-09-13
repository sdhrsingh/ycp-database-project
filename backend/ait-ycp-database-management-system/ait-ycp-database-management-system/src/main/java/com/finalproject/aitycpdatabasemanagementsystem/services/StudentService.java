package com.finalproject.aitycpdatabasemanagementsystem.services;

import java.util.Optional;

import org.springframework.http.ResponseEntity;

import com.finalproject.aitycpdatabasemanagementsystem.dto.StudentLoginRequest;
import com.finalproject.aitycpdatabasemanagementsystem.entities.Student;

public interface StudentService {
	public ResponseEntity<Object> getStudent(long prn);
	
	public ResponseEntity<Object> registerStudent(Student student);
	
	public Student editStudent(Student student);
	
	public void deleteStudent(long parseLong);
	
	public ResponseEntity<Object> studentLogin(StudentLoginRequest studentLoginRequest);
}
