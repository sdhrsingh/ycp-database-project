package com.finalproject.aitycpdatabasemanagementsystem.dto;

public class AdminResponse {
	private String id;

	public AdminResponse() {
		super();
	}

	public AdminResponse(String id) {
		super();
		this.id = id;
	}

	public String getId() {
		return id;
	}

	public void setId(String id) {
		this.id = id;
	}

	@Override
	public String toString() {
		return "AdminResponse [id=" + id + "]";
	}
	
}
