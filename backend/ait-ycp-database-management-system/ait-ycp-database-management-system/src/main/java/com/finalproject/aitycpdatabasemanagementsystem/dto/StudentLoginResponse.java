package com.finalproject.aitycpdatabasemanagementsystem.dto;

public class StudentLoginResponse {
	private String firstName;
	private long prn;
	public StudentLoginResponse() {
		super();
	}
	public StudentLoginResponse(String firstName, long prn) {
		super();
		this.firstName = firstName;
		this.prn = prn;
	}
	public String getFirstName() {
		return firstName;
	}
	public void setFirstName(String firstName) {
		this.firstName = firstName;
	}
	public long getPrn() {
		return prn;
	}
	public void setPrn(long prn) {
		this.prn = prn;
	}
	@Override
	public String toString() {
		return "StudentLoginResponse [firstName=" + firstName + ", prn=" + prn + "]";
	}
	
}
