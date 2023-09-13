package com.finalproject.aitycpdatabasemanagementsystem.entities;

import java.sql.Time;
import java.time.LocalDate;

import jakarta.persistence.Entity;
import jakarta.persistence.GeneratedValue;
import jakarta.persistence.Id;
import jakarta.persistence.JoinColumn;
import jakarta.persistence.ManyToOne;

@Entity
public class Schedule {
	@Id
	private int id;
	@ManyToOne
	@JoinColumn
	private Courses course;
	private String facultyName;
	private String lectureType;
	private LocalDate lectureDate;
	private Time startTime;
	private Time endTime;
	
	public Schedule() {
		super();
	}
	
	public Schedule(int id, Courses course, String facultyName, String lectureType, LocalDate lectureDate,
			Time startTime,Time endTime) {
		super();
		this.id = id;
		this.course = course;
		this.facultyName = facultyName;
		this.lectureType = lectureType;
		this.lectureDate = lectureDate;
		this.startTime = startTime;
		this.startTime = startTime;
	}
	
	public int getId() {
		return id;
	}
	public void setId(int id) {
		this.id = id;
	}
	public Courses getCourse() {
		return course;
	}
	public void setCourse(Courses course) {
		this.course = course;
	}
	public String getFacultyName() {
		return facultyName;
	}
	public void setFacultyName(String facultyName) {
		this.facultyName = facultyName;
	}
	public String getLectureType() {
		return lectureType;
	}
	public void setLectureType(String lectureType) {
		this.lectureType = lectureType;
	}
	public LocalDate getLectureDate() {
		return lectureDate;
	}
	public void setLectureDate(LocalDate lectureDate) {
		this.lectureDate = lectureDate;
	}
	public Time getStartTime() {
		return startTime;
	}
	public void setStartTime(Time startTime) {
		this.startTime = startTime;
	}
	public Time getEndTime() {
		return endTime;
	}

	public void setEndTime(Time endTime) {
		this.endTime = endTime;
	}

	@Override
	public String toString() {
		return "Schedule [id=" + id + ", course=" + course + ", facultyName=" + facultyName + ", lectureType="
				+ lectureType + ", lectureDate=" + lectureDate + ", startTime=" + startTime + "]";
	}
}
