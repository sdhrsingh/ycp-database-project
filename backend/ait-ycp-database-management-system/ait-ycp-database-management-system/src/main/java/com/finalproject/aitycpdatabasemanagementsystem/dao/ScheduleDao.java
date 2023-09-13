package com.finalproject.aitycpdatabasemanagementsystem.dao;

import org.springframework.data.jpa.repository.JpaRepository;

import com.finalproject.aitycpdatabasemanagementsystem.entities.Schedule;

public interface ScheduleDao extends JpaRepository<Schedule, Integer> {

}
