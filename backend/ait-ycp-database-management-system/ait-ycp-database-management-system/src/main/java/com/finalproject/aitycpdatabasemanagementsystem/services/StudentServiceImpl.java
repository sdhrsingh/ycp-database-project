package com.finalproject.aitycpdatabasemanagementsystem.services;

import java.util.Optional;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.http.HttpStatus;
import org.springframework.http.ResponseEntity;
import org.springframework.security.crypto.bcrypt.BCryptPasswordEncoder;
import org.springframework.stereotype.Service;

import com.finalproject.aitycpdatabasemanagementsystem.dao.StudentDao;
import com.finalproject.aitycpdatabasemanagementsystem.dto.AdminResponse;
import com.finalproject.aitycpdatabasemanagementsystem.dto.StudentLoginRequest;
import com.finalproject.aitycpdatabasemanagementsystem.dto.StudentLoginResponse;
import com.finalproject.aitycpdatabasemanagementsystem.dto.StudentResponse;
import com.finalproject.aitycpdatabasemanagementsystem.entities.Admin;
import com.finalproject.aitycpdatabasemanagementsystem.entities.Student;

@Service
public class StudentServiceImpl implements StudentService {
	
	@Autowired(required=false)
	private StudentDao studentDao;

	@Override
	public ResponseEntity<Object> getStudent(long prn) {
		// TODO Auto-generated method stub
		Student student2 = studentDao.findById(prn).orElse(null);
		if(student2 == null) {
			return ResponseEntity.status(HttpStatus.NOT_FOUND).body("Student not found");
		}
		StudentResponse studentResponse = new StudentResponse();
		studentResponse.setPrn(prn);
		studentResponse.setFirstName(student2.getFirstName());
		studentResponse.setLastName(student2.getLastName());
		studentResponse.setDateOfBirth(student2.getDateOfBirth());
		studentResponse.setGender(student2.getGender());
		studentResponse.setEmail(student2.getEmail());
		studentResponse.setPhone(student2.getPhone());
		studentResponse.setJoiningMonthAndYear(student2.getJoiningMonthAndYear());
		studentResponse.setCity(student2.getCity());
		studentResponse.setTenthMarks(student2.getTenthMarks());
		studentResponse.setTwelthMarks(student2.getTwelthMarks());
		studentResponse.setDiplomaMarks(student2.getDiplomaMarks());
		studentResponse.setGraduationMarks(student2.getGraduationMarks());
		studentResponse.setPostGraduationMarks(student2.getPostGraduationMarks());
		studentResponse.setWorkExperience(student2.getWorkExperience());
		return ResponseEntity.ok(studentResponse);
	}

	@Override
	public ResponseEntity<Object> registerStudent(Student student) {
		BCryptPasswordEncoder passwordEncoder = new BCryptPasswordEncoder();
		String hashedPassword = passwordEncoder.encode(student.getPassword());
		student.setPassword(hashedPassword);
		studentDao.save(student);
		return ResponseEntity.status(HttpStatus.ACCEPTED).body("Student Registered Successfully");
	}

	@Override
	public Student editStudent(Student student) {
		// TODO Auto-generated method stub
		studentDao.save(student);
		return student;
	}

	@Override
	public void deleteStudent(long parseLong) {
		// TODO Auto-generated method stub
		Student entity = studentDao.getOne(parseLong);
		studentDao.delete(entity);
	}

//	public ResponseEntity<Object> adminLogin(Admin admin) {
//	System.out.println("Before");
//	String id = admin.getId();
//	String password = admin.getPassword();
//	Admin admin2 = adminDao.findById(id).orElse(null);
//	System.out.println("After");
//	if(admin2 == null) {
//		return ResponseEntity.status(HttpStatus.NOT_FOUND).body("Id Not Registered");
//	}
//	boolean isPasswordCorrect = password.equals(admin2.getPassword());
//	if(!isPasswordCorrect) {
//		return ResponseEntity.status(HttpStatus.UNAUTHORIZED).body("Incorrect Password");
//	}
//	AdminResponse adminResponse = new AdminResponse();
//	adminResponse.setId(id);
//	System.out.println(adminResponse);
//    return ResponseEntity.ok(adminResponse);
//
//}
	
	@Override
	public ResponseEntity<Object> studentLogin(StudentLoginRequest studentLoginRequest){
		long prn = studentLoginRequest.getPrn();
		String password = studentLoginRequest.getPassword();
		Student student = studentDao.findById(prn).orElse(null);
		if(student == null) {
			return ResponseEntity.status(HttpStatus.NOT_FOUND).body("PRN Not Registered");
		}
//		boolen matched = passwordEncoder.matches("Hello_Passowrd_String",testPasswordEncoded);
		BCryptPasswordEncoder passwordEncoder = new BCryptPasswordEncoder(); 
		boolean isPasswordCorrect = passwordEncoder.matches(password, student.getPassword());
		if(!isPasswordCorrect) {
			return ResponseEntity.status(HttpStatus.UNAUTHORIZED).body("Incorrect Password");
		}
		StudentLoginResponse response = new StudentLoginResponse();
		response.setFirstName(student.getFirstName());
		response.setPrn(prn);
		return ResponseEntity.ok(response);
	}
}
