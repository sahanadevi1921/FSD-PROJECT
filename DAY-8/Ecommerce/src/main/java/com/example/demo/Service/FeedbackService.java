package com.example.demo.Service;

import java.util.List;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Service;

import com.example.demo.Repository.FeedbackRepository;
import com.example.demo.model.Feedback;


@Service
public class FeedbackService {
	
	@Autowired
	FeedbackRepository repository;
public List<Feedback> getFeedback(){
	return repository.findAll();
}
	public Feedback addFeedback(Feedback feedback) {
		return repository.save(feedback);
	}
	public Feedback editFeedback(Long id,Feedback feedback) {
		Feedback xfeedback=repository.findById(id).orElse(null);
		              if(xfeedback!=null) {
		            	  xfeedback.setFn(feedback.getFn());
		            	  xfeedback.setLn(feedback.getLn());
		            	  xfeedback.setEmail(feedback.getEmail());
		            	  xfeedback.setPhonenum(feedback.getPhonenum());
		            	  xfeedback.setQuery(feedback.getQuery());
		            	  return repository.saveAndFlush(xfeedback);
		              }
		              else {
		            	  return null;
		              }
	}
	public String deleteFeedback(Long id) {
		Feedback xfeedback=repository.findById(id).orElse(null);
		if(xfeedback!=null) {
			repository.deleteById(id);
			return "Feedback deleted"+ id;
		}
		else {
			return "invalid Feedbackid";
		}
	}

}
