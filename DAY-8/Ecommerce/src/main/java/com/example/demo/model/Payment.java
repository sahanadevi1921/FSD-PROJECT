
package com.example.demo.model;

import jakarta.persistence.Entity;
import jakarta.persistence.Id;

@Entity
public class Payment {
	@Id
	private Long CardNumber;
	private String Cardholder;
	private String BankName;
	private Long cvc;
	private String Expirydate;             
	public Long getCardNumber() {
		return CardNumber;
	}
	public void setCardNumber(Long cardNumber) {
		CardNumber = cardNumber;
	}
	public String getCardholder() {
		return Cardholder;
	}
	public void setCardholder(String cardholder) {
		Cardholder = cardholder;
	}
	public String getBankName() {
		return BankName;
	}
	public void setBankName(String bankName) {
		BankName = bankName;
	}
	public Long getCvc() {
		return cvc;
	}
	public void setCvc(Long cvc) {
		this.cvc = cvc;
	}
	public String getExpirydate() {
		return Expirydate;
	}
	public void setExpirydate(String expirydate) {
		Expirydate = expirydate;
	}
	
	

}