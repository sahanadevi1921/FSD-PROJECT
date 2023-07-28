package com.example.demo.Controller;

import java.util.List;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.web.bind.annotation.DeleteMapping;
import org.springframework.web.bind.annotation.GetMapping;
import org.springframework.web.bind.annotation.PathVariable;
import org.springframework.web.bind.annotation.PostMapping;
import org.springframework.web.bind.annotation.PutMapping;
import org.springframework.web.bind.annotation.RequestBody;
import org.springframework.web.bind.annotation.RequestMapping;
import org.springframework.web.bind.annotation.RestController;

import com.example.demo.Service.FeedbackService;
import com.example.demo.model.Feedback;


@RestController
@RequestMapping("/Feedback")                                  
public class FeedbackController {
	
	@Autowired
	private FeedbackService service;                  
	
	@GetMapping("/{id}")
	public List<Feedback>  GetFeedback(){
		return service.getFeedback();
	}
	@PostMapping("/add")
	public Feedback AddFeedback(@RequestBody Feedback feedback) {
		return service.addFeedback(feedback);
	}
	@PutMapping("/{id}")
		public Feedback EditFeedback(@RequestBody Feedback feedback,@PathVariable Long id) {
			return service.editFeedback(id, feedback);
		}
	
	@DeleteMapping("/delete/{id}")
		public String DeleteFeedback(@PathVariable Long id) {
			return service.deleteFeedback(id);
		}                  
	

}
