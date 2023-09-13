package com.finalproject.aitycpdatabasemanagementsystem.dto;

public class StudentLoginRequest {
	private long prn;
	private String password;
	public StudentLoginRequest() {
		super();
	}
	public StudentLoginRequest(long prn, String password) {
		super();
		this.prn = prn;
		this.password = password;
	}
	public long getPrn() {
		return prn;
	}
	public void setPrn(long prn) {
		this.prn = prn;
	}
	public String getPassword() {
		return password;
	}
	public void setPassword(String password) {
		this.password = password;
	}
	@Override
	public String toString() {
		return "StudentLoginRequest [prn=" + prn + ", password=" + password + "]";
	}
	
}
