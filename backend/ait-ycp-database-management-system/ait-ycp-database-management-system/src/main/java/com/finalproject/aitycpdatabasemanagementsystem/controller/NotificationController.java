package com.finalproject.aitycpdatabasemanagementsystem.controller;

import java.util.List;
import java.util.Optional;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.http.HttpStatus;
import org.springframework.http.ResponseEntity;
import org.springframework.web.bind.annotation.CrossOrigin;
import org.springframework.web.bind.annotation.DeleteMapping;
import org.springframework.web.bind.annotation.GetMapping;
import org.springframework.web.bind.annotation.PathVariable;
import org.springframework.web.bind.annotation.PostMapping;
import org.springframework.web.bind.annotation.PutMapping;
import org.springframework.web.bind.annotation.RequestBody;
import org.springframework.web.bind.annotation.RequestMapping;
import org.springframework.web.bind.annotation.RestController;

import com.finalproject.aitycpdatabasemanagementsystem.dao.NotificationDao;
import com.finalproject.aitycpdatabasemanagementsystem.entities.Notification;

@CrossOrigin(origins="*", allowedHeaders = "*")
@RestController
@RequestMapping("/api/notifications")
public class NotificationController {
	@Autowired(required=false)
	private NotificationDao notificationDao;
	
	@PostMapping
	public Notification createNotification(@RequestBody Notification notification) {

		return notificationDao.save(notification);
	}
	
	@GetMapping
    public List<Notification> getAllNotifications() {
        return notificationDao.findAll();
    }
	
	@GetMapping("/{id}")
    public Optional<Notification> getNotificationById(@PathVariable Long id) {
        return notificationDao.findById(id);
    }
	
	@PutMapping("/{id}")
	public Notification updateNotification(@PathVariable Long id, @RequestBody Notification updatedNotification) {
		updatedNotification.setId(id); // Ensure the ID matches the path variable
		return notificationDao.save(updatedNotification);
	}
	
	@DeleteMapping("/{id}")
	public ResponseEntity<Object> deleteNotification(@PathVariable Long id) {
		notificationDao.deleteById(id);
		return ResponseEntity.status(HttpStatus.ACCEPTED).body("Notification deleted successfully");
	}
}
