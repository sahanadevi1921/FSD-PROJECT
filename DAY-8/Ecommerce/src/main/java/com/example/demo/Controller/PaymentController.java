
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

import com.example.demo.Service.PaymentService;
import com.example.demo.model.Payment;

@RestController 
@RequestMapping("/payment")
public class PaymentController {
	@Autowired
	private PaymentService service;                  
	@GetMapping("/get")
	public List<Payment>  GetPayment(){
		return service.getPayment();
	}
	@PostMapping("/add")
	public Payment AddPayment(@RequestBody Payment payment) {
		return service.addPayment(payment);
	}
	@PutMapping("/{CardNumber}")
		public Payment EditPayment(@RequestBody Payment payment,@PathVariable Long CardNumber) {
			return service.editPayment(CardNumber, payment);
	}
	@DeleteMapping("/delete/{CardNumber}")
		public String DeletePayment(@PathVariable Long CardNumber) {
			return service.deletePayment(CardNumber);
	}                  
}
