
package com.iamneo.security.service;

import java.util.List;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Service;

import com.iamneo.security.entity.Payment;
import com.iamneo.security.repository.PaymentRepository;




@Service
public class PaymentService {
	
	@Autowired
	PaymentRepository repository;
public List<Payment> getPayment(){
	return repository.findAll();
}
	public Payment addPayment(Payment payment) {
		return repository.save(payment);
	}
	public Payment editPayment(Long CardNumber,Payment payment) {
		              Payment xpayment=repository.findById(CardNumber).orElse(null);
		              if(xpayment!=null) {
                    	  xpayment.setCardNumber(payment.getCardNumber());
		            	  xpayment.setCardholder(payment.getCardholder());
		            	  xpayment.setBankName(payment.getBankName());
		            	  xpayment.setCvc(payment.getCvc());
		            	  xpayment.setExpirydate(payment.getExpirydate());
		            	  return repository.saveAndFlush(xpayment);                               
		              }
		              else {
		            	  return null;
		              }
	}
	public String deletePayment(Long CardNumber) {
		Payment xpayment=repository.findById(CardNumber).orElse(null);
		if(xpayment!=null) {
			repository.deleteById(CardNumber);
			return "payment deleted"+ CardNumber;
		}                      
		else {
			return "invalid paymentCardNumber";
		}
	}

}
