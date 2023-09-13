package com.finalproject.aitycpdatabasemanagementsystem.dto;

import java.time.LocalDate;
import java.time.YearMonth;

public class StudentResponse {
	private long prn;
	private String firstName;
	private String lastName;
	private LocalDate dateOfBirth;
	private String gender;
	private String email;
	private long phone;
	private YearMonth joiningMonthAndYear;
	private String city;
	private float tenthMarks;
	private float twelthMarks;
	private float diplomaMarks;
	private float graduationMarks;
	private float postGraduationMarks;
	private int workExperience;
	public StudentResponse() {
		super();
	}
	public StudentResponse(long prn, String firstName, String lastName, LocalDate dateOfBirth, String gender,
			String email, long phone, YearMonth joiningMonthAndYear, String city, float tenthMarks, float twelthMarks,
			float diplomaMarks, float graduationMarks, float postGraduationMarks, int workExperience) {
		super();
		this.prn = prn;
		this.firstName = firstName;
		this.lastName = lastName;
		this.dateOfBirth = dateOfBirth;
		this.gender = gender;
		this.email = email;
		this.phone = phone;
		this.joiningMonthAndYear = joiningMonthAndYear;
		this.city = city;
		this.tenthMarks = tenthMarks;
		this.twelthMarks = twelthMarks;
		this.diplomaMarks = diplomaMarks;
		this.graduationMarks = graduationMarks;
		this.postGraduationMarks = postGraduationMarks;
		this.workExperience = workExperience;
	}
	public long getPrn() {
		return prn;
	}
	public void setPrn(long prn) {
		this.prn = prn;
	}
	public String getFirstName() {
		return firstName;
	}
	public void setFirstName(String firstName) {
		this.firstName = firstName;
	}
	public String getLastName() {
		return lastName;
	}
	public void setLastName(String lastName) {
		this.lastName = lastName;
	}
	public LocalDate getDateOfBirth() {
		return dateOfBirth;
	}
	public void setDateOfBirth(LocalDate dateOfBirth) {
		this.dateOfBirth = dateOfBirth;
	}
	public String getGender() {
		return gender;
	}
	public void setGender(String gender) {
		this.gender = gender;
	}
	public String getEmail() {
		return email;
	}
	public void setEmail(String email) {
		this.email = email;
	}
	public long getPhone() {
		return phone;
	}
	public void setPhone(long phone) {
		this.phone = phone;
	}
	public YearMonth getJoiningMonthAndYear() {
		return joiningMonthAndYear;
	}
	public void setJoiningMonthAndYear(YearMonth joiningMonthAndYear) {
		this.joiningMonthAndYear = joiningMonthAndYear;
	}
	public String getCity() {
		return city;
	}
	public void setCity(String city) {
		this.city = city;
	}
	public float getTenthMarks() {
		return tenthMarks;
	}
	public void setTenthMarks(float tenthMarks) {
		this.tenthMarks = tenthMarks;
	}
	public float getTwelthMarks() {
		return twelthMarks;
	}
	public void setTwelthMarks(float twelthMarks) {
		this.twelthMarks = twelthMarks;
	}
	public float getDiplomaMarks() {
		return diplomaMarks;
	}
	public void setDiplomaMarks(float diplomaMarks) {
		this.diplomaMarks = diplomaMarks;
	}
	public float getGraduationMarks() {
		return graduationMarks;
	}
	public void setGraduationMarks(float graduationMarks) {
		this.graduationMarks = graduationMarks;
	}
	public float getPostGraduationMarks() {
		return postGraduationMarks;
	}
	public void setPostGraduationMarks(float postGraduationMarks) {
		this.postGraduationMarks = postGraduationMarks;
	}
	public int getWorkExperience() {
		return workExperience;
	}
	public void setWorkExperience(int workExperience) {
		this.workExperience = workExperience;
	}
	@Override
	public String toString() {
		return "StudentResponse [prn=" + prn + ", firstName=" + firstName + ", lastName=" + lastName + ", dateOfBirth="
				+ dateOfBirth + ", gender=" + gender + ", email=" + email + ", phone=" + phone
				+ ", joiningMonthAndYear=" + joiningMonthAndYear + ", city=" + city + ", tenthMarks=" + tenthMarks
				+ ", twelthMarks=" + twelthMarks + ", diplomaMarks=" + diplomaMarks + ", graduationMarks="
				+ graduationMarks + ", postGraduationMarks=" + postGraduationMarks + ", workExperience="
				+ workExperience + "]";
	}
}
