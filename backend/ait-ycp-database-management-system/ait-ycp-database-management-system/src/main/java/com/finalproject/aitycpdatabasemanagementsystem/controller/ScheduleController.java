package com.finalproject.aitycpdatabasemanagementsystem.controller;

import java.util.List;
import java.util.Optional;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.web.bind.annotation.CrossOrigin;
import org.springframework.web.bind.annotation.DeleteMapping;
import org.springframework.web.bind.annotation.GetMapping;
import org.springframework.web.bind.annotation.PathVariable;
import org.springframework.web.bind.annotation.PostMapping;
import org.springframework.web.bind.annotation.PutMapping;
import org.springframework.web.bind.annotation.RequestBody;
import org.springframework.web.bind.annotation.RestController;

import com.finalproject.aitycpdatabasemanagementsystem.dao.CoursesDao;
import com.finalproject.aitycpdatabasemanagementsystem.dao.ScheduleDao;
import com.finalproject.aitycpdatabasemanagementsystem.entities.Courses;
import com.finalproject.aitycpdatabasemanagementsystem.entities.Schedule;

@CrossOrigin(origins = "*", allowedHeaders = "*")
@RestController
public class ScheduleController {
	@Autowired(required=false)
    private  CoursesDao course;
	
	@Autowired(required=false)
    private ScheduleDao schedule;
	
	@PostMapping("/addSchedule")
	public Schedule addSchedule(@RequestBody Schedule add )
	{
		return schedule.save(add);
	}
	
	@GetMapping("/getSchedule_all")
	public List<Schedule> getSchedule_All()
	{
		return (List<Schedule>)schedule.findAll();		
	}
	
	@GetMapping("/getSchedule/{id}")
	public Optional<Schedule> getSchedule(@PathVariable int id) {
		return this.schedule.findById(id);
	}
	
	@PutMapping("/update_Schedule/{Id}")
	public Schedule update_schedule(@RequestBody  Schedule sch1)
	{
		return this.schedule.save(sch1);
	}
	
	@DeleteMapping("/delete_Schedule/{Id}")
	public void delete_schedule(@PathVariable Schedule Id)
	{
		schedule.delete(Id);
	}
	
	@DeleteMapping("/delete_ScheduleAll")
	public void delete_ScheduleAll()
	{
		schedule.deleteAll();
	}
	
	@GetMapping("/getCourses_All")
	public List<Courses> getCourses_All() {
	    return (List<Courses>)course.findAll();
	}
}
