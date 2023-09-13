package com.finalproject.aitycpdatabasemanagementsystem.dao;

import org.springframework.data.jpa.repository.JpaRepository;

import com.finalproject.aitycpdatabasemanagementsystem.entities.Notification;

public interface NotificationDao extends JpaRepository<Notification, Long> {

}
