package com.finalproject.aitycpdatabasemanagementsystem.controller;

import java.io.File;
import java.io.IOException;

import org.springframework.web.bind.annotation.PostMapping;
import org.springframework.web.bind.annotation.RequestParam;
import org.springframework.web.bind.annotation.RestController;
import org.springframework.web.multipart.MultipartFile;

@RestController
public class UploadAssignmentController {
	@PostMapping("/upload-assignment")
	public String uploadAssignment(@RequestParam("file") MultipartFile file) {
		if(file.isEmpty()) {
			return "File is empty";
		}
		
		try {
			String uploadFolder = "E:\\ait-ycp-student-managemenet-system\\assignments";
			File dest = new File(uploadFolder + "/" + file.getOriginalFilename());
			file.transferTo(dest);
			return "File uploaded successfully";
		}catch(IOException e) {
			e.printStackTrace();
			return "File upload failed";
		}
	}
}
