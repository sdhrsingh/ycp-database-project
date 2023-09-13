package com.finalproject.aitycpdatabasemanagementsystem.dao;

import org.springframework.data.jpa.repository.JpaRepository;

import com.finalproject.aitycpdatabasemanagementsystem.entities.Courses;

public interface CoursesDao extends JpaRepository<Courses, Integer> {

}
