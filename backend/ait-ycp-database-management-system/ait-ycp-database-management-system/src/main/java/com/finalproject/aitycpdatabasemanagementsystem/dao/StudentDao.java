package com.finalproject.aitycpdatabasemanagementsystem.dao;

import org.springframework.data.jpa.repository.JpaRepository;

import com.finalproject.aitycpdatabasemanagementsystem.entities.Student;

public interface StudentDao extends JpaRepository<Student, Long> {

}
